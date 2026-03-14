import { NavLink } from "react-router";

const CTAReferral = () => {
  return (
    <section className="bg-primary/20 backdrop-blur-3xl py-10 md:py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center @container">
        <div className="flex flex-col gap-12 lg:flex-row items-center">
          {/* <!-- Content Left --> */}
          <div className="flex flex-col items-center justify-center gap-8 flex-1 @[480px]:gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-slate-900 dark:text-white text-2xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                Invite Friends.{" "}
                <span className="text-primary">Earn Rewards.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed max-w-135">
                Earn up to{" "}
                <span className="text-accent font-extrabold">1,000 Za</span> on
                each referral
              </p>
            </div>
            {/* <!-- Buttons --> */}
            <div className="flex flex-wrap gap-4 pt-4">
              <NavLink to="/referral" className="flex min-w-45 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-slate-900 dark:text-white text-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Start Referring
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAReferral;
