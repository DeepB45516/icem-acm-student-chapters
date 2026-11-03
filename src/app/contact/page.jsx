"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, ExternalLink, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Membership Query",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "Membership Query",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast */}
      {submitted && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#003c84] text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300 border border-teal-400/40">
          <CheckCircle2 className="w-5 h-5 text-teal-300" />
          <span>Thanks! Your message has been noted — the chapter desk will reply by email.</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-[#003c84] mb-2">Get in Touch</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Questions regarding student membership, event collaborations, or symposium publications? Reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Contact Details & Map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#003c84]">Chapter Secretariat Desk</h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#278da4] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Chapter Office:</strong>
                  <span>Dept. of AI &amp; Data Science, 4th Floor, Indira College of Engineering and Management (ICEM), Parandwadi, Pune – 410506.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#278da4] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Email Address:</strong>
                  <a href="mailto:acmstudentchapter@indiraicem.ac.in" className="text-[#003c84] font-semibold hover:underline">
                    acmstudentchapter@indiraicem.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#278da4] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Contact Desk:</strong>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    <span>Chapter Desk: <a href="tel:+919881383933" className="text-[#003c84] font-semibold hover:underline">+91 98813 83933</a></span>
                    <span className="text-slate-300">|</span>
                    <span>Coordinator: <a href="tel:+917700024760" className="text-[#003c84] font-semibold hover:underline">+91 7700 024 760</a></span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#278da4] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Office Hours:</strong>
                  <span>Monday to Friday, 2:00 PM – 5:00 PM (Chapter Room, 4th Floor)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm overflow-hidden aspect-[16/9]">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Indira+College+of+Engineering+and+Management,+Pune&output=embed"
              title="ICEM campus map"
              className="w-full h-full rounded-xl border-0"
            />
          </div>
        </div>

        {/* Right Column: Send a Message Form & ACM Global Portals */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#003c84] mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#003c84] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#003c84] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#003c84] focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option>Membership Query</option>
                  <option>Event Sponsorship</option>
                  <option>Collaboration Proposal</option>
                  <option>Certificate Verification Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#003c84] focus:ring-2 focus:ring-blue-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white font-bold text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Chapter Desk</span>
              </button>
            </form>
          </div>

          {/* Official ACM Global Portals */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#003c84]">Official ACM Global Portals</h2>
            {[
              { name: "ACM.org Global Home", desc: "Global Association for Computing Machinery portal.", url: "https://www.acm.org" },
              { name: "ACM Digital Library", desc: "Full-text database of computing research literature.", url: "https://dl.acm.org" },
              { name: "ACM Student Membership", desc: "Individual global student membership sign-up.", url: "https://www.acm.org/membership/student" },
              { name: "ACM Special Interest Groups", desc: "Technical communities (SIGAI, SIGGRAPH, SIGKDD).", url: "https://www.acm.org/special-interest-groups" },
            ].map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="block p-3 rounded-xl border border-slate-200 hover:border-[#003c84] hover:bg-slate-50 transition"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                  <span>{res.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
