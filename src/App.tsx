import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import AppNotification from "./components/AppNotification";
import LeaderBoard from "./pages/LeaderBoard";
import WalletPage from "./pages/Wallet";
import Profile from "./pages/Profile";
import Games from "./pages/Games";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import RightSideBar from "./components/RightSideBar";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-slate-800 text-white">
      <Header />
      {/* {pathname === "/" && <AppNotification />} */}
      <div className="max-w-[1600px] mx-auto flex gap-6 p-6">
        <aside className="w-72 hidden lg:block sticky top-24 self-start h-[calc(100vh-8rem)]">
          <SideBar />
        </aside>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
        </Routes>

        {pathname !== "/games" && <RightSideBar />}
      </div>

      <Footer />
      {/* <NavFooter /> */}
    </div>
  );
};

export default App;
