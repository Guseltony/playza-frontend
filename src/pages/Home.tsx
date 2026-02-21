import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import LeaderBoard from "@/components/home/LeaderBoard";
import RecentWinners from "@/components/home/RecentWinners";
import { games } from "@/data/games";
import HomeGames from "@/components/home/HomeGames";

const Home = () => {
  const popularGames = games.filter((game) => game.badge === "POPULAR");
  const hottestGames = games.filter((game) => game.badge === "HOT");

  const slicePopularGames = popularGames.slice(0, 8);
  const sliceHottestGames = hottestGames.slice(0, 8);

  return (
    <main className="flex-1 min-w-0 space-y-6">
      <HeroBanner />
      <RecentWinners />
      <HomeGames games={slicePopularGames} />
      <HomeGames games={sliceHottestGames} />
      <LeaderBoard />
      <HowItWorks />
    </main>
  );
};

export default Home;
