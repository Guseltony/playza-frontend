import { formatNaira } from "@/lib/formatNaira";
import { PlayCircle, Users } from "lucide-react";
import { BiMedal, BiStar } from "react-icons/bi";
import { GiMedal } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import {
  MdDescription,
  MdEventBusy,
  MdLockClock,
  MdPayment,
} from "react-icons/md";

type sessionInfoProps = {
  title: string;
  pricePool: number;
};

const SessionInfo = ({ title, pricePool }: sessionInfoProps) => {
  return (
    <main className="flex flex-1 justify-center py-8">
      <div className="md:px-4 layout-content-container flex flex-col flex-1">
        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Active Tournament
              </span>
              <h1 className="text-white tracking-tight text-lg lg:text-4xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Skill-based competitive gaming session details and prize pool
                distribution.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-500/20">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
                LIVE
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                {formatNaira(pricePool)} POOL
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-3">
            <h2 className=" text-white text-xl font-bold mb-4 flex items-center gap-2">
              <MdPayment className="text-primary" /> Prize Distribution
            </h2>
          </div>
          <div className="flex flex-col gap-3 rounded-xl p-6 bg-card  relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GiMedal className="text-8xl" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              1st Place
            </p>
            <p className=" text-white text-4xl font-black">50%</p>
            <p className="text-primary font-bold text-sm">$2,500 USD</p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl p-6  bg-card dark:border-slate-800 relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BiMedal className="text-8xl" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              2nd Place
            </p>
            <p className=" text-white text-4xl font-black">30%</p>
            <p className="text-primary font-bold text-sm">$1,500 USD</p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl p-6  bg-card dark:border-slate-800 relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BiStar className="text-8xl" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              3rd Place
            </p>
            <p className=" text-white text-4xl font-black">20%</p>
            <p className="text-primary font-bold text-sm">$1,000 USD</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <section>
              <h2 className=" text-white text-xl font-bold mb-4 flex items-center gap-2">
                <MdDescription className="text-primary" /> How It Works
              </h2>
              <div className=" bg-card dark:border-slate-800 rounded-xl px-2 md:px-4 py-4 space-y-4">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary/20 text-primary shrink-0 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Entry fee of{" "}
                      <span className="text-white font-bold">10 Credits</span>{" "}
                      required per session attempt.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary/20 text-primary shrink-0 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Players are matched based on their{" "}
                      <span className="text-white font-bold">
                        Skill Rating (SR)
                      </span>{" "}
                      to ensure fair competition.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary/20 text-primary shrink-0 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Highest score achieved during the session window will be
                      used for final leaderboard ranking.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary/20 text-primary shrink-0 flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Anti-cheat measures are active. Any suspicious activity
                      will result in immediate disqualification and account
                      review.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className=" text-white text-xl font-bold mb-4 flex items-center gap-2">
                <GrSchedule className="text-primary" /> Session Timing
              </h2>
              <div className=" bg-card dark:border-slate-800 rounded-xl p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <PlayCircle />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase">
                        Session Start
                      </p>
                      <p className=" text-white font-bold">Today, 14:00 GMT</p>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <MdLockClock />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase">
                        Entry Closes
                      </p>
                      <p className=" text-white font-bold">Today, 22:00 GMT</p>
                    </div>
                  </div>
                  <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded font-bold uppercase">
                    Final Call
                  </span>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <MdEventBusy />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase">
                        Session Ends
                      </p>
                      <p className=" text-white font-bold">
                        Tomorrow, 02:00 GMT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Users />
                <span className=" text-white font-bold">
                  1,248 Registered Players
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic">
                85% of available slots filled. Register now to secure your spot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SessionInfo;
