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
import { LoadUserCsv } from "./Pages/LoadUserCsv";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingresar-csv" element={<LoadUserCsv/>}/>
          <Route path="/ingresar-datos-manualmente" element={<AddManual />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
