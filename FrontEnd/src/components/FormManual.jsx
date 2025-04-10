import React, { useState } from "react";
import styles from "./FormManual.module.css";

//Formulario para realizar la prediccion ingresando manualmente tres datos individuales.

function FormManual() {
  const [horas_capacitacion, setHoras_capacitacion] = useState("");
  const [antiguedad, setAntiguedad] = useState("");
  const [calificacion_previa, setCalificacion_previa] = useState("");
  const [predictionResult, setPredictionResult] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //preparo los datos que voy a enviar a la api
    const data = {
      Horas_capacitacion: horas_capacitacion,
      Antiguedad: antiguedad,
      Calificacion_previa: calificacion_previa,
    };

    try {
      //llamo al endpoint correspondiente de la api
      const response = await fetch(
        "http://127.0.0.1:5000/ingresar_manualmente/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Envía los datos como JSON
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }

      const result = await response.json(); // Parsear la respuesta como JSON
      setPredictionResult(result.prediccion_manual); // Usa el valor de la predicción en la respuesta
      console.log(predictionResult);
    } catch (err) {
      console.error("Error llamando a la API:", err);
      setError(
        "Hubo un problema al obtener la predicción. Intenta nuevamente."
      );
    }
  };

  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.intro_manual}>
          <h1 className={styles.titulo_form}>Ingrese datos del empleado</h1>
          <p className={styles.parrafo_manual}>
            El modelo de regresión lineal predecirá el desempeño del empleado
            con los datos ingresados
          </p>
        </div>

        <form className={styles.formulario_manual} onSubmit={handleSubmit}>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>
              Horas de Capacitación
            </label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0"
              value={horas_capacitacion}
              onChange={(e) => setHoras_capacitacion(e.target.value)}
            ></input>
          </div>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>Antigüedad</label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0"
              value={antiguedad}
              onChange={(e) => setAntiguedad(e.target.value)}
            ></input>
          </div>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>Calificación Previa</label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0.0"
              value={calificacion_previa}
              onChange={(e) => setCalificacion_previa(e.target.value)}
            ></input>
          </div>
          <div className={styles.buttons_manual}>
            <button className={styles.form_button} type="submit">
              Predecir
            </button>
          </div>
        </form>
        <div className={styles.prediccion_manual}>
          <h2>Resultado de la prediccion:</h2>
          <p className={styles.resultado_manual}>{predictionResult}</p>
        </div>
      </div>
    </>
  );
}
//se piden los tres datos al usuario, Horas_capacitacion, Antiguedad y Calificacion_previa y se la envia a la api
//ñuego la api realiza la prediccion y es mostrado en pantalla en Resultado de la prediccion con la variable predictionResult.
export default FormManual;
