import { players } from "@/constants/constants";

const PlayersTab = () => {
  const slicePlayers = players.slice(0, 12);
  return (
    <div>
      <div id="content-players" className="tab-content space-y-4">
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
            {slicePlayers.map(({ username, avatar, status, score, rank }) => (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border ${isCurrentUser ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/5'} hover:bg-white/10 transition-colors">
                <div className="relative">
                  <img
                    src={avatar}
                    alt={username}
                    className={`w-10 h-10 rounded-full border-2 ${rank <= 3 ? "border-yellow-400" : "border-transparent"}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white text-sm truncate ${isCurrentUser ? 'text-purple-400' : ''}">
                      ${username}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${status === "playing" ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
                    ></span>
                    ${status}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-white text-sm">
                    ${score.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">pts</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              Load More Players
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersTab;
