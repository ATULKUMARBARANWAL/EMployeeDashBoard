import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

import EmployeeTable from "./EmployeeDashBoard/EmployeeTable";
import EmployeeForm from "./EmployeeDashBoard/EmployeeForm";
import SearchAndFilter from "./EmployeeDashBoard/DashboardSearchAndFilter";
import DashboardStats from "./EmployeeDashBoard/DashboardStats";

const Dashboard = () => {
  /* ================= REDUX DATA ================= */
  const employees = useSelector(
    (state) => state.employeeData.employees
  );

  /* ================= UI STATE ================= */
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all"); // ✅ NEW
  const [showForm, setShowForm] = useState(false);

  /* ================= FILTER LOGIC ================= */
  const filteredEmployees = employees.filter((emp) => {
    const matchName = emp.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchGender =
      genderFilter === "all" ||
      emp.gender?.toLowerCase() === genderFilter;

    const matchStatus =
      statusFilter === "all" ||
      emp.status?.toLowerCase() === statusFilter;

    return matchName && matchGender && matchStatus;
  });

  /* ================= STATS ================= */
  const activeCount = employees.filter(
    (e) => e.status === "Active"
  ).length;

  const inactiveCount = employees.filter(
    (e) => e.status === "Inactive"
  ).length;

  return (
    <div className="min-h-screen bg-white px-6 py-5">
      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {/* Left: Title */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Employee Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage employees, track status, and perform administrative actions
            </p>
          </div>

          {/* Right: Admin */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">Logged in</p>
            </div>

            <div
              className="w-11 h-11 rounded-full bg-indigo-600 text-white
              flex items-center justify-center font-semibold text-lg shadow-sm"
            >
              A
            </div>
          </div>
        </div>

        <div className="mt-5 border-b border-gray-200"></div>
      </div>

      {/* ================= SEARCH & FILTER ================= */}
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        genderFilter={genderFilter}
        onGenderChange={setGenderFilter}
        statusFilter={statusFilter}          // ✅ NEW
        onStatusChange={setStatusFilter}     // ✅ NEW
      />

      {/* ================= STATS ================= */}
      <DashboardStats
        total={employees.length}
        active={activeCount}
        inactive={inactiveCount}
      />

      {/* ================= TABLE ================= */}
      <EmployeeTable employees={filteredEmployees} />

      {/* ================= ADD BUTTON ================= */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full
        bg-indigo-600 text-white flex items-center justify-center
        shadow-lg hover:scale-105 transition"
      >
        <FiPlus size={22} />
      </button>

      {/* ================= ADD MODAL ================= */}
      {showForm && (
        <EmployeeForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Dashboard;
