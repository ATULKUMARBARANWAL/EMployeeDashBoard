const SummaryCards = ({ employees }) => {
  const activeCount = employees.filter((e) => e.active).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <Card title="Total Employees" value={employees.length} />
      <Card title="Active" value={activeCount} />
      <Card title="Inactive" value={employees.length - activeCount} />
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold text-indigo-600">{value}</h2>
  </div>
);

export default SummaryCards;
