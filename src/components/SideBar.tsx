import { navItems } from "@/constants/constants";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div>
      <nav className="space-y-1 mb-8">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            to={path}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-primary/20 border-l-4 border-primary font-medium  text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  className={
                    isActive ? "text-primary" : "text-muted-foreground"
                  }
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="glass rounded-lg p-5">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
          Live Network
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-slate-300">
            <span className="text-white font-bold">1.2k</span> Players Online
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
            <div className="w-8 h-8 rounded bg-accent-purple/20 flex items-center justify-center">
              <span className="material-icons text-accent-purple text-sm">
                groups
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Global Event</p>
              <p className="text-[10px] text-slate-400">Starts in 45m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
