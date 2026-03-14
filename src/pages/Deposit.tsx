import { CreditCard } from "lucide-react";
import { useEffect } from "react";
import {
  MdAccountBalanceWallet,
  MdArrowForward,
  MdClose,
} from "react-icons/md";
import { useNavigate } from "react-router";

const Deposit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      // restore scroll
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background/50 backdrop-blur-md z-40 px-2 pb-4 md:p-0  flex items-center justify-center overflow-y-auto">
      <div className=" font-display  relative pt-20 md:pt-0">
        {/* <!-- Background Decoration --> */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full"></div>
        {/* <!-- Modal Container --> */}
        <div className="relative w-full max-w-130 glass-effect rounded-xl shadow-2xl overflow-hidden border border-primary/20 pb-10">
          {/* <!-- Modal Header --> */}
          <div className="p-2 md:p-6 border-b border-white/5 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight  flex items-center gap-2">
                <MdAccountBalanceWallet className="text-primary" />
                Deposit Funds
              </h1>
              <p className=" text-sm">
                Add funds to your gaming wallet instantly.
              </p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className=" transition-colors"
            >
              <MdClose />
            </button>
          </div>
          {/* <!-- Modal Body --> */}
          <div className="p-2 md:p-6 flex flex-col gap-3 md:gap-6">
            {/* <!-- Amount Input Section --> */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium ">
                Amount (₦)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold text-lg">
                  ₦
                </span>
                <input
                  className="w-full bg-black/40 border border-primary/20 rounded-lg py-4 pl-10 pr-4  text-xl font-bold focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600"
                  placeholder="0.00"
                  type="number"
                />
              </div>
              {/* <!-- Quick Select Buttons --> */}
              <div className="flex gap-2 mt-1">
                <button className="flex-1 py-2 px-3 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/20 transition-all">
                  ₦1,000
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/20 transition-all">
                  ₦2,000
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/20 transition-all">
                  ₦5,000
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/20 transition-all">
                  ₦10,000
                </button>
              </div>
            </div>
            {/* <!-- Payment Method Selection --> */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium ">
                Select Payment Method
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <label className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-all group">
                  <input
                    checked
                    className="custom-radio h-5 w-5 border-2 border-primary/40 bg-transparent text-transparent checked:border-primary focus:ring-0"
                    name="payment"
                    type="radio"
                  />
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CreditCard />
                  </div>
                  <div className="flex flex-col">
                    <span className=" font-semibold text-sm">
                      Debit/Credit Card
                    </span>
                    <span className=" text-xs leading-tight">
                      Visa, Mastercard, Verve
                    </span>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-slate-900/5 dark:bg-white/5 cursor-pointer hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all group">
                  <input
                    className="custom-radio h-5 w-5 border-2 border-slate-600 bg-transparent text-transparent checked:border-primary focus:ring-0"
                    name="payment"
                    type="radio"
                  />
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800  group-hover:text-slate-200">
                    <MdAccountBalanceWallet />
                  </div>
                  <div className="flex flex-col">
                    <span className=" font-semibold text-sm">
                      Bank Transfer
                    </span>
                    <span className="text-slate-500 text-xs leading-tight">
                      Fast transfer from your bank app
                    </span>
                  </div>
                </label>
              </div>
            </div>
            {/* <!-- Order Summary Box --> */}
            {/* <div className="bg-black/40 rounded-lg p-4 border border-white/5 flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="">Deposit Amount</span>
                <span className=" font-medium">₦0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="">Processing Fee</span>
                <span className="text-primary font-medium">₦0.00</span>
              </div>
              <div className="h-px bg-slate-900/5 dark:bg-white/5 my-1"></div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-800 dark:text-slate-200 font-bold">Total Payable</span>
                <span className="text-primary text-lg font-black">₦0.00</span>
              </div>
            </div> */}
            {/* <!-- Primary Action --> */}
            <div className="flex flex-col gap-4 mt-2">
              <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(19,236,236,0.3)] flex items-center justify-center gap-2">
                Proceed to Payment
                <MdArrowForward className="text-xl" />
              </button>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className=" text-sm font-medium transition-colors underline underline-offset-4 decoration-slate-700"
                >
                  Cancel and return
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Footer Accent --> */}
          <div className="h-1 w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
