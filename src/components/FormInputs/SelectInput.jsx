import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        onBlur={handleBlur}
        defaultValue=""
        value={values.name}
        error={errors.name && touched.name ? true : false}
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
    </FormControl>
  );
}
