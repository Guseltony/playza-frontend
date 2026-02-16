const HeroBanner = () => {
  return (
    <section className="relative h-80 rounded-2xl overflow-hidden glass border-white/10">
      <img
        alt="Tournament Banner"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkwduXuJjNi6O0Q_nsFaV5iTOE9C9AdO_rxrQiRwN8jePvtUKLBeFfnwdN_vJfdXSeEmQcENLRLSuWXf_6KxHPdNfDe-jLVwxDKKpAx0qoXRxAc1R0odZGfQM7D1vc26oYnptqwD5YISX9CaaozTx3QRt5qz8y6KaqE7fY_3OJA08RCS8gvgm_cirzlckf6nKrG4dqj28jTRatq5WT0O3c3EpyZftCiQyVGjylQ50y1mI7l6HBohJ-4wZ1eB1_sWt95bIsqkteQ8c"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
      <div className="relative h-full p-8 flex flex-col justify-center z-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-primary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Live Tournament
          </span>
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            MATCHMAKING OPEN
          </div>
        </div>
        <h1 className="text-5xl font-display font-black tracking-tight mb-4">
          GRAND MASTER
          <br />
          <span className="text-primary">CHESS SERIES</span>
        </h1>
        <div className="flex items-center gap-12">
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
              Total Prize Pool
            </div>
            <div className="text-3xl font-display font-bold text-accent">
              ₦250,000.00
            </div>
          </div>
          <div className="h-10 w-px bg-white/20"></div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
              Time Remaining
            </div>
            <div className="text-3xl font-display font-bold text-white tabular-nums">
              00:42:15
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
