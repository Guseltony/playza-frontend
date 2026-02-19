import React from "react";
import Search from "../Search";
import Filter from "./Filter";
import Sort from "./Sort";

const FullGame = () => {
  return (
    <main>
      {/* <!-- Header section --> */}
      <div className="mb-8">
        <nav className="flex text-xs text-slate-500 gap-2 mb-2">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <span>/</span>
          <span className="text-slate-300">Games</span>
        </nav>
        <h1 className="text-4xl font-display font-bold tracking-tight">
          Explore Games
        </h1>
      </div>
      {/* <!-- Search & Filters --> */}
      <div className="glass rounded-lg p-3 mb-8 flex flex-wrap gap-4 items-center">
        <Search />
        <Filter />
        <Sort />
      </div>
      {/* <!-- Featured Games --> */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full"></span>
            Featured Skill Challenges
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Featured Card 1 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="High speed neon racing game visual"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpAoSHTMBjsMFyQUjv5rB-TFF5pu3rAMfgCikWDuybUUT8rFhsrHtZrbyMx-P4xnS8JllSzqj_kegIZqBojwqDXPspfVYjreR97HXSbwvKPm9PZxPKB0FsOoyCarwRgfZm9Rka27SqN-xJ-5uK7A2BlkEibq9OsDkV5G4q-bQF-lCu96hx61ANzRPV_sfpUDrEFCwkfAbTjtlrbLsPI4clCFwm3V9fjYBkcejFZu28Le8nvyaH4H6q7YvcA8NSc6E6QDjOw-IhdKkE"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  NEW
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 458
                  Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Hyper Velocity
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
          {/* <!-- Featured Card 2 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="Cyberpunk futuristic chess board game"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkwduXuJjNi6O0Q_nsFaV5iTOE9C9AdO_rxrQiRwN8jePvtUKLBeFfnwdN_vJfdXSeEmQcENLRLSuWXf_6KxHPdNfDe-jLVwxDKKpAx0qoXRxAc1R0odZGfQM7D1vc26oYnptqwD5YISX9CaaozTx3QRt5qz8y6KaqE7fY_3OJA08RCS8gvgm_cirzlckf6nKrG4dqj28jTRatq5WT0O3c3EpyZftCiQyVGjylQ50y1mI7l6HBohJ-4wZ1eB1_sWt95bIsqkteQ8c"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  ELITE
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 1.2k
                  Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Combat Chess
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
          {/* <!-- Featured Card 3 --> */}
          <div className="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img
              alt="Featured Game"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-alt="Tactical sniper shooting range environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJJz3zZJbWyqJlKIsFo891IBbzi_EuFfp7t0J8KoR9DRVjTQAXoqbBxhuNQWF9nlvjS_nGNzUcrrdLdGAsbgab0zoE8cF3Pe1lD53nNzWjEbkz_-tRyxbGyAtk2dC8ufQWnXcuBJPbiccjir9DLmldYh38XQwMtEbO5f2qG3aLH1x6KgFuYJcnMi6LwAFzGo00pt5M2xgOxa7cgcZyl1HfJZSVbuS1sBYEQAxDW059QaXshMdbWGNgI0Q-9UWwy2flaGOJ_y_4G0z"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  HIGH STAKES
                </span>
                <div className="flex items-center text-xs text-white/80 gap-1">
                  <span className="material-icons text-xs">people</span> 89 Live
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Sniper Elite
              </h3>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">
                ENTER ROOM
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- All Games Grid --> */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold">All Competitions</h2>
          <button className="text-primary text-sm font-medium hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* <!-- Game Card Loop (10) --> */}
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Abstract neon digital background pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw_IvwFdvaKjJTLWpYsY7FHNJ8QiD-puMPd1CGSEjZLOmuPaDrX_-248EgewIQKkp99Qm4Llng0cP-hJwdnDkPenQMAqWyPrMNlGuI50pLGbkvGykIlCL_yj7vdWiB2MQ1yYgUvNhZwfXzgZ7k3LRRHbOCNwBpumsI2Uq2Ba5tmWLu58OxhDRk_jBSiRj-CmfnBZNrueQOMIzyalFS5d-SblkW2XOXEgs5rv6xLVU06UsIv8zprSRiSxjyvUkzTwRH3nJm_tJ20gVg"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">142</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Neon Racer</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦20 - ₦500
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Colorful abstract light particles"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNzDsnwPAbLt9fOgfs41fR4KsznqvZysQ_B3CSh1-WX0b3A_4R_qXDze_6iqZpMOCV76t_DanC7SbdJeKdDCde0K8KyDjIRXs9KHssuny7WptUUdjdur_EL2_nzWq3uu0IimcTpbpIXmJajsAqlIN3QtNpm3wxCoGBDsqmxVs_XMHUd4Pu3bUDa9pq8sjLBSurHmnQEd4tohFtPcBmbaDpmDtm5_O7eIY9gfK6r0ngoiP4b2X9FH_ZBS33ZBPonNTZrYQ2xlRoVLD"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">89</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">
                Card Clash Pro
              </h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦50 - ₦1k
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          {/* <!-- Repeated placeholders for visual density --> */}
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Retro computer and electronic hardware"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNtdnUEtMSeufCrZykUOHRcrb72GgQXponMt15rO_nmsB-sTuyXoPczh0STSxi_byxf7diugFLJje63XUgO5zSWTQ9h1UrsNRK_85s2SW2DIR4mPx9k1W8hlGQqKTA0X5kMMTw3RLrffjmkouD6UUHUqt4CBxC4ps3zQTpxkH567DL1WIrjRkkOYTJNRrrJ2LWCbCQBs0EOgqPCcbcoHRaXiU_AsJy1cC4r5jalDHnkJS7WwCN1qH3XT20yk-4f6ovCzQWhy4ZUoSQ"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">312</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Bit Hunter</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦100 - ₦2k
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Colorful abstract flowing energy liquid"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpRHF3kbpNvKyHZpYKAmLDh7ekSBwh7Yb2_iC0qXjtQKfw0SxSHf6MLRYMSXYHySkarvntaOzRm3PFe7TR50d_281oyf3Eyi9BpPdswjiQKjP6KsZ1WNrN6OMUKQ6s5-8GJHdkWb5SSgK62kiiIlWt4ZCAdxU33M4bNpPmQ5oTYB2smK-m_ULhqvMJYIuoaMQKXlrEh_LtJVrqBjer_J1g7_Ytm7J1_m3qlvK1DOwbYgZlO0PUaIsA8TgChrymY61WIWK4sFJ-nS-L"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">54</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Speed Tap</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦20 - ₦200
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Abstract structural geometric white pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT8GoPt7E1xjxr-ie1d7Iz7ikuJjPPAuZTuNG8iQ-uGTKimWWK2yDlCHYEtkiXLuhEgivsUM843SZlpCnpc5FJkb98QO96UUe_9-Kc8I9sRM_crsW_OfVSYo1_06etZNymQ63VNZR-pUWqR_F5Yiql0d-ouwnWWqe6Jtpk4ee6yQXU9U-sGIhiWzJK_jDcp0gCRThu_Xe1SAGevp57yoe0iNrvZ3YBuv0mu0U-Slphj-VUb5V9woj34f6CRFWQ_wSWwwo6urz8OW2_"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                <span className="text-[10px] font-bold">OFF</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Ludo Royale</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦50 - ₦500
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Team of players in gaming"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN0lHjvLUbfD940PG4yrtYbsQBS-htGIYsbq2mfVTDqTCR4F_jBb370xULIVi3YSHzrftIuMXV4_rEpa6ILvsXHi2HKmzhG8WirLzF77neQjJGZMUytv0u2mIDbc6zjYqTgZwnPve-vOgYq2XBgIwC5WKHIk-Wog-HiFGosblxt0CNirWXzeUH0d9bktl4PAX9nLTGlYz9Y4VckAGuBr8FlT8tLX4BPBQxWBKeXEWPX1h-z8B8-5FtF8wwZ9aCTG8MpFXMJYIiYrTb"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">201</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Squad Tactics</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦500 - ₦5k
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Abstract digital mesh pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONRWFoN4_bAmHuiNGqseXy8miG_bChcVRQQoS-AUa8FXWbNXYKElWU0N4XS64qkLyZKZxgGgImTbat0F-xvez2NdoEdpEOXjBxw-7CNwplU2Y4YnbX-09i6mVcZB8akrDI8YQsgqHkUquk6zRXE45o_ZT05cnHYJ5G6DKOtvXrLeuIRoGJQWLw1sP3KmSaf16hVPZgimlKutjgDlG9mj5GBlRdbB2ui5J8kod5qt45imkM5IcNzPNtl9vtsjcM6Raze9twtW11kz7"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">12</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Grid Lock</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦20 - ₦100
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Space galaxy stars background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAErB0HdltUE8kwB31jFtWG5m-Xfs-BQL1c8fI7JkWoJTBuMQbhrldadNkFhfvTvClpoeeSaaL3Iznu4kvcHFRNzZMLGaSk7LJuHMfB5YE8HX1mTdvMUB9W0ZQi_-f7RwT1dpArdPoRIg7WXJ7FSMoe-NvNjIsXwgrXAdNUSJb38oNBP3T71rPVMTeQzySAZDiKerENjMed5-vQXfPXEaKgZ7oG_D3alijovI5cLOEPy24WYCKZNyuIG2S74TSIgNhf8PP6Q3Z-deG-"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">45</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Star Voyager</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦200 - ₦1k
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Abstract gaming controller neon light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkXKxAC-qfT7GMDHOXBo_Q4AYmDewMZHiYdCf_doYcqZO83ujqRpLTgTb48tpYcC3JsDvAH9Xm0rU3Ac2kqUmzJu1AEWyFEIUTZvwj1LUNryy6277FAlE5I8W4MWr404_UrsDi_60qtm6ep61-ECedQwTbo3FkjuccBUbv-4B48_MYiAyTF4V_YNHSsgFz8ZO-oGlP8vrePbwUdep1Cd7kpwhkEa3zk72834zI_xrEYgfrP5aTMfySZ2ItFMBCA5ZukZO978ELNVEO"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">662</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Arena Pro</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦100 - ₦5k
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
          <div className="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
            <div className="h-32 bg-slate-800 relative">
              <img
                alt="Game"
                className="w-full h-full object-cover"
                data-alt="Modern tech code on screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVHPWOV1jPkbOap42NNiX5os0cHtcMIVijaNXZ8y5U3Q8_2v9VWbJ94G_EY22AXh7t5zO9KPY1Kra89mlyP9HM6LxWJFt6PyyeVKqLvHacEqlNpPdC1_z6og5VcyjI97mSNQO0WU1ol1KPewVDqTP2cuXqOPNYWXs7bqbLKFBcNqkT5u98Jnl7RbqvYy-qjRmeZxsPPo-fu_jaUJPDP3h3vBfpFCQ2PBp066SNnf2xv0lvPQYWDQOvBDSbicDjpi9aoOyu2ET4Lph"
              />
              <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold">18</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm mb-2 truncate">Code Breaker</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-slate-500">Stakes</span>
                <span className="text-xs font-bold text-primary">
                  ₦50 - ₦200
                </span>
              </div>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Live Tournaments --> */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold">Live Tournaments</h2>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-primary">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-16 h-16 rounded bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary text-3xl">
                  sports_esports
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Grand Master Chess Series</h3>
                <p className="text-slate-400 text-sm">
                  Prize Pool:{" "}
                  <span className="text-white font-bold">₦250,000.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Starts In
                </div>
                <div className="font-display font-bold text-xl text-primary">
                  00:45:12
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Entries
                </div>
                <div className="font-display font-bold text-xl">124 / 256</div>
              </div>
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
                ENTER ROOM
              </button>
            </div>
          </div>
          <div className="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-slate-700">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-16 h-16 rounded bg-slate-800 flex items-center justify-center">
                <span className="material-icons text-slate-600 text-3xl">
                  directions_run
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Hyper Racer Sprint</h3>
                <p className="text-slate-400 text-sm">
                  Prize Pool:{" "}
                  <span className="text-white font-bold">₦100,000.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Starts In
                </div>
                <div className="font-display font-bold text-xl text-primary">
                  02:15:00
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  Entries
                </div>
                <div className="font-display font-bold text-xl">45 / 100</div>
              </div>
              <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold border border-white/10">
                ENTER ROOM
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullGame;
