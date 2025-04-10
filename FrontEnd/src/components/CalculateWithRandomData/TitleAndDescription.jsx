import React from "react";
import styles from "./TitleAndDescription.module.css"

function TitleAndDescription () {
    return(
        <>
            <div className={styles.main_div}>
                <span className={styles.title}>Calcular con datos random</span>
                <p className={styles.description}>Se han generado datos random, apartir de ellos se ha calculado el puntaje de desempeño aplicando un modelo de regresion lineal.</p>
            </div>
        </>
    );
};

export default TitleAndDescription;