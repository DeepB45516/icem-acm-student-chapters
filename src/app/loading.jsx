"use client";

import React, { useState, useEffect } from "react";
import PageSkeleton from "@/components/PageSkeleton";

/**
 * Loading boundary for Next.js App Router.
 * Only displays skeleton placeholder if the page takes longer than 250ms to load,
 * preventing annoying layout flickers on fast connections or cached visits.
 */
export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Threshold delay: only show skeleton if loading takes time
    const timer = setTimeout(() => {
      setShow(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return <PageSkeleton />;
}
