import React from "react";
import TextInput from "../FormInputs/TextInput";
import SelectInputs from "../FormInputs/SelectInput";
import CheckboxInput from "../FormInputs/CheckboxInput";
import DateInput from "../FormInputs/DateInput";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

export default function FormInputsList({
  data,
  formik,
  currentPage,
  changeCurrentPage,
}) {
  //Dictionary to map the input types to their corresponding components
  const inputComponents = {
    text: TextInput,
    email: TextInput,
    select: SelectInputs,
    checkbox: CheckboxInput,
    date: DateInput,
  };

  //Implement common props to each component
  const getInputProps = (item, formik) => ({
    item,
    formik: {
      touched: formik.touched[item.name],
      errors: formik.errors[item.name],
    },
    setFieldValue: formik.setFieldValue,
    handleBlur: formik.handleBlur,
    handleChange: formik.handleChange,
    value: formik.values[item.name],
  });

  const inputsPerPage = 3;
  const numPages = Math.ceil(data.length / inputsPerPage);

  //Map the dictionary and return the corresponding component. If there isn't any match, return a generic input.
  const renderInputs = (inputs, currentPage) => {
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;

    return inputs.slice(startIndex, endIndex).map((item, index) => {
      const InputComponent = inputComponents[item.type] || "input";
      if (item.type === "submit") {
        return (
          <button type={item.type} key={index}>
            {item.label}
          </button>
        );
      }
      return <InputComponent key={index} {...getInputProps(item, formik)} />;
    });
  };

  return (
    <div className="form-input-list">
      {data.length > 0 && renderInputs(data, currentPage)}
      {currentPage > 0 && (
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={numPages}
          onPageChange={(page) => changeCurrentPage(page)}
        />
      )}
    </div>
  );
}
