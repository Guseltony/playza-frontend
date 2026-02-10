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
  Home,
  Gamepad2,
  Wallet,
  User,
} from "lucide-react";

export const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Trophy, label: "Leaderboard", active: false },
  { icon: Gamepad2, label: "Games", active: false },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: User, label: "Profile", active: false },
];


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
