import React from "react";
import styles from "./CalculateWithRandomData.module.css"
import TitleAndDescription from "../components/CalculateWithRandomData/TitleAndDescription";
import Table from "../components/CalculateWithRandomData/Table";

function CalculateWithRandomData () {
    return(
        <>
            <div className={styles.page_container}>
                <TitleAndDescription />
                <Table />
            </div>
        </>
    );
};

export default CalculateWithRandomData;