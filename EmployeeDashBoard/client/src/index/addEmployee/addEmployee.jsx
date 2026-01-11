import { createAsyncThunk } from "@reduxjs/toolkit";

/* ================= ADD ================= */
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employee) => {
    return employee;
  }
);

/* ================= EDIT ================= */
export const editEmployee = createAsyncThunk(
  "employees/editEmployee",
  async (employee) => {
    return employee;
  }
);

/* ================= DELETE ================= */
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id) => {
    return id; // ✅ payload for fulfilled
  }
);
