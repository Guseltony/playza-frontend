import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import LeaderBoard from "@/components/home/LeaderBoard";
import RecentWinners from "@/components/home/RecentWinners";
import { games } from "@/data/games";
import HomeGames from "@/components/home/HomeGames";
import { Flame, Star, BadgePlus } from "lucide-react";

const Home = () => {
  const popularGames = games.filter((game) => game.badge === "POPULAR").slice(0, 8);
  const hottestGames = games.filter((game) => game.badge === "HOT").slice(0, 8);
  const newestGames = games.filter((game) => game.badge === "HOT").slice(0,6);

  return (
    <main className="flex-1 min-w-0 space-y-6">
      <HeroBanner />
      <RecentWinners />
      <HomeGames games={newestGames} Icon={BadgePlus} title="Newest Games" />
      <HomeGames games={popularGames} Icon={Star} title="Popular Games" />
      <HomeGames games={hottestGames} Icon={Flame} title="Hottest Games" />
      <LeaderBoard />
      <HowItWorks />
    </main>
  );
};

export default Home;
