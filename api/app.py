from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import random

app = Flask(__name__)
CORS(app)

# Cargar el dataset y entrenar el modelo (lo hacemos al inicio)
filepath = r"./DataSet_desempenio.csv"
model = None
mse_train = None
mse_test = None
x_train = None
x_test = None
y_train = None
y_test = None
y_train_pred = None
y_test_pred = None

try:
    df = pd.read_csv(filepath, encoding="utf-8")
    X_cols = ['Horas_capacitacion', 'Antiguedad ', 'Calificacion_previa']
    y_col = "Puntaje_desempeño"
    X = df[X_cols]
    y = df[y_col]

    # Inspección inicial de X e y
    print("Primeras 5 filas de X (características) antes de división:")
    print(X.head())
    print("\nPrimeras 5 filas de y (variable objetivo) antes de división:")
    print(y.head())

    # Cálculo de la matriz de correlación (solo para columnas numéricas relevantes)
    print("\nMatriz de Correlación:")
    print(df[['Horas_capacitacion', 'Antiguedad ', 'Calificacion_previa', 'Puntaje_desempeño']].corr())

    x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

    # Inspección de los conjuntos divididos
    print("\nPrimeras 5 filas de x_train:")
    print(x_train.head())
    print("\nPrimeras 5 filas de x_test:")
    print(x_test.head())
    print("\nÍndices de y_train[:5]:", y_train.head().index)
    print("Índices de y_test[:5]:", y_test.head().index)
    print("\nÍndices de x_train[:5]:", x_train.head().index)
    print("\nÍndices de x_test[:5]:", x_test.head().index)

    model = LinearRegression()
    model.fit(x_train, y_train)
    y_train_pred = model.predict(x_train)
    y_test_pred = model.predict(x_test)
    mse_train = mean_squared_error(y_train, y_train_pred)
    mse_test = mean_squared_error(y_test, y_test_pred)
    print("\nModelo de regresión lineal entrenado.")
    print("Primeras 5 predicciones en entrenamiento:", y_train_pred[:5])
    print("Primeros 5 valores reales en entrenamiento:", y_train.head().values)
    print("Primeras 5 predicciones en prueba:", y_test_pred[:5])
    print("Primeros 5 valores reales en prueba:", y_test.head().values)
    print("Tamaño de x_train:", len(x_train))
    print("Tamaño de x_test:", len(y_test))
    print("Tamaño de y_train:", len(y_train))
    print("Tamaño de y_test:", len(y_test))
    print("¿Hay elementos comunes en los índices de entrenamiento y prueba?",
          set(x_train.index).intersection(x_test.index))
except FileNotFoundError:
    print(f"Error: No se encontró el archivo '{filepath}'.")
except KeyError as e:
    print(f"Error de clave al cargar datos: {e}")
    df = None

@app.route('/model_metrics', methods=['GET'])
def get_model_metrics():
    """Devuelve el MSE del conjunto de entrenamiento y prueba sin redondeo."""
    if mse_train is not None and mse_test is not None:
        return jsonify({'mse_train': mse_train, 'mse_test': mse_test})
    else:
        return jsonify({'error': 'Las métricas del modelo no están disponibles (posible error al cargar datos o entrenar).'}), 500

@app.route('/random_data_with_prediction', methods=['GET'])
def get_random_data_with_prediction():
    """
    Genera 60 datos aleatorios y predice el Puntaje_desempeño para cada uno.
    Devuelve un JSON con los datos generados y sus predicciones.
    """
    if df is None or model is None:
        return jsonify({'error': 'No se pudieron cargar los datos o el modelo.'}), 500

    num_samples = 30
    generated_data_with_predictions = []

    min_horas = int(df['Horas_capacitacion'].min())
    max_horas = int(df['Horas_capacitacion'].max())
    min_antiguedad = int(df['Antiguedad '].min())
    max_antiguedad = int(df['Antiguedad '].max())
    min_calificacion = int(df['Calificacion_previa'].min())
    max_calificacion = int(df['Calificacion_previa'].max())

    for _ in range(num_samples):
        horas_capacitacion = random.randint(min_horas, max_horas)
        antiguedad = random.randint(min_antiguedad, max_antiguedad)
        calificacion_previa = random.randint(min_calificacion, max_calificacion)

        input_features = np.array([[horas_capacitacion, antiguedad, calificacion_previa]])
        prediction = model.predict(input_features)[0]

        generated_data_with_predictions.append({
            'Horas_capacitacion': horas_capacitacion,
            'Antiguedad': antiguedad,
            'Calificacion_previa': calificacion_previa,
            'Puntaje_desempeño_predicho': round(prediction, 2)
        })

    return jsonify({'data_with_predictions': generated_data_with_predictions,
                    'message': f'Se generaron y predijeron {num_samples} datos.'})

@app.route('/upload_csv', methods=['POST'])
def upload_csv():
    """
    Endpoint para cargar un nuevo CSV, entrenar el modelo y devolver los datos de prueba con predicciones.
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No se encontró ningún archivo en la solicitud.'}), 400

    file = request.files['file']
    df = pd.read_csv(file)

    try:
        X = df[['Horas_capacitacion', 'Antiguedad ', 'Calificacion_previa']]
        y = df['Puntaje_desempeño']

        x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

        model = LinearRegression()
        model.fit(x_train, y_train)

        y_test_pred = model.predict(x_test)

        test_results = x_test.copy()
        test_results['Puntaje_desempeño_real'] = y_test.values
        test_results['Puntaje_desempeño_predicho'] = y_test_pred

        test_results_json = test_results.to_dict(orient='records')

        return jsonify({
            'message': 'Modelo entrenado y predicciones generadas correctamente.',
            'test_data_with_predictions': test_results_json
        }), 200

    except Exception as e:
        return jsonify({'error': f'Error al procesar los datos o entrenar el modelo: {str(e)}'}), 500
if __name__ == '__main__':
    app.run(debug=True)