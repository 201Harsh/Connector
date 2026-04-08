import { FaRegHandshake } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-600 font-bold text-2xl tracking-tight">
            <FaRegHandshake className="text-cyan-500 text-3xl" />
            Connector
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#problem" className="hover:text-sky-500 transition-colors">
              The Challenge
            </a>
            <a
              href="#solution"
              className="hover:text-sky-500 transition-colors"
            >
              Platform
            </a>
            <a href="#impact" className="hover:text-sky-500 transition-colors">
              Impact
            </a>
          </div>
          <div className="flex gap-4">
            <button className="text-sky-600 font-semibold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors">
              Login
            </button>
            <button className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
