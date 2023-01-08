import { Checkbox, FormHelperText } from "@mui/material";
import React from "react";

export default function CheckboxInput({
  item,
  handleChange,
  handleBlur,
  formik,
  value,
}) {
  const { label, name } = item;
  const { touched, errors } = formik;

  return (
    <div className="checkbox-input">
      <Checkbox
        name={name}
        values={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{label}</p>
      {errors && touched && (
        <FormHelperText style={{ color: "#D32F2F" }}>{errors}</FormHelperText>
      )}
    </div>
  );
}
