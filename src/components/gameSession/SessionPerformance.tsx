import { statsCards } from "@/constants/constants";
import { History, PlusCircle, TrendingUp } from "lucide-react";
import { BsArrowUp } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";

const SessionPerformance = () => {
  return (
    <main className="flex h-full flex-col">
      <div className="md:px-4 flex flex-1 justify-center py-2 md:py-4">
        <div className="flex flex-col flex-1">
          {/* <!-- Header Section --> */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-white tracking-tight text-lg lg:text-4xl font-bold leading-tight">
                My Game Performance
              </h1>
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="text-lg" />
                <p className="text-sm font-medium">
                  You are 210 pts away from Rank 1
                </p>
              </div>
            </div>
            <button className="group flex min-w-40 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-primary text-background-dark text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(244,192,37,0.3)]">
              <span className="material-symbols-outlined">replay</span>
              <span className="truncate">Play Again</span>
            </button>
          </div>
          {/* <!-- Stats Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            {statsCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-3 rounded-xl p-6 border border-border-muted bg-card/40 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                {/* Icon */}
                {card.icon && (
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <card.icon className="text-5xl" />
                  </div>
                )}

                {/* Title */}
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {card.title}
                </p>

                {/* Main Value */}
                <div className="flex items-end gap-2">
                  <p
                    className={`tracking-tight text-3xl font-bold leading-tight ${
                      card.valueColor ?? "text-white"
                    }`}
                  >
                    {card.value}
                  </p>

                  {card.subValue && (
                    <p className="text-slate-500 text-lg font-bold pb-1">
                      {card.subValue}
                    </p>
                  )}

                  {card.trend === "up" && (
                    <BsArrowUp className="material-symbols-outlined text-red-400" />
                  )}
                </div>

                {/* Progress bar */}
                {typeof card.progress === "number" && (
                  <div className="w-full bg-muted-foreground/30 h-1.5 rounded-full mt-1">
                    <div
                      className={`bg-primary h-full rounded-full w-[${card.progress}%]`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <!-- Call to Action Banner --> */}
          <div className=" @container">
            <div className="flex flex-1 flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-linear-to-r from-card-dark to-background-dark p-8 @[480px]:flex-row @[480px]:items-center shadow-lg">
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm md:text-xl font-bold leading-tight">
                  Ready to climb the leaderboard?
                </p>
                <p className="text-slate-400 text-xs md:text-base font-normal leading-normal">
                  Improve your score and claim the top spot before the session
                  ends.
                </p>
              </div>
              <button className="flex min-w-35 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary/10 border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-background transition-all duration-300">
                <span className="truncate">Enter Tournament</span>
              </button>
            </div>
          </div>
          {/* <!-- Recent Activity --> */}
          <div className="mt-4">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-tight">
                Recent Session Activity
              </h2>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                View All <IoArrowForward className="text-xs" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {/* <!-- Activity Item 1 --> */}
              <div className="flex items-center justify-between rounded-xl p-4 border border-border-muted bg-card-dark/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <PlusCircle className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold">New High Score</p>
                    <p className="text-slate-500 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">+1,450 pts</p>
                  <p className="text-primary text-xs font-medium">
                    Rank Up: #15 → #12
                  </p>
                </div>
              </div>
              {/* <!-- Activity Item 2 --> */}
              <div className="flex items-center justify-between rounded-xl p-4 border border-border-muted bg-card-dark/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <History className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Entry Purchased</p>
                    <p className="text-slate-500 text-xs">3 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">-$5.00</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                    Slot #5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SessionPerformance;
