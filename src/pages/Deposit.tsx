import { useState, useEffect } from "react";
import { 
  Wallet, 
  X, 
  ArrowRight, 
  CreditCard, 
  Building2, 
  CheckCircle2, 
  Info,
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router";

const QUICK_AMOUNTS = [1000, 2000, 5000, 10000];

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card");
  const [isHovering, setIsHovering] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleAmountChange = (val: string) => {
    // Only allow numbers
    if (val === "" || /^\d+$/.test(val)) {
      setAmount(val);
    }
  };

  const handleQuickSelect = (val: number) => {
    setAmount(val.toString());
  };

  const processingFee = amount ? Math.max(50, Number(amount) * 0.015).toFixed(2) : "0.00";
  const totalPayable = amount ? (Number(amount) + Number(processingFee)).toLocaleString() : "0.00";

  return (
    <div className="fixed inset-0 z-110 flex flex-col items-center justify-start md:justify-center bg-black/80 backdrop-blur-md overflow-y-auto py-8 md:py-16 animate-in fade-in duration-300 overflow-hidden">
      <div className="relative w-full max-w-xl my-auto">
        {/* Background Glows */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

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
                <Wallet className="text-primary size-6 md:size-7" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase font-display">
                  Deposit <span className="text-primary">Funds</span>
                </h1>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-0.5">
                  Secure Wallet Replenishment
                </p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Amount Input Section */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-end px-1">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Enter Amount
                  </label>
                  {amount && (
                    <span className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest animate-pulse">
                      Processing Instantly
                    </span>
                  )}
                </div>
                
                <div className="relative group">
                  <span className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-primary font-black text-2xl md:text-3xl opacity-50 transition-opacity group-focus-within:opacity-100">
                    ₦
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/5 rounded-xl md:rounded-2xl py-4 md:py-6 pl-10 md:pl-12 pr-6 text-2xl md:text-3xl font-black text-white placeholder:text-slate-700 outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all shadow-inner"
                    placeholder="0.00"
                  />
                </div>

                {/* Quick Select Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                  {QUICK_AMOUNTS.map((val, idx) => (
                    <button
                      key={val}
                      onMouseEnter={() => setIsHovering(idx)}
                      onMouseLeave={() => setIsHovering(null)}
                      onClick={() => handleQuickSelect(val)}
                      className={`relative py-2.5 md:py-3 rounded-lg md:rounded-xl text-[11px] md:text-xs font-black transition-all border shrink-0 overflow-hidden ${
                        Number(amount) === val
                        ? "bg-primary text-background-dark border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                        : "bg-white/5 text-slate-500 border-white/5 hover:border-primary/30 hover:text-primary"
                      }`}
                    >
                      {/* Hover Slide Effect */}
                      <div className={`absolute inset-0 bg-primary/10 transition-transform duration-300 -translate-x-full ${isHovering === idx ? 'translate-x-0' : ''}`}></div>
                      <span className="relative z-10">₦{val.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="space-y-4">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">
                  Payment Method
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all group text-left relative overflow-hidden ${
                      paymentMethod === "card" 
                      ? "border-primary/50 bg-primary/5" 
                      : "border-white/5 bg-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className={`size-9 md:size-10 rounded-xl flex items-center justify-center shrink-0 ${paymentMethod === "card" ? "bg-primary text-background-dark" : "bg-white/5 text-slate-400"}`}>
                      <CreditCard className="size-4.5 md:size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className={`font-black uppercase text-[10px] md:text-[11px] tracking-wider mb-0.5 ${paymentMethod === "card" ? "text-primary" : "text-slate-300"}`}>
                        Bank Card
                      </p>
                      <p className="text-[9px] md:text-[10px] text-slate-500 leading-tight">Visa, Mastercard, Verve</p>
                    </div>
                    {paymentMethod === "card" && (
                      <CheckCircle2 className="absolute top-3 right-3 md:top-4 md:right-4 text-primary size-3.5 md:size-4" />
                    )}
                  </button>

                  <button 
                    onClick={() => setPaymentMethod("transfer")}
                    className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all group text-left relative overflow-hidden ${
                      paymentMethod === "transfer" 
                      ? "border-primary/50 bg-primary/5" 
                      : "border-white/5 bg-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className={`size-9 md:size-10 rounded-xl flex items-center justify-center shrink-0 ${paymentMethod === "transfer" ? "bg-primary text-background-dark" : "bg-white/5 text-slate-400"}`}>
                      <Building2 className="size-4.5 md:size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className={`font-black uppercase text-[10px] md:text-[11px] tracking-wider mb-0.5 ${paymentMethod === "transfer" ? "text-primary" : "text-slate-300"}`}>
                        Transfer
                      </p>
                      <p className="text-[9px] md:text-[10px] text-slate-500 leading-tight">Direct Bank Transfer</p>
                    </div>
                    {paymentMethod === "transfer" && (
                      <CheckCircle2 className="absolute top-3 right-3 md:top-4 md:right-4 text-primary size-3.5 md:size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-black/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-[10px] md:text-xs">
                   <div className="flex items-center gap-2 text-slate-500 font-bold">
                     <Info size={12} />
                     <span>Transaction Fee</span>
                   </div>
                   <span className="text-white font-black">₦{processingFee}</span>
                </div>
                <div className="h-px bg-white/5"></div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Total Payable</span>
                  <span className="text-xl md:text-2xl font-black text-primary">₦{totalPayable}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col items-center gap-5 md:gap-6">
                <button className="w-full bg-primary text-background-dark py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden text-sm md:text-base">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span>Initiate Deposit</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform size-4.5 md:size-5" />
                </button>
                
                <div className="flex items-center gap-2 text-[8px] md:text-[10px] text-slate-500 font-black uppercase tracking-widest">
                  <ShieldCheck className="text-emerald-500 size-3 md:size-3.5" />
                  <span>256-bit Encrypted Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
