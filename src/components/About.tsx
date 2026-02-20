import { BsDiscord, BsFacebook, BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <div className="glass p-8 rounded-xl">
      <h3 className="font-heading text-xl font-bold text-white mb-4">
        About PlayPeak
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        PlayPeak is Nigeria's leading competitive skill gaming platform. We
        believe that gaming should be rewarding. Our mission is to provide a
        secure, fair, and high-energy environment where talented players can
        turn their gaming passion into real-world profit. With real-time
        leaderboards and instant payouts, the arena is always live.
      </p>
      <div className="flex gap-8 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">₦150M+</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            Paid Out
          </p>
        </div>
        <div className="text-center border-l border-slate-700 pl-8">
          <p className="text-2xl font-bold text-white">250K+</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            Active Users
          </p>
        </div>
      </div>
      {/* Social */}
      <div>
        <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
          Follow Us
        </h5>
        <div className="flex gap-4">
          {[BsDiscord, BsFacebook, BsTwitterX].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center
                        hover:bg-primary transition-all duration-300 text-white
                        hover:scale-110"
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
