import * as Yup from "yup";

export const formikUtils = {
  //Get initial values to initialize form with formik
  getInitialValues: (data) => {
    let initialValues = Object.fromEntries(
      data.map((field) => {
        if (
          field.type === "text" ||
          field.type === "email" ||
          field.type === "select" ||
          field.type === "date"
        ) {
          //Initialize string values
          return [field.name, ""];
        } else if (field.type === "checkbox") {
          return [field.name, []];
        } else {
          //If the field is not a string or an array, return empty validation
          return ["none", ""];
        }
      })
    );
    return initialValues;
  },

  //Generates dynamic schema for yup validation
  generateDynamicSchema: (data) => {
    let validEmail = "Debe ser un email valido";
    let required = "Campo requerido";
    let termsRequired =
      "Se deben aceptar los términos y condiciones para proseguir";
    let dynamicSchema = Object.fromEntries(
      data.map((field) => {
        //Validates string input and specifies that it's required
        if (
          (field.type === "text" && field.required) ||
          (field.type === "select" && field.required) ||
          (field.type === "date" && field.required)
        ) {
          return [field.name, Yup.string().required(required)];
        }
        //If input is not required, it only validates that the entered value is a valid string
        if (
          (field.type === "text" && !field.required) ||
          (field.type === "select" && !field.required) ||
          (field.type === "date" && !field.required) ||
          (field.type === "checkbox" && !field.required)
        ) {
          return [field.name, Yup.string()];
        }
        //Validates email and specifies that it's required
        if (field.type === "email" && field.required) {
          return [
            field.name,
            Yup.string().email(validEmail).required(required),
          ];
          //If it's not required, it only validates that the entered value is a valid e-mail
        } else if (field.type === "email") {
          return [field.name, Yup.string().email(validEmail)];
        }
        //Validates checkbox and specifies that is required to move on
        if (field.type === "checkbox" && field.required) {
          return [
            field.name,
            Yup.array().min(1, termsRequired).required(termsRequired),
          ];
          //If it's not required, it only validates that the entered value is a valid array
        } else if (field.type === "checkbox") {
          return [field.name, Yup.array()];
        }
        return ["none", ""];
      })
    );
    return dynamicSchema;
  },
  getInputPropsByName: (name, prop) => {
    let propValue;
    for (const [key, value] of Object.entries(prop)) {
      if (key === name) {
        propValue = value;
      }
    }
    return propValue;
  },
};
