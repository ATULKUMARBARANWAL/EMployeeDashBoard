import { useDispatch } from "react-redux";
import { useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { deleteEmployee } from "../../../index/addEmployee/addEmployee";
import EmployeeForm from "../EmployeeDashBoard/EmployeeForm";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const EmployeeTable = ({ employees }) => {
  const dispatch = useDispatch();

  /* ================= EDIT MODAL STATE ================= */
  const [showForm, setShowForm] = useState(false);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const editingEmployee = employees.find(
    (emp) => emp.id === editingEmployeeId
  );

  /* ================= DELETE CONFIRM STATE ================= */
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  /* ================= OPEN EDIT ================= */
  const handleEdit = (emp) => {
    setEditingEmployeeId(emp.id);
    setShowForm(true);
  };

  /* ================= OPEN DELETE CONFIRM ================= */
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  /* ================= CONFIRM DELETE ================= */
  const confirmDelete = () => {
    dispatch(deleteEmployee(deleteId));
    setShowDeleteConfirm(false);
    setDeleteId(null);
  };

  /* ================= PRINT HANDLER ================= */
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* ================= PRINT BUTTON (ONLY IF DATA EXISTS) ================= */}
      {employees.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handlePrint}
            title="Print employee list"
            className="flex items-center gap-2 px-3 py-2
            text-sm text-gray-700 border border-gray-300
            rounded-lg hover:bg-gray-100 hover:text-gray-900
            transition"
          >
            <FiPrinter className="text-lg" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      )}

      {/* ================= TABLE (PRINT AREA) ================= */}
      <div
        id="print-employee-table"
        className="bg-white rounded-xl shadow overflow-x-auto"
      >
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>State</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No employees found
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-3">{emp.id}</td>

                  <td className="p-3">
                    {emp.image ? (
                      <img
                        src={emp.image}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-10 h-10 rounded-full bg-gray-300
                        flex items-center justify-center text-xs"
                      >
                        N/A
                      </div>
                    )}
                  </td>

                  <td>{emp.name}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dob}</td>
                  <td>{emp.state}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>

                 {/* EDIT */}
<td className="text-center">
  <button
    onClick={() => handleEdit(emp)}
    title="Edit employee"
    className="p-2 rounded-lg text-indigo-600
    hover:bg-indigo-50 hover:text-indigo-800
    transition"
  >
    <FiEdit2 size={18} />
  </button>
</td>

{/* DELETE */}
<td className="text-center">
  <button
    onClick={() => handleDeleteClick(emp.id)}
    title="Delete employee"
    className="p-2 rounded-lg text-red-600
    hover:bg-red-50 hover:text-red-800
    transition"
  >
    <FiTrash2 size={18} />
  </button>
</td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {showForm && editingEmployee && (
        <EmployeeForm
          employee={editingEmployee}
          onClose={() => {
            setShowForm(false);
            setEditingEmployeeId(null);
          }}
        />
      )}

      {/* ================= DELETE CONFIRM MODAL ================= */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Delete Employee
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this employee?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white
                rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeTable;
