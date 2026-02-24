import { useState } from "react";
import InstructionTab from "./gamePage/InstructionTab";
import PlayersTab from "./gamePage/PlayersTab";
import LeaderBoardTab from "./gamePage/LeaderBoardTab";

const GameInstructionTab = () => {
  const [activeTab, setActiveTab] = useState<string>("Instructions");

  return (
    <div className="max-w-400 mx-auto pl-4 sm:pl-6 lg:pl-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* <!-- Tabs Navigation --> */}
          <div className="border-b border-white/10">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
              {["Instructions", "Players", "Leaderboard", "Match Details"].map(
                (tab) => (
                  <button
                    id="tab-instructions"
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="tab-btn tab-active pb-4 font-medium text-sm whitespace-nowrap transition-colors"
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* <!-- Tab Contents --> */}
          <div className="min-h-100">
            {activeTab === "Instructions" ? (
              <InstructionTab />
            ) : activeTab === "Players" ? (
              <PlayersTab />
            ) : activeTab === "Leaderboard" ? (
              <LeaderBoardTab />
            ) : (
              ""
            )}

            {/* <!-- Players Tab --> */}

            {/* <!-- Leaderboard Tab --> */}

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
