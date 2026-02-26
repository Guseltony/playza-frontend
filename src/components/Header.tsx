// import logoImage from "logoImage.png";

import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { BellDot, Plus } from "lucide-react";

const Header = () => {
  const walletBalance = "₦10,250";

  // const { pathname } = useLocation();
  // // const isHome = pathname === "/";

  return (
    <div className="sticky top-0 z-50 glass border-b border-primary/20 overflow-hidden">
      <div className="max-w-400 mx-auto px-2 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons text-white text-xl">bolt</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-3 bg-white/5 px-2 md:px-4 py-1.5 rounded-full border border-white/10">
            <span className="text-sm font-bold text-white">
              {walletBalance}
            </span>
            <button className="font-bold uppercase bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center w-8 h-8 md:w-auto md:h-auto md:px-3 md:py-1">
              <Plus className="md:hidden text-white text-sm font-bold" />

              <span className="hidden md:inline text-white">Top Up</span>
            </button>
          </div>
          <button
            type="button"
            className="relative text-slate-400 hover:text-primary transition-colors"
          >
            <span className="hidden md:block">
              <BellDot className="text-red-500" />
            </span>
            {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span> */}
          </button>
          <div className="flex items-center gap-4 pl-3 md:pl-6 border-l border-slate-700">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-white font-bold">Gusel_Toti</p>
              <p className="text-xs font-medium text-primary">PLATINUM TIER</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover"
                data-alt="User profile avatar with a friendly male face"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-58Fvu0B6OfPxJwk21e4ikcaycwxVdVNImImegpk7HZIdtPjerwEk2UQT9RIz2dmfaciPYt5weosdCczL9xtGYje3PHhXI4odKXsCVyM0sw4TGWlBGDV9uLjgmQ0TcGzEQtkeVWN8VlRzlqzcWjdkjMUI6t50Wx_371P5ZV_mxRUfqhjo0cdv1f24frntJweiWmSSYaln0MCV7_wsw9lgIJbnMmi4nftVogeOEBSt7dNZqRYc99hkVOEF3uoaDMp3udlng7CWxRU"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
