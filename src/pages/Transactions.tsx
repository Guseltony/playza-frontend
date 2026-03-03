import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  MdAccountBalance,
  MdAddCircle,
  MdEmojiEvents,
  MdFileDownload,
  MdVideogameAsset,
} from "react-icons/md";

const Transactions = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-2 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6 mb-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight text-slate-100">
            Transaction <span className="text-primary">History</span>
          </h1>
          <p className="text-slate-400 text-base">
            Comprehensive ledger of your gaming earnings and deposits.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background-dark font-bold rounded-xl hover:scale-[1.02] transition-transform neon-glow">
          <MdFileDownload />
          <span>Export Statement</span>
        </button>
      </div>
      <div className="flex gap-2 mb-8 bg-primary/5 p-1.5 rounded-xl border border-primary/10 overflow-x-auto whitespace-nowrap">
        <button className="px-5 py-2 rounded-lg bg-primary text-background-dark text-sm font-bold transition-all">
          All
        </button>
        <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 text-sm font-medium transition-all">
          Deposits
        </button>
        <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 text-sm font-medium transition-all">
          Withdrawals
        </button>
        <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 text-sm font-medium transition-all">
          Game Entries
        </button>
        <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 text-sm font-medium transition-all">
          Prize Wins
        </button>
      </div>
      <div className="glass-panel rounded-2xl overflow-hidden mb-8 border border-primary/10 shadow-2xl">
        <div className="overflow-x-auto">
          <Table className="w-full text-left border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold">
                <TableHead className="px-6 py-5 border-b border-primary/10">
                  Transaction ID
                </TableHead>
                <TableHead className="px-6 py-5 border-b border-primary/10">
                  Type
                </TableHead>
                <TableHead className="px-6 py-5 border-b border-primary/10 text-right">
                  Amount (₦)
                </TableHead>
                <TableHead className="px-6 py-5 border-b border-primary/10">
                  Status
                </TableHead>
                <TableHead className="px-6 py-5 border-b border-primary/10">
                  Reference
                </TableHead>
                <TableHead className="px-6 py-5 border-b border-primary/10">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-sm divide-y divide-primary/5">
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90821
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-xs border border-primary/20">
                    <MdEmojiEvents className="text-sm" /> Prize Win
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-primary">
                  +₦50,000.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  VAL-TOURN-X-FINALS
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 24, 2023 · 14:32
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90744
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs border border-blue-500/20">
                    <MdAddCircle className="text-sm" /> Deposit
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-slate-100">
                  +₦10,000.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  PAYSTACK-REF-889
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 23, 2023 · 09:15
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90612
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 font-semibold text-xs border border-slate-500/20">
                    <MdVideogameAsset className="text-sm" /> Game Entry
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦2,500.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  ENTRY-FEE-VAL-44
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 22, 2023 · 18:00
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90501
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs border border-amber-500/20">
                    <MdAccountBalance className="text-sm" /> Withdrawal
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦15,000.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-amber-400">
                    <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="font-medium">Pending</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  BANK-X-442291
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 21, 2023 · 11:45
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90488
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-xs border border-primary/20">
                    <MdEmojiEvents className="text-sm" /> Prize Win
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-primary">
                  +₦5,000.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  MATCH-WIN-8821
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 20, 2023 · 22:10
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary/5 transition-colors">
                <TableCell className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90412
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 font-semibold text-xs border border-slate-500/20">
                    <MdVideogameAsset className="text-sm" /> Game Entry
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦1,000.00
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400">
                  ENTRY-PUBG-M-1
                </TableCell>
                <TableCell className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 19, 2023 · 15:20
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0 py-6">
        <div className="text-slate-400 text-sm">
          Showing <span className="text-slate-100 font-bold">1-6</span> of{" "}
          <span className="text-slate-100 font-bold">124</span> results
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 transition-all">
            <ChevronLeft />
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20">
            1
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 text-sm font-medium transition-all">
            2
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 text-sm font-medium transition-all">
            3
          </button>
          <span className="text-slate-600 px-2 font-bold">...</span>
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 text-sm font-medium transition-all">
            21
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 transition-all">
            <ChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Transactions;
