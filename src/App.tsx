import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import AppNotification from "./components/AppNotification";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-slate-800 text-white">
      <Header />
      {pathname === "/" && <AppNotification />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavFooter />
    </div>
  );
};

export default App;
