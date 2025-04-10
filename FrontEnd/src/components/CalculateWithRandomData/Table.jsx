import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";

function Table() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tp-inicial-gonzalez-palavecino-abalos.onrender.com/random_data_with_prediction"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setTableData(jsonData.data_with_predictions);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Antiguedad</th>
          <th className={styles.th}>Calificacion previa</th>
          <th className={styles.th}>Horas capacitacion</th>
          <th className={styles.th}>Puntaje desempeño predicho</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className={styles.td}>{row.Antiguedad}</td>
            <td className={styles.td}>{row.Calificacion_previa}</td>
            <td className={styles.td}>{row.Horas_capacitacion}</td>
            <td className={styles.td}>{row.Puntaje_desempeño_predicho}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
