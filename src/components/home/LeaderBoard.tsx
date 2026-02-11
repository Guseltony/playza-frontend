import { leaderboardTop } from "@/constants/constants";
import { ArrowRight, Trophy } from "lucide-react";

const LeaderBoard = () => {
  return (
    <section className="relative px-4 py-16 bg-gray-800/30 overflow-hidden">
      {/* Wireframe grid background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <div
          style={{
            backgroundImage: `
                    linear-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 215, 0, 0.3) 1px, transparent 1px)
                  `,
            backgroundSize: "25px 25px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-400/50 mb-4 backdrop-blur-sm">
            <Trophy className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Top Players This Week
          </h2>
          <p className="text-gray-400">
            Compete with the best and climb to the top
          </p>
        </div>

        <div className="space-y-4">
          {leaderboardTop.map((player) => (
            <div key={player.rank} className="relative group">
              {/* Wireframe border */}
              <div
                className={`absolute inset-0 border-2 rounded-xl transition-all ${
                  player.rank === 1
                    ? "border-yellow-500/40 group-hover:border-yellow-500/70"
                    : player.rank === 2
                      ? "border-gray-500/40 group-hover:border-gray-500/70"
                      : "border-amber-500/40 group-hover:border-amber-500/70"
                }`}
              >
                {/* Corner accents */}
                <div
                  className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${
                    player.rank === 1
                      ? "border-yellow-400"
                      : player.rank === 2
                        ? "border-gray-400"
                        : "border-amber-400"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${
                    player.rank === 1
                      ? "border-yellow-400"
                      : player.rank === 2
                        ? "border-gray-400"
                        : "border-amber-400"
                  }`}
                ></div>
              </div>

              <div
                className={`relative backdrop-blur-sm rounded-xl p-6 ${
                  player.rank === 1
                    ? "bg-yellow-900/40"
                    : player.rank === 2
                      ? "bg-gray-800/40"
                      : "bg-amber-900/40"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-6">
                  <div
                    className={`text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] ${
                      player.rank === 1
                        ? "text-yellow-400"
                        : player.rank === 2
                          ? "text-gray-300"
                          : "text-amber-600"
                    }`}
                  >
                    #{player.rank}
                  </div>
                  <div
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-xl shadow-lg border-2 ${
                      player.rank === 1
                        ? "bg-linear-to-br from-yellow-500 to-yellow-600 border-yellow-400/50"
                        : player.rank === 2
                          ? "bg-linear-to-br from-gray-400 to-gray-500 border-gray-300/50"
                          : "bg-linear-to-br from-amber-600 to-amber-700 border-amber-500/50"
                    }`}
                  >
                    {player.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-xl font-bold">
                      {player.name}
                    </h3>
                    <p className="text-xs text-gray-400">Top Player</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg md:text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                      {player.points.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">points</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2 group border border-cyan-500/30 hover:border-cyan-500/60 px-6 py-3 rounded-full backdrop-blur-sm transition-all">
            View Full Leaderboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
