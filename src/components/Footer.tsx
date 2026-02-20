import About from "./About";

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800 py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* About */}
          <div className="">
            <About />
          </div>

          {/* Platform */}
          <div className="flex justify-between md:justify-around">
            <div>
              <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Platform
              </h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    All Games
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Tournaments
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Leaderboards
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Support
              </h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Fair Play Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-500 mb-10">
          <p>© 2024 PlayPeak Interactive. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Responsible Gaming
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
