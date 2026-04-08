"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaRegHandshake } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50 border-b border-slate-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 text-sky-600 font-bold text-2xl tracking-tight cursor-pointer">
              <FaRegHandshake className="text-cyan-500 text-3xl" />
              Connector
            </div>
          </Link>

          <nav className="hidden md:flex gap-8 font-medium text-slate-600">
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
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <button className="text-sky-600 font-semibold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors">
                Login
              </button>
              <button className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all active:scale-95">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-sky-600 p-1 rounded-full hover:bg-sky-50 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-100 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white border-l border-slate-100 z-101 flex flex-col p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center gap-2 text-sky-600 font-bold text-xl tracking-tight">
                    <FaRegHandshake className="text-cyan-500 text-2xl" />
                    Connector
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-sky-500 rounded-full hover:bg-sky-50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-medium text-slate-600">
                <a
                  href="#problem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-sky-500 transition-colors border-b border-slate-100 pb-4"
                >
                  The Challenge
                </a>
                <a
                  href="#solution"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-sky-500 transition-colors border-b border-slate-100 pb-4"
                >
                  Platform
                </a>
                <a
                  href="#impact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-sky-500 transition-colors border-b border-slate-100 pb-4"
                >
                  Impact
                </a>
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-sky-600 font-semibold px-5 py-3 rounded-full border border-sky-200 hover:bg-sky-50 transition-colors text-center"
                >
                  Login
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-sky-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all active:scale-95 text-center"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
