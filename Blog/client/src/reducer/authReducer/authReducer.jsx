import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "../../Index/authIndex/authIndex";

// 🔁 Read user from localStorage (IMPORTANT)
const storedUser = JSON.parse(localStorage.getItem("authUser"));

const initialState = {
  signedIn: !!storedUser,     // true if user exists
  loading: false,
  error: null,
  popup: null,
  user: storedUser || null,  // hydrate Redux state
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    // 🔹 SIGNIN pending
    .addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.popup = null;
    })

    // 🔹 SIGNIN success
    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.signedIn = true;
      state.error = null;
      state.popup = "SignIn Successfully";

      // ✅ payload itself is the user object
      state.user = action.payload;
    })

    // 🔹 SIGNIN failed
    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.signedIn = false;
      state.user = null;
      state.error = action.payload || "Failed to SignIn";
      state.popup = "Failed to SignIn";

      // optional safety
      localStorage.removeItem("authUser");
    });
});

export default authReducer;
