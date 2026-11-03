"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon, Clock, MapPin, Tag, Filter,
  ExternalLink, ChevronLeft, ChevronRight, CheckCircle2,
  Users, Sparkles, BookOpen, AlertCircle, X, Plus
} from "lucide-react";

const initialAcademicEvents = [
  {
    id: "acad-1",
    title: "SPPU In-Semester Exam (In-Sem 1)",
    category: "exam",
    startDate: "2026-10-14",
    endDate: "2026-10-18",
    time: "10:30 AM – 01:30 PM",
    venue: "Main Examination Hall, ICEM",
    organizer: "SPPU Examination Cell",
    description: "Compulsory in-semester descriptive evaluations across Third & Final Year AI & Data Science subjects.",
    badge: "Official Exam",
  },
  {
    id: "acad-2",
    title: "CodeStorm 24-Hour AI Hackathon",
    category: "chapter",
    startDate: "2026-10-24",
    endDate: "2026-10-25",
    time: "09:00 AM – Next Day 10:00 AM",
    venue: "ICEM Central Auditorium & AI Compute Labs",
    organizer: "ICEM ACM Student Chapter",
    description: "Flagship 24-hr overnight hackathon focusing on practical AI solutions for campus ecosystems with ₹50,000 in prizes.",
    badge: "Flagship Chapter Event",
    link: "/events",
  },
  {
    id: "acad-3",
    title: "Generative AI & Deep Learning Bootcamp",
    category: "workshop",
    startDate: "2026-11-04",
    endDate: "2026-11-06",
    time: "02:00 PM – 05:30 PM",
    venue: "AI & DS Seminar Hall 301",
    organizer: "ICEM ACM Technical Cohort",
    description: "Hands-on PyTorch, Transformers, and fine-tuning open-weights models on department workstation GPUs.",
    badge: "Certified Workshop",
    link: "/events",
  },
  {
    id: "acad-4",
    title: "Diwali Institutional Break & Vacation",
    category: "holiday",
    startDate: "2026-11-10",
    endDate: "2026-11-16",
    time: "All Day",
    venue: "ICEM Campus Closed",
    organizer: "Indira College Administration",
    description: "Official institutional holiday period as notified by the college directorate.",
    badge: "College Holiday",
  },
  {
    id: "acad-5",
    title: "BE Capstone Project Phase 1 Synopsis Submission",
    category: "milestone",
    startDate: "2026-11-20",
    endDate: "2026-11-20",
    time: "Before 04:00 PM",
    venue: "AI & DS Department Project Secretariat",
    organizer: "Academic Project Committee",
    description: "Final deadline for synopsis approval, problem statements, and guide sign-offs for final-year students.",
    badge: "Academic Deadline",
  },
  {
    id: "acad-6",
    title: "Research Paper Reading Circle (Vision-Language Models)",
    category: "chapter",
    startDate: "2026-11-28",
    endDate: "2026-11-28",
    time: "03:00 PM – 05:00 PM",
    venue: "Room 204, AI-DS Dept",
    organizer: "ICEM ACM Student Chapter",
    description: "Peer discussion on recent multi-modal research papers and Jupyter notebook architecture reproductions.",
    badge: "Research Circle",
    link: "/events",
  },
];

const categoryLabels = {
  all: "All Schedules",
  chapter: "Chapter Hackathons & Events",
  exam: "University Exams (SPPU)",
  workshop: "Technical Bootcamps",
  milestone: "Project Milestones",
  holiday: "Institutional Holidays",
};

