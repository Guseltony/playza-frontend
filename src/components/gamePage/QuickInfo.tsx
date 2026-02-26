import { Award, Calendar, Coins, Timer } from "lucide-react";

const QuickInfo = () => {
  return (
    <div className="w-full mx-auto px-2 lg:px-8 hidden md:block md:mt-20 lg:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-2 lg:p-4 rounded-lg border border-slate-800 card-hover flex items-center gap-2 lg:gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Coins className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs text-slate-300 font-bold uppercase">
              Entry Fee
            </div>
            <div className="font-display font-bold lg:text-lg text-emerald-400">
              ₦100
            </div>
            <div className="text-xs text-slate-400">per attempt</div>
          </div>
        </div>
        <div className="glass-panel p-2 lg:p-4 rounded-lg border border-slate-800 card-hover flex items-center gap-2 lg:gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Timer className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-xs text-slate-300 font-bold uppercase">
              Duration
            </div>
            <div className="font-display font-bold lg:text-lg text-purple-400">
              5 Minutes
            </div>
            <div className="text-xs text-slate-400">per session</div>
          </div>
        </div>
        <div className="glass-panel p-2 lg:p-4 rounded-lg border border-slate-800 card-hover flex items-center gap-2 lg:gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs text-slate-300 font-bold uppercase">
              Prize Distribution
            </div>
            <div className="font-display font-bold lg:text-lg text-cyan-400">
              Top 10 Win
            </div>
            <div className="text-xs text-slate-400">60% to 1st place</div>
          </div>
        </div>
        <div className="glass-panel p-2 lg:p-4 rounded-lg border border-slate-800 card-hover flex items-center gap-2 lg:gap-3">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <div className="text-xs text-slate-300 font-bold uppercase">
              Sessions
            </div>
            <div className="font-display font-bold lg:text-lg text-pink-400">
              3 Daily
            </div>
            <div className="text-xs text-slate-400">8AM, 3PM, 8PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
