import React from "react";
import styles from "./HowToCard.module.css";

function HowToCard({ stepNumber, title, image }) {
    return(
        <>
            <div className={styles.card_container}>
                <div className={styles.content_container}>
                    <div className={styles.step_number}>{stepNumber}</div>
                    <h3 className={styles.title}>{title}</h3>
                    <img src={image} alt={title} className={styles.image} />
                </div>
            </div>
        </>
    );
};

export default HowToCard;