import GameCard from "@/components/GameCard";
import { BrainBlitz } from "@/components/games/BrainBlitz";
import { FastFingers } from "@/components/games/FastFingers";
import { OneClickPrecision } from "@/components/games/OneClickPrecision";
import { SpeedTapArena } from "@/components/games/SpeedTapArena";
import { StatItem } from "@/components/StatItem";
import { Plus } from "lucide-react";
import { useState } from "react";

const Games = () => {
  const [editMode, setEditMode] = useState(false);
  const [currentGame, setCurrentGame] = useState<{
    name: string;
    mode: "demo" | "live";
  } | null>(null);

  const [prizePool, setPrizePool] = useState("₦85,000");
  const [playersOnline, setPlayersOnline] = useState("1,275");

  const [games, setGames] = useState([
    {
      id: 1,
      title: "Brain Blitz",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHB1enpsZSUyMG1pbmQlMjBnYW1lfGVufDF8fHx8MTc2OTcxNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      isTopGame: true,
    },
    {
      id: 2,
      title: "Fast Fingers",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBrZXlib2FyZCUyMGZhc3QlMjBmaW5nZXJzfGVufDF8fHx8MTc2OTcxNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      isTopGame: false,
    },
    {
      id: 3,
      title: "One-Click Precision",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBwcmVjaXNpb24lMjBjbGlja3xlbnwxfHx8fDE3Njk3MTY2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isTopGame: false,
    },
    {
      id: 4,
      title: "SpeedTap Arena",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMHRhcCUyMGFyZW5hJTIwZ2FtaW5nfGVufDF8fHx8MTc2OTcxNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      isTopGame: false,
    },
  ]);

  const updateGame = (id: number, updates: Partial<(typeof games)[0]>) => {
    setGames(
      games.map((game) => (game.id === id ? { ...game, ...updates } : game)),
    );
  };

  const addNewGame = () => {
    const newId = Math.max(...games.map((g) => g.id)) + 1;
    setGames([
      ...games,
      {
        id: newId,
        title: "New Game",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        isTopGame: false,
      },
    ]);
  };

  const removeGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const handlePlayGame = (gameName: string, mode: "demo" | "live") => {
    setCurrentGame({ name: gameName, mode });
  };

  const handleExitGame = () => {
    setCurrentGame(null);
  };

  // If a game is being played, render the game component
  if (currentGame) {
    switch (currentGame.name) {
      case "Brain Blitz":
        return <BrainBlitz mode={currentGame.mode} onExit={handleExitGame} />;
      case "Fast Fingers":
        return <FastFingers mode={currentGame.mode} onExit={handleExitGame} />;
      case "One-Click Precision":
        return (
          <OneClickPrecision mode={currentGame.mode} onExit={handleExitGame} />
        );
      case "SpeedTap Arena":
        return (
          <SpeedTapArena mode={currentGame.mode} onExit={handleExitGame} />
        );
      default:
        return null;
    }
  }

  return (
    <div className=" pt-24 px-4 pb-24  max-w-6xl mx-auto">
      <div className="bg-linear-to-r from-gray-800/80 to-gray-800/60 backdrop-blur rounded-2xl p-5 mb-8 border border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
        <StatItem
          icon="💰"
          label="Today's Prize Pool:"
          value={prizePool}
          valueColor="text-yellow-400"
          editMode={editMode}
          onValueChange={setPrizePool}
        />
        <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
        <StatItem
          icon="👥"
          label="Players Online:"
          value={playersOnline}
          valueColor="text-white"
          editMode={editMode}
          onValueChange={setPlayersOnline}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.image}
            isTopGame={game.isTopGame}
            editMode={editMode}
            onUpdate={(updates) => updateGame(game.id, updates)}
            onRemove={() => removeGame(game.id)}
            onPlayGame={(mode) => handlePlayGame(game.title, mode)}
          />
        ))}
      </div>

      {editMode && (
        <button
          onClick={addNewGame}
          className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-dashed border-gray-600 hover:border-gray-500 transition-all hover:scale-[1.02] min-h-87.5 flex flex-col items-center justify-center gap-3"
        >
          <Plus className="w-12 h-12 text-gray-500" />
          <span className="text-gray-400">Add New Game</span>
        </button>
      )}
    </div>
  );
};

export default Games;
