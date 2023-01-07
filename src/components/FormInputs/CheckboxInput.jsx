import { Checkbox, FormHelperText } from "@mui/material";
import { formikUtils } from "../../utils/formikUtils";
import React from "react";

export default function CheckboxInput({
  item,
  handleChange,
  handleBlur,
  errors,
  values,
}) {
  const { label, name } = item;
  const value = formikUtils.getInputPropsByName(name, values);
  const error = formikUtils.getInputPropsByName(name, errors);

  return (
    <div className="checkbox-input">
      <Checkbox
        name={name}
        values={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{label}</p>
      {error && (
        <FormHelperText style={{ color: "#D32F2F" }}>{error}</FormHelperText>
      )}
    </div>
  );
}
