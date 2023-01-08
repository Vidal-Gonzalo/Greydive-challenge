import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { swalError } from "../../../utils/swal";

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

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
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
      <div>
        {results.map((item, index) => (
          <p key={index}>{item.content}</p>
        ))}
      </div>
    );
  }
}
