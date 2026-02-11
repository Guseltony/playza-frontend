import { steps } from "@/constants/constants";

const HowItWorks = () => {
  return (
    <div>
      <section className="relative px-4 py-16 bg-gray-800/30 overflow-hidden">
        {/* Subtle grid accent */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div
            style={{
              backgroundImage: `
                      linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                    `,
              backgroundSize: "20px 20px",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Get started in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-2 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group shadow-lg hover:shadow-cyan-500/20 md:h-64">
                  <div className="text-5xl font-bold text-gray-800 mb-4">
                    {step.number}
                  </div>
                  <div className="flex flex-row md:flex-col items-center gap-5 ">
                    <step.icon className="w-12 h-12 text-cyan-400 md:mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" />

                    <div className="flex flex-col gap-2 ">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-xs md:text-sm text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Neon corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-magenta-500/50 rounded-br-2xl"></div>
                </div>
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-400/50" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
