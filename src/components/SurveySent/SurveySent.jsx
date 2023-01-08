import React from "react";
import { useNavigate } from "react-router-dom";

export default function SurveySent({ data }) {
  const navigate = useNavigate();

  if (data) {
    return (
      <div>
        <p>Tus respuestas fueron registradas correctamente. </p>{" "}
        <button onClick={() => navigate(`/results/${data.id}`)}>
          Ver mis respuestas
        </button>
      </div>
    );
  }
}
