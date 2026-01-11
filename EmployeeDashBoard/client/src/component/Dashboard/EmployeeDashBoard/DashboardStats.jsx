import React from "react";
import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";

const DashboardStats = ({ total, active, inactive }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Employees"
        value={total}
        icon={<FiUsers />}
      />
      <StatCard
        title="Active"
        value={active}
        icon={<FiUserCheck />}
      />
      <StatCard
        title="Inactive"
        value={inactive}
        icon={<FiUserX />}
      />
    </div>
  );
};

/* ================= STAT CARD ================= */
const StatCard = ({ title, value, icon }) => (
  <div
    className="bg-white rounded-2xl border border-slate-200 p-5
    flex items-center justify-between shadow-sm"
  >
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-800 mt-1">{value}</p>
    </div>
    <div
      className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600
      flex items-center justify-center text-xl"
    >
      {icon}
    </div>
  </div>
);

export default DashboardStats;
