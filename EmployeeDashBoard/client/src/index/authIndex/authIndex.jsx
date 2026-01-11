import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const { username, password } = userData;

      // ✅ Fixed credentials
      if (username === "admin" && password === "1") {
        const adminData = {
          username: "admin",
          role: "ADMIN",
          isAuthenticated: true,
        };

        // ✅ Store in localStorage
        localStorage.setItem("authUser", JSON.stringify(adminData));

        return adminData;
      } else {
        return rejectWithValue("Invalid admin credentials");
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("authUser");
      return true;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);