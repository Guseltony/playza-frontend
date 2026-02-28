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
          {/* <!-- Navigation --> */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 px-10 py-4">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-6">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
                ProGaming Security
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8 items-center">
              <div className="hidden md:flex items-center gap-9">
                <a
                  className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  href="#"
                >
                  Platform
                </a>
                <a
                  className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  href="#"
                >
                  Tournaments
                </a>
                <a
                  className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  href="#"
                >
                  Wallet
                </a>
              </div>
              <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all text-sm font-bold">
                <span>Support</span>
              </button>
            </div>
          </header>
          <main className="flex-1 flex items-center justify-center px-4 py-12">
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
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                    value="7"
                  />
                  <input
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                    value="2"
                  />
                  <input
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
                    className="flex h-14 w-11 md:w-14 text-center appearance-none bg-slate-900/50 border-2 border-slate-700/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-xl font-bold text-primary transition-all"
                    max="9"
                    maxLength={1}
                    type="text"
                  />
                  <input
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
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                    Change phone number
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OTP;
