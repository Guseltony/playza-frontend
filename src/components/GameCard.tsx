import type { GameCardProps } from "@/types/types";
import { Eye, Play, X } from "lucide-react";
import { useState } from "react";

const GameCard = ({
  title,
  image,
  isTopGame,
  editMode = false,
  onUpdate,
  onRemove,
  onPlayGame,
}: GameCardProps) => {
  const [showGameOptions, setShowGameOptions] = useState(false);

  const handlePlayDemo = () => {
    if (onPlayGame) onPlayGame("demo");
    setShowGameOptions(false);
  };

  const handlePlayLive = () => {
    if (onPlayGame) onPlayGame("live");
    setShowGameOptions(false);
  };

  return (
    <div className="relative bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-green-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
      {/* Remove Button */}
      {editMode && onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 p-2 rounded-lg shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Top Game Badge */}
      {isTopGame && (
        <div className="absolute top-4 left-4 z-10 bg-linear-to-r from-yellow-500 to-yellow-600 px-4 py-1.5 rounded-lg shadow-lg">
          <span className="text-gray-900 font-semibold text-sm">Top Game</span>
        </div>
      )}

      {editMode && !isTopGame && onUpdate && (
        <button
          onClick={() => onUpdate({ isTopGame: true })}
          className="absolute top-4 left-4 z-10 bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-lg shadow-lg transition-colors"
        >
          <span className="text-gray-300 font-semibold text-sm">
            Mark as Top
          </span>
        </button>
      )}

      {editMode && isTopGame && onUpdate && (
        <button
          onClick={() => onUpdate({ isTopGame: false })}
          className="absolute top-4 left-4 z-10 bg-linear-to-r from-yellow-500 to-yellow-600 px-4 py-1.5 rounded-lg shadow-lg"
        >
          <span className="text-gray-900 font-semibold text-sm">Top Game</span>
        </button>
      )}

      {/* Game Image */}
      <div className="relative h-48 overflow-hidden">
        {editMode && onUpdate ? (
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center p-4">
              <input
                type="text"
                value={image}
                onChange={(e) => onUpdate({ image: e.target.value })}
                placeholder="Image URL"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>
        ) : (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </>
        )}
      </div>

      {/* Game Info */}
      <div className="p-6">
        {editMode && onUpdate ? (
          <input
            type="text"
            value={title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="text-2xl font-bold text-center mb-4 w-full bg-transparent border-b border-gray-600 outline-none focus:border-blue-500"
          />
        ) : (
          <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        )}
        <hr className="border-gray-700 mb-5" />

        {!editMode && !showGameOptions && (
          <button
            onClick={() => setShowGameOptions(true)}
            className="w-full bg-linear-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-500/30"
          >
            Choose Entry
          </button>
        )}

        {!editMode && showGameOptions && (
          <div className="space-y-3">
            <button
              onClick={handlePlayDemo}
              className="w-full bg-linear-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Play Demo (Free)
            </button>
            <button
              onClick={handlePlayLive}
              className="w-full bg-linear-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Play Live
            </button>
            <button
              onClick={() => setShowGameOptions(false)}
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium py-2.5 rounded-xl transition-all"
            >
              Cancel
            </button>
          </div>
        )}

        {editMode && (
          <button className="w-full bg-linear-to-b from-green-600 to-green-700 text-white py-3.5 rounded-xl shadow-lg opacity-50 cursor-not-allowed">
            Choose Entry
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
