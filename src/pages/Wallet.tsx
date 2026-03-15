import WalletBalance from "@/components/wallet/WalletBalance";
import BankInfo from "@/components/wallet/BankInfo";
import RecentTransactions from "@/components/wallet/RecentTransactions";

const Wallet = () => {
  return (
    <main className="flex-1 min-w-0 flex flex-col gap-6 md:gap-10 pb-10">
      {/* <!-- Hero Title Section --> */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Financial <span className="text-primary">Hub</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2 max-w-xl">
            Track your earnings, manage your withdrawal methods, and monitor your tournament entry history in one place.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <WalletBalance balance="42,500" />
        <BankInfo />
      </section>

      <RecentTransactions />
    </main>
  );
};

export default Wallet;

