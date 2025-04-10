import React from "react";
import styles from "./ModelBtnControler.module.css";

function ModelBtnControler({ handleBtnClick, selectedFile, setModelResults }) {
  const handleTrainModel = async () => {
    if (!selectedFile) {
      alert(
        "Por favor, selecciona un archivo CSV antes de entrenar el modelo."
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        "https://tp-inicial-gonzalez-palavecino-abalos.onrender.com/upload_csv",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      alert("Modelo entrenado con éxito.");
      setModelResults(data);
      console.log(data);
    } catch (error) {
      console.error("Error al entrenar el modelo:", error);
      alert(
        "Hubo un error al entrenar el modelo. Revisa la consola para más detalles."
      );
    }
  };

  return (
    <>
      <div className={styles.model_btn_controler_container}>
        <div className={styles.btn_cont}>
          <button
            onClick={handleBtnClick}
            className={`${styles.general_btn} ${styles.instructions_btn}`}
          >
            Intrucciones de uso
          </button>
          <button
            onClick={handleTrainModel}
            className={`${styles.general_btn} ${styles.train_model_btn}`}
          >
            Entrenar modelo
          </button>
        </div>
      </div>
    </>
  );
}

export default ModelBtnControler;
