import React from "react";
import { PropTypes } from "prop-types";
import "./ResultCard.css";

export default function ResultCard({ item }) {
  const resultsLabels = {
    country_of_origin: "Lugar de origen",
    birth_date: "Fecha de nacimiento",
    email: "E-mail",
    full_name: "Nombre completo",
  };
  const label = resultsLabels[item.item];

  return (
    <>
      <div className="result-card">
        <div className="result-card-content">
          <p className="result-card-label">{label}:</p>
          <p className="result-card-item">{item.content}</p>
        </div>
      </div>
    </>
  );
}

ResultCard.propTypes = {
  item: PropTypes.shape({
    item: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
