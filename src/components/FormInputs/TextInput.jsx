import { TextField } from "@mui/material";
import React from "react";
import { formikUtils } from "../../utils/formikUtils";

export default function TextInput({
  item,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) {
  const { type, label, name } = item;

  const value = formikUtils.getInputPropsByName(name, values);
  const error = formikUtils.getInputPropsByName(name, errors);
  const touch = formikUtils.getInputPropsByName(name, touched);
  return (
    <>
      <TextField
        id="outlined-basic"
        variant="standard"
        onBlur={handleBlur}
        values={value}
        error={error && touch ? true : false}
        helperText={error && touch && error}
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
