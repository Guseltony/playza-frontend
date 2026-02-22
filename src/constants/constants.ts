import type { Currency, GameLeaderboard, Transaction } from "@/types/types";
import {
  Trophy,
  Zap,
  Shield,
  CheckCircle,
  Brain,
  Clock,
  GraduationCap,
  Puzzle,
  // ArrowRight,
  // Star,
  TrendingUp,
  Smartphone,
  Rocket,
  Target,
  Users,

  // refactory
  ChartBarIncreasing,
  Gamepad2,
  Gift,
  History,
  Medal,
  Settings,
  UserPlus,
  Wallet,
  Home,
} from "lucide-react";

export const navItems = [
  { icon: Home, label: "PlayZa", path: "/" , mobile: true},
  { icon: Gamepad2, label: "Games", path: "/games" , mobile: true},
  { icon: Medal, label: "Tournaments", path: "/tournaments" },
  { icon: ChartBarIncreasing, label: "Leaderboard", path: "/leaderboard" , mobile: true},
  { icon: Gift, label: "Bonus", path: "/bonus" },
  { icon: UserPlus, label: "Referral", path: "/referral" },
  { icon: Wallet, label: "Wallet", path: "/wallet" , mobile: true},
  { icon: History, label: "History", path: "/history" },
  { icon: Settings, label: "Settings", path: "/settings", mobile: true },
];

export const winners = [
  {
    id: 1,
    username: "ProGamerX",
    game: "Speed Math Clash",
    amountWon: 25000,
    wonAt: "2026-02-17T09:15:00Z",
  },
  {
    id: 2,
    username: "NaijaSharp",
    game: "Quick Trivia Battle",
    amountWon: 18000,
    wonAt: "2026-02-17T08:40:00Z",
  },
  {
    id: 3,
    username: "BrainBoss",
    game: "Word Arena",
    amountWon: 32000,
    wonAt: "2026-02-17T07:55:00Z",
  },
  {
    id: 4,
    username: "FastFinger",
    game: "Reaction Rush",
    amountWon: 12000,
    wonAt: "2026-02-17T07:10:00Z",
  },
  {
    id: 5,
    username: "ClutchKing",
    game: "Sudden Death Quiz",
    amountWon: 45000,
    wonAt: "2026-02-16T21:30:00Z",
  },
  {
    id: 6,
    username: "AcePlayer",
    game: "Memory Grid",
    amountWon: 15000,
    wonAt: "2026-02-16T20:45:00Z",
  },
  {
    id: 7,
    username: "VictoryVibes",
    game: "Battle IQ",
    amountWon: 28000,
    wonAt: "2026-02-16T19:20:00Z",
  },
  {
    id: 8,
    username: "SharpMind",
    game: "Rapid Fire Trivia",
    amountWon: 17000,
    wonAt: "2026-02-16T18:05:00Z",
  },
  {
    id: 9,
    username: "GameLord",
    game: "Strategy Showdown",
    amountWon: 52000,
    wonAt: "2026-02-16T16:50:00Z",
  },
  {
    id: 10,
    username: "EliteSniper",
    game: "Precision Play",
    amountWon: 21000,
    wonAt: "2026-02-16T15:30:00Z",
  },
  {
    id: 11,
    username: "MindBlazer",
    game: "Ultimate Quiz Arena",
    amountWon: 39000,
    wonAt: "2026-02-16T14:10:00Z",
  },
  {
    id: 12,
    username: "SwiftStrike",
    game: "Lightning Round",
    amountWon: 14000,
    wonAt: "2026-02-16T12:55:00Z",
  },
  {
    id: 13,
    username: "ArenaKing",
    game: "Champions Gauntlet",
    amountWon: 60000,
    wonAt: "2026-02-16T11:40:00Z",
  },
  {
    id: 14,
    username: "QuizTitan",
    game: "Knowledge Knockout",
    amountWon: 26000,
    wonAt: "2026-02-16T10:25:00Z",
  },
  {
    id: 15,
    username: "SkillMaster",
    game: "Logic Duel",
    amountWon: 23000,
    wonAt: "2026-02-16T09:05:00Z",
  },
];

export const badgeStyles = {
  HOT: " text-red-600",
  NEW: "text-purple-400",
};


export const steps = [
  {
    number: "01",
    title: "Join",
    description: "Sign up in seconds and get ZA Gold to start",
    icon: CheckCircle,
  },
  {
    number: "02",
    title: "Play",
    description: "Choose from multiple skill-based games",
    icon: Zap,
  },
  {
    number: "03",
    title: "Win",
    description: "Compete and earn real rewards",
    icon: Trophy,
  },
];

