import { ShieldCheck, Trophy, Smartphone, Upload, Search, Wallet } from "lucide-react";

export const RulesTab = () => {
  const steps = [
    {
      title: "Join a Session",
      desc: "Browse available tournament sessions and join by paying the required entry fee from your Playza wallet balance to secure your spot.",
      icon: Search,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Play Your Best",
      desc: "Launch the game and play. Navigate the course, collect coins, and achieve the highest possible score within the session time limit.",
      icon: Smartphone,
      color: "text-playza-blue",
      bg: "bg-playza-blue/10",
    },
    {
      title: "Submit Score",
      desc: "Once your run is over, ensure your final score is recorded and submitted to the session leaderboard before the timer expires.",
      icon: Upload,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Rank High",
      desc: "Keep an eye on the rankings. Players are ranked based on their highest score achieved during that specific session.",
      icon: Trophy,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Earn Rewards",
      desc: "Top performing players receive cash rewards directly into their Playza wallets immediately after the session concludes.",
      icon: Wallet,
      color: "text-playza-green",
      bg: "bg-playza-green/10",
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto">
      {/* Timeline Steps */}
      <div className="relative space-y-4  md:space-y-12 before:absolute before:inset-0 before:ml-10 before:-translate-x-2 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-playza-blue/50 before:via-white/5 before:to-transparent">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center gap-6 md:justify-normal md:odd:flex-row-reverse group">
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-playza-dark border border-white/10 shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-playza-blue/50 transition-colors duration-500">
              <div className={`p-4 ${step.bg} rounded-full`}>
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </div>
              {/* Number Label */}
              <div className="absolute -top-1 right-0 md:-right-1  w-6 h-6 bg-playza-blue rounded-full text-[10px] font-black text-white flex items-center justify-center border-2 border-playza-dark">
                {idx + 1}
              </div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] glass-panel p-2 md:p-8 rounded-xl border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-playza-blue transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fair Play Notice */}
      <div className="mt-8 md:mt-16 bg-playza-green/5 border border-playza-green/20 rounded-[2.5rem] p-2 md:p-8 flex items-center gap-6">
        <div className="p-4 bg-playza-green/10 rounded-2xl">
          <ShieldCheck className="w-8 h-8 text-playza-green" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">Fair Play Notice</h4>
          <p className="text-slate-400 font-medium text-sm">
            Playza employs advanced anti-cheat mechanisms. Any player found using external scripts, modified game files, or exploits will be permanently banned and forfeited of all winnings. Play fair, win fair.
          </p>
        </div>
      </div>
    </div>
  );
};
