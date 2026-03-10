import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { matchHistory } from "@/data/matchHistory";
import { useState } from "react";
import { pagination } from "@/lib/pagination";

const History = () => {
  const [page, setPage] = useState(1);
  const [filterBy, setFilterBy] = useState("all");

  // const { paginatedData, totalPages } = pagination(page);

  const filterHistory = () => {
    let dataSet = matchHistory;

    switch (filterBy) {
      case "win":
        dataSet = matchHistory.filter((h) => h.result === "WIN");
        break;

      case "loss":
        dataSet = matchHistory.filter((h) => h.result === "LOSS");
        break;

      default:
        dataSet = matchHistory;
        break;
    }

    return pagination(page, dataSet);
  };

  const { paginatedData, totalPages } = filterHistory();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3">
        {[
          { label: "All Matches", slug: "all" },
          { label: "Wins", slug: "win" },
          { label: "Losses", slug: "loss" },
        ].map(({ label, slug }) => (
          <button
            onClick={() => setFilterBy(slug)}
            className={`flex h-10 items-center justify-center gap-x-2 rounded-xl  px-5 font-bold text-sm transition-all glow-accent ${filterBy === slug ? "bg-primary" : "bg-slate-800/50 border border-border text-slate-100 hover:bg-slate-700"}`}
          >
            {label}
          </button>
        ))}
        {/* <button className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-800/50 border border-border-dark text-slate-100 px-5 font-bold text-sm hover:bg-slate-700 transition-all ml-auto">
          <span>Filter by Game</span>
          <span className="material-symbols-outlined text-[18px]">
            filter_list
          </span>
        </button> */}
      </div>
      {/* <!-- Table Container --> */}
      <div className="w-full @container">
        <div className="overflow-hidden rounded-xl border border-border-dark bg-surface-dark/30 backdrop-blur-sm">
          <Table className="w-full text-left border-collapse">
            <TableHeader>
              <TableRow className="bg-surface-dark/80 border-b border-border-dark">
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Date
                </TableHead>
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Game
                </TableHead>
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Score
                </TableHead>
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Rank
                </TableHead>
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Entry Fee
                </TableHead>
                <TableHead className="px-6 py-4 text-slate-400 text-xs font-bold uppercase tracking-wider text-right">
                  Result
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border-dark">
              {/* <!-- Row 1 --> */}
              {paginatedData.map(
                ({
                  id,
                  date,
                  game,
                  banner,
                  score,
                  leaderboardRank,
                  entryFee,
                  result,
                }) => (
                  <TableRow
                    key={id}
                    className="hover:bg-slate-800/30 transition-colors group"
                  >
                    <TableCell className="px-6 py-5 text-slate-300 text-sm font-medium">
                      {date}
                    </TableCell>
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={banner}
                          className="size-10 rounded object-cover"
                        />
                        <span className="text-slate-100 text-sm font-bold">
                          {game}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-5">
                      <span className="text-slate-100 font-mono text-sm bg-slate-800/50 px-2 py-1 rounded">
                        {score.toLocaleString()}pts
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-slate-300 text-sm">
                          {leaderboardRank}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-5 text-slate-400 text-sm">
                      {entryFee}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-right">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                          result === "WIN"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                        }`}
                      >
                        {result}
                      </span>
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </div>
        {/* <!-- Pagination --> */}
        <div className="flex items-center justify-between mt-6 px-4">
          <span className="text-slate-500 text-sm">
            Showing 5 of 142 matches
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="size-10 rounded-xl bg-slate-800/50 border border-border-dark text-slate-400 flex items-center justify-center hover:text-primary transition-all"
            >
              <MdChevronLeft />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`size-10 rounded-xl flex items-center justify-center ${
                  page === i + 1
                    ? " bg-primary text-background-dark font-bold text-sm shadow-lg glow-accent"
                    : " bg-slate-800/50 border border-border-dark text-slate-400 hover:text-primary transition-all font-bold text-sm"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="size-10 rounded-xl bg-slate-800/50 border border-border-dark text-slate-400 flex items-center justify-center hover:text-primary transition-all"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
