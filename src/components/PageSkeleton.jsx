import React from "react";

export default function PageSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="bg-white min-h-[calc(100vh-84px)] animate-in fade-in duration-300 pointer-events-none select-none"
    >
      <span className="sr-only">Loading page content...</span>

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-b from-[#f0f7fa]/60 via-white to-white pt-10 pb-20 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="skeleton-shimmer h-7 w-52 rounded-full border border-slate-200/60" />

            {/* Headline Bars */}
            <div className="space-y-3.5">
              <div className="skeleton-shimmer h-9 sm:h-12 w-11/12 rounded-xl bg-slate-200" />
              <div className="skeleton-shimmer h-9 sm:h-12 w-4/5 rounded-xl bg-slate-200" />
            </div>

            {/* Paragraph Bars */}
            <div className="space-y-2.5 max-w-xl pt-1">
              <div className="skeleton-shimmer-subtle h-4 w-full rounded-md bg-slate-200/70" />
              <div className="skeleton-shimmer-subtle h-4 w-11/12 rounded-md bg-slate-200/70" />
              <div className="skeleton-shimmer-subtle h-4 w-3/4 rounded-md bg-slate-200/70" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <div className="skeleton-shimmer h-12 w-36 rounded-lg bg-slate-300" />
              <div className="skeleton-shimmer h-12 w-36 rounded-lg bg-slate-300" />
              <div className="skeleton-shimmer-subtle h-12 w-36 rounded-lg border border-slate-200" />
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3.5] max-w-lg mx-auto w-full skeleton-shimmer-subtle shadow-sm flex items-end p-6">
              {/* Bottom Card Overlay Badge Skeleton */}
              <div className="bg-white/95 rounded-xl p-4 flex items-center gap-3.5 border border-slate-200/80 shadow-md w-52">
                <div className="skeleton-shimmer w-10 h-10 rounded-lg bg-slate-300 flex-shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <div className="skeleton-shimmer h-3.5 w-16 rounded bg-slate-300" />
                  <div className="skeleton-shimmer-subtle h-2.5 w-24 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Stats Row Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-200/80 bg-white shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="skeleton-shimmer w-9 h-9 rounded-lg bg-slate-200" />
                <div className="skeleton-shimmer-subtle w-12 h-4 rounded-full bg-slate-100" />
              </div>
              <div className="skeleton-shimmer h-7 w-20 rounded-md bg-slate-300" />
              <div className="skeleton-shimmer-subtle h-3.5 w-28 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </section>

      {/* Content Cards Grid Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between pb-6">
          <div className="space-y-2">
            <div className="skeleton-shimmer h-6 w-44 rounded-md bg-slate-300" />
            <div className="skeleton-shimmer-subtle h-4 w-64 rounded bg-slate-200" />
          </div>
          <div className="skeleton-shimmer-subtle h-9 w-28 rounded-lg border border-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs flex flex-col"
            >
              {/* Card Image Area */}
              <div className="skeleton-shimmer h-44 w-full bg-slate-200" />
              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="skeleton-shimmer-subtle h-5 w-24 rounded-full bg-slate-200" />
                  <div className="skeleton-shimmer h-5 w-4/5 rounded bg-slate-300" />
                  <div className="space-y-1.5 pt-1">
                    <div className="skeleton-shimmer-subtle h-3.5 w-full rounded bg-slate-200" />
                    <div className="skeleton-shimmer-subtle h-3.5 w-5/6 rounded bg-slate-200" />
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="skeleton-shimmer-subtle h-4 w-24 rounded bg-slate-200" />
                  <div className="skeleton-shimmer h-8 w-20 rounded-lg bg-slate-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
