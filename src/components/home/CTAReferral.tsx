import { NavLink } from "react-router";

const CTAReferral = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="w-full mx-auto @container">
        <div className="referral-card relative group transition-all duration-500 hover:border-primary/30">
          <div className="referral-accent-bg" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* <!-- Content --> */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 flex-1 ">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-pulse">
                  Limited Time Bonus
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-white">
                  Invite Friends. <br className="lg:hidden"/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                    Earn Rewards together.
                  </span>
                </h2>
                <p className="text-slate-400 text-base md:text-xl max-w-xl leading-relaxed">
                  Join the Playza community and get rewarded for every friend who joins. 
                  Earn up to <span className="text-accent font-black">1,000 Za</span> instantly.
                </p>
              </div>

              {/* <!-- Features --> */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                  <span className="text-xs font-medium text-slate-300">Instant Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                  <span className="text-xs font-medium text-slate-300">Unlimited Referrals</span>
                </div>
              </div>

              {/* <!-- Button --> */}
              <div className="pt-4 w-full md:w-auto">
                <NavLink 
                  to="/referral" 
                  className="btn-primary-glow inline-flex items-center justify-center w-full md:w-64 h-16 rounded-2xl bg-primary text-slate-900 text-lg font-black hover:bg-primary/90 transition-all uppercase tracking-wider"
                >
                  Start Referring
                </NavLink>
              </div>
            </div>

            {/* <!-- Decor / Visual element (Right side) --> */}
            <div className="hidden lg:flex justify-center relative">
                <div className="relative w-50 h-50">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-3xl rotate-12 backdrop-blur-xl flex items-center justify-center">
                        <span className="text-6xl">🎁</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAReferral;
