import type { Game } from "@/types/types";
import GamesCard from "@/utils/GamesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const HomeGames = ({ games, title }: { games: Game[]; title: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 5;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="mb-12">
      <div className="flex items-end justify-between mb-6 px-1">
        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white/90">
            {title}
          </h2>
          <div className="h-1 w-12 bg-primary mt-1 rounded-full"></div>
        </div>
        
        <div className="flex gap-3 items-center">
          <Link to="/games" className="show-all-btn">
            View All
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="section-header-btn"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="section-header-btn"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth snap-x snap-mandatory py-2"
        >
          {games.map((game) => (
            <div
              key={game.id}
              className="shrink-0 snap-start"
            >
              <GamesCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGames;
