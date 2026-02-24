import { AlertCircle, Check, Trophy } from "lucide-react";

const InstructionTab = () => {
  return (
    <div>
      <div id="content-instructions" className="tab-content space-y-6">
        <div className="glass-panel rounded-xl p-6 space-y-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
              <i
                data-lucide="book-open"
                className="w-5 h-5 text-purple-400"
              ></i>
              How It Works
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                {
                  id: 1,
                  desc: "Answer trivia questions as quickly as possible. Speed matters!",
                },
                {
                  id: 2,
                  desc: "Correct answers earn points based on response time (max 1000 pts per question).",
                },
                {
                  id: 3,
                  desc: "Wrong answers or timeouts result in 0 points for that question.",
                },
                {
                  id: 4,
                  desc: "Top 10 players split the prize pool based on rank distribution.",
                },
              ].map(({ id, desc }) => (
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                    {id}
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Winning Rules
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  rule: "Scoring System",
                  desc: "Points = (Time Remaining / Total Time) × 1000. Faster answers = More points.",
                },
                {
                  rule: "Tie Breaker",
                  desc: " If tied, player with faster total completion time wins If still tied, split prize.",
                },
              ].map(({ rule, desc }) => (
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{rule}</h4>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              Entry Requirements
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Verified Palyza account",
                "Sufficient balance ($5.00 entry fee)",
                " Stable internet connection (required)",
                "Join before match timer ends",
              ].map((req) => (
                <li key={req} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionTab;
