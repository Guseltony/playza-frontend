import { Smartphone } from "lucide-react";

const AppNotification = () => {
  return (
    <div className="mt-20 md:mt-20">
      {/* Mobile App Notification Banner */}

      <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border-b border-blue-500/30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center">
          <Smartphone className="w-5 h-5 text-blue-400" />
          <p className="text-sm text-blue-300">
            📱 <span className="font-semibold">Mobile App Coming Soon!</span>{" "}
            Stay tuned for iOS & Android launch in Q2 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppNotification;
