<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nexus Play | Competitive Gaming</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2463eb",
                        "background-light": "#f6f6f8",
                        "background-dark": "#111621",
                        "accent-purple": "#8b5cf6",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .glass {
            background: rgba(17, 22, 33, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neo-glow {
            box-shadow: 0 0 15px rgba(36, 99, 235, 0.4);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        body {
            background-color: #020617;
        }
    </style>
</head>
<body class="font-display text-slate-200 min-h-screen">
<!-- Global Header -->
<header class="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
<div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div class="flex items-center gap-10">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons text-white">bolt</span>
</div>
<span class="text-xl font-bold tracking-tighter text-white uppercase">Nexus Play</span>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-primary hover:text-primary/80" href="#">Games</a>
<a class="text-sm font-medium text-slate-400 hover:text-white" href="#">Tournaments</a>
<a class="text-sm font-medium text-slate-400 hover:text-white" href="#">Leaderboards</a>
<a class="text-sm font-medium text-slate-400 hover:text-white" href="#">Support</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
<span class="text-sm font-bold text-white">₦5,200</span>
<button class="bg-primary hover:bg-primary/90 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">Top Up</button>
</div>
<div class="flex items-center gap-4">
<button class="relative text-slate-400 hover:text-white">
<span class="material-icons">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
</button>
<div class="flex items-center gap-3 pl-4 border-l border-white/10">
<div class="text-right">
<p class="text-sm font-bold text-white leading-tight">Alex_Pro</p>
<p class="text-[10px] text-primary font-medium uppercase tracking-widest">Platinum Tier</p>
</div>
<img class="w-10 h-10 rounded-lg border border-primary/50" data-alt="User profile avatar Alex Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIacWqQRJ6HmYcy7ZxgN_x8zT_2oT4IECcwjd2gQVqnNJB6YPlMGJ80Sv4RXR6mzV5LOEMAs4jU7djWL49ZzTG8Y3OaRwGCSvasNCyS5dHMTiB3qx_DTN3oTIhrr0A-vNny0MsCSF6V2eqN-plodny2PZ19Ftx6soiLxR6_IcCcsgUPW0dAGLeHiCMdSKz6wlISpgpAQIt0z_ipXhn1DPmaUqARiVu2RrepdIIttbs5g5enphr_hLqp5ifeze_KSLD79f9TGcP4GqG"/>
</div>
</div>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-6 py-8 grid grid-cols-12 gap-6">
<!-- Left Column: User Context -->
<aside class="col-span-3 space-y-6">
<div class="glass rounded-lg p-5">
<div class="flex justify-between items-start mb-6">
<div>
<h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Rank</h3>
<p class="text-2xl font-bold text-white">Platinum IV</p>
</div>
<span class="material-icons text-primary text-3xl">military_tech</span>
</div>
<div class="space-y-4">
<div>
<div class="flex justify-between text-xs mb-2">
<span class="text-slate-400">XP Progress</span>
<span class="text-white">850 / 1000</span>
</div>
<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 85%"></div>
</div>
</div>
<div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div>
<p class="text-[10px] text-slate-500 uppercase mb-1">Games Today</p>
<p class="text-lg font-bold text-white">12</p>
</div>
<div>
<p class="text-[10px] text-slate-500 uppercase mb-1">Win Rate</p>
<p class="text-lg font-bold text-green-400">68%</p>
</div>
</div>
</div>
</div>
<div class="glass rounded-lg p-5">
<h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Live Network</h3>
<div class="flex items-center gap-3 mb-4">
<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<p class="text-sm text-slate-300"><span class="text-white font-bold">1.2k</span> Players Online</p>
</div>
<div class="space-y-3">
<div class="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div class="w-8 h-8 rounded bg-accent-purple/20 flex items-center justify-center">
<span class="material-icons text-accent-purple text-sm">groups</span>
</div>
<div>
<p class="text-xs font-bold text-white">Global Event</p>
<p class="text-[10px] text-slate-400">Starts in 45m</p>
</div>
</div>
</div>
</div>
<div class="rounded-lg overflow-hidden relative group h-48">
<img class="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Gaming tournament abstract background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-5TTbTzI1iYQUVos62uGZedx1OTyphRv7kcA9ED-3JrsnOL0qREvLOlUm_p_a_rGRQeHBmNZcD280eKXukp0W-yishbJ35QDm34_X0Lj6yo5E-nB2ru3QUMHJhQu88iEic99eNbJ6FRLBD22pBRsUziRNXjbs7TutxdewASBzaBxHUqDAP6DqzdjjeEpnkbTMv8GkLvUGops-5JAuX7u2ZWVn2N_Ec32TMoJ3jXI-L9NzZE1c2dffd17DmJNmHPAmUfa5SgaLNzqV"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
<div class="absolute bottom-4 left-4 right-4">
<span class="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded text-white mb-2 inline-block uppercase">Exclusive</span>
<h4 class="text-white font-bold leading-tight">Pro Member Benefits unlocked.</h4>
</div>
</div>
</aside>
<!-- Center Column: Main Action -->
<section class="col-span-6 space-y-6">
<!-- Hero Section -->
<div class="relative rounded-xl overflow-hidden bg-primary/10 border border-primary/20 p-8 min-h-[320px] flex flex-col justify-center">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
<div class="relative z-10">
<h1 class="text-5xl font-bold text-white mb-2 leading-tight">Compete. Climb.<br/><span class="text-primary">Win Tonight.</span></h1>
<div class="flex items-center gap-3 mb-8">
<p class="text-slate-400 text-sm">Current Prize Pool:</p>
<div class="bg-white/10 px-3 py-1 rounded border border-white/10">
<span class="text-xl font-bold text-white tracking-widest">₦150,000.00</span>
</div>
</div>
<div class="flex items-end gap-6">
<div class="flex-1 max-w-[240px]">
<label class="text-[10px] text-slate-400 uppercase font-bold mb-3 block">Select Your Stake</label>
<div class="flex justify-between items-center bg-background-dark/50 rounded-lg p-1 border border-white/10">
<button class="w-10 h-10 rounded bg-white/5 text-white hover:bg-white/10">₦10</button>
<button class="w-10 h-10 rounded bg-primary text-white neo-glow font-bold">₦25</button>
<button class="w-10 h-10 rounded bg-white/5 text-white hover:bg-white/10">₦50</button>
<button class="w-10 h-10 rounded bg-white/5 text-white hover:bg-white/10">Max</button>
</div>
</div>
<button class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg neo-glow transition-all active:scale-95 flex items-center justify-center gap-2">
                            PLAY NOW <span class="material-icons">play_arrow</span>
</button>
</div>
</div>
</div>
<!-- Winners Ticker -->
<div class="glass py-3 px-4 rounded-lg overflow-hidden flex items-center gap-6 whitespace-nowrap">
<span class="text-[10px] font-bold text-primary uppercase tracking-widest border-r border-white/10 pr-6">Recent Winners</span>
<div class="flex items-center gap-10">
<div class="flex items-center gap-2">
<span class="text-xs text-white">GhostRider won ₦12,400</span>
<span class="text-[10px] text-slate-500">2m ago</span>
</div>
<div class="flex items-center gap-2">
<span class="text-xs text-white">Queen_B won ₦8,000</span>
<span class="text-[10px] text-slate-500">5m ago</span>
</div>
<div class="flex items-center gap-2">
<span class="text-xs text-white">Zenith won ₦25,000</span>
<span class="text-[10px] text-slate-500">8m ago</span>
</div>
</div>
</div>
<!-- Games Section -->
<div class="grid grid-cols-2 gap-4">
<div class="glass group cursor-pointer overflow-hidden rounded-lg">
<div class="h-32 relative">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Street Striker game action scene" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwbdUxfO4yRs83x9Sky-ioj-OtTlnxSgGgs3GGlkyjLGhLcxueiKKWuWKP0gGeoA7ez6AUdnxF0yfEvh9nvNzKbNrNwGU6djsTxdF1tLR55FzVjDS0Irp_2ihlNAVSk660jmFUdJkmJnBNP_ipzEdWlU09KekO2E9N04ykDOqDWwIjW3JjvPLiVgK6NN28JQv4MLKfPOUrZTkEfk3VjZl5aCOkJa_AvAJ_4Zs9-ZKRvpzSMBN8INc5CEdB_Su5aZLt9cudqd1Alfa9"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
<div class="absolute bottom-2 left-3 flex items-center gap-2">
<div class="w-2 h-2 bg-green-500 rounded-full"></div>
<span class="text-[10px] text-white font-bold">428 Playing</span>
</div>
</div>
<div class="p-4 flex justify-between items-center">
<div>
<h4 class="text-white font-bold">Street Striker</h4>
<p class="text-[10px] text-slate-400">Tactical Combat</p>
</div>
<span class="material-icons text-slate-500 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
</div>
<div class="glass group cursor-pointer overflow-hidden rounded-lg">
<div class="h-32 relative">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Speed Racer racing game concept" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADLbEmfP6fCeN0EmMG_BDzuDSAOnp9dYPYQPpLq3Hrs1Nyhyxtx8w18fTWd2mUZlTTmFAc3WBo7OtDdtQVhgYyepf__nunqo5vBaHjiw_EnbrVTc3tehQ1oifmiOkl5wxPyD3hW28z-b-m6oTYeRMCygIt81Naaz8XPFCgW0M-Qr9bn9D5Z581pJeok5e5j--LTyAYwGMQtQ1cAmNragDEMHR8zagKiKVXYzWedyM_o4JDx_n5l1nlihqL0YBnpgooWCb1GszRFwmJ"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
<div class="absolute bottom-2 left-3 flex items-center gap-2">
<div class="w-2 h-2 bg-green-500 rounded-full"></div>
<span class="text-[10px] text-white font-bold">184 Playing</span>
</div>
</div>
<div class="p-4 flex justify-between items-center">
<div>
<h4 class="text-white font-bold">Speed Racer</h4>
<p class="text-[10px] text-slate-400">High Octane</p>
</div>
<span class="material-icons text-slate-500 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
</div>
</div>
<!-- Leaderboard -->
<div class="glass rounded-lg p-6">
<div class="flex justify-between items-center mb-6">
<h3 class="font-bold text-white flex items-center gap-2">
<span class="material-icons text-primary">emoji_events</span>
                        Daily Leaderboard
                    </h3>
<button class="text-[10px] text-slate-400 hover:text-white uppercase font-bold tracking-widest">View All</button>
</div>
<div class="space-y-4">
<!-- Rank 1 -->
<div class="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-yellow-400 text-lg">1</div>
<img class="w-8 h-8 rounded border border-yellow-400/50" data-alt="User avatar for King_Gamer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWPnpgOOLYvFnn9kXaiytNoom5xOo7FQIwClLSQ1KpHWjHh0X6TGyI4grOJBf_7kMvCnfWLyzXMIPOdNNeqyAsNrcU8tfFtIYYYQWpSHIRAt6brPdZbfCZtX12kG-Rw9atc_psbj8h7-gHO_RY98NHCCgTue3gLmgVYi11stkFwzF0EebVUv6jS_sNYx-UOYNIB-2PyWtZ5kv8JPLUpjrAsCmWV3Jm8vupgTllr_piofm6KBcY_fRfOvJpVrKPDEE0N09-ZlcTMzeG"/>
<div>
<p class="text-sm font-bold text-white leading-tight">King_Gamer</p>
<p class="text-[10px] text-slate-400">14,200 Points</p>
</div>
</div>
<span class="text-sm font-bold text-primary">₦25,000 Prize</span>
</div>
<!-- Rank 2 -->
<div class="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-slate-300 text-lg">2</div>
<img class="w-8 h-8 rounded border border-white/20" data-alt="User avatar for NeonStriker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeiGDC4BqUZAvhiXvv5PztiAY_1L7Anf08YQtZpqA3OyKRxJOh-861Suv5_OJN9hopypJxqSTDWks2eF7grApfWXDQEPAPqOQkC6-27CwAacnSK7VHIEza8Xu-PwYGaMs5eTW9V3kwkUSVaKWIjDEIiLGh4_IORTTNmSaGI5ypykzm-MYAtoB33cTxB3K_-nvDvCna5ceFwf1AvQ_6zTRwAIqh63w9kYrkT0B6xU2ZZIN1X5NZ4hPGIsGpZL-3VEi-yyf40tNwfFRB"/>
<div>
<p class="text-sm font-bold text-white leading-tight">NeonStriker</p>
<p class="text-[10px] text-slate-400">12,850 Points</p>
</div>
</div>
<span class="text-sm font-bold text-slate-400">₦15,000 Prize</span>
</div>
<!-- Rank 3 -->
<div class="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-orange-400 text-lg">3</div>
<img class="w-8 h-8 rounded border border-white/20" data-alt="User avatar for Shadow_X" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGFTybzGklt0S67STyNOFLLhLJXKMIOsUzByCYqipLYwUWT1AcZeZ4Uysd7W_C5jVXCdNjtySzEk82kR-_k_6St5d7uvfkOwlai0lsRQFPNVdkYgTLoCzrV5bPhsfPcYgnkI1y-V7msz7yr-QZZXVlrFNexPCOcieZMahhsGi5R6wzywpMA4iI2__Jc8ReJOzcGNQGw3aGBhLevg26TAEc-hHLHecfrogcbELf9B3UMFEX89nsMEEot2kX-d4zapooF3-qc6PVuh5P"/>
<div>
<p class="text-sm font-bold text-white leading-tight">Shadow_X</p>
<p class="text-[10px] text-slate-400">11,200 Points</p>
</div>
</div>
<span class="text-sm font-bold text-slate-400">₦7,500 Prize</span>
</div>
</div>
</div>
<!-- Event Banner -->
<div class="relative h-32 rounded-lg overflow-hidden bg-gradient-to-r from-accent-purple to-primary p-6 flex items-center">
<div class="relative z-10">
<h3 class="text-xl font-bold text-white mb-1">Mega Night Challenge</h3>
<p class="text-white/80 text-sm">Triple XP and 2x Payouts for the next 4 hours!</p>
</div>
<div class="ml-auto relative z-10">
<button class="bg-white text-primary font-bold px-6 py-2 rounded-lg hover:bg-slate-100">JOIN NOW</button>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-30">
<span class="material-icons text-[150px] rotate-12 -mr-10">sports_esports</span>
</div>
</div>
<!-- How it Works -->
<div class="grid grid-cols-3 gap-6 pt-6">
<div class="text-center">
<div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
<span class="material-icons text-primary">account_balance_wallet</span>
</div>
<h5 class="text-xs font-bold text-white mb-1">1. Deposit</h5>
<p class="text-[10px] text-slate-500">Fund your wallet with secure payment methods.</p>
</div>
<div class="text-center">
<div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
<span class="material-icons text-primary">videogame_asset</span>
</div>
<h5 class="text-xs font-bold text-white mb-1">2. Play</h5>
<p class="text-[10px] text-slate-500">Pick a game and set your stakes against others.</p>
</div>
<div class="text-center">
<div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
<span class="material-icons text-primary">payments</span>
</div>
<h5 class="text-xs font-bold text-white mb-1">3. Withdraw</h5>
<p class="text-[10px] text-slate-500">Instant withdrawals for all your winnings.</p>
</div>
</div>
<footer class="pt-8 border-t border-white/5 text-slate-500">
<h4 class="text-xs font-bold text-white mb-4 uppercase tracking-widest">About Nexus Play</h4>
<p class="text-xs leading-relaxed max-w-2xl">
                    Nexus Play is the world's leading skill-based competition platform. We believe in high-stakes, fair play environments where the best players climb the ranks and earn real rewards for their mastery. Our platform is built on transparency, security, and instantaneous rewards.
                </p>
</footer>
</section>
<!-- Right Column: Live Activity -->
<aside class="col-span-3 space-y-6">
<!-- Payout Countdown -->
<div class="bg-white/5 rounded-lg border border-red-500/30 p-5 text-center">
<p class="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-3">Next Daily Payout</p>
<div class="flex justify-center gap-3">
<div class="text-center">
<p class="text-2xl font-bold text-white">04</p>
<p class="text-[8px] text-slate-500 uppercase">HRS</p>
</div>
<span class="text-2xl font-bold text-white">:</span>
<div class="text-center">
<p class="text-2xl font-bold text-white">18</p>
<p class="text-[8px] text-slate-500 uppercase">MIN</p>
</div>
<span class="text-2xl font-bold text-white">:</span>
<div class="text-center">
<p class="text-2xl font-bold text-white">32</p>
<p class="text-[8px] text-slate-500 uppercase">SEC</p>
</div>
</div>
</div>
<!-- Notification Feed -->
<div class="glass rounded-lg overflow-hidden flex flex-col h-[400px]">
<div class="p-4 border-b border-white/5 flex items-center justify-between">
<h3 class="text-xs font-bold text-white uppercase tracking-widest">Activity Feed</h3>
<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
<div class="flex gap-3">
<div class="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded flex items-center justify-center">
<span class="material-icons text-red-500 text-sm">warning</span>
</div>
<div>
<p class="text-xs text-white"><span class="font-bold">User123</span> overtook you in global ranking!</p>
<p class="text-[10px] text-slate-500 mt-1">Just now</p>
</div>
</div>
<div class="flex gap-3">
<div class="flex-shrink-0 w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
<span class="material-icons text-primary text-sm">trending_up</span>
</div>
<div>
<p class="text-xs text-white">New high score achieved on <span class="font-bold">Speed Racer</span>.</p>
<p class="text-[10px] text-slate-500 mt-1">12m ago</p>
</div>
</div>
<div class="flex gap-3">
<div class="flex-shrink-0 w-8 h-8 bg-green-500/10 rounded flex items-center justify-center">
<span class="material-icons text-green-500 text-sm">check_circle</span>
</div>
<div>
<p class="text-xs text-white">Stake of <span class="font-bold">₦50</span> confirmed for next match.</p>
<p class="text-[10px] text-slate-500 mt-1">28m ago</p>
</div>
</div>
<div class="flex gap-3">
<div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded flex items-center justify-center">
<span class="material-icons text-white text-sm">person_add</span>
</div>
<div>
<p class="text-xs text-white"><span class="font-bold">Maximus</span> followed your career.</p>
<p class="text-[10px] text-slate-500 mt-1">1h ago</p>
</div>
</div>
</div>
</div>
<!-- Global Stats -->
<div class="glass rounded-lg p-5">
<h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Network Stats</h3>
<div class="space-y-4">
<div class="flex justify-between items-center">
<span class="text-xs text-slate-400">Total Players</span>
<span class="text-sm font-bold text-white">4,102</span>
</div>
<div class="flex justify-between items-center">
<span class="text-xs text-slate-400">Matches (24h)</span>
<span class="text-sm font-bold text-white">12,854</span>
</div>
<div class="flex justify-between items-center">
<span class="text-xs text-slate-400">Paid Out Today</span>
<span class="text-sm font-bold text-green-400">₦1.2M</span>
</div>
</div>
<div class="mt-6 pt-4 border-t border-white/5">
<div class="bg-primary/5 rounded-lg p-3">
<div class="flex items-center gap-2 mb-2">
<span class="material-icons text-primary text-sm">info</span>
<span class="text-[10px] font-bold text-white uppercase tracking-wider">Server Status</span>
</div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 bg-green-500 rounded-full"></div>
<span class="text-[10px] text-slate-300">Operational - 12ms ping</span>
</div>
</div>
</div>
</div>
<!-- Support/Action -->
<button class="w-full glass hover:bg-white/5 text-white p-4 rounded-lg flex items-center justify-between group">
<div class="flex items-center gap-3">
<span class="material-icons text-slate-400 group-hover:text-primary">help_outline</span>
<span class="text-xs font-bold">Player Support</span>
</div>
<span class="material-icons text-slate-600 group-hover:text-white">chevron_right</span>
</button>
</aside>
</main>
<!-- Decorative Elements -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden opacity-20">
<div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
<div class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent-purple/20 blur-[120px] rounded-full"></div>
</div>
</body></html>