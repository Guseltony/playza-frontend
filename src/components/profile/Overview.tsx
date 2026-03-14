import {
  MdAdsClick,
  MdAnalytics,
  MdCancel,
  MdCheckCircle,
  MdEmojiEvents,
  MdFavorite,
  MdGrade,
  MdHistory,
  MdLocalFireDepartment,
  MdMilitaryTech,
  MdTrendingUp,
  MdVerified,
} from "react-icons/md";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* <!-- Left Stats Content --> */}
      <div className="xl:col-span-2 space-y-8">
        {/* <!-- Stat Cards --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-1">
            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Total Games
            </p>
            <p className="text-slate-900 dark:text-slate-100 text-xl md:text-3xl font-bold">124</p>
            <div className="mt-2 text-primary text-[10px] flex items-center gap-1 font-bold">
              <MdTrendingUp className="text-xs" /> +12% this week
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-1">
            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Wins
            </p>
            <p className="text-slate-900 dark:text-slate-100 text-xl md:text-3xl font-bold">52</p>
            <div className="mt-2 text-primary text-[10px] flex items-center gap-1 font-bold">
              <MdEmojiEvents className="text-xs" /> Win rate stable
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-1">
            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Win Rate
            </p>
            <p className="text-slate-900 dark:text-slate-100 text-xl md:text-3xl font-bold">41%</p>
            <div className="mt-2 text-primary text-[10px] flex items-center gap-1 font-bold">
              <MdAnalytics className="text-xs" /> Above average
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-1">
            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Highest Score
            </p>
            <p className="text-slate-900 dark:text-slate-100 text-xl md:text-3xl font-bold">
              14,250
            </p>
            <div className="mt-2 text-primary text-[10px] flex items-center gap-1 font-bold">
              <MdGrade className="text-xs" /> Personal Best
            </div>
          </div>
        </div>
        {/* <!-- Favorite Games --> */}
        <section>
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4 flex items-center gap-2">
            <MdFavorite className="text-primary" /> Favorite Games
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-all cursor-pointer group">
              <div
                className="size-16 rounded-xl bg-cover bg-center overflow-hidden"
                data-alt="Temple Run game cover image thumbnail"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfsqo-akdTkNKEpycuZB61Vl2PFxKM7HgzSctnLLVlA0saC8hb69kCNTjFu8ZRe5FIrI09osOQOmHxEOLp74aNetIQxT5m3gMD2eUr40grD9KX6BwEI5-e7vUugHC04n1kDkEU43v6-Kf1pZuJNUvBI_y9le1Fd73gxQwvgsf3VrLdJg785TutIkg1mkxsc4c9_tu26wdP4TdlY-mWl4jxMjELWmRvhsqhgup5c7-_caZT5i0Gv9Qs8gkePYBFAwnuKEQy22poiNA9')",
                }}
              ></div>
              <div className="flex-1">
                <h4 className="text-slate-900 dark:text-slate-100 font-bold group-hover:text-primary transition-colors">
                  Temple Run
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs">48 Matches Played</p>
              </div>
              <div className="text-right">
                <p className="text-primary text-xs font-bold">LVL 24</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-all cursor-pointer group">
              <div
                className="size-16 rounded-xl bg-cover bg-center overflow-hidden"
                data-alt="Candy Crush game cover art thumbnail"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrmZ6adxLAsoYEz-FxBoI4cFvoNEVS4QUin6y4dk2GH6gBMM8wcDUahZcVvTv9MCEEYjdNZND6PNm95QbwfNV_KkU-RNff_KFCWSIPfZzazEiHBxbwYjwzVpFGL1qqmyIzcR42cHMHuH8jL75SzjCShlBX9x-bycvLS-KwhTiPv6n9ySHn5CikD3mems4gfD-xOF3YSt2prcM-mGoE1OkgFUtaEJYe3IqQTXKOvokIazP3QNwl2njuj78uNBkIsgQrMTA9qty5qaOz')",
                }}
              ></div>
              <div className="flex-1">
                <h4 className="text-slate-900 dark:text-slate-100 font-bold group-hover:text-primary transition-colors">
                  Candy Crush
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs">76 Matches Played</p>
              </div>
              <div className="text-right">
                <p className="text-primary text-xs font-bold">LVL 82</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Recent Matches --> */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold flex items-center gap-2">
              <MdHistory className="text-primary" /> Recent Matches
            </h3>
            <a
              className="text-primary text-xs font-bold hover:underline"
              href="#"
            >
              View All
            </a>
          </div>
          <div className="space-y-3">
            <div className="glass-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MdCheckCircle className="text-primary" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                    Temple Run - Tournament #203
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    12 Minutes Ago
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold">+₦2,500</p>
                <p className="text-slate-500 text-xs">Win</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-4 border-l-red-500/50">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <MdCancel className="text-red-500" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                    Candy Crush - Challenge Match
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    2 Hours Ago
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-600 dark:text-slate-400 font-bold">-₦500</p>
                <p className="text-slate-500 text-xs">Loss</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MdCheckCircle className="text-primary" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                    Subway Surfers - Sprint
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    Yesterday
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold">+₦1,200</p>
                <p className="text-slate-500 text-xs">Win</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Right Sidebar Content --> */}
      <div className="space-y-8">
        {/* <!-- Current Streak --> */}
        <div className="glass-card p-6 rounded-2xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50"></div>
          <MdLocalFireDepartment className="text-primary text-5xl mb-2" />
          <h3 className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            Current Win Streak
          </h3>
          <p className="text-slate-900 dark:text-slate-100 text-5xl font-bold mb-2">5</p>
          <p className="text-primary text-sm font-medium">Matches in a row</p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="size-2 rounded-full bg-primary glow-accent"></div>
            <div className="size-2 rounded-full bg-primary glow-accent"></div>
            <div className="size-2 rounded-full bg-primary glow-accent"></div>
            <div className="size-2 rounded-full bg-primary glow-accent"></div>
            <div className="size-2 rounded-full bg-primary glow-accent"></div>
            <div className="size-2 rounded-full bg-slate-900/10 dark:bg-white/10"></div>
            <div className="size-2 rounded-full bg-slate-900/10 dark:bg-white/10"></div>
          </div>
        </div>
        {/* <!-- Progress Section --> */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">Rank Progress</h3>
            <span className="text-primary text-xs font-bold">PLATINUM IV</span>
          </div>
          <div className="space-y-4">
            <div className="relative h-2 w-full bg-slate-900/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div className="absolute h-full bg-primary rounded-full w-[70%] shadow-[0_0_10px_rgba(19,236,236,0.5)]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span>2,450 / 3,000 XP</span>
              <span>75%</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              Win{" "}
              <span className="text-slate-900 dark:text-slate-100 font-bold">3 more matches</span>{" "}
              to reach Platinum tier and unlock exclusive tournament rewards.
            </p>
          </div>
        </div>
        {/* <!-- Top Achievements Preview --> */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4">Top Achievements</h3>
          <div className="grid grid-cols-3 gap-3">
            <div
              className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 hover:scale-105 transition-transform cursor-help"
              title="Early Adopter"
            >
              <MdVerified className="text-primary text-2xl" />
            </div>
            <div
              className="aspect-square bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 hover:scale-105 transition-transform cursor-help"
              title="Top 100 Leaderboard"
            >
              <MdMilitaryTech className="text-amber-500 text-2xl" />
            </div>
            <div
              className="aspect-square bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 hover:scale-105 transition-transform cursor-help"
              title="Sharpshooter"
            >
              <MdAdsClick className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
