import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowBigRight, Info, PlusCircle, VerifiedIcon } from "lucide-react";
import {
  MdDownload,
  MdMilitaryTech,
  MdPayments,
  MdSportsEsports,
  MdUpload,
} from "react-icons/md";
import { Link, useLocation } from "react-router";

const Wallet = () => {
  const location = useLocation();
  return (
    <main className="flex-1 min-w-0 flex flex-col gap-2 md:gap-8">
      {/* <!-- Hero Balance Section --> */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-100 tracking-tight">
            Wallet &amp; Finances
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Manage your tournament earnings and transaction limits.
          </p>
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 size-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all"></div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                Available Balance
              </p>
              <Info className="text-primary/50" />
            </div>
            <h2 className="text-xl md:text-2xl xl:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
              ₦42,500
              <span className="text-lg font-normal text-slate-500">.00</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to={"/wallet/deposit"}
              state={{ background: location }}
              className="flex-1 bg-primary hover:bg-primary/90 text-background-dark font-bold py-2 md:py-4 rounded-xl transition-all neon-glow flex items-center justify-center gap-2 text-xs md:text-base"
            >
              <PlusCircle className="font-bold" />
              Deposit Funds
            </Link>
            <Link
              to={"/wallet/withdraw"}
              state={{ background: location }}
              className="flex-1 bg-transparent border border-white/20 hover:border-primary/50 text-white font-bold py-2 md:py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs md:text-base"
            >
              <MdPayments />
              Withdraw
            </Link>
          </div>
        </div>
        {/* <!-- Bank Info Card --> */}
        <div className="glass-card rounded-xl p-8 border-l-4 border-l-primary/50">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-bold text-white">Bank Information</h3>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-primary/20 flex items-center gap-1">
              <VerifiedIcon className="text-[12px]" /> Verified
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
              <div
                className="size-10 bg-white rounded-lg flex items-center justify-center p-1"
                data-alt="Zenith Bank Logo"
              >
                <img
                  alt="Bank Logo"
                  className="w-full h-auto"
                  data-alt="Zenith Bank corporate red logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxuRGEeXDIAhTZaRM5cIUhBBwMLqQLItgWx2Ps7uw78Sk2druQ6AnGFk2zttkm1xHbuuxq3rjnIH9NXr5DyLEANUZ_EVccv2xRf14eqXzqRM9M2sd58HOUFTGkSt304ko0OOSm2A4u4gNErVoIXhglSEFG5jxc6aFjYuqyfD2mcYTHvWNxBE83qodOpdT4nzMlLaaqRYGM7iM2hlMd62R7W_UuzdBAdtZvCsmfpf86dvBY_SpYksA4Dn1s5aws_d4QqR-ez-oa6myP"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500">Bank Name</p>
                <p className="text-sm font-bold text-white">Zenith Bank PLC</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">Account Name</p>
                <p className="text-sm font-medium text-white">John Doe</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Account Number</p>
                <p className="text-sm font-medium text-white">**** 8841</p>
              </div>
            </div>
            <button className="w-fit mt-2 text-xs text-primary font-bold hover:underline text-left cursor-pointer border p-2">
              Edit Bank Details
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Summary Statistics --> */}
      {/* <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        <div className="glass-card py-2 px-4 md:p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <TrendingUp />
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Total Deposited
            </p>
          </div>
          <p className="text-2xl font-bold text-white">₦150,000.00</p>
          <p className="text-xs text-green-500 mt-2 font-medium">
            +12.5% from last month
          </p>
        </div>
        <div className="glass-card py-2 px-4 md:p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
              <TrendingDown />
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Total Withdrawn
            </p>
          </div>
          <p className="text-2xl font-bold text-white">₦100,000.00</p>
          <p className="text-xs text-red-500 mt-2 font-medium">
            -4.2% from last month
          </p>
        </div>
        <div className="glass-card py-2 px-4 md:p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <MdPendingActions />
            </div>
            <p className="text-sm text-slate-400 font-medium">Pending</p>
          </div>
          <p className="text-2xl font-bold text-white">₦7,500.00</p>
          <p className="text-xs text-amber-500 mt-2 font-medium">
            2 Transactions in process
          </p>
        </div>
      </section> */}
      {/* <!-- Transaction History --> */}
      <section className="glass-card rounded-xl overflow-hidden">
        <div className="px-2 md:px-8 py-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Transaction History</h3>
          <Link
            to={"/transactions"}
            className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 cursor-pointer"
          >
            View All <ArrowBigRight className="text-sm" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full text-left">
            <TableHeader className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider">
              <TableRow>
                <TableHead className="px-8 py-4 font-semibold">Type</TableHead>
                <TableHead className="px-8 py-4 font-semibold">
                  Amount
                </TableHead>
                <TableHead className="px-8 py-4 font-semibold">
                  Status
                </TableHead>
                <TableHead className="px-8 py-4 font-semibold">Date</TableHead>
                <TableHead className="px-8 py-4 font-semibold">ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-white/5 text-sm">
              <TableRow className="hover:bg-white/5 transition-colors">
                <TableCell className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <MdDownload className=" text-green-500" />
                    <span className="font-medium text-white">Deposit</span>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-4 font-bold text-white">
                  ₦25,000.00
                </TableCell>
                <TableCell className="px-8 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                    Completed
                  </span>
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-400">
                  Oct 24, 2023 • 14:22
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-500 font-mono text-xs">
                  #TRX-99421
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/5 transition-colors">
                <TableCell className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <MdUpload className=" text-red-500" />
                    <span className="font-medium text-white">Withdrawal</span>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-4 font-bold text-white">
                  ₦10,000.00
                </TableCell>
                <TableCell className="px-8 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                    Pending
                  </span>
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-400">
                  Oct 23, 2023 • 09:15
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-500 font-mono text-xs">
                  #TRX-99418
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/5 transition-colors">
                <TableCell className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <MdSportsEsports className=" text-primary" />
                    <span className="font-medium text-white">
                      Tournament Fee
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-4 font-bold text-white">
                  ₦5,000.00
                </TableCell>
                <TableCell className="px-8 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                    Completed
                  </span>
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-400">
                  Oct 21, 2023 • 18:45
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-500 font-mono text-xs">
                  #TRX-99405
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/5 transition-colors">
                <TableCell className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <MdMilitaryTech className=" text-green-500" />
                    <span className="font-medium text-white">
                      Reward Payout
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-4 font-bold text-white">
                  ₦12,500.00
                </TableCell>
                <TableCell className="px-8 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                    Completed
                  </span>
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-400">
                  Oct 19, 2023 • 11:30
                </TableCell>
                <TableCell className="px-8 py-4 text-slate-500 font-mono text-xs">
                  #TRX-99382
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default Wallet;
