// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer/authReducer';
import employeeReducer from '../reducer/employeeReducer/employeeReducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    employeeData:employeeReducer
  },
});

export default store;
