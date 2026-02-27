import { games } from "@/data/games";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import { Link, useParams } from "react-router";
import { ArrowBigLeft, Info, Laptop, Smartphone } from "lucide-react";

import { BiTrendingUp, BiTrophy } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { useState } from "react";
import SessionLeaderboard from "@/components/gameSession/SessionLeaderboard";
import SessionPerformance from "@/components/gameSession/SessionPerformance";
import SessionActivities from "@/components/gameSession/SessionActivities";
import SessionInfo from "@/components/gameSession/SessionInfo";
import SessionRules from "@/components/gameSession/SessionRules";
import SessionHero from "@/components/gameSession/SessionHero";

const MatchSession = () => {
  const [activeTab, setActiveTab] = useState("Live Leaderboard");

  const param = useParams();

  const slug = param.id;

  const allGames = games.map((g) => ({
    ...g,
    pricePool: calculatePrizePool(
      g.entryFee,
      g.activePlayers,
      g.platformFeePercentage,
    ),
  }));

  type TabItem = {
    tab: string;
    render: () => React.ReactElement;
  };

  const game = allGames.find((game) => game.slug === slug);

  if (!game) {
    return <div>Game not found</div>; // or loader
  }

  const tabContent: TabItem[] = [
    { tab: "Live Leaderboard", render: () => <SessionLeaderboard /> },
    { tab: "My Game", render: () => <SessionPerformance /> },
    { tab: "Live Feeds", render: () => <SessionActivities /> },
    {
      tab: "Info",
      render: () => (
        <SessionInfo title={game?.title} pricePool={game?.pricePool} />
      ),
    },
    { tab: "Rules", render: () => <SessionRules /> },
  ];

  const activeTabContent = tabContent.find((item) => item.tab === activeTab);
  // console.log(splitTitle);

  return (
    <main className="flex-1 max-w-400 mx-auto overflow-x-hidden ">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[70%] flex flex-col gap-4">
          <Link
            to={`/games/${slug}`}
            className="bg-muted-foreground h-10 w-10 hidden md:flex items-center justify-center rounded-full "
          >
            <ArrowBigLeft />
          </Link>

          <SessionHero
            title={game?.title}
            slug={game?.slug}
            thumbnail={game?.thumbnail}
            activePlayers={game?.activePlayers}
            entryFee={game?.entryFee}
            pricePool={game?.pricePool}
          />

          <section className="bg-surface-dark rounded-xl overflow-hidden">
            <div className="flex border-b border-accent-dark mb-4 overflow-x-auto scrollbar-hide">
              {[
                "Live Leaderboard",
                "My Game",
                "Live Feeds",
                "Info",
                "Rules",
              ].map((tab, i) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  key={i}
                  className={` ${activeTab === tab ? "text-primary border-b-2 border-primary" : "text-slate-400"}  px-3.5 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-bold bg-primary/5`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-0">
              <div className="flex-1 px-px overflow-y-auto pb-4">
                {activeTabContent?.render()}
              </div>
            </div>
          </section>
        </div>

        <div className="hidden lg:w-[30%] md:flex flex-col gap-6">
          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BiTrophy className="text-primary text-xl" />
              Prize Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 font-bold">1st</span>
                  <span className="text-sm font-medium">Grand Prize</span>
                </div>
                <span className="text-white font-bold">₦75,000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-slate-300 font-bold">2nd</span>
                  <span className="text-sm font-medium">Runner Up</span>
                </div>
                <span className="text-white font-bold">₦45,000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">3rd</span>
                  <span className="text-sm font-medium">Finalist</span>
                </div>
                <span className="text-white font-bold">₦30,000</span>
              </div>
              <div className="text-center pt-2">
                <p className="text-[10px] text-slate-500 italic">
                  4th - 100th place earn Arena Credits
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BiTrendingUp className="text-primary" />
              Your Session Stats
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Skill Progress</span>
                  <span className="text-primary">82%</span>
                </div>
                <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[82%]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">
                    Best Score
                  </p>
                  <p className="text-lg font-bold text-white">89,420</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">
                    Game Time
                  </p>
                  <p className="text-lg font-bold text-white">45m</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Info className="text-primary" />
              Session Meta
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Game Type</span>
                <span className="text-white font-medium">
                  Single Player FPS
                </span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Difficulty</span>
                <span className="text-yellow-500 font-medium">Competitive</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Region</span>
                <span className="text-white font-medium">West Africa</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-slate-400">Platform</span>
                <div className="flex gap-2">
                  <Laptop className="text-sm" />
                  <Smartphone className="text-sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 rounded-xl border border-primary/20 p-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary rounded-lg text-background-dark">
                <MdSupportAgent />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Need Help?</h4>
                <p className="text-xs text-slate-400 mb-3">
                  Our support team is active for this tournament.
                </p>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Open Live Chat{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MatchSession;
