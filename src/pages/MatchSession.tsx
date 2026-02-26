import { games, sessionLeaderboardData } from "@/data/games";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import React from "react";
import { Link, useParams } from "react-router";
import { formatNaira } from "../lib/formatNaira";
import {
  ArrowBigLeft,
  Gamepad2,
  Info,
  Laptop,
  PlayCircle,
  Smartphone,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiTrendingUp, BiTrophy } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";

const MatchSession = () => {
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

  const {
    title,
    slug: gameSlug,
    thumbnail,
    pricePool,
    activePlayers,
  } = allGames.find((game) => game.slug === slug) ?? {};

  const splitTitle = title?.split(" ") ?? "";

  // console.log(splitTitle);

  return (
    <main className="flex-1 max-w-400 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[70%] flex flex-col gap-4">
          <Link
            to={`/games/${gameSlug}`}
            className="bg-muted-foreground h-10 w-10 flex items-center justify-center rounded-full"
          >
            <ArrowBigLeft />
          </Link>
          <section className="bg-surface-dark rounded-xl pr-1 py-4 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-row justify-between items-start md:items-center mb-4 ">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-white rounded-full live-pulse"></span>{" "}
                    LIVE
                  </span>
                  <span className="text-slate-400 text-sm">
                    #{splitTitle[0]}-2024-001
                  </span>
                </div>
                <h2 className=" text-lg md:text-5xl font-bold text-white mb-1">
                  {title}
                </h2>
                <p className="text-xs md:text-md text-slate-400">
                  Join 1,240 players competing for glory
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                  Prize Pool
                </p>
                <p className=" md:text-4xl font-black text-primary glow-primary">
                  {formatNaira(pricePool)}
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-70 mb-6 group">
              <img
                alt={gameSlug}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                data-alt="High energy gaming illustration with futuristic lights"
                src={thumbnail}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-background-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-[10px] uppercase text-slate-400 font-bold">
                      Entry Closes In
                    </p>
                    <div className="flex gap-2 text-xl font-bold text-white">
                      <span>00</span>
                      <span className="text-primary">:</span>
                      <span>45</span>
                      <span className="text-primary">:</span>
                      <span>12</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-background-dark font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                    <PlayCircle className="md:text-xl" />
                    Enter Live Game
                  </button>
                  <button className="flex-1 sm:flex-none bg-accent hover:bg-accent/80 text-white font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Gamepad2 className="md:text-xl" />
                    Play Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border border-accent-dark">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Highest Score
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-white">94,203</p>
                  <span className="text-primary text-xs font-medium">
                    ↑ 1.2%
                  </span>
                </div>
              </div>
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border border-accent-dark">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Average Score
                </p>
                <p className="text-2xl font-bold text-white">42,115</p>
              </div>
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border border-accent-dark">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Total Entries
                </p>
                <p className="text-2xl font-bold text-white">{activePlayers}</p>
              </div>
            </div>
          </section>
          <section className="bg-surface-dark rounded-xl border border-accent-dark overflow-hidden">
            <div className="flex border-b border-accent-dark">
              <button className="px-6 py-4 text-primary border-b-2 border-primary text-sm font-bold bg-primary/5">
                Live Leaderboard
              </button>
              <button className="px-6 py-4 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                Tournament Rules
              </button>
              <button className="px-6 py-4 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                Recent Wins
              </button>
            </div>
            <div className="p-0">
              <Table className="w-full text-left">
                <TableHeader className="bg-accent/20 text-slate-400 text-[10px] uppercase font-bold">
                  <TableRow>
                    <TableHead className="px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
                      Rank
                    </TableHead>
                    <TableHead className="px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
                      Username
                    </TableHead>
                    <TableHead className="px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
                      Score
                    </TableHead>
                    <TableHead className="px-6 py-3 text-slate-400 text-[10px] uppercase font-bold text-right">
                      Time
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-accent-dark">
                  {sessionLeaderboardData.map((user) => {
                    const isGold = user.highlight === "gold";
                    const isSilver = user.highlight === "silver";
                    const isMe = user.highlight === "me";

                    return (
                      <TableRow
                        key={user.rank}
                        className={
                          isMe
                            ? "bg-primary/10 border-l-4 border-l-primary"
                            : "hover:bg-accent-dark/20 transition-colors"
                        }
                      >
                        <TableCell className="px-6 py-4">
                          <div
                            className={`flex items-center justify-center w-6 h-6 rounded font-bold text-xs ${
                              isGold
                                ? "bg-yellow-500/20 text-yellow-500"
                                : isSilver
                                  ? "bg-slate-400/20 text-slate-300"
                                  : isMe
                                    ? "bg-primary text-background-dark"
                                    : "text-slate-400"
                            }`}
                          >
                            {user.rank}
                          </div>
                        </TableCell>

                        <TableCell className="px-6 py-4 flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-700 overflow-hidden">
                            <img src={user.avatar} alt={user.name} />
                          </div>
                          <span
                            className={
                              isMe
                                ? "font-bold text-white"
                                : "font-medium text-white"
                            }
                          >
                            {user.name}
                          </span>
                        </TableCell>

                        <TableCell
                          className={`px-6 py-4 font-bold ${
                            isGold || isMe ? "text-primary" : "text-white"
                          }`}
                        >
                          {user.score.toLocaleString()}
                        </TableCell>

                        <TableCell className="px-6 py-4 text-right text-slate-400 text-sm">
                          {user.time}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            <div className="p-4 border-t border-accent-dark bg-background-dark/30 text-center">
              <button className="text-sm font-bold text-primary hover:underline">
                View Full Leaderboard
              </button>
            </div>
          </section>
        </div>

        <div className="lg:w-[30%] flex flex-col gap-6">
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
