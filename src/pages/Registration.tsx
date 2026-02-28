import LogIn from "@/components/registration/LogIn";
import OTP from "@/components/registration/OTP";
import Profile from "@/components/registration/Profile";
import SignUp from "@/components/registration/SignUp";
import { useState } from "react";

const Registration = () => {
  const [page, setPage] = useState("signup");

  const renderComponent = () => {
    switch (page) {
      case "signup":
        return <SignUp onClick={setPage} />;
      // break;

      case "otp":
        return <OTP onClick={setPage} />;
      // break;

      case "profile":
        return <Profile />;
      // break;

      case "login":
        return <LogIn onClick={setPage} />;
      // break;

      default:
        break;
    }
  };

  const component = renderComponent()

  return (
    <>
      { component }
    </>
  );
};

export default Registration;
