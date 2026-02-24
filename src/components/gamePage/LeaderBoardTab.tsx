import { players } from "@/constants/constants";
import type { Player } from "@/types/types";
import React from "react";

const LeaderBoardTab = () => {
  const topPlayers = players.sort((a, b) => b.score - a.score).slice(0, 10);
  return (
    <div id="content-leaderboard" className="tab-content space-y-4">
      <div className="glass-panel rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-white">
            Live Leaderboard
          </h3>
          <span className="text-xs text-gray-500">Updates every 5 seconds</span>
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
            <tbody id="leaderboardBody" className="divide-y divide-white/5">
              {/* <!-- Leaderboard rows injected via JS --> */}
              {topPlayers.map(
                ({ rank, status, username, score, avatar }: Player) => (
                  <tr className="hover:bg-white/5 transition-colors ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full  font-display font-bold text-sm`}
                      >
                        {rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full mr-3"
                          src={avatar}
                          alt=""
                        />
                        <div>
                          <div className={`text-sm font-medium text-white`}>
                            {username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-display font-bold text-white">
                        {score.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">points</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${player.status === 'Playing' ? 'bg-green-400/20 text-green-400' : 'bg-gray-400/20 text-gray-400'}">
                        ${status}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardTab;
