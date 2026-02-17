export interface Player {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  gamesPlayed: number;
}

export interface GameLeaderboard {
  gameId: string;
  gameName: string;
  gameIcon: string;
  players: Player[];
}

export interface Transaction {
  id: number;
  type: "deposit" | "withdrawal" | "game";
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending";
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
  flag: string;
}

export interface GameCardProps {
  title: string;
  image: string;
  isTopGame: boolean;
  editMode?: boolean;
  onUpdate?: (updates: {
    title?: string;
    image?: string;
    isTopGame?: boolean;
  }) => void;
  onRemove?: () => void;
  onPlayGame?: (mode: "demo" | "live") => void;
}

export type Game = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;

  category: "Trivia" | "Puzzle" | "Memory" | "Strategy" | "Reaction";
  mode: "1v1" | "Tournament" | "Quick Match";

  entryFee: number;
  difficulty: "Easy" | "Medium" | "Hard";
  durationInSeconds: number;

  isActive: boolean;
};

