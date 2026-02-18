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

const Home = () => {
  return (
    <main className="flex-1 min-w-0 space-y-6">
      {/* Hero Section */}
      <HeroBanner />
      <RecentWinners />
      <PopularGames />
      <HotGames />
      {/* Wireframe Background */}
      {/* <WireframeHero /> */}
      {/* Animated Grid */}
      {/* <AnimatedGrid /> */}
      {/* Dark gradient overlay for text readability */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div> */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm shadow-lg shadow-cyan-500/20">
          <Star className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-sm font-medium">
            Global Skill-Based Gaming Platform
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Play. Compete.
          <br />
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent animate-pulse">
            Win Real Rewards.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow-lg">
          Join thousands of players worldwide competing in skill-based games and
          earning real rewards. Your talent deserves recognition.
        </p>

        <button
          // onClick={onStartPlaying}
          className="group relative bg-linear-to-r from-cyan-500 via-blue-600 to-magenta-600 hover:from-cyan-400 hover:via-blue-500 hover:to-magenta-500 text-white text-lg font-semibold px-10 py-5 rounded-full transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 hover:scale-105 inline-flex items-center gap-3 border border-cyan-400/30"
        >
          <span className="relative z-10">Start Playing</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-magenta-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        </button>

        <div className="flex items-center justify-center gap-8 mt-12 text-gray-400">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl px-6 py-4 shadow-lg">
            <div className="text-3xl font-bold text-cyan-400">1,275+</div>
            <div className="text-sm">Active Players</div>
          </div>
          <div className="w-px h-16 bg-linear-to-b from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-magenta-500/20 rounded-xl px-6 py-4 shadow-lg">
            <div className="text-3xl font-bold text-magenta-400">₦250K+</div>
            <div className="text-sm">Total Rewards</div>
          </div>
          <div className="w-px h-16 bg-linear-to-b from-transparent via-magenta-500/50 to-transparent"></div>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-500/20 rounded-xl px-6 py-4 shadow-lg">
            <div className="text-3xl font-bold text-blue-400">5,234+</div>
            <div className="text-sm">Games Played</div>
          </div>
        </div>
      </div>
      {/* How It Works */}
      <HowItWorks />
      {/* Game Modes */}
      <GameMode />
      {/* Leaderboard Preview */}
      <LeaderBoard />
      {/* Roadmap */}
      <section className="relative px-4 py-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 128, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 128, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Neon accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-magenta-500/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Building the future of competitive gaming
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative group">
                {/* Wireframe border */}
                <div
                  className={`absolute inset-0 border-2 rounded-2xl transition-all ${
                    item.status === "completed"
                      ? "border-green-500/40 group-hover:border-green-500/70"
                      : item.status === "in-progress"
                        ? "border-blue-500/40 group-hover:border-blue-500/70"
                        : "border-gray-500/40 group-hover:border-gray-500/60"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 ${
                      item.status === "completed"
                        ? "border-green-400"
                        : item.status === "in-progress"
                          ? "border-blue-400"
                          : "border-gray-400"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 ${
                      item.status === "completed"
                        ? "border-green-400"
                        : item.status === "in-progress"
                          ? "border-blue-400"
                          : "border-gray-400"
                    }`}
                  ></div>
                </div>

                <div className="relative text-center bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 border-2 ${
                      item.status === "completed"
                        ? "bg-green-500/20 border-green-500/40"
                        : item.status === "in-progress"
                          ? "bg-blue-500/20 border-blue-500/40"
                          : "bg-gray-500/20 border-gray-500/30"
                    }`}
                  >
                    <item.icon
                      className={`w-10 h-10 ${
                        item.status === "completed"
                          ? "text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]"
                          : item.status === "in-progress"
                            ? "text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                            : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-sm font-semibold mb-3 ${
                      item.status === "completed"
                        ? "text-green-400"
                        : item.status === "in-progress"
                          ? "text-blue-400"
                          : "text-gray-400"
                    }`}
                  >
                    {item.quarter}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>

                  {/* Status indicator */}
                  {item.status === "completed" && (
                    <div className="mt-4 text-green-400 text-xs font-semibold uppercase tracking-wider">
                      ✓ Completed
                    </div>
                  )}
                  {item.status === "in-progress" && (
                    <div className="mt-4 text-blue-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="relative px-4 py-16 bg-gray-800/30 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "35px 35px",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Why Players Trust PLAYZA
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Your security and fairness are our top priorities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="relative group">
                {/* Wireframe border */}
                <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl group-hover:border-green-500/60 transition-all">
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-green-400"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400"></div>
                </div>

                <div className="relative text-center bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/40 mb-6 backdrop-blur-sm">
                    <indicator.icon className="w-10 h-10 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{indicator.title}</h3>
                  <p className="text-gray-400">{indicator.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative px-4 py-20 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Neon accent lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-magenta-500/40 to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative group">
            {/* Wireframe border */}
            <div className="absolute inset-0 border-2 border-cyan-500/40 rounded-3xl group-hover:border-cyan-500/70 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-400 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-magenta-400 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-magenta-400 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-400 rounded-br-3xl"></div>
            </div>

            <div className="relative bg-linear-to-r from-cyan-600/20 via-blue-600/20 to-magenta-600/20 backdrop-blur-sm rounded-3xl p-12 overflow-hidden shadow-lg shadow-cyan-500/20">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-magenta-500/10 blur-2xl"></div>

              <div className="relative text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent">
                  Turn Your Skills Into Rewards
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the global community of competitive players. Start
                  earning real rewards for your gaming skills today.
                </p>
                <button
                  // onClick={onStartPlaying}
                  className="group relative bg-linear-to-r from-cyan-500 via-blue-600 to-magenta-600 hover:from-cyan-400 hover:via-blue-500 hover:to-magenta-500 text-white text-lg font-semibold px-12 py-5 rounded-full transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 hover:scale-105 inline-flex items-center gap-3 border border-cyan-400/50"
                >
                  <span className="relative z-10">Start Playing Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-magenta-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="text-lg font-bold mb-4">About PLAYZA</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                PLAYZA is Africa's premier skill-based gaming platform where
                players compete, earn rewards, and showcase their talents in a
                fair and transparent environment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Game Rules
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Follow us for updates and news
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                <p className="mb-1">PLAYZA Gaming Limited</p>
                <p>123 Marina Street, Victoria Island, Lagos, Nigeria</p>
              </div>
              <div className="text-sm text-gray-400">
                © 2026 PLAYZA. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
