"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { resolvePath } from "@/utils/paths";
import {
  LayoutDashboard,
  ScrollText,
  FileText,
  DollarSign,
  FileCheck,
  CheckCircle2,
  Search,
  AlertCircle,
  User,
  Zap,
  LogOut,
  Upload,
  Download,
  BookOpen,
  Calendar,
  Sparkles,
  ExternalLink,
  Users,
  Award,
  CreditCard,
  Printer,
  Copy,
  Clock,
  Briefcase,
  Layers,
  Send,
  HelpCircle,
  X,
  ChevronRight,
  ShieldCheck,
  Menu,
  ChevronDown,
  BarChart3,
  Megaphone,
  Coins,
  ClipboardList,
  GraduationCap,
  UploadCloud,
  Lightbulb,
  Mail,
} from "lucide-react";

// ==========================================
// DEFAULT DATA SETS
// ==========================================

const initialCertificates = {
  "ACM-ICEM-2026-AI892": {
    id: "ACM-ICEM-2026-AI892",
    name: "Deep Biswas",
    prn: "72149821H",
    event: "Generative AI & Deep Learning Bootcamp (36 Hours)",
    date: "October 18, 2026",
    grade: "Grade: Distinction with Academic Honors",
    hash: "SHA-256: 8a4f9102c4b7",
    status: "Verified Authentic",
  },
  "ACM-ICEM-2026-WIN01": {
    id: "ACM-ICEM-2026-WIN01",
    name: "Team Neural Sparks (Lead: Parth Sawant)",
    prn: "72149790A",
    event: "ICEM Annual 36-Hour Hackathon 2026 — 1st Grand Prize",
    date: "October 25, 2026",
    grade: "Winner — ₹25,000 Cash Prize & ACM Trophy",
    hash: "SHA-256: c3b91a788e01",
    status: "Verified Authentic",
  },
  "ACM-ICEM-2026-DEV44": {
    id: "ACM-ICEM-2026-DEV44",
    name: "Rahul Sharma",
    prn: "72149952K",
    event: "Full-Stack Web & Algorithmic Foundations Sprint",
    date: "September 28, 2026",
    grade: "Grade: Excellent (Top 5% Cohort Ranking)",
    hash: "SHA-256: f19d8832a50c",
    status: "Verified Authentic",
  },
};

const initialNotices = [
  {
    id: 1,
    title: "Establishment & Office Bearer Appointments for ICEM ACM Chapter",
    category: "Formal Chapter Inception",
    refNo: "ICEM/AIDS/ACM/2026-27/001",
    date: "Academic Session 2026–27",
    author: "Dr Manjusha Tatiya (HOD) & Dr. S. D. Babar (Coordinator & Financer)",
    type: "Official Circular",
    tag: "High Priority",
    body: "Heartiest congratulations to the students selected for leadership positions of our newly established ICEM ACM Student Chapter! These positions have been finalized in consultation with the HOD and all faculty members of our department. All other students in this department will be recognized as ACM Members and will be an important part of chapter activities. Let us work together, learn together, innovate together, and make our ICEM ACM Chapter a great success!",
    isOfficialLetter: true,
  },
  {
    id: 2,
    title: "Call for Research Project Nominations — ACM Winter Symposium",
    category: "Research",
    refNo: "ICEM/AIDS/ACM/2026-27/002",
    date: "November 04, 2026",
    author: "Dept. AI & DS Research Cell",
    type: "Circular",
    tag: "High Priority",
    body: "The AI & DS Research Cell invites undergraduate student researchers to submit preliminary papers and project abstracts for the upcoming ACM Collegiate Winter Symposium.",
  },
  {
    id: 3,
    title: "Schedule for Hands-on GPU Cluster Workshop & Setup Guide",
    category: "Workshop",
    refNo: "ICEM/AIDS/ACM/2026-27/003",
    date: "October 28, 2026",
    author: "Technical Committee",
    type: "Workshop",
    tag: "Lab Access",
    body: "Hands-on PyTorch GPU cluster computing session for 2nd and 3rd year AI & DS students scheduled in Lab 301. Pre-installation guidelines available in the Study Vault.",
  },
  {
    id: 4,
    title: "Annual ACM Student Chapter Executive Elections 2026-27 Announced",
    category: "Governance",
    refNo: "ICEM/AIDS/ACM/2026-27/004",
    date: "October 15, 2026",
    author: "Faculty Sponsor Desk",
    type: "Governance",
    tag: "Official",
    body: "Annual general body democratic elections finalized under faculty oversight. Full voting franchise granted to all registered department students.",
  },
];

const officersList = [
  {
    name: "Dr Manjusha Tatiya",
    role: "Head of Department (AI & DS)",
    badge: "Faculty Advisory Board",
    type: "faculty",
    dept: "Department of AI & Data Science · ICEM",
    desc: "Overseeing departmental academic integration, ACM chapter charter alignment, institutional patronage, and curriculum synergy.",
    email: "hod.aids@indiraicem.ac.in",
    initials: "MT",
  },
  {
    name: "Dr. S. D. Babar",
    role: "Faculty Sponsor & Financer",
    badge: "Faculty Coordinator",
    type: "faculty",
    dept: "Department of AI & Data Science · ICEM",
    desc: "Faculty Sponsor, chapter liaison with ACM India Council, coordinator of financial budgets, research grants, and student development programs.",
    email: "sunil.babar@indiraicem.ac.in",
    initials: "SB",
  },
  {
    name: "Parth Sawant",
    role: "Chapter Chair (President)",
    badge: "Executive Leadership",
    type: "core",
    dept: "B.E. AI & Data Science · Class of 2026",
    desc: "Chief executive officer of the student chapter; presiding over chapter general bodies, roadmap implementation, and corporate alliances.",
    email: "parth.sawant@indiraicem.ac.in",
    initials: "PS",
  },
  {
    name: "Samruddhi Morde",
    role: "Vice Chair (Vice President)",
    badge: "Executive Leadership",
    type: "core",
    dept: "B.E. AI & Data Science · Class of 2026",
    desc: "Directing chapter operations, internal sub-committees, women-in-computing initiatives, and technical symposium planning.",
    email: "samruddhi.morde@indiraicem.ac.in",
    initials: "SM",
  },
  {
    name: "Aaditya Topare",
    role: "Secretary",
    badge: "Council Secretariat",
    type: "core",
    dept: "T.E. AI & Data Science · Class of 2027",
    desc: "Managing council communications, meeting minutes (MoM), institutional circulars, SPPU attendance compliance, and event documentation.",
    email: "aaditya.topare@indiraicem.ac.in",
    initials: "AT",
  },
  {
    name: "Deep Biswas",
    role: "Webmaster",
    badge: "Technical Leadership",
    type: "tech",
    dept: "T.E. AI & Data Science · Class of 2027",
    desc: "Architecting official chapter web portals, authentication systems, cloud servers, certificate verifiers, and GitHub organization pipelines.",
    email: "deep.biswas@indiraicem.ac.in",
    initials: "DB",
  },
  {
    name: "Shridhar Kumbhar",
    role: "Treasurer",
    badge: "Financial Desk",
    type: "lead",
    dept: "T.E. AI & Data Science · Class of 2027",
    desc: "Maintaining audited chapter accounts, hackathon prize escrow disbursals, vendor receipts, and semester fiscal transparency reports.",
    email: "shridhar.kumbhar@indiraicem.ac.in",
    initials: "SK",
  },
  {
    name: "Khushi Umathe",
    role: "Membership Chair",
    badge: "Student Outreach",
    type: "lead",
    dept: "T.E. AI & Data Science · Class of 2027",
    desc: "Leading 100% free chapter student enrollments, membership verification, orientation bootcamps, and volunteer cohort curation.",
    email: "khushi.umathe@indiraicem.ac.in",
    initials: "KU",
  },
];

const activityTracksList = [
  {
    id: 1,
    title: "Technical Workshops",
    track: "tech",
    category: "Hands-on Mastery",
    schedule: "Bi-Weekly · AI & DS Lab 301",
    venue: "AI & DS Lab 301",
    desc: "Practical sessions covering PyTorch, deep learning pipelines, generative AI models, cloud infrastructure, and modern deployment architectures.",
    tag: "Technical Workshops",
  },
  {
    id: 2,
    title: "Coding Competitions",
    track: "competition",
    category: "Competitive Track",
    schedule: "Weekly · Online / Lab",
    venue: "Computer Center 2",
    desc: "Bi-weekly algorithmic contests, LeetCode sprints, and ICPC preparatory tracks to sharpen problem-solving and speed for technical rounds.",
    tag: "Coding Competitions",
  },
  {
    id: 3,
    title: "AI/ML Hackathons",
    track: "competition",
    category: "Build & Ship",
    schedule: "OCT 24–25 · Campus Auditorium",
    venue: "Auditorium & Labs",
    desc: "24-hour hackathons and build sprints tackling real campus challenges and social issues using intelligent machine learning models.",
    tag: "AI/ML Hackathons",
  },
  {
    id: 4,
    title: "Expert Talks",
    track: "tech",
    category: "Knowledge Exchange",
    schedule: "Monthly · Seminar Hall",
    venue: "Seminar Hall",
    desc: "Keynotes and interactive sessions with industry scientists, visiting researchers, and alumni working at top AI tech companies.",
    tag: "Expert Talks",
  },
  {
    id: 5,
    title: "Research Activities",
    track: "research",
    category: "Scholarly Focus",
    schedule: "Fortnightly · Research Wing",
    venue: "Dept. Research Lab",
    desc: "Paper reading groups, peer mentorship for literature reviews, and support for publishing papers in student symposiums and conferences.",
    tag: "Research Activities",
  },
  {
    id: 6,
    title: "Career Guidance Programs",
    track: "career",
    category: "Placement Support",
    schedule: "Saturdays · Seminar Hall",
    venue: "Seminar Hall",
    desc: "Mock technical interviews, system design workshops, resume clinics, and direct mentorship from placed seniors.",
    tag: "Career Guidance",
  },
  {
    id: 7,
    title: "Industry Interaction",
    track: "career",
    category: "Corporate Exposure",
    schedule: "Semester Drives · Offline / Visits",
    venue: "Pune Tech Park / Campus",
    desc: "Industrial visits, sponsored real-world problem statements, internship referral drives, and corporate connect programs.",
    tag: "Industry Interaction",
  },
];

const treasuryVouchers = [
  { id: "vch_1", ref: "VCH-2026-001", date: "12 Aug 2026", cat: "Charter", desc: "ACM International Student Chapter Annual Charter & Recognition Fee", vendor: "ACM India Council", amount: 15000, approver: "Dr. Sunil D. Babar", status: "Cleared" },
  { id: "vch_2", ref: "VCH-2026-002", date: "28 Aug 2026", cat: "Events", desc: "Inaugural Conclave Auditorium Audio/Visual Setup & Guest Mementos", vendor: "Raj Multimedia & Gifts", amount: 18500, approver: "Dr. Sunil D. Babar & Parth Sawant", status: "Cleared" },
  { id: "vch_3", ref: "VCH-2026-003", date: "14 Sep 2026", cat: "Tech", desc: "AWS Education & GCP Compute Credits for Student AI/ML Lab Nodes", vendor: "Amazon Web Services", amount: 24950, approver: "Dr. Manjusha Tatiya (HOD)", status: "Cleared" },
  { id: "vch_4", ref: "VCH-2026-004", date: "02 Oct 2026", cat: "Events", desc: "GenAI Bootcamp Workshop Kit Printing, Badges & High-Tea for 120 Attendees", vendor: "Campus Cafeteria", amount: 14000, approver: "Shridhar Kumbhar (Treasurer)", status: "Cleared" },
  { id: "vch_5", ref: "VCH-2026-005", date: "18 Oct 2026", cat: "Events", desc: "Annual 36-Hr Hackathon Venue & Networking Setup Advance Escrow", vendor: "ICEM Chapter Reserve", amount: 46000, approver: "Chapter Advisory Board", status: "Cleared" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState({
    name: "Student Member",
    email: "student@indiraicem.ac.in",
    role: "student",
    prn: "72149821H",
  });

  const [subTab, setSubTab] = useState("overview");
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef(null);

  const [certQuery, setCertQuery] = useState("");
  const [certResult, setCertResult] = useState(null);
  const [notices, setNotices] = useState(initialNotices);

  // Filters
  const [officerSearch, setOfficerSearch] = useState("");
  const [officerFilter, setOfficerFilter] = useState("all");
  const [trackFilter, setTrackFilter] = useState("all");

  // Modals & Submissions
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(null);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  // Form states
  const [newNoticeTitle, setNewNoticeTitle] = useState("");
  const [newNoticeTag, setNewNoticeTag] = useState("Circular");
  const [newNoticeBody, setNewNoticeBody] = useState("");
  const [uploadSuccessToast, setUploadSuccessToast] = useState("");

  // OD Leave Form
  const [leaveName, setLeaveName] = useState("");
  const [leavePrn, setLeavePrn] = useState("");
  const [leaveEvent, setLeaveEvent] = useState("");
  const [leaveDates, setLeaveDates] = useState("");
  const [leavePurpose, setLeavePurpose] = useState("");
  const [submittedLeaves, setSubmittedLeaves] = useState([
    {
      id: "OD-2026-881",
      student: "Student Member",
      prn: "72149821H",
      event: "ACM India Annual Student Summit",
      dates: "Nov 12 – Nov 14, 2026",
      status: "Approved by Faculty Sponsor",
      dateApplied: "Oct 24, 2026",
    },
  ]);

  // Grievances Form
  const [grvCategory, setGrvCategory] = useState("Certificate Correction");
  const [grvSubject, setGrvSubject] = useState("");
  const [grievancesList, setGrievancesList] = useState([
    {
      id: "GRV-2601",
      student: "Aditya Deshmukh",
      prn: "72149882B",
      category: "Certificate Correction",
      subject: "Spelling correction of middle name on Bootcamp Certificate",
      date: "Oct 19, 2026",
      status: "Resolved",
      notes: "Certificate reissued with corrected spelling by Secretary. Digital credential hash updated.",
    },
    {
      id: "GRV-2602",
      student: "Pooja Kulkarni",
      prn: "72149914C",
      category: "Event Registration",
      subject: "Inquiry regarding inter-department team participation for 36-Hr Hackathon",
      date: "Oct 21, 2026",
      status: "Resolved",
      notes: "Permitted. As per Hackathon Rulebook Section 3, teams may include up to 2 students from other engineering branches.",
    },
  ]);

  // Pitch Form
  const [pitchTitle, setPitchTitle] = useState("");
  const [pitchDesc, setPitchDesc] = useState("");

  // Volunteer Form
  const [volTeam, setVolTeam] = useState("Technical Mentorship & Labs");
  const [volNote, setVolNote] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("icem_acm_session") || localStorage.getItem("acm_user");
      if (saved) {
        const u = JSON.parse(saved);
        setSession({
          name: u.name || "Student Member",
          email: u.email || "student@indiraicem.ac.in",
          role: u.role || "student",
          prn: u.prn || "72149821H",
        });
        setLeaveName(u.name || "Student Member");
        setLeavePrn(u.prn || "72149821H");
      }
    } catch (e) {}
  }, []);

  // Close more menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const triggerToast = (msg) => {
    setUploadSuccessToast(msg);
    setTimeout(() => setUploadSuccessToast(""), 3500);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const q = certQuery.trim().toUpperCase();
    if (!q) return;
    if (initialCertificates[q]) {
      setCertResult(initialCertificates[q]);
      triggerToast(`Verified: ${initialCertificates[q].name}`);
    } else {
      setCertResult({ notFound: true, query: q });
    }
  };

  const handlePublishNotice = (e) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newNoticeTitle,
      refNo: `ICEM/AIDS/ACM/2026-27/00${notices.length + 1}`,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      author: session.name || "Chapter Leadership",
      type: "Official Notice",
      tag: newNoticeTag || "General",
      body: newNoticeBody || "Official announcement issued by the chapter leadership.",
    };

    setNotices([newEntry, ...notices]);
    setNewNoticeTitle("");
    setNewNoticeBody("");
    setShowUploadModal(false);
    triggerToast("Notice published to student portal successfully!");
  };

  const handleApplyLeave = (e) => {
    e.preventDefault();
    if (!leaveName || !leaveEvent) return;
    const newSlip = {
      id: `OD-2026-${Math.floor(100 + Math.random() * 900)}`,
      student: leaveName,
      prn: leavePrn || session.prn,
      event: leaveEvent,
      dates: leaveDates || "Nov 2026",
      status: "Under Faculty Review",
      dateApplied: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setSubmittedLeaves([newSlip, ...submittedLeaves]);
    setLeaveEvent("");
    setLeavePurpose("");
    triggerToast("OD Leave application submitted for faculty endorsement!");
  };

  const handleGrievanceSubmit = (e) => {
    e.preventDefault();
    if (!grvSubject) return;
    const newG = {
      id: `GRV-26${Math.floor(10 + Math.random() * 90)}`,
      student: session.name,
      prn: session.prn,
      category: grvCategory,
      subject: grvSubject,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Under Review",
      notes: "Ticket assigned to Student Chapter Executive Council Secretariat.",
    };
    setGrievancesList([newG, ...grievancesList]);
    setGrvSubject("");
    triggerToast("Support ticket logged with secretariat!");
  };

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    setShowPitchModal(false);
    setPitchTitle("");
    setPitchDesc("");
    triggerToast(`Proposal "${pitchTitle || "Idea"}" submitted to Executive Council!`);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setShowVolunteerModal(false);
    setVolNote("");
    triggerToast(`Volunteer registered for ${volTeam}! Membership Chair will reach out.`);
  };

  const handleCopyId = () => {
    const id = `ICEM-ACM-2026-${session.prn.slice(0, 6)}`;
    navigator.clipboard?.writeText(id);
    triggerToast(`Member Code ${id} copied to clipboard!`);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("icem_acm_session");
      localStorage.removeItem("acm_user");
      sessionStorage.removeItem("acm_user");
    } catch (e) {}
    if (router && typeof router.push === "function") {
      router.push("/login");
    } else {
      window.location.href = resolvePath("/login/");
    }
  };

  const isMemberRole = session.role === "member";

  const toggleRole = () => {
    const newRole = isMemberRole ? "student" : "member";
    setSession({ ...session, role: newRole });
    triggerToast(newRole === "member" ? "Switched to Chapter Member Mode" : "Switched to Student Mode");
  };

  // Filtered officers
  const filteredOfficers = officersList.filter((off) => {
    const matchType = officerFilter === "all" || off.type === officerFilter;
    const matchSearch =
      !officerSearch ||
      off.name.toLowerCase().includes(officerSearch.toLowerCase()) ||
      off.role.toLowerCase().includes(officerSearch.toLowerCase()) ||
      off.dept.toLowerCase().includes(officerSearch.toLowerCase());
    return matchType && matchSearch;
  });

  // Filtered activities
  const filteredActivities = activityTracksList.filter((act) => {
    return trackFilter === "all" || act.track === trackFilter;
  });

  // Main pill tabs visible in the bar (matching reference design with unified clean icons)
  const mainBarTabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "notices", label: "Circulars", icon: Megaphone, badge: notices.length },
    { id: "constitution", label: "Constitution", icon: ScrollText },
    { id: "activities", label: "Tracks", icon: Zap },
    { id: "treasury", label: "Treasury", icon: Coins },
    { id: "minutes", label: "MoM", icon: ClipboardList },
    { id: "verify", label: "Verification", icon: GraduationCap },
    { id: "studio", label: "Studio", icon: UploadCloud, isAction: true },
    { id: "profile", label: "ID Card", icon: CreditCard },
  ];

  // Secondary items kept in the Hamburger / "More" menu
  const moreMenuItems = [
    { id: "officers", label: "Office Bearers Directory", icon: Users, desc: "HOD, Sponsor & Council Officers" },
    { id: "leave", label: "OD Leave & Grievances Desk", icon: Briefcase, desc: "Authorized Duty Leave & Support" },
    { id: "hub", label: "Student Hub & Pitch Idea", icon: Lightbulb, desc: "Propose Events & Volunteer" },
    { id: "resources", label: "Study & Lab Repositories", icon: BookOpen, desc: "PyTorch, EdgeAI, LLMs on GitHub" },
  ];

  const isMoreTabActive = moreMenuItems.some((item) => item.id === subTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      
      {/* Role Banner / Profile Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
              isMemberRole ? "bg-amber-500 text-white shadow-sm" : "bg-[#003c84] text-white"
            }`}
          >
            {isMemberRole ? <Zap className="w-6 h-6 fill-white" /> : <User className="w-6 h-6 text-white" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900">{session.name}</h1>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                  isMemberRole
                    ? "bg-amber-100 text-amber-900 border border-amber-200"
                    : "bg-blue-100 text-[#003c84] border border-blue-200"
                }`}
              >
                {isMemberRole ? (
                  <>
                    <Zap className="w-3 h-3 text-amber-600" />
                    <span>Chapter Member (Upload Mode)</span>
                  </>
                ) : (
                  <>
                    <User className="w-3 h-3 text-[#003c84]" />
                    <span>Student (View Only)</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {session.email} • Dept. of AI &amp; Data Science, ICEM
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Quick Role Toggle button */}
          <button
            onClick={toggleRole}
            className="px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50 hover:bg-slate-100 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
            title="Toggle between Member and Student views"
          >
            {isMemberRole ? <User className="w-3.5 h-3.5 text-slate-500" /> : <Zap className="w-3.5 h-3.5 text-amber-500" />}
            <span>{isMemberRole ? "Student View" : "Member Mode"}</span>
          </button>

          {isMemberRole && (
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-3.5 py-2 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Publish Circular</span>
            </button>
          )}

          <button
            onClick={handleLogout}
            className="px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-rose-600 bg-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Upload Toast */}
      {uploadSuccessToast && (
        <div className="p-3.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold flex items-center gap-2 animate-fadeIn shadow-sm">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>{uploadSuccessToast}</span>
        </div>
      )}

      {/* =========================================================
           MAIN SUB-NAVIGATION PILL BAR (MATCHING SCREENSHOT)
           ========================================================= */}
      <div className="flex flex-wrap items-center gap-2 relative">
        {mainBarTabs.map((item) => {
          const IconComponent = item.icon;
          if (item.isAction) {
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isMemberRole) {
                    setShowUploadModal(true);
                  } else {
                    toggleRole();
                    setShowUploadModal(true);
                  }
                }}
                className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs cursor-pointer hover:border-slate-300"
              >
                <IconComponent className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-800 transition-colors" />
                <span>{item.label}</span>
              </button>
            );
          }

          const isActive = subTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setSubTab(item.id);
                setIsMoreMenuOpen(false);
              }}
              className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs ${
                isActive
                  ? "bg-[#003c84] text-white shadow-xs border border-[#003c84]"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <IconComponent
                className={`w-3.5 h-3.5 transition-colors ${
                  isActive ? "text-white" : "text-slate-500 group-hover:text-slate-800"
                }`}
              />
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-blue-100 text-[#003c84]"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Hamburger / "More Sections" Dropdown Menu */}
        <div className="relative" ref={moreMenuRef}>
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs ${
              isMoreTabActive
                ? "bg-blue-50 border border-[#003c84] text-[#003c84] font-bold"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
            }`}
            aria-label="More Sections"
          >
            <Menu className={`w-3.5 h-3.5 transition-colors ${isMoreTabActive ? "text-[#003c84]" : "text-slate-500 group-hover:text-slate-800"}`} />
            <span>More</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isMoreTabActive ? "text-[#003c84]" : "text-slate-400"} ${isMoreMenuOpen ? "rotate-180" : ""}`} />
            {isMoreTabActive && (
              <span className="w-2 h-2 rounded-full bg-[#003c84]"></span>
            )}
          </button>

          {/* Dropdown Popup */}
          {isMoreMenuOpen && (
            <div className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                Additional Chapter Modules
              </div>

              {moreMenuItems.map((m) => {
                const IconComponent = m.icon;
                const isSelected = subTab === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSubTab(m.id);
                      setIsMoreMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition flex items-start gap-2.5 cursor-pointer ${
                      isSelected
                        ? "bg-blue-50 text-[#003c84] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-[#003c84]" : "text-slate-500"}`} />
                    <div className="flex-1">
                      <div className="text-xs font-semibold">{m.label}</div>
                      <p className="text-[11px] text-slate-500 font-normal">{m.desc}</p>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#003c84] mt-0.5 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* =========================================================
           TAB 1: OVERVIEW & ROADMAP
           ========================================================= */}
      {subTab === "overview" && (
        <div className="space-y-6">
          {/* Welcome Banner */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84] uppercase">
                  Official Chapter Charter 2026–27
                </span>
                <h2 className="font-black text-[#003c84] text-xl mt-1.5">
                  Welcome, {session.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                  Established under the <b>Department of Artificial Intelligence &amp; Data Science</b> at Indira College of Engineering and Management (ICEM), Pune. Operating under ACM International guidelines, Savitribai Phule Pune University (SPPU) patronage, and democratic student governance.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => setSubTab("notices")}
                className="px-3.5 py-2 rounded-xl bg-[#003c84] text-white text-xs font-bold hover:bg-[#002d66] transition flex items-center gap-1.5 cursor-pointer"
              >
                <Megaphone className="w-3.5 h-3.5" />
                <span>View Circulars</span>
              </button>
              <button
                onClick={() => setSubTab("leave")}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                <span>Apply OD Leave</span>
              </button>
              <button
                onClick={() => setSubTab("verify")}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                <span>Verify Certificate</span>
              </button>
              <button
                onClick={() => setSubTab("profile")}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                <span>Digital ID Card</span>
              </button>
              {isMemberRole && (
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Publish Circular</span>
                </button>
              )}
            </div>
          </div>

          {/* Latest Department Announcement Ticker */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#003c84] text-white uppercase tracking-wider flex-shrink-0">
                LATEST BULLETIN
              </span>
              <p className="text-xs text-slate-800 font-medium">
                <b>Circular #001:</b> Official Appointment of Executive Office Bearers &amp; Core Council finalized by HOD Dr. Manjusha Tatiya &amp; Faculty Sponsor Dr. S. D. Babar.
              </p>
            </div>
            <button
              onClick={() => setShowNoticeModal(notices[0])}
              className="text-xs font-bold text-[#003c84] hover:text-[#002d66] flex-shrink-0 cursor-pointer underline"
            >
              Read Full Document →
            </button>
          </div>

          {/* Roadmap Milestones */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="font-black text-[#003c84] text-lg">2026–27 Chapter Inception Milestones</h2>
              <p className="text-xs text-slate-500">Structured phased roadmap for student chapter establishment and programs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">PHASE 01 · AUGUST 2026</span>
                <h3 className="font-bold text-slate-900 text-sm">Official Charter &amp; Council Appointments</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Finalized chapter bylaws with SPPU guidelines, appointed Executive Council officers, and opened 100% free departmental enrollment.
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Completed &amp; Active</span>
                </span>
              </div>

              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                <span className="text-[10px] font-bold text-[#003c84] uppercase tracking-wider">PHASE 02 · SEPTEMBER 2026</span>
                <h3 className="font-bold text-slate-900 text-sm">Inaugural Chapter Orientation &amp; GBM</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Department-wide induction ceremony, deployment of chapter web portal, and unveiling of the 7 core student development activity tracks.
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#003c84] bg-blue-100 px-2 py-0.5 rounded">
                  <Clock className="w-3 h-3 text-[#003c84]" />
                  <span>In Progress</span>
                </span>
              </div>

              <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2">
                <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">PHASE 03 · OCT–NOV 2026</span>
                <h3 className="font-bold text-slate-900 text-sm">Flagship AI/ML Workshop &amp; Hackathon</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bi-weekly GPU-accelerated deep learning workshops and hosting the ICEM Annual 36-Hour AI Hackathon with ₹50,000 in prizes.
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                  <Calendar className="w-3 h-3 text-purple-600" />
                  <span>Scheduled</span>
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { num: "7", label: "Activity Tracks" },
              { num: "₹1.5L", label: "Audited Budget" },
              { num: "100%", label: "Free Membership" },
              { num: "120+", label: "Student Members" },
              { num: "SHA-256", label: "Verifiable Certs" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="text-xl font-black text-[#003c84]">{stat.num}</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 2: CONSTITUTION & BYLAWS
           ========================================================= */}
      {subTab === "constitution" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">
                ICEM ACM Chapter Constitution &amp; Standing Bylaws
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Approved by Savitribai Phule Pune University (SPPU) Faculty Advisory &amp; ACM Collegiate Guidelines
              </p>
            </div>
            <button
              onClick={() => triggerToast("Constitution PDF downloaded.")}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="grid gap-3 pt-2">
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE I · NAME &amp; PURPOSE</strong>
              The name of this organization is the ICEM ACM Student Chapter, housed under the Department of Artificial Intelligence &amp; Data Science at Indira College of Engineering and Management (ICEM), Pune (ACM Chapter ID: <code>184920</code>).
            </div>
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE II · MEMBERSHIP &amp; ACCESSIBILITY</strong>
              Chapter membership is 100% complimentary and open to all enrolled undergraduate students of AI &amp; Data Science without discrimination or dues barrier.
            </div>
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE III · EXECUTIVE COMMITTEE ELECTIONS</strong>
              Annual democratic elections are held every September under the direct stewardship of the Faculty Sponsor. All registered student members hold voting franchise.
            </div>
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE IV · FISCAL TRANSPARENCY &amp; DUAL SIGNATORY</strong>
              All chapter budgets, sponsor grants, and hackathon prizes are audited per semester and published transparently with dual signatory verification (Treasurer &amp; Faculty Sponsor).
            </div>
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE V · EXECUTIVE PORTFOLIOS &amp; DUTIES</strong>
              Portfolio holders (Chair, Vice Chair, Secretary, Webmaster, Treasurer, Membership Chair) are held accountable to regular GBM presentations and open secretariat minutes.
            </div>
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70">
              <strong className="text-slate-900 block mb-1">ARTICLE VI · AMENDMENTS &amp; DISSOLUTION</strong>
              Amendments require a two-thirds majority in the General Body meeting with final assent from the Department HOD. In dissolution, all assets revert to the AI &amp; DS department.
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 3: NOTICES & CIRCULARS
           ========================================================= */}
      {subTab === "notices" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">Department Circulars &amp; Announcements</h2>
              <p className="text-xs text-slate-500">Official bulletins published by the Chapter Executive Committee</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Printer className="w-3 h-3" />
                <span>Print</span>
              </button>
              {isMemberRole && (
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-[#003c84] text-white text-xs font-bold hover:bg-[#002d66] transition flex items-center gap-1 cursor-pointer"
                >
                  <Upload className="w-3 h-3" />
                  <span>New Notice</span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84]">
                      {notice.tag || notice.category}
                    </span>
                    {notice.refNo && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {notice.refNo}
                      </span>
                    )}
                    <span className="text-[11px] text-slate-500 font-medium">{notice.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{notice.title}</h3>
                  <p className="text-xs text-slate-500">Published by: {notice.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowNoticeModal(notice)}
                    className="px-3 py-1 rounded-md bg-white border border-slate-200 hover:border-blue-300 text-slate-700 text-xs font-semibold transition cursor-pointer"
                  >
                    View Document
                  </button>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 4: OFFICE BEARERS DIRECTORY
           ========================================================= */}
      {subTab === "officers" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">Executive Office Bearers (2026–27)</h2>
              <p className="text-xs text-slate-500">Finalized in consultation with the HOD and Department Faculty Members</p>
            </div>
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search bearer or role..."
                value={officerSearch}
                onChange={(e) => setOfficerSearch(e.target.value)}
                className="w-full px-3 py-1.5 pr-8 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2" />
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[
              { id: "all", label: "All Bearers" },
              { id: "faculty", label: "Faculty Advisory" },
              { id: "core", label: "Core Council" },
              { id: "lead", label: "Leads & Chairs" },
              { id: "tech", label: "Technical" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setOfficerFilter(f.id)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                  officerFilter === f.id
                    ? "bg-[#003c84] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Officer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {filteredOfficers.map((off, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/30 hover:border-blue-200 transition space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#003c84] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                    {off.initials}
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84]">
                      {off.badge}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{off.name}</h3>
                    <p className="text-xs font-semibold text-[#003c84]">{off.role}</p>
                    <p className="text-[11px] text-slate-500">{off.dept}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{off.desc}</p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <a href={`mailto:${off.email}`} className="hover:text-[#003c84] font-medium flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{off.email}</span>
                  </a>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Appointed</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 5: ACTIVITY TRACKS & EVENTS
           ========================================================= */}
      {subTab === "activities" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">Activity Tracks &amp; Scheduled Programs</h2>
              <p className="text-xs text-slate-500">Strategic action plan designed across 7 core technical and career tracks</p>
            </div>
          </div>

          {/* Track Filters */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[
              { id: "all", label: "All 7 Tracks" },
              { id: "tech", label: "Technical Workshops" },
              { id: "competition", label: "Competitions & Hackathons" },
              { id: "research", label: "Research Activities" },
              { id: "career", label: "Career & Placements" },
            ].map((tf) => (
              <button
                key={tf.id}
                onClick={() => setTrackFilter(tf.id)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                  trackFilter === tf.id
                    ? "bg-[#003c84] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-blue-50/30 hover:border-blue-200 transition space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84]">
                      {act.tag}
                    </span>
                    <span className="text-[10.5px] font-bold text-slate-500">{act.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mt-2">{act.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{act.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block">SCHEDULE</span>
                    <span className="text-slate-800 font-medium">{act.schedule}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block">VENUE</span>
                    <span className="text-slate-800 font-medium">{act.venue}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    ✓ Open for Registrations
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 6: TREASURY & FINANCIAL LEDGER
           ========================================================= */}
      {subTab === "treasury" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">Chapter Treasury &amp; Expense Ledger</h2>
              <p className="text-xs text-slate-500">Audited semester accounting and verified dual-signatory receipts</p>
            </div>
            <button
              onClick={() => triggerToast("Ledger CSV exported.")}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Allocated Budget</span>
              <p className="text-xl font-black text-[#003c84] mt-1">₹1,50,000</p>
              <span className="text-[10px] text-slate-500">Institutional Grant</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Disbursed &amp; Cleared</span>
              <p className="text-xl font-black text-emerald-800 mt-1">₹1,18,450</p>
              <span className="text-[10px] text-slate-500">Audited Vouchers</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Reserve Balance</span>
              <p className="text-xl font-black text-purple-900 mt-1">₹31,550</p>
              <span className="text-[10px] text-slate-500">Available for Q4</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Audit Rating</span>
              <p className="text-xl font-black text-slate-800 mt-1">100%</p>
              <span className="text-[10px] text-emerald-600 font-bold">Dual-Signatory</span>
            </div>
          </div>

          {/* Vouchers Table */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-500 border-y border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Voucher Ref</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Description</th>
                  <th className="py-2.5 px-3">Vendor</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Approver</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {treasuryVouchers.map((vch) => (
                  <tr key={vch.id} className="hover:bg-slate-50/80">
                    <td className="py-2.5 px-3 font-mono font-bold text-[#003c84]">{vch.ref}</td>
                    <td className="py-2.5 px-3 text-slate-500">{vch.date}</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">{vch.desc}</td>
                    <td className="py-2.5 px-3 text-slate-600">{vch.vendor}</td>
                    <td className="py-2.5 px-3 font-bold text-[#003c84]">₹{vch.amount.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-slate-500">{vch.approver}</td>
                    <td className="py-2.5 px-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {vch.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <strong>Auditing Statement:</strong> All funds were audited by the ICEM Finance Secretariat on October 2026. Zero student registration fees are charged for general chapter activities.
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 7: MEETING MINUTES (MoM)
           ========================================================= */}
      {subTab === "minutes" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="font-black text-[#003c84] text-lg">Meeting Minutes (MoM)</h2>
            <p className="text-xs text-slate-500">Official records of chapter general bodies and committee decisions</p>
          </div>

          <div className="space-y-3">
            {[
              {
                code: "MoM/2026/04",
                meeting: "Q3 Executive Council Conclave & 36-Hr AI Hackathon Roadmap",
                date: "October 05, 2026 · 04:30 PM",
                venue: "AI & DS Seminar Hall 301",
                agenda: "Approved ₹50,000 prize pool; sanctioned universal OD attendance; formed four dedicated event sub-committees.",
                attendees: "Dr. S. D. Babar, Dr. Manjusha Tatiya, Parth S., Samruddhi M., Aaditya T., Deep B., Shridhar K., Khushi U.",
              },
              {
                code: "MoM/2026/03",
                meeting: "AI Lab Compute Allocation & Bootcamp Logistics Meeting",
                date: "September 16, 2026 · 03:00 PM",
                venue: "Computer Center 2",
                agenda: "Allocated AI & DS Lab 301 for alternate Saturday PyTorch bootcamps; provisioned 24 GPU compute nodes.",
                attendees: "Dr. Manjusha Tatiya, Dr. S. D. Babar, Parth S., Aaditya T., Deep B.",
              },
              {
                code: "MoM/2026/02",
                meeting: "Standing Committees Formulation & Charter Induction Review",
                date: "August 22, 2026 · 11:30 AM",
                venue: "Conference Room B",
                agenda: "Finalized portfolio allocations for 2026–27; affirmed 100% complimentary membership.",
                attendees: "Executive Council Officers & Faculty Advisory Board",
              },
            ].map((mom, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84] font-mono">
                      {mom.code}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{mom.meeting}</h3>
                  </div>
                  <span className="text-slate-500 font-medium">{mom.date}</span>
                </div>
                <p className="text-slate-600"><strong>Resolutions:</strong> {mom.agenda}</p>
                <p className="text-slate-500"><strong>Quorum:</strong> {mom.attendees}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 8: OD LEAVE & GRIEVANCES DESK
           ========================================================= */}
      {subTab === "leave" && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="font-black text-[#003c84] text-lg">On-Duty (OD) Leave Application</h2>
              <p className="text-xs text-slate-500">Apply for academic attendance leave for attending authorized ACM hackathons &amp; conferences</p>
            </div>

            <form onSubmit={handleApplyLeave} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={leaveName}
                    onChange={(e) => setLeaveName(e.target.value)}
                    placeholder="e.g. Deep Biswas"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Student PRN *</label>
                  <input
                    type="text"
                    required
                    value={leavePrn}
                    onChange={(e) => setLeavePrn(e.target.value)}
                    placeholder="e.g. 72149821H"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Event / Competition Name *</label>
                  <input
                    type="text"
                    required
                    value={leaveEvent}
                    onChange={(e) => setLeaveEvent(e.target.value)}
                    placeholder="e.g. 36-Hr Annual AI Hackathon"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Dates of Absence *</label>
                  <input
                    type="text"
                    required
                    value={leaveDates}
                    onChange={(e) => setLeaveDates(e.target.value)}
                    placeholder="e.g. Oct 24 – Oct 25, 2026"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Academic Justification / Team Details</label>
                <textarea
                  rows={2}
                  value={leavePurpose}
                  onChange={(e) => setLeavePurpose(e.target.value)}
                  placeholder="State your role (participant/lead) and team registration ID..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-[#003c84] hover:bg-[#002d66] text-white rounded-lg text-xs font-bold transition cursor-pointer"
              >
                Submit OD Leave Request →
              </button>
            </form>

            {/* Submitted Slips */}
            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 mb-2">My Submitted OD Slips</h4>
              <div className="space-y-2">
                {submittedLeaves.map((sl) => (
                  <div key={sl.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900">{sl.event}</span>
                      <p className="text-[11px] text-slate-500">Slip ID: <code>{sl.id}</code> • Dates: {sl.dates} • Applied: {sl.dateApplied}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {sl.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grievance Desk */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="font-black text-[#003c84] text-lg">Student Grievances &amp; Resolution Desk</h2>
              <p className="text-xs text-slate-500">Report certificate discrepancies, event queries, or chapter suggestions</p>
            </div>

            <form onSubmit={handleGrievanceSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category *</label>
                  <select
                    value={grvCategory}
                    onChange={(e) => setGrvCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="Certificate Correction">Certificate Correction</option>
                    <option value="Event Registration">Event Registration Query</option>
                    <option value="Lab / GPU Access">Lab / GPU Node Access</option>
                    <option value="General Council Support">General Council Support</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Subject / Specific Issue *</label>
                  <input
                    type="text"
                    required
                    value={grvSubject}
                    onChange={(e) => setGrvSubject(e.target.value)}
                    placeholder="Briefly describe the support needed..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-bold transition cursor-pointer"
              >
                Log Grievance Ticket →
              </button>
            </form>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 mb-2">Public Grievance Redressal Log</h4>
              <div className="space-y-2">
                {grievancesList.map((g) => (
                  <div key={g.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#003c84]">{g.id} · {g.category}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">{g.status}</span>
                    </div>
                    <p className="font-semibold text-slate-900">{g.subject}</p>
                    <p className="text-[11px] text-slate-500">Student: {g.student} ({g.prn}) • Date: {g.date}</p>
                    {g.notes && (
                      <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span>{g.notes}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 9: STUDENT HUB & PITCH
           ========================================================= */}
      {subTab === "hub" && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84] uppercase">
                  Student Initiative
                </span>
                <h2 className="font-black text-[#003c84] text-lg mt-1">Get Involved in Chapter Activities</h2>
                <p className="text-xs text-slate-500">Pitch new workshop themes or volunteer for organizational sub-committees</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPitchModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Pitch an Idea</span>
                </button>
                <button
                  onClick={() => setShowVolunteerModal(true)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Join Event Team</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-slate-600" />
                  <span>Propose Hackathon Themes</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Have an innovative idea for a 24-hr sprint or industry-sponsored problem statement? Pitch directly to the Executive Council.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-600" />
                  <span>Join Sub-Committees</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Gain official ACM leadership recommendation certificates by serving in Technical, Logistics, Design, or PR teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 10: CERTIFICATE VAULT
           ========================================================= */}
      {subTab === "verify" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-black text-[#003c84]">Verify Student Certificate Authenticity</h2>
            <p className="text-xs text-slate-500">
              Enter any 16-character Certificate ID (e.g. <code>ACM-ICEM-2026-AI892</code> or <code>ACM-ICEM-2026-WIN01</code>)
            </p>
          </div>

          <form onSubmit={handleVerify} className="flex gap-2 max-w-lg">
            <input
              type="text"
              placeholder="e.g. ACM-ICEM-2026-AI892"
              value={certQuery}
              onChange={(e) => setCertQuery(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#003c84] hover:bg-[#002d66] text-white rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Verify Record
            </button>
          </form>

          {/* Quick sample chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 pt-1">
            <span>Try sample IDs:</span>
            <button
              type="button"
              onClick={() => {
                setCertQuery("ACM-ICEM-2026-AI892");
                setCertResult(initialCertificates["ACM-ICEM-2026-AI892"]);
              }}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[11px] text-slate-700 cursor-pointer"
            >
              ACM-ICEM-2026-AI892
            </button>
            <button
              type="button"
              onClick={() => {
                setCertQuery("ACM-ICEM-2026-WIN01");
                setCertResult(initialCertificates["ACM-ICEM-2026-WIN01"]);
              }}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[11px] text-slate-700 cursor-pointer"
            >
              ACM-ICEM-2026-WIN01
            </button>
            <button
              type="button"
              onClick={() => {
                setCertQuery("ACM-ICEM-2026-DEV44");
                setCertResult(initialCertificates["ACM-ICEM-2026-DEV44"]);
              }}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[11px] text-slate-700 cursor-pointer"
            >
              ACM-ICEM-2026-DEV44
            </button>
          </div>

          {certResult && (
            <div className="pt-2">
              {certResult.notFound ? (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>No verifiable certificate record found for &ldquo;{certResult.query}&rdquo;.</span>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                    <span className="font-black text-emerald-900 text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{certResult.status}</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {certResult.id}
                    </span>
                  </div>
                  <p><strong>Recipient Name:</strong> {certResult.name} (PRN: {certResult.prn})</p>
                  <p><strong>Event / Workshop:</strong> {certResult.event}</p>
                  <p><strong>Grade &amp; Distinction:</strong> {certResult.grade}</p>
                  <p className="font-mono text-[10.5px] text-slate-500 pt-1">{certResult.hash}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* =========================================================
           TAB 11: STUDY & LAB REPOSITORIES
           ========================================================= */}
      {subTab === "resources" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="font-black text-[#003c84] text-lg">AI &amp; Data Science Study Repositories</h2>
            <p className="text-xs text-slate-500">Curated code repositories, lab manuals, and datasets hosted on GitHub</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {[
              {
                title: "Deep Learning & PyTorch Lab Manual",
                desc: "36 progressive hands-on Jupyter notebooks covering CNNs, Transformers, and LoRA fine-tuning.",
                tag: "PyTorch • FE/SE/TE",
                link: "https://github.com",
              },
              {
                title: "Computer Vision & Edge AI Toolkit",
                desc: "YOLOv8 and OpenCV deployment pipelines for embedded Jetson Nano devices.",
                tag: "Edge AI • TE/BE",
                link: "https://github.com",
              },
              {
                title: "LLM Fine-Tuning & RAG Frameworks",
                desc: "LangChain, LlamaIndex, and FAISS vector search templates configured for departmental research.",
                tag: "GenAI • BE Final Year",
                link: "https://github.com",
              },
              {
                title: "Kaggle & Hackathon Starter Packs",
                desc: "End-to-end exploratory data analysis and feature engineering pipelines.",
                tag: "Competition • All Years",
                link: "https://github.com",
              },
            ].map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-blue-50/30 hover:border-blue-200 transition flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {res.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2">{res.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{res.desc}</p>
                </div>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003c84] hover:text-[#278da4]"
                >
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
           TAB 12: DIGITAL ID CARD
           ========================================================= */}
      {subTab === "profile" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-black text-[#003c84] text-lg">Digital Member Profile &amp; Virtual ID</h2>
              <p className="text-xs text-slate-500">Official student credential verifying active affiliation with ICEM ACM</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopyId}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>Copy ID</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-[#003c84] text-white text-xs font-bold hover:bg-[#002d66] transition flex items-center gap-1 cursor-pointer"
              >
                <Printer className="w-3 h-3" />
                <span>Print Card</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Virtual ID Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#003c84] via-[#002d66] to-slate-900 text-white shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black text-xs">
                    ACM
                  </div>
                  <div>
                    <h3 className="font-bold text-xs leading-tight">ICEM ACM Student Chapter</h3>
                    <p className="text-[10px] text-blue-200">Dept. of AI &amp; Data Science</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                  OFFICIAL ID
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-black text-xl text-white">
                  {session.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase()}
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-base leading-tight">{session.name}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white flex items-center gap-1 w-fit">
                    {session.role === "member" ? (
                      <>
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Executive Member</span>
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-blue-200" />
                        <span>Student Member</span>
                      </>
                    )}
                  </span>
                  <p className="text-[11px] text-blue-200">{session.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-[11px]">
                <div>
                  <span className="text-[9px] font-bold text-blue-300 uppercase block">PRN NUMBER</span>
                  <span className="font-mono font-bold text-white">{session.prn}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-blue-300 uppercase block">ACADEMIC SESSION</span>
                  <span className="font-bold text-white">2026–2027</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-blue-300 uppercase block">INSTITUTE</span>
                  <span className="text-white">ICEM, SPPU Pune</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-blue-300 uppercase block">CHAPTER CODE</span>
                  <span className="font-mono text-white">ICEM-ACM-2026-{session.prn.slice(0, 6)}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-blue-300 font-medium">
                <span>Savitribai Phule Pune University</span>
                <span>100% Free Membership</span>
              </div>
            </div>

            {/* Standing Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">Chapter Affiliation Standing</h3>
              
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">Membership Status</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active (Complimentary)</span>
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">Department</span>
                  <span className="font-semibold text-slate-900">AI &amp; Data Science</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">Voting Franchise</span>
                  <span className="font-bold text-[#003c84] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003c84]" />
                    <span>Granted (Annual Elections)</span>
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">OD Leave Sanction</span>
                  <span className="font-bold text-[#003c84] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003c84]" />
                    <span>Universal On-Duty Eligibility</span>
                  </span>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={() => setSubTab("leave")}
                  className="flex-1 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold text-center cursor-pointer"
                >
                  Apply OD Leave
                </button>
                <button
                  onClick={() => setSubTab("verify")}
                  className="flex-1 py-2 rounded-lg bg-[#003c84] text-white text-xs font-bold text-center hover:bg-[#002d66] cursor-pointer"
                >
                  My Certificates
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           MODAL 1: PUBLISH CIRCULAR MODAL
           ========================================================= */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base">Publish Chapter Circular</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePublishNotice} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Notice Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Workshop Registration Pass Confirmation"
                  value={newNoticeTitle}
                  onChange={(e) => setNewNoticeTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category Tag</label>
                <select
                  value={newNoticeTag}
                  onChange={(e) => setNewNoticeTag(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Circular">General Circular</option>
                  <option value="Workshop">Workshop &amp; Lab</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Research">Research Call</option>
                  <option value="Governance">Governance</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Announcement Body</label>
                <textarea
                  rows={3}
                  placeholder="Official circular text..."
                  value={newNoticeBody}
                  onChange={(e) => setNewNoticeBody(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white font-bold cursor-pointer"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
           MODAL 2: NOTICE DOCUMENT VIEWER
           ========================================================= */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-lg w-full shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block">{showNoticeModal.refNo}</span>
                <h3 className="font-bold text-slate-900 text-base mt-0.5">{showNoticeModal.title}</h3>
              </div>
              <button
                onClick={() => setShowNoticeModal(null)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 text-xs text-slate-600 flex justify-between">
              <span><b>Date:</b> {showNoticeModal.date}</span>
              <span><b>Issuer:</b> {showNoticeModal.author}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {showNoticeModal.body}
            </p>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
              >
                Print Notice
              </button>
              <button
                type="button"
                onClick={() => setShowNoticeModal(null)}
                className="px-4 py-2 rounded-lg bg-[#003c84] text-white text-xs font-bold hover:bg-[#002d66] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           MODAL 3: PITCH IDEA MODAL
           ========================================================= */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84] uppercase">
                  Council Submission
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-1">Pitch an Idea or Workshop Theme</h3>
              </div>
              <button
                onClick={() => setShowPitchModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePitchSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Proposal Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LLM Agents & MCP Workshop Sprint"
                  value={pitchTitle}
                  onChange={(e) => setPitchTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Proposal Details &amp; Outcomes *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Explain why this topic matters and what students will learn..."
                  value={pitchDesc}
                  onChange={(e) => setPitchDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowPitchModal(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white font-bold cursor-pointer"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
           MODAL 4: VOLUNTEER REGISTRATION MODAL
           ========================================================= */}
      {showVolunteerModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84] uppercase">
                  Student Leadership
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-1">Volunteer for Chapter Event Teams</h3>
              </div>
              <button
                onClick={() => setShowVolunteerModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleVolunteerSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Select Sub-Committee *</label>
                <select
                  value={volTeam}
                  onChange={(e) => setVolTeam(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Technical Mentorship & Labs">Technical Mentorship &amp; Labs</option>
                  <option value="Hackathon Logistics & Sprints">Hackathon Logistics &amp; Sprints</option>
                  <option value="Design, Branding & Web Platform">Design, Branding &amp; Web Platform</option>
                  <option value="Public Relations & Outreach">Public Relations &amp; Outreach</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Relevant Experience / Skills</label>
                <textarea
                  rows={3}
                  placeholder="Mention your relevant tech stack, design tools, or event experience..."
                  value={volNote}
                  onChange={(e) => setVolNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowVolunteerModal(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#003c84] hover:bg-[#002d66] text-white font-bold cursor-pointer"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
