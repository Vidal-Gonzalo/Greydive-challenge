import React from "react";
import TextInput from "../FormInputs/TextInput";
import SelectInputs from "../FormInputs/SelectInput";
import CheckboxInput from "../FormInputs/CheckboxInput";
import DateInput from "../FormInputs/DateInput";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SubmitButton from "../Buttons/SubmitButton";
import "./FormInputsList.css";

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

  //Input.slice:
  //Input.map: Map the dictionary and return the corresponding component. If there isn't any match, return a generic input.
  const renderInputs = (inputs, currentPage) => {
    const startIndex = (currentPage - 1) * inputsPerPage;
    const endIndex = startIndex + inputsPerPage;

    return inputs.slice(startIndex, endIndex).map((item, index) => {
      const InputComponent = inputComponents[item.type] || "input";
      if (item.type === "submit") {
        return <SubmitButton key={index} item={item} />;
      }
      return <InputComponent key={index} {...getInputProps(item, formik)} />;
    });
  };

  return (
    <div className="form-input-list">
      {data.length > 0 && renderInputs(data, currentPage)}
      {currentPage > 0 && (
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={
              <div>
                <KeyboardArrowLeftIcon fontSize="large" />
              </div>
            }
            nextLabel={
              <div>
                <KeyboardArrowRightIcon fontSize="large" />
              </div>
            }
            containerClassName={"pagination-btns"}
            previousLinkClassName={"prev-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
            pageClassName={"pagination-page"}
            pageCount={numPages}
            onPageChange={(page) => changeCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
}
