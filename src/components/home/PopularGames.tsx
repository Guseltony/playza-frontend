import { games } from "@/data/games";
import GamesCard from "@/utils/GamesCard";
import { Star } from "lucide-react";

const PopularGames = () => {
  const popularGames = games.slice(0, 9);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-white flex gap-2 items-center">
          <Star className="text-chart-4" /> Popular Games
        </h2>
        <a className="text-sm text-primary font-bold hover:underline" href="#">
          View All
        </a>
      </div>
      <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2">
        <div className="flex items-center gap-4">
          {popularGames.map((game) => (
            <GamesCard {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGames;
