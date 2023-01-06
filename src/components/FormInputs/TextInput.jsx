import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  item,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) {
  const { type, label, name } = item;
  return (
    <TextField
      id="outlined-basic"
      variant="standard"
      onBlur={handleBlur}
      values={values.name}
      error={errors.name && touched.name ? true : false}
      helperText={errors.name}
      type={type}
      name={name}
      label={label}
      onChange={handleChange}
      className="input"
      placeholder={label}
    />
  );
}
