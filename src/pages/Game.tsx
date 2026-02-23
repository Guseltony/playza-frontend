import GameInstructionTab from "@/components/GameInstructionTab";
import { games } from "@/data/games";
import { formatNaira } from "@/lib/formatNaira";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import { Clock, Trophy, Users } from "lucide-react";
import { FaUsers } from "react-icons/fa";
import { useParams } from "react-router";

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

  const {
    thumbnail,
    slug: gameSlug,
    entryFee,
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
      <section className="relative w-full">
        {/* <!-- Background Image --> */}
        <div className="relative w-full aspect-video max-h-150 overflow-hidden">
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

                  <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                    Test your knowledge in the ultimate tech and gaming trivia
                    showdown. Fastest correct answers win. No second chances.
                  </p>

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
                    className="glass-card rounded-2xl p-6 max-w-md ml-auto neon-border"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-xl font-bold text-white">
                        Active Match
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        In Progress
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400 text-sm">
                          Time Remaining
                        </span>
                        <span
                          id="countdown"
                          className="font-display text-xl font-bold text-cyan-400 font-mono"
                        >
                          44:32
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400 text-sm">Entry Fee</span>
                        <span className="font-display text-lg font-bold text-white">
                          {formatNaira(entryFee)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400 text-sm">
                          Active Players
                        </span>
                        <span
                          id="activePlayers"
                          className="font-display text-lg font-bold text-white"
                        >
                          1,240
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
                          $6,200
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400 text-sm">Top Score</span>
                        <span className="font-display text-lg font-bold text-yellow-400">
                          9,850 pts
                        </span>
                      </div>
                    </div>
                    {/* 
                                <button onclick="joinMatch()" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25 font-display text-lg tracking-wide">
                                    JOIN MATCH
                                </button>
                                 */}
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
      </section>

      <GameInstructionTab />
    </div>
  );
};

export default Game;
