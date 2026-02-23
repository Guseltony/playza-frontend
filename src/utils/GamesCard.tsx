import { badgeStyles } from "@/constants/constants";
import type { Game } from "@/types/types";
import { FaUsers } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { Link } from "react-router";

const GamesCard = ({
  id,
  thumbnail,
  slug,
  entryFee,
  title,
  activePlayers,
  ctaLabel,
  badge,
}: Game) => {
  return (
    <Link to={`/games/${slug}`} key={id}>
      <div className="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all">
        <div className="h-32 relative">
          <span className={`absolute top-2 left-2 z-10`}>
            {(badge === "NEW" || badge === "HOT") && (
              <GiFlame
                className={` text-xl ${(badge === "NEW" || badge === "HOT") && badgeStyles[badge]}`}
              />
            )}
          </span>
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            data-alt="Futuristic esports arena with neon lights"
            src={thumbnail}
            alt={slug}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-muted to-transparent"></div>
          <div className="absolute top-2 right-2 flex gap-1 bg-muted">
            <span className="bg-primary px-2 py-0.5 rounded text-sm font-bold text-white">
              ₦{entryFee.toLocaleString()}
            </span>
          </div>
          <div className="bg-muted p-1 rounded-full flex gap-2 items-center absolute bottom-2 left-2">
            <FaUsers />
            <p className="text-xs text-chart-3 font-bold">
              {activePlayers} players
            </p>
          </div>
        </div>
        <div className="p-2 flex flex-col overflow-x-hidden">
          <h4 className="font-bold text-xs uppercase text-center text-white">
            {title}
          </h4>
          <Link to={`/games/${slug}`}>
            <button className="bg-primary/20 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white cursor-pointer">
              {ctaLabel}
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;
