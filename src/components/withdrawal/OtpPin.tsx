import { useNavigate } from "react-router";
import { ShieldCheck, Receipt, Timer, Lock, ArrowLeft, CheckCircle2 } from "lucide-react";

interface OtpPinProps {
  onBack: () => void;
}

const OtpPin = ({ onBack }: OtpPinProps) => {
  const navigate = useNavigate();

  return (
    <div className="glass-card rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative">
      {/* Header Accent */}
      <div className="h-1.5 w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-60"></div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-20 flex items-center gap-2 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest pr-1">Back</span>
      </button>

      <div className="p-5 md:p-10 pt-16 md:pt-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <div className="size-16 md:size-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner mb-4 relative">
            <ShieldCheck className="text-primary size-8 md:size-10" />
            <div className="absolute -bottom-1 -right-1 size-6 bg-emerald-500 rounded-full border-4 border-background-dark flex items-center justify-center">
              <Lock size={10} className="text-white" />
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase font-display">
            Security <span className="text-primary">Verification</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">
            Confirm your withdrawal request
          </p>
        </div>

        <div className="space-y-8">
          {/* Summary Card */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Receipt size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Withdrawal Summary</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-500 text-xs font-bold font-sans">Amount</span>
                <span className="text-white text-lg font-black tracking-tight">₦42,500.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-xs font-bold font-sans">To Zenith Bank</span>
                <div className="text-right">
                  <p className="text-white text-xs font-black uppercase tracking-tight">**** 8841</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Fields */}
          <div className="space-y-6">
            {/* 2FA Section */}
            <div className="space-y-4 text-center">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                Enter 6-digit 2FA Code
              </label>
              <div className="flex justify-between gap-1.5 md:gap-2 max-w-sm mx-auto">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    className="w-full h-12 md:h-14 bg-white/5 border-2 border-white/5 rounded-lg md:rounded-xl text-center text-xl font-black text-primary focus:border-primary/50 focus:bg-white/[0.07] outline-none transition-all"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-500">
                <Timer size={12} className="text-primary" />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Expires in <span className="text-primary font-mono">02:44</span>
                </span>
              </div>
            </div>

            {/* Pin Section */}
            <div className="space-y-4 text-center">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                Enter Withdrawal PIN
              </label>
              <div className="flex justify-center gap-3 md:gap-4">
                {[...Array(4)].map((_, i) => (
                  <input
                    key={`pin-${i}`}
                    type="password"
                    maxLength={1}
                    inputMode="numeric"
                    className="w-12 h-14 bg-white/5 border-2 border-white/5 rounded-lg md:rounded-xl text-center text-xl font-black text-white focus:border-primary/50 focus:bg-white/[0.07] outline-none transition-all"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-2 flex flex-col gap-4">
            <button className="w-full bg-primary text-background-dark py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
               <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
               <CheckCircle2 size={18} />
               <span>Confirm Withdrawal</span>
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="py-2 text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all"
            >
              Cancel Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPin;
