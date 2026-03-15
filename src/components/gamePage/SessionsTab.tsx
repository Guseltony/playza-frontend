import type { Session } from "@/types/types";
import { SessionCard } from "./SessionCard";
import { motion } from "motion/react";

interface SessionsTabProps {
  sessions: Session[];
  onJoin: (session: Session) => void;
}

export const SessionsTab = ({ sessions, onJoin }: SessionsTabProps) => {
  return (
    <div className="space-y-4 md:space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight">Today's Game Sessions</h2>
          <p className="text-slate-500 text-sm font-medium">Join a live session now to start earning rewards.</p>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {sessions.map((session) => (
          <SessionCard 
            key={session.id} 
            session={session} 
            onJoin={onJoin} 
          />
        ))}
      </motion.div>
    </div>
  );
};
