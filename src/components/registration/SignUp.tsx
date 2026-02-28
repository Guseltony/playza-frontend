import { Expand, Globe, Shield, Smartphone, Verified } from "lucide-react";
import { MdOutlineEnhancedEncryption } from "react-icons/md";

const Registration = () => {
  return (
    <main className="grow flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-120">
        <div className="glass-card rounded-xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* <!-- Subtle Neon Accent --> */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-100 mb-3">
              Create Account
            </h1>
            <p className="text-slate-400 text-sm">
              Experience elite competitive gaming with rewards.
            </p>
          </div>
          <form className="space-y-6">
            {/* <!-- Country Selector --> */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                Country
              </label>
              <div className="relative">
                <Globe className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-4 pl-12 pr-10 appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-slate-100 transition-all">
                  <option value="NG">Nigeria (+234)</option>
                  <option value="US">United States (+1)</option>
                  <option value="UK">United Kingdom (+44)</option>
                  <option value="ZA">South Africa (+27)</option>
                </select>
                <Expand className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
            {/* <!-- Phone Number Input --> */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                Phone Number
              </label>
              <div className="relative group">
                <Smartphone className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary transition-colors" />
                <input
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-slate-100 placeholder:text-slate-600 transition-all"
                  placeholder="800 000 0000"
                  type="tel"
                />
              </div>
            </div>
            {/* <!-- reCAPTCHA Placeholder --> */}
            <div className="flex items-center justify-center p-4 rounded-lg bg-slate-900/30 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-slate-700 rounded-sm"></div>
                <span className="text-xs text-slate-500 font-medium">
                  I'm not a robot
                </span>
                <div
                  className="ml-auto opacity-40 grayscale"
                  data-alt="reCAPTCHA Security Logo"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* <!-- Submit Button --> */}
            <button
              className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-lg neon-glow transition-all transform active:scale-[0.98]"
              type="submit"
            >
              Continue
            </button>
            {/* <!-- Alternative Options --> */}
            <div className="pt-4 space-y-4 text-center">
              {/* <a
                className="block text-sm font-medium text-primary/80 hover:text-primary transition-colors"
                href="#"
              >
                Sign up with Email instead
              </a> */}
              <div className="relative flex items-center py-2">
                <div className="grow border-t border-white/5"></div>
                <span className="shrink mx-4 text-xs text-slate-600 uppercase tracking-widest font-bold">
                  OR
                </span>
                <div className="grow border-t border-white/5"></div>
              </div>
              <p className="text-slate-400 text-sm">
                Already have an account?
                <a
                  className="text-slate-100 font-bold hover:underline"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
        {/* <!-- Trust Badges --> */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <Shield className="material-symbols-outlined text-primary text-xl" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Secure Platform
            </span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <MdOutlineEnhancedEncryption className="material-symbols-outlined text-primary text-xl" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              End-to-End Encrypted
            </span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <Verified className="material-symbols-outlined text-primary text-xl" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Fintech Certified
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
