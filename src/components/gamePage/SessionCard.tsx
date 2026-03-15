import type { Session } from "@/types/types";
import { Play, Trophy, Users, Clock, CreditCard } from "lucide-react";
import { motion } from "motion/react";

interface SessionCardProps {
  session: Session;
  onJoin: (session: Session) => void;
}

export const SessionCard = ({ session, onJoin }: SessionCardProps) => {
  const isLive = session.status === 'live';
  const isUpcoming = session.status === 'upcoming';
  const isStartingSoon = session.status === 'starting soon';
  const progress = (session.playersJoined / session.maxPlayers) * 100;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-playza-blue/10 blur-3xl rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-[#0a0f1e]/80 backdrop-blur-3xl rounded-xl p-2 md:p-8 border border-white/5 space-y-2 md:space-y-8 shadow-2xl overflow-hidden">
        {/* Header: Title & Badge */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white tracking-tight">
              {session.title}
            </h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
              <Clock className="w-4 h-4 opacity-50" />
              {session.startTime} - {session.endTime}
            </div>
          </div>
          
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border backdrop-blur-md ${
            isLive 
              ? 'bg-playza-green/10 text-playza-green border-playza-green/30' 
              : isStartingSoon
                ? 'bg-playza-blue/10 text-playza-blue border-playza-blue/30'
                : isUpcoming
                  ? 'bg-white/10 text-white/50 border-white/10'
                  : 'bg-playza-red/10 text-playza-red border-playza-red/30'
          }`}>
            {session.status.toUpperCase()}
          </div>
        </div>

        {/* Stats Row: Entry Fee & Prize Pool */}
        <div className="flex items-center gap-16 border-t border-white/5 pt-4 md:pt-8">
          <div className="space-y-2">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 opacity-60" />
              Entry Fee
            </p>
            <p className="text-white font-black text-2xl tracking-tighter">₦{session.entryFee}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-playza-blue/60 fill-playza-blue/10" />
              Prize Pool
            </p>
            <p className="text-playza-green font-black text-2xl tracking-tighter">₦{session.prizePool}</p>
          </div>
        </div>

        {/* Progress Bar Area */}
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Users className="w-3 h-3" />
              Players Joined
            </span>
            <span className="text-white text-base opacity-100">{session.playersJoined}</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-playza-blue rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onJoin(session)}
          disabled={!isLive && !isStartingSoon}
          className={`w-full py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 ${
            isLive || isStartingSoon
              ? 'bg-playza-blue text-white hover:bg-playza-blue/90 shadow-xl shadow-playza-blue/20' 
              : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
          }`}
        >
          <Play className={`w-4 h-4 ${isLive || isStartingSoon ? 'fill-current' : 'opacity-20'}`} />
          {isLive ? 'Join Session' : 'Join Session'}
        </button>
      </div>
    </motion.div>
  );
};
