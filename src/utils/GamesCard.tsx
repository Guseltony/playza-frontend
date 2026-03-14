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
  badge,
}: Game) => {
  return (
    <div className="game-card-root max-w-56 overflow-hidden">
      <Link to={`/games/${slug}`} key={id} className="block relative">
        <div className="game-card-img-wrapper">
          {badge && (badge === "NEW" || badge === "HOT") && (
            <div className={`game-card-badge bg-black/50 ${badgeStyles[badge]}`}>
              <GiFlame /> {badge}
            </div>
          )}
          
          <img
            className="game-card-img"
            src={thumbnail}
            alt={title}
            loading="lazy"
          />
          
          <div className="game-card-fee">
            ₦{entryFee.toLocaleString()}
          </div>
          
          <div className="game-card-stats">
            <FaUsers />
            <span>{activePlayers.toLocaleString()} PLAYERS</span>
          </div>
        </div>
        
        <div className="p-3.5 text-center bg-black/40">
          <h4 className="game-card-title truncate">
            {title}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default GamesCard;
