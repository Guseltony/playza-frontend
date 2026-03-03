import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { leaderboard } from "@/data/leaderboard";
import type { GameName, LeaderboardPlayer } from "@/types/types";
import { useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { formatNaira } from "../../lib/formatNaira";

const LeaderBoard = () => {
  const gameNames = Object.keys(leaderboard);

  const [activeGame, setActiveGame] = useState<GameName>("Mystic Quest");

  const leaderBoardData = leaderboard[activeGame];

  return (
    <section>
      <div className="mb-2">
        <h2 className="font-heading text-xl font-bold text-white flex gap-2 items-center mb-4">
          <MdLeaderboard className="text-chart-4" /> Games LeaderBoard
        </h2>
        <div className="flex gap-2 text-xs overflow-x-auto whitespace-nowrap mt-2 scroll-hidden scroll-smooth pb-2">
          {gameNames.map((game) => (
            <p
              key={game}
              className={` p-2 font-semibold rounded-full cursor-pointer ${activeGame === game ? "bg-primary" : "bg-border"}`}
              title={game}
              onClick={() => setActiveGame(game as GameName)}
            >
              {game}
            </p>
          ))}
        </div>
      </div>

      <Table className="w-full text-left">
        <TableHeader className="bg-accent/20 text-slate-400 text-[10px] uppercase font-bold">
          <TableRow>
            <TableHead className="px-2 sm:px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
              Rank
            </TableHead>
            <TableHead className="px-2 sm:px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
              Username
            </TableHead>
            <TableHead className="px-2 sm:px-6 py-3 text-slate-400 text-[10px] uppercase font-bold">
              Score
            </TableHead>
            <TableHead className="px-2 sm:px-6 py-3 text-slate-400 text-[10px] uppercase font-bold text-right">
              Time
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-accent-dark">
          {leaderBoardData.map(
            ({
              id,
              rank,
              avatar,
              username,
              points,
              prizeWon,
            }: LeaderboardPlayer) => {
              const isGold = rank === 1;
              const isSilver = rank === 2;
              const isMe = rank === 4;

              return (
                <TableRow
                  key={id}
                  className={
                    isMe
                      ? "bg-primary/10 border-l-4 border-l-primary"
                      : "hover:bg-accent-dark/20 transition-colors"
                  }
                >
                  <TableCell className="px-2 sm:px-6 py-4">
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
                      {rank}
                    </div>
                  </TableCell>

                  <TableCell className="px-2 sm:px-6 py-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-700 overflow-hidden">
                      <img src={avatar} alt={username} />
                    </div>
                    <span
                      className={
                        isMe
                          ? "font-bold text-white"
                          : "font-medium text-white text-sm"
                      }
                    >
                      {username}
                    </span>
                  </TableCell>

                  <TableCell
                    className={`px-2 sm:px-6 py-4 font-bold ${
                      isGold || isMe ? "text-primary" : "text-white"
                    }`}
                  >
                    {points.toLocaleString()}
                  </TableCell>

                  <TableCell className="px-2 sm:px-6 py-4 text-right text-slate-400 text-sm">
                    {formatNaira(Number(prizeWon) * 100).toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      </Table>
      {/* <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4 text-center text-secondary text-sm uppercase font-bold">
              Rank
            </TableHead>
            <TableHead className="w-1/4 text-center text-secondary text-sm uppercase font-bold">
              Player
            </TableHead>
            <TableHead className="w-1/4 text-center text-secondary text-sm uppercase font-bold">
              Amount Won
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {leaderBoardData.map(
            ({
              id,
              rank,
              avatar,
              username,
              points,
              prizeWon,
            }: LeaderboardPlayer) => (
              <TableRow key={id}>
                <TableCell className="font-medium flex justify-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-muted text-accent text-center text-sm">
                    {rank}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      className="w-8 h-8 rounded border border-accent-400/50"
                      data-alt={`User avatar for ${username}`}
                      src={avatar}
                    />
                    <div>
                      <p className="text-xs font-bold text-accent leading-tight ">
                        {username}
                      </p>
                      <p className="text-xs text-slate-400">{points} Za</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium flex justify-center">
                  <span className="text-sm text-center font-bold text-primary">
                    {(Number(prizeWon) * 100).toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table> */}
    </section>
  );
};

export default LeaderBoard;
