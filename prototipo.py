##prototipo de regresion lineal

# Importo las librerías necesarias
import numpy as np  
import pandas as pd  
##import matplotlib.pyplot as plt  
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression  
from sklearn.model_selection import train_test_split

# Leo el dataset desde el archivo CSV
filepath = r"./DataSet_desempenio.csv"
df = pd.read_csv(filepath, encoding="utf-8")  
print(df)

#como todos los datos que nos interesan no son categoricos no hace falta hacer ninguna transformacion
#dividimos las caracteristicas del objetivo
#x representa a las caracteristicas. Se elimino las columnas que no nos interesa para el entrenamiento.
X = df.drop(['Nombre', 'Apellido', 'Puntaje_desempeño'], axis=1)
#y representa el objetivo => Puntaje_desempeño
y = df["Puntaje_desempeño"] 

#dividimos el dataset en un conjunto de entrenamiento y uno de prueba
#test_size=0.4 40% de data es para test y 60% para training
#random_state=1 la division es constante, la misma division aleatoria cada vez
x_train, x_test, y_train, x_test = train_test_split(X, y, test_size = 0.4, random_state = 1)

#Graficamos los datos cuando nos lo da el modelo
# plt.scatter(x, y, color='blue')
# plt.xlabel('Puntaje de desempeño real')
# plt.ylabel('Puntaje de desempeño predichos')
# plt.title('Comparacion entre valores reales y predichos')
# plt.grid(True)
# plt.show()