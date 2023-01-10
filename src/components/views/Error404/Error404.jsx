import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./Error404.css";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-404">
      <div className="not-found-container">
        <div className="not-found-title">
          <ErrorIcon className="error-icon" />
          <h1>404</h1>
        </div>
        <div className="not-found-content">
          <h2>Página no encontrada</h2>
          <Link to="/">Ir a inicio</Link>
        </div>
      </div>
    </div>
  );
}
