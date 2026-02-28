import LogIn from "@/components/registration/LogIn";
import OTP from "@/components/registration/OTP";
import Profile from "@/components/registration/Profile";
import SignUp from "@/components/registration/SignUp";
import React, { useState } from "react";

const Registration = () => {
  const [page, setPage] = useState("signup");

  switch (page) {
    case "signup":
      return <SignUp onClick={setPage} />;
      break;

    case "otp":
      return <OTP onClick={setPage} />;
      break;

    case "profile":
      return <Profile />;
      break;

    case "login":
      return <LogIn onClick={setPage} />;
      break;

    default:
      break;
  }

  // return (

  //   );
};

export default Registration;
