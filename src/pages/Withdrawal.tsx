import { useEffect, useState } from "react";
import OtpPin from "@/components/withdrawal/OtpPin";
import ReqWithdraw from "@/components/withdrawal/ReqWithdraw";

const Withdrawal = () => {
  const [reqWithdraw, setReqWithdraw] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-110 flex flex-col items-center justify-start md:justify-center bg-black/80 backdrop-blur-md overflow-y-auto  animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl my-auto">
        {reqWithdraw ? (
          <OtpPin onBack={() => setReqWithdraw(false)} />
        ) : (
          <ReqWithdraw onClick={setReqWithdraw} />
        )}
      </div>
    </div>
  );
};

export default Withdrawal;
