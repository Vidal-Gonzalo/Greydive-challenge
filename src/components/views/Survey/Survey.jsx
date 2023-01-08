import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import inputsData from "../../../assets/data/inputsData.json";
import FormInputsList from "../../FormInputsList/FormInputsList";
import { formikUtils } from "../../../utils/formikUtils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import SurveySent from "../../SurveySent/SurveySent";
import { CircularProgress } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { swalError } from "../../../utils/swal";

export default function Survey() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { items } = inputsData;
  let dataWithoutSubmitButton = items.filter((item) => item.type !== "submit");

  const onSubmit = async () => {
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

  const initialValues = formikUtils.getInitialValues(dataWithoutSubmitButton);

  const SchemaObject = formikUtils.generateDynamicSchema(
    dataWithoutSubmitButton
  );

  const validationSchema = Yup.object().shape(SchemaObject);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, values } = formik;

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
        <motion.div animate={controls}>
          <form className="form-container" onSubmit={handleSubmit}>
            <FormInputsList
              data={items}
              formik={formik}
              currentPage={currentPage}
              changeCurrentPage={changeCurrentPage}
            />
          </form>
        </motion.div>
      </main>
    );
  }

  if (!data && loading) {
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

  if (success) {
    return <SurveySent data={data} />;
  }

  if (error) {
    return swalError(
      "No se han podido enviar tus respuestas",
      "Por favor, vuelva a intentarlo",
      navigate
    );
  }
}
