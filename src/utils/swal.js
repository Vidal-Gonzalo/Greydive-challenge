import Swal from "sweetalert2";

export const swalConfirm = (
  title,
  text,
  confirmButtonText,
  denyButtonText,
  navigate
) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText,
    denyButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      navigate(`/results/${text}`);
    } else if (result.isDenied) {
      Swal.fire({
        icon: "warning",
        title: "¡No pierdas tu codigo!",
        text,
      });
    }
  });
};
