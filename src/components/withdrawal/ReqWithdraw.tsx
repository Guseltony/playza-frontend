import { ChevronRight, Wallet, X, Lock, Info, Landmark } from "lucide-react";
import { useNavigate } from "react-router";

interface ReqWithdrawProps {
  onClick: (value: boolean) => void;
}

const ReqWithdraw = ({ onClick }: ReqWithdrawProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="glass-card rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative">
      {/* Header Accent */}
      <div className="h-1.5 w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-60"></div>

      {/* Close Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-20"
      >
        <X size={20} />
      </button>

      <div className="p-5 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
          <div className="size-12 md:size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner shrink-0">
            <Landmark className="text-primary size-6 md:size-7" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase font-display">
              Withdraw <span className="text-primary">Funds</span>
            </h1>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-0.5">
              Secure Profit Extraction
            </p>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Balance Preview */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex justify-between items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Available Balance</p>
              <h2 className="text-2xl md:text-3xl font-black text-primary">₦42,500</h2>
            </div>
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
              <Wallet size={24} />
            </div>
          </div>

          {/* Amount Input Section */}
          <div className="space-y-3">
            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">
              Withdrawal Amount
            </label>
            <div className="relative group">
              <span className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-primary font-black text-2xl md:text-3xl opacity-50 transition-opacity group-focus-within:opacity-100">
                ₦
              </span>
              <input
                type="text"
                inputMode="numeric"
                className="w-full bg-white/5 border-2 border-white/5 rounded-xl md:rounded-2xl py-4 md:py-6 pl-10 md:pl-12 pr-28 text-2xl md:text-3xl font-black text-white placeholder:text-slate-700 outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all shadow-inner"
                placeholder="0.00"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all">
                Max
              </button>
            </div>
          </div>

          {/* Destination Section */}
          <div className="space-y-3">
            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">
              Destination Account
            </label>
            <div className="flex items-center justify-between p-4 bg-white/5 border-2 border-white/5 rounded-xl md:rounded-2xl hover:border-primary/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 p-0.5">
                  <div className="w-full h-full bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYtU1_HPzqSa-0y7X532KW2U-aTR0S8OtxGz_oRbuquaVquualIs4R3y5yF2WE8iDsxI_sM28uToeXTtx7rijNTJqhogLq5kHdgTqBvhtwHaAHSOtfe9BDrfcyBvh68e5Cl3HcZYORLIWoz_HbRLySIQXqhgEzFEkNOJzjGRG4UL4WpjkQyAxS__a1CYMogsi-_7FfOpMMMI-AQUrgfTeeF8v1SuP9cEpYSWZ55PENRj9Pcg9L4mJUfoNmhKNRDtLUnE69mbQFg2bH" 
                      alt="Zenith Bank"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-black uppercase tracking-tight">Zenith Bank</p>
                  <p className="text-slate-500 text-xs font-mono">•••• 8841</p>
                </div>
              </div>
              <ChevronRight className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Min Withdrawal</p>
              <p className="text-white text-sm font-black">₦500</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Processing Time</p>
              <div className="flex items-center justify-end gap-1.5 text-white">
                <Info size={12} className="text-primary" />
                <p className="text-sm font-black">2-24 Hours</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onClick(true)}
              className="w-full bg-primary text-background-dark py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Lock className="size-4.5 group-hover:rotate-12 transition-transform" />
              <span>Initiate Withdrawal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqWithdraw;
