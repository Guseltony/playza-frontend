import { games } from "@/data/games";
import { calculatePrizePool } from "@/utils/calculatedPrizePool";
import { Link, useParams } from "react-router";
import { formatNaira } from "../lib/formatNaira";
import {
  ArrowBigLeft,
  Gamepad2,
  Info,
  Laptop,
  PlayCircle,
  Smartphone,
  Users,
} from "lucide-react";

import { BiTrendingUp, BiTrophy } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { GiMedal } from "react-icons/gi";
import Search from "@/components/Search";
import { BsPerson } from "react-icons/bs";

const MatchSession = () => {
  const param = useParams();

  const slug = param.id;

  const allGames = games.map((g) => ({
    ...g,
    pricePool: calculatePrizePool(
      g.entryFee,
      g.activePlayers,
      g.platformFeePercentage,
    ),
  }));

  const {
    title,
    slug: gameSlug,
    thumbnail,
    pricePool,
    activePlayers,
    entryFee,
  } = allGames.find((game) => game.slug === slug) ?? {};

  const splitTitle = title?.split(" ") ?? "";

  // console.log(splitTitle);

  return (
    <main className="flex-1 max-w-400 mx-auto overflow-x-hidden ">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[70%] flex flex-col gap-4">
          <Link
            to={`/games/${gameSlug}`}
            className="bg-muted-foreground h-10 w-10 hidden md:flex items-center justify-center rounded-full "
          >
            <ArrowBigLeft />
          </Link>
          <section className="bg-surface-dark rounded-xl pr-1 py-4 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-row justify-between items-center mb-4 ">
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-px">
                  <span className="w-fit bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-white rounded-full live-pulse"></span>{" "}
                    LIVE
                  </span>
                  <span className="text-slate-400 text-sm">
                    #{splitTitle[0]}-2024-001
                  </span>
                </div>
                <h2 className=" text-lg md:text-5xl font-bold text-white  ">
                  {title}
                </h2>
                <p className="text-xs md:text-md text-slate-400">
                  Join 1,240 players competing for glory
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                  Prize Pool
                </p>
                <p className="flex items-baseline md:text-4xl font-black text-primary glow-primary">
                  {formatNaira(pricePool)}
                  <span className="text-primary text-xs font-medium">
                    ↑ 1.2%
                  </span>
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-70 md:h-90 mb-6 group">
              <img
                alt={gameSlug}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                data-alt="High energy gaming illustration with futuristic lights"
                src={thumbnail}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>

              <div className="absolute right-0 top-0 flex gap-2 p-2 text-white bg-secondary/40 font-bold text-xs md:text-base">
                <p>Entry Fee:</p>
                <span>{formatNaira(entryFee)}</span>
              </div>

              <div className="absolute left-0 top-0 flex items-center gap-2 p-2 text-white bg-accent/40 font-bold text-xs md:text-base">
                <Users />
                <span>{activePlayers}</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-background-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-[10px] uppercase text-slate-400 font-bold">
                      Entry Closes In
                    </p>
                    <div className="flex gap-2 text-xl font-bold text-white">
                      <span>00</span>
                      <span className="text-primary">:</span>
                      <span>45</span>
                      <span className="text-primary">:</span>
                      <span>12</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button className="sm:flex-none bg-primary hover:bg-primary/90 text-background-dark font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg transition-all active:scale-95 flex items-center text-sm sm:text-base justify-center gap-2 cursor-pointer">
                    <PlayCircle className="md:text-xl" />
                    Enter Live Game
                  </button>
                  <button className="sm:flex-none bg-accent hover:bg-accent/80 text-white font-bold px-2 md:px-4 lg:px-8 py-3 rounded-lg border border-white/10 transition-all flex items-center text-sm sm:text-base justify-center gap-2 cursor-pointer">
                    <Gamepad2 className="md:text-xl" />
                    Play Demo
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border ">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Highest Score
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-white">94,203</p>
                  <span className="text-primary text-xs font-medium">
                    ↑ 1.2%
                  </span>
                </div>
              </div>
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border ">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Average Score
                </p>
                <p className="text-2xl font-bold text-white">42,115</p>
              </div>
              <div className="bg-background-dark/50 p-2 md:p-4 rounded-lg border ">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Total Entries
                </p>
                <p className="text-2xl font-bold text-white">{activePlayers}</p>
              </div>
            </div> */}
          </section>

          <section className="bg-surface-dark rounded-xl border border-accent-dark overflow-hidden">
            <div className="flex border-b border-accent-dark mb-4 overflow-x-auto scrollbar-hide">
              <button className="px-2 md:px-6 py-4 whitespace-nowrap text-primary border-b-2 border-primary text-xs md:text-sm font-bold bg-primary/5">
                Live Leaderboard
              </button>
              <button className="whitespace-nowrap px-2 md:px-6 py-4 text-slate-400 hover:text-white text-xs md:text-sm font-medium transition-colors">
                Rules
              </button>
              <button className="whitespace-nowrap px-2 md:px-6 py-4 text-slate-400 hover:text-white text-xs md:text-sm font-medium transition-colors">
                Recent Wins
              </button>
              <button className="whitespace-nowrap px-2 md:px-6 py-4 text-slate-400 hover:text-white text-xs md:text-sm font-medium transition-colors">
                Recent Wins
              </button>
              <button className="whitespace-nowrap px-2 md:px-6 py-4 text-slate-400 hover:text-white text-xs md:text-sm font-medium transition-colors">
                Recent Wins
              </button>
            </div>

            <div className="p-0">
              <div className="flex-1 overflow-y-auto px-4 pb-32">
                <Search />
                {/* <!-- Rank 1 --> */}
                <div className="my-4 flex items-center gap-4 px-2">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-green-600/60 uppercase">
                    Leaders
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
                </div>

                <div className="mb-2 p-4 rounded-xl bg-white/5 border border-primary/30 flex items-center justify-between winning-zone-glow">
                  <div className="flex items-center gap-4">
                    <div className="w-8 flex justify-center">
                      <FaTrophy className="material-icons text-yellow-400 text-3xl" />
                    </div>
                    <img
                      className="w-10 h-10 rounded-lg object-cover"
                      data-alt="Avatar of the tournament leader"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH8URigXDLYUtE0iM3QXg_jTaWo5D4rzN_4DbgTYYEsWz8FdBdbgd45Elc6abWH5oUSJkDoX0kYDMw_QuUdRxNE8NNT31GOyAbU2R79Mp8BCkMGj5dfZPamAxHnACunTjIP9B3qj0-46x4345Ih_ZvenTnmkmKKvr2Ykuql5LoNNNV7QRTIgNj4BZshGU6tPJqbBhjDqdwwlI5GVr8hrrxEXPrusVxD-9mhxeeSPvxoG6P-CP9FiU5pZKiEs-BRy04X2yNMxpla4c"
                    />
                    <div>
                      <p className="font-bold text-white leading-tight">
                        ShadowNinja
                      </p>
                      <p className="text-primary text-xs font-medium">
                        84,290 pts
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">$250</p>
                  </div>
                </div>
                {/* <!-- Rank 2 --> */}
                <div className="mb-2 p-4 rounded-xl bg-white/5 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 flex justify-center">
                      <FaMedal className=" text-slate-300 text-2xl" />
                    </div>
                    <img
                      className="w-10 h-10 rounded-lg object-cover"
                      data-alt="Avatar of the second place player"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuIVR8ZDWsBDnySj1myKojWV2BX7N0r8LPJdW26LLfnnvRSheVHjBf-QKVo9HBLub9WReKuDH1KPVDBDmB13BKv4VQxt9nh1t6uaor8PLQdyLeiO6AHFzepF8TdAU4SPOfxmwFlJ43Ay2hI4NXkmT8A6qB7kkLQ7J88ZK1CGlodbkdOmPGaGb4xpYZjy8tnJwOuA8CRfWsIPkyf9cvLjHPjYohlY7Hu9WmzIYUB9WjDyXcRldH-8g_sVfBHHCDd12RQceIfUSJ1qQ"
                    />
                    <div>
                      <p className="font-bold text-white leading-tight">
                        FruitMaster_99
                      </p>
                      <p className="text-slate-400 text-xs font-medium">
                        82,150 pts
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">$150</p>
                  </div>
                </div>
                {/* <!-- Rank 3 --> */}
                <div className="mb-2 p-4 rounded-xl bg-white/5 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 flex justify-center">
                      <GiMedal className="material-icons text-orange-400 text-2xl" />
                    </div>
                    <img
                      className="w-10 h-10 rounded-lg object-cover"
                      data-alt="Avatar of the third place player"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvR_xVyTXXGYpkjDvoZK-1TVeNtVhch_hwpS6Hgt9TbMeFCOOIYUy6efnY5wyFZ5yDHT0KtQGr_hgkjLoX6jPh-Osp9LW151VtZbXS2fsMapT5W64brLqyR-nxOp4Lmzz1eKNLIp0_U5JORXV8k3eVGKoHlvrkypszkmajE_THnxE3iBJHBAYj0kj1IReokKkoTbr8sN4iKg5jQaBFKz8-z9CCZKz9Q6o_uK5JzDYaCj708D0M_nQwBmWwhsF2sbT7KrHDg_Msq8"
                    />
                    <div>
                      <p className="font-bold text-white leading-tight">
                        KatanaZero
                      </p>
                      <p className="text-slate-400 text-xs font-medium">
                        79,800 pts
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">$100</p>
                  </div>
                </div>
                {/* <!-- Rank Divider - Winning Zone Cutoff --> */}
                <div className="my-4 flex items-center gap-4 px-2">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-primary/60 uppercase">
                    Runner Ups
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
                </div>
                {/* <!-- Rank 4-10 --> */}
                <div className="space-y-1">
                  {/* <!-- Row 4 --> */}
                  <div className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-sm font-bold text-slate-500">
                        04
                      </span>
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        data-alt="Player profile thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhh7qMshLgrdzO96hWqwQhduita48YCj4WZGokhy2oq3HH2GJTuW5MZJKjpCT6JrTcazua-Nt6ph0jchYUiwclgYhCZt04NjhHjMNJC5Xh3iVnAechj2UdqaKawZl4x8qh5oAfPO4_VodhbmQPWGqptZ01-IiKbzV-aERa7dYIIZhxvSjVCA3E_zZPskYtDwuuPfsXXhyU5CgFxky0Djq8Oxic2wio5KSwecWRQLJfUKNZ-DQM1dNdo7DhzO8mmPdiBMI3EgubK38"
                      />
                      <p className="text-sm font-medium text-slate-300">
                        QuickSlicer
                      </p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <p className="text-xs font-bold text-slate-400">75,400</p>
                      <p className="w-12 text-right text-sm font-bold text-white">
                        $75
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row 5 --> */}
                  <div className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-sm font-bold text-slate-500">
                        05
                      </span>
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        data-alt="Player profile thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuADyj9PtXeDdwBrWPZACK1uRQeox4MR0IY1BSJp-KDf3XebFDXiCt2OL7LokkSiiKrMUh-0j6ebEwOo58FTP87ysI7HiJQ53woZIE7ZE8OM79mEEilFUl-L3goLB2f3Uhqr46k1S3-QCpp-woBCP6MMgeFprDVDmHYlCILEsJdQGXAmzIKPibz9YaHtzjw49754Muj6NjSIC6UlCDJdalu6cvJJVHaHXD4yOV2gVUPmlUCCvu0nfJ4KtZlg6xzE8LlGtrH5x3mFbTA"
                      />
                      <p className="text-sm font-medium text-slate-300">
                        MelonManiac
                      </p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <p className="text-xs font-bold text-slate-400">72,100</p>
                      <p className="w-12 text-right text-sm font-bold text-white">
                        $60
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row 6 --> */}
                  <div className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-sm font-bold text-slate-500">
                        06
                      </span>
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        data-alt="Player profile thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8H1Kk-jiLEE2W5LrUQ2byYY5TxI1E-SgR2gFSSsZD0QimJfjCZcZgmUSG7sVedJ5fU9RTgN44EBP7Dja-BY6m4gQ0FStr1RG3P-mIicx985CX8iTfGQT2n656VcRNDJHnvaQjmSph4bJg67mdKMwjHuhhcTBmHQv7yPJLoH9CDWGNl4spglyguIJPxVfkutHGkFnpKrFSxy7VWnL3ZaIZleM33G9aP5Rw6WDc9oklhNFFOHbHwZSpXoZyODX5NbY-vImcEVgkIjk"
                      />
                      <p className="text-sm font-medium text-slate-300">
                        SliceAndDice
                      </p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <p className="text-xs font-bold text-slate-400">70,050</p>
                      <p className="w-12 text-right text-sm font-bold text-white">
                        $50
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row 7 (Highlighted User) --> */}
                  <div className="px-4 py-3 rounded-lg bg-primary/10 border-l-4 border-primary flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-sm font-bold text-primary">
                        07
                      </span>
                      <img
                        className="w-8 h-8 rounded-full border border-primary/50 object-cover"
                        data-alt="Your profile thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgLtlnzpFpSf365hllO9njnNDCiBiMLrfejhFDePg_s0nOeBsGvzr81ZA8yFLLYDdHdDLbFin6rH2VSt0B71Fna1xyzEgvK4VqWMNnUB2ovR60ff2TwQvrqmGIuzt67uRoyhokzOxKqdRkvDEGWAU3_OuvpJ51Z4jxgGEH6Qvcd2qS4zc_WMJfBM7JzHsTC20U7TkVFQJBuFdJagbfIU7-wUih13l0k1ls8XQWHNx6Eiac-bCPUQgw-dnbvIKf3nQEHSvIB_T8hXo"
                      />
                      <p className="text-sm font-bold text-white">You (Alex)</p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <p className="text-xs font-bold text-primary">68,920</p>
                      <p className="w-12 text-right text-sm font-bold text-white">
                        $45
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row 8 --> */}
                  <div className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-sm font-bold text-slate-500">
                        08
                      </span>
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        data-alt="Player profile thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3dZ2UvvYEEUJm4oCIJtjismZGpGa5Bds5luFfMiWu-BMl6-celgrbRDZWoG__QcsM0WS-JNBLXI_PR2WbYElRQiALLpQg1pMu0bE2WhCCfta4h3pyX3oWI_H6pTPpoGH_RI0E6dpB26KzWLyTNtaxjlq-JT0Mww93CwxgFxhiILUV8uaZa-lQ8T52__APFoh1CPPU_Xv0xlzUmGHZckgKCbzW3ZIhfTzZWvzFd1ZbQvQ3FOJHqVZlVKVr5PyK5oMETe-M0KFBFTQ"
                      />
                      <p className="text-sm font-medium text-slate-300">
                        BladeRunner
                      </p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <p className="text-xs font-bold text-slate-400">65,200</p>
                      <p className="w-12 text-right text-sm font-bold text-white">
                        $30
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Out of Winning Zone Divider --> */}
                <div className="mt-8 mb-4 flex flex-col items-center gap-2">
                  <div className="w-full h-px bg-red-500/30"></div>
                  <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest">
                    Winning Zone Cutoff
                  </p>
                </div>
                {/* <!-- Rank 11 (Out of money example) --> */}
                <div className="px-4 py-3 rounded-lg opacity-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-sm font-bold text-slate-600">
                      11
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <BsPerson className=" text-slate-600 text-sm" />
                    </div>
                    <p className="text-sm font-medium text-slate-400">
                      SlowSlicer
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-xs font-bold text-slate-600">54,100</p>
                    <p className="w-12 text-right text-sm font-bold text-slate-600">
                      $0
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-accent-dark bg-background-dark/30 text-center">
              <button className="text-sm font-bold text-primary hover:underline">
                View Full Leaderboard
              </button>
            </div>
          </section>
        </div>

        <div className="lg:w-[30%] flex flex-col gap-6">
          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BiTrophy className="text-primary text-xl" />
              Prize Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 font-bold">1st</span>
                  <span className="text-sm font-medium">Grand Prize</span>
                </div>
                <span className="text-white font-bold">₦75,000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-slate-300 font-bold">2nd</span>
                  <span className="text-sm font-medium">Runner Up</span>
                </div>
                <span className="text-white font-bold">₦45,000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent-dark/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">3rd</span>
                  <span className="text-sm font-medium">Finalist</span>
                </div>
                <span className="text-white font-bold">₦30,000</span>
              </div>
              <div className="text-center pt-2">
                <p className="text-[10px] text-slate-500 italic">
                  4th - 100th place earn Arena Credits
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BiTrendingUp className="text-primary" />
              Your Session Stats
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Skill Progress</span>
                  <span className="text-primary">82%</span>
                </div>
                <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[82%]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">
                    Best Score
                  </p>
                  <p className="text-lg font-bold text-white">89,420</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">
                    Game Time
                  </p>
                  <p className="text-lg font-bold text-white">45m</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark rounded-xl border border-accent-dark p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Info className="text-primary" />
              Session Meta
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Game Type</span>
                <span className="text-white font-medium">
                  Single Player FPS
                </span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Difficulty</span>
                <span className="text-yellow-500 font-medium">Competitive</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-slate-400">Region</span>
                <span className="text-white font-medium">West Africa</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-slate-400">Platform</span>
                <div className="flex gap-2">
                  <Laptop className="text-sm" />
                  <Smartphone className="text-sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 rounded-xl border border-primary/20 p-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary rounded-lg text-background-dark">
                <MdSupportAgent />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Need Help?</h4>
                <p className="text-xs text-slate-400 mb-3">
                  Our support team is active for this tournament.
                </p>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Open Live Chat{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MatchSession;
