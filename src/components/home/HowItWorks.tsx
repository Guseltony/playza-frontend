import { BsWallet } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-6">
      <div className="text-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
          <BsWallet className="text-primary"/>
        </div>
        <h5 className="text-xs font-bold text-white mb-1">1. Deposit</h5>
        <p className="text-xs text-slate-500">
          Fund your wallet with secure payment methods.
        </p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
          <FaGamepad className="text-primary"/>
        </div>
        <h5 className="text-xs font-bold text-white mb-1">2. Play</h5>
        <p className="text-xs text-slate-500">
          Pick a game and set your stakes against others.
        </p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
        <MdPayment className="text-primary"/>
        </div>
        <h5 className="text-xs font-bold text-white mb-1">3. Withdraw</h5>
        <p className="text-xs text-slate-500">
          Instant withdrawals for all your winnings.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
