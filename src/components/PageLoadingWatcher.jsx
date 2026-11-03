"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PageSkeleton from "./PageSkeleton";

/**
 * PageLoadingWatcher
 * Displays the skeleton loading screen ONLY when the website takes time to load (>250-300ms):
 * 1. On initial visit/hard refresh if assets or document are taking time to finish loading.
 * 2. On route transitions between pages if the destination page takes time to load.
 * If the page loads quickly (< 250ms), no skeleton is shown, preventing layout flashes.
 */
export default function PageLoadingWatcher() {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const pathname = usePathname();
  const timerRef = useRef(null);

  // 1. Initial page load check
  useEffect(() => {
    // If the window/document is already loaded, skip
    if (typeof document !== "undefined" && document.readyState === "complete") {
      return;
    }

    // Only show skeleton if initial page loading takes > 300ms
    timerRef.current = setTimeout(() => {
      setShowSkeleton(true);
    }, 300);

    const handleLoad = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setShowSkeleton(false);
    };

    window.addEventListener("load", handleLoad);

    // Safety timeout to prevent hanging forever
    const safetyTimeout = setTimeout(() => {
      handleLoad();
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(safetyTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // 2. Clear skeleton as soon as route changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowSkeleton(false);
  }, [pathname]);

  // 3. Listen to internal link clicks to detect navigations taking time
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Ignore external URLs, anchors, tel/mailto, download, or modifier keys
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Check if target is a different route
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = href.split("?")[0].split("#")[0].replace(/\/$/, "");

      // If actually navigating to another path
      if (targetPath && targetPath !== currentPath) {
        if (timerRef.current) clearTimeout(timerRef.current);

        // Threshold timer: only show if navigation takes longer than 250ms
        timerRef.current = setTimeout(() => {
          setShowSkeleton(true);
        }, 250);
      }
    };

    document.addEventListener("click", handleLinkClick, true);

    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  if (!showSkeleton) return null;

  return (
    <div
      className="fixed inset-0 top-[72px] lg:top-[84px] z-40 bg-white overflow-y-auto animate-in fade-in duration-200"
      style={{ minHeight: "calc(100vh - 84px)" }}
    >
      <PageSkeleton />
    </div>
  );
}
