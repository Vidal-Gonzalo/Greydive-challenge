import React from "react";
import dayjs from "dayjs";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function DateInput({
  item,
  handleBlur,
  setFieldValue,
  formik,
  value,
}) {
  const { label, name } = item;
  const { touched, errors } = formik;

  const handleDateChange = (newValue) => {
    let date = dayjs(newValue).format("DD/MM/YYYY");
    setFieldValue(name, date);
  };

  return (
    <div className="date-input">
      <p>{label}</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          name={name}
          disableFuture
          inputFormat="DD/MM/YYYY"
          maxDate={dayjs()}
          value={value}
          onChange={handleDateChange}
          onBlur={handleBlur}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={errors && touched && errors}
              inputProps={{ ...params.inputProps, readOnly: true }}
              error={errors && touched ? true : false}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
