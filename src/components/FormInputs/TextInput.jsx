import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  item,
  handleChange,
  handleBlur,
  formik,
  value,
}) {
  const { type, label, name } = item;
  const { touched, errors } = formik;

  return (
    <>
      <TextField
        id="outlined-basic"
        variant="standard"
        onBlur={handleBlur}
        values={value}
        error={errors && touched ? true : false}
        helperText={errors && touched && errors}
        type={type}
        name={name}
        label={label}
        onChange={handleChange}
        className="input"
        placeholder={label}
      />
    </>
  );
}
