import { MdLockOpen, MdReceiptLong, MdSchedule } from "react-icons/md";
import { useNavigate } from "react-router";

const OtpPin = () => {
  const navigate = useNavigate();
  return (
    <main className="grow flex items-center justify-center p-2 md:p-6 relative">
      {/* <!-- Abstract Particles Mockup --> */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 blur-[1px]"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40 blur-[1px]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-primary rounded-full opacity-30"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-10 blur-sm"></div>
      </div>
      <div className="w-full max-w-lg">
        <div className="mb-4 md:mb-8 text-center">
          <h2 className="text-xl md:text-4xl font-black text-white mb-2">
            Security Verification
          </h2>
          <p className="text-slate-400">
            Confirm your withdrawal request to proceed
          </p>
        </div>
        <div className="glass-card rounded-2xl p-2 md:p-8 shadow-2xl">
          {/* <!-- Summary Section --> */}
          <div className="mb-4 md:mb-8">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <MdReceiptLong className="text-sm" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Withdrawal Summary
              </span>
            </div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">
                  Amount to Withdraw
                </span>
                <span className="text-white text-xl font-bold tracking-tight">
                  $1,250.00
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">Destination Bank</span>
                <div className="text-right">
                  <p className="text-white text-sm font-medium">Opay</p>
                  <p className="text-slate-500 text-xs">Ending in •••• 4291</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- OTP Section --> */}
          <div className="mt-4 md:mt-10">
            <div>
              <label className="block text-center text-sm font-medium text-slate-300 mb-3 md:mb-6">
                Enter 6-digit 2FA Code
              </label>
              <div className="flex justify-between gap-2 mb-3 md:mb-6">
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-3 md:mb-6 text-slate-400 text-sm">
              <MdSchedule className="text-sm" />
              <span>
                Code expires in{" "}
                <span className="text-primary font-mono">02:44</span>
              </span>
            </div>

            <div>
              <label className="block text-center text-sm font-medium text-slate-300 mb-3 md:mb-6">
                Enter Your Withdrawal Pin
              </label>
              <div className="flex justify-center gap-2 mb-3 md:mb-6">
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
                <input
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-2xl font-bold text-primary focus:outline-none focus:ring-0 otp-input transition-all"
                  maxLength={1}
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full py-4 bg-primary text-background-dark font-black rounded-xl hover:shadow-[0_0_25px_rgba(6,249,249,0.5)] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                <span>Confirm Withdrawal</span>
                <MdLockOpen className="font-bold" />
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full py-4 text-slate-400 font-bold rounded-xl hover:text-white transition-all text-sm"
              >
                Cancel Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtpPin;
