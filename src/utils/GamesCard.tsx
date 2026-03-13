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
    <div className=" max-w-58 border-2 border-red-800 min-h-44 relative glass overflow-hidden group hover:border-primary transition-all">
      {/* <div className="w-full h-full absolute inset-0 bg-linear-to-t z-12 from-[#091f00] to-transparent"></div> */}
      <Link to={`/games/${slug}`} key={id} className="z-15">
        <div className="h-44 w-full relative">
          <span className={`absolute top-2 left-2 z-15`}>
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
          <div className="bg-secondary/30 absolute top-2 right-2 flex gap-1 z-15 backdrop-blur-md">
            <span className="px-2 py-0.5 rounded text-sm font-extrabold ">
              ₦{entryFee.toLocaleString()}
            </span>
          </div>
          <div className="absolute w-16 h-6 bg-black top-2 right-2"></div>
          <div className="bg-muted p-1 rounded-full flex gap-2 items-center absolute bottom-2 left-2 z-15">
            <FaUsers />
            <p className="text-xs text-primary font-bold">
              {activePlayers} players
            </p>
          </div>
        </div>
      </Link>
      <div className="p-2 flex flex-col overflow-x-hidden z-15">
        <h4 className="font-bold text-xs uppercase text-center z-15">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default GamesCard;
