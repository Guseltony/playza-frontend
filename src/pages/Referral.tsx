import ReferralStats from "../components/referral/ReferralStats";
import ReferralHowItWorks from "../components/referral/ReferralHowItWorks";
import ReferralHistoryTable from "../components/referral/ReferralHistoryTable";
import { useEffect } from "react";

const Referral = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full md:px-10 pb-20">
      <div className="flex flex-col gap-2 mb-8 mt-4">
        <h1 className="text-3xl md:text-4xl font-black text-slate-100 uppercase tracking-tight">
          Referral <span className="text-primary">Program</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Recruit your squad and earn legendary rewards.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <ReferralStats />
        
        <ReferralHowItWorks />
        
        <ReferralHistoryTable />
      </div>
    </div>
  );
};

export default Referral;
