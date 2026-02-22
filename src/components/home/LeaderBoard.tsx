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
      <Table className="mt-4">
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
          {/* first row */}
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
      </Table>
    </section>
  );
};

export default LeaderBoard;
