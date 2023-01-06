import React, { useEffect, useState } from "react";
import TextInput from "../FormInputs/TextInput";
import SelectInputs from "../FormInputs/SelectInput";
import CheckboxInput from "../FormInputs/CheckboxInput";

export default function FormInputsList({ data, formik }) {
  const [textInputs, setTextInputs] = useState([]);
  const [selectInputs, setSelectInputs] = useState([]);
  const [checkboxInputs, setCheckboxInputs] = useState([]);
  const [dateInputs, setDateInputs] = useState([]);
  const [buttons, setButtons] = useState([]);

  const { handleChange, handleBlur, touched, values, errors } = formik;

  const addElement = (item, setState) => {
    //Add an element to the current state
    setState((current) => [...current, item]);
    //To prevent duplicated elements as a consequence of double rendering
    //because of a feature inside ReactStrictMode in React.18
    setState((current) =>
      current.filter((item, index) => {
        return current.indexOf(item) === index;
      })
    );
  };

  useEffect(() => {
    for (const item of data) {
      if (item.type === "text" || item.type === "email") {
        addElement(item, setTextInputs);
      }
      if (item.type === "select") {
        addElement(item, setSelectInputs);
      }
      if (item.type === "checkbox") {
        addElement(item, setCheckboxInputs);
      }
      if (item.type === "date") {
        addElement(item, setDateInputs);
      }
      if (item.type === "submit") {
        addElement(item, setButtons);
      }
    }
  }, [data]);

  const renderTextInputs = () => {
    if (textInputs.length > 0) {
      return textInputs.map((item, index) => (
        <TextInput
          key={index}
          item={item}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          values={values}
          errors={errors}
        />
      ));
    }
  };

  const renderSelectInputs = () => {
    if (selectInputs.length > 0) {
      return selectInputs.map((item, index) => (
        <SelectInputs
          key={index}
          item={item}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          values={values}
          errors={errors}
        />
      ));
    }
  };

  const renderCheckboxInputs = () => {
    if (checkboxInputs.length > 0) {
      return checkboxInputs.map((item, index) => (
        <CheckboxInput
          key={index}
          item={item}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          values={values}
          errors={errors}
        />
      ));
    }
  };

  const renderDateInputs = () => {
    if (dateInputs.length > 0) {
      return dateInputs.map((item, index) => <p key={index}>{item.name}</p>);
    }
  };

  const renderSubmitButton = () => {
    if (buttons.length > 0) {
      return buttons.map((button, index) => (
        <button type={button.type} key={index}>
          {button.label}
        </button>
      ));
    }
  };

  return (
    <div className="form-input-list">
      {renderTextInputs()}
      {renderSelectInputs()}
      {renderCheckboxInputs()}
      {renderDateInputs()}
      {renderSubmitButton()}
    </div>
  );
}
