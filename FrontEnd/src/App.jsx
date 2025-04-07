import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./Pages/HomePage";
import AddManual from "./Pages/AddManual";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/ingresar-datos-manualmente" element={<AddManual />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
