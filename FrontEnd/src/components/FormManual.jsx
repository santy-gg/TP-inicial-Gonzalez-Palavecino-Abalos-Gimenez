import React from "react";
import styles from "./FormManual.module.css";

function FormManual() {
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

        <form className={styles.formulario_manual}>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>
              Horas de Capacitación
            </label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0"
            ></input>
          </div>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>Antigüedad</label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0"
            ></input>
          </div>
          <div className={styles.group_box}>
            <label className={styles.etiqueta_form}>Calificación Previa</label>
            <input
              type="number"
              className={styles.input_manual}
              placeholder="0.0"
            ></input>
          </div>
          <div className={styles.buttons_manual}>
            <button className={styles.form_button} type="submit">
              Predecir
            </button>
            <button className={styles.form_button}>Cancelar</button>
          </div>
        </form>
        <div className={styles.prediccion_manual}>
          <h2>Resultado de la prediccion:</h2>
          <p className={styles.resultado_manual}>
            prediccion (hay que integrar el script)
          </p>
        </div>
      </div>
    </>
  );
}

export default FormManual;
