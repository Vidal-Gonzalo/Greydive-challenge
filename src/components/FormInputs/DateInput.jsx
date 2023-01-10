import React from "react";
import dayjs from "dayjs";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { motion, AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";

export default function DateInput({
  item,
  handleBlur,
  setFieldValue,
  formik,
  value,
}) {
  const { label, name, required } = item;
  const { touched, errors } = formik;

  const handleDateChange = (newValue) => {
    let date = dayjs(newValue).format("DD/MM/YYYY");
    setFieldValue(name, date);
  };

  return (
    <div className="input">
      <div className="label">
        <p>{label}</p>
        {required && <span>*</span>}
      </div>

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
              helperText={
                errors && touched ? (
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="error-message-container"
                    >
                      <span className="error-message">
                        <PriorityHighIcon
                          fontSize={"small"}
                          sx={{ marginRight: "0.3rem" }}
                        />
                        {errors}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                ) : (
                  <span style={{ display: "block", height: "2.5rem" }}></span>
                )
              }
              inputProps={{ ...params.inputProps, readOnly: true }}
              error={errors && touched ? true : false}
              color="secondary"
              sx={{
                width: "80%",
                fontFamily: "GothamBook",
                input: { color: "#ccc" },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

DateInput.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
  }),
  setFieldValue: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};
