import React, { useEffect } from "react";
import TextInput from "../FormInputs/TextInput";
import SelectInputs from "../FormInputs/SelectInput";
import CheckboxInput from "../FormInputs/CheckboxInput";
import DateInput from "../FormInputs/DateInput";
import { formikUtils } from "../../utils/formikUtils";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Swal from "sweetalert2";
import SubmitButton from "../Buttons/SubmitButton";
import PropTypes from "prop-types";
import "./FormInputsList.css";

export default function FormInputsList({
  data,
  currentPage,
  changeCurrentPage,
  onSubmit,
}) {
  let dataWithoutSubmitButton = data.filter((item) => item.type !== "submit");

  const initialValues = formikUtils.getInitialValues(dataWithoutSubmitButton);

  const SchemaObject = formikUtils.generateDynamicSchema(
    dataWithoutSubmitButton
  );

  const validationSchema = Yup.object().shape(SchemaObject);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit } = formik;

  useEffect(() => {
    if (formik.isSubmitting && formik.errors && !formik.isValid) {
      Swal.fire({
        html: "Hay campos sin validar",
        icon: "warning",
        toast: true,
        position: "bottom-right",
        background: "#d32f2f",
        color: "#ccc",
        showConfirmButton: false,
      });
    }
  }, [formik.isSubmitting, formik.errors, formik.isValid]);

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
    <form className="form-container" onSubmit={handleSubmit}>
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
    </form>
  );
}

FormInputsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string,
      required: PropTypes.bool,
      type: PropTypes.oneOf([
        "text",
        "email",
        "date",
        "checkbox",
        "select",
        "submit",
      ]).isRequired,
    })
  ),
  currentPage: PropTypes.number.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
