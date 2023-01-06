import * as Yup from "yup";

export const formikUtils = {
  getInitialValues: (data) => {
    let initialValues = Object.fromEntries(
      data.map((field) => {
        if (
          field.type === "text" ||
          field.type === "email" ||
          field.type === "select" ||
          field.type === "date"
        ) {
          return [field.name, ""];
        } else if (field.type === "checkbox") {
          return [field.name, false];
        } else {
          return ["none", ""];
        }
      })
    );
    return initialValues;
  },
  generateDynamicSchema: (data) => {
    let validEmail = "Debe ser un email valido";
    let required = "Campo requerido";

    let dynamicSchema = Object.fromEntries(
      data.map((field) => {
        if (
          (field.type === "text" && field.required) ||
          (field.type === "select" && field.required) ||
          (field.type === "date" && field.required)
        ) {
          return [field.name, Yup.string().required(required)];
        }
        if (
          (field.type === "text" && !field.required) ||
          (field.type === "select" && !field.required) ||
          (field.type === "date" && !field.required)
        ) {
          return [field.name, Yup.string()];
        }
        if (field.type === "email" && field.required) {
          return [
            field.name,
            Yup.string().email(validEmail).required(required),
          ];
        } else if (field.type === "email") {
          return [field.name, Yup.string().email(validEmail)];
        }
        if (field.type === "checkbox" && field.required) {
          return [field.name, Yup.boolean().required(required)];
        } else {
          return [field.name, Yup.boolean()];
        }
      })
    );
    return dynamicSchema;
  },
};
