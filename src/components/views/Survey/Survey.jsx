import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import inputsData from "../../../assets/data/inputsData.json";
import FormInputsList from "../../FormInputsList/FormInputsList";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import SurveySent from "../../SurveySent/SurveySent";
import Loader from "../../Loader/Loader";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { swalError } from "../../../utils/swal";
import "./Survey.css";

export default function Survey() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { items } = inputsData;

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      let response = await addDoc(collection(db, "surveyResults"), values);
      setLoading(false);
      setData(response);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err);
      setSuccess(false);
    }
  };

  const controls = useAnimation();

  const changeCurrentPage = ({ selected }) => {
    controls.start({
      x: 100,
      opacity: 0,
      transition: { duration: 0.3 },
    });
    setTimeout(() => {
      setCurrentPage(selected + 1);
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }, 300);
  };

  if (!data && !loading) {
    return (
      <main className="main-section">
        <div
          className="input"
          style={{
            marginTop: "8rem",
            width: "34%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="label"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.p
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              Sección {currentPage}
            </motion.p>
          </div>
        </div>
        <motion.div className="motion-form" animate={controls}>
          <FormInputsList
            data={items}
            onSubmit={onSubmit}
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
          />
        </motion.div>
      </main>
    );
  }

  if (!data && loading) {
    return (
      <AnimatePresence>
        <motion.div
          className="loader-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <Loader />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (success) {
    return <SurveySent id={data.id} />;
  }

  if (error) {
    return swalError(
      "No se han podido enviar tus respuestas",
      "Por favor, vuelva a intentarlo",
      navigate
    );
  }
}
