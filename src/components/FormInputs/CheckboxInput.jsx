import { Checkbox } from "@mui/material";
import React from "react";

export default function CheckboxInput({ item, handleChange }) {
  const { label, name } = item;
  return (
    <div className="checkbox-input">
      <Checkbox name={name} onChange={handleChange} />
      <p>{label}</p>
    </div>
  );
}
