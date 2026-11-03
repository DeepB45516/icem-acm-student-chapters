"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, CheckCircle2, CalendarDays } from "lucide-react";

const allEvents = [
  {
    id: "ev-1",
    title: "CodeStorm 24-Hour Hackathon",
    date: "OCT 10–11, 2026",
    venue: "ICEM Central Auditorium & Labs",
    tag: "Hackathon",
    status: "upcoming",
    desc: "Build in teams of four around the theme: AI for campus life. On-site mentors with cash awards.",
  },
  {
    id: "ev-2",
    title: "Intro to Applied Machine Learning",
    date: "OCT 24, 2026",
    venue: "AI & DS Seminar Hall",
    tag: "Workshop",
    status: "upcoming",
    desc: "Hands-on intensive bootcamp covering data cleaning, PyTorch model training, and API deployment.",
  },
  {
    id: "ev-3",
    title: "Research Paper Reading Circle (LLMs)",
    date: "NOV 07, 2026",
    venue: "Room 204, AI-DS Dept",
    tag: "Seminar",
    status: "upcoming",
    desc: "Monthly deep dive breaking down recent breakthroughs in Large Language Models and Vision Transformers.",
  },
  {
    id: "ev-4",
    title: "Inter-Year DSA Coding Contest",
    date: "NOV 21, 2026",
    venue: "Computer Center 2",
    tag: "Competition",
    status: "upcoming",
    desc: "Timed competitive-programming rounds on arrays, dynamic programming, and graphs.",
  },
  {
    id: "ev-5",
    title: "HackICEM 2026 — 24-Hour Hackathon",
    date: "APRIL 2026",
    venue: "Auditorium & AI Labs",
    tag: "Hackathon",
    status: "completed",
    desc: "Flagship collegiate hackathon with 42 teams and 170+ participants building AI prototypes.",
  },
  {
    id: "ev-6",
    title: "Cloud Fundamentals with AWS & Docker",
    date: "MARCH 2026",
    venue: "Seminar Hall",
    tag: "Workshop",
    status: "completed",
    desc: "Hands-on session on AWS EC2, S3, Docker containers, and CI/CD pipelines with 85 attendees.",
  },
  {
    id: "ev-7",
    title: "Git & GitHub for Open-Source",
    date: "JANUARY 2026",
    venue: "Lab 3",
    tag: "Workshop",
    status: "completed",
    desc: "Version control bootcamp preparing junior students for team collaboration with 95 attendees.",
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? allEvents : allEvents.filter(e => e.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-[#003c84]">Chapter Activities &amp; Sprints</h1>
          <p className="text-xs text-slate-500">Upcoming hackathons, hands-on bootcamps, and past archives</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/calendar"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#003c84] hover:bg-slate-50 transition"
          >
            <CalendarDays className="w-3.5 h-3.5 text-[#278da4]" />
            <span>Academic Calendar ↗</span>
          </Link>
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-md transition ${filter === "all" ? "bg-white text-[#003c84] shadow-xs" : "text-slate-600"}`}
            >
              All ({allEvents.length})
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-3 py-1.5 rounded-md transition ${filter === "upcoming" ? "bg-white text-[#003c84] shadow-xs" : "text-slate-600"}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1.5 rounded-md transition ${filter === "completed" ? "bg-white text-[#003c84] shadow-xs" : "text-slate-600"}`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ev) => (
          <div
            key={ev.id}
            className={`p-5 rounded-2xl border bg-white shadow-xs flex flex-col justify-between ${
              ev.status === "upcoming" ? "border-teal-200" : "border-slate-200"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  {ev.tag}
                </span>
                <span className="text-xs text-slate-500">{ev.date}</span>
              </div>
              <h2 className="font-bold text-slate-900 text-base mb-1">{ev.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{ev.desc}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Venue: {ev.venue}</span>
              <span className="font-semibold text-[#003c84]">
                {ev.status === "upcoming" ? "Open for RSVP" : "Archived Record"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
