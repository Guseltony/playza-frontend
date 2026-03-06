import { useEffect } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import {
  // MdAccountBalanceWallet,
  // MdAddCard,
  MdArrowDownward,
  MdBolt,
} from "react-icons/md";

const LiveEntryModal = ({ onClick }: { onClick: (value: boolean) => void }) => {
  useEffect(() => {
    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      // restore scroll
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <main className="fixed inset-0 backdrop-blur-md overflow-y-auto flex-1 flex items-center justify-center bg-black/40 z-40 pb-20 md:pb-0 pt-20">
      <div className="glass-modal w-full max-w-130 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-2 md:p-6 max-h-fit">
          <div className="text-center md-2 md:mb-8">
            <h1 className="text-slate-100 text-3xl font-extrabold tracking-tight mb-2">
              Confirm Entry
            </h1>
            <p className="text-slate-400 text-sm">
              You are about to join a live competitive match.
            </p>
          </div>
          <div className="bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden mb-3 md:mb-6 group hover:border-primary/30 transition-colors">
            <div
              className="h-32 w-full bg-cover bg-center relative"
              data-alt="High speed futuristic racing game landscape"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAidbeU0WgwvrLv57QjlGkKw-k3BTFxO6S9SXiifffVcBgORCjId_ei2wDmSEeM1LkNjF_-OcrE4WAR-oZO8zay772R_sXRxorLy8dTYWasWamyxBLtyRl4EFE49FginGfrbKhnZryNLwLPlCTbVflhE8oyWKzmkXknm0RkphP0ZOSJNYw96nZX_4ocHjfirSHZvZkumsf7VJpj4Iz12cuS1yF6u80YDdISbNNvqQeS5KRACzZcP609ok7oIqaP4cgO85jWYXPFMjmj')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-primary/30">
                  Live Ranked
                </span>
              </div>
            </div>
            <div className="p-2 md:p-4 flex justify-between items-center">
              <div>
                <h3 className="text-slate-100 text-xl font-bold">Speed Rush</h3>
                <p className="text-slate-500 text-xs mt-1">
                  Global Tournament #402
                </p>
              </div>
              <div className="text-right">
                <p className="text-primary text-xl font-black">₦100</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">
                  Entry Fee
                </p>
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center gap-2">
              <FaTrophy className=" text-slate-400 text-sm" />
              <p className="text-slate-300 text-xs">
                Prize Pool:{" "}
                <span className="text-slate-100 font-semibold">₦250,000</span>
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-2 md:mb-6">
            <h4 className="text-slate-100 text-sm font-bold uppercase tracking-wider px-1">
              Wallet Breakdown
            </h4>
            <div className="bg-slate-900/40 rounded-xl p-2 md:p-5 space-y-3 border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Current Balance</span>
                <span className="text-slate-100 font-medium">₦1,250.00</span>
              </div>
              <div className="flex justify-between items-center text-primary">
                <div className="flex items-center gap-2">
                  <MdArrowDownward className="text-sm" />
                  <span className="text-sm font-semibold">Total Deduction</span>
                </div>
                <span className="font-bold">-₦100.00</span>
              </div>
              <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Balance After Entry
                </span>
                <span className="text-slate-100 font-bold">₦1,150.00</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-2 md:p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 mb-4 md:mb-6">
            <FaInfo className="text-amber-500 shrink-0" />
            <p className="text-amber-200/80 text-[11px] leading-relaxed">
              Entry fees are non-refundable once the match begins. Ensure you
              have a stable internet connection before proceeding to the game
              lobby.
            </p>
          </div>

          {/* <div className="warning-glass rounded-lg p-2 md:p-4 mb-4 md:mb-6 flex gap-4 items-start border-l-4 border-l-red-500">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <MdAccountBalanceWallet className="text-red-500 text-2xl" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-red-400 text-sm font-bold uppercase tracking-wide">
                Insufficient Wallet Balance
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                You need an additional{" "}
                <span className="text-white font-bold">₦455</span> to enter this
                tournament. Please top up your wallet.
              </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-3">
            {/* <button className="w-full h-12 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
              <MdAddCard className="group-hover:scale-110 transition-transform" />
              <span>Deposit Funds Now</span>
            </button> */}
            <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(19,236,236,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Confirm &amp; Enter Game
              <MdBolt />
            </button>
            <button
              onClick={() => onClick(false)}
              className="w-full bg-white/5 hover:bg-white/10 text-slate-300 font-semibold py-3 rounded-xl transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LiveEntryModal;
