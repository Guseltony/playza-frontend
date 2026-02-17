<html class="dark" lang="en"><head>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/></head><body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">```html




<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PlayPeak | Competitive Gaming Arena</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Space+Grotesk:wght@500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
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
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "heading": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "12px",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .glass {
            background: rgba(17, 22, 33, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(36, 99, 235, 0.1);
        }
        .neon-glow {
            box-shadow: 0 0 15px rgba(36, 99, 235, 0.4);
        }
        .ticker-wrap {
            overflow: hidden;
            white-space: nowrap;
        }
        .ticker-move {
            display: inline-block;
            animation: ticker 20s linear infinite;
        }
        @keyframes ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
    </style>
<!-- Header -->
<header class="sticky top-0 z-50 glass border-b border-primary/20">
<div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div class="flex items-center gap-12">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span class="material-icons text-white text-xl">bolt</span>
</div>
<span class="font-heading text-2xl font-bold tracking-tight text-white">PlayPeak</span>
</div>
<nav class="hidden lg:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors text-white" href="#">Games</a>
<a class="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Tournaments</a>
<a class="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Leaderboards</a>
<a class="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Support</a>
</nav>
</div>
<div class="flex items-center gap-6">
<button class="relative text-slate-400 hover:text-primary transition-colors">
<span class="material-icons">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
</button>
<div class="flex items-center gap-4 pl-6 border-l border-slate-700">
<div class="text-right hidden sm:block">
<p class="text-xs text-slate-400 font-medium">Wallet Balance</p>
<p class="text-sm font-bold text-white">₦5,200.00</p>
</div>
<div class="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
<img alt="User Avatar" class="w-full h-full object-cover" data-alt="User profile avatar with a friendly male face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-58Fvu0B6OfPxJwk21e4ikcaycwxVdVNImImegpk7HZIdtPjerwEk2UQT9RIz2dmfaciPYt5weosdCczL9xtGYje3PHhXI4odKXsCVyM0sw4TGWlBGDV9uLjgmQ0TcGzEQtkeVWN8VlRzlqzcWjdkjMUI6t50Wx_371P5ZV_mxRUfqhjo0cdv1f24frntJweiWmSSYaln0MCV7_wsw9lgIJbnMmi4nftVogeOEBSt7dNZqRYc99hkVOEF3uoaDMp3udlng7CWxRU"/>
</div>
</div>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-6 py-8 grid grid-cols-12 gap-6">
<!-- Left Column: User Context -->
<aside class="col-span-12 lg:col-span-3 space-y-6">
<!-- Profile Card -->
<div class="glass rounded-lg p-5">
<div class="flex items-center gap-4 mb-6">
<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5">
<img class="w-full h-full object-cover rounded-[10px]" data-alt="Detailed user profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEZAqd8RYwthUHy4H7nRig2LRXD_Tc-PqWHXCX4oRO_0tqIUlWTw3Pg--0p1ZCq8QNd6tapPk1w08NEhx0MHCT2Q9DWFQLz-0EZsavMRmFt7aWlzS-cuJOXKhy8iYXVrDORevJ281JsZWO2bVdvMghPk2WpKKBzx1toNjGj8wZhvgiprFpvytm6fkJaf-8qwyYfYx4Ruuq3JKPS3FM-VCae09EcvD19Jt61vsncTH1KPHgoJe4NA6AhgbRq85pW_GM_1e1cyTNQw"/>
</div>
<div>
<h3 class="font-bold text-white">AlexStorm</h3>
<div class="flex items-center gap-1.5 px-2 py-0.5 bg-primary/20 text-primary rounded-full w-fit">
<span class="material-icons text-[14px]">military_tech</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Elite III</span>
</div>
</div>
</div>
<div class="space-y-4">
<div class="p-4 bg-slate-800/40 rounded-lg border border-slate-700/50">
<div class="flex justify-between items-center mb-2">
<span class="text-xs text-slate-400">Total Balance</span>
<button class="text-[10px] text-primary font-bold hover:underline">HISTORY</button>
</div>
<p class="text-xl font-bold text-white mb-3">₦5,200.00</p>
<button class="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-sm font-bold transition-all neon-glow">
                            Top Up Wallet
                        </button>
</div>
<div class="grid grid-cols-2 gap-3">
<div class="bg-slate-800/40 p-3 rounded-lg text-center">
<p class="text-[10px] text-slate-400 uppercase tracking-wide">Games Played</p>
<p class="text-lg font-bold text-white">12</p>
</div>
<div class="bg-slate-800/40 p-3 rounded-lg text-center">
<p class="text-[10px] text-slate-400 uppercase tracking-wide">Win Rate</p>
<p class="text-lg font-bold text-green-500">68%</p>
</div>
</div>
</div>
</div>
<!-- Online Stats -->
<div class="glass rounded-lg p-5">
<div class="flex items-center justify-between mb-4">
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Global Stats</h4>
<span class="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<div class="space-y-4">
<div class="flex justify-between items-center">
<span class="text-sm text-slate-300">Active Players</span>
<span class="text-sm font-bold text-white">1.4k</span>
</div>
<div class="flex justify-between items-center">
<span class="text-sm text-slate-300">Open Tournaments</span>
<span class="text-sm font-bold text-white">24</span>
</div>
<div class="flex justify-between items-center">
<span class="text-sm text-slate-300">Total Payouts (24h)</span>
<span class="text-sm font-bold text-primary">₦4.2M</span>
</div>
</div>
</div>
</aside>
<!-- Center Column: Main Action -->
<section class="col-span-12 lg:col-span-6 space-y-6">
<!-- Hero Section -->
<div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-primary/20 p-8 border border-primary/30">
<div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div class="max-w-xs">
<h1 class="font-heading text-4xl font-bold text-white leading-tight mb-4">
                            Compete. Climb.<br/><span class="text-primary">Win Tonight.</span>
</h1>
<div class="flex items-center gap-3 text-slate-300 mb-6">
<span class="material-icons text-primary">schedule</span>
<span class="text-lg font-mono font-bold">02:45:12</span>
</div>
</div>
<div class="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full md:w-auto text-center">
<p class="text-xs text-slate-400 uppercase tracking-widest mb-1">Active Prize Pool</p>
<p class="text-3xl font-bold text-white mb-4">₦1,250,000</p>
<div class="flex flex-col gap-3">
<div class="flex justify-center gap-2">
<button class="px-3 py-1.5 rounded-lg border border-primary text-xs font-bold bg-primary/20 text-white">₦10</button>
<button class="px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold hover:border-primary transition-colors text-slate-300">₦20</button>
<button class="px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold hover:border-primary transition-colors text-slate-300">₦50</button>
</div>
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg tracking-widest text-sm uppercase transition-all shadow-lg shadow-primary/40">
                                PLAY NOW
                            </button>
</div>
</div>
</div>
<!-- Background decoration -->
<div class="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
<div class="absolute -left-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
</div>
<!-- Winners Ticker -->
<div class="glass py-2 rounded-lg ticker-wrap">
<div class="ticker-move flex gap-12 text-sm">
<span class="flex items-center gap-2 text-slate-300"><span class="text-green-500 font-bold">₦12,400</span> won by @MegaMind</span>
<span class="flex items-center gap-2 text-slate-300"><span class="text-green-500 font-bold">₦4,500</span> won by @SniperElite</span>
<span class="flex items-center gap-2 text-slate-300"><span class="text-green-500 font-bold">₦8,200</span> won by @DoraThePlayer</span>
<span class="flex items-center gap-2 text-slate-300"><span class="text-green-500 font-bold">₦15,000</span> won by @GhostRider</span>
</div>
</div>
<!-- Games Grid -->
<div>
<div class="flex items-center justify-between mb-4">
<h2 class="font-heading text-xl font-bold text-white">Popular Games</h2>
<a class="text-sm text-primary font-bold hover:underline" href="#">View All</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Game Card 1 -->
<div class="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all">
<div class="h-32 relative">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Futuristic esports arena with neon lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQUX9TzQaVdiyAabV8A96gUju4_AWN9hSNry6dMJG29sHJzRpTgaXtOIfHOlVGpkG85rQPRedT4F-Zn71ciXLSc1MlVBfWO9TIYuFtvygL8s7wHU6sTVN_0XZ5SVBKrhMvh2OzqtDhkYUeDCwDKSAFUeNIsFCGEXNr5b6vwbFd2OtplFeAjsofdC51DsPjkDtMGBUJJPvKIPJszOWoIluw8QKs-10PEPRUay7vDpWHNZA7TG0pkGhlNg2l6ApGW6sZmTAGRgP9Ac"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
<div class="absolute bottom-2 left-2 flex gap-1">
<span class="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white">₦50 BUY-IN</span>
</div>
</div>
<div class="p-4 flex justify-between items-end">
<div>
<h4 class="font-bold text-white">Neon Striker</h4>
<p class="text-xs text-slate-400">842 players active</p>
</div>
<button class="bg-slate-800 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white">JOIN</button>
</div>
</div>
<!-- Game Card 2 -->
<div class="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all">
<div class="h-32 relative">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Retro aesthetic electronic circuit board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJ4q98zk9hnmyJqWf_YqsQKDxvpdqLg96-Hmy0YpOjvUpgySKH9j7wlw1vMZ259S-fG8qTOxrL5kaqnIyOtcNa4jOKyq4nl2R4AHkWSsPs2H1cXRPw864hlzD4KjL-S3JA1dqtTtwOL49QsWkgW2oNjQjiR9G7sCEAVV-shfke-_KEoiNH_3vy02pU5yS2wrNubI9PStiQ54g3Qw5yalboY16l07kr61IfbDXc4VnOcvi1y9WyuFxVBtK1VOb-BU4Av4BrC_eJI4"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
<div class="absolute bottom-2 left-2 flex gap-1">
<span class="bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white">₦20 BUY-IN</span>
</div>
</div>
<div class="p-4 flex justify-between items-end">
<div>
<h4 class="font-bold text-white">Circuit Break</h4>
<p class="text-xs text-slate-400">321 players active</p>
</div>
<button class="bg-slate-800 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white">JOIN</button>
</div>
</div>
</div>
</div>
<!-- Leaderboard -->
<div class="glass rounded-lg p-5">
<h3 class="font-heading text-lg font-bold text-white mb-4">Daily Leaderboard</h3>
<div class="overflow-hidden border border-slate-700 rounded-lg">
<table class="w-full text-left text-sm">
<thead class="bg-slate-800/60 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
<tr>
<th class="px-4 py-3">Rank</th>
<th class="px-4 py-3">Player</th>
<th class="px-4 py-3">Winnings</th>
<th class="px-4 py-3">Matches</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-700">
<tr class="bg-yellow-500/10">
<td class="px-4 py-4 text-yellow-500 font-bold">01</td>
<td class="px-4 py-4 font-bold text-white">@KingLegacy</td>
<td class="px-4 py-4 font-bold text-yellow-500 font-mono">₦85,200</td>
<td class="px-4 py-4 text-slate-400">142</td>
</tr>
<tr class="bg-slate-400/10">
<td class="px-4 py-4 text-slate-300 font-bold">02</td>
<td class="px-4 py-4 font-bold text-white">@ShadowWalker</td>
<td class="px-4 py-4 font-bold text-slate-300 font-mono">₦62,100</td>
<td class="px-4 py-4 text-slate-400">98</td>
</tr>
<tr class="bg-orange-800/10">
<td class="px-4 py-4 text-orange-600 font-bold">03</td>
<td class="px-4 py-4 font-bold text-white">@ViperX</td>
<td class="px-4 py-4 font-bold text-orange-600 font-mono">₦45,900</td>
<td class="px-4 py-4 text-slate-400">115</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Promo Banner -->
<div class="bg-gradient-to-r from-secondary to-primary rounded-xl p-6 text-white flex items-center justify-between">
<div>
<h4 class="font-heading text-xl font-bold mb-1">Mega Night Challenge</h4>
<p class="text-sm opacity-90">Join the elite lobby tonight for 5x rewards.</p>
</div>
<button class="bg-white text-primary font-bold px-6 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
                    RESERVE SPOT
                </button>
</div>
</section>
<!-- Right Column: Social/Live -->
<aside class="col-span-12 lg:col-span-3 space-y-6">
<!-- Global Stats Widget -->
<div class="glass rounded-lg p-5">
<div class="flex items-center gap-2 mb-4">
<span class="material-icons text-primary">groups</span>
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Live Community</h4>
</div>
<div class="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg">
<div class="text-center flex-1 border-r border-slate-700">
<p class="text-2xl font-bold text-white">5,240</p>
<p class="text-[10px] text-slate-400">Online</p>
</div>
<div class="text-center flex-1">
<p class="text-2xl font-bold text-white">₦12M+</p>
<p class="text-[10px] text-slate-400">Monthly Wins</p>
</div>
</div>
</div>
<!-- Rank Change Feed -->
<div class="glass rounded-lg p-5">
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Rank Changes</h4>
<div class="space-y-4">
<div class="flex items-start gap-3 border-l-2 border-primary pl-3 py-1">
<div class="flex-1">
<p class="text-xs font-medium text-white"><span class="text-primary">@Zonex</span> overtook <span class="text-slate-400">@Bolt</span></p>
<p class="text-[10px] text-slate-500">2 mins ago • Pro League</p>
</div>
</div>
<div class="flex items-start gap-3 border-l-2 border-green-500 pl-3 py-1">
<div class="flex-1">
<p class="text-xs font-medium text-white">@Nova reached <span class="text-green-500">Diamond II</span></p>
<p class="text-[10px] text-slate-500">5 mins ago • Achievement</p>
</div>
</div>
<div class="flex items-start gap-3 border-l-2 border-primary pl-3 py-1">
<div class="flex-1">
<p class="text-xs font-medium text-white"><span class="text-primary">@Raptor</span> overtaken by <span class="text-slate-400">@Echo</span></p>
<p class="text-[10px] text-slate-500">12 mins ago • Amateur Cup</p>
</div>
</div>
</div>
</div>
<!-- Recent Winners Vertical -->
<div class="glass rounded-lg p-5">
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Winners</h4>
<div class="space-y-3">
<div class="flex items-center gap-3 p-2 bg-slate-800/20 rounded-lg border border-slate-700/30">
<div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">JD</div>
<div class="flex-1">
<p class="text-xs font-bold text-white">@JoeDone</p>
<p class="text-[10px] text-green-500">+ ₦2,400</p>
</div>
<span class="material-icons text-slate-600 text-sm">verified</span>
</div>
<div class="flex items-center gap-3 p-2 bg-slate-800/20 rounded-lg border border-slate-700/30">
<div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">SM</div>
<div class="flex-1">
<p class="text-xs font-bold text-white">@SlowMo</p>
<p class="text-[10px] text-green-500">+ ₦5,200</p>
</div>
<span class="material-icons text-slate-600 text-sm">verified</span>
</div>
</div>
</div>
<!-- Trust Badges -->
<div class="flex flex-col gap-4">
<div class="flex items-center gap-3 p-4 glass rounded-lg border-l-4 border-primary">
<span class="material-icons text-primary">security</span>
<div>
<p class="text-xs font-bold text-white">Secure Payments</p>
<p class="text-[10px] text-slate-400">256-bit encrypted</p>
</div>
</div>
<div class="flex items-center gap-3 p-4 glass rounded-lg border-l-4 border-green-500">
<span class="material-icons text-green-500">gavel</span>
<div>
<p class="text-xs font-bold text-white">Fair Play Engine</p>
<p class="text-[10px] text-slate-400">Anti-cheat certified</p>
</div>
</div>
</div>
</aside>
</main>
<!-- How it Works & About -->
<section class="max-w-[1440px] mx-auto px-6 py-12 border-t border-slate-800">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 class="font-heading text-2xl font-bold text-white mb-8">How It Works</h2>
<div class="space-y-6">
<div class="flex gap-4">
<div class="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
<div>
<h4 class="font-bold text-white">Choose Your Game</h4>
<p class="text-sm text-slate-400">Select from our library of skill-based competitive mobile and desktop games.</p>
</div>
</div>
<div class="flex gap-4">
<div class="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
<div>
<h4 class="font-bold text-white">Enter Your Stake</h4>
<p class="text-sm text-slate-400">Join a lobby starting from as low as ₦10. The winner takes the collective pool.</p>
</div>
</div>
<div class="flex gap-4">
<div class="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
<div>
<h4 class="font-bold text-white">Win &amp; Withdraw</h4>
<p class="text-sm text-slate-400">Withdraw your winnings instantly to your bank account or wallet.</p>
</div>
</div>
</div>
</div>
<div class="glass p-8 rounded-xl">
<h3 class="font-heading text-xl font-bold text-white mb-4">About PlayPeak</h3>
<p class="text-slate-400 text-sm leading-relaxed mb-6">
                    PlayPeak is Nigeria's leading competitive skill gaming platform. We believe that gaming should be rewarding. Our mission is to provide a secure, fair, and high-energy environment where talented players can turn their gaming passion into real-world profit. With real-time leaderboards and instant payouts, the arena is always live.
                </p>
<div class="flex gap-8">
<div class="text-center">
<p class="text-2xl font-bold text-white">₦150M+</p>
<p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Paid Out</p>
</div>
<div class="text-center border-l border-slate-700 pl-8">
<p class="text-2xl font-bold text-white">250K+</p>
<p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Active Users</p>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-background-dark border-t border-slate-800 py-12">
<div class="max-w-[1440px] mx-auto px-6">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div class="col-span-2 md:col-span-1">
<div class="flex items-center gap-2 mb-6">
<div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span class="material-icons text-white text-xl">bolt</span>
</div>
<span class="font-heading text-xl font-bold text-white">PlayPeak</span>
</div>
<p class="text-sm text-slate-500 leading-relaxed">The ultimate arena for competitive mobile and skill games.</p>
</div>
<div>
<h5 class="font-bold text-white mb-6 text-sm">Platform</h5>
<ul class="space-y-4 text-sm text-slate-500">
<li><a class="hover:text-primary transition-colors" href="#">All Games</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Tournaments</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Leaderboards</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-white mb-6 text-sm">Support</h5>
<ul class="space-y-4 text-sm text-slate-500">
<li><a class="hover:text-primary transition-colors" href="#">Help Center</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Fair Play Policy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-white mb-6 text-sm">Follow Us</h5>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
<span class="material-icons text-xl">facebook</span>
</a>
<a class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
<span class="material-icons text-xl">alternate_email</span>
</a>
<a class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
<span class="material-icons text-xl">smart_display</span>
</a>
</div>
</div>
</div>
<div class="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 PlayPeak Interactive. All rights reserved.</p>
<div class="flex gap-6">
<a class="hover:text-white transition-colors" href="#">Terms of Service</a>
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Responsible Gaming</a>
</div>
</div>
</div>
</footer>
</body></html>