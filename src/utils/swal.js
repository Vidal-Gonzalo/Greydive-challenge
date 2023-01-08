import Swal from "sweetalert2";

export const swalError = (title, text, navigate) => {
  Swal.fire({
    icon: "error",
    title,
    text,
  }).then(() => {
    navigate("/");
  });
};
