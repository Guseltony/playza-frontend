import { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play,
  TrendingUp,
  Swords
} from "lucide-react";
import { Link } from "react-router";
import { games } from "@/data/games";

const tournamentGame = games.find((g) => g.mode === "Tournament") || games[1];
const newReleaseGame = games.find((g) => g.badge === "NEW" || g.category === "Arcade") || games[1];

const slides = [
  {
    id: 1,
    badge: "Welcome to Playza",
    title: "Play Skill-Based Games",
    subtitle: "Compete With Players Win Rewards",
    description: "Join competitive arcade games, climb the leaderboard, and earn rewards based on your performance. Challenge other players and prove your skills.",
    primaryAction: { label: "Play Games", href: "/games" },
    secondaryAction: { label: "View Leaderboard", href: "/leaderboard" },
    visual: null,
    backgroundImage: null
  },
  {
    id: 2,
    badge: "Live Tournament",
    title: tournamentGame.title,
    subtitle: null,
    description: `Compete against other players in the upcoming ${tournamentGame.title} tournament. Top players take home the prize. Duration: ${Math.floor(tournamentGame.durationInSeconds / 60)} mins.`,
    stats: [
      { label: "Prize Pool", value: "₦50,000" },
      { label: "Entry Fee", value: `₦${tournamentGame.entryFee.toLocaleString()}` }
    ],
    primaryAction: { label: "Join Tournament", href: `/tournaments/${tournamentGame.slug}` },
    visual: null,
    backgroundImage: tournamentGame.thumbnail
  },
  {
    id: 3,
    badge: "New Release",
    title: newReleaseGame.title,
    subtitle: null,
    description: `${newReleaseGame.title} is now available on Playza. Jump into the game, set a high score, and climb the leaderboard.`,
    primaryAction: { label: "Play Now", href: `/games/${newReleaseGame.slug}` },
    visual: null,
    backgroundImage: newReleaseGame.thumbnail
  },
  {
    id: 4,
    badge: "Earn Rewards",
    title: "Invite Friends.",
    subtitle: "Earn Bonuses.",
    description: "Share your referral link and earn bonuses when your friends join and start playing games on Playza.",
    primaryAction: { label: "Invite Friends", href: "/referral" },
    visual: null,
    backgroundImage: null
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideCount = slides.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slideCount - 1 ? 0 : prevSlide + 1
        );
      }, 7000); // 7 seconds delay
    }
    return () => {
      resetTimeout();
    };
  }, [currentSlide, isHovered, slideCount]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideCount - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideCount - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section 
      className="relative w-full rounded-3xl overflow-hidden glass border-slate-900/10 dark:border-white/10 group flex flex-col min-h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Background with stars animation */}
      <div className="stars-bg"></div>
      
      {/* Overlay gradient (Only for slides WITHOUT background image) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#020617]/40 via-[#020617]/80 to-[#020617] z-0"></div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex flex-col lg:flex-row items-center justify-center ${
              index === currentSlide ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
            }`}
            // aria-hidden={index !== currentSlide ? "true" : "false"}
          >
            {/* Slide Background Image */}
            {slide.backgroundImage && (
              <>
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-linear transform scale-105"
                  style={{ 
                    backgroundImage: `url(${slide.backgroundImage})`,
                    transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-0"></div>
                {/* Specific glow based on badge */}
                {slide.badge === "Live Tournament" && <div className="absolute inset-0 bg-yellow-500/10 z-0"></div>}
                {slide.badge === "New Release" && <div className="absolute inset-0 bg-pink-500/10 z-0"></div>}
              </>
            )}

            {/* Content Column (Centered) */}
            <div className={`relative z-20 w-full flex flex-col flex-1 space-y-2 md:space-y-4 p-2 ${slide.visual ? 'lg:w-1/2 justify-center' : 'items-center text-center justify-center'}`}>
              
              <div className="inline-flex w-fit items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/30">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground dark:text-primary">
                  {slide.badge}
                </span>
                {slide.id === 1 && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
              </div>
              
              <div className={`space-y-3 ${!slide.visual ? 'text-center' : ''} max-w-3xl`}>
                <h1 className="text-3xl md:text-4xl uppercase font-black font-display tracking-tight text-white leading-[1.15] drop-shadow-2xl">
                  {slide.title}
                  <span className="gradient-text drop-shadow-amber-600">{slide.subtitle && ` ${slide.subtitle}`}</span>
                </h1>
                <p className={`text-sm text-slate-200/90 max-w-2xl leading-relaxed pt-1 drop-shadow-lg font-medium ${!slide.visual ? 'mx-auto' : ''}`}>
                  {slide.description}
                </p>
              </div>
              
              {/* Optional Stats for slides like Tournament */}
              {slide.stats && (
                <div className={`flex items-center gap-8 py-2 ${!slide.visual ? 'justify-center' : ''}`}>
                  {slide.stats.map((stat, i) => (
                    <div key={i} className={!slide.visual ? 'text-center' : ''}>
                      <div className="text-xs text-slate-300 uppercase font-bold tracking-widest mb-1 drop-shadow-sm">
                        {stat.label}
                      </div>
                      <div className="text-xl md:text-2xl font-display font-black text-white tabular-nums drop-shadow-md">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className={`flex items-center gap-2 md:gap-4 pt-2 ${!slide.visual ? 'justify-center' : ''}`}>
                <Link
                  to={slide.primaryAction.href}
                  className={`px-6 py-3 ${slide.backgroundImage ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'} font-bold rounded-xl transition-all duration-300 flex items-center gap-2 glow-primary shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1`}
                >
                  {slide.id === 1 ? <Play size={18} fill="currentColor" /> : null}
                  {slide.id === 2 ? <Swords size={18} /> : null}
                  {slide.primaryAction.label}
                </Link>
                
                {slide.secondaryAction && (
                  <Link
                    to={slide.secondaryAction.href}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 flex items-center gap-2 hover:-translate-y-1"
                  >
                    <TrendingUp size={18} className="text-primary" />
                    {slide.secondaryAction.label}
                  </Link>
                )}
              </div>
              
            </div>

            {/* Right Visual Column (if any) */}
            {slide.visual && (
              <div className="relative z-10 w-full lg:w-1/2 flex-1 min-h-62 sm:min-h-75 lg:min-h-0 lg:h-full flex items-center justify-center py-4 lg:py-0 mt-6 lg:mt-0">
                {slide.visual}
              </div>
            )}
            
            
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2.5 bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      
      {/* Progress Bar indicator (Optional, for visual timing feedback) */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20">
        <div 
          className="h-full bg-linear-to-r from-primary to-cyan-400 ease-linear"
          style={{ 
            width: isHovered ? '100%' : '100%',
            transition: isHovered ? 'none' : 'width 7s linear',
            animation: isHovered ? 'none' : 'progress 7s infinite linear'
          }}
        ></div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
