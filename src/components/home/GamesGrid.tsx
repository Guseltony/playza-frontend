const GamesGrid = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-white">
          Popular Games
        </h2>
        <a className="text-sm text-primary font-bold hover:underline" href="#">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all">
          <div className="h-32 relative">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Futuristic esports arena with neon lights"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQUX9TzQaVdiyAabV8A96gUju4_AWN9hSNry6dMJG29sHJzRpTgaXtOIfHOlVGpkG85rQPRedT4F-Zn71ciXLSc1MlVBfWO9TIYuFtvygL8s7wHU6sTVN_0XZ5SVBKrhMvh2OzqtDhkYUeDCwDKSAFUeNIsFCGEXNr5b6vwbFd2OtplFeAjsofdC51DsPjkDtMGBUJJPvKIPJszOWoIluw8QKs-10PEPRUay7vDpWHNZA7TG0pkGhlNg2l6ApGW6sZmTAGRgP9Ac"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
            <div className="absolute bottom-2 left-2 flex gap-1">
              <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white">
                ₦50 BUY-IN
              </span>
            </div>
          </div>
          <div className="p-4 flex justify-between items-end">
            <div>
              <h4 className="font-bold text-white">Neon Striker</h4>
              <p className="text-xs text-slate-400">842 players active</p>
            </div>
            <button className="bg-slate-800 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white">
              JOIN
            </button>
          </div>
        </div>
        <div className="glass rounded-lg overflow-hidden group border-slate-700 hover:border-primary transition-all">
          <div className="h-32 relative">
            <img
              alt="game"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Retro aesthetic electronic circuit board"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJ4q98zk9hnmyJqWf_YqsQKDxvpdqLg96-Hmy0YpOjvUpgySKH9j7wlw1vMZ259S-fG8qTOxrL5kaqnIyOtcNa4jOKyq4nl2R4AHkWSsPs2H1cXRPw864hlzD4KjL-S3JA1dqtTtwOL49QsWkgW2oNjQjiR9G7sCEAVV-shfke-_KEoiNH_3vy02pU5yS2wrNubI9PStiQ54g3Qw5yalboY16l07kr61IfbDXc4VnOcvi1y9WyuFxVBtK1VOb-BU4Av4BrC_eJI4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
            <div className="absolute bottom-2 left-2 flex gap-1">
              <span className="bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white">
                ₦20 BUY-IN
              </span>
            </div>
          </div>
          <div className="p-4 flex justify-between items-end">
            <div>
              <h4 className="font-bold text-white">Circuit Break</h4>
              <p className="text-xs text-slate-400">321 players active</p>
            </div>
            <button className="bg-slate-800 hover:bg-primary px-4 py-1.5 rounded text-xs font-bold transition-colors text-white">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
