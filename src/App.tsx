import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavFooter />
    </div>
  );
};

export default App;
