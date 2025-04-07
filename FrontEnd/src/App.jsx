import React from "react";
import styles from "./App.module.css";
import HomePage from "./Pages/HomePage"

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
