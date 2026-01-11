import { createReducer } from "@reduxjs/toolkit";
import {
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "../../index/addEmployee/addEmployee";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = createReducer(initialState, (builder) => {
  builder

    /* ================= ADD ================= */
    .addCase(addEmployee.pending, (state) => {
      state.loading = true;
    })
    .addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employees.push(action.payload);
    })
    .addCase(addEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    /* ================= EDIT ================= */
    .addCase(editEmployee.pending, (state) => {
      state.loading = true;
    })
    .addCase(editEmployee.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    })
    .addCase(editEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    /* ================= DELETE ================= */
    .addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    })
    .addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default employeeReducer;
