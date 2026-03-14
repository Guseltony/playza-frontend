import { MdLocationOn } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

const Profile = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full md:px-10">
      {/* <!-- Profile Header --> */}
      <div className="glass-card rounded-2xl p-2.5 md:p-8 mb-4 md:mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center md:items-start relative z-10">
          <div className="relative">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-32 border-4 border-primary/20 glow-accent"
              data-alt="Main profile picture of AnthonyGamer"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj713r4_AP0JQgmPFYnmzRh1SV79sZbpL4MICPWQs9hBCqUTk2PisA4wbOCgB8ALSP4IpFKuovZHLcdzP0gflxdAbwM9sZsKHOr08E8cwmztSU6P6BZEyEYl0aXjHFaxd5iCMr_ZeatpKGFtUNw7KNe6Zi1ImYA2nVtjSqbcdJTYzpKvs2JvwjRpFcr2mmGQ5pNvu5r_u6Q145YXSiIY98EfLGAnrC_QfzbgQrD0xEjGGKPyEgXb9e1uvQJ66VKtSbQWGMjjWR-Wv-')",
              }}
            ></div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              PRO
            </div>
          </div>
          <div className="flex flex-col flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
              <h1 className="text-slate-900 dark:text-slate-100 text-xl md:text-3xl font-bold">
                AnthonyGamer
              </h1>
              <span className="w-fit inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30 uppercase tracking-widest">
                Gold III Rank
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-4">
              ID #A92011 • Member since Jan 2024
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">
                  Total Earnings
                </p>
                <p className="text-slate-900 dark:text-slate-100 md:text-xl font-bold">₦18,300</p>
              </div>
              <div className="w-px h-10 bg-slate-900/10 dark:bg-white/10 hidden md:block"></div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">
                  Country
                </p>
                <p className="text-slate-900 dark:text-slate-100 md:text-xl font-bold flex items-center gap-2">
                  <MdLocationOn className="text-primary text-sm md:text-lg" />{" "}
                  Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all">
              Edit Profile
            </button>
            <NavLink to="/referral" className="flex-1 md:flex-none px-6 py-2.5 bg-primary/20 border border-primary/30 rounded-xl text-primary text-sm font-bold hover:bg-primary/30 transition-all text-center">
              Referral Earns
            </NavLink>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-background-dark rounded-xl text-sm font-bold hover:bg-primary/90 transition-all">
              Share Profile
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Tabs --> */}
      <div className="flex border-b border-white/5 mb-8 gap-6 md:gap-10 overflow-x-auto">
        {["Overview", "History", "Achievements", "Settings"].map((tab) => (
          <NavLink
            to={tab.toLowerCase()}
            key={tab}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-primary pb-4 px-2 ${isActive ? "border-b-2 border-primary" : ""}`
            }
          >
            <p className="text-sm font-bold tracking-wide">{tab}</p>
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
