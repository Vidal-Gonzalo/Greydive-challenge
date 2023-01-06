import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import db from "../../../assets/data/db.json";
import FormInputsList from "../../FormInputsList/FormInputsList";
import { formikUtils } from "../../../utils/formikUtils";

export default function Survey() {
  let dbItems = db.items;
  let dbItemsWithoutSubmitButton = dbItems.filter(
    (dbItem) => dbItem.type !== "submit"
  );

  const onSubmit = (e) => {
    console.log(values);
  };

  const initialValues = formikUtils.getInitialValues(
    dbItemsWithoutSubmitButton
  );

  const SchemaObject = formikUtils.generateDynamicSchema(
    dbItemsWithoutSubmitButton
  );

  const validationSchema = Yup.object().shape(SchemaObject);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, values } = formik;

  return (
    <main className="main-section">
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Hacer un componente */}
        <FormInputsList data={dbItems} formik={formik} />
      </form>
    </main>
  );
}
