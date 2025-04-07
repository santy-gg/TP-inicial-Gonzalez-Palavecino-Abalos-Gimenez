import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoadCsvHeader.module.css";
export const LoadCsvHeader = () => {
  return (
    <header>
      <nav>
        <Link 
          to={"/"} 
          className={styles.back_btn}
        >
          Volver al inicio
        </Link>
      </nav>
    </header>
  );
};
