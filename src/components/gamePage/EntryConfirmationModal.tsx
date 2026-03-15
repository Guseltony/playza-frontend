import type { Session } from "@/types/types";
import { X, Wallet, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EntryConfirmationModalProps {
  session: Session | null;
  onClose: () => void;
  onConfirm: () => void;
  userBalance: number;
}

export const EntryConfirmationModal = ({ session, onClose, onConfirm, userBalance }: EntryConfirmationModalProps) => {
  if (!session) return null;

  const remainingBalance = userBalance - session.entryFee;
  const canAfford = remainingBalance >= 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-playza-dark/80 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
          className="relative w-full max-w-md bg-playza-dark/60 border border-white/10 rounded-4xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-3xl overflow-hidden"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-playza-blue/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-8 relative">
            <div className="inline-flex p-5 bg-playza-blue/20 rounded-[2rem] shadow-lg shadow-playza-blue/10">
              <Wallet className="w-10 h-10 text-playza-blue" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white tracking-tight">Confirm Entry</h2>
              <p className="text-slate-400 font-medium">
                Join <span className="text-white font-bold">{session.title}</span> and compete for the prize.
              </p>
            </div>

            <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/5 space-y-5">
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Entry Fee</span>
                <span className="text-2xl font-black text-white">₦{session.entryFee}</span>
              </div>
              <div className="h-px bg-white/5 mx-2" />
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Your Balance</span>
                <span className="text-2xl font-black text-playza-green">₦{userBalance.toLocaleString()}</span>
              </div>
              <div className="pt-2 px-2 flex justify-between items-center border-t border-white/10">
                <span className="text-playza-blue font-black uppercase tracking-widest text-[10px]">Remaining</span>
                <span className={`text-2xl font-black ${canAfford ? 'text-white' : 'text-red-500'}`}>
                  ₦{remainingBalance.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-left p-5 bg-amber-500/5 border border-amber-500/10 rounded-[1.5rem]">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-500/80 font-bold leading-relaxed">
                Entry fees are non-refundable once the session starts. Please ensure you have a stable connection.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={onConfirm}
                disabled={!canAfford}
                className={`w-full py-5 rounded-3xl font-black text-white uppercase tracking-widest transition-all shadow-xl ${
                  canAfford 
                    ? 'bg-playza-blue hover:bg-playza-blue/90 shadow-playza-blue/20' 
                    : 'bg-red-500/50 cursor-not-allowed text-white/50'
                }`}
              >
                {canAfford ? 'Confirm & Join' : 'Insufficient Balance'}
              </button>
              <button 
                onClick={onClose}
                className="w-full py-5 bg-transparent hover:bg-white/5 text-slate-500 hover:text-white font-black rounded-2xl transition-all uppercase tracking-widest text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