export const gameModes = [
  {
    title: "Trivia Challenge",
    description: "Test your knowledge across multiple categories",
    icon: Brain,
    color: "from-purple-600 to-purple-700",
    glowColor: "shadow-purple-500/20",
  },
  {
    title: "Speed Games",
    description: "Fast-paced action that tests your reflexes",
    icon: Clock,
    color: "from-blue-600 to-blue-700",
    glowColor: "shadow-blue-500/20",
  },
  {
    title: "Education Quest",
    description: "Learn while you earn with educational games",
    icon: GraduationCap,
    color: "from-green-600 to-green-700",
    glowColor: "shadow-green-500/20",
  },
  {
    title: "Puzzle Master",
    description: "Solve complex puzzles and win big",
    icon: Puzzle,
    color: "from-orange-600 to-orange-700",
    glowColor: "shadow-orange-500/20",
  },
];

export const leaderboardTop = [
  { rank: 1, name: "Alex Thunder", points: 12450, avatar: "AT" },
  { rank: 2, name: "Sarah Chen", points: 11820, avatar: "SC" },
  { rank: 3, name: "Marcus Rey", points: 10990, avatar: "MR" },
];

export const roadmapItems = [
  {
    icon: Rocket,
    quarter: "Q1 2026",
    title: "Platform Launch",
    description:
      "Official release with 4 core games and ZA Gold rewards system",
    status: "completed",
  },
  {
    icon: Smartphone,
    quarter: "Q2 2026",
    title: "Mobile App Launch",
    description: "iOS and Android native apps with cross-platform progression",
    status: "in-progress",
  },
  {
    icon: Target,
    quarter: "Q3 2026",
    title: "Tournament System",
    description:
      "Weekly tournaments with massive prize pools and championship leagues",
    status: "upcoming",
  },
  {
    icon: Users,
    quarter: "Q4 2026",
    title: "Global Expansion",
    description:
      "Multi-language support and regional competitions across Africa",
    status: "upcoming",
  },
];

export const trustIndicators = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level encryption protects your data",
  },
  {
    icon: CheckCircle,
    title: "Fair Play",
    description: "Skill-based matchmaking ensures fairness",
  },
  {
    icon: TrendingUp,
    title: "Transparent",
    description: "Clear rules and instant reward payouts",
  },
];

export const gameLeaderboards: GameLeaderboard[] = [
  {
    gameId: "brain-blitz",
    gameName: "Brain Blitz",
    gameIcon: "🧠",
    players: [
      {
        rank: 1,
        name: "Alex Thunder",
        score: 12450,
        avatar: "AT",
        gamesPlayed: 48,
      },
      {
        rank: 2,
        name: "Sarah Chen",
        score: 11820,
        avatar: "SC",
        gamesPlayed: 45,
      },
      {
        rank: 3,
        name: "Marcus Rey",
        score: 10990,
        avatar: "MR",
        gamesPlayed: 42,
      },
      {
        rank: 4,
        name: "Elena Frost",
        score: 9875,
        avatar: "EF",
        gamesPlayed: 38,
      },
      {
        rank: 5,
        name: "David Kim",
        score: 9320,
        avatar: "DK",
        gamesPlayed: 41,
      },
      {
        rank: 6,
        name: "Nina Patel",
        score: 8750,
        avatar: "NP",
        gamesPlayed: 35,
      },
      {
        rank: 7,
        name: "Carlos Santos",
        score: 8240,
        avatar: "CS",
        gamesPlayed: 33,
      },
    ],
  },
  {
    gameId: "fast-fingers",
    gameName: "Fast Fingers",
    gameIcon: "⚡",
    players: [
      {
        rank: 1,
        name: "Nina Patel",
        score: 15200,
        avatar: "NP",
        gamesPlayed: 52,
      },
      {
        rank: 2,
        name: "David Kim",
        score: 14850,
        avatar: "DK",
        gamesPlayed: 50,
      },
      {
        rank: 3,
        name: "Alex Thunder",
        score: 13990,
        avatar: "AT",
        gamesPlayed: 47,
      },
      {
        rank: 4,
        name: "Yuki Tanaka",
        score: 12320,
        avatar: "YT",
        gamesPlayed: 44,
      },
      {
        rank: 5,
        name: "Sarah Chen",
        score: 11900,
        avatar: "SC",
        gamesPlayed: 41,
      },
      {
        rank: 6,
        name: "Marcus Rey",
        score: 10750,
        avatar: "MR",
        gamesPlayed: 38,
      },
      {
        rank: 7,
        name: "Olivia Brown",
        score: 10200,
        avatar: "OB",
        gamesPlayed: 35,
      },
    ],
  },
  {
    gameId: "one-click-precision",
    gameName: "One-Click Precision",
    gameIcon: "🎯",
    players: [
      {
        rank: 1,
        name: "Sarah Chen",
        score: 16340,
        avatar: "SC",
        gamesPlayed: 54,
      },
      {
        rank: 2,
        name: "Yuki Tanaka",
        score: 15780,
        avatar: "YT",
        gamesPlayed: 51,
      },
      {
        rank: 3,
        name: "Olivia Brown",
        score: 14920,
        avatar: "OB",
        gamesPlayed: 48,
      },
      {
        rank: 4,
        name: "Alex Thunder",
        score: 13560,
        avatar: "AT",
        gamesPlayed: 45,
      },
      {
        rank: 5,
        name: "Elena Frost",
        score: 12890,
        avatar: "EF",
        gamesPlayed: 42,
      },
      {
        rank: 6,
        name: "Marcus Rey",
        score: 11720,
        avatar: "MR",
        gamesPlayed: 39,
      },
      {
        rank: 7,
        name: "Carlos Santos",
        score: 10850,
        avatar: "CS",
        gamesPlayed: 36,
      },
    ],
  },
  {
    gameId: "speedtap-arena",
    gameName: "SpeedTap Arena",
    gameIcon: "🔥",
    players: [
      {
        rank: 1,
        name: "Elena Frost",
        score: 19850,
        avatar: "EF",
        gamesPlayed: 65,
      },
      {
        rank: 2,
        name: "Alex Thunder",
        score: 18920,
        avatar: "AT",
        gamesPlayed: 62,
      },
      {
        rank: 3,
        name: "Nina Patel",
        score: 17340,
        avatar: "NP",
        gamesPlayed: 59,
      },
      {
        rank: 4,
        name: "David Kim",
        score: 16450,
        avatar: "DK",
        gamesPlayed: 56,
      },
      {
        rank: 5,
        name: "Sarah Chen",
        score: 15780,
        avatar: "SC",
        gamesPlayed: 53,
      },
      {
        rank: 6,
        name: "Yuki Tanaka",
        score: 14920,
        avatar: "YT",
        gamesPlayed: 50,
      },
      {
        rank: 7,
        name: "Marcus Rey",
        score: 13650,
        avatar: "MR",
        gamesPlayed: 47,
      },
    ],
  },
];

