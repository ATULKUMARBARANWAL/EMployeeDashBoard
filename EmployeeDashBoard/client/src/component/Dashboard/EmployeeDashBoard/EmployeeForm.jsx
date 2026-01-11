import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  editEmployee,
} from "../../../index/addEmployee/addEmployee";

const EmployeeForm = ({ onClose, employee }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  /* ================= PREFILL WHEN EDIT ================= */
  useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name || "",
        gender: employee.gender || "",
        dob: employee.dob || "",
        state: employee.state || "",
        active: employee.status === "Active",
      });
      setImagePreview(employee.image || "");
    }
  }, [employee]);

  /* ================= IMAGE HANDLER (PREVIEW BEFORE SAVE) ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // cleanup old preview
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setImageFile(file);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("All fields are required");
      return;
    }

    const payload = {
      id: employee?.id || Date.now(),
      name: form.name,
      gender: form.gender,
      dob: form.dob,
      state: form.state,
      status: form.active ? "Active" : "Inactive",

      // currently storing preview URL (later replace with API upload)
      image: imagePreview,
    };

    if (employee) {
      dispatch(editEmployee(payload));
    } else {
      dispatch(addEmployee(payload));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {employee ? "Edit Employee" : "Add Employee"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6">
          {/* IMAGE PREVIEW */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            <label className="text-indigo-600 font-medium cursor-pointer">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </label>
          </div>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                value={form.gender}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) =>
                  setForm({ ...form, dob: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* State */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                State
              </label>
              <select
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select state</option>
                <option>UP</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
              </select>
            </div>
          </div>

          {/* STATUS */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <span className="font-medium text-gray-700">
              Employee Status
            </span>
            <button
              onClick={() =>
                setForm({ ...form, active: !form.active })
              }
              className={`w-12 h-6 rounded-full p-1 transition ${
                form.active ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition ${
                  form.active ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
