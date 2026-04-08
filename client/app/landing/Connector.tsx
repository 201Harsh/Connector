"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  MapPin,
  Briefcase,
  TrendingUp,
  Search,
  Users,
  ShieldCheck,
} from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to(".hero-accent", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLHeadingElement) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-400 selection:text-white overflow-x-hidden">
      <Header />

      <section
        ref={heroRef}
        className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 font-medium text-sm mb-8 border border-cyan-100">
          <MapPin size={16} /> Empowering Local Employment in Nainital
        </div>

        <h1
          ref={addToRefs}
          className="text-5xl md:text-7xl font-extrabold text-sky-950 tracking-tight leading-tight max-w-4xl"
        >
          Bridging the gap between <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-cyan-500">
            talent and opportunity.
          </span>
        </h1>

        <p
          ref={addToRefs}
          className="mt-6 text-xl text-slate-500 max-w-2xl leading-relaxed"
        >
          A dedicated digital platform designed to combat seasonal unemployment
          by connecting local job seekers with businesses in the Nainital
          region.
        </p>

        <div
          ref={addToRefs}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link href="/signup">
            <button className="cursor-pointer bg-sky-500 text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg shadow-xl shadow-sky-500/20 hover:bg-sky-600 hover:-translate-y-1 transition-all">
              I am looking for a job <Search size={20} />
            </button>
          </Link>

          <Link href="/signup">
            <button className="cursor-pointer bg-white text-sky-600 border-2 border-sky-100 font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg hover:border-sky-500 hover:bg-sky-50 transition-all">
              I want to hire <Users size={20} />
            </button>
          </Link>
        </div>

        <div className="hero-accent mt-20 w-full max-w-4xl h-64 bg-linear-to-r from-sky-50 to-cyan-50 rounded-3xl border border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="z-10 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
              <FaRegHandshake size={32} />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500 font-medium">Smart Match</p>
              <p className="text-xl font-bold text-sky-950">
                Local Skilled Worker ↔ Local Business
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="py-24 bg-sky-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                The Nainital Challenge
              </h2>
              <p className="text-sky-100 text-lg leading-relaxed mb-6">
                Our local economy is heavily dependent on the seasonal tourism
                cycle. This creates a volatile environment where jobs vanish
                during the off-season, leading to severe underemployment.
              </p>
              <ul className="space-y-4 text-sky-200">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>{" "}
                  Educated individuals working below their skill level
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>{" "}
                  Youth migrating to Delhi and Dehradun for stability
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>{" "}
                  Long-term economic stagnation for local businesses
                </li>
              </ul>
            </div>

            <div className="bg-sky-900 border border-sky-800 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={120} />
              </div>
              <p className="text-sky-300 font-medium text-lg uppercase tracking-wider mb-2">
                RTI Data (2017)
              </p>
              <h3 className="text-6xl font-black text-cyan-400 mb-4">99,660</h3>
              <p className="text-xl font-medium">
                Individuals registered as unemployed in the Nainital district.
              </p>
              <p className="mt-4 text-sm text-sky-300">
                We are here to change this number.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solution" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-950 mb-4">
              How Connector Works
            </h2>
            <p className="text-slate-500 text-lg">
              A simple, accessible system built specifically for small-scale
              local opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search />,
                title: "Centralized Listings",
                desc: "One unified dashboard for all local hotel, shop, and agency jobs.",
              },
              {
                icon: <ShieldCheck />,
                title: "Skill-Based Matching",
                desc: "Our system maps candidate education directly to relevant employer needs.",
              },
              {
                icon: <Briefcase />,
                title: "Direct Applications",
                desc: "No middle-men. Job seekers apply and chat directly with local entrepreneurs.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all"
              >
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-sky-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-sky-400 to-cyan-500 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-300/20 blur-3xl rounded-full"></div>

            <TrendingUp className="text-white w-16 h-16 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Targeting Sustainable Growth
            </h2>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto mb-10 relative z-10 leading-relaxed">
              By making jobs accessible year-round and maximizing local talent,
              Connector aims to increase local income levels by an estimated{" "}
              <strong className="text-white underline decoration-cyan-300">
                15–25%
              </strong>{" "}
              over time.
            </p>

            <button className="bg-white text-sky-600 font-bold px-10 py-4 rounded-full text-lg shadow-xl shadow-white/20 hover:bg-sky-50 transition-all relative z-10">
              Join the Platform Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
