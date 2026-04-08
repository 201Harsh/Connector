"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Briefcase,
  Activity,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Search,
  Settings,
  BarChart3,
  Bell,
  MapPin,
} from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";

const PLATFORM_STATS = [
  {
    title: "Total Seekers",
    value: "1,248",
    trend: "+12% this week",
    icon: <Users size={20} />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Verified Employers",
    value: "312",
    trend: "+5% this week",
    icon: <Building2 size={20} />,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Active Jobs",
    value: "84",
    trend: "+18% this week",
    icon: <Briefcase size={20} />,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Pending Verifications",
    value: "7",
    trend: "Requires Action",
    icon: <ShieldAlert size={20} />,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

const PENDING_EMPLOYERS = [
  {
    id: 1,
    name: "Himalayan Roots Homestay",
    contact: "Rajeev Verma",
    location: "Bhowali",
    applied: "2 hours ago",
  },
  {
    id: 2,
    name: "The Mall Road Cafe",
    contact: "Simran Kaur",
    location: "Mall Road",
    applied: "5 hours ago",
  },
  {
    id: 3,
    name: "Naini Adventure Sports",
    contact: "Amit Bisht",
    location: "Tallital",
    applied: "1 day ago",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 selection:bg-cyan-400 selection:text-white flex flex-col md:flex-row">
      <aside className="hidden md:flex w-64 bg-sky-950 text-sky-100 flex-col h-screen sticky top-0 border-r border-sky-900 shadow-2xl">
        <div className="h-20 flex items-center px-6 border-b border-sky-800/50 mb-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <FaRegHandshake className="text-cyan-400 text-2xl" />
            Admin Control
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <button className="w-full flex items-center gap-3 bg-sky-900 text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Activity size={18} className="text-cyan-400" /> Dashboard
          </button>
          <button className="w-full flex items-center gap-3 text-sky-300 hover:bg-sky-900 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Users size={18} /> Manage Seekers
          </button>
          <button className="w-full flex items-center gap-3 text-sky-300 hover:bg-sky-900 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Building2 size={18} /> Manage Employers
          </button>
          <button className="w-full flex items-center gap-3 text-sky-300 hover:bg-sky-900 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Briefcase size={18} /> Job Listings
          </button>
          <button className="w-full flex items-center gap-3 text-sky-300 hover:bg-sky-900 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <BarChart3 size={18} /> Platform Analytics
          </button>
        </nav>

        <div className="p-4 border-t border-sky-800/50">
          <button className="w-full flex items-center gap-3 text-sky-300 hover:bg-sky-900 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Settings size={18} /> Settings
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <h1 className="text-xl font-bold text-sky-950">Platform Overview</h1>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search
                className="absolute left-3 top-2.5 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search users, jobs..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm w-64"
              />
            </div>
            <button className="text-slate-400 hover:text-sky-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-9 h-9 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold text-sm border border-cyan-200">
              AD
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-sky-950 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-slate-600 mb-2">
                  {stat.title}
                </p>
                <p className="text-xs font-medium text-slate-400">
                  {stat.trend}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-sky-950 flex items-center gap-2">
                  <ShieldAlert className="text-amber-500" size={20} /> Action
                  Required: Verification
                </h2>
                <button className="text-sm font-bold text-sky-600 hover:text-sky-700">
                  View All
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {PENDING_EMPLOYERS.map((employer) => (
                  <div
                    key={employer.id}
                    className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <h3 className="font-bold text-sky-950">
                        {employer.name}
                      </h3>
                      <div className="flex gap-4 mt-1 text-sm text-slate-500">
                        <span>{employer.contact}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {employer.location}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Applied {employer.applied}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 bg-emerald-50 text-emerald-600 font-bold px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                        <CheckCircle2 size={16} /> Approve
                      </button>
                      <button className="flex items-center gap-1 bg-red-50 text-red-600 font-bold px-4 py-2 rounded-lg hover:bg-red-100 transition-colors text-sm">
                        <XCircle size={16} /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-lg font-bold text-sky-950">
                  Recent Platform Activity
                </h2>
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    text: "New job posted by Pine & Brew Cafe",
                    time: "10 mins ago",
                    type: "job",
                  },
                  {
                    text: "Seeker Rahul B. updated profile",
                    time: "45 mins ago",
                    type: "user",
                  },
                  {
                    text: "System daily backup completed",
                    time: "2 hours ago",
                    type: "system",
                  },
                  {
                    text: "5 new seekers registered",
                    time: "3 hours ago",
                    type: "user",
                  },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          log.type === "job"
                            ? "bg-emerald-400"
                            : log.type === "user"
                              ? "bg-cyan-400"
                              : "bg-slate-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        {log.text}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
