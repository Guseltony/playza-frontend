import { useState } from "react";
import { MdCheckCircle, MdPending, MdCancel, MdSearch, MdFilterList } from "react-icons/md";

const MOCK_REFERRALS = [
  { id: 1, name: "NightStalker_99", avatar: "N", date: "Oct 12, 2023", status: "Completed", reward: "+$10.00" },
  { id: 2, name: "BellaCiao04", avatar: "B", date: "Oct 10, 2023", status: "Pending", reward: "--" },
  { id: 3, name: "PixelFire", avatar: "P", date: "Oct 08, 2023", status: "Completed", reward: "+$10.00" },
  { id: 4, name: "DragonsSlayer", avatar: "D", date: "Oct 05, 2023", status: "Completed", reward: "+$10.00" },
  { id: 5, name: "MysticMage", avatar: "M", date: "Oct 01, 2023", status: "Failed", reward: "--" },
];

const ReferralHistoryTable = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="glass-card rounded-2xl p-6 mt-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Referral History</h2>
          <p className="text-slate-400 text-sm">Track and manage your pending & active drop-ins.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search players..." 
              className="w-full bg-background/50 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-slate-300">
            <MdFilterList />
          </button>
        </div>
      </div>

      <div className="flex gap-6 border-b border-white/5 mb-6 overflow-x-auto">
        {["All", "Pending", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`pb-3 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors relative ${
              filter === tab ? "text-primary" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {tab}
            {filter === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b border-white/5">
              <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest pl-4 hover:text-slate-300 cursor-pointer">Player</th>
              <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-300 cursor-pointer">Join Date</th>
              <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-300 cursor-pointer">Status</th>
              <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right pr-4 hover:text-slate-300 cursor-pointer">Reward Earned</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REFERRALS.filter(r => filter === "All" || r.status === filter).map(referral => (
              <tr key={referral.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs ring-1 ring-accent/30">
                      {referral.avatar}
                    </div>
                    <span className="text-slate-200 font-medium group-hover:text-primary transition-colors">{referral.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-slate-400">{referral.date}</td>
                <td className="py-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                    referral.status === "Completed" ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                    referral.status === "Pending" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                    "bg-red-500/10 text-red-500 border border-red-500/20"
                  }`}>
                    {referral.status === "Completed" && <MdCheckCircle />}
                    {referral.status === "Pending" && <MdPending />}
                    {referral.status === "Failed" && <MdCancel />}
                    {referral.status}
                  </div>
                </td>
                <td className="py-4 text-right pr-4">
                  <span className={`font-bold ${referral.reward.includes('+') ? 'text-primary' : 'text-slate-500'}`}>
                    {referral.reward}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
        <p>Showing 1 to 5 of 42 entries</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md bg-primary text-background-dark font-bold">1</button>
            <button className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10">2</button>
            <button className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10">3</button>
          </div>
          <button className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReferralHistoryTable;
