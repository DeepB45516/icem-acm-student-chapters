import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, Camera } from "lucide-react";

import campusBuildingImg from "../../../public/assets/images/icem-campus-building.png";
import heroCodingImg from "../../../public/assets/images/icem-acm-hero-coding.png";
import labSessionImg from "../../../public/assets/images/icem-acm-lab-session.png";

export const metadata = {
  title: "Achievements | ICEM ACM Student Chapter",
};

export default function AchievementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003c84] mb-2">Student Achievements &amp; Publications</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Recognizing the competitive titles, symposium papers, and open-source contributions of our members.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { tag: "Hackathon Win", title: "1st Place — HackICEM 2026", cohort: "Final Year AI & DS", desc: "Team 'Verdant' won the 24-hr hackathon with an edge AI waste-sorting assistant." },
          { tag: "Publication", title: "Student Paper at Symposium", cohort: "Third Year AI & DS", desc: "Research paper on intrusion detection accepted at an ACM student symposium." },
          { tag: "Competition", title: "Runner-Up — DataViz Challenge", cohort: "Second Year AI & DS", desc: "2-member team placed 2nd among 18 teams for air-quality analytics." },
          { tag: "Internship", title: "Research Internship Placement", cohort: "Alumnus (Batch 2026)", desc: "Member secured summer research internship citing chapter mentorship." },
          { tag: "Open Source", title: "Boilerplate Kit Adopted", cohort: "Third Year AI & DS", desc: "FastAPI/React template adopted as official chapter boilerplate." },
          { tag: "National Rank", title: "Top 10 — Coding Marathon", cohort: "Final Year AI & DS", desc: "Ranked top 10 nationally in competitive programming contest." },
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-[#003c84] hover:shadow-md transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  {item.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">{item.cohort}</span>
              </div>
              <h2 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">{item.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-slate-100 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Milestone
            </div>
          </div>
        ))}
      </div>

      {/* Event Photo Gallery */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <Camera className="w-5 h-5 text-[#003c84]" />
          <div>
            <h2 className="text-xl font-bold text-[#003c84]">Event Photo Gallery</h2>
            <p className="text-xs text-slate-500">Moments from hackathons, departmental bootcamps, and campus symposiums</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs relative aspect-[4/3] group">
            <Image
              src={campusBuildingImg}
              alt="Indira College of Engineering & Management campus building"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-semibold">ICEM Campus &amp; Department Hub</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs relative aspect-[4/3] group">
            <Image
              src={heroCodingImg}
              alt="ICEM ACM students collaborating in lab"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-semibold">Overnight AI Hackathon Sprints</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs relative aspect-[4/3] group">
            <Image
              src={labSessionImg}
              alt="ICEM ACM students attending computer networking lab session"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-semibold">Department Computing Laboratories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
