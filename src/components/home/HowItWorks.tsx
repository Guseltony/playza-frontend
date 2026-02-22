import { FaWallet } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";

const HowItWorks = () => {
  return (
    <section className="glass rounded-2xl p-10 border border-white/5 overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <h2 className="md:text-3xl font-display font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-slate-400">
          PlayPeak is where skill meets reward. Follow these three simple steps
          to start winning today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="text-center group">
          <div className=" w-10 h-10 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors neon-glow-blue border border-primary/20">
            <FaWallet className="text-2xl md:text-4xl text-primary group-hover:text-white" />
          </div>
          <h4 className=" text-sm md:text-xl font-display font-bold text-white mb-2">
            1. Fund Wallet
          </h4>
          <p className="text-xs text-slate-500">
            Deposit securely via Bank Transfer, Card, or USSD.
          </p>
        </div>
        <div className="text-center group">
          <div className="w-10 h-10 md:w-20 md:h-20 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors neon-glow-purple border border-secondary/20">
            <MdStadium className="text-2xl md:text-4xl text-secondary group-hover:text-white" />
          </div>
          <h4 className="text-sm md:text-xl font-display font-bold text-white mb-2">
            2. Pick a Duel
          </h4>
          <p className="text-xs text-slate-500">
            Choose your favorite game and stake amount to match.
          </p>
        </div>
        <div className="text-center group">
          <div className="w-10 h-10 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors neon-glow-blue border border-primary/20">
            <FaTrophy className="text-2xl md:text-4xl text-primary group-hover:text-white" />
          </div>
          <h4 className="text-sm md:text-xl font-display font-bold text-white mb-2">
            3. Win &amp; Cashout
          </h4>
          <p className="text-xs text-slate-500">
            Top the leaderboard and withdraw your earnings instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
