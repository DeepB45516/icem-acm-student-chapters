import Link from "next/link";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
        <AlertCircle className="w-8 h-8" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#003c84] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
        Error 404 • Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
        Chapter Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-8">
        The page you are looking for might have been moved, removed, or is temporarily unavailable under the ICEM ACM Student Chapter portal.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#003c84] hover:bg-[#002d66] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Member Vault</span>
        </Link>
      </div>
    </div>
  );
}

