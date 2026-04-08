"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  ChevronDown,
  Filter,
  Bell,
  UserCircle,
  CheckCircle2,
} from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";

const LOCAL_JOBS = [
  {
    id: 1,
    title: "Front Desk Manager",
    employer: "Lakeview Heritage Homestay",
    verified: true,
    location: "Mall Road, Nainital",
    type: "Full-Time",
    salary: "₹15,000 - ₹20,000 / month",
    posted: "2 hours ago",
    tags: ["Hospitality", "English Speaking", "Computer Skills"],
  },
  {
    id: 2,
    title: "Experienced Barista",
    employer: "Pine & Brew Cafe",
    verified: true,
    location: "Tallital",
    type: "Full-Time",
    salary: "₹12,000 - ₹16,000 / month",
    posted: "5 hours ago",
    tags: ["Cafe", "Customer Service", "Beverage Prep"],
  },
  {
    id: 3,
    title: "Local Tour Guide",
    employer: "Naini Treks & Tours",
    verified: false,
    location: "Bhowali / Nainital",
    type: "Seasonal",
    salary: "₹500 / day + Tips",
    posted: "1 day ago",
    tags: ["Tourism", "Local Knowledge", "Communication"],
  },
  {
    id: 4,
    title: "Retail Sales Executive",
    employer: "Himalayan Woollens",
    verified: true,
    location: "Bhotia Market",
    type: "Full-Time",
    salary: "₹10,000 + Commission",
    posted: "2 days ago",
    tags: ["Retail", "Sales", "Inventory"],
  },
];

export default function SeekerDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-400 selection:text-white">
      <nav className="sticky top-0 w-full bg-white border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-600 font-bold text-xl tracking-tight">
            <FaRegHandshake className="text-cyan-500 text-2xl" />
            Connector
          </div>

          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-sky-500 transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                <UserCircle size={20} />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-sky-600 transition-colors hidden md:block">
                Rahul B.
              </span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
            <h1 className="text-2xl font-extrabold text-sky-950 mb-2">
              Find Local Work
            </h1>
            <p className="text-slate-500 mb-6">
              Discover opportunities across Nainital's cafes, hotels, and shops.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-3.5 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Job title, keywords, or employer..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all text-sm font-medium"
                />
              </div>
              <button className="bg-sky-50 text-sky-600 font-bold px-6 py-3 rounded-xl border border-sky-100 hover:bg-sky-100 hover:border-sky-200 transition-all flex items-center justify-center gap-2">
                <Filter size={18} /> Filters
              </button>
            </div>

            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {[
                "All Jobs",
                "Hospitality",
                "Retail",
                "Seasonal",
                "Mall Road",
              ].map((filter, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(filter.toLowerCase())}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeTab === filter.toLowerCase()
                      ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20"
                      : "bg-white text-slate-500 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {LOCAL_JOBS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-200 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-sky-950 group-hover:text-sky-600 transition-colors mb-1">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <span>{job.employer}</span>
                      {job.verified && (
                        <CheckCircle2 size={14} className="text-cyan-500" />
                      )}
                    </div>
                  </div>
                  <button className="text-slate-300 hover:text-cyan-500 transition-colors">
                    <Bookmark size={24} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <MapPin size={16} className="text-sky-500" /> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Briefcase size={16} className="text-sky-500" /> {job.type}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex gap-2">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <Clock size={12} /> {job.posted}
                    </span>
                    <button className="bg-sky-50 text-sky-600 font-bold px-5 py-2 rounded-xl hover:bg-sky-500 hover:text-white transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-sky-950 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-sky-900/20">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"></div>
            <h3 className="text-lg font-bold mb-2 relative z-10">
              Profile Strength
            </h3>
            <p className="text-sky-200 text-sm mb-4 relative z-10">
              Complete your profile to get matched with better employers.
            </p>
            <div className="w-full bg-sky-900 rounded-full h-2.5 mb-2 relative z-10">
              <div
                className="bg-cyan-400 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-right text-xs font-bold text-cyan-400 relative z-10">
              60% Completed
            </p>
            <button className="mt-4 w-full bg-white text-sky-900 font-bold py-2.5 rounded-xl hover:bg-sky-50 transition-colors text-sm relative z-10">
              Update Profile
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-sky-950 mb-4 flex items-center gap-2">
              <Bell className="text-cyan-500" size={18} /> Job Alerts
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Get notified when new jobs match your skills in Nainital.
            </p>
            <button className="w-full bg-slate-50 text-slate-600 font-bold py-2.5 rounded-xl border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all text-sm">
              Create Alert
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
