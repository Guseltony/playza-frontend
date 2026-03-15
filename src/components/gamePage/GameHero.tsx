import type { Game } from "@/types/types";
import { Users, Trophy, Clock } from "lucide-react";
import { formatNaira } from "@/lib/formatNaira";
import { Link } from "react-router";

interface GameHeroProps {
  game: Game;
  pricePool: number;
  fullDate: string;
}

export const GameHero = ({ game, pricePool, fullDate }: GameHeroProps) => {
  return (
    <section className="relative w-full mb-4 overflow-hidden lg:rounded-4xl h-auto min-h-112.5 flex items-center border-b lg:border border-white/5">
      {/* Background Image & Multi-layer Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-playza-dark/70" />
        <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-playza-blue/5 blur-[120px] rounded-full" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto px-2 md:px-6 w-full py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Game Info */}
          <div className="space-y-8 order-1">
            {/* Meta Badges */}
            <div className="flex flex-wrap gap-4 justify-start">
              <span className="px-5 py-2 bg-playza-blue/20 border border-playza-blue/30 rounded-full text-playza-blue text-[10px] font-black tracking-widest uppercase backdrop-blur-md">
                {game.category}
              </span>
              {game.badge && (
                <span className="px-5 py-2 bg-playza-cyan/20 border border-playza-cyan/30 rounded-full text-playza-cyan text-[10px] font-black tracking-widest uppercase backdrop-blur-md">
                  {game.badge}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-none tracking-tighter wrap-break-word">
                {game.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'text-stroke-white text-transparent' : 'text-white'}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
                Push your limits in <span className="text-white">{game.title}</span>, 
                compete against the best, and claim your share of the massive prize pool.
              </p>
            </div>
          </div>

          {/* Right Column (Desktop) / Underneath (Mobile): CTA Card */}
          <div className="order-2 lg:max-w-xl w-full">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-2 lg:p-4 backdrop-blur-xl space-y-4 md:space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-playza-blue/5 blur-[80px] rounded-full -top-1/2 -right-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex flex-wrap justify-between items-center gap-4 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase">Tournament Info</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{fullDate}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10 border-y border-white/5 py-4 md:py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-playza-blue/10 border border-playza-blue/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-playza-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-0.5">Active</p>
                    <p className="text-white text-lg font-bold leading-none">{game.activePlayers.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-playza-yellow/10 border border-playza-yellow/20 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-playza-yellow" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-0.5">Prize Pool</p>
                    <p className="text-playza-green text-lg font-bold leading-none font-mono tracking-tighter">{formatNaira(pricePool)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3">
                     <Clock className="w-4 h-4 text-slate-500" />
                     <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Match Duration</p>
                   </div>
                   <p className="text-white font-black text-sm">{Math.floor(game.durationInSeconds / 60)} Mins</p>
                </div>

                <Link to={`/games/${game.slug}/session`}>                
                  <button className="w-full bg-white text-playza-dark font-black py-5 rounded-3xl hover:bg-slate-200 hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-sm shadow-2xl active:scale-95">
                    Enter Live Arena
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};
