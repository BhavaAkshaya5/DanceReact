import React from "react";
import "./Assets/css/style.css";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;