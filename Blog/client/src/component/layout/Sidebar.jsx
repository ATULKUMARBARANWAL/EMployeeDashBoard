import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdEventNote,
  MdAssessment,
  MdSettings,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg border-r hidden md:flex flex-col">
      {/* Logo / Title */}
      <div className="p-6 text-2xl font-bold text-indigo-600 border-b">
        EMS Panel
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {/* ✅ WORKING */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <MdDashboard size={20} />
          Employee Dashboard
        </NavLink>

        {/* ❌ DUMMY OPTIONS */}
        <DummyItem icon={<MdPeople size={20} />} label="Departments" />
        <DummyItem icon={<MdEventNote size={20} />} label="Attendance" />
        <DummyItem icon={<MdAssessment size={20} />} label="Reports" />
        <DummyItem icon={<MdSettings size={20} />} label="Settings" />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-sm text-gray-500">
        Logged in as <span className="font-semibold">Admin</span>
      </div>
    </div>
  );
};

/* 🔹 Dummy Menu Item Component */
const DummyItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 cursor-not-allowed">
      {icon}
      <span>{label}</span>
      <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
        Soon
      </span>
    </div>
  );
};

export default Sidebar;
