import type { Game } from "@/types/types";
import GamesCard from "@/utils/GamesCard";
import { ChevronLeft, ChevronRight, Star, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

type HomeGamesProps = {
  games: Game[];
  Icon: LucideIcon;
  title: string;
};

const HomeGames = ({ games, Icon, title }: HomeGamesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    // const card = el.querySelector("[data-card]");
    // if (!card) return;

    // const cardWidth = card.clientWidth + 16; // include gap
    // const cardsToMove = window.innerWidth < 768 ? 2 : 4;

    // const scrollAmount = cardWidth * cardsToMove;

    const scrollAmount = el.clientWidth;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-white flex gap-2 items-center">
          <Icon className="text-chart-4" /> {title}
        </h2>
        <div className="flex gap-2 items-center justify-center">
          <Link
            to="/games"
            className="py-2 px-2.5 rounded-lg bg-border/40 hover:bg-primary transition"
          >
            All
          </Link>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-lg transition ${canScrollLeft ? "bg-border hover:bg-primary text-white" : "bg-border/40 text-gray-500 cursor-not-allowed"}`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-lg transition ${canScrollRight ? "bg-border hover:bg-primary text-white" : "bg-border/40 text-gray-500 cursor-not-allowed"}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {games.map((game) => (
            <div data-card className="min-w-62 shrink-0 snap-start">
              <GamesCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGames;
