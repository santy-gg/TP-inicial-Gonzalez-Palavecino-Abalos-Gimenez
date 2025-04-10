import React, { useRef } from "react";
import styles from "./UploadCsv.module.css";
import logo from "../../../assets/upload_logo.png";

function UploadCsv({ setSelectedFile }){
  const fileInputReader = useRef(null);

  const handleBtnClick = () => {
    fileInputReader.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); 
  };

  return (
    <>
      <div className={styles.upload_csv_container}>
        <div className={styles.upload_files_cont}>
          <div className={styles.logo_cont}>
            <img src={logo} alt="" />
          </div>
          <h3>Seleccione el archivo para entrenar al modelo</h3>
          <button onClick={handleBtnClick} className={styles.upload_btn}>
            Subir archivo
          </button>
          <input
            ref={fileInputReader}
            className={styles.file_upload_input}
            type="file"
            accept=".csv, text/csv, application/vnd.ms-excel, application/csv"
            onChange={handleFileChange} 
          />
        </div>
      </div>
    </>
  );
};

export default UploadCsv;