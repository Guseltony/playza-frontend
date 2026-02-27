import { Route, Routes, useLocation, useMatch, useParams } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import LeaderBoard from "./pages/LeaderBoard";
import WalletPage from "./pages/Wallet";
import Profile from "./pages/Profile";
import Games from "./pages/Games";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import RightSideBar from "./components/RightSideBar";
import Game from "./pages/Game";
import MatchSession from "./pages/MatchSession";

const App = () => {
  const { pathname } = useLocation();

  const isGameDetailPage = !!useMatch("/games/:id");
  const isGameSessionPage = !!useMatch("/games/:id/session");
  // const { id } = useParams();
  // const isGameDetailPage = pathname.startsWith(`/games/${id}`);

  console.log(isGameDetailPage);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      {/* {pathname === "/" && <AppNotification />} */}
      <div className="max-w-400 mx-auto flex gap-6 p-2 md:p-6 ">
        {!isGameSessionPage && (
          <aside className="w-72 hidden lg:block sticky top-24 self-start h-[calc(100vh-8rem)]">
            <SideBar />
          </aside>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<Game />} />
          <Route path="/games/:id/session" element={<MatchSession />} />
        </Routes>

        {pathname !== "/games" && !isGameDetailPage && !isGameSessionPage && (
          <RightSideBar />
        )}
      </div>

      <Footer />

      <NavFooter />
    </div>
  );
};

export default App;
