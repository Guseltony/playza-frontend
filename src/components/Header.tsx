// import logoImage from "logoImage.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 w-full py-4 border-b border-gray-800 fixed z-50 top-0 right-0">
      {/* Home Page Header */}
      <div className="flex-1"></div>

      <div className="flex items-center gap-3 justify-center flex-1">
        <img
          src="/logoImage.png"
          alt="Playza Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-2xl">PLAYZA</h1>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <button className="bg-gray-800 hover:bg-gray-700 transition-colors px-5 py-2.5 rounded-full border border-gray-700 font-medium">
          Login
        </button>
        <button className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all px-5 py-2.5 rounded-full font-medium shadow-lg">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Header;
