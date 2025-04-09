import React, { useState } from "react";
import { LoadCsvHeader } from "../components/LoadUserCsv/LoadCsvHeader";
import { UploadCsv } from "../components/LoadUserCsv/UploadCsv";
import { ModelBtnControler } from "../components/LoadUserCsv/ModelBtnControler";
import { Results } from "../components/LoadUserCsv/Results";
import { ModalInstruction } from "../components/LoadUserCsv/ModalInstruction";
import styles from "./LoadUserCsv.module.css";

export const LoadUserCsv = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modelResults, setModelResults] = useState([]);

  const handleBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <LoadCsvHeader />
      <div className={styles.load_csv_container}>
        <section className={styles.upload_csv_section}>
          <UploadCsv setSelectedFile={setSelectedFile} />
        </section>
        <section className={styles.model_btn_controler_section}>
          <ModelBtnControler handleBtnClick={handleBtnClick} selectedFile={selectedFile} setModelResults = {setModelResults} />
        </section>
        <section className={styles.resutls_section}>
          <Results modelResults = {modelResults} />
        </section>
      </div>
      {isModalOpen && <ModalInstruction handleBtnClick={handleBtnClick} />}
    </>
  );
};