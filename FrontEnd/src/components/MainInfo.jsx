import React from "react";
import styles from "./MainInfo.module.css";


function MainInfo() {
    return(
        <>
            <div className={styles.title_description_container}>
                <div className={styles.title}>
                    <div className={styles.title_text}>Bienvenido</div>
                </div>
                <div className={styles.main_description}>
                    <div className={styles.description_text}>
                        En esta página podrás calcular el puntaje de desempeño de un empleado. El cálculo se basa en un modelo de regresión lineal aplicado a las horas de capacitación, la antigüedad y la calificación previa.
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainInfo;