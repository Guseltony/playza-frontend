import { useState, useEffect, useRef } from "react";
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  TrendingUp,
  Swords
} from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    badge: "Welcome to Playza",
    title: "Play Skill-Based Games",
    subtitle: "Compete With Players Win Rewards",
    description: "Join competitive arcade games, climb the leaderboard, and earn rewards based on your performance. Challenge other players and prove your skills.",
    primaryAction: { label: "Play Games", href: "/games" },
    secondaryAction: { label: "View Leaderboard", href: "/leaderboard" },
    visual: (
      <div className="relative w-full h-full min-h-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative z-10 glass-card p-6 rounded-2xl border border-primary/30 flex flex-col items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <Gamepad2 size={64} className="text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Live Matchmaking</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    badge: "Live Tournament",
    title: "Temple Run",
    subtitle: "Tournament",
    description: "Compete against other players in the upcoming Temple Run tournament. Top players take home the prize. Start Time: Saturday 7PM.",
    stats: [
      { label: "Prize Pool", value: "₦50,000" },
      { label: "Entry Fee", value: "₦200" }
    ],
    primaryAction: { label: "Join Tournament", href: "/tournaments" },
    visual: (
      <div className="relative w-full h-full min-h-50 flex justify-center items-center">
        <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
        <div className="relative z-10 glass-card p-8 rounded-2xl neon-gold flex flex-col items-center gap-2 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
           <Trophy size={72} className="text-yellow-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
           <div className="text-2xl font-display font-black text-white mt-2">₦50,000</div>
           <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Prize Pool</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    badge: "New Release",
    title: "New Game Now Live",
    subtitle: "Candy Dash",
    description: "Candy Dash is now available on Playza. Jump into the game, beat the high score, and climb the leaderboard.",
    primaryAction: { label: "Play Now", href: "/games/candy-dash" },
    visual: (
      <div className="relative w-full h-full min-h-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>
        <div className="relative z-10 glass-card p-6 rounded-2xl border border-pink-500/30 w-48 h-48 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500">
           <div className="text-pink-400 font-display text-4xl font-black mb-2">9,999</div>
           <div className="text-xs text-slate-300 font-bold uppercase tracking-widest text-center">High Score <br/> To Beat</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    badge: "Earn Rewards",
    title: "Invite Friends.",
    subtitle: "Earn Bonuses.",
    description: "Share your referral link and earn bonuses when your friends join and start playing games on Playza.",
    primaryAction: { label: "Invite Friends", href: "/referral" },
    visual: (
      <div className="relative w-full h-full min-h-50 flex items-center justify-center">
         <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
         <div className="relative z-10 glass-card p-6 rounded-2xl neon-border flex items-center justify-center group">
            <Users size={64} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
         </div>
      </div>
    )
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
      className="relative w-full rounded-3xl overflow-hidden glass border-slate-900/10 dark:border-white/10 group min-h-112.5 lg:min-h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Background with stars animation */}
      <div className="stars-bg"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent z-0"></div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full p-6 md:p-10 lg:p-12 transition-opacity duration-700 ease-in-out flex flex-col-reverse lg:flex-row items-center gap-8 ${
              index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            // aria-hidden={index !== currentSlide ? "true" : "false"}
          >
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full space-y-4 md:space-y-6">
              
              <div className="inline-flex w-fit items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/30">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground dark:text-primary">
                  {slide.badge}
                </span>
                {slide.id === 1 && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
                  {slide.title}
                  <br className="hidden md:block"/>
                  <span className="gradient-text">{slide.subtitle && ` ${slide.subtitle}`}</span>
                </h1>
                <p className="text-sm md:text-base text-slate-300 max-w-lg leading-relaxed pt-2">
                  {slide.description}
                </p>
              </div>
              
              {/* Optional Stats for slides like Tournament */}
              {slide.stats && (
                <div className="flex items-center gap-8 py-2">
                  {slide.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                        {stat.label}
                      </div>
                      <div className="text-lg md:text-2xl font-display font-bold text-white tabular-nums">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to={slide.primaryAction.href}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-300 flex items-center gap-2 glow-primary shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
                >
                  {slide.id === 1 ? <Play size={18} fill="currentColor" /> : null}
                  {slide.id === 2 ? <Swords size={18} /> : null}
                  {slide.primaryAction.label}
                </Link>
                
                {slide.secondaryAction && (
                  <Link
                    to={slide.secondaryAction.href}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:-translate-y-1"
                  >
                    <TrendingUp size={18} className="text-primary" />
                    {slide.secondaryAction.label}
                  </Link>
                )}
              </div>
              
            </div>

            {/* Right Visual Column */}
            <div className="w-full lg:w-1/2 h-50 md:h-75 lg:h-full flex items-center justify-center">
              {slide.visual}
            </div>
            
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
