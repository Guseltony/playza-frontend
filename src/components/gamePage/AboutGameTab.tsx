import { Info, Play, Target, Zap } from "lucide-react";

export const AboutGameTab = () => {
  return (
    <div className="space-y-4 md:space-y-12">
      {/* Overview Card */}
      <div className="glass-panel p-4 md:p-10 rounded-5xl border border-white/5 space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-playza-blue/20 rounded-2xl">
            <Info className="w-6 h-6 text-playza-blue" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Game Overview</h2>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-4xl font-medium">
          Step into a world of high-stakes competition. This game is designed to test your strategy, reflex, and endurance. 
          Navigate through challenging environments, outsmart your opponents, and climb the global leaderboard to claim massive cash rewards.
          Every move counts, and every second matters in this ultimate gaming showdown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Scoring System */}
        <div className="glass-panel p-4 md:p-8 rounded-xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-playza-yellow/20 rounded-xl">
              <Target className="w-5 h-5 text-playza-yellow" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Scoring System</h3>
          </div>
          <p className="text-slate-400 leading-relaxed font-medium">
            Your performance is measured by multiple metrics. Points are awarded for accuracy, speed, and objective completion. 
            Bonus multipliers are active for streaks and perfect runs.
          </p>
          <div className="pt-4 space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Base Score</span>
              <span className="text-white font-black">100 pts / task</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Speed Bonus</span>
              <span className="text-playza-green font-black">Up to 2x Multiplier</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="glass-panel p-4 md:p-8 rounded-xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-playza-blue/20 rounded-xl">
              <Zap className="w-5 h-5 text-playza-blue" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Gameplay Highlights</h3>
          </div>
          <ul className="space-y-4">
            {[
              "High-fidelity graphics and smooth 60FPS gameplay",
              "Real-time competitive leaderboard and matchmaking",
              "Dynamic environments that evolve as you play",
              "Exclusive rewards for top-tier performers"
            ].map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-playza-blue" />
                <span className="text-slate-400 font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final CTA Area */}
      <div className="p-4 md:p-8 bg-linear-to-br from-playza-blue/20 via-playza-blue/5 to-transparent rounded-xl border border-playza-blue/20 text-center space-y-8">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-4xl font-black text-white tracking-tight uppercase">Ready to dominate?</h2>
          <p className="text-slate-400 text-lg font-medium">
            Join the arena now and start your journey to the top of the leaderboard.
          </p>
        </div>
        
        <div className="flex  items-center justify-center">
          <button className="w-full sm:w-auto px-10 py-5 bg-playza-blue text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-playza-blue/90 transition-all shadow-xl shadow-playza-blue/20 group">
            <Play className="w-5 h-5 fill-current" />
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
