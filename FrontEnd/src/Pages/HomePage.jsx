import React from "react";
import styles from "./HomePage.module.css";
import MainInfo from "../components/HomePage/MainInfo";
import ActionButtons from "../components/HomePage/ActionButtons";
import HowTo from "../components/HomePage/HowTo";
function HomePage() {
    return (
        <>
            <div className={styles.home_page_container}>
                <section className={styles.main_info_section}>
                    <MainInfo />
                </section>
                <section className={styles.action_buttons_section}>
                    <ActionButtons />
                </section>
                <section className={styles.how_to_section}>
                    <HowTo />
                </section>
            </div>
        </>
    );
};

export default HomePage;