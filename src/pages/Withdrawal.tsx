import OtpPin from "@/components/withdrawal/OtpPin";
import ReqWithdraw from "@/components/withdrawal/ReqWithdraw";
import { useState } from "react";

const Withdrawal = () => {
  const [reqWithdraw, setReqWithdraw] = useState(false);

  return (
    <div className="fixed inset-0 bg-background z-40 px-2 md:p-0 flex items-center justify-center">
      {reqWithdraw ? <OtpPin /> : <ReqWithdraw onClick={setReqWithdraw} />}
    </div>
  );
};

export default Withdrawal;
