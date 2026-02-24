import GameInstructionTab from "@/components/GameInstructionTab";
import { DAYS_OF_WEEK, MONTHS } from "@/constants/constants";
import { games } from "@/data/games";
import { formatNaira } from "@/lib/formatNaira";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import { Clock, Trophy, Users } from "lucide-react";
import { useParams } from "react-router";
import { gameSession } from "../constants/constants";
import QuickInfo from "@/components/gamePage/QuickInfo";

const Game = () => {
  const param = useParams();

  const slug = param.id;

  const allGames = games.map((g) => ({
    ...g,
    pricePool: calculatePrizePool(
      g.entryFee,
      g.activePlayers,
      g.platformFeePercentage,
    ),
  }));

  const date = new Date();

  const month = date.getMonth();
  const todayDate = date.getDate();
  const Day = date.getDay();
  const year = date.getFullYear();

  const fullDate = `${MONTHS[month]}, ${todayDate} ${DAYS_OF_WEEK[Day]}, ${year}`;

  const {
    thumbnail,
    slug: gameSlug,
    // entryFee,
    activePlayers,
    title,
    pricePool,
    durationInSeconds,
    category,
    badge,
  } = allGames.find((game) => game.slug === slug) ?? {};

  return (
    <div className="flex-1 min-w-0">
      {/* <!-- Hero Section --> */}
      <section className="relative w-full border-2 border-green-800">
        {/* <!-- Background Image --> */}
        <div className="relative w-full aspect-video min-h-150 overflow-hidden border-2 border-red-900">
          <img
            src={thumbnail}
            alt={gameSlug}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 hero-overlay"></div>

          {/* <!-- Hero Content --> */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* <!-- Left: Game Info --> */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold tracking-wider uppercase">
                      {category}
                    </span>
                    {/* <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-xs font-semibold tracking-wider uppercase">
                      Hard
                    </span> */}
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                      {badge}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-semibold tracking-wider uppercase">
                      <span className="w-2 h-2 bg-green-400 rounded-full live-indicator"></span>
                      LIVE
                    </span>
                  </div>

                  <h1 className="font-display text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    {title} <br />
                  </h1>

                  {/* <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                    Test your knowledge in the ultimate tech and gaming trivia
                    showdown. Fastest correct answers win. No second chances.
                  </p> */}

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>{activePlayers} Playing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span>{formatNaira(pricePool)} Prize Pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>
                        {durationInSeconds && durationInSeconds / 60} min
                        duration
                      </span>
                    </div>
                  </div>
                </div>

                {/* <!-- Right: Match Card (Desktop) --> */}
                <div className="hidden lg:block">
                  <div
                    id="matchCard"
                    className="glass-card rounded-2xl p-2 md:p-6 max-w-md ml-auto neon-border"
                  >
                    <div className="tab-content space-y-6">
                      {/* <div className="flex items-center justify-between mb-6">
                        <h3 className="font-display text-2xl font-bold text-white">
                          Today's Sessions
                        </h3>
                        <div
                          className="text-sm text-slate-400"
                          id="current-date"
                        >
                          {fullDate}
                        </div>
                      </div> */}

                      {/* <div className="grid gap-2" id="sessions-container">
                        {gameSession.map((session) => {
                          let statusBadge, ctaButton, cardClass;

                          // onClick="enterMatch('{session.id}')"

                          if (session.status === "live") {
                            statusBadge = (
                              <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-bold flex items-center gap-1">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                LIVE NOW
                              </span>
                            );
                            cardClass =
                              "session-live border-cyan-500/50 bg-cyan-950/10";
                            ctaButton = (
                              <button className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25">
                                <i data-lucide="play" className="w-5 h-5"></i>
                                Enter Match
                              </button>
                            );
                          } else if (session.status === "upcoming") {
                            statusBadge = (
                              <span className="px-3 py-1 rounded-full bg-slate-700 text-slate-400 text-xs font-bold">
                                Upcoming
                              </span>
                            );
                            cardClass = "border-slate-700";
                            ctaButton = (
                              <button
                                disabled
                                className="w-full mt-4 py-3 bg-slate-800 text-slate-500 font-bold rounded-lg cursor-not-allowed"
                              >
                                Starts at {session.start}
                              </button>
                            );
                          } else {
                            statusBadge = (
                              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                                Completed
                              </span>
                            );
                            cardClass = "border-slate-700 opacity-75";
                            ctaButton = (
                              <button className="w-full mt-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors">
                                View Results
                              </button>
                            );
                          }

                          return (
                            <div className="glass-panel p-2 rounded-xl border {cardClass} card-hover">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-display text-xl font-bold text-white">
                                      {session.name}
                                    </h4>
                                    {statusBadge}
                                  </div>
                                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                    <i
                                      data-lucide="clock"
                                      className="w-4 h-4"
                                    ></i>
                                    {session.start} – {session.end}
                                  </div>
                                  <div className="grid grid-cols-3 gap-4">
                                    <div>
                                      <div className="text-xs text-slate-500 uppercase font-bold">
                                        Entries
                                      </div>
                                      <div className="font-display text-lg font-bold text-white">
                                        {session.entries}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-slate-500 uppercase font-bold">
                                        Prize Pool
                                      </div>
                                      <div className="font-display text-lg font-bold text-cyan-400">
                                        ₦{session.prizePool.toLocaleString()}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-slate-500 uppercase font-bold">
                                        Top Score
                                      </div>
                                      <div className="font-display text-lg font-bold text-yellow-400">
                                        {session.topScore > 0
                                          ? session.topScore
                                          : "--"}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {ctaButton}
                            </div>
                          );
                        })}
                      </div>
                    </div> */}

                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-display text-xl font-bold text-white">
                          Live Sessions
                        </h3>
                        <div
                          className="text-sm text-slate-400"
                          id="current-date"
                        >
                          {fullDate}
                        </div>
                      </div>

                      <div className="flex justify-between items-center align-center">
                        <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-bold flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          LIVE NOW
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Clock className="w-4 h-4" />
                          8:00 - 11:00
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        {/* <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-400 text-sm">
                            Time Remaining
                          </span>
                          <span
                            id="countdown"
                            className="font-display text-xl font-bold text-cyan-400 font-mono"
                          >
                            44:32
                          </span>
                        </div> */}

                        {/* <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-400 text-sm">
                            Session Entries
                          </span>
                          <span className="font-display text-lg font-bold text-white">
                            450
                          </span>
                        </div> */}

                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-400 text-sm">
                            Session Players
                          </span>
                          <span
                            id="activePlayers"
                            className="font-display text-lg font-bold text-white"
                          >
                            {activePlayers}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                          <span className="text-purple-300 text-sm font-medium">
                            Current Prize Pool
                          </span>
                          <span
                            id="prizePool"
                            className="font-display text-2xl font-bold text-purple-400 prize-pool-glow"
                          >
                            {formatNaira(pricePool)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-400 text-sm">
                            Session Top Score
                          </span>
                          <span className="font-display text-lg font-bold text-yellow-400">
                            9,850 pts
                          </span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25 font-display text-lg tracking-wide">
                        ENTER SESSION ARENA
                      </button>

                      <p className="text-center text-xs text-gray-500 mt-3">
                        Entry closes in{" "}
                        <span className="text-cyan-400 font-mono">12:45</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <QuickInfo />
      </section>
    </div>
  );
};

export default Game;
