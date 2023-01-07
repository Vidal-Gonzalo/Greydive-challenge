import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { formikUtils } from "../../utils/formikUtils";
import React from "react";

export default function SelectInputs({
  item,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) {
  const { label, name, options } = item;

  const value = formikUtils.getInputPropsByName(name, values);
  const error = formikUtils.getInputPropsByName(name, errors);
  const touch = formikUtils.getInputPropsByName(name, touched);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel
        id="demo-simple-select-standard-label"
        style={error && { color: "#D32F2F" }}
      >
        {label}
      </InputLabel>
      <Select
        onBlur={handleBlur}
        defaultValue=""
        value={value}
        error={error && touch ? true : false}
        name={name}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && touch && (
        <FormHelperText style={{ color: "#D32F2F" }}>{error}</FormHelperText>
      )}
    </FormControl>
  );
}
