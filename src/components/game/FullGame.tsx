import { useMemo, useState } from "react";
import Search from "../Search";
// import Filter from "./Filter";
import Sort from "./Sort";
import GamesCard from "@/utils/GamesCard";
import { games } from "@/data/games";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { FaChess } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const FullGame = () => {
  // const [tab, setTab] = useState("All");
  const [activeTab, setActiveTab] = useState("All Games");

  // const gameCategories = [...new Set(games.map((game) => game.category))];

  const categories = useMemo(
    () => ["All Games", ...new Set(games.map((game) => game.category))],
    [games],
  );

  const filteredGames = useMemo(() => {
    if (activeTab === "All Games") return games;
    return games.filter((game) => game.category === activeTab);
  }, [games, activeTab]);

  console.log("allTabs", categories);

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

      <section className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden glass border-white/10">
        <img
          alt="Tournament Banner"
          className="absolute inset-0 w-full h-full object-cover"
          src="/games/dominion-arena.jpeg"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative h-full p-8 flex flex-col justify-center z-5">
          {/* <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
              Live Tournament
            </span>
            <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              MATCHMAKING OPEN
            </div>
          </div> */}
          <div className="flex flex-col  space-y-1 my-4">
            <h1 className="text-lg md:text-2xl lg:text-5xl font-black tracking-tight uppercase">
              Quantum Clash
            </h1>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              fighting arena
            </span>
          </div>
          <div className="flex items-center gap-12">
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                Current Game Pool
              </div>
              <div className="flex items-center text-base md:text-xl lg:text-3xl font-display font-bold text-accent">
                ₦250,000.00
                <TrendingUp className=" text-green-400 ml-1" size={15} />
              </div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                Time Remaining
              </div>
              <div className="text-base md:text-xl lg:text-3xl font-display font-bold text-white tabular-nums">
                00:42:15
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Search & Filters --> */}
      <div className="glass rounded-lg p-3 mb-8 flex flex-wrap gap-4 items-center mt-4">
        <Search />
        {/* <Filter /> */}
        <Sort />
      </div>

      {/* <!-- All Games Grid --> */}
      <section className="mb-12">
        <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mb-4 gap-6 md:w-fit">
          {categories.map((t) => (
            <span
              key={t}
              onClick={() => setActiveTab(t)}
              className={cn(
                activeTab === t ? "text-white bg-secondary" : "text-slate-600",
                "sm:text-xs text-sm uppercase font-bold p-2 rounded-lg cursor-pointer",
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
      {/* <!-- Live Tournaments --> */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold">Live Tournaments</h2>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-primary">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-16 h-16 rounded bg-primary/20 flex items-center justify-center">
                <FaChess className=" text-primary text-3xl"/>
              </div>
              <div>
                <h3 className="font-bold text-lg">Grand Master Chess Series</h3>
                <p className="text-slate-400 text-sm">
                  Prize Pool:{" "}
                  <span className="text-white font-bold">₦250,000.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Starts In
                </div>
                <div className="font-display font-bold text-xl text-primary">
                  00:45:12
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Entries
                </div>
                <div className="font-display font-bold text-xl">124 / 256</div>
              </div>
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
                ENTER ROOM
              </button>
            </div>
          </div>
          <div className="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-slate-700">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-16 h-16 rounded bg-slate-800 flex items-center justify-center">
                <IoCarSport className=" text-primary text-3xl"/>
              </div>
              <div>
                <h3 className="font-bold text-lg">Hyper Racer Sprint</h3>
                <p className="text-slate-400 text-sm">
                  Prize Pool:{" "}
                  <span className="text-white font-bold">₦100,000.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Starts In
                </div>
                <div className="font-display font-bold text-xl text-primary">
                  02:15:00
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Entries
                </div>
                <div className="font-display font-bold text-xl">45 / 100</div>
              </div>
              <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold border border-white/10">
                ENTER ROOM
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullGame;
