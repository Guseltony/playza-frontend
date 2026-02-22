import type { FilterOption } from "@/components/game/Filter";
import type { Game } from "@/types/types";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";

export function filterGames(
  games: Game[],
  activeTab: string,
  filterBy: FilterOption | "",
): Game[] {
  const allGames = games.map((g) => ({
    ...g,
    pricePool: calculatePrizePool(
      g.entryFee,
      g.activePlayers,
      g.platformFeePercentage,
    ),
  }));

  let result = [...allGames];

  // Tab filtering first
  if (activeTab !== "All Games") {
    result = result.filter((game) => game.category === activeTab);
  }

  // Secondary filtering
  switch (filterBy) {
    case "Most Played":
      return result.sort((a, b) => b.activePlayers - a.activePlayers);

    case "Highest Pool":
      return result.sort((a, b) => b.pricePool - a.pricePool);

    case "Newest":
      return result.filter((g) => g.badge === "NEW");

    case "Hottest":
      return result.filter((g) => g.badge === "HOT");

    case "Trending":
      return result.filter((g) => g.badge === "TRENDING");

    case "Entry Fee":
      return result.sort((a, b) => a.entryFee - b.entryFee);

    default:
      return result;
  }
}
