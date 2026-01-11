import React from "react";

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  genderFilter,
  onGenderChange,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-6 mb-6">
      {/* Search */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Search:
        </label>
        <input
          type="text"
          placeholder="Search employee..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-64 px-4 py-2 text-sm rounded-lg border
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Gender Filter */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Gender:
        </label>
        <select
          value={genderFilter}
          onChange={(e) => onGenderChange(e.target.value)}
          className="w-40 px-4 py-2 text-sm rounded-lg border
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* ✅ Status Filter */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Status:
        </label>
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-40 px-4 py-2 text-sm rounded-lg border
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
