import { Checkbox } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PropTypes } from "prop-types";

export default function CheckboxInput({
  item,
  handleChange,
  handleBlur,
  formik,
  value,
}) {
  const { label, name, required } = item;
  const { touched, errors } = formik;

  return (
    <div className="input">
      <div className="label">
        <p>{label}</p>
        {required && <span>*</span>}
      </div>

      <Checkbox
        name={name}
        values={value}
        checked={value.length > 0 ? true : false}
        onChange={handleChange}
        onBlur={handleBlur}
        color="secondary"
      />
      {errors && touched ? (
        <AnimatePresence>
          <motion.div
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
          </motion.div>
        </AnimatePresence>
      ) : (
        <span style={{ display: "block", height: "2.5rem" }}></span>
      )}
    </div>
  );
}

CheckboxInput.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  value: PropTypes.array.isRequired,
};
