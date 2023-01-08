import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export default function SelectInputs({
  item,
  handleChange,
  handleBlur,
  formik,
  value,
}) {
  const { label, name, options } = item;
  const { touched, errors } = formik;

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel
        id="demo-simple-select-standard-label"
        style={errors && touched && { color: "#D32F2F" }}
      >
        {label}
      </InputLabel>
      <Select
        onBlur={handleBlur}
        defaultValue=""
        value={value}
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
      {errors && touched && (
        <FormHelperText style={{ color: "#D32F2F" }}>{errors}</FormHelperText>
      )}
    </FormControl>
  );
}
