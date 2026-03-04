import React from "react";
import { MdLock } from "react-icons/md";

const OtpPin = () => {
  return (
    <div className="w-full max-w-100 p-6 bg-background/30 rounded-xl overflow-hidden shadow-2xl flex flex-col items-center gap-y-4 justify-center relative border border-primary/20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full"></div>
      {/* OTP Requirement */}
      <div className="flex flex-col items-center gap-3">
        <label className="text-sm font-medium text-slate-300">
          Enter 6-Digit Security OTP sent to your number
        </label>
        <div className="flex gap-2 justify-center">
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
        </div>
        <button className="text-xs text-slate-500 hover:text-primary transition-colors">
          Didn't receive code? Resend
        </button>
      </div>

      {/* Pin Requirement */}
      <div className="flex flex-col items-center gap-3">
        <label className="text-sm font-medium text-slate-300">
          Enter Your 4-Digit Security Pin
        </label>
        <div className="flex gap-2 justify-center">
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
          <input
            className="w-10 h-12 bg-background-dark border border-primary/20 rounded text-center text-xl font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            maxLength={1}
            type="text"
          />
        </div>
      </div>
      <button className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg neon-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
        <MdLock className="material-symbols-outlined font-bold" />
        Withdraw
      </button>
    </div>
  );
};

export default OtpPin;
