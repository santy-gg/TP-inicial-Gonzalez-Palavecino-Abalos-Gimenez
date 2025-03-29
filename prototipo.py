##prototipo de regresion lineal

# Importo las librerías necesarias
import numpy as np  
import pandas as pd  
import matplotlib.pyplot as plt  
from sklearn.linear_model import LinearRegression  

# Leo el dataset desde el archivo CSV
df = pd.read_csv('example.csv')  

# Selecciono las columnas para la regresión
x = df[["Horas_capacitacion", "Antiguedad", "Calificacion_previa"]]
y = df['Puntaje_desempeño']  


#Graficamos los datos cuando nos lo da el modelo
# plt.scatter(x, y, color='blue')
# plt.xlabel('Puntaje de desempeño real')
# plt.ylabel('Puntaje de desempeño predichos')
# plt.title('Comparacion entre valores reales y predichos')
# plt.grid(True)
# plt.show()