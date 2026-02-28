import { Edit } from "lucide-react";

const OTP = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden">
      {/* <!-- Abstract Background Texture --> */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 particle-bg opacity-40"></div>
      </div>
      <div className="relative z-10 flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-125 glass-card rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* <!-- Decorative Cyan Accent Line --> */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <div className="flex flex-col gap-2 mb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified_user
                  </span>
                </div>
                <h1 className="text-slate-100 text-3xl font-black leading-tight tracking-tight">
                  Verify Identity
                </h1>
                <p className="text-slate-400 text-base font-normal">
                  We've sent a 6-digit code to{" "}
                  <span className="text-primary font-medium">
                    +1 •••• ••• 42
                  </span>
                </p>
              </div>
              <div className="flex justify-center mb-8">
                <fieldset className="relative flex gap-3 md:gap-4">
                  {/* <!-- Focus ring is primary neon cyan --> */}
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                    value="7"
                  />
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                    value="2"
                  />
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
                    required
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                </fieldset>
              </div>
              <div className="flex flex-col gap-6">
                <button className="w-full flex h-14 items-center justify-center rounded-lg bg-primary text-background-dark text-lg font-bold tracking-wide hover:shadow-[0_0_20px_rgba(13,242,242,0.4)] transition-all">
                  Verify &amp; Continue
                </button>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700">
                        <p className="text-primary text-sm font-bold">01:59</p>
                      </div>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">
                        Expires
                      </p>
                    </div>
                    <div className="h-8 w-px bg-slate-700"></div>
                    <button className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">
                      Resend Code
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm font-normal transition-colors py-2 border-t border-slate-800 w-full justify-center mt-2">
                    <Edit className="text-sm"/>
                    Change phone number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
