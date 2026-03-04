import { ChevronRight } from "lucide-react";
import React from "react";
import { MdAccountBalance, MdClose, MdLock } from "react-icons/md";
import { useNavigate } from "react-router";

const ReqWithdraw = ({ onClick }: { onClick: (value: boolean) => void }) => {
  const navigate = useNavigate();
  return (
    <div className="font-display text-slate-900  min-h-screen flex items-center justify-center p-4">
      {/* <!-- Modal Overlay --> */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-40 p-4">
        {/* <!-- Modal Container --> */}
        <div className="glass-panel w-full max-w-130 rounded-xl overflow-hidden shadow-2xl flex flex-col relative">
          {/* <!-- Header --> */}
          <div className="p-2 md:p-6 border-b border-primary/10 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100">
                Withdraw Funds
              </h2>
              <p className="text-slate-400 text-sm">
                Securely transfer winnings to your bank account
              </p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <MdClose />
            </button>
          </div>
          <div className="p-2 md:p-6 space-y-3 md:space-y-6">
            {/* <!-- Balance Card --> */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                  Available Balance
                </p>
                <p className="text-3xl font-bold text-primary mt-1">₦42,500</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MdAccountBalance className="text-3xl" />
              </div>
            </div>
            {/* <!-- Input Amount --> */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">
                Withdrawal Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  ₦
                </span>
                <input
                  className="w-full bg-background-dark/50 border border-primary/20 rounded-lg h-14 pl-10 pr-4 text-xl font-semibold text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                  placeholder="0.00"
                  type="text"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-tighter">
                  Max Amount
                </button>
              </div>
            </div>
            {/* <!-- Bank Selection --> */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">
                Destination Account
              </label>
              <div className="flex items-center justify-between p-4 bg-background-dark/40 border border-primary/10 rounded-lg group hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700">
                    <div
                      className="w-full h-full bg-slate-700 bg-center bg-cover"
                      data-alt="Zenith Bank corporate logo"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYtU1_HPzqSa-0y7X532KW2U-aTR0S8OtxGz_oRbuquaVquualIs4R3y5yF2WE8iDsxI_sM28uToeXTtx7rijNTJqhogLq5kHdgTqBvhtwHaAHSOtfe9BDrfcyBvh68e5Cl3HcZYORLIWoz_HbRLySIQXqhgEzFEkNOJzjGRG4UL4WpjkQyAxS__a1CYMogsi-_7FfOpMMMI-AQUrgfTeeF8v1SuP9cEpYSWZ55PENRj9Pcg9L4mJUfoNmhKNRDtLUnE69mbQFg2bH')",
                      }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-slate-100 font-bold">Zenith Bank</p>
                    <p className="text-slate-400 text-xs font-mono">
                      **** 8841
                    </p>
                  </div>
                </div>
                <ChevronRight className="material-symbols-outlined text-slate-500 group-hover:text-primary" />
              </div>
            </div>
            {/* <!-- Security / OTP Section --> */}

            {/* <!-- Footer Stats --> */}
            <div className="grid grid-cols-2 gap-4 border-t border-primary/10 pt-6">
              <div className="flex flex-col">
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  Min Withdrawal
                </p>
                <p className="text-slate-200 text-sm font-semibold">₦500</p>
              </div>
              <div className="flex flex-col text-right">
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  Processing Time
                </p>
                <p className="text-slate-200 text-sm font-semibold">
                  2-24 Hours
                </p>
              </div>
            </div>
            {/* <!-- Action Button --> */}
            <button
              onClick={() => onClick(true)}
              className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg neon-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MdLock className="material-symbols-outlined font-bold" />
              Request Withdrawal
            </button>
          </div>
          {/* <!-- Decorative Elements --> */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ReqWithdraw;
