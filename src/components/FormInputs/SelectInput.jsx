import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function SelectInputs({
  item,
  handleChange,
  handleBlur,
  formik,
  value,
}) {
  const { label, name, options, required } = item;
  const { touched, errors } = formik;

  return (
    <div className="input">
      <div className="label">
        <p>{label}</p>
        {required && <span>*</span>}
      </div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "80%" }}>
        <Select
          onBlur={handleBlur}
          defaultValue=""
          value={value}
          error={errors && touched ? true : false}
          name={name}
          label={label}
          onChange={handleChange}
          style={{ color: "#ccc", fontFamily: "Gotham" }}
          color="secondary"
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errors && touched ? (
          <span className="error-message-container">
            <span className="error-message">
              <PriorityHighIcon
                fontSize={"small"}
                sx={{ marginRight: "0.3rem" }}
              />
              {errors}
            </span>
          </span>
        ) : (
          <span style={{ display: "block", height: "2.5rem" }}></span>
        )}
      </FormControl>
    </div>
  );
}
