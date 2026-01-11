import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  const { popup, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (popup) {
      toast.success(popup, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }, [popup]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }, [error]);

  return <ToastContainer />;
};

export default ToastProvider;
