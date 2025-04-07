import React from 'react'
import styles from './UploadCsv.module.css'
import logo from '../../../assets/upload_logo.png'
import { useRef } from 'react'

export const UploadCsv = () => {
  const fileInputReader = useRef(null)

  const handleBtnClick = () => {
    fileInputReader.current.click()
  }

  return (
    <>
      <div className={styles.upload_csv_container}>
        <div className={styles.upload_files_cont}>
          <div className={styles.logo_cont}>
            <img src={logo} alt="" />
          </div>
          <h3>Arrastre el archivo a subir o</h3>
          <button onClick={handleBtnClick} className={styles.upload_btn}>Subir archivo</button>
          <input ref={fileInputReader} className={styles.file_upload_input} type="file" accept=".csv, text/csv, application/vnd.ms-excel, application/csv" onChange={ e => console.log(e)}/>
        </div>
      </div>
    </>
  )
}