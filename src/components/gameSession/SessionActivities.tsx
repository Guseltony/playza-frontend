import { LogOut, Trophy } from "lucide-react";
import React from "react";
import { BsPersonAdd } from "react-icons/bs";
import { GiMedal } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";

const SessionActivities = () => {
  return (
    <main className="flex-1 mx-auto w-full py-2 md:py-4">
      <div className="md:px-4 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-white tracking-tight text-lg lg:text-4xl font-bold leading-tight">
            Live Activity
          </h1>
          <p className="text-slate-400 text-sm">
            Real-time updates from Global Session #402
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-red-400 text-xs font-bold uppercase tracking-widest">
            Live
          </span>
        </div>
      </div>
      {/* <!-- Live Feed List --> */}
      <div className="space-y-3">
        {/* <!-- Activity Card 1 --> */}
        <div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-primary/30 transition-all group">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <BsPersonAdd />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-100 text-sm md:text-base font-semibold leading-normal group-hover:text-primary transition-colors">
              Player entered the lobby
            </p>
            <p className="text-slate-400 text-xs md:text-sm font-normal line-clamp-1">
              User <span className="text-slate-200">DarkKnight</span> joined the
              match session
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-slate-500 text-xs font-medium tracking-tighter">
              Just now
            </p>
          </div>
        </div>
        {/* <!-- Activity Card 2 --> */}
        <div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-primary/30 transition-all group">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <MdLeaderboard />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-100 text-sm md:text-base font-semibold leading-normal group-hover:text-primary transition-colors">
              Rank changed
            </p>
            <p className="text-slate-400 text-xs md:text-sm font-normal line-clamp-1">
              <span className="text-slate-200">ShadowMaster</span> moved up to{" "}
              <span className="text-primary font-medium">Rank #2</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-slate-500 text-xs font-medium tracking-tighter">
              45s ago
            </p>
          </div>
        </div>
        {/* <!-- Activity Card 3 --> */}
        <div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-primary/30 transition-all group">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <Trophy />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-100 text-sm md:text-base font-semibold leading-normal group-hover:text-primary transition-colors">
              Score submitted
            </p>
            <p className="text-slate-400 text-xs md:text-sm font-normal line-clamp-1">
              <span className="text-slate-200">ProGamer_X</span> finished with a
              score of <span className="text-primary font-bold">12,450</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-slate-500 text-xs font-medium tracking-tighter">
              2m ago
            </p>
          </div>
        </div>
        {/* <!-- Activity Card 4 --> */}
        <div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-primary/30 transition-all group">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <GiMedal />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-100 text-sm md:text-base font-semibold leading-normal group-hover:text-primary transition-colors">
              Achievement Unlocked
            </p>
            <p className="text-slate-400 text-xs md:text-sm font-normal line-clamp-1">
              <span className="text-slate-200">AceHunter</span> earned the
              "Flawless Execution" badge
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-slate-500 text-xs font-medium tracking-tighter">
              5m ago
            </p>
          </div>
        </div>
        {/* <!-- Activity Card 5 --> */}
        <div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-primary/30 transition-all group opacity-80">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <LogOut />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-100 text-sm md:text-base font-semibold leading-normal group-hover:text-primary transition-colors">
              Player left
            </p>
            <p className="text-slate-400 text-sm font-normal line-clamp-1">
              User <span className="text-slate-200">SilentWolf</span> has
              disconnected
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-slate-500 text-xs font-medium tracking-tighter">
              12m ago
            </p>
          </div>
        </div>
        {/* <!-- Load More Button --> */}
        <div className="pt-6 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-neutral-800 hover:border-primary/50 text-slate-400 hover:text-primary transition-all text-sm font-semibold">
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
            Show Older Activity
          </button>
        </div>
      </div>
    </main>
  );
};

export default SessionActivities;
