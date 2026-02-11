// import logoImage from "logoImage.png";

import { useLocation } from "react-router";
import { Button } from "./ui/button";
import { ChevronRight, Wallet } from "lucide-react";

const Header = () => {
  const walletBalance = "₦3,250";

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return isHome ? (
    <div className="flex items-center justify-between px-4 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 w-full py-4 fixed z-50 top-0 right-0">
      {/* Home Page Header */}
      {/* <div className="flex-1"></div> */}

      <div className="flex items-center gap-3 justify-center ">
        <img
          src="/logoImage.png"
          alt="Playza Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="hidden md:block text-2xl">PLAYZA</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          // className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all px-5 py-2.5 rounded-full font-medium shadow-lg"
        >
          Enter Arena
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between px-4 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 w-full py-4 fixed z-50 top-0 right-0">
      {/* Other Pages Header */}
      <div className="flex items-center gap-3">
        <img
          src="/logoImage.png"
          alt="Playza Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="hidden md:block text-2xl">PLAYZA</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2.5 rounded-full border border-gray-700">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <Wallet className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">{walletBalance}</span>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
