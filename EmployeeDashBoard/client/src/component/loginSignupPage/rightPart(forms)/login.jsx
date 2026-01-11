import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Index/authIndex/authIndex";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(signIn(formData));
  };

  return (
    <div className="w-full max-w-md">
      <div
        className="
          bg-white/95 backdrop-blur-xl
          border border-gray-200
          rounded-2xl
          px-8 py-10
          shadow-2xl shadow-black/10
        "
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to EMS Panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="
                w-full px-4 py-3 rounded-lg
                border border-gray-300
                bg-white
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="
                w-full px-4 py-3 rounded-lg
                border border-gray-300
                bg-white
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500
                transition
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full mt-6 py-3
              bg-indigo-600 text-white
              font-semibold
              rounded-lg
              hover:bg-indigo-700
              active:scale-[0.99]
              transition-all
              shadow-md hover:shadow-lg
            "
          >
            Sign In
          </button>
        </form>

        {/* Footer hint */}
        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Employee Management System
        </p>
      </div>
    </div>
  );
};

export default Login;
