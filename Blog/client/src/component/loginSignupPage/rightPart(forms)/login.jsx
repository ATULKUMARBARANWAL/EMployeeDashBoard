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
          bg-[#faf7f2] backdrop-blur-md
          border border-[#e7dfd2]
          rounded-2xl
          px-8 py-10
          min-h-[420px]
          shadow-xl shadow-black/10
          flex flex-col justify-center
        "
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-[#4a3f35] mb-10">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#4a3f35]">
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
                bg-[#faf7f2] border border-[#d5cdbf]
                focus:outline-none focus:ring-2 focus:ring-[#c39a6b]
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#4a3f35]">
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
                bg-[#faf7f2] border border-[#d5cdbf]
                focus:outline-none focus:ring-2 focus:ring-[#c39a6b]
                transition
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full mt-6 py-3
              bg-[#c39a6b] text-white font-semibold
              rounded-lg
              hover:bg-[#a47e53]
              transition-all duration-200
              shadow-md hover:shadow-lg
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
