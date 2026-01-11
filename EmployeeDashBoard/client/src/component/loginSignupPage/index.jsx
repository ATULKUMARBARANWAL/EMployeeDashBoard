import bgImg from "../../assets/staticImages/Employeemanage.jpg";

import LeftText from "./leftPart(text)/LeftText";
import Login from "./rightPart(forms)/login";

const LoginSignupPage = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center
      flex items-center justify-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* 🔹 Dark + Blur Overlay */}
      <div
        className="absolute inset-0
        bg-black/60 backdrop-blur-md"
      ></div>

      {/* 🔹 Optional: extra softness */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl
      flex flex-col lg:flex-row items-center lg:items-stretch gap-10">

        {/* Left Text */}
        <div className="hidden lg:flex flex-1 items-center justify-start pl-20">
          <LeftText />
        </div>

        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <Login />
        </div>

      </div>
    </div>
  );
};

export default LoginSignupPage;
