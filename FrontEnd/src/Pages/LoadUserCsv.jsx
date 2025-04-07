import React from "react";
import { LoadCsvHeader } from "../components/LoadUserCsv/LoadCsvHeader";
import { UploadCsv } from "../components/LoadUserCsv/UploadCsv";
import { ModelBtnControler } from "../components/LoadUserCsv/ModelBtnControler";
import { Results } from "../components/LoadUserCsv/Results";
import styles from "./LoadUserCsv.module.css";

export const LoadUserCsv = () => {
  return (
    <>
      <LoadCsvHeader />
      <div className={styles.load_csv_container}>
        <section className={styles.upload_csv_section}>
          <UploadCsv />
        </section>
        <section className={styles.model_btn_controler_section}>
          <ModelBtnControler />
        </section>
        {/* Datos hardcodeados momentáneamente para mostrar un ejemplo */}
        <section className={styles.resutls_section}>
          <Results />
        </section>
      </div>
    </>
  )
}

