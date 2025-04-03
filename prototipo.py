##prototipo de regresion lineal

# Importo las librerías necesarias
import numpy as np  
import pandas as pd  
import os
##import matplotlib.pyplot as plt  
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression  
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Leo el dataset desde el archivo CSV
filepath = r"./DataSet_desempenio.csv"
df = pd.read_csv(filepath, encoding="utf-8")  
print(df)

#como todos los datos que nos interesan no son categoricos no hace falta hacer ninguna transformacion
#dividimos las caracteristicas del objetivo
#x representa a las caracteristicas. Se elimino las columnas que no nos interesa para el entrenamiento.
X = df.drop(['ID','Nombre', 'Apellido', 'Puntaje_desempeño'], axis=1)
#y representa el objetivo => Puntaje_desempeño
y = df["Puntaje_desempeño"] 

#dividimos el dataset en un conjunto de entrenamiento y uno de prueba
#test_size=0.4 40% de data es para test y 60% para training
#random_state=1 la division es constante, la misma division aleatoria cada vez
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size = 0.4, random_state = 1)

#Creamos el modelo de regresion lineal
model = LinearRegression()

#Entrenamos el modelo con los datos de entrenamiento
model.fit(x_train, y_train)

#Momentaniamente muestro los coeficientes y el intercepto
print('Coeficientes:', model.coef_)
print('Intercepcion', model.intercept_)

# Realizamos predicciones con el conjunto de prueba
y_pred = model.predict(x_test)

# Calculamos el MSE (Error Cuadrático Medio)
mse = mean_squared_error(y_test, y_pred)
print(f'Error Cuadrático Medio (MSE): {mse}')

y_train_pred = model.predict(x_train)
mse_train = mean_squared_error(y_train, y_train_pred)
print(f'MSE en conjunto de entrenamiento: {mse_train}')
print(f'MSE en conjunto de prueba: {mse}')

print()

print('Datos a testear:')
print(x_train)

print('Resultados de los datos de pruebas: ', np.round(y_pred).astype(int))

print()
print()
def show_menu():
    print("""
    ******************************************
    *                  MENÚ                  *
    ******************************************
    *         Seleccione una opción:         *
    ******************************************
    *    1.  Cargar datos manuales           *
    *    2.  Salir                           *
    ******************************************
    """)

def show_inputs():
    horas_capacitacion = int(input('Ingrese las horas de capacitacion: '))
    antiguedad = int(input('Ingrese los años de antiguedad: '))
    Calificacion_previa = int(input('Ingrese la calificacion previa: '))

    nuevo_desempeño = np.array([[horas_capacitacion,antiguedad,Calificacion_previa]])

    nueva_prediccion = model.predict(nuevo_desempeño)

    print(f'Predicción de puntaje: {round(nueva_prediccion[0],0)}')

isFinish = False

while not isFinish:

    show_menu()

    try:
        opcion = int(input('Ingrese una opcion: '))
    
        if opcion not in (1, 2):
            print('Ingrese una opción válida')
        elif opcion == 1:
            os.system('cls' if os.name == 'nt' else 'clear')
            show_inputs()
        elif opcion == 2:
            isFinish = True
    except:
        print('Caracter ingresado invalido, ingrese un caracter numerico')
