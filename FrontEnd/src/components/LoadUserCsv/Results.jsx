import React from "react";
import styles from "./results.module.css";

export const Results = () => {
  return (
    <>
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
            <tr>
              <th scope="row">1</th>
              <td>12</td>
              <td>3</td>
              <td>78</td>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>35</td>
              <td>7</td>
              <td>92</td>
              <td>38</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>42</td>
              <td>5</td>
              <td>85</td>
              <td>39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
