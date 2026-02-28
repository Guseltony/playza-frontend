import { Trophy } from "lucide-react";
import { BiMedal } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GiMedal } from "react-icons/gi";
import Search from "../Search";
import { useState } from "react";
import { LEADERBOARD_DATA } from "@/data/sessionLeaderBoard";

const SessionLeaderboard = () => {
  const [query, setQuery] = useState("");

  if (query) {
    const q = query.toLowerCase();
  }
  return (
    <div className="md:px-6 space-y-2">
      <Search
        placeholder="Search by username"
        value={query}
        onChange={setQuery}
      />

      <div>
        {/* Leaders */}
        <div>
          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-green-500/60 to-transparent" />
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-green-500/60">
              Leaders
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-green-500/60 to-transparent" />
          </div>
          {LEADERBOARD_DATA.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="mb-2 p-2 md:p-4 rounded-xl bg-white/5 border border-primary/30 flex items-center justify-between winning-zone-glow"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 flex justify-center">
                  {item.rank === 1 ? (
                    <Trophy className="text-yellow-400 text-3xl" />
                  ) : item.rank === 2 ? (
                    <BiMedal className="text-slate-400 text-xl" />
                  ) : (
                    <GiMedal className="text-orange-400 text-xl" />
                  )}
                </div>
                <img
                  className="w-10 h-10 rounded-lg object-cover"
                  data-alt="Avatar of the tournament leader"
                  src={item.avatar}
                />
                <div>
                  <p className="text-sm md:text-base font-bold text-white leading-tight">
                    {item.name}
                  </p>
                  <p className="text-primary text-xs font-medium">
                    {item.points} pts
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className=" text-sm md:text-xl font-black text-white">
                  ${item.prize}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* runner ups */}
        <div>
          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-primary/60">
              Leaders
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/60 to-transparent" />
          </div>

          {LEADERBOARD_DATA.slice(3, 10).map((item, i) => (
            <div
              key={i}
              className={`px-4 py-3 rounded-lg flex items-center justify-between ${
                item.highlight === "me"
                  ? "bg-primary/10 border-l-4 border-primary"
                  : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 text-sm font-bold text-slate-500">
                  {item.rank}
                </span>
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                    <BsPerson className="text-slate-600 text-sm" />
                  </div>
                )}
                <p className="text-sm font-medium text-slate-300">
                  {item.name}
                </p>
              </div>
              <div className="flex gap-6 items-center">
                <p className="text-xs font-bold text-slate-400">
                  {item.points.toLocaleString()}
                </p>
                <p className="w-12 text-right text-sm font-bold text-white">
                  ${item.prize}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* cutOff zone */}
        <div>
          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-400 to-transparent" />
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-red-500">
              Winning Zone Cut Off
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-400 to-transparent" />
          </div>

          {LEADERBOARD_DATA.slice(10, LEADERBOARD_DATA.length).map(
            (item, i) => (
              <div
                key={i}
                className={`px-4 py-3 rounded-lg flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 text-sm font-bold text-slate-500">
                    {item.rank}
                  </span>
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <BsPerson className="text-slate-600 text-sm" />
                    </div>
                  )}
                  <p className="text-sm font-medium text-slate-300">
                    {item.name}
                  </p>
                </div>
                <div className="flex gap-6 items-center">
                  <p className="text-xs font-bold text-slate-400">
                    {item.points.toLocaleString()}
                  </p>
                  <p className="w-12 text-right text-sm font-bold text-white">
                    ${item.prize}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="p-4 bg-background-dark/30 text-center">
        <button className="text-sm font-bold text-primary hover:underline">
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
};

export default SessionLeaderboard;
