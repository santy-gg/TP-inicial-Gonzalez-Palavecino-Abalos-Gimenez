import React from 'react'
import styles from './ModelBtnControler.module.css'
export const ModelBtnControler = ({handleBtnClick}) => {  
  return (
    <>
      <div className={styles.model_btn_controler_container}>
        <div className={styles.btn_cont}>
          <button onClick={handleBtnClick} className={`${styles.general_btn} ${styles.instructions_btn}`}>Intrucciones de uso</button>
          <button className={`${styles.general_btn} ${styles.train_model_btn}`}>Entrenar modelo</button>
        </div>
      </div>
    </>
  )
}
