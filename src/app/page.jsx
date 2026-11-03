"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code, Users, BookOpen, Calendar,
  ExternalLink, Mail, Phone, MapPin, CheckCircle2,
  Terminal, Cpu, ArrowRight, Flame, Clock, Check, Award, Sparkles
} from "lucide-react";
import heroCodingImg from "../../public/assets/images/icem-acm-hero-coding.png";
import campusBuildingImg from "../../public/assets/images/icem-campus-building.png";
import labSessionImg from "../../public/assets/images/icem-acm-lab-session.png";
import indiraLogoImg from "../../public/assets/images/indira-college-logo.png";
import acmIcemLogoImg from "../../public/assets/images/acm-icem-logo.png";

export default function HomePage() {
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleRsvp = (eventName) => {
    setRsvpStatus((prev) => ({ ...prev, [eventName]: true }));
    setToastMessage(`RSVP Confirmed for ${eventName}! See you at the session.`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#003c84] text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300 border border-[#278da4]/40">
          <CheckCircle2 className="w-5 h-5 text-[#278da4]" />
          <span className="text-white">{toastMessage}</span>
        </div>
      )}

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-b from-[#f0f7fa]/70 via-white to-white pt-12 pb-24 md:pt-16 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#003c84] bg-[#278da4]/15 border border-[#278da4]/30">
              <span className="w-2 h-2 rounded-full bg-[#278da4] shadow-[0_0_6px_#278da4]"></span>
              <span>Chapter Inception &amp; Charter 2026–27</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-[#278da4]">Dept. of AI &amp; DS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#003c84] leading-[1.18]">
              Where curious minds turn code into impact.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-normal">
              We&apos;re the ICEM ACM Student Chapter of the AI &amp; Data Science department — a home for students who&apos;d rather build the thing than just read about it. Workshops, hackathons, and a community that pushes you further.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Join the Chapter
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#278da4] hover:bg-[#1f7387] text-white font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Open Dashboard
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-slate-300 hover:border-[#003c84] text-[#003c84] font-bold text-sm bg-white hover:bg-slate-50 transition-all cursor-pointer"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3.8] sm:aspect-[4/3.5] lg:aspect-[4/4.2] max-w-lg mx-auto w-full">
              <Image
                src={heroCodingImg}
                alt="ICEM ACM students collaborating in the computer lab"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003c84]/80 via-[#003c84]/20 to-transparent" />
              
              {/* Overlay Badge with High Contrast */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-10 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 text-[#003c84] shadow-2xl">
                <span className="text-3xl font-extrabold font-mono text-[#003c84]">40+</span>
                <span className="text-xs text-slate-700 leading-tight font-semibold">
                  events run<br />since founding
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INSTITUTIONAL AFFILIATION & ACCREDITATIONS BANNER ==================== */}
      <section className="bg-white py-6 border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-50/80 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="h-14 w-28 sm:h-16 sm:w-36 relative flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200">
              <Image src={indiraLogoImg} alt="Indira College of Engineering & Management" className="object-contain max-h-full" priority />
            </div>
            <span className="text-slate-400 font-bold text-lg">&times;</span>
            <div className="h-14 w-28 sm:h-16 sm:w-36 relative flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200">
              <Image src={acmIcemLogoImg} alt="ACM ICEM Student Chapter" className="object-contain max-h-full" priority />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#003c84] bg-blue-100/70 border border-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003c84]" /> Official Academic Charter
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#003c84]">
              Department of Artificial Intelligence &amp; Data Science
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Chartered under the global Association for Computing Machinery (ACM) at Indira College of Engineering and Management (ICEM), Pune. Approved by AICTE, New Delhi &amp; Affiliated to Savitribai Phule Pune University (SPPU).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 flex-shrink-0 w-full lg:w-auto">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <b className="block text-xs sm:text-sm font-bold text-slate-900">SPPU Pune</b>
              <span className="text-[10px] text-slate-500 font-medium">Affiliated Univ.</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <b className="block text-xs sm:text-sm font-bold text-slate-900">AICTE</b>
              <span className="text-[10px] text-slate-500 font-medium">Govt. Approved</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <b className="block text-xs sm:text-sm font-bold text-[#003c84]">ACM Global</b>
              <span className="text-[10px] text-slate-500 font-medium">Chartered 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3 OVERLAPPING SERVICE CARDS (Clean Light Format) ==================== */}
      <section className="-mt-12 sm:-mt-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-lg shadow-slate-900/5 hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#278da4]/15 flex items-center justify-center text-[#278da4]">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#003c84]">Workshops &amp; Bootcamps</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Hands-on sessions on ML, web dev, cloud and competitive programming, led by seniors and industry mentors.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003c84] hover:text-[#278da4] transition">
                <span>See schedule</span>
                <span className="text-base">›</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Clean Highlighted Card with High Contrast */}
          <div className="bg-white rounded-xl p-7 border-2 border-[#278da4] shadow-xl shadow-[#278da4]/10 hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#278da4] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
              Featured Track
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#003c84]/10 flex items-center justify-center text-[#003c84]">
                <Flame className="w-6 h-6 text-[#003c84]" />
              </div>
              <h3 className="text-xl font-bold text-[#003c84]">Hackathons &amp; Competitions</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                From 24-hour build sprints to inter-college contests — a team, a mentor pool, and prizes worth chasing.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#278da4] hover:text-[#003c84] transition">
                <span>Explore events</span>
                <span className="text-base">›</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-lg shadow-slate-900/5 hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#278da4]/15 flex items-center justify-center text-[#278da4]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#003c84]">Research &amp; Publications</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Peer-guided reading groups and paper write-ups, with a track record of student papers at student symposiums.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link href="/achievements" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003c84] hover:text-[#278da4] transition">
                <span>View resources &amp; papers</span>
                <span className="text-base">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Overlapping Images */}
          <div className="lg:col-span-6 relative pb-10 sm:pb-12">
            <div className="w-[82%] rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[5/4.5] relative">
              <Image
                src={campusBuildingImg}
                alt="Indira College of Engineering and Management campus building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[58%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white">
              <Image
                src={labSessionImg}
                alt="ICEM ACM students attending a computer networking lab session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#278da4] bg-[#278da4]/15 px-3 py-1 rounded-full border border-[#278da4]/30">
              About the chapter
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#003c84] leading-tight">
              A community built by builders, for builders.
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Founded to give AI &amp; Data Science students a place to apply what they learn in the classroom, our chapter runs on peer teaching: seniors mentor juniors, project teams share their write-ups, and every event ends with something you can put in a portfolio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#278da4]/15 flex items-center justify-center text-[#278da4] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-base font-bold text-[#003c84] block">320+ Members</b>
                  <span className="text-xs text-slate-600 font-medium">across three cohorts</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#278da4]/15 flex items-center justify-center text-[#278da4] flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-base font-bold text-[#003c84] block">40+ Events</b>
                  <span className="text-xs text-slate-600 font-medium">hosted since 2022</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/committee"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Meet the Committee</span>
                <ArrowRight className="w-4 h-4 text-[#278da4]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== UPCOMING EVENTS SECTION ==================== */}
      <section className="py-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8" id="events">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#278da4]">
              What&apos;s coming up
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003c84]">
              Upcoming chapter events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=700&auto=format&fit=crop"
                  alt="Team coding together during a hackathon"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#278da4] uppercase tracking-wide">
                    SEPT 20 · Auditorium
                  </span>
                  <h3 className="text-lg font-bold text-[#003c84]">
                    CodeStorm 24-Hour Hackathon
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Build in teams of four around this year&apos;s theme: AI for campus life. Mentors on-site all night.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRsvp("CodeStorm Hackathon")}
                  disabled={rsvpStatus["CodeStorm Hackathon"]}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    rsvpStatus["CodeStorm Hackathon"]
                      ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                      : "border-slate-300 hover:border-[#003c84] text-[#003c84] bg-white hover:bg-slate-50"
                  }`}
                >
                  {rsvpStatus["CodeStorm Hackathon"] ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>RSVP Confirmed</span>
                    </>
                  ) : (
                    "RSVP / Register Free"
                  )}
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=700&auto=format&fit=crop"
                  alt="Students in a workshop session"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#278da4] uppercase tracking-wide">
                    OCT 4 · Seminar Hall
                  </span>
                  <h3 className="text-lg font-bold text-[#003c84]">
                    Intro to Applied Machine Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    A hands-on bootcamp covering the end-to-end ML workflow, from data preprocessing to a live model.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRsvp("Applied Machine Learning")}
                  disabled={rsvpStatus["Applied Machine Learning"]}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    rsvpStatus["Applied Machine Learning"]
                      ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                      : "border-slate-300 hover:border-[#003c84] text-[#003c84] bg-white hover:bg-slate-50"
                  }`}
                >
                  {rsvpStatus["Applied Machine Learning"] ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>RSVP Confirmed</span>
                    </>
                  ) : (
                    "RSVP / Register Free"
                  )}
                </button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=700&auto=format&fit=crop"
                  alt="Person presenting to a small group"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#278da4] uppercase tracking-wide">
                    OCT 18 · Room 204
                  </span>
                  <h3 className="text-lg font-bold text-[#003c84]">
                    Research Paper Reading Circle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Monthly deep dive breaking down recent breakthroughs in Large Language Models and Computer Vision.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRsvp("Paper Reading Circle")}
                  disabled={rsvpStatus["Paper Reading Circle"]}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    rsvpStatus["Paper Reading Circle"]
                      ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                      : "border-slate-300 hover:border-[#003c84] text-[#003c84] bg-white hover:bg-slate-50"
                  }`}
                >
                  {rsvpStatus["Paper Reading Circle"] ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>RSVP Confirmed</span>
                    </>
                  ) : (
                    "RSVP / Register Free"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RESOURCES SECTION ==================== */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200 px-4 sm:px-6 lg:px-8" id="resources">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#278da4]">
              Knowledge &amp; Repositories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003c84]">
              Curated Chapter Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#278da4] hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded bg-[#278da4]/15 text-[#003c84] text-[11px] font-bold">
                  Curriculum
                </span>
                <h3 className="text-base font-bold text-[#003c84]">AI &amp; DS Study Roadmap</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Curated list of books, interactive courses, and hands-on exercises covering Python to PyTorch.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/dashboard" className="text-xs font-bold text-[#278da4] hover:text-[#003c84] flex items-center gap-1">
                  <span>Access Roadmap</span>
                  <span>›</span>
                </Link>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#278da4] hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded bg-[#278da4]/15 text-[#003c84] text-[11px] font-bold">
                  Hackathon Kit
                </span>
                <h3 className="text-base font-bold text-[#003c84]">Full-Stack Starter Templates</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Pre-configured Next.js, FastAPI, and Flask boilerplates with auth and Docker ready to deploy.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/dashboard" className="text-xs font-bold text-[#278da4] hover:text-[#003c84] flex items-center gap-1">
                  <span>Download Boilerplates</span>
                  <span>›</span>
                </Link>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#278da4] hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded bg-[#278da4]/15 text-[#003c84] text-[11px] font-bold">
                  Research
                </span>
                <h3 className="text-base font-bold text-[#003c84]">Paper Reading Summaries</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  One-page summaries and Jupyter notebook reproductions of seminal AI papers from our circle.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/dashboard" className="text-xs font-bold text-[#278da4] hover:text-[#003c84] flex items-center gap-1">
                  <span>Browse Papers</span>
                  <span>›</span>
                </Link>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#278da4] hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded bg-[#278da4]/15 text-[#003c84] text-[11px] font-bold">
                  Competitive
                </span>
                <h3 className="text-base font-bold text-[#003c84]">DSA &amp; LeetCode Patterns</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Weekly selected problems, pattern analysis, and senior solutions for coding interviews.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/dashboard" className="text-xs font-bold text-[#278da4] hover:text-[#003c84] flex items-center gap-1">
                  <span>View Question Bank</span>
                  <span>›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM & LEADERSHIP SECTION ==================== */}
      <section className="py-20 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#278da4]">
                Chapter Leadership (2026–27)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003c84]">
                Executive Office Bearers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Appointed in consultation with the HOD and Faculty Members of Dept. of AI &amp; DS.
              </p>
            </div>
            <Link
              href="/committee"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white text-xs font-bold transition shadow-sm"
            >
              <span>View Full Committee &amp; Faculty Sponsor</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#278da4]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Faculty 1: HOD */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 border-t-4 border-t-[#003c84] p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-[#003c84] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                MT
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Dr Manjusha Tatiya</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">HOD</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Head of Department, AI &amp; DS. Guiding academic alignment, institutional support, and chapter leadership.
              </p>
            </div>

            {/* Faculty 2: Coordinator */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 border-t-4 border-t-[#003c84] p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-[#003c84] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                SB
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Dr. S. D. Babar</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Coordinator &amp; Financer</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Chapter Coordinator &amp; Financer, Dept. of AI &amp; DS. Overseeing chapter coordination, finance, and student mentorship.
              </p>
            </div>

            {/* Student 1: Chair */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 border-t-4 border-t-[#278da4] p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-[#278da4] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                PS
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Parth Sawant</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Chair</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Leading chapter vision, executive operations, and inter-collegiate technical symposiums.
              </p>
            </div>

            {/* Student 2: Vice Chair */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 border-t-4 border-t-[#278da4] p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-[#278da4] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                SM
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Samruddhi Morde</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Vice Chair</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Coordinating day-to-day chapter initiatives, community outreach, and event scheduling.
              </p>
            </div>

            {/* Student 3: Secretary */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 text-[#003c84] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                AT
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Aaditya Topare</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Secretary</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Managing official communications, event proceedings, meeting minutes, and chapter records.
              </p>
            </div>

            {/* Student 4: Webmaster */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 text-[#003c84] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                DB
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Deep Biswas</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Webmaster</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Directing web development, registration portals, GitHub repositories, and tech infrastructure.
              </p>
            </div>

            {/* Student 5: Treasurer */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 text-[#003c84] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                SK
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Shridhar Kumbhar</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Treasurer</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Managing chapter budgeting, financial allocation, sponsorships, and hackathon prize funds.
              </p>
            </div>

            {/* Student 6: Membership Chair */}
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6 text-center shadow-xs hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 text-[#003c84] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                KU
              </div>
              <h3 className="text-base font-bold text-[#003c84]">Khushi Umathe</h3>
              <p className="text-xs font-bold text-[#278da4] uppercase tracking-wide my-1">Membership Chair</p>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                Spearheading student onboarding, membership growth, student relations, and inclusive engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER (High Contrast Clean Navy) ==================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto bg-[#003c84] rounded-2xl p-8 sm:p-14 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to build something with us?
            </h2>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
              Membership is free for all AI &amp; Data Science students. Gain instant access to all workshop repos, mentors, and hackathon teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/login"
              className="px-5 py-3 rounded-lg border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-bold text-sm transition"
            >
              Already a Member? Sign In
            </Link>
            <Link
              href="/membership"
              className="px-6 py-3 rounded-lg bg-[#278da4] hover:bg-[#1f7387] text-white font-bold text-sm shadow-md transition hover:-translate-y-0.5"
            >
              Apply for Free Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
