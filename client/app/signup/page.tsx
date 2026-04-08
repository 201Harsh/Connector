"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden selection:bg-cyan-400 selection:text-white">
      {/* Ambient CyberBlue Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-300/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-300/20 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white border border-slate-100 shadow-2xl shadow-sky-900/5 rounded-3xl p-10 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
            <FaRegHandshake className="text-cyan-500 text-4xl" />
          </div>

          <h1 className="text-3xl font-extrabold text-sky-950 tracking-tight mb-2">
            Join Connector
          </h1>
          <p className="text-slate-500 mb-8">
            Access local opportunities or find the perfect candidate in
            Nainital.
          </p>

          {/* Value Prop Banner */}
          <div className="w-full bg-sky-50 text-sky-700 text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 border border-sky-100">
            <ShieldCheck size={18} className="text-cyan-500" />
            Verified profiles only. No spam accounts.
          </div>

          {/* Google Auth Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg py-4 px-6 rounded-full hover:border-sky-200 hover:bg-sky-50 transition-colors shadow-sm"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </motion.button>

          <p className="mt-8 text-xs text-slate-400 leading-relaxed max-w-xs">
            By continuing, you agree to Connector's{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Support Link */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Are you an Employer? You will choose your account type after signing
            in.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
