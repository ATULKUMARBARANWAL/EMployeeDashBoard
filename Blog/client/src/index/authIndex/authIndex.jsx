import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const { username, password } = userData;
console.log("YO",username, password)
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