export default function CalendarPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [eventsList, setEventsList] = useState(initialAcademicEvents);
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // "list" | "grid"

  // Load custom events from localStorage (synced with Chapter Portal)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("acm_custom_events");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const dynamicEvents = parsed.map((e) => ({
            id: e.id || `custom-${Date.now()}`,
            title: e.title || e.name || "Chapter Activity",
            category: "chapter",
            startDate: e.date || "2026-10-30",
            endDate: e.date || "2026-10-30",
            time: "10:00 AM – 04:00 PM",
            venue: e.venue || "Campus Auditorium / Labs",
            organizer: e.uploadedBy || "ICEM ACM Student Chapter",
            description: e.desc || e.description || "Activity organized by chapter coordinators.",
            badge: "Live Chapter Event",
            link: e.regLink || "/events",
          }));
          setEventsList([...initialAcademicEvents, ...dynamicEvents]);
        }
      }
    } catch (err) {}
  }, []);

  const filteredEvents = selectedFilter === "all"
    ? eventsList
    : eventsList.filter((e) => e.category === selectedFilter);

  const getCategoryColor = (cat) => {
    switch (cat) {
      case "chapter":
        return "bg-blue-100 text-[#003c84] border-blue-200";
      case "exam":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "workshop":
        return "bg-teal-100 text-teal-800 border-teal-200";
      case "holiday":
        return "bg-rose-100 text-rose-800 border-rose-200";
      case "milestone":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Event Details Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className={`inline-block text-[11px] font-bold uppercase px-3 py-1 rounded-full border ${getCategoryColor(activeModalEvent.category)}`}>
                {activeModalEvent.badge || activeModalEvent.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2.5">
                {activeModalEvent.title}
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="w-4 h-4 text-[#003c84] flex-shrink-0" />
                <span>
                  <strong>Date:</strong> {activeModalEvent.startDate} {activeModalEvent.endDate !== activeModalEvent.startDate && `to ${activeModalEvent.endDate}`}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#003c84] flex-shrink-0" />
                <span><strong>Time:</strong> {activeModalEvent.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#003c84] flex-shrink-0" />
                <span><strong>Venue:</strong> {activeModalEvent.venue}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#003c84] flex-shrink-0" />
                <span><strong>Organizer:</strong> {activeModalEvent.organizer}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeModalEvent.description}
            </p>

            <div className="pt-2 flex gap-3">
              {activeModalEvent.link ? (
                <Link
                  href={activeModalEvent.link}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white font-bold text-xs sm:text-sm text-center shadow-xs transition"
                >
                  View Details &amp; Register
                </Link>
              ) : null}
              <button
                type="button"
                onClick={() => setActiveModalEvent(null)}
                className="py-2.5 px-5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Academic Year 2026–27
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003c84] mt-2">
            Academic &amp; Chapter Calendar
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Synchronized schedule for the Department of AI &amp; Data Science. Track university exams, in-semester tests, chapter hackathons, bootcamps, capstone milestones, and institutional holidays.
          </p>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white text-xs sm:text-sm font-bold shadow-xs transition flex-shrink-0"
        >
          <span>Explore Hackathons</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Filter Tabs & View Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => {
            const isActive = selectedFilter === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedFilter(key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#003c84] text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200">
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              viewMode === "list" ? "bg-white text-[#003c84] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              viewMode === "grid" ? "bg-white text-[#003c84] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cards View
          </button>
        </div>
      </div>

      {/* Events List or Grid */}
      {filteredEvents.length === 0 ? (
        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center space-y-3">
          <CalendarIcon className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">No events found in this category</h3>
          <p className="text-xs text-slate-500">Select another filter or check back later for newly announced schedules.</p>
        </div>
      ) : viewMode === "list" ? (
        <div className="space-y-3">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalEvent(item)}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#003c84] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center flex-shrink-0 text-center">
                  <span className="text-[10px] font-bold text-[#003c84] uppercase">
                    {new Date(item.startDate).toLocaleString("default", { month: "short" })}
                  </span>
                  <span className="text-lg font-black text-slate-900 leading-tight">
                    {new Date(item.startDate).getDate()}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${getCategoryColor(item.category)}`}>
                      {item.badge || item.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#003c84] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {item.venue}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">
                <span className="text-xs font-semibold text-[#003c84] group-hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalEvent(item)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#003c84] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${getCategoryColor(item.category)}`}>
                    {item.badge || item.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {item.startDate}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-[#003c84] transition">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.venue.split(",")[0]}
                </span>
                <span className="font-bold text-[#003c84]">Details →</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calendar Legend / Info Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#003c84] flex-shrink-0" />
          <span>Dates are subject to updates per SPPU University circulars and college council notifications.</span>
        </div>
        <Link
          href="/dashboard"
          className="font-bold text-[#003c84] hover:underline flex-shrink-0"
        >
          Check Official Circulars in Member Vault →
        </Link>
      </div>
    </div>
  );
}
