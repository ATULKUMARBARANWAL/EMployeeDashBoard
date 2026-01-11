import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center py-6 text-gray-500">
                No employees found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <EmployeeRow
                key={emp.id}
                employee={emp}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
