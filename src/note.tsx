// <!DOCTYPE html>

// <html class="dark" lang="en"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>Nexus Play Games Explorer</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     colors: {
//                         "primary": "#3713ec",
//                         "background-light": "#f6f6f8",
//                         "background-dark": "#020617",
//                     },
//                     fontFamily: {
//                         "display": ["Space Grotesk", "sans-serif"],
//                         "body": ["Inter", "sans-serif"]
//                     },
//                     borderRadius: {
//                         "DEFAULT": "0.5rem",
//                         "lg": "0.75rem",
//                         "xl": "1.5rem",
//                         "full": "9999px"
//                     },
//                 },
//             },
//         }
//     </script>
// <style>
//         .glass {
//             background: rgba(255, 255, 255, 0.03);
//             backdrop-filter: blur(12px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//         }
//         .neon-border:hover {
//             box-shadow: 0 0 15px rgba(55, 19, 236, 0.4);
//             border-color: rgba(55, 19, 236, 0.5);
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//             width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #3713ec33;
//             border-radius: 10px;
//         }
//         body {
//             font-family: 'Inter', sans-serif;
//         }
//         h1, h2, h3, h4, .font-display {
//             font-family: 'Space Grotesk', sans-serif;
//         }
//     </style>
// </head>
// <body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
// <!-- Header -->
// <header class="sticky top-0 z-50 glass border-b border-white/10 px-6 py-3 flex items-center justify-between">
// <div class="flex items-center gap-8">
// <div class="flex items-center gap-2">
// <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
// <span class="material-icons text-white">bolt</span>
// </div>
// <span class="text-xl font-bold font-display tracking-tight">NEXUS<span class="text-primary">PLAY</span></span>
// </div>
// <nav class="hidden md:flex items-center gap-6">
// <a class="text-primary font-medium hover:text-primary/80 transition-colors" href="#">Games</a>
// <a class="text-slate-400 hover:text-white transition-colors" href="#">Tournaments</a>
// <a class="text-slate-400 hover:text-white transition-colors" href="#">Leaderboards</a>
// <a class="text-slate-400 hover:text-white transition-colors" href="#">Support</a>
// </nav>
// </div>
// <div class="flex items-center gap-4">
// <div class="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 gap-2">
// <span class="text-primary font-bold">₦</span>
// <span class="font-display font-semibold">5,200.00</span>
// </div>
// <button class="relative p-2 text-slate-400 hover:text-white transition-colors">
// <span class="material-icons">notifications</span>
// <span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-background-dark"></span>
// </button>
// <div class="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
// <img alt="User Avatar" class="w-full h-full object-cover" data-alt="Cyberpunk style user profile avatar image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSnCUxYvYh8qdL55nR2yXIHghE2jYdbAvu8GrWpQDsumEPgy-eLmoByBofEfSCLSOJX6lo8DKpz5lbd2NP7qqwRsT4oQBFmHKWldRLN20820u6ZgVHNodmAWrtrfMaSwtBB__e9uzvi9DNUl5r8B1M5GDpe4N3AgsEI6ENfgtsvQTYO6_7JuMeyw72jJFxt2c3QWkO5jUO6dhOwiFqnFicPVVNOc7bycIwzNjzds3E5uyUTMcOBQ9gO0rxl6Nk8jcn0_HOrZ79QDkI"/>
// </div>
// </div>
// </header>
// <div class="max-w-[1600px] mx-auto flex gap-6 p-6">
// <!-- Sidebar -->
// <aside class="w-72 hidden lg:block sticky top-24 self-start h-[calc(100vh-8rem)]">
// <!-- Profile Card -->
// <div class="glass rounded-lg p-5 mb-6">
// <div class="flex items-center gap-3 mb-4">
// <div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
// <img alt="Avatar" class="w-10 h-10 rounded-md" data-alt="Small user avatar for sidebar profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhshsEn-An6m9NBw6Ve9Kj0HPgrO23IlxLe5EjtFWoaHCbijFxU_7QKCQc9q8hNmNY5lnGEKhk3ZI9wsIk2clGlw04y_WNJwDpP9q3cmIn7xaLEKbPkQ2Icz_BWh5zck1kSUWfTnL-iDiHqaNvWyM3MJmRGSVhiZSn9mZERRGspuEbSjTmWNDHcN3UOtLwXqxHbDdKKvI1x02l5igtrr5VKzw9t_i3la8djhs4mAItrocq8oUrln70xojf3_GY6Gl1cXS1T95iBkd"/>
// </div>
// <div>
// <div class="font-display font-bold">Cipher_99</div>
// <div class="flex items-center gap-1">
// <span class="text-[10px] uppercase font-bold text-primary tracking-widest">Platinum</span>
// <span class="material-icons text-primary text-xs">workspace_premium</span>
// </div>
// </div>
// </div>
// <div class="bg-primary/10 rounded-lg p-3 border border-primary/20 mb-4">
// <div class="text-xs text-slate-400 mb-1">Total Balance</div>
// <div class="text-xl font-display font-bold">₦5,200.00</div>
// </div>
// <button class="w-full py-3 bg-primary hover:bg-primary/90 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
//                     TOP UP WALLET
//                 </button>
// </div>
// <!-- Nav Links -->
// <nav class="space-y-1 mb-8">
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">dashboard</span> Dashboard
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 bg-primary/20 text-white rounded-lg transition-all border-l-4 border-primary font-medium" href="#">
// <span class="material-icons text-xl text-primary">sports_esports</span> Games
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">emoji_events</span> Tournaments
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">leaderboard</span> Leaderboard
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">account_balance_wallet</span> Wallet
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">history</span> History
//                 </a>
// <a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-all" href="#">
// <span class="material-icons text-xl">settings</span> Settings
//                 </a>
// </nav>
// <!-- Mini Stats -->
// <div class="glass rounded-lg p-4 space-y-4">
// <div class="flex items-center justify-between">
// <span class="text-slate-400 text-xs uppercase tracking-tighter">Games Today</span>
// <span class="font-display font-bold text-white">12</span>
// </div>
// <div class="flex items-center justify-between">
// <div class="flex items-center gap-2">
// <span class="relative flex h-2 w-2">
// <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
// <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// </span>
// <span class="text-slate-400 text-xs uppercase tracking-tighter">Players Online</span>
// </div>
// <span class="font-display font-bold text-white">1.2k</span>
// </div>
// </div>
// </aside>
// <!-- Main Content -->
// <main class="flex-1 min-w-0">
// <!-- Header section -->
// <div class="mb-8">
// <nav class="flex text-xs text-slate-500 gap-2 mb-2">
// <a class="hover:text-primary" href="#">Home</a>
// <span>/</span>
// <span class="text-slate-300">Games</span>
// </nav>
// <h1 class="text-4xl font-display font-bold tracking-tight">Explore Games</h1>
// </div>
// <!-- Search & Filters -->
// <div class="glass rounded-lg p-3 mb-8 flex flex-wrap gap-4 items-center">
// <div class="relative flex-1 min-w-[300px]">
// <span class="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
// <input class="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all" placeholder="Search by game name..." type="text"/>
// </div>
// <div class="flex bg-white/5 border border-white/10 p-1 rounded-lg">
// <button class="px-4 py-1.5 rounded-md bg-primary text-sm font-medium">All</button>
// <button class="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">Casual</button>
// <button class="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">Elite</button>
// <button class="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">Live</button>
// </div>
// <select class="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-primary">
// <option>All Stakes</option>
// <option>₦20 - ₦100</option>
// <option>₦100 - ₦500</option>
// <option>High Stakes</option>
// </select>
// </div>
// <!-- Featured Games -->
// <section class="mb-10">
// <div class="flex items-center justify-between mb-6">
// <h2 class="text-xl font-display font-bold flex items-center gap-2">
// <span class="w-2 h-6 bg-primary rounded-full"></span>
//                         Featured Skill Challenges
//                     </h2>
// </div>
// <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
// <!-- Featured Card 1 -->
// <div class="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
// <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
// <img alt="Featured Game" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="High speed neon racing game visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpAoSHTMBjsMFyQUjv5rB-TFF5pu3rAMfgCikWDuybUUT8rFhsrHtZrbyMx-P4xnS8JllSzqj_kegIZqBojwqDXPspfVYjreR97HXSbwvKPm9PZxPKB0FsOoyCarwRgfZm9Rka27SqN-xJ-5uK7A2BlkEibq9OsDkV5G4q-bQF-lCu96hx61ANzRPV_sfpUDrEFCwkfAbTjtlrbLsPI4clCFwm3V9fjYBkcejFZu28Le8nvyaH4H6q7YvcA8NSc6E6QDjOw-IhdKkE"/>
// <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
// <div class="flex items-center gap-2 mb-2">
// <span class="bg-primary/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">NEW</span>
// <div class="flex items-center text-xs text-white/80 gap-1">
// <span class="material-icons text-xs">people</span> 458 Live
//                                 </div>
// </div>
// <h3 class="text-2xl font-display font-bold mb-3">Hyper Velocity</h3>
// <button class="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">ENTER ROOM</button>
// </div>
// </div>
// <!-- Featured Card 2 -->
// <div class="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
// <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
// <img alt="Featured Game" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Cyberpunk futuristic chess board game" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkwduXuJjNi6O0Q_nsFaV5iTOE9C9AdO_rxrQiRwN8jePvtUKLBeFfnwdN_vJfdXSeEmQcENLRLSuWXf_6KxHPdNfDe-jLVwxDKKpAx0qoXRxAc1R0odZGfQM7D1vc26oYnptqwD5YISX9CaaozTx3QRt5qz8y6KaqE7fY_3OJA08RCS8gvgm_cirzlckf6nKrG4dqj28jTRatq5WT0O3c3EpyZftCiQyVGjylQ50y1mI7l6HBohJ-4wZ1eB1_sWt95bIsqkteQ8c"/>
// <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
// <div class="flex items-center gap-2 mb-2">
// <span class="bg-purple-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">ELITE</span>
// <div class="flex items-center text-xs text-white/80 gap-1">
// <span class="material-icons text-xs">people</span> 1.2k Live
//                                 </div>
// </div>
// <h3 class="text-2xl font-display font-bold mb-3">Combat Chess</h3>
// <button class="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">ENTER ROOM</button>
// </div>
// </div>
// <!-- Featured Card 3 -->
// <div class="relative group h-64 rounded-xl overflow-hidden glass border-white/10 hover:-translate-y-1 transition-all duration-300">
// <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
// <img alt="Featured Game" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Tactical sniper shooting range environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJJz3zZJbWyqJlKIsFo891IBbzi_EuFfp7t0J8KoR9DRVjTQAXoqbBxhuNQWF9nlvjS_nGNzUcrrdLdGAsbgab0zoE8cF3Pe1lD53nNzWjEbkz_-tRyxbGyAtk2dC8ufQWnXcuBJPbiccjir9DLmldYh38XQwMtEbO5f2qG3aLH1x6KgFuYJcnMi6LwAFzGo00pt5M2xgOxa7cgcZyl1HfJZSVbuS1sBYEQAxDW059QaXshMdbWGNgI0Q-9UWwy2flaGOJ_y_4G0z"/>
// <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
// <div class="flex items-center gap-2 mb-2">
// <span class="bg-red-600/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">HIGH STAKES</span>
// <div class="flex items-center text-xs text-white/80 gap-1">
// <span class="material-icons text-xs">people</span> 89 Live
//                                 </div>
// </div>
// <h3 class="text-2xl font-display font-bold mb-3">Sniper Elite</h3>
// <button class="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-xl shadow-primary/30">ENTER ROOM</button>
// </div>
// </div>
// </div>
// </section>
// <!-- All Games Grid -->
// <section class="mb-12">
// <div class="flex items-center justify-between mb-6">
// <h2 class="text-xl font-display font-bold">All Competitions</h2>
// <button class="text-primary text-sm font-medium hover:underline">View All</button>
// </div>
// <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
// <!-- Game Card Loop (10) -->
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Abstract neon digital background pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw_IvwFdvaKjJTLWpYsY7FHNJ8QiD-puMPd1CGSEjZLOmuPaDrX_-248EgewIQKkp99Qm4Llng0cP-hJwdnDkPenQMAqWyPrMNlGuI50pLGbkvGykIlCL_yj7vdWiB2MQ1yYgUvNhZwfXzgZ7k3LRRHbOCNwBpumsI2Uq2Ba5tmWLu58OxhDRk_jBSiRj-CmfnBZNrueQOMIzyalFS5d-SblkW2XOXEgs5rv6xLVU06UsIv8zprSRiSxjyvUkzTwRH3nJm_tJ20gVg"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">142</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Neon Racer</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦20 - ₦500</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Colorful abstract light particles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNzDsnwPAbLt9fOgfs41fR4KsznqvZysQ_B3CSh1-WX0b3A_4R_qXDze_6iqZpMOCV76t_DanC7SbdJeKdDCde0K8KyDjIRXs9KHssuny7WptUUdjdur_EL2_nzWq3uu0IimcTpbpIXmJajsAqlIN3QtNpm3wxCoGBDsqmxVs_XMHUd4Pu3bUDa9pq8sjLBSurHmnQEd4tohFtPcBmbaDpmDtm5_O7eIY9gfK6r0ngoiP4b2X9FH_ZBS33ZBPonNTZrYQ2xlRoVLD"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">89</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Card Clash Pro</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦50 - ₦1k</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <!-- Repeated placeholders for visual density -->
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Retro computer and electronic hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNtdnUEtMSeufCrZykUOHRcrb72GgQXponMt15rO_nmsB-sTuyXoPczh0STSxi_byxf7diugFLJje63XUgO5zSWTQ9h1UrsNRK_85s2SW2DIR4mPx9k1W8hlGQqKTA0X5kMMTw3RLrffjmkouD6UUHUqt4CBxC4ps3zQTpxkH567DL1WIrjRkkOYTJNRrrJ2LWCbCQBs0EOgqPCcbcoHRaXiU_AsJy1cC4r5jalDHnkJS7WwCN1qH3XT20yk-4f6ovCzQWhy4ZUoSQ"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">312</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Bit Hunter</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦100 - ₦2k</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Colorful abstract flowing energy liquid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpRHF3kbpNvKyHZpYKAmLDh7ekSBwh7Yb2_iC0qXjtQKfw0SxSHf6MLRYMSXYHySkarvntaOzRm3PFe7TR50d_281oyf3Eyi9BpPdswjiQKjP6KsZ1WNrN6OMUKQ6s5-8GJHdkWb5SSgK62kiiIlWt4ZCAdxU33M4bNpPmQ5oTYB2smK-m_ULhqvMJYIuoaMQKXlrEh_LtJVrqBjer_J1g7_Ytm7J1_m3qlvK1DOwbYgZlO0PUaIsA8TgChrymY61WIWK4sFJ-nS-L"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">54</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Speed Tap</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦20 - ₦200</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Abstract structural geometric white pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT8GoPt7E1xjxr-ie1d7Iz7ikuJjPPAuZTuNG8iQ-uGTKimWWK2yDlCHYEtkiXLuhEgivsUM843SZlpCnpc5FJkb98QO96UUe_9-Kc8I9sRM_crsW_OfVSYo1_06etZNymQ63VNZR-pUWqR_F5Yiql0d-ouwnWWqe6Jtpk4ee6yQXU9U-sGIhiWzJK_jDcp0gCRThu_Xe1SAGevp57yoe0iNrvZ3YBuv0mu0U-Slphj-VUb5V9woj34f6CRFWQ_wSWwwo6urz8OW2_"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
// <span class="text-[10px] font-bold">OFF</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Ludo Royale</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦50 - ₦500</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Team of players in gaming" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN0lHjvLUbfD940PG4yrtYbsQBS-htGIYsbq2mfVTDqTCR4F_jBb370xULIVi3YSHzrftIuMXV4_rEpa6ILvsXHi2HKmzhG8WirLzF77neQjJGZMUytv0u2mIDbc6zjYqTgZwnPve-vOgYq2XBgIwC5WKHIk-Wog-HiFGosblxt0CNirWXzeUH0d9bktl4PAX9nLTGlYz9Y4VckAGuBr8FlT8tLX4BPBQxWBKeXEWPX1h-z8B8-5FtF8wwZ9aCTG8MpFXMJYIiYrTb"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">201</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Squad Tactics</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦500 - ₦5k</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Abstract digital mesh pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONRWFoN4_bAmHuiNGqseXy8miG_bChcVRQQoS-AUa8FXWbNXYKElWU0N4XS64qkLyZKZxgGgImTbat0F-xvez2NdoEdpEOXjBxw-7CNwplU2Y4YnbX-09i6mVcZB8akrDI8YQsgqHkUquk6zRXE45o_ZT05cnHYJ5G6DKOtvXrLeuIRoGJQWLw1sP3KmSaf16hVPZgimlKutjgDlG9mj5GBlRdbB2ui5J8kod5qt45imkM5IcNzPNtl9vtsjcM6Raze9twtW11kz7"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">12</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Grid Lock</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦20 - ₦100</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Space galaxy stars background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAErB0HdltUE8kwB31jFtWG5m-Xfs-BQL1c8fI7JkWoJTBuMQbhrldadNkFhfvTvClpoeeSaaL3Iznu4kvcHFRNzZMLGaSk7LJuHMfB5YE8HX1mTdvMUB9W0ZQi_-f7RwT1dpArdPoRIg7WXJ7FSMoe-NvNjIsXwgrXAdNUSJb38oNBP3T71rPVMTeQzySAZDiKerENjMed5-vQXfPXEaKgZ7oG_D3alijovI5cLOEPy24WYCKZNyuIG2S74TSIgNhf8PP6Q3Z-deG-"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">45</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Star Voyager</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦200 - ₦1k</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Abstract gaming controller neon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkXKxAC-qfT7GMDHOXBo_Q4AYmDewMZHiYdCf_doYcqZO83ujqRpLTgTb48tpYcC3JsDvAH9Xm0rU3Ac2kqUmzJu1AEWyFEIUTZvwj1LUNryy6277FAlE5I8W4MWr404_UrsDi_60qtm6ep61-ECedQwTbo3FkjuccBUbv-4B48_MYiAyTF4V_YNHSsgFz8ZO-oGlP8vrePbwUdep1Cd7kpwhkEa3zk72834zI_xrEYgfrP5aTMfySZ2ItFMBCA5ZukZO978ELNVEO"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">662</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Arena Pro</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦100 - ₦5k</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// <div class="glass rounded-lg overflow-hidden group hover:-translate-y-1 transition-all neon-border">
// <div class="h-32 bg-slate-800 relative">
// <img alt="Game" class="w-full h-full object-cover" data-alt="Modern tech code on screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVHPWOV1jPkbOap42NNiX5os0cHtcMIVijaNXZ8y5U3Q8_2v9VWbJ94G_EY22AXh7t5zO9KPY1Kra89mlyP9HM6LxWJFt6PyyeVKqLvHacEqlNpPdC1_z6og5VcyjI97mSNQO0WU1ol1KPewVDqTP2cuXqOPNYWXs7bqbLKFBcNqkT5u98Jnl7RbqvYy-qjRmeZxsPPo-fu_jaUJPDP3h3vBfpFCQ2PBp066SNnf2xv0lvPQYWDQOvBDSbicDjpi9aoOyu2ET4Lph"/>
// <div class="absolute top-2 left-2 bg-background-dark/60 backdrop-blur rounded px-2 py-1 flex items-center gap-1">
// <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// <span class="text-[10px] font-bold">18</span>
// </div>
// </div>
// <div class="p-3">
// <h4 class="font-bold text-sm mb-2 truncate">Code Breaker</h4>
// <div class="flex items-center justify-between mb-3">
// <span class="text-[10px] text-slate-500">Stakes</span>
// <span class="text-xs font-bold text-primary">₦50 - ₦200</span>
// </div>
// <button class="w-full py-2 bg-white/5 border border-white/10 rounded group-hover:bg-primary group-hover:border-primary transition-all text-xs font-bold">PLAY</button>
// </div>
// </div>
// </div>
// </section>
// <!-- Live Tournaments -->
// <section class="mb-12">
// <div class="flex items-center justify-between mb-6">
// <h2 class="text-xl font-display font-bold">Live Tournaments</h2>
// </div>
// <div class="space-y-4">
// <div class="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-primary">
// <div class="flex-1 flex items-center gap-4">
// <div class="w-16 h-16 rounded bg-primary/20 flex items-center justify-center">
// <span class="material-icons text-primary text-3xl">sports_esports</span>
// </div>
// <div>
// <h3 class="font-bold text-lg">Grand Master Chess Series</h3>
// <p class="text-slate-400 text-sm">Prize Pool: <span class="text-white font-bold">₦250,000.00</span></p>
// </div>
// </div>
// <div class="flex items-center gap-8">
// <div class="text-center">
// <div class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Starts In</div>
// <div class="font-display font-bold text-xl text-primary">00:45:12</div>
// </div>
// <div class="text-center">
// <div class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Entries</div>
// <div class="font-display font-bold text-xl">124 / 256</div>
// </div>
// <button class="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">ENTER ROOM</button>
// </div>
// </div>
// <div class="glass rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 border-l-4 border-slate-700">
// <div class="flex-1 flex items-center gap-4">
// <div class="w-16 h-16 rounded bg-slate-800 flex items-center justify-center">
// <span class="material-icons text-slate-600 text-3xl">directions_run</span>
// </div>
// <div>
// <h3 class="font-bold text-lg">Hyper Racer Sprint</h3>
// <p class="text-slate-400 text-sm">Prize Pool: <span class="text-white font-bold">₦100,000.00</span></p>
// </div>
// </div>
// <div class="flex items-center gap-8">
// <div class="text-center">
// <div class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Starts In</div>
// <div class="font-display font-bold text-xl text-primary">02:15:00</div>
// </div>
// <div class="text-center">
// <div class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Entries</div>
// <div class="font-display font-bold text-xl">45 / 100</div>
// </div>
// <button class="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold border border-white/10">ENTER ROOM</button>
// </div>
// </div>
// </div>
// </section>
// <!-- How it works -->
// <section class="bg-primary/5 rounded-xl border border-primary/20 p-8 mb-12">
// <h2 class="text-2xl font-display font-bold text-center mb-10">Win Real Cash in 3 Simple Steps</h2>
// <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
// <div class="text-center space-y-3">
// <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
// <span class="material-icons text-white text-3xl">login</span>
// </div>
// <h3 class="font-bold text-lg">1. Join a Room</h3>
// <p class="text-slate-400 text-sm">Choose from dozens of live skill-based games with entry fees starting at just ₦20.</p>
// </div>
// <div class="text-center space-y-3">
// <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
// <span class="material-icons text-white text-3xl">sports_esports</span>
// </div>
// <h3 class="font-bold text-lg">2. Compete &amp; Win</h3>
// <p class="text-slate-400 text-sm">Test your skills against real players in real-time matches and move up the leaderboard.</p>
// </div>
// <div class="text-center space-y-3">
// <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
// <span class="material-icons text-white text-3xl">payments</span>
// </div>
// <h3 class="font-bold text-lg">3. Instant Payout</h3>
// <p class="text-slate-400 text-sm">Winnings are instantly credited to your wallet. Withdraw anytime to your bank account.</p>
// </div>
// </div>
// </section>
// <!-- About Section -->
// <section class="mb-12 text-slate-500 text-sm border-t border-white/5 pt-8">
// <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
// <div>
// <h3 class="text-white font-display font-bold mb-4">About Nexus Play</h3>
// <p class="mb-4 leading-relaxed">
//                             Nexus Play is the world's leading real-time desktop gaming platform for high-stakes, skill-based competition. We leverage low-latency technology to ensure fair play across a massive library of games.
//                         </p>
// <p>
//                             Licensed and regulated, we provide a secure environment for gamers to monetize their skills and connect with a global community of elite competitors.
//                         </p>
// </div>
// <div class="grid grid-cols-2 gap-4">
// <div class="space-y-2">
// <h4 class="text-white font-bold mb-2">Platform</h4>
// <a class="block hover:text-primary" href="#">Games Library</a>
// <a class="block hover:text-primary" href="#">Tournament Rules</a>
// <a class="block hover:text-primary" href="#">Fair Play Policy</a>
// </div>
// <div class="space-y-2">
// <h4 class="text-white font-bold mb-2">Support</h4>
// <a class="block hover:text-primary" href="#">Help Center</a>
// <a class="block hover:text-primary" href="#">Contact Us</a>
// <a class="block hover:text-primary" href="#">Responsible Gaming</a>
// </div>
// </div>
// </div>
// </section>
// <!-- Footer -->
// <footer class="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/5 gap-4">
// <div class="flex items-center gap-2 grayscale opacity-50">
// <span class="material-icons text-sm">bolt</span>
// <span class="text-xs font-display font-bold">NEXUS PLAY © 2024</span>
// </div>
// <div class="flex gap-6 text-xs text-slate-500">
// <a class="hover:text-white" href="#">Privacy Policy</a>
// <a class="hover:text-white" href="#">Terms of Service</a>
// <a class="hover:text-white" href="#">Cookie Policy</a>
// </div>
// <div class="flex gap-4">
// <a class="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors" href="#">
// <img alt="Social" class="w-4 h-4" data-alt="Social media icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZezRD50OdG83D0ZTxWTpOHrXmrW8gpHibOynN1AyRNo0Dh-M6iaZ9W3sklYqHvneJgdb3MuQ-Ov9iXjZc9rbgxneUBmSAOor25JxvD-zLrzLwHm_rWVRxG8Q8INu_4Kb5TPXTzBRKZQB94cSMFsV2d8f6EnSeLL8aEcckcoJyUpp8FENsS1_JFdwu0ISQL4yEwKTzTjNq0aZ3KmeUoWP38m5K-VmJ00GdPu8SelQW5fyqX3RzCNtIWGrTrd9I77jwFu1ZM1kQ66h"/>
// </a>
// <a class="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors" href="#">
// <img alt="Social" class="w-4 h-4" data-alt="Social media icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGPzsiOsNQUArbdzoMw_gTia8H3q0im2JmZBC9rBQ47erDUeNJGzaWhrB86ueJcE19joXMpcMqZEr3Wv3MDygVMDXi6IQqdYb1Nxp1Llc7O20QrVwSXl2cuDg4nJfU1QUR3V9RI3h5MaON7iiTZoDstwzYNKe_HgWiuRSsCgsTYexjFS8d4LXJ2ppUy_QVBuTP2dXcMkoOkV7SCxn23lInUHp36pfhhkLou4ZZX74QaTQRuMYnyL6rzvbJpnUVym5PJ1LKiW2Lsmz"/>
// </a>
// <a class="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors" href="#">
// <img alt="Social" class="w-4 h-4" data-alt="Social media icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfek0Zg_Mmz01jMmXKiQYo8FanrNB_IC05en6ugn14DGLpRj_2MsCwZhpftZT-NzllWdU07_GGPN05pbmp_dUaJ2mZdBPiGtVVMXWSAOZvRDqo_L4275RHt5pwUCzt3B0lCKVwDStcRXssIJktVrKDPsdfdgDfYJPHMA8tH92E-Wz_Bd75hQ1EvKJUpUS1mEMCggccD_qgE_AtsKSo_4Bt0Qvl7TxzC8SwWojpYAyUE0w7uRfJHtga5NSJ7KkvH9mDwOGfeVeKEq2"/>
// </a>
// </div>
// </footer>
// </main>
// </div>
// </body></html>
