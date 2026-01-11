const LeftText = () => {
  return (
    <div className="max-w-md text-white">
      <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
        Manage Your <br /> Workforce Better
      </h1>

      <h2 className="text-xl xl:text-2xl font-semibold mb-6 text-gray-200">
        Track, Organize, Empower
      </h2>

      <p className="text-sm xl:text-base text-gray-300 mb-8 leading-relaxed">
        A smart employee management system designed to simplify HR operations.
        Manage attendance, roles, performance, and employee records efficiently
        from one centralized platform.
      </p>

      <ul className="space-y-2 text-gray-300 text-sm list-disc ml-5 font-medium">
        <li>Centralized Employee Records</li>
        <li>Attendance & Leave Management</li>
        <li>Role-Based Access Control</li>
        <li>Performance Tracking & Reports</li>
      </ul>
    </div>
  );
};

export default LeftText;
