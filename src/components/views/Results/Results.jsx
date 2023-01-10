import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { swalError } from "../../../utils/swal";
import { motion } from "framer-motion";
import ResultCard from "../../ResultCard/ResultCard";
import "./Results.css";
import Loader from "../../Loader/Loader";

export default function Results() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const { loading, error, success, data } = useFetch(id);

  useEffect(() => {
    const filterData = (filterKey, data) => {
      return Object.keys(data)
        .filter((key) => key !== filterKey)
        .map((item) => {
          let content = data[item];
          return { item, content };
        });
    };
    if (success) {
      setResults(filterData("terms_and_conditions", data));
    }
  }, [id, loading, error, success, data]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (loading) {
    return (
      <motion.div
        className="results-section"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader variants={item} />
      </motion.div>
    );
  }
  if (error) {
    return swalError(
      "Ha habido un error en la carga de tus respuestas",
      "Por favor, vuelva a intentarlo",
      navigate
    );
  }
  if (results.length > 0) {
    return (
      <section className="results-section">
        <div className="title-container">
          <h2 className="results-title">Tus resultados:</h2>
        </div>

        {results.map((item, index) => (
          <ResultCard item={item} key={index} />
        ))}
      </section>
    );
  }
}
