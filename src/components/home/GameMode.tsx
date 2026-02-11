import { gameModes } from "@/constants/constants";

const GameMode = () => {
  return (
    <div>
      <section className="relative px-4 py-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `
                      linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
                    `,
              backgroundSize: "30px 30px",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Neon accent lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-magenta-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Choose Your Game Mode
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Multiple ways to showcase your skills and win
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameModes.map((mode, index) => (
              <div key={index} className="relative group cursor-pointer">
                {/* Wireframe border effect */}
                <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl group-hover:border-cyan-500/60 transition-all">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-magenta-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-magenta-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                </div>

                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all shadow-lg group-hover:shadow-cyan-500/30">
                  <mode.icon className="w-12 h-12 text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {mode.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{mode.description}</p>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-magenta-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-magenta-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameMode;
