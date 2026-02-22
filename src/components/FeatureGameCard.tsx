import React from "react";
import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";
import type { Game } from "@/types/types";

interface Props extends Game {
  pricePool: number;
  subTitle: string;
}

const FeatureGameCard = ({
  thumbnail,
  title,
  pricePool,
  ctaLabel,
  subTitle,
}: Props) => {
  return (
    <div>
      <img
        alt="Tournament Banner"
        className="absolute inset-0 w-full h-full object-cover"
        src={thumbnail}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
      <div className="relative h-full p-4 md:p-8 flex flex-col justify-center z-5">
        <div className="flex flex-col  space-y-1 my-4">
          <h1 className="text-sm md:text-2xl lg:text-5xl tracking-tight uppercase text-primary font-bold">
            {title}
          </h1>
          <span className="text-xs font-bold text-secondary">{subTitle}</span>
        </div>
        <div className="flex items-center gap-12">
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
              Current Game Pool
            </div>
            <div className="flex items-center text-base md:text-xl lg:text-3xl font-display font-bold text-accent">
              {pricePool.toLocaleString()}
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
        <Button className="bg-secondary/50 px-4 py-2 w-fit mt-8">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};

export default FeatureGameCard;
