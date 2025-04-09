import React from "react";
import styles from "./results.module.css";

function Results({modelResults}){
  return (
    <>
      {modelResults.test_data_with_predictions && (
        <div className={styles.results_container}>
        <span>Resultados</span>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Puntaje desempeño</th>
              <th scope="col">Antiguedad</th>
              <th scope="col">Puntaje previo</th>
              <th scope="col">Puntaje desempeño</th>
            </tr>
          </thead>
          <tbody>
            {modelResults.test_data_with_predictions.map((result, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{result.Horas_capacitacion}</td>
                <td>{result.Antiguedad }</td>
                <td>{result.Calificacion_previa}</td>
                <td>{result.Puntaje_desempeño_predicho.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </>
  );
};

export default Results;