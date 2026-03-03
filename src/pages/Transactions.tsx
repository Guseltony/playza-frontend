import React from "react";

const Transactions = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight text-slate-100">
            Transaction <span className="text-primary">History</span>
          </h1>
          <p className="text-slate-400 text-base">
            Comprehensive ledger of your gaming earnings and deposits.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background-dark font-bold rounded-xl hover:scale-[1.02] transition-transform neon-glow">
          <span className="material-symbols-outlined">file_download</span>
          <span>Export Statement</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-8 bg-primary/5 p-1.5 rounded-xl border border-primary/10 w-fit">
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
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold">
                <th className="px-6 py-5 border-b border-primary/10">
                  Transaction ID
                </th>
                <th className="px-6 py-5 border-b border-primary/10">Type</th>
                <th className="px-6 py-5 border-b border-primary/10 text-right">
                  Amount (₦)
                </th>
                <th className="px-6 py-5 border-b border-primary/10">Status</th>
                <th className="px-6 py-5 border-b border-primary/10">
                  Reference
                </th>
                <th className="px-6 py-5 border-b border-primary/10">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-primary/5">
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90821
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-xs border border-primary/20">
                    <span className="material-symbols-outlined text-sm">
                      emoji_events
                    </span>{" "}
                    Prize Win
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-primary">
                  +₦50,000.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">VAL-TOURN-X-FINALS</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 24, 2023 · 14:32
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90744
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs border border-blue-500/20">
                    <span className="material-symbols-outlined text-sm">
                      add_circle
                    </span>{" "}
                    Deposit
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-slate-100">
                  +₦10,000.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">PAYSTACK-REF-889</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 23, 2023 · 09:15
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90612
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 font-semibold text-xs border border-slate-500/20">
                    <span className="material-symbols-outlined text-sm">
                      videogame_asset
                    </span>{" "}
                    Game Entry
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦2,500.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">ENTRY-FEE-VAL-44</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 22, 2023 · 18:00
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90501
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs border border-amber-500/20">
                    <span className="material-symbols-outlined text-sm">
                      account_balance
                    </span>{" "}
                    Withdrawal
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦15,000.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-amber-400">
                    <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="font-medium">Pending</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">BANK-X-442291</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 21, 2023 · 11:45
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90488
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-xs border border-primary/20">
                    <span className="material-symbols-outlined text-sm">
                      emoji_events
                    </span>{" "}
                    Prize Win
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-primary">
                  +₦5,000.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">MATCH-WIN-8821</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 20, 2023 · 22:10
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5 font-mono text-slate-400">
                  #TXN-90412
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 font-semibold text-xs border border-slate-500/20">
                    <span className="material-symbols-outlined text-sm">
                      videogame_asset
                    </span>{" "}
                    Game Entry
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-slate-100">
                  -₦1,000.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400"></span>
                    <span className="font-medium">Completed</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-400">ENTRY-PUBG-M-1</td>
                <td className="px-6 py-5 text-slate-400 whitespace-nowrap">
                  Oct 19, 2023 · 15:20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="text-slate-400 text-sm">
          Showing <span className="text-slate-100 font-bold">1-6</span> of{" "}
          <span className="text-slate-100 font-bold">124</span> results
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-xl bg-primary/5 text-slate-400 hover:text-primary border border-primary/10 transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
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
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Transactions;
