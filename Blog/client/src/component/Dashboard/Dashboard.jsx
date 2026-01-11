import React, { useState } from "react";
import { FiPlus, FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import EmployeeTable from "./EmployeeDashBoard/EmployeeTable";
import EmployeeForm from "./EmployeeDashBoard/EmployeeForm";
import ConfirmModal from "./EmployeeDashBoard/ConfirmModal";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  /* ================= FILTER ================= */
  const filteredEmployees = employees.filter((emp) =>
    emp.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ================= HANDLERS ================= */
  const handleSave = (employee) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      setEmployees((prev) => [
        ...prev,
        {
          ...employee,
          id: Date.now(),
          status: employee.status || "Active",
        },
      ]);
    }
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setEmployees((prev) => prev.filter((e) => e.id !== deleteId));
    setShowConfirm(false);
    setDeleteId(null);
  };

  /* ================= STATS ================= */
  const activeCount = employees.filter(
    (e) => e.status?.toLowerCase() === "active"
  ).length;

  const inactiveCount = employees.filter(
    (e) => e.status?.toLowerCase() === "inactive"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-5">

      {/* ================= TOP BAR ================= */}
      <div className="flex items-center justify-between mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 text-sm rounded-xl
          border border-slate-300 bg-white
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Admin */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-800">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white
          flex items-center justify-center font-semibold">
            A
          </div>
        </div>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Employees"
          value={employees.length}
          icon={<FiUsers />}
        />
        <StatCard
          title="Active"
          value={activeCount}
          icon={<FiUserCheck />}
        />
        <StatCard
          title="Inactive"
          value={inactiveCount}
          icon={<FiUserX />}
        />
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* ================= FLOATING ADD BUTTON ================= */}
      <button
        onClick={() => {
          setEditingEmployee(null);
          setShowForm(true);
        }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full
        bg-indigo-600 text-white flex items-center justify-center
        shadow-lg hover:scale-105 transition group"
      >
        <FiPlus size={22} />

        <span className="absolute right-16 opacity-0 group-hover:opacity-100
        bg-slate-900 text-white text-xs px-3 py-1 rounded-lg transition">
          Add Employee
        </span>
      </button>

      {/* ================= MODALS ================= */}
      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingEmployee(null);
          }}
        />
      )}

      {showConfirm && (
        <ConfirmModal
          title="Delete Employee"
          message="Are you sure you want to delete this employee?"
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

/* ================= STAT CARD ================= */
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl border border-slate-200 p-5
  flex items-center justify-between shadow-sm">
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-800 mt-1">{value}</p>
    </div>
    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600
    flex items-center justify-center text-xl">
      {icon}
    </div>
  </div>
);

export default Dashboard;
