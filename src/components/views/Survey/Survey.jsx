import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import inputsData from "../../../assets/data/inputsData.json";
import FormInputsList from "../../FormInputsList/FormInputsList";
import { formikUtils } from "../../../utils/formikUtils";
import { swalConfirm } from "../../../utils/swal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export default function Survey() {
  const [surveyState, setSurveyState] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const navigate = useNavigate();
  const { items } = inputsData;
  let dataWithoutSubmitButton = items.filter((item) => item.type !== "submit");

  const onSubmit = async () => {
    setSurveyState({ loading: true, error: null, data: null });
    try {
      let response = await addDoc(collection(db, "surveyResults"), values);
      setSurveyState({ loading: false, error: null, data: response });
    } catch (err) {
      setSurveyState({ loading: false, error: err, data: null });
    }
  };

  useEffect(() => {
    if (surveyState.data) {
      let resultsId = surveyState.data.id;
      swalConfirm(
        "Código para ver tus resultados:",
        resultsId,
        "Ver mis resultados",
        "Verlos más tarde",
        navigate
      );
    }
  }, [surveyState, navigate]);

  const initialValues = formikUtils.getInitialValues(dataWithoutSubmitButton);

  const SchemaObject = formikUtils.generateDynamicSchema(
    dataWithoutSubmitButton
  );

  const validationSchema = Yup.object().shape(SchemaObject);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, values } = formik;

  return (
    <main className="main-section">
      <form className="form-container" onSubmit={handleSubmit}>
        <FormInputsList data={items} formik={formik} />
      </form>
    </main>
  );
}
