"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation when path changes
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMobileOpen(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Servizi Web", href: "/web" },
    { name: "Social Media", href: "/social" },
    { name: "Il Metodo", href: "/metodo" },
    { name: "Testimonianze", href: "/testimonianze" },
    { name: "Contatti", href: "/contatto" },
  ];

  return (
    <>
      <header
        className={cn(
          "navbarContainer flex items-center justify-between px-6 md:px-8",
          scrolled && "navbarScrolled"
        )}
        id="main-header"
      >
        {/* Brand Logo */}
        <Link href="/" className="navbarBrand text-xl md:text-2xl font-display font-extrabold tracking-tight text-white hover:text-[#E8D5B0] transition-colors">
          Weboven
        </Link>

        {/* Desktop Navigation Link Items */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("navLink", isActive && "navLinkActive")}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Custom CTA */}
        <div className="hidden md:block">
          <Link href="/contatto" className="navCTA px-5 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
            Parliamoci <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F5F5F5] hover:text-[#E8D5B0] transition-colors p-1"
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "mobileMenuOverlay",
          mobileOpen && "mobileMenuIsOpen"
        )}
        id="mobile-drawer"
      >
        <div className="absolute top-6 left-6 font-display font-extrabold text-xl text-white">
          Weboven
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-[#F5F5F5] hover:text-[#E8D5B0] p-1"
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>

        <nav className="flex flex-col items-center gap-6 text-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "mobileNavLink",
                  isActive && "mobileNavLinkActive"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://demo.weboven.it"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="pulsatingButton mt-4"
          >
            <span>Esplora i Demo Live</span>
            <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
            <div className="pulsatingButtonGlow" />
          </a>
          <Link
            href="/contatto"
            onClick={() => setMobileOpen(false)}
            className="mt-6 navCTA px-8 py-3 text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5"
          >
            Inizia Ora <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </>
  );
}
