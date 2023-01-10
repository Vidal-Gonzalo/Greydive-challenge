import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { PropTypes } from "prop-types";

export default function SubmitButton({ item }) {
  const { type, label } = item;
  return (
    <div className="submit-container">
      <button className="submit-btn" type={type}>
        <span>{label}</span>
        <SendIcon fontSize="small" />
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
