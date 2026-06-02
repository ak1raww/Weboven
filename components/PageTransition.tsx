"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to the absolute top of the page instantly on pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
}
