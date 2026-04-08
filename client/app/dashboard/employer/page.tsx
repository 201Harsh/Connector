"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Eye,
  Plus,
  MoreVertical,
  MapPin,
  Clock,
  CheckCircle2,
  TrendingUp,
  Bell,
  UserCircle,
} from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";

const ACTIVE_LISTINGS = [
  {
    id: 1,
    title: "Front Desk Manager",
    type: "Full-Time",
    location: "Mall Road, Nainital",
    posted: "2 days ago",
    status: "Active",
    applicants: 12,
    views: 145,
  },
  {
    id: 2,
    title: "Housekeeping Staff",
    type: "Seasonal",
    location: "Mall Road, Nainital",
    posted: "5 days ago",
    status: "Active",
    applicants: 8,
    views: 89,
  },
];

const RECENT_APPLICANTS = [
  { id: 1, name: "Rahul Bisht", role: "Front Desk Manager", match: "95%" },
  { id: 2, name: "Priya Sharma", role: "Housekeeping Staff", match: "88%" },
  { id: 3, name: "Amit Kumar", role: "Front Desk Manager", match: "72%" },
];

export default function EmployerDashboard() {
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
              <div className="w-8 h-8 bg-sky-950 text-white rounded-full flex items-center justify-center group-hover:bg-sky-800 transition-colors">
                <UserCircle size={20} />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-sky-600 transition-colors hidden md:block">
                Lakeview Heritage
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h1 className="text-2xl font-extrabold text-sky-950 mb-6">
              Welcome back, Lakeview!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                    <TrendingUp size={12} /> +1
                  </span>
                </div>
                <h3 className="text-3xl font-black text-sky-950 mb-1">2</h3>
                <p className="text-sm font-medium text-slate-500">
                  Active Listings
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                    <TrendingUp size={12} /> +4
                  </span>
                </div>
                <h3 className="text-3xl font-black text-sky-950 mb-1">20</h3>
                <p className="text-sm font-medium text-slate-500">
                  Total Applicants
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center">
                    <Eye size={20} />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-sky-950 mb-1">234</h3>
                <p className="text-sm font-medium text-slate-500">
                  Profile Views
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-sky-950">
                Your Active Listings
              </h2>
              <button className="text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {ACTIVE_LISTINGS.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-sky-950 group-hover:text-sky-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1">
                          <CheckCircle2 size={12} /> {job.status}
                        </span>
                      </div>
                      <div className="flex gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-slate-400" />{" "}
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-slate-400" />{" "}
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-sky-600 transition-colors p-2 rounded-full hover:bg-slate-50">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-cyan-500" />
                        <span className="text-sm font-bold text-sky-950">
                          {job.applicants}{" "}
                          <span className="text-slate-500 font-medium">
                            Applicants
                          </span>
                        </span>
                      </div>
                      <div className="w-px h-4 bg-slate-200"></div>
                      <div className="flex items-center gap-2">
                        <Eye size={16} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-500">
                          {job.views} Views
                        </span>
                      </div>
                    </div>

                    <button className="bg-sky-50 text-sky-600 font-bold px-4 py-2 rounded-xl hover:bg-sky-100 transition-all text-sm">
                      Review Candidates
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl p-1 shadow-lg shadow-sky-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Briefcase size={120} />
            </div>
            <div className="bg-sky-600/20 backdrop-blur-sm rounded-[1.35rem] p-6 text-white relative z-10">
              <h3 className="text-xl font-bold mb-2">Need more staff?</h3>
              <p className="text-sky-100 text-sm mb-6 leading-relaxed">
                Post a new job requirement and reach hundreds of verified local
                workers in Nainital instantly.
              </p>
              <button className="w-full bg-white text-sky-600 font-bold py-3 rounded-xl shadow-md hover:bg-sky-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <Plus size={18} /> Post New Opportunity
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-sky-950">Recent Applications</h3>
            </div>

            <div className="space-y-4">
              {RECENT_APPLICANTS.map((applicant) => (
                <div
                  key={applicant.id}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">
                      {applicant.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-sky-950">
                        {applicant.name}
                      </p>
                      <p className="text-xs text-slate-500">{applicant.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md">
                      {applicant.match} Match
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors py-2">
              View all candidates
            </button>
          </div>

          <div className="bg-sky-950 rounded-3xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none"></div>
            <div className="inline-block bg-sky-900 border border-sky-800 text-cyan-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Premium Feature
            </div>
            <h3 className="text-lg font-bold mb-2">Automated Skill Matching</h3>
            <p className="text-sky-200 text-sm mb-6 leading-relaxed">
              Upgrade to Connector Pro to instantly match your job posts with
              the top 5% of local talent.
            </p>
            <button className="w-full bg-cyan-500 text-sky-950 font-bold py-2.5 rounded-xl hover:bg-cyan-400 transition-colors text-sm shadow-lg shadow-cyan-500/20">
              Explore Pro Plans
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
