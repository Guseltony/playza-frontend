// import React from 'react'
import { AnimatedGrid } from "@/components/AnimatedGrid";
import GameMode from "@/components/home/GameMode";
import GamesGrid from "@/components/home/PopularGames";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import LeaderBoard from "@/components/home/LeaderBoard";
import RecentWinners from "@/components/home/RecentWinners";
import { WireframeHero } from "@/components/WireframeHero";
import {
  // gameModes,
  // leaderboardTop,
  roadmapItems,
  // steps,
  trustIndicators,
} from "@/constants/constants";
import { ArrowRight, Star } from "lucide-react";
import PopularGames from "@/components/home/PopularGames";
import HotGames from "@/components/home/HotGames";
import About from "@/components/home/About";

const Home = () => {
  return (
    <main className="flex-1 min-w-0 space-y-6">
      {/* Hero Section */}
      <HeroBanner />
      <RecentWinners />
      <PopularGames />
      <HotGames />
      <LeaderBoard />
      <HowItWorks />
      {/* <About /> */}
      {/* Wireframe Background */}
      {/* <WireframeHero /> */}
      {/* Animated Grid */}
      {/* <AnimatedGrid /> */}
      {/* Dark gradient overlay for text readability */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div> */}
    </main>
  );
};

export default Home;
