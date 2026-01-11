const EmployeeRow = ({ employee, onEdit, onDelete }) => {
  return (
    <tr className="border-t">
      <td className="p-3">{employee.id}</td>

      <td>
        <img
          src={employee.image}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>

      <td>{employee.name}</td>
      <td>{employee.gender}</td>
      <td>{employee.dob}</td>
      <td>{employee.state}</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            employee.active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.active ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="space-x-2">
        <button
          onClick={() => onEdit(employee)}
          className="text-indigo-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employee.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
        <button
          onClick={() => window.print()}
          className="text-gray-600 hover:underline"
        >
          Print
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
