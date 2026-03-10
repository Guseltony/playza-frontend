import OtpPin from "@/components/withdrawal/OtpPin";
import ReqWithdraw from "@/components/withdrawal/ReqWithdraw";
import { useEffect, useState } from "react";

const Withdrawal = () => {
  const [reqWithdraw, setReqWithdraw] = useState(false);

  useEffect(() => {
    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      // restore scroll
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0  bg-background z-40 p-2 md:p-0 flex items-center justify-center overflow-y-auto ">
      {reqWithdraw ? <OtpPin /> : <ReqWithdraw onClick={setReqWithdraw} />}
    </div>
  );
};

export default Withdrawal;
