import { winners } from "@/constants/constants";

const RecentWinners = () => {
  return (
    <div>
      <span className="text-xs font-bold text-primary uppercase tracking-widest">
        Winners Arena
      </span>
      <div className="glass py-3 px-4 rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2">
        <div className="flex items-center gap-4">
          {winners.map(({ id, username, game, amountWon }) => (
            <div className="flex gap-2 flex-col px-2 py-2 glass" key={id}>
              <span className="text-[10px] text-slate-500">2m ago</span>
              <div className="flex text-xs gap-2">
                <span className="text-xs text-primary font-bold">
                  {username}
                </span>
                won
                <span className="text-chart-3 font-semibold">₦{amountWon}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                playing {game}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWinners;
