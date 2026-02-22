import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="relative flex-1 min-w-67">
      <BiSearch className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

      <input
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all"
        placeholder="Search by game name, category..."
        type="text"
      />
    </div>
  );
};

export default Search;
