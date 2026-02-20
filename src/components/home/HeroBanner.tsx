import { TrendingUp } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden glass border-white/10">
      <img
        alt="Tournament Banner"
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.png"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
      <div className="relative h-full p-8 flex flex-col justify-center z-5">
        {/* <div className="flex items-center gap-3 mb-2">
          <span className="bg-primary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Live Tournament
          </span>
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            MATCHMAKING OPEN
          </div>
        </div> */}
        <div className="flex flex-col  space-y-1 my-4">
          <h1 className="text-lg md:text-2xl lg:text-5xl font-black tracking-tight uppercase">
            Quantum Clash
          </h1>
          <span className="text-sm font-bold tracking-widest text-primary uppercase">
            fighting arena
          </span>
        </div>
        <div className="flex items-center gap-12">
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
              Current Game Pool
            </div>
            <div className="flex items-center text-base md:text-xl lg:text-3xl font-display font-bold text-accent">
              ₦250,000.00
              <TrendingUp className=" text-green-400 ml-1" size={15} />
            </div>
          </div>
          <div className="h-10 w-px bg-white/20"></div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
              Time Remaining
            </div>
            <div className="text-base md:text-xl lg:text-3xl font-display font-bold text-white tabular-nums">
              00:42:15
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
