import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function Results() {
  const { id } = useParams();
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
    setResults(filterData("terms_and_conditions", data));
  }, [id, loading, error, success, data]);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
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
