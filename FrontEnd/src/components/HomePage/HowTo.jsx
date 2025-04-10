import React from "react";
import styles from "./HowTo.module.css";
import HowToCard from "./HowToCard";
import ingresar_opcion from "../../../assets/ingresar_opcion.png"
import aplicando_algoritmo from "../../../assets/aplicando_algoritmo.png"
import resultados from "../../../assets/resultados.png"


function HowTo() {
    const stepsData = [
        {
          stepNumber: 1,
          title: "Selecciona una opción",
          image: ingresar_opcion,
        },
        {
          stepNumber: 2,
          title: "Se aplica el algoritmo",
          image: aplicando_algoritmo,
        },
        {
          stepNumber: 3,
          title: "Obtén los resultados",
          image: resultados,
        },
      ];

    return( 
        <>
            <div className={styles.how_to_container}>
                <div className={styles.title}>
                    <span>¿Cómo usar la aplicación?</span>
                </div>
                <div className={styles.cards_container}>
                {stepsData.map((step) => (
                    <HowToCard
                        key={step.stepNumber}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        image={step.image}
                    />
                ))}
                </div>
            </div>
        </>
    );
};

export default HowTo;