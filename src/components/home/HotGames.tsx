import { games } from "@/data/games";
import GamesCard from "@/utils/GamesCard";
import { Flame } from "lucide-react";

const HotGames = () => {
  const hotGames = games.slice(10, 15);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-white flex gap-2 items-center">
          <Flame className="text-chart-5" /> Hot Games
        </h2>
        <a className="text-sm text-primary font-bold hover:underline" href="#">
          View All
        </a>
      </div>
      <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2">
        <div className="flex items-center gap-4">
          {hotGames.map((game) => (
            <GamesCard {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotGames;
