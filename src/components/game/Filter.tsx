import React from "react";

const Filter = () => {
  return (
    <div className="flex bg-white/5 border border-white/10 p-1 rounded-lg">
      <button className="px-4 py-1.5 rounded-md bg-primary text-sm font-medium">
        All
      </button>
      <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">
        Casual
      </button>
      <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">
        Elite
      </button>
      <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">
        Live
      </button>
    </div>
  );
};

export default Filter;
