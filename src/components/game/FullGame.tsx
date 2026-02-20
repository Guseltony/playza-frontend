import React, { useMemo } from "react";
import Search from "../Search";
import Filter from "./Filter";
import Sort from "./Sort";
import GamesCard from "@/utils/GamesCard";
import { games } from "@/data/games";

const FullGame = () => {
  const gameCategories = [...new Set(games.map((game) => game.category))];

  const categories = useMemo(
    () => [...new Set(games.map((game) => game.category))],
    [games],
  );

  console.log(categories);

  console.log(gameCategories);
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
      {/* <!-- Search & Filters --> */}
      <div className="glass rounded-lg p-3 mb-8 flex flex-wrap gap-4 items-center">
        <Search />
        <Filter />
        <Sort />
      </div>
      {/* <!-- Featured Games --> */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full"></span>
            Featured Skill Challenges
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Featured Card 1 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="High speed neon racing game visual"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpAoSHTMBjsMFyQUjv5rB-TFF5pu3rAMfgCikWDuybUUT8rFhsrHtZrbyMx-P4xnS8JllSzqj_kegIZqBojwqDXPspfVYjreR97HXSbwvKPm9PZxPKB0FsOoyCarwRgfZm9Rka27SqN-xJ-5uK7A2BlkEibq9OsDkV5G4q-bQF-lCu96hx61ANzRPV_sfpUDrEFCwkfAbTjtlrbLsPI4clCFwm3V9fjYBkcejFZu28Le8nvyaH4H6q7YvcA8NSc6E6QDjOw-IhdKkE"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  NEW
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 458
                  Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Hyper Velocity
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
          {/* <!-- Featured Card 2 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="Cyberpunk futuristic chess board game"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkwduXuJjNi6O0Q_nsFaV5iTOE9C9AdO_rxrQiRwN8jePvtUKLBeFfnwdN_vJfdXSeEmQcENLRLSuWXf_6KxHPdNfDe-jLVwxDKKpAx0qoXRxAc1R0odZGfQM7D1vc26oYnptqwD5YISX9CaaozTx3QRt5qz8y6KaqE7fY_3OJA08RCS8gvgm_cirzlckf6nKrG4dqj28jTRatq5WT0O3c3EpyZftCiQyVGjylQ50y1mI7l6HBohJ-4wZ1eB1_sWt95bIsqkteQ8c"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  ELITE
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 1.2k
                  Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Combat Chess
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
          {/* <!-- Featured Card 3 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="Tactical sniper shooting range environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJJz3zZJbWyqJlKIsFo891IBbzi_EuFfp7t0J8KoR9DRVjTQAXoqbBxhuNQWF9nlvjS_nGNzUcrrdLdGAsbgab0zoE8cF3Pe1lD53nNzWjEbkz_-tRyxbGyAtk2dC8ufQWnXcuBJPbiccjir9DLmldYh38XQwMtEbO5f2qG3aLH1x6KgFuYJcnMi6LwAFzGo00pt5M2xgOxa7cgcZyl1HfJZSVbuS1sBYEQAxDW059QaXshMdbWGNgI0Q-9UWwy2flaGOJ_y_4G0z"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  HIGH STAKES
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 89 Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Sniper Elite
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- All Games Grid --> */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold">All Competitions</h2>
          <button className="text-primary text-sm font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2 gap-6 w-fit">
          {
            categories.map((category) => (
              <span key={category} className="sm:text-xs text-sm uppercase font-bold bg-accent">{category}</span>
            ))
          }
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* <!-- Game Card Loop (10) --> */}
          {games.map((g) => (
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
                <span className="material-icons text-primary text-3xl">
                  sports_esports
                </span>
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
                <span className="material-icons text-slate-600 text-3xl">
                  directions_run
                </span>
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
