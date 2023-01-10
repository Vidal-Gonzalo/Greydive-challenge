import React from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import "./SurveySent.css";

export default function SurveySent({ id }) {
  const navigate = useNavigate();

  if (id) {
    return (
      <div className="survey-sent-container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="survey-sent"
          >
            <p>¡Tus respuestas fueron registradas correctamente! </p>{" "}
            <button
              onClick={() => navigate(`/results/${id}`)}
              className="survey-sent-btn"
            >
              <span>Ver mis respuestas</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
SurveySent.propTypes = {
  id: PropTypes.string.isRequired,
};
