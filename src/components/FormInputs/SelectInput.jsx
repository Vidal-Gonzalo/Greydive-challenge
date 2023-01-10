import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { PropTypes } from "prop-types";

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
          <AnimatePresence>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
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
        )}
      </FormControl>
    </div>
  );
}

SelectInputs.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};
