import React from "react";
import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Prototipo from "../Page/Prototipo.jsx";

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
      <main>
        <Routes>
          <Route path="/" element={<Prototipo />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
