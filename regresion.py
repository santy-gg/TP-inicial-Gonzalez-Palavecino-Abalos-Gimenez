import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Define la ruta del archivo CSV que contiene los datos
filepath = 'tu_archivo_con_puntaje.csv'

try:
    # Lee el archivo CSV en un DataFrame de pandas
    df = pd.read_csv(filepath, encoding="utf-8")

    # --- Preprocesamiento de los datos ---
    # Elimina la columna 'nombre' si existe, ya que no se utilizará para el modelo
    if 'nombre' in df.columns:
        df = df.drop('nombre', axis=1)

    # Define un diccionario para mapear las áreas categóricas a valores numéricos
    area_mapping = {'administracion': 0, 'ventas': 1, 'seguridad': 2}

    # Aplica el mapeo a la columna 'area' para crear una nueva columna numérica 'area_encoded'
    df['area_encoded'] = df['area'].map(area_mapping)

    # Define la lista de columnas que se utilizarán como características (variables predictoras)
    X_cols = ['area_encoded', 'puntaje', 'cantidad_proyectos',
              'personas_equipo', 'horas_extra', 'asistencia_puntualidad']

    # Define el nombre de la columna que se utilizará como variable objetivo (lo que queremos predecir)
    y_col = "desempeño_futuro"

    # Verifica si todas las columnas necesarias existen en el DataFrame
    if all(col in df.columns for col in X_cols) and y_col in df.columns and 'area_encoded' in df.columns:
        # Crea un DataFrame 'X' con las columnas de características
        X = df[X_cols].copy()
        # Crea una Serie 'y' con la columna de la variable objetivo
        y = df[y_col].copy()

        # Asegura que la columna 'horas_extra' sea de tipo entero (True -> 1, False -> 0)
        X['horas_extra'] = X['horas_extra'].astype(int)

        # --- Inspección inicial de los datos (opcional) ---
        print("Primeras 5 filas de X (características):")
        print(X.head())
        print("\nPrimeras 5 filas de y (variable objetivo):")
        print(y.head())

        # --- Cálculo de la matriz de correlación (opcional) ---
        print("\nMatriz de Correlación entre características y variable objetivo:")
        print(pd.concat([X, y], axis=1).corr())

        # --- División de los datos en conjuntos de entrenamiento y prueba ---
        # 'x_train' y 'y_train' se utilizarán para entrenar el modelo
        # 'x_test' y 'y_test' se utilizarán para evaluar el rendimiento del modelo en datos no vistos
        x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)
        # 'test_size=0.3' indica que el 30% de los datos se utilizará para la prueba
        # 'random_state=1' asegura que la división sea la misma cada vez que se ejecuta el código (para reproducibilidad)

        # --- Creación y entrenamiento del modelo de regresión lineal ---
        # Inicializa el modelo de regresión lineal
        model = LinearRegression()
        # Entrena el modelo utilizando los datos de entrenamiento
        model.fit(x_train, y_train)

        # --- Evaluación del modelo ---
        # Realiza predicciones sobre los conjuntos de entrenamiento y prueba
        y_train_pred = model.predict(x_train)
        y_test_pred = model.predict(x_test)

        # Calcula el Error Cuadrático Medio (MSE) para evaluar el rendimiento del modelo
        # Un valor más bajo de MSE indica un mejor ajuste del modelo a los datos
        mse_train = mean_squared_error(y_train, y_train_pred)
        mse_test = mean_squared_error(y_test, y_test_pred)

        print("\nModelo de regresión lineal entrenado.")
        print(f"MSE en el conjunto de entrenamiento: {mse_train:.2f}")
        print(f"MSE en el conjunto de prueba: {mse_test:.2f}")

        # --- Predicción para un nuevo empleado (ejemplo) ---
        print("\n--- Predicción para un nuevo empleado ---")
        nuevo_empleado = pd.DataFrame({
            'area_encoded': [1],  # 1 representa el área de ventas (según el mapeo)
            'puntaje': [88],
            'cantidad_proyectos': [4],
            'personas_equipo': [5],
            'horas_extra': [True],
            'asistencia_puntualidad': [92]  # En escala 0-100
        })
        nuevo_empleado['horas_extra'] = nuevo_empleado['horas_extra'].astype(int)

        # Realiza la predicción del desempeño futuro para el nuevo empleado
        prediccion_futura = model.predict(nuevo_empleado)
        print(f"Predicción de desempeño futuro para el nuevo empleado: {prediccion_futura[0]:.2f}")

    else:
        print("Error: No se encontraron todas las columnas necesarias en el archivo.")

except FileNotFoundError:
    print(f"Error: No se encontró el archivo '{filepath}'.")
except KeyError as e:
    print(f"Error de clave al cargar datos: {e}")
    df = None