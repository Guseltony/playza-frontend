import { stats } from "@/constants/constants";
import {
  Camera,
  Check,
  ChevronRight,
  Copy,
  CreditCard,
  History,
  Lock,
  Shield,
  User,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showPersonalModal, setShowPersonalModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Profile Information
  const [username, setUsername] = useState("Alex Thunder");
  const [email, setEmail] = useState("alex.thunder@email.com");
  const [phone, setPhone] = useState("+234 801 234 5678");
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [joinDate] = useState("January 2024");

  // Bank Information
  const [bankName, setBankName] = useState("First Bank Nigeria");
  const [accountNumber, setAccountNumber] = useState("1234567890");
  const [accountName, setAccountName] = useState("Alex Thunder");

  // EVM Wallet
  const [evmWallet, setEvmWallet] = useState(
    "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  );
  const [tempEvmWallet, setTempEvmWallet] = useState(evmWallet);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuItems = [
    {
      icon: User,
      title: "Personal Information",
      description: "Update your profile details",
      onClick: () => setShowPersonalModal(true),
      status: "Complete",
    },
    {
      icon: CreditCard,
      title: "Bank Information",
      description: "Manage withdrawal account",
      onClick: () => setShowBankModal(true),
      status: bankName ? "Complete" : "Incomplete",
    },
    {
      icon: Wallet,
      title: "EVM Wallet Address",
      description: "Add crypto wallet for rewards",
      onClick: () => setShowWalletModal(true),
      status: evmWallet ? "Complete" : "Not Set",
    },
    {
      icon: Lock,
      title: "Change Password",
      description: "Update your password",
      onClick: () => {},
      status: "",
    },
    {
      icon: Shield,
      title: "Two-Factor Authentication",
      description: "Secure your account",
      onClick: () => {},
      status: "Not Enabled",
    },
    {
      icon: History,
      title: "Login History",
      description: "View recent activities",
      onClick: () => {},
      status: "",
    },
  ];

  return (
    <div className="px-4 py-6 pb-24 pt-24 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              AT
            </div>
            <button className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-500 rounded-full p-3 shadow-lg transition-colors">
              <Camera className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">{username}</h3>
            <p className="text-gray-400 mb-4">{email}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-600/30">
                ✓ Verified
              </span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                Level 12
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700"
            >
              <div className="text-sm md:text-2xl mb-2">{stat.icon}</div>
              <div className="text-sm md:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map(
          ({ onClick, description, title, status, icon: Icon }, index) => (
            <button
              key={index}
              onClick={onClick}
              className="w-full bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm md:text-base font-semibold mb-1">
                    {title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {description}
                  </div>
                </div>
                {status && (
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      status === "Complete"
                        ? "bg-green-600/20 text-green-400 border border-green-600/30"
                        : status === "Not Enabled" || status === "Not Set"
                          ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30"
                          : "bg-red-600/20 text-red-400 border border-red-600/30"
                    }`}
                  >
                    {status}
                  </div>
                )}
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
            </button>
          ),
        )}
      </div>

      {/* Personal Information Modal */}
      {showPersonalModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 max-w-md w-full border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <User className="w-6 h-6 text-green-400" />
                Personal Information
              </h3>
              <button
                onClick={() => setShowPersonalModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                />
              </div>
            </div>

            <button
              onClick={() => setShowPersonalModal(false)}
              className="w-full bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-xl transition-all shadow-lg mt-6"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Bank Information Modal */}
      {showBankModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 max-w-md w-full border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-green-400" />
                Bank Information
              </h3>
              <button
                onClick={() => setShowBankModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Bank Name
                </label>
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                >
                  <option>First Bank Nigeria</option>
                  <option>GTBank</option>
                  <option>Access Bank</option>
                  <option>UBA</option>
                  <option>Zenith Bank</option>
                  <option>Stanbic IBTC</option>
                  <option>Kuda Bank</option>
                  <option>Opay</option>
                  <option>Palmpay</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                  placeholder="1234567890"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Account Name
                </label>
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
                  placeholder="Your Full Name"
                />
              </div>
            </div>

            <div className="mt-4 bg-blue-900/30 border border-blue-700/50 rounded-lg p-3">
              <p className="text-blue-300 text-sm">
                💡 This bank account will be used for withdrawals. Ensure
                details are accurate.
              </p>
            </div>

            <button
              onClick={() => setShowBankModal(false)}
              className="w-full bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-xl transition-all shadow-lg mt-6"
            >
              Save Bank Details
            </button>
          </div>
        </div>
      )}

      {/* EVM Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 max-w-md w-full border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Wallet className="w-6 h-6 text-green-400" />
                EVM Wallet Address
              </h3>
              <button
                onClick={() => setShowWalletModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-400 block mb-2">
                Wallet Address (Ethereum, BSC, Polygon, etc.)
              </label>
              <input
                type="text"
                value={tempEvmWallet}
                onChange={(e) => setTempEvmWallet(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500 font-mono text-sm"
                placeholder="0x..."
              />
            </div>

            {evmWallet && (
              <div className="mb-4 bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700">
                <label className="text-sm text-gray-400 block mb-2">
                  Current Wallet
                </label>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white font-mono text-xs break-all">
                    {evmWallet}
                  </p>
                  <button
                    onClick={() => copyToClipboard(evmWallet)}
                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="mb-6 bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-3">
              <p className="text-yellow-300 text-sm">
                ⚠️ Double-check your wallet address. Sending to wrong address
                cannot be reversed.
              </p>
            </div>

            <button
              onClick={() => {
                setEvmWallet(tempEvmWallet);
                setShowWalletModal(false);
              }}
              className="w-full bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-xl transition-all shadow-lg"
            >
              Save Wallet Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
