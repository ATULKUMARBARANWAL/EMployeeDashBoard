import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./component/loginSignupPage";
import Dashboard from "./component/Dashboard/Dashboard";
import AppLayout from "./component/layout/AppLayout";
import ToastProvider from "./component/common/ToastProvider";
function App() {
  const user = useSelector((state) => state.auth.user);
console.log("User",user)
  return (
    <>
    <ToastProvider />
    <Router>
      <Routes>
        {/* 🔐 Login Route */}
        <Route
          path="/signIn"
          element={
            user ? <Navigate to="/dashboard" replace /> : <Home />
          }
        />

        {/* 🏠 Protected Routes */}
        <Route
          path="/"
          element={
            user ? <AppLayout /> : <Navigate to="/signIn" replace />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* ❌ Fallback */}
        <Route
          path="*"
          element={
            <Navigate to={user ? "/dashboard" : "/signIn"} replace />
          }
        />
      </Routes>
    </Router>

    </>
  );
}

export default App;
