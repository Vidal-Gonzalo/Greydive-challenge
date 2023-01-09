import React from "react";
import SendIcon from "@mui/icons-material/Send";

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
