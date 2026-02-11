import { currencies, transactions } from "@/constants/constants";
import type { Currency } from "@/types/types";
import {
  ChevronDown,
  Coins,
  CreditCard,
  History,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const WalletPage = () => {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showCurrencySelector, setShowCurrencySelector] = useState(false);
  const [depositMethod, setDepositMethod] = useState<
    "paystack" | "crypto" | null
  >(null);
  const [zaGold, setZaGold] = useState(3250);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawNote, setWithdrawNote] = useState("");

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0],
  );
  const handleDeposit = () => {
    const amount = parseInt(depositAmount);
    if (amount > 0) {
      setZaGold(zaGold + amount);
      setDepositAmount("");
      setShowDeposit(false);
    }
  };

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount);
    if (amount > 0 && amount <= zaGold) {
      setZaGold(zaGold - amount);
      setWithdrawAmount("");
      setShowWithdraw(false);
    }
  };

  const quickAmounts = [100, 500, 1000, 2000, 5000];
  return (
    <div className="px-4 py-6 pb-24 pt-24 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Wallet className="w-12 h-12 text-green-500" />
          <h2 className="text-4xl">My Wallet</h2>
        </div>
        <p className="text-gray-400">Manage your ZA Gold balance</p>
      </div>

      {/* Balance Card */}
      <div className="bg-linear-to-br from-green-900/60 to-emerald-800/40 backdrop-blur rounded-2xl p-8 border-2 border-green-600/50 mb-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-xl border-2 border-yellow-300/50 relative">
            <span
              className="text-2xl font-black text-gray-900 tracking-tighter"
              style={{ fontFamily: "system-ui" }}
            >
              Z
            </span>
            <div className="absolute inset-0 rounded-full bg-linear-to-t from-amber-700/30 to-transparent"></div>
          </div>
          <span className="text-gray-300 text-lg">ZA Gold Balance</span>
        </div>
        <div className="text-5xl font-bold text-white mb-6">
          {zaGold.toLocaleString()} <span className="text-yellow-400">ZG</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCurrencySelector(!showCurrencySelector)}
            className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 transition-colors relative"
          >
            <span className="text-xl">{selectedCurrency.flag}</span>
            <span className="text-gray-300 text-sm font-medium">
              {selectedCurrency.code}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          <span className="text-gray-300 text-sm">
            ≈ {selectedCurrency.symbol}
            {(zaGold * selectedCurrency.rate).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>

      {/* Currency Dropdown */}
      <div className=" -mt-12 relative">
        {showCurrencySelector && (
          <div className="bg-gray-800 absolute top-full left-9 border border-gray-700 rounded-xl p-2 min-w-50 shadow-xl z-35">
            {currencies.map((currency) => (
              <div
                key={currency.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCurrency(currency);
                  setShowCurrencySelector(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors ${
                  selectedCurrency.code === currency.code ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-xl">{currency.flag}</span>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-white">
                    {currency.code}
                  </div>
                  <div className="text-xs text-gray-400">
                    1 ZG = {currency.symbol}
                    {currency.rate.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-8 mt-16">
        <button
          onClick={() => setShowDeposit(true)}
          className="bg-linear-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2"
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Deposit</span>
        </button>
        <button
          onClick={() => setShowWithdraw(true)}
          className="bg-linear-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <TrendingDown className="w-5 h-5" />
          <span className="font-semibold">Withdraw</span>
        </button>
      </div>

      {/* Deposit Modal */}
      {showDeposit && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl p-6 max-w-md w-full border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Deposit ZA Gold</h3>
              <button
                onClick={() => setShowDeposit(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Enter Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-2xl text-white outline-none focus:border-green-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400 font-bold">
                  ZG
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Quick Select
              </label>
              <div className="flex gap-2 flex-wrap">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDepositAmount(amount.toString())}
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {amount} ZG
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Payment Method
              </label>
              <div className="space-y-2">
                <button
                  className="w-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-green-500 px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
                  onClick={() => setDepositMethod("paystack")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Paystack</div>
                      <div className="text-xs text-gray-400">
                        Card • Bank • Transfer
                      </div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs">✓ Instant</div>
                </button>
                <button
                  className="w-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-green-500 px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
                  onClick={() => setDepositMethod("crypto")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Coins className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Crypto</div>
                      <div className="text-xs text-gray-400">
                        USDT • BTC • ETH
                      </div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs">✓ Fast</div>
                </button>
              </div>
            </div>

            <button
              onClick={handleDeposit}
              className="w-full bg-linear-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-xl transition-all shadow-lg"
            >
              Confirm Deposit
            </button>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdraw && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl p-6 max-w-md w-full border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Withdraw ZA Gold</h3>
              <button
                onClick={() => setShowWithdraw(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-3 mb-6">
              <p className="text-blue-300 text-sm">
                Available Balance: {zaGold.toLocaleString()} ZG
              </p>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Enter Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0"
                  max={zaGold}
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-2xl text-white outline-none focus:border-blue-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400 font-bold">
                  ZG
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Withdraw To
              </label>
              <div className="space-y-2">
                <button className="w-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-blue-500 px-4 py-3 rounded-xl transition-colors flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <div className="text-left">
                    <div>Bank Account</div>
                    <div className="text-sm text-gray-400">****1234</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Note</label>
              <input
                type="text"
                value={withdrawNote}
                onChange={(e) => setWithdrawNote(e.target.value)}
                placeholder="Enter a note (optional)"
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleWithdraw}
              disabled={parseInt(withdrawAmount) > zaGold}
              className="w-full bg-linear-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white py-4 rounded-xl transition-all shadow-lg"
            >
              Confirm Withdrawal
            </button>
          </div>
        </div>
      )}

      {/* Transaction History */}
      <div className="bg-linear-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center gap-3 mb-6">
          <History className="w-6 h-6 text-gray-400" />
          <h3 className="text-xl font-semibold">Transaction History</h3>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "deposit"
                        ? "bg-green-900/50 text-green-400"
                        : transaction.type === "withdrawal"
                          ? "bg-blue-900/50 text-blue-400"
                          : "bg-purple-900/50 text-purple-400"
                    }`}
                  >
                    {transaction.type === "deposit" ? (
                      <TrendingUp className="w-5 h-5" />
                    ) : transaction.type === "withdrawal" ? (
                      <TrendingDown className="w-5 h-5" />
                    ) : (
                      <Coins className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {transaction.description}
                    </div>
                    <div className="text-sm text-gray-400">
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-bold ${
                      transaction.amount > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    {transaction.amount} ZG
                  </div>
                  <div
                    className={`text-xs ${
                      transaction.status === "completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {transaction.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
