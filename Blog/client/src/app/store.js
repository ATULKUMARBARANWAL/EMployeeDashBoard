// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer/authReducer';
import blogReducer from '../reducer/blogReducer/blogReducer'; // ✅ import blog reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer, // ✅ add blog reducer here
  },
});

export default store;
