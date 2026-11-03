import React from "react";
import { Users, Shield } from "lucide-react";

export const metadata = {
  title: "Committee | ICEM ACM Student Chapter",
};

export default function CommitteePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Faculty Guidance */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold text-[#003c84] mb-4">Faculty Sponsor &amp; Chapter Coordinator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="w-14 h-14 rounded-xl bg-[#003c84] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              MT
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-[#003c84] bg-blue-100 px-2 py-0.5 rounded">
                Faculty Sponsor
              </span>
              <h2 className="font-bold text-slate-900 text-base mt-0.5">Dr. Manjusha Tatiya</h2>
              <p className="text-xs font-semibold text-teal-700">Head of Department (AI &amp; Data Science)</p>
              <p className="text-xs text-slate-600 mt-1">Institutional oversight and academic alignment.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="w-14 h-14 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              SB
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                Chapter Coordinator &amp; Financer
              </span>
              <h2 className="font-bold text-slate-900 text-base mt-0.5">Dr. Sunil D. Babar</h2>
              <p className="text-xs font-semibold text-teal-700">Professor (Dept. of AI &amp; Data Science)</p>
              <p className="text-xs text-slate-600 mt-1">Primary operational liaison with ACM Global.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Executive Council */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-[#003c84] mb-4">Student Executive Office Bearers (2026–27)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Parth Sawant", role: "Chairperson", code: "PS", desc: "Leads chapter vision, executive operations, and technical symposiums." },
            { name: "Samruddhi Morde", role: "Vice Chair", code: "SM", desc: "Coordinates day-to-day initiatives, outreach, and event scheduling." },
            { name: "Aaditya Topare", role: "Secretary", code: "AT", desc: "Manages official communications, proceedings, and chapter records." },
            { name: "Deep Biswas", role: "Webmaster", code: "DB", desc: "Directs web development, registration portals, GitHub repositories, and tech infrastructure." },
            { name: "Shridhar Kumbhar", role: "Treasurer", code: "SK", desc: "Manages chapter budgeting, ledger accounts, and hackathon prize funds." },
            { name: "Khushi Umathe", role: "Membership Chair", code: "KU", desc: "Spearheads student onboarding, relations, and cohort engagement." },
          ].map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#003c84] transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#003c84] text-white font-bold flex items-center justify-center text-xs">
                  {m.code}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{m.name}</h3>
                  <span className="text-xs font-semibold text-teal-700">{m.role}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
