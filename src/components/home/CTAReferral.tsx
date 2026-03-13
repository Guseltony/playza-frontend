import { TrendingUp, Verified } from "lucide-react";
import React from "react";
import { BsPersonAdd } from "react-icons/bs";
import {
  MdAdd,
  MdFace,
  MdFace2,
  MdFace5,
  MdGroupAdd,
  MdPersonAdd,
} from "react-icons/md";

const CTAReferral = () => {
  return (
    <section className="bg-custom-dark py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col @container">
        <div className="flex flex-col gap-12 lg:flex-row items-center">
          {/* <!-- Content Left --> */}
          <div className="flex flex-col gap-8 flex-1 @[480px]:gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-2xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                Invite Friends.
                <br />
                <span className="text-primary">Earn Rewards.</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-135">
                Earn up to{" "}
                <span className="text-accent font-extrabold">1,000 Za</span> on
                each referral
              </p>
            </div>
            {/* <!-- Benefit Bullets --> */}
            <div className="grid grid-cols-1 @[480px]:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">Bonus Credits</h3>
                  <p className="text-slate-400 text-sm">
                    $10 for every new player
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <TrendingUp />
                </div>
                <div>
                  <h3 className="text-white font-bold">XP Boost</h3>
                  <p className="text-slate-400 text-sm">Level up 2x faster</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Verified />
                </div>
                <div>
                  <h3 className="text-white font-bold">Unique Badges</h3>
                  <p className="text-slate-400 text-sm">
                    Exclusive recruiter status
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <MdGroupAdd />
                </div>
                <div>
                  <h3 className="text-white font-bold">Squad Perks</h3>
                  <p className="text-slate-400 text-sm">Group play discounts</p>
                </div>
              </div>
            </div>
            {/* <!-- Buttons --> */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex min-w-45 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Start Referring
              </button>
            </div>
          </div>
          {/* <!-- Illustration Right --> */}
          <div className="flex-1 w-full max-w-125 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <div
              className="relative w-full aspect-square bg-linear-to-br from-primary/30 to-slate-900 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8"
              data-alt="Abstract futuristic referral network connection illustration"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="size-32 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40 animate-pulse">
                    <MdPersonAdd className="text-primary text-6xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                    <MdAdd />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                    <MdFace className="text-slate-400" />
                  </div>
                  <div className="size-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                    <MdFace2 className="text-slate-400" />
                  </div>
                  <div className="size-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                    <MdFace5 className="text-slate-400" />
                  </div>
                </div>
                <p className="text-slate-300 font-medium text-center">
                  Join 10k+ users growing the network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAReferral;
