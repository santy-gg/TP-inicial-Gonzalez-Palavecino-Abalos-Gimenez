import React from 'react'
import styles from './ModalInstruction.module.css'
function ModalInstruction({handleBtnClick}){
  return (
    <>
        <div className={styles.modal_background_container}>
          <div className={styles.modal_instruction_cont}>
            <h2>INSTRUCCIONES</h2>
            <ul className={styles.instructions_ul}>
              <li>Subí un archivo <strong>.csv</strong> con encabezados en la primera fila.</li>
              <li>Asegurate que los encabezados sean los siguientes: Id,Nombre,Apellido,Horas_capacitacion,Antiguedad,Calificacion_previa,Puntaje_desempeño.</li>
              <li>Asegurate de que las columnas de Horas_capacitacion, Antiguedad, Calificacion_previa Y Puntaje_desempeño contengan solo datos numéricos</li>
              <li>Presioná "Entrenar modelo" para comenzar.</li>
            </ul>
            <button onClick={handleBtnClick} className={styles.close_modal_btn}>Cerrar</button>            
          </div>
        </div>
    </>
  )
}

export default ModalInstruction;
