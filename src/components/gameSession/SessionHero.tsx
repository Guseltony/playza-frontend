import { formatNaira } from "@/lib/formatNaira";
import { Gamepad2, PlayCircle, Users } from "lucide-react";
import { Link } from "react-router";

type SessionHeroProps = {
  title: string;
  slug: string;
  thumbnail: string;
  activePlayers: number;
  entryFee: number;
  pricePool?: number;
};

const SessionHero = ({
  title,
  slug,
  thumbnail,
  pricePool,
  activePlayers,
  entryFee,
}: SessionHeroProps) => {
  const splitTitle = title?.split(" ") ?? "";

  // const playDemoGame = () => <TempleRunFrame />;
  return (
    <section className="bg-surface-dark rounded-xl pr-1 py-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none"></div>
      <div className="flex flex-row justify-between items-center mb-4 ">
        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-1.5">
            <span className="w-fit bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-white rounded-full live-pulse"></span>{" "}
              LIVE
            </span>
            <span className="text-slate-400 text-sm">
              #{splitTitle[0]}-2024-001
            </span>
          </div>
          <h2 className=" text-lg md:text-5xl font-bold text-white  ">
            {title}
          </h2>
          <p className="text-xs md:text-md text-slate-400">
            Join 1,240 players competing for glory
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
            Prize Pool
          </p>
          <p className="flex items-baseline md:text-4xl font-black text-primary glow-primary">
            {formatNaira(pricePool)}
            <span className="text-primary text-xs font-medium">↑ 1.2%</span>
          </p>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden h-70 md:h-90 mb-6 group">
        <img
          alt={slug}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          data-alt="High energy gaming illustration with futuristic lights"
          src={thumbnail}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>

        <div className="absolute right-0 top-0 flex gap-2 p-2 text-white bg-secondary/40 font-bold text-xs md:text-base">
          <p>Entry Fee:</p>
          <span>{formatNaira(entryFee)}</span>
        </div>

        <div className="absolute left-0 top-0 flex items-center gap-2 p-2 text-white bg-accent/40 font-bold text-xs md:text-base">
          <Users />
          <span>{activePlayers}</span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-background-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <p className="text-[10px] uppercase text-slate-400 font-bold">
                Entry Closes In
              </p>
              <div className="flex gap-2 text-xl font-bold text-white">
                <span>00</span>
                <span className="text-primary">:</span>
                <span>45</span>
                <span className="text-primary">:</span>
                <span>12</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button className="sm:flex-none bg-primary hover:bg-primary/90 text-background-dark font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg transition-all active:scale-95 flex items-center text-xs sm:text-base justify-center gap-2 cursor-pointer">
              <PlayCircle className="md:text-xl" />
              Enter Live Game
            </button>
            <Link to="/gameSession/Session">
              <button className="sm:flex-none bg-accent hover:bg-accent/80 text-white font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg border border-white/10 transition-all flex items-center text-xs sm:text-base justify-center gap-2 cursor-pointer">
                <Gamepad2 className="md:text-xl" />
                Play Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionHero;
