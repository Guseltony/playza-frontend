import { MdShare, MdPeople, MdAccountBalanceWallet } from "react-icons/md";

const ReferralHowItWorks = () => {
  const steps = [
    {
      icon: <MdShare className="text-2xl" />,
      title: "Share the Link",
      description: "Send your unique invite link to your teammates via social media, email, or gaming communities.",
      number: "1"
    },
    {
      icon: <MdPeople className="text-2xl" />,
      title: "Friends Join & Play",
      description: "They register using your link and complete their first competitive match on the platform.",
      number: "2"
    },
    {
      icon: <MdAccountBalanceWallet className="text-2xl" />,
      title: "Get Paid",
      description: "Instantly receive rewards in your wallet for every friend that meets the criteria.",
      number: "3"
    }
  ];

  return (
    <div className="mt-8 mb-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-black text-slate-100 uppercase tracking-wide">
          HOW IT WORKS
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Refer your friends in three simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-white/10 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-background border border-primary/30 text-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)] relative">
              {step.icon}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-background-dark font-bold flex items-center justify-center text-sm border-2 border-background">
                {step.number}
              </div>
            </div>
            <h3 className="text-slate-100 font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralHowItWorks;
