import { AlertCircle, Check, Trophy } from "lucide-react";

const GameInstructionTab = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* <!-- Tabs Navigation --> */}
          <div className="border-b border-white/10">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
              <button
                id="tab-instructions"
                className="tab-btn tab-active pb-4 font-medium text-sm whitespace-nowrap transition-colors"
              >
                Instructions
              </button>
              <button
                id="tab-players"
                className="tab-btn pb-4 text-gray-400 hover:text-white font-medium text-sm whitespace-nowrap transition-colors"
              >
                Players{" "}
                <span
                  id="playerCountBadge"
                  className="ml-1 bg-white/10 px-2 py-0.5 rounded-full text-xs"
                >
                  1,240
                </span>
              </button>
              <button
                id="tab-leaderboard"
                className="tab-btn pb-4 text-gray-400 hover:text-white font-medium text-sm whitespace-nowrap transition-colors"
              >
                Leaderboard
              </button>
              <button
                id="tab-details"
                className="tab-btn pb-4 text-gray-400 hover:text-white font-medium text-sm whitespace-nowrap transition-colors"
              >
                Match Details
              </button>
            </div>
          </div>

          {/* <!-- Tab Contents --> */}
          <div className="min-h-100">
            {/* <!-- Instructions Tab --> */}
            <div id="content-instructions" className="tab-content space-y-6">
              <div className="glass-panel rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <i
                      data-lucide="book-open"
                      className="w-5 h-5 text-purple-400"
                    ></i>
                    How It Works
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <span>
                        Answer trivia questions as quickly as possible. Speed
                        matters!
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <span>
                        Correct answers earn points based on response time (max
                        1000 pts per question).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <span>
                        Wrong answers or timeouts result in 0 points for that
                        question.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      <span>
                        Top 10 players split the prize pool based on rank
                        distribution.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Winning Rules
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Scoring System
                      </h4>
                      <p className="text-sm text-gray-400">
                        Points = (Time Remaining / Total Time) × 1000. Faster
                        answers = More points.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Tie Breaker
                      </h4>
                      <p className="text-sm text-gray-400">
                        If tied, player with faster total completion time wins.
                        If still tied, split prize.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    Entry Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Verified Palyza account
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Sufficient balance ($5.00 entry fee)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Stable internet connection (required)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Join before match timer ends
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Players Tab --> */}
            <div id="content-players" className="tab-content hidden space-y-4">
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    Active Players
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Live Updates
                  </div>
                </div>

                <div
                  id="playersGrid"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {/* <!-- Players injected via JS --> */}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                    Load More Players
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Leaderboard Tab --> */}
            <div
              id="content-leaderboard"
              className="tab-content hidden space-y-4"
            >
              <div className="glass-panel rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white">
                    Live Leaderboard
                  </h3>
                  <span className="text-xs text-gray-500">
                    Updates every 5 seconds
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5 text-left">
                      <tr>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">
                          Score
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      id="leaderboardBody"
                      className="divide-y divide-white/5"
                    >
                      {/* <!-- Leaderboard rows injected via JS --> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <!-- Match Details Tab --> */}
            <div id="content-details" className="tab-content hidden space-y-6">
              <div className="glass-panel rounded-xl p-6 space-y-6">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Match Specifications
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Match ID</span>
                      <span className="text-white font-mono text-sm">
                        #CTR-2024-8842
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Start Time</span>
                      <span className="text-white">Today, 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">End Time</span>
                      <span className="text-white">Today, 2:45 PM EST</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">45 Minutes</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Total Entries</span>
                      <span className="text-white" id="totalEntries">
                        1,240
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Entry Fee</span>
                      <span className="text-white">$5.00</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Platform Fee</span>
                      <span className="text-white">10%</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Prize Pool Formula</span>
                      <span className="text-cyan-400 text-sm">
                        (Entries × $5) × 90%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-purple-300 mb-2">
                    Prize Distribution
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-yellow-400 font-bold">1st</div>
                      <div className="text-gray-300">40%</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-gray-300 font-bold">2nd</div>
                      <div className="text-gray-300">25%</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-orange-400 font-bold">3rd</div>
                      <div className="text-gray-300">15%</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-gray-400 font-bold">4-5</div>
                      <div className="text-gray-300">8%</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-gray-500 font-bold">6-10</div>
                      <div className="text-gray-300">4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Column: Sticky Match Card (Desktop) --> */}
        <div className="hidden lg:block">
          <div id="stickyCard" className="sticky-sidebar">
            <div className="glass-card rounded-2xl p-6 neon-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Join Now
                </h3>
                <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Live
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-400 text-sm">Time Left</span>
                  <span
                    id="stickyCountdown"
                    className="font-display text-xl font-bold text-cyan-400 font-mono"
                  >
                    44:32
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-400 text-sm">Entry Fee</span>
                  <span className="font-display text-lg font-bold text-white">
                    $5.00
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <span className="text-purple-300 text-sm font-medium">
                    Prize Pool
                  </span>
                  <span
                    id="stickyPrizePool"
                    className="font-display text-xl font-bold text-purple-400 prize-pool-glow"
                  >
                    $6,200
                  </span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25 font-display text-lg tracking-wide mb-3">
                JOIN MATCH
              </button>

              <button className="w-full bg-white/5 hover:bg-white/10 text-gray-300 font-medium py-3 rounded-xl transition-all border border-white/10 text-sm">
                Watch Stream
              </button>
            </div>

            {/* <!-- Mini Leaderboard Preview --> */}
            <div className="glass-panel rounded-xl p-4 mt-4">
              <h4 className="font-display font-bold text-white mb-3 text-sm">
                Top Players
              </h4>
              <div id="miniLeaderboard" className="space-y-2">
                {/* <!-- Injected via JS --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInstructionTab;
