"use client";

import Link from "next/link";
import { FaRegHandshake } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-sky-100 pt-20 pb-10 border-t border-sky-900 selection:bg-cyan-400 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tight cursor-pointer">
                <FaRegHandshake className="text-cyan-400 text-3xl" />
                Connector
              </div>
            </Link>
            <p className="text-sky-300 text-sm leading-relaxed max-w-xs">
              Bridging the gap between talent and opportunity in Nainital.
              Building sustainable local economies through digital
              accessibility.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">
              For Seekers
            </h3>
            <ul className="space-y-4 text-sm text-sky-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Browse Local Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Skill Matching Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">
              For Employers
            </h3>
            <ul className="space-y-4 text-sm text-sky-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Post an Opportunity
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Browse Candidates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  Pricing & Plans{" "}
                  <span className="px-2 py-0.5 bg-sky-800 text-cyan-300 text-[10px] uppercase rounded-full font-bold tracking-wider">
                    Pro
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Employer Trust Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Connect</h3>
            <ul className="space-y-4 text-sm text-sky-300">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400" />
                Nainital, Uttarakhand
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400" />
                hello@connector.in
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" />
                Support Center
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sky-400">
          <p>
            © {new Date().getFullYear()} Connector Platform. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
