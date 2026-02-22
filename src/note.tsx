<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PlayPeak | Competitive Games Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2463eb",
                        "secondary": "#7C3AED",
                        "background-light": "#f6f6f8",
                        "background-dark": "#020617",
                        "surface-dark": "#0f172a",
                        "glass": "rgba(15, 23, 42, 0.7)",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "body": ["Inter", "sans-serif"]
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
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neon-glow-blue {
            box-shadow: 0 0 15px rgba(36, 99, 235, 0.4);
        }
        .neon-glow-purple {
            box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-200 min-h-screen">
<!-- Global Header -->
<header class="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-3">
<div class="max-w-[1600px] mx-auto flex items-center justify-between">
<div class="flex items-center gap-12">
<div class="flex items-center gap-2">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow-blue">
<span class="material-icons text-white">sports_esports</span>
</div>
<span class="text-2xl font-display font-bold tracking-tight text-white">Play<span class="text-primary">Peak</span></span>
</div>
<nav class="hidden lg:flex items-center gap-8">
<a class="text-primary font-medium border-b-2 border-primary pb-1" href="#">Games</a>
<a class="text-slate-400 hover:text-white transition-colors" href="#">Tournaments</a>
<a class="text-slate-400 hover:text-white transition-colors" href="#">Leaderboards</a>
<a class="text-slate-400 hover:text-white transition-colors" href="#">Support</a>
</nav>
</div>
<div class="flex items-center gap-6">
<button class="relative text-slate-400 hover:text-white transition-colors p-2">
<span class="material-icons">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
</button>
<div class="flex items-center gap-4 pl-6 border-l border-white/10">
<div class="text-right">
<p class="text-sm font-display font-bold text-white">₦5,200</p>
<p class="text-[10px] text-slate-400 uppercase tracking-wider">Wallet Balance</p>
</div>
<div class="flex items-center gap-3">
<div class="text-right hidden sm:block">
<p class="text-sm font-semibold text-white">AlexVortex</p>
</div>
<img alt="Profile" class="w-10 h-10 rounded-full border-2 border-primary" data-alt="Professional gamer avatar with headset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLo6IKOQXKtrwTW4i__j49IyReRv6a-wNu2h2_DXTGSmyDFnuZdXkrLNJ0b1cTD3Fer2tW6QawgnwZF9jBV67P85pF0_SxuK_5kvMUDRP4Gn3O6Ko8z8W75-k-iM4CQdL7G_KFfKBDPTDvCdyibuSBllEmMHbiuhT85JtzGMd7teKVi8LS3xKTRLu9t7APZ4KifCfORrCQV6m8Hjq0bWCU62v53PnYyjyhFSE_sYaXA1LnvG3NpBdk0xi5OoENnlVCQn_ExuZxrc"/>
</div>
</div>
</div>
</div>
</header>
<div class="max-w-[1600px] mx-auto flex gap-6 p-6">
<!-- Left Column: Sticky Sidebar -->
<aside class="hidden xl:block w-72 shrink-0 space-y-6 sticky top-24 self-start h-[calc(100vh-120px)]">
<!-- Profile Card -->
<div class="glass-panel rounded-xl p-5 border-l-4 border-l-secondary">
<div class="flex items-center justify-between mb-4">
<span class="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Current Rank</span>
<span class="material-icons text-secondary text-sm">stars</span>
</div>
<div class="flex items-end gap-3 mb-4">
<h3 class="text-2xl font-display font-bold text-white">Elite III</h3>
<span class="text-slate-500 text-sm mb-1">2,450 RP</span>
</div>
<div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-3/4 shadow-[0_0_8px_rgba(124,58,237,0.6)]"></div>
</div>
</div>
<!-- Wallet & Actions -->
<div class="glass-panel rounded-xl p-5">
<div class="flex items-center justify-between mb-4">
<div>
<p class="text-slate-400 text-xs">Total Balance</p>
<p class="text-xl font-display font-bold text-white">₦5,200.00</p>
</div>
<button class="bg-primary hover:bg-blue-600 text-white p-2 rounded-lg transition-all neon-glow-blue">
<span class="material-icons">add</span>
</button>
</div>
<button class="w-full py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-all border border-white/10 uppercase tracking-widest">
                    Top Up Now
                </button>
</div>
<!-- Sidebar Navigation -->
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<span class="material-icons text-xl">dashboard</span>
<span class="font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 rounded-lg transition-all border-r-2 border-primary" href="#">
<span class="material-icons text-xl">sports_esports</span>
<span class="font-medium">All Games</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<span class="material-icons text-xl">history</span>
<span class="font-medium">Match History</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<span class="material-icons text-xl">account_balance_wallet</span>
<span class="font-medium">Transactions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<span class="material-icons text-xl">settings</span>
<span class="font-medium">Settings</span>
</a>
</nav>
<!-- Mini Stats -->
<div class="mt-auto p-4 bg-white/5 rounded-xl border border-white/5">
<div class="grid grid-cols-2 gap-4">
<div>
<p class="text-[10px] text-slate-500 uppercase">Games Today</p>
<p class="text-lg font-display font-bold text-white">12</p>
</div>
<div>
<p class="text-[10px] text-slate-500 uppercase">Active Now</p>
<p class="text-lg font-display font-bold text-primary">1.4k</p>
</div>
</div>
</div>
</aside>
<!-- Center Column: Main Content -->
<main class="flex-1 space-y-8 min-w-0">
<!-- Breadcrumbs & Header -->
<section>
<div class="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest">
<span>Home</span>
<span class="material-icons text-[10px]">chevron_right</span>
<span class="text-primary font-bold">Games</span>
</div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h1 class="text-4xl font-display font-bold text-white">Featured Games</h1>
<!-- Search & Filter Bar -->
<div class="flex items-center gap-3">
<div class="relative group">
<span class="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
<input class="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm w-full md:w-64 focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 transition-all outline-none" placeholder="Search games..." type="text"/>
</div>
<select class="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-primary outline-none text-slate-300">
<option>All Stakes</option>
<option>₦10 - ₦500</option>
<option>₦1k - ₦10k</option>
</select>
<button class="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 text-slate-400">
<span class="material-icons">filter_list</span>
</button>
</div>
</div>
</section>
<!-- Featured Games Slider -->
<section class="relative">
<div class="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
<div class="min-w-[400px] group cursor-pointer snap-start relative rounded-xl overflow-hidden aspect-[16/9] glass-panel transition-all hover:scale-[1.02] border-primary/20 hover:border-primary/60">
<img alt="Cyber Tactical" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" data-alt="Futuristic sci-fi tactical combat game" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1QtMVRqHWbluXzo4wseFnMXNfS3UzzXq0uPrVyC7mybMpBrDGLDl4lFplXpgp2GcD5e-4kDuRlLTjGW8CtzcbpupKkoux09i9EzsASnM-xky-DN1KcX_G55n9nE3nDavDDR-uuFEBlyEyt5zTtcG-DkZ7t-DPp07WA6AD6G0DYs6NWYHv4a9jpXhNKrein-z03D82ThpeBS0R4aghGgV-O5pujbmOQnHIAeBxtfkuaWnx0JPg2rLcXh-th14N74mPsyY5dvk2i0o"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6 w-full">
<div class="flex items-center gap-2 mb-2">
<span class="px-2 py-1 bg-primary text-[10px] font-bold rounded uppercase">Hot Now</span>
<span class="px-2 py-1 bg-white/20 backdrop-blur-md text-[10px] font-bold rounded uppercase">Action</span>
</div>
<h3 class="text-2xl font-display font-bold text-white mb-1">Cyber Tactical: Neo</h3>
<p class="text-slate-300 text-sm mb-4">Master the grid in this high-stakes strategy duel.</p>
<div class="flex items-center justify-between">
<span class="text-primary font-display font-bold">₦100 - ₦5,000</span>
<span class="text-slate-400 text-xs flex items-center gap-1"><span class="material-icons text-xs">person</span> 842 Playing</span>
</div>
</div>
</div>
<div class="min-w-[400px] group cursor-pointer snap-start relative rounded-xl overflow-hidden aspect-[16/9] glass-panel transition-all hover:scale-[1.02] border-secondary/20 hover:border-secondary/60">
<img alt="Starfall" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" data-alt="Deep space exploration and strategy game interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7VX5nQi1fidzhba0XDWJs_9422PUeWRYSddbgVIM3oiQTWbCLrFi__t2D8j3y2W5ZD2Rcxi86ynxMIk3GK8DklaY-a6ksnH-g6sHgdXJWKyS2m-7i7T73yBGbpI7yqVJrKoCzeuIDnNvI8weP_J0Z57T3mpH4U77wZfgfRs4_FOWinIHRgPcg4WXmEk0Q_QaK36zRT0J6vHdQx2nYINA71CxsOrEv_7Dd-2Ry_Jpa08SVBDc_4ihPsjo1F2-yXBYBO-mGyvEnmKg"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6 w-full">
<div class="flex items-center gap-2 mb-2">
<span class="px-2 py-1 bg-secondary text-[10px] font-bold rounded uppercase">New</span>
<span class="px-2 py-1 bg-white/20 backdrop-blur-md text-[10px] font-bold rounded uppercase">Arcade</span>
</div>
<h3 class="text-2xl font-display font-bold text-white mb-1">Starfall Velocity</h3>
<p class="text-slate-300 text-sm mb-4">Precision racing through the asteroid belts of Orion.</p>
<div class="flex items-center justify-between">
<span class="text-secondary font-display font-bold">₦50 - ₦1,000</span>
<span class="text-slate-400 text-xs flex items-center gap-1"><span class="material-icons text-xs">person</span> 315 Playing</span>
</div>
</div>
</div>
</div>
</section>
<!-- All Games Grid -->
<section>
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-display font-bold text-white flex items-center gap-2">
<span class="w-2 h-6 bg-primary rounded-full"></span>
                        All Games
                    </h2>
<div class="flex gap-2">
<button class="p-1 text-slate-400 hover:text-white"><span class="material-icons">grid_view</span></button>
<button class="p-1 text-slate-600 hover:text-white"><span class="material-icons">format_list_bulleted</span></button>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
<!-- Game Card Template x10 -->
<!-- Card 1 -->
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative">
<img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Competitive chess pieces with glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsUB0oet0by3KZK4hsF0GxqUJk0eaA5RxhhKE5xUGCv_iKf-_eiP-WlU5ra38WXJ8x132Pu9mSX8KLGUz7oU3l2YLIsibSUPnspJXQVQhAX4bkFNIQj-L3Ntbv1EHb1UBCS-KrmOxHBDHtR533bpHCH7dNkXmNQUKVldxsYlhU750wH39PsJ1eOx333stJZIzVjbL6wusaUc0z7kHVqHiAINs9pdXG6ubRAlMESBeyVDKT08belriAYzfd9MmPO3s4DQgZV83w7V0"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
<span class="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-primary">LIVE</span>
</div>
<div class="p-4">
<p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Puzzle</p>
<h4 class="font-display font-bold text-white mb-2 truncate">Neon Checkmate</h4>
<div class="flex items-center justify-between mb-4">
<div class="text-[11px]">
<p class="text-slate-400">Stakes</p>
<p class="text-white font-bold">₦20 - ₦500</p>
</div>
<div class="text-right text-[11px]">
<p class="text-slate-400">Players</p>
<p class="text-white font-bold">124</p>
</div>
</div>
<button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button>
</div>
</div>
<!-- Repeat for 9 more cards (Simplified versions) -->
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Vintage retro gaming console setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT8Xhbkf4ugJW9jGHiz5B3sgP2NqYe9OdnbbQMf8hyXuyQoJf5DO7afEm8QCMW7qbhblDmPubdXbLt5VBdkBfXaXNeKJoTgjMqxYMNp8IIps6c7C7QeGwcGoCFz30y56T4mnYKOJjOA0YEZ8HpNBh6j-LddLqZgRbR_iDHFPJE9H8BEtHiHMcECmDVh2jHTrj5pqBfvfK3l6vcMzet2tB9kFFxt5fHGcipi0QSzVFOAYllSZg1sHhXSfws4Jt6FepQG_GQo6ucjhs"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Arcade</p><h4 class="font-display font-bold text-white mb-2 truncate">Pixel Dash</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Close up of game controller with neon lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUnQjAA26-SL-H7s8mSEIR35C1WIt0EcTh1Egavtn_UhWs17cgyEtidT0Pl7SPImikF8b7QQbW4E3zox1_2TJToBGNJ4L68m6MK_ORAzgjz8vFCmfOsQsLPJ3OOW0XyZXYoD_mqs7IgIvqaVd3rr-Fb6Fjm1Fou4EaVBJU7OjAM5oXVA-H4uXw4L5YrcY6TvziLz2GWwSTQ6tDAmNbKDiqHRf33Wz_tYtjpdCva5PvfT5Z9Gyp9pN-TzK91Zehv6qgpWGE9kevNis"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Strategy</p><h4 class="font-display font-bold text-white mb-2 truncate">Empire Siege</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Cyberpunk city landscape background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKotl-QV8K-mcW5ov8EpOF8LKg4cKDDFj4ZFdflxBbhq4QkY47AZ28___PBKxJFJ-5-sgaTy73q8ULzNEKlz2VTnAYjE8kTX67ofXozvWCmUeqmdxJirS_I4eCIVwYavDcoPww_ep-d6r4ZiSGjOe98ZM-eldbyBn7Xbb_HTwzCePVaq831n7g8kNsyFg7mmvVNrZYCmvNdIP-tVZP-NVGAmQP07ZZM5-liOWLKy1k9wZi7NJKl6hPQl5aEbPNfRuugWMUY35jyj4"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Shooter</p><h4 class="font-display font-bold text-white mb-2 truncate">Ghost Protocol</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="High tech abstract geometric pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2kT7Lf-x7vEpQ-sHQLafDC5yI_IuHDpURmqy1SxtplW1gI5SzlYy3Mx4-MA4hdwe4mfUUcD9ljWKx0Kabl7PDI0UwUPXXdzOq4xdgvrIHHXScrFUKv5oUg_a9gF3_0YdiGjqYepJNY9-3VrdRM2Tt6yyEC8aL9Ek76Go3LAjwYzjljZhSPdbthuYd41SoZWvbOCSRkaosdtENEGs5-XH2D0lywGcTb0N9HrFg-Gdn6IkcHBeQbVpapwY8mPUOmOQOfpfVh6PK3k"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Cards</p><h4 class="font-display font-bold text-white mb-2 truncate">Royal Poker</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<!-- Cards continued -->
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Neon racing car silhouette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvfoH1zeA4X7z3x-6F3WnR8FxCVJRyOtkYmd8BA8R9ZW-5xk26qAN84MTRbl5CcJnPNalj2ho2x_a_mJ5UtwsfepnnmgVMfvaDeJYFLqrtiS2cXG2JvqdWWdCB6pclCZx9DdylPG2PsnkL0DgFGHOfFfMjtFs4TVNYmDWZtQlMYKEF1SNM02VvHQ-BiJHhUsc-UVaHkCi76oZvIBNxYxjAkb7nJksCoSD2MvG99IhqIPi3PX4Kuc7qEZrheAV2a4H-w01et8vS90o"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Racing</p><h4 class="font-display font-bold text-white mb-2 truncate">Turbo Nitro</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Abstract colorful light streaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKKY76hKVlTN9XcIe3HEYzuGq2OU-IZzzsxC9WQxzbR6cKNsVe54aauh8xd_LcHrb3rG9hSYc7u7Xa_lBocqIsr0ikpz-uUdGuAZ9yuzr2PWhou72ZnSYIyPa-WH5d9643PqxF8CGbRJm46YSL49nFB2ZuAWzlu4o1ph0v4iFp4UES22gSWsREXl8WWSmhNBmKaWdNP60l3fY-2nqc7eqK7F0bmNTxfQz8d-RYWmrKGlwN6WBBktDGxJkZVb4SwG1oYYCjukIoy_8"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Music</p><h4 class="font-display font-bold text-white mb-2 truncate">Beat Master</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Tactical map of a fantasy world" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXxMfgx_Xpm4mOYGw9hqz1apBAZO3MRgcZSIULtPhyAnwH3ltIPDODYAaSqzJzuhNTlHm4FmB7_92LA26tHNe9yc0aV-Q4B4SSwGNLofyg_jN8HZkdH-Sed64UddZVuRVPihshnpx_CndQqfqS95cFnt-dBKckcaZKy8-DKVT5dnpJuTpsZ_wxHOayTvVVUIgk7ntRR0PboItiwOquGeYPTgQEEbEzG6Z8ke2ayYwCjB0XFAF8zs7eumKuLA3qwmauVdTvvRmO2x4"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Strategy</p><h4 class="font-display font-bold text-white mb-2 truncate">War Lords</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Glowing neon basketball hoop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7qsEQH3E22enPH8cFw-N0LWUhPPTx_6OIPHmjrGsa08b3zHX0tsKnDL_H6DytC0Egujd5ngeuzfiSzrYA-zmzBSpqZjWwymEEj3ow21uIgOQiRp7TJ1w_NDRzi2qBg0tWnjrLlb_AdJTXM4-Om92MGBT4Mpl739OHqMX6kcgEFSjaG1L0KO5Xs1mPZu0c5u19E6sJi2RKNEDfGiktaZdoDIpHBo3ajfPgVctzRqLHDh4KPoH8ilSeJEAOLrDho2tEjMbPYTi8qtg"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Sports</p><h4 class="font-display font-bold text-white mb-2 truncate">Street Baller</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
<div class="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
<div class="aspect-square relative"><img alt="Game" class="w-full h-full object-cover group-hover:scale-110 transition-all" data-alt="Abstract deep blue digital pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6DTK0gk1EkGu4VqWLveE2ndsNqUGiFP6_8XzWfZ41QItWjDAaTPwQf1bg0BIEV6remBcjwYuwnNawh8nwxg3_cwvtVsGBxQLqeFFyEF8hE94rVTmokqwsyVpKcz0iTpiBiurAPcn0zoB98_dRLEvQFWLW-5rlEGmFNBSFfo6xIHwcnRrxf0ojuGwNllBAr9S3vpNsgdng7QtZGwG6fSgmGtaybl1OMFfxFLG0cZ_r0BxAPImnLM3U3LfZBnpienErrhuvNCS7oI"/></div>
<div class="p-4"><p class="text-[10px] text-slate-500 font-bold uppercase mb-1">RPG</p><h4 class="font-display font-bold text-white mb-2 truncate">Mythic Quest</h4><button class="w-full py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Play Now</button></div>
</div>
</div>
</section>
<!-- Mega Bonus Banner -->
<section class="relative rounded-2xl overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-90"></div>
<div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] mix-blend-overlay bg-cover bg-center" data-alt="Neon city nightlife background blur"></div>
<div class="relative px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<span class="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold text-white uppercase tracking-widest mb-4 inline-block">Limited Offer</span>
<h2 class="text-4xl md:text-5xl font-display font-black text-white leading-tight">MEGA BONUS<br/>HOUR IS LIVE!</h2>
<p class="text-white/80 mt-2 max-w-md">Get 2x rewards on all puzzle games and 20% cashback on entry fees for the next 45 minutes.</p>
</div>
<div class="flex flex-col items-center">
<div class="flex gap-4 mb-6">
<div class="bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-white/20 text-center min-w-[80px]">
<span class="block text-3xl font-display font-bold text-white">45</span>
<span class="text-[10px] text-white/60 uppercase">Mins</span>
</div>
<div class="bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-white/20 text-center min-w-[80px]">
<span class="block text-3xl font-display font-bold text-white">22</span>
<span class="text-[10px] text-white/60 uppercase">Secs</span>
</div>
</div>
<button class="px-8 py-3 bg-white text-primary font-display font-bold rounded-lg shadow-xl hover:scale-105 transition-transform">ACTIVATE NOW</button>
</div>
</div>
</section>
<!-- Live Ongoing Games Section -->
<section>
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-display font-bold text-white">Live Ongoing Games</h2>
<a class="text-primary hover:underline text-sm font-medium" href="#">View all live sessions</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Live Match 1 -->
<div class="glass-panel p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-primary">
<div class="relative">
<img alt="Game" class="w-20 h-20 rounded-lg object-cover" data-alt="Game icon tactical combat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2oMBxHo0is5xexRtV870DSMJY7Lwyia0zvgXgk5jt-cYvwEDuTT13UBywCAZlwBbsHYwO8bqVWdnloh8OGJZfM79rp5V0xC4XK-Ih8k-ojid38Tc83Mkj-tOv4BGeAwFgBf0ZBjbK8V_ZJio16hzbyRABIvschLfX2t_fio0oyWcFObp9s4nPeSxtMZCwTRxkZiD4EA0U8j2_wq7okk0NuGMYa7K_JdAf4gpABS-GnqYrnPdhSeocbrCzBxUHIBVG3h3RZpiwY04"/>
<div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-surface-dark flex items-center justify-center">
<span class="material-icons text-[12px] text-white font-bold">bolt</span>
</div>
</div>
<div class="flex-1">
<h4 class="font-bold text-white truncate">Cyber Tactical Duel</h4>
<p class="text-xs text-slate-400 mb-2">Stake: <span class="text-primary font-bold">₦1,000</span></p>
<div class="flex items-center gap-4">
<div class="flex -space-x-2">
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQI4zPZdcQoedFVya5RTVeJi-OkznsG9b4Dha7s0Q9jL1h7sdQfyg-OX8UA4wRn6ZheFOpioRdT8eH8wOeWJkp0WUGcuH2koWe2nrdih8RUDYzofdgf3vtI7feoAJKxKWrv1h6o5nC4iPsUr01B4UpzR8AMAaiLLdjhfQmFOSWDPdc3ybpYFUDGqu4_i4TMwlhZx7kjE6YVp_nYi0yiv8HvjT2gUIwhsSdP1wDcvBJjcxbK3_QjGpi9MJmIDLa5yhcCARlzcb5xdw"/>
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdFivLAwQMeSRKPQcEpNgIeo1tBGt4gwyYnJQLXgPiBwWc0RAOHStF6ogMsiQpUKc3sTFqXNCbM56jDOnZoEJ861YEiD7IS61go6LcDpjNoYbAjHw0XlHsU4zhrzrLBxy1s2X2A3k14CqBDhTl5AhMmVgRLvWtrxL6c8vyNiUatHvTMSWQNxH24oBrgHa3__7SMGI6VTGNH6F7GM0RbK1RiCE8qtAnEnSE0nS6tY4uFKdyXKmaFsglQZcFltR30wsr5hFW6iVGDdc"/>
</div>
<span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ending In 02:45</span>
</div>
</div>
<button class="bg-primary hover:bg-blue-600 p-2 rounded-lg text-white transition-colors">
<span class="material-icons">visibility</span>
</button>
</div>
<!-- Live Match 2 -->
<div class="glass-panel p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-secondary">
<div class="relative">
<img alt="Game" class="w-20 h-20 rounded-lg object-cover" data-alt="Game icon chess" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7SmZUUWk-QWJ7xRKJpQNDB0jodXTVQpa8Gwn2Zb0NGjY_OmLQ1Ivvuf6Va3a5ZSNKrE1lvVSFamjSgaP9R9TwekvYqR7tJFpvzpb5g5hR6-EZazAgsaByTbj6jfyRaClUeVok77L0y-dyp8ptEzbWFXgFCYiQxcN2mv1q8Z43wCcqMMWozI7Jt1gvIDV3ELDQPIHQDTTQngSwrhPZYN20bihcDpPssGiMU1uAtIVbzFjFolQq7BmPM_EBxwWngVgd9ciijBocIE"/>
<div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-surface-dark flex items-center justify-center">
<span class="material-icons text-[12px] text-white font-bold">bolt</span>
</div>
</div>
<div class="flex-1">
<h4 class="font-bold text-white truncate">Neon Checkmate Pro</h4>
<p class="text-xs text-slate-400 mb-2">Stake: <span class="text-secondary font-bold">₦500</span></p>
<div class="flex items-center gap-4">
<div class="flex -space-x-2">
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq1l00z-mXEd5vtOAhArUEzO0VVwNrGTzbOwTcN6hhkkyVUm-KR_A5wg3ds-4rD7aOzYkfW1K9iebr4hx4jlgN-xsDeHQynD5JVKi3tz_q_8wKen4iMqYWvqDvENTZX1VFZdVMfGMf2iowYwj4c8p1g4TeGoQa1svTKo9oEG39mfhuz1juwoWWgJJCfdBWgimx_ec934QsdPLeuxl7NNONXuieqpYRNV14v0ScVmrxtRnOruWrfRtFSh00_W2zH6cSx7VvgR8UPHU"/>
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq29rMh5pcleL1h3oMHurPIZiRDuFXbFZbY71sCz45L51MAiG4yBefzHIbVCUW74M4G7ca7IilB5z_mMjNhs8VdU3tdzSHyFgjNwRNPDN9BUwYqODIhx9snMCtLoS8R6Jq_3N4AN8bi5CsH1omZbny2zSibInZszprjfmCfW4otpX4YzNMajSWnB5H5MVdRTBLvGwt49YBkxd0JnhDJzsd_rGoNRoGWU3X0W_CSlrDVFXgmiEGD30hbLMw5t8OGwrrSYrHmtrlyc4"/>
</div>
<span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ending In 08:12</span>
</div>
</div>
<button class="bg-secondary hover:bg-purple-600 p-2 rounded-lg text-white transition-colors">
<span class="material-icons">visibility</span>
</button>
</div>
<!-- Live Match 3 -->
<div class="glass-panel p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-primary/50">
<div class="relative">
<img alt="Game" class="w-20 h-20 rounded-lg object-cover" data-alt="Game icon space racing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwfqdkc9OWMQ0cbTzILNx6ktzXLdLFgQq75Hz54evyKN-V2II_1_lKYEFjpUvXG6cBTOb3ib8vukmNPfXlD4F98chw2YU1Pairdkn2ohOXHXTtE8n30vNxEDlbzYqgDjEGgToLOSlsxPTu1eg-BP5MWSlk0iyhTSSqqqJu1dWb_oO_hAKiOrJILSV92qgu5v8RFslcV5QG12SHSe_okxV3dRRwTAtZhbZ2fof8h75Lb22ytwBcs-yp7CYxJ-A6jklQ72J6k8W7PQ0"/>
<div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-surface-dark flex items-center justify-center">
<span class="material-icons text-[12px] text-white font-bold">bolt</span>
</div>
</div>
<div class="flex-1">
<h4 class="font-bold text-white truncate">Starfall Sprint</h4>
<p class="text-xs text-slate-400 mb-2">Stake: <span class="text-primary font-bold">₦200</span></p>
<div class="flex items-center gap-4">
<div class="flex -space-x-2">
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXggNKQZQqEwjqoCIK98KhOlfAu4i-BvamFoX801iRjfv9X2E0HecbR-y_7DEKQWZvU2QBnNspEFC9Gp2jGT5L7iBQXna80lEMLmtI79VwaAdsHKn8zMh5xuAMfDD_kC1U-Itz0wpQiHKDrkbbLGnd2VRe86xK7aH7Makt-itbql0r1kY1bXnv8a8OFDmuza3_8GA6olxBVt2DfVhG6RF6UtyllChSdcJNUzB1It9uZdHiQ56E0AyrKZBY45HtLce6nMvnyKC5nvE"/>
<img alt="User" class="w-6 h-6 rounded-full border border-surface-dark" data-alt="User avatar 6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1SvYbi4I2zP51MVPRdlqlGheMacazDsWuKLqVb5X4l3-SX-HbUoTwlP7xoJqHhyvyoRgPTVcMMQjqz18G1d8bAZjv7I6aCfbbqozTq0icECHJCuHuNxaCQqlrNVfF2I4s16H-BXvL3SVfCyW1HajRWEkrNRZybySsQ9oL0zAz8FmiX5yYex8JTUktSYNeDvcCp5NZ3Rz0qq7l1lT-NyNoY3NSDMzVpgmsNkTgR21fXHzNwaEzdmIeOYvQ9NIOOBMebNi7h4spH8Y"/>
</div>
<span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ending In 01:15</span>
</div>
</div>
<button class="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg text-white transition-colors">
<span class="material-icons">visibility</span>
</button>
</div>
</div>
</section>
<!-- How it Works Illustration Section -->
<section class="glass-panel rounded-2xl p-10 border border-white/5 overflow-hidden relative">
<div class="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
<div class="relative z-10 text-center max-w-2xl mx-auto mb-12">
<h2 class="text-3xl font-display font-bold text-white mb-4">How It Works</h2>
<p class="text-slate-400">PlayPeak is where skill meets reward. Follow these three simple steps to start winning today.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div class="text-center group">
<div class="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors neon-glow-blue border border-primary/20">
<span class="material-icons text-4xl text-primary group-hover:text-white">account_balance_wallet</span>
</div>
<h4 class="text-xl font-display font-bold text-white mb-2">1. Fund Wallet</h4>
<p class="text-sm text-slate-500">Deposit securely via Bank Transfer, Card, or USSD.</p>
</div>
<div class="text-center group">
<div class="w-20 h-20 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors neon-glow-purple border border-secondary/20">
<span class="material-icons text-4xl text-secondary group-hover:text-white">stadium</span>
</div>
<h4 class="text-xl font-display font-bold text-white mb-2">2. Pick a Duel</h4>
<p class="text-sm text-slate-500">Choose your favorite game and stake amount to match.</p>
</div>
<div class="text-center group">
<div class="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors neon-glow-blue border border-primary/20">
<span class="material-icons text-4xl text-primary group-hover:text-white">emoji_events</span>
</div>
<h4 class="text-xl font-display font-bold text-white mb-2">3. Win &amp; Cashout</h4>
<p class="text-sm text-slate-500">Top the leaderboard and withdraw your earnings instantly.</p>
</div>
</div>
</section>
<!-- Testimonials & About -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-center">
<div class="flex gap-1 mb-4">
<span class="material-icons text-yellow-400 text-sm">star</span>
<span class="material-icons text-yellow-400 text-sm">star</span>
<span class="material-icons text-yellow-400 text-sm">star</span>
<span class="material-icons text-yellow-400 text-sm">star</span>
<span class="material-icons text-yellow-400 text-sm">star</span>
</div>
<p class="text-xl italic text-slate-300 mb-6 font-display">"PlayPeak has the fastest payouts I've seen. The competitive scene is intense but very rewarding. Finally, a place for real gamers!"</p>
<div class="flex items-center gap-3">
<img alt="User" class="w-12 h-12 rounded-full border border-primary" data-alt="Satisfied user portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn-xuTarp9LVFQNbO3Mj8dAQ4Z4GECJiyXKhDIqKi5-UM6hoEWY8mui0fFpp8EOeek-lsSfIVCWhKakfvlwLQj98HBera9jIwOJ0Dk1tBJkUej4c2wFslWhBFYYcw6QW18joDRfX0x4Ka_BLQiLYu0SXySCKCnQdamScaOlbnl75OLbyN7QxA4nP3wXqcZXtmdzHWTi_lbQqMFMXbb6jzAbf-0WXlkoPdBk_rQmL5rno1wpLHIcn6sf_pq7IMpFOLoAs1s7p9Krmg"/>
<div>
<p class="font-bold text-white">David O.</p>
<p class="text-xs text-slate-500 uppercase font-bold tracking-tighter">Pro Player Since 2023</p>
</div>
</div>
</div>
<div class="glass-panel p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent">
<h4 class="text-lg font-display font-bold text-white mb-4">About PlayPeak</h4>
<p class="text-sm text-slate-400 leading-relaxed mb-6">PlayPeak is the leading competitive gaming ecosystem in Nigeria, offering a secure platform for players to monetize their skills across various genres.</p>
<div class="space-y-3">
<div class="flex items-center gap-3 text-xs text-slate-300">
<span class="material-icons text-primary text-sm">verified</span>
                            Licensed &amp; Regulated
                        </div>
<div class="flex items-center gap-3 text-xs text-slate-300">
<span class="material-icons text-primary text-sm">bolt</span>
                            Instant Payouts
                        </div>
<div class="flex items-center gap-3 text-xs text-slate-300">
<span class="material-icons text-primary text-sm">support_agent</span>
                            24/7 Priority Support
                        </div>
</div>
</div>
</section>
<!-- Footer Lite -->
<footer class="pt-8 pb-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
<p>© 2024 PlayPeak Gaming Platform. All Rights Reserved.</p>
<div class="flex gap-6">
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="hover:text-primary transition-colors" href="#">Responsible Gaming</a>
</div>
</footer>
</main>
</div>
</body></html>