import {
  gameLeaderboards,
  getAvatarColor,
  getCardStyle,
} from "@/constants/constants";
import { ChevronDown, Crown, Medal, Trophy } from "lucide-react";
import { useState } from "react";

const LeaderBoard = () => {
  const [selectedGame, setSelectedGame] = useState("brain-blitz");
  const [showFullList, setShowFullList] = useState(false);

  const currentGame =
    gameLeaderboards.find((g) => g.gameId === selectedGame) ||
    gameLeaderboards[0];
  const displayedPlayers = showFullList
    ? currentGame.players
    : currentGame.players.slice(0, 3);

  const getRankIcon = (rank: number) => {
    if (rank === 1)
      return <Crown className="w-5 h-5 text-yellow-400 fill-yellow-400" />;
    if (rank === 2)
      return <Medal className="w-5 h-5 text-gray-300 fill-gray-300" />;
    if (rank === 3)
      return <Medal className="w-5 h-5 text-amber-600 fill-amber-600" />;
    return <span className="text-gray-400 font-bold text-sm">{rank}</span>;
  };
  return (
    <div className="px-4 py-6 pb-24 pt-24 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Trophy className="w-12 h-12 text-yellow-500 fill-yellow-500" />
          <h2 className="text-4xl">Leaderboard</h2>
        </div>
        <p className="text-gray-400">Top players by game</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-3xl mb-1">🏆</div>
          <div className="text-gray-400 text-sm mb-1">Total Prize</div>
          <div className="text-xl text-yellow-400">₦250K</div>
        </div>
        <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-3xl mb-1">👥</div>
          <div className="text-gray-400 text-sm mb-1">Players</div>
          <div className="text-xl text-white">1,275</div>
        </div>
        <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-3xl mb-1">🎮</div>
          <div className="text-gray-400 text-sm mb-1">Games</div>
          <div className="text-xl text-white">5,234</div>
        </div>
      </div>

      {/* Game Tabs */}
      <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {gameLeaderboards.map((game) => (
            <button
              key={game.gameId}
              onClick={() => {
                setSelectedGame(game.gameId);
                setShowFullList(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                selectedGame === game.gameId
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-xl">{game.gameIcon}</span>
              <span className="font-medium">{game.gameName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Game Leaderboard */}
      <div className="bg-linear-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded-2xl p-6 border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{currentGame.gameIcon}</div>
            <div>
              <h3 className="text-2xl font-bold">{currentGame.gameName}</h3>
              <p className="text-sm text-gray-400">
                {currentGame.players.length} players competing
              </p>
            </div>
          </div>
        </div>

        {/* Player List */}
        <div className="space-y-3 mb-4">
          {displayedPlayers.map((player) => (
            <div
              key={player.rank}
              className={`${getCardStyle(player.rank)} backdrop-blur rounded-xl p-4 border-2 transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3">
                {/* Rank */}
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(player.rank)}
                </div>

                {/* Avatar */}
                <div
                  className={`${getAvatarColor(player.rank)} w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                >
                  {player.avatar}
                </div>

                {/* Player Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{player.name}</h3>
                  <p className="text-gray-400 text-xs">
                    {player.gamesPlayed} games
                  </p>
                </div>

                {/* Score */}
                <div className="text-right">
                  <div className="text-xl text-yellow-400 font-bold">
                    {player.score.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-xs">points</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {currentGame.players.length > 3 && (
          <button
            onClick={() => setShowFullList(!showFullList)}
            className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl py-3 transition-all flex items-center justify-center gap-2"
          >
            <span className="font-medium">
              {showFullList
                ? "Show Less"
                : `View All ${currentGame.players.length} Players`}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${showFullList ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Your Overall Rank Card */}
      <div className="bg-linear-to-r from-blue-900/40 to-blue-800/40 backdrop-blur rounded-xl p-4 border-2 border-blue-600/50">
        <div className="flex items-center gap-3">
          <div className="w-8 flex items-center justify-center">
            <span className="text-blue-400 font-bold">#42</span>
          </div>
          <div className="bg-linear-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
            YOU
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold">Your Rank</h3>
            <p className="text-gray-400 text-xs">Keep playing!</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-blue-400 font-bold">5,230</div>
            <div className="text-gray-400 text-xs">points</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
