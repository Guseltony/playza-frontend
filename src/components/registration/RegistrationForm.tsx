import { Button } from "../ui/button";
import { Globe, Smartphone, User, Mail, Lock, Shield, ArrowRight, Rocket } from "lucide-react";
// import { Link } from "react-router";

interface RegistrationFormProps {
  onClick: (value: string) => void;
}

const RegistrationForm = ({ onClick }: RegistrationFormProps) => {
  return (
    <main className="h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="glass-card p-2 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle Neon Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase font-display">
              Join Playza
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
              Create your account to start competing in elite tournaments and earning rewards.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); onClick("otp"); }}>
            {/* Account Info Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Gaming Handle
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    placeholder="AnthonyGamer"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    placeholder="gamer@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Country
                </label>
                <div className="relative group">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <select
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-10 appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white transition-all font-medium"
                  >
                    <option value="NG">Nigeria (+234)</option>
                    <option value="US">United States (+1)</option>
                    <option value="UK">United Kingdom (+44)</option>
                    <option value="ZA">South Africa (+27)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Phone Number
                </label>
                <div className="relative group">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    placeholder="800 000 0000"
                    type="tel"
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex justify-between">
                  Referral Code
                  <span className="text-[8px] opacity-40 font-normal italic">Optional</span>
                </label>
                <div className="relative group">
                  <Rocket className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white placeholder:text-slate-600 transition-all font-medium"
                    placeholder="LEVEL-UP"
                    type="text"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  className="w-full h-[60px] bg-primary text-background-dark font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all group"
                  type="submit"
                >
                  Create Account
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="md:col-span-2 pt-6 text-center border-t border-white/5 mt-2">
              <p className="text-slate-500 text-xs">
                Already have an account? 
                <button 
                  onClick={() => onClick("login")}
                  className="ml-2 text-white font-black hover:text-primary transition-colors underline underline-offset-4"
                >
                  LOG IN
                </button>
              </p>
              <p className="text-slate-600 text-[10px] mt-6 max-w-sm mx-auto leading-relaxed">
                By clicking "Create Account", you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Security Protocol</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
