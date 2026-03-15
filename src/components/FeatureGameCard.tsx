import React from "react";
import { Button } from "./ui/button";
import { TrendingUp, Clock, Play } from "lucide-react";
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
    <div className="relative w-full h-full group overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <img
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        src={thumbnail}
      />
      
      {/* Multi-layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
      
      {/* Glass Panel Container */}
      <div className="feature-card-container">
        <div className="feature-card-content">
          {/* Badge */}
          <div className="feature-card-badge">
            <span className="live-dot"></span>
            Featured Tournament
          </div>

          {/* Title Area */}
          <div>
            <h1 className="feature-card-title">{title}</h1>
            <p className="feature-card-subtitle">{subTitle}</p>
          </div>

          {/* Stats Bar */}
          <div className="feature-card-stats">
            <div className="stat-item">
              <span className="stat-label">Total Prize Pool</span>
              <div className="stat-value prize-glow">
                ${pricePool.toLocaleString()}
                <TrendingUp className="text-secondary" size={24} />
              </div>
            </div>

            <div className="stat-item border-l border-white/10 pl-10 md:pl-16">
              <span className="stat-label">Ends In</span>
              <div className="stat-value">
                <Clock className="text-primary" size={20} />
                00:42:15
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="feature-card-cta">
            <Play className="mr-2 fill-current" size={16} />
            {ctaLabel}
          </Button>
        </div>
      </div>

      {/* Edge Light Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default FeatureGameCard;
