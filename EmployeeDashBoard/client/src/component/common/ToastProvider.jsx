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
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className:
          "bg-white border border-green-200 text-gray-800 shadow-lg rounded-xl",
        bodyClassName: "text-sm font-medium",
        progressClassName: "bg-green-500",
        icon: "✅",
      });
    }
  }, [popup]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className:
          "bg-white border border-red-200 text-gray-800 shadow-lg rounded-xl",
        bodyClassName: "text-sm font-medium",
        progressClassName: "bg-red-500",
        icon: "⚠️",
      });
    }
  }, [error]);

  return (
    <ToastContainer
      newestOnTop
      limit={2}
      toastStyle={{
        minHeight: "56px",
        padding: "12px 16px",
      }}
    />
  );
};

export default ToastProvider;
