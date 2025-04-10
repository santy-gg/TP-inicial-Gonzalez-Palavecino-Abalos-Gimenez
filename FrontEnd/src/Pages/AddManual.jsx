import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormManual from "../components/AddManual/FormManual";
import styles from "./AddManual.module.css";
import flechaAtras from "../../assets/flecha_atras.png";

//Esqueleto de la interfaz para agregar datos manualmente y realizar una predicción
//se usa el formulario de FormManual.
function AddManual() {
  const navigate = useNavigate();
  const onClick = () => navigate("/");

  return (
    <div className={styles.add_manual_container}>
      <section className={styles.form_manual_section}>
        <FormManual />{" "}
        <img
          onClick={onClick}
          className={styles.flecha_atras}
          src={flechaAtras}
        />
      </section>
    </div>
  );
}

export default AddManual;