export const getAvatarColor = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-br from-yellow-500 to-yellow-600";
  if (rank === 2) return "bg-gradient-to-br from-gray-400 to-gray-500";
  if (rank === 3) return "bg-gradient-to-br from-amber-600 to-amber-700";
  return "bg-gradient-to-br from-blue-500 to-blue-600";
};

export const getCardStyle = (rank: number) => {
  if (rank === 1)
    return "bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border-yellow-600/50";
  if (rank === 2)
    return "bg-gradient-to-r from-gray-800/40 to-gray-700/40 border-gray-500/50";
  if (rank === 3)
    return "bg-gradient-to-r from-amber-900/40 to-amber-800/40 border-amber-600/50";
  return "bg-gradient-to-r from-gray-800/60 to-gray-900/60 border-gray-700/50";
};

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "deposit",
    amount: 1000,
    description: "Bank Transfer",
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "game",
    amount: -50,
    description: "One-Tap Jump Entry",
    date: "3 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "game",
    amount: 200,
    description: "Speed Math Win",
    date: "5 hours ago",
    status: "completed",
  },
  {
    id: 4,
    type: "withdrawal",
    amount: -500,
    description: "Bank Transfer",
    date: "Yesterday",
    status: "completed",
  },
  {
    id: 5,
    type: "deposit",
    amount: 2000,
    description: "Card Payment",
    date: "2 days ago",
    status: "completed",
  },
  {
    id: 6,
    type: "game",
    amount: -100,
    description: "Target Shooter Entry",
    date: "2 days ago",
    status: "completed",
  },
];

export const currencies: Currency[] = [
  { code: "NGN", symbol: "₦", rate: 100, flag: "🇳🇬" },
  { code: "USD", symbol: "$", rate: 0.067, flag: "🇺🇸" },
  { code: "EUR", symbol: "€", rate: 0.061, flag: "🇪🇺" },
  { code: "GBP", symbol: "£", rate: 0.052, flag: "🇬🇧" },
  { code: "GHS", symbol: "₵", rate: 1.13, flag: "🇬🇭" },
  { code: "KES", symbol: "KSh", rate: 8.66, flag: "🇰🇪" },
  { code: "ZAR", symbol: "R", rate: 1.22, flag: "🇿🇦" },
];

// Stats
export const stats = [
  { label: "Games Played", value: "48", icon: "🎮" },
  { label: "Total Wins", value: "32", icon: "🏆" },
  { label: "Win Rate", value: "66%", icon: "📊" },
];
