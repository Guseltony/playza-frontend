import { useMemo, useState } from "react";
import Search from "../Search";
// import Filter from "./Filter";
import GamesCard from "@/utils/GamesCard";
import { games } from "@/data/games";
import { cn } from "@/lib/utils";
import Filter, { type FilterOption } from "./Filter";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import FeatureGameCard from "../FeatureGameCard";
import { filterGames } from "@/lib/filterGames";

const FullGame = () => {
  // const [tab, setTab] = useState("All");
  // const [activeTab, setActiveTab] = useState("All Games");

  // const [filterBy, setFilterBy] = useState("");

  const [filterBy, setFilterBy] = useState<FilterOption | "">("");
  const [activeTab, setActiveTab] = useState("All Games");

   const allGames = games.map((g) => ({
     ...g,
     pricePool: calculatePrizePool(
       g.entryFee,
       g.activePlayers,
       g.platformFeePercentage,
     ),
   }));

  const filteredGames = useMemo(() => {
    return filterGames(allGames, activeTab, filterBy);
  }, [allGames, activeTab, filterBy]);

  const handleFiltering = (option: FilterOption) => {
    setFilterBy(option);
  };

  const biggestPoolGame = [...allGames].sort((a, b) => b.pricePool - a.pricePool)[0];

  console.log("biggestGameprize:", biggestPoolGame);

  // const gameCategories = [...new Set(games.map((game) => game.category))];

  const categories = useMemo(
    () => ["All Games", ...new Set(games.map((game) => game.category))],
    [games],
  );

  return (
    <main>
      {/* <!-- Header section --> */}
      <div className="mb-8">
        <nav className="flex text-xs text-slate-500 gap-2 mb-2">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <span>/</span>

          <span className="text-slate-300">Games</span>
        </nav>
        <h1 className="text-4xl font-display font-bold tracking-tight">
          Explore Games
        </h1>
      </div>

      <section className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
        <FeatureGameCard
          {...biggestPoolGame}
          subTitle="Highest prize pool, join and stand a chance to win."
        />
      </section>
      {/* <!-- Search & Filters --> */}
      <div className="glass rounded-lg p-3 mb-8 flex gap-4 items-center mt-4">
        <Search />
        {/* <Filter /> */}
        <Filter fn={handleFiltering} />
      </div>

      {/* <!-- All Games Grid --> */}
      <section className="mb-12">
        <div className="glass py-3 px-2 rounded-lg flex items-center whitespace-nowrap overflow-x-auto gap-2 scrollbar-hide scroll-smooth mb-4 md:gap-6 md:w-fit">
          {categories.map((t) => (
            <span
              key={t}
              onClick={() => setActiveTab(t)}
              className={cn(
                activeTab === t ? "text-white bg-secondary" : "text-slate-600",
                "text-xs md:text-sm uppercase font-bold px-4 py-2 rounded-lg cursor-pointer",
              )}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* <!-- Game Card Loop (10) --> */}
          {filteredGames.map((g) => (
            <GamesCard {...g} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FullGame;
