import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sessionLeaderboardData } from "@/data/games";

const Tableeee = () => {
  return (
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
                  {user.rank}
                </div>
              </TableCell>

              <TableCell className="px-2 sm:px-6 py-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-700 overflow-hidden">
                  <img src={user.avatar} alt={user.name} />
                </div>
                <span
                  className={
                    isMe
                      ? "font-bold text-white"
                      : "font-medium text-white text-sm"
                  }
                >
                  {user.name}
                </span>
              </TableCell>

              <TableCell
                className={`px-2 sm:px-6 py-4 font-bold ${
                  isGold || isMe ? "text-primary" : "text-white"
                }`}
              >
                {user.score.toLocaleString()}
              </TableCell>

              <TableCell className="px-2 sm:px-6 py-4 text-right text-slate-400 text-sm">
                {user.time}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Tableeee;
