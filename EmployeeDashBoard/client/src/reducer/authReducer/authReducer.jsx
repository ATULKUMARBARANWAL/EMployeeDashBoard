import { createReducer } from "@reduxjs/toolkit";
import { signIn, logout } from "../../Index/authIndex/authIndex";

const storedUser = JSON.parse(localStorage.getItem("authUser"));

const initialState = {
  signedIn: !!storedUser,
  loading: false,
  error: null,
  popup: null,
  user: storedUser || null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    /* ================= SIGN IN ================= */
    .addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.popup = null;
    })

    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.signedIn = true;
      state.user = action.payload;
      state.popup = "SignIn Successfully";
    })

    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.signedIn = false;
      state.user = null;
      state.error = action.payload || "Failed to SignIn";
      state.popup = "Failed to SignIn";
      localStorage.removeItem("authUser");
    })

    /* ================= LOGOUT ================= */
    .addCase(logout.pending, (state) => {
      state.loading = true;
    })

    .addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.signedIn = false;
      state.user = null;
      state.error = null;
      state.popup = "Logged out successfully";
    })

    .addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Logout failed";
    });
});

export default authReducer;
