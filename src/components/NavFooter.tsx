import { navItems } from "@/constants/constants";
import { useState } from "react";
import { NavLink } from "react-router";

const NavFooter = () => {
  const [currentView, setCurrentView] = useState("home");
  return (
    <div className="z-40 md:hidden">
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur border-t border-gray-800 z-50">
        <div className="flex items-center justify-around max-w-6xl mx-auto px-2 py-3">
          {navItems
            .filter((item) => item.mobile)
            .map((item, index) => {
              const viewMap: Record<
                string,
                "home" | "games" | "leaderboard" | "wallet" | "settings"
              > = {
                Home: "home",
                Games: "games",
                Leaderboard: "leaderboard",
                Wallet: "wallet",
                Settings: "settings",
              };
              const view = viewMap[item.label];
              const isActive = currentView === view;

              return (
                <NavLink
                  to={`${item.path}`}
                  key={index}
                  onClick={() => setCurrentView(view)}
                  className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {/* <button
                  key={index}
                  // onClick={() => setCurrentView(view)}
                  className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                > */}
                  <div
                    className={`flex gap-2 justify-center items-center ${isActive ? "bg-green-400/20 rounded-full px-4 py-2" : ""} `}
                  >
                    <item.icon
                      className={`w-6 h-6 ${isActive ? "text-green-500" : ""}`}
                    />
                    {isActive && <span className="text-xs">{item.label}</span>}
                  </div>
                  {/* </button> */}
                </NavLink>
              );
            })}
        </div>
      </nav>
    </div>
  );
};

export default NavFooter;
