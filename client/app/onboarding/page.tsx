"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";

type Role = "seeker" | "employer" | null;

export default function OnboardingFlow() {
  const [step, setStep] = useState<number>(1);
  const [role, setRole] = useState<Role>(null);

  const handleRoleSelect = (selectedRole: Role) => {
    setRole(selectedRole);
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-6 selection:bg-cyan-400 selection:text-white">
      <div className="w-full max-w-4xl flex justify-between items-center mb-12">
        <div className="flex items-center gap-2 text-sky-600 font-bold text-xl tracking-tight">
          <FaRegHandshake className="text-cyan-500 text-2xl" />
          Connector
        </div>
        <div className="text-sm font-medium text-slate-400">
          Step <span className="text-sky-600 font-bold">{step}</span> of 2
        </div>
      </div>

      <div className="w-full max-w-4xl relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-sky-950 mb-4">
                How will you use Connector?
              </h1>
              <p className="text-slate-500 mb-12 max-w-lg">
                Tell us why you are here so we can customize your dashboard and
                connect you with the right people in Nainital.
              </p>

              <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
                <button
                  onClick={() => handleRoleSelect("seeker")}
                  className="cursor-pointer group bg-white border-2 border-slate-100 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 rounded-3xl p-8 text-left transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <User size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-sky-950 mb-2">
                    I need a job
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Create a profile, list your skills, and apply directly to
                    local cafes, hotels, and shops.
                  </p>
                  <div className="absolute top-8 right-8 text-slate-200 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                    <ArrowRight size={24} />
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect("employer")}
                  className="cursor-pointer group bg-white border-2 border-slate-100 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 rounded-3xl p-8 text-left transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-sky-950 mb-2">
                    I want to hire
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Post job openings and find reliable local staff for your
                    business, homestay, or agency.
                  </p>
                  <div className="absolute top-8 right-8 text-slate-200 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                    <ArrowRight size={24} />
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <button
                onClick={() => setStep(1)}
                className="cursor-pointer flex items-center gap-2 text-slate-400 hover:text-sky-600 font-medium mb-8 transition-colors"
              >
                <ArrowLeft size={18} /> Back to roles
              </button>

              <h2 className="text-3xl font-extrabold text-sky-950 mb-2">
                {role === "seeker"
                  ? "Complete your Profile"
                  : "Register your Business"}
              </h2>
              <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">
                {role === "seeker"
                  ? "Highlight your skills to get matched with local employers."
                  : "Help local talent find you by providing your business details."}
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {role === "seeker" && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sky-950">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Bisht"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sky-950">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Highest Education
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all text-slate-600 bg-white">
                        <option value="">Select Education Level</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">
                          Graduate (B.A, B.Com, B.Sc, BBA)
                        </option>
                        <option value="postgraduate">Post Graduate</option>
                        <option value="diploma">
                          Hotel Management / Technical Diploma
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Primary Skill Category
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all text-slate-600 bg-white">
                        <option value="">
                          What kind of work are you looking for?
                        </option>
                        <option value="hospitality">
                          Hospitality (Waitstaff, Chef, Housekeeping)
                        </option>
                        <option value="retail">
                          Retail & Sales (Shop Assistant, Cashier)
                        </option>
                        <option value="admin">
                          Admin & Reception (Hotel Front Desk)
                        </option>
                        <option value="tourism">
                          Tourism (Tour Guide, Driver)
                        </option>
                        <option value="unskilled">
                          General Labor / Helpers
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Availability
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                          <input
                            type="radio"
                            name="availability"
                            className="accent-sky-500 w-4 h-4"
                          />{" "}
                          Year-Round
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                          <input
                            type="radio"
                            name="availability"
                            className="accent-sky-500 w-4 h-4"
                          />{" "}
                          Seasonal Only
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {role === "employer" && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lakeview Cafe & Restro"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sky-950">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sky-950">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Business Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all text-slate-600 bg-white">
                        <option value="">Select Category</option>
                        <option value="hotel">Hotel / Resort / Homestay</option>
                        <option value="restaurant">
                          Restaurant / Cafe / Bakery
                        </option>
                        <option value="retail">Retail Shop / Showroom</option>
                        <option value="travel">
                          Travel Agency / Taxi Stand
                        </option>
                        <option value="other">Other Small Business</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sky-950">
                        Nainital Location Area
                      </label>
                      <div className="relative">
                        <MapPin
                          className="absolute left-4 top-3.5 text-slate-400"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="e.g. Mall Road, Tallital, Bhowali"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button className="cursor-pointer w-full bg-sky-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all active:scale-[0.98] flex justify-center items-center gap-2">
                    <CheckCircle2 size={20} />
                    {role === "seeker"
                      ? "Create Seeker Profile"
                      : "Register Employer Account"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
