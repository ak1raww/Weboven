"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import "./Navbar.css";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

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

  // Disable page scroll when mobile drawer is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            className="mt-4 navCTA px-8 py-3 text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5"
          >
            Inizia Ora <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Socials Circles ("Le tre palle") */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/393388666909?text=Ciao,%20sono%20qui%20dal%20tuo%20sito!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)]"
              aria-label="Contattami su WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
            </a>
            <a
              href="mailto:contact@weboven.it"
              className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-[#E8D5B0]" />
            </a>
            <a
              href="https://instagram.com/surradiant"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)]"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
