export interface Player {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  gamesPlayed: number;
}

// export interface GameLeaderboard {
//   gameId: string;
//   gameName: string;
//   gameIcon: string;
//   players: Player[];
// }

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

  category: "Trivia" | "Puzzle" | "Memory" | "Strategy" | "Reaction" | "Arcade";
  mode: "1v1" | "Tournament" | "Quick Match" | "Multiplayer";

  entryFee: number;
  platformFeePercentage: number;
  difficulty: "Easy" | "Medium" | "Hard";
  durationInSeconds: number;

  activePlayers: number;

  isActive: boolean;
  ctaLabel: string;
  badge: GameBadge;

  createdAt: string;
  updatedAt: string;
};

export type GameBadge =
  | "HOT"
  | "NEW"
  | "POPULAR"
  | "TRENDING"
  | "HIGH_STAKES"
  | null;

export type LeaderboardPlayer = {
  id: string;
  rank: number;
  avatar: string;
  username: string;
  points: number;
  prizeWon: string;
};

export interface Player {
  id: string;
  username: string;
  avatar: string;
  totalWins: number;
  totalEarnings: number;
  rank: number;
}

export type GameName =
  | "Mystic Quest"
  | "StormRider"
  | "Battle Arena X"
  | "Speed Drift Pro"
  | "Treasure Hunt Royale";

export type GameLeaderboard = Record<GameName, LeaderboardPlayer[]>;

export interface Match {
  id: string;
  gameId: string;
  playersJoined: number;
  totalCollected: number;
  platformFeeAmount: number;
  prizePool: number;
}
