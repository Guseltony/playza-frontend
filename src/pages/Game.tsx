import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams } from "react-router";
import { games } from "@/data/games";
import { DAYS_OF_WEEK, MONTHS } from "@/constants/constants";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import { GameHero } from "@/components/gamePage/GameHero";
import { SessionsTab } from "@/components/gamePage/SessionsTab";
import { AboutGameTab } from "@/components/gamePage/AboutGameTab";
import { RulesTab } from "@/components/gamePage/RulesTab";
import { EntryConfirmationModal } from "@/components/gamePage/EntryConfirmationModal";
import { MOCK_SESSIONS } from "@/data/mockSessions";
import type { Session } from "@/types/types";

type Tab = 'sessions' | 'about' | 'rules';

const Game = () => {
  const { id: slug } = useParams();
  const [activeTab, setActiveTab] = useState<Tab>('sessions');
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const game = games.find((g) => g.slug === slug);
  
  if (!game) {
    return (
      <div className="flex-1 flex items-center justify-center text-white">
        Game not found
      </div>
    );
  }

  const pricePool = calculatePrizePool(
    game.entryFee,
    game.activePlayers,
    game.platformFeePercentage,
  );

  const date = new Date();
  const fullDate = `${MONTHS[date.getMonth()]}, ${date.getDate()} ${DAYS_OF_WEEK[date.getDay()]}, ${date.getFullYear()}`;

  const handleJoinSession = (session: Session) => {
    setSelectedSession(session);
  };

  const handleConfirmEntry = () => {
    console.log("Joined session:", selectedSession?.id);
    setSelectedSession(null);
    // Add navigation or further logic here
  };

  return (
    <div className="flex-1 min-h-screen pb-32 overflow-hidden">
      {/* Hero Header Area */}
      <GameHero 
        game={game} 
        pricePool={pricePool} 
        fullDate={fullDate} 
      />

      <div className="mx-auto container">
        {/* Animated Tabs Navigation */}
        <div className="flex items-center whitespace-nowrap overflow-x-auto mb-4 md:mb-10 scrollbar-hide scroll-smooth">
          <nav className="flex p-1.5 border border-white/10 rounded-4xl backdrop-blur-3xl shadow-2xl relative min-w-max">
            {(['sessions', 'about', 'rules'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative px-5 md:px-10 py-2.5 md:py-4 rounded-3xl tracking-widest uppercase font-black text-xs transition-all duration-500 z-10
                  ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'}
                `}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-playza-blue shadow-[0_0_24px_rgba(59,130,246,0.4)] rounded-[1.4rem]"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">
                  {tab === 'about' ? 'About Game' : tab}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dynamic Tab Content Area */}
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === 'sessions' && (
                <SessionsTab 
                  sessions={MOCK_SESSIONS} 
                  onJoin={handleJoinSession} 
                />
              )}

              {activeTab === 'about' && (
                <AboutGameTab />
              )}

              {activeTab === 'rules' && (
                <RulesTab />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Entry Fee Confirmation Flow */}
      <EntryConfirmationModal 
        session={selectedSession}
        userBalance={25000} // Mock balance, should come from store/api
        onClose={() => setSelectedSession(null)}
        onConfirm={handleConfirmEntry}
      />
    </div>
  );
};

export default Game;
