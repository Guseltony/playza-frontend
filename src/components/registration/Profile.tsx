import { LockIcon, Rocket, Shield, User } from "lucide-react";
import { MdEmail } from "react-icons/md";


const Profile = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-140 w-full">
        {/* <!-- Title Section --> */}
        <div className="text-center mb-10">
          <h1 className="text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3">
            Complete Your Profile
          </h1>
          <p className="text-slate-400 text-lg">
            Secure your account with fintech-level encryption to start
            competing.
          </p>
        </div>
        {/* <!-- Profile Form Card --> */}
        <div className="glass-card rounded-xl p-8 shadow-2xl border border-primary/20">
          <div className="space-y-6">
            {/* <!-- Username Field --> */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <User className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl"/>
                <input
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-dark/60 border border-primary/20 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600"
                  placeholder="Enter your gaming handle"
                  type="text"
                />
              </div>
            </div>
            {/* Email field */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <MdEmail className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl"/>
                <input
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-dark/60 border border-primary/20 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600"
                  placeholder="Enter your gaming handle"
                  type="text"
                />
              </div>
            </div>
            {/* <!-- Password Field --> */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <LockIcon className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl"/>
                <input
                  required
                  className="w-full pl-12 pr-12 py-4 rounded-lg bg-background-dark/60 border border-primary/20 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600"
                  type="password"
                  value="cybersecurity101"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-primary transition-colors">
                  visibility
                </span>
              </div>
              {/* <!-- Strength Indicator --> */}
              <div className="mt-3">
                <div className="flex gap-2 h-1.5 mb-2">
                  <div className="flex-1 bg-primary rounded-full"></div>
                  <div className="flex-1 bg-primary rounded-full"></div>
                  <div className="flex-1 bg-primary/20 rounded-full"></div>
                  <div className="flex-1 bg-primary/20 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">
                    MEDIUM STRENGTH
                  </span>
                  <span className="text-xs text-slate-500 italic">
                    Add a special character
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Confirm Password Field --> */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl"/>
                <input
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-dark/60 border border-primary/20 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600"
                  placeholder="Repeat your password"
                  type="password"
                />
              </div>
            </div>
            {/* <!-- Validation Hints --> */}
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-primary">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                <span>Minimum 8 characters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                <span>Includes 1 number</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  radio_button_unchecked
                </span>
                <span>At least one special character (@, #, $, etc.)</span>
              </div>
            </div>
            {/* <!-- Optional Referral --> */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-200 text-sm font-semibold uppercase tracking-wider flex justify-between">
                Referral Code
                <span className="text-[10px] text-slate-500 font-normal">
                  OPTIONAL
                </span>
              </label>
              <input
                required
                className="w-full px-4 py-3 rounded-lg bg-background-dark/40 border border-slate-800 text-slate-100 focus:border-primary/50 transition-all placeholder:text-slate-700"
                placeholder="e.g. CYBER-2024"
                type="text"
              />
            </div>
            {/* <!-- Submit Button --> */}
            <div className="pt-4">
              <button className="w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(6,249,249,0.3)] hover:shadow-[0_0_30px_rgba(6,249,249,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                Complete Profile
                <Rocket />
              </button>
              <p className="text-center text-slate-500 text-xs mt-4">
                By completing your profile, you agree to our
                <a
                  className="text-primary/70 hover:text-primary underline"
                  href="#"
                >
                  Security Protocol
                </a>{" "}
                and{" "}
                <a
                  className="text-primary/70 hover:text-primary underline"
                  href="#"
                >
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile