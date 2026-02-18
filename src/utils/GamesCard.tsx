import type { Game } from "@/types/types";

const GamesCard = ({
  id,
  thumbnail,
  slug,
  entryFee,
  title,
  activePlayers,
  ctaLabel,
}: Game) => {
  return (
    <div
      key={id}
      className="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all w-58 h-46 md:w-72 md:h-52"
    >
      <div className="h-32 relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          data-alt="Futuristic esports arena with neon lights"
          src={thumbnail}
          alt={slug}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
        <div className="absolute bottom-2 left-2 flex gap-1">
          <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white">
            ₦{entryFee}
          </span>
        </div>
      </div>
      <div className="p-2 md:p-4 flex flex-row justify-between items-end">
        <div>
          <h4 className="font-bold text-xs md:text-base text-white">{title}</h4>
          <p className="text-xs text-slate-400">
            {activePlayers} players active
          </p>
        </div>
        <button className="bg-slate-800 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white">
          {ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default GamesCard;
