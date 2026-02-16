import {
  ChartBarIncreasing,
  Gamepad2,
  Gift,
  History,
  Medal,
  Settings,
  UserPlus,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div>
      <nav className="space-y-1 mb-8">
        <NavLink
          to="games"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <Gamepad2
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>Games</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="tournaments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <Medal
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>Tournaments</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="leaderboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <ChartBarIncreasing
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>Leaderboard</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="bonus"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <Gift
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>Bonus</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="referral"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <UserPlus
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>Referral</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="wallet"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <Wallet
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>wallet</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="history"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <History
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>History</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
          }
        >
          {({ isActive }) => (
            <>
              <Settings
                size={18}
                className={
                  isActive ? "text-yellow-400" : "text-muted-foreground"
                }
              />
              <span>settings</span>
            </>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
