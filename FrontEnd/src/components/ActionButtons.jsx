import React from "react";
import styles from "./ActionButtons.module.css";

function ActionButtons() {
    return(
        <>
            <div className={styles.action_buttons_container}>
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        Selecciona una opcion
                    </div>
                </div>
                <div className={styles.buttons_container}>
                <button className={`${styles.csv_button} ${styles.general_button_style}`}>Ingresar archivo CSV</button>
                <button className={`${styles.random_button} ${styles.general_button_style}`}>Calcular con datos random</button>
                <button className={`${styles.manually_button} ${styles.general_button_style}`}>Ingresar datos manualmente</button>
                </div>
            </div>
        </>
    );
};

export default ActionButtons;