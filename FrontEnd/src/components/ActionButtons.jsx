import React from "react";
import styles from "./ActionButtons.module.css";
import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const navigate = useNavigate();

  const handleAddManual = () => {
    navigate("/ingresar-datos-manualmente");
  };
<<<<<<< HEAD
=======

  // C:\Users\leosa\Desktop\TP-inicial-Gonzalez-Palavecino-Abalos-Gimenez\FrontEnd\src\Pages\AddManual.jsx
>>>>>>> ce27328b28c46e9da1b2d8678dc53616208930a3
  return (
    <>
      <div className={styles.action_buttons_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>Selecciona una opcion</div>
        </div>
        <div className={styles.buttons_container}>
          <button
            onClick={() =>  navigate('/ingresar-csv')}
            className={`${styles.csv_button} ${styles.general_button_style}`}
          >
            Ingresar archivo CSV
          </button>
          <button
            className={`${styles.random_button} ${styles.general_button_style}`}
          >
            Calcular con datos random
          </button>
          <button
            onClick={handleAddManual}
            className={`${styles.manually_button} ${styles.general_button_style}`}
          >
            Ingresar datos manualmente
          </button>
        </div>
      </div>
    </>
  );
}

export default ActionButtons;