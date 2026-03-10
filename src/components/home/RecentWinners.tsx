import { winners } from "@/constants/constants";

const RecentWinners = () => {
  return (
    <div>
      <span className="text-xs font-bold text-primary uppercase tracking-widest">
        Winners Arena
      </span>
      <div className="w-full rounded-lg overflow-hidden flex items-center whitespace-nowrap mt-2 ">
        <div className="flex w-max items-center gap-2 recent-winner">
          {[...winners, ...winners].map(
            ({ id, username, game, amountWon }, i) => (
              <div
                className="flex gap-px flex-col text-slate-400 px-4 py-px rounded-full glass"
                key={id + i}
              >
                <span className="text-xs font-semibold ">2m ago</span>
                <div className="flex text-xs text-secondary-foreground gap-2">
                  <span className="text-xs text-primary font-bold">
                    {username}
                  </span>
                  won
                  <span className="text-secondary font-semibold">
                    ₦{amountWon}
                  </span>
                </div>
                <span className="text-xs font-semibold">in {game}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentWinners;
