import {
  MdAdd,
  MdDesktopWindows,
  MdPayments,
  MdPhotoCamera,
  MdSecurity,
  MdSmartphone,
} from "react-icons/md";

const Settings = () => {
  return (
    <section className="flex-1 custom-scrollbar overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
        <section className="space-y-6">
          {/* <div className="flex items-center gap-2 text-primary border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="material-symbols-outlined text-xl">
              account_circle
            </span>
            <h2 className="text-lg font-bold tracking-tight">
              Profile Settings
            </h2>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start">
            <div className="flex flex-col items-center gap-4">
              <div
                className="size-24 rounded-2xl bg-slate-100 dark:bg-slate-custom border-2 border-slate-200 dark:border-slate-800 relative group overflow-hidden"
                data-alt="Player profile picture placeholder"
              >
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTRp1_sbmUx0yY6FodbHtszGAcUBPop6CRljUKN9pUxBkh4QHv-j685IODQ9vs9HTN0BZhw_NhegqeZv5dRJRx_V0vXTrGmVZmPyJ8GIzbMHUVrBHxQcU1HPJYoUvxVdCQ6jBm2f_W0OMiT5NcGnBFfRFy_bozuXEBKxGyvd7xP1scI_l-IGyIHTN11tGegmAWt1MOY3Fk1CeIzxFO2PoJoMR8123ld7RXejdmncOF9YCpxbEkYkYeMFo_kqt483h_cTSi6BG-clgw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer border-2 border-red-800">
                  <MdPhotoCamera className="text-slate-900 dark:text-white" />
                </div>
              </div>
              <button className="text-[11px] font-bold text-primary uppercase hover:underline">
                Edit Photo
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Username
                  </label>
                  <input
                    className="w-full p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white"
                    type="text"
                    placeholder="CyberKnight_99"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    className="w-full p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white"
                    type="email"
                    placeholder="player@nexuspro.io"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Bio
                </label>
                <textarea
                  className="w-full p-4  bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800  rounded-lg text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white placeholder:text-slate-600"
                  placeholder="Tell the community about your gaming style..."
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-primary border-b border-slate-200 dark:border-slate-800 pb-2">
            <MdSecurity className="text-xl" />
            <h2 className="text-lg font-bold tracking-tight">
              Security &amp; Authentication
            </h2>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Two-Factor Authentication (2FA)
                </p>
                <p className="text-xs text-slate-500">
                  Protect your account with an extra layer of security via
                  mobile authenticator.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  checked
                  className="sr-only peer"
                  type="checkbox"
                  placeholder=""
                />
                <div className="w-11 h-6 bg-slate-300 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5] after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Recent Login Activity
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <MdDesktopWindows className="text-primary" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        Windows Desktop • Seoul, KR
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Chrome Browser • Active now
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase">
                    Current
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 opacity-60">
                  <div className="flex items-center gap-3">
                    <MdSmartphone className="text-slate-600 dark:text-slate-400" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        iPhone 15 Pro • Seoul, KR
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Nexus App • 4 hours ago
                      </p>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-red-500 uppercase hover:underline">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2 text-primary border-b border-slate-200 dark:border-slate-800 pb-2">
            <MdPayments className="text-xl" />
            <h2 className="text-lg font-bold tracking-tight">Payout Methods</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Primary Bank Account
              </p>
              <div className="space-y-4 ">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tighter">
                    Bank Name
                  </label>
                  <select className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white">
                    <option>Global Standard Bank</option>
                    <option>Neo Gaming Bank</option>
                    <option>Esports Financial Group</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tighter">
                    Account Number
                  </label>
                  <input
                    className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white font-mono tracking-widest"
                    type="text"
                    placeholder="**** **** **** 8829"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tighter">
                    Account Holder Name
                  </label>
                  <input
                    className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white uppercase"
                    type="text"
                    placeholder="LEE MIN-HO"
                  />
                </div>
              </div>
            </div>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <MdAdd />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Add Payout Method</p>
              <p className="text-xs text-slate-500">
                Add a bank account or digital wallet to receive your winnings.
              </p>
            </div>
          </div>
        </section>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button className="text-xs md:text-sm font-bold text-red-500 hover:text-red-400 transition-colors">
            Deactivate Account
          </button>
          <div className="flex gap-4">
            <button className="px-2 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold text-slate-600 dark:text-slate-400  hover:bg-slate-custom transition-all">
              Discard Changes
            </button>
            <button className="px-2 md:px-8 py-2 rounded-lg bg-primary text-background text-xs md:text-sm font-bold hover:brightness-110 shadow-lg shadow-primary/20 transition-all uppercase tracking-wide">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
