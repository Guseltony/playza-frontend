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
      <div className="max-w-400 mx-auto px-6 h-16 flex items-center justify-between">
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

    //   <div className=" px-4 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 w-full py-4 fixed z-50 top-0 right-0 ">
    //     {/* Home Page Header */}
    //     {/* <div className="flex-1"></div> */}
    //     <div className="flex items-center justify-between max-w-6xl mx-auto">
    //       <Link to={"/"} className="flex items-center gap-3">
    //         <img
    //           src="/logoImage.png"
    //           alt="Playza Logo"
    //           className="w-12 h-12 object-contain"
    //         />
    //         <h1 className="hidden md:block text-2xl">PLAYZA</h1>
    //       </Link>

    //       <div className="flex items-center gap-3">
    //         <Button
    //           variant="secondary"
    //           // className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all px-5 py-2.5 rounded-full font-medium shadow-lg"
    //         >
    //           Enter Arena
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // ) : (
    //   <div className="px-4 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 w-full py-4 fixed z-50 top-0 right-0">
    //     {/* Other Pages Header */}
    //     <div className="flex items-center justify-between max-w-6xl mx-auto">
    //       <Link to={"/"} className="flex items-center gap-3">
    //         <img
    //           src="/logoImage.png"
    //           alt="Playza Logo"
    //           className="w-12 h-12 object-contain"
    //         />
    //         <h1 className="hidden md:block text-2xl">PLAYZA</h1>
    //       </Link>

    //       <div className="flex items-center gap-3">
    //         <div className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2.5 rounded-full border border-gray-700">
    //           <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
    //             <Wallet className="w-4 h-4 text-white" />
    //           </div>
    //           <span className="font-semibold">{walletBalance}</span>
    //           <ChevronRight className="w-5 h-5" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Header;
