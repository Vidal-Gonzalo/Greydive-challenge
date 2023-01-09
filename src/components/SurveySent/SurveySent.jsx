import React from "react";
import { useNavigate } from "react-router-dom";
import "./SurveySent.css";

export default function SurveySent({ data }) {
  const navigate = useNavigate();

  if (data) {
    return (
      <div className="survey-sent-container">
        <div className="survey-sent">
          <p>¡Tus respuestas fueron registradas correctamente! </p>{" "}
          <button
            onClick={() => navigate(`/results/${data.id}`)}
            className="survey-sent-btn"
          >
            <span>Ver mis respuestas</span>
          </button>
        </div>
      </div>
    );
  }
}
