import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import "./Footer.css";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer text-[#F5F5F5] py-16 px-6 md:px-12 mt-auto" id="main-footer">
      <div className="footerGrid mx-auto text-center">
        {/* Brand column */}
        <div className="space-y-4 flex flex-col items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tight mb-2 font-display text-white hover:text-[#E8D5B0] transition-colors inline-block">
            Weboven
          </Link>
          <p className="footerText text-sm max-w-sm text-center">
            Costruiamo strumenti digitali che portano risultati reali, non solo pixel graziosi.
            Niente fronzoli, niente compromessi. Strumenti pronti a lavorare mentre tu dormi.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/393388666909?text=Ciao,%20sono%20qui%20dal%20tuo%20sito!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0] flex items-center justify-center"
              aria-label="Contattami su WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@weboven.it"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0]"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/surradiant"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0]/30 transition-all text-[#A0A0A0] hover:text-[#E8D5B0]"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-4 flex flex-col items-center">
          <h4 className="footerHeader uppercase text-xs font-semibold tracking-wider text-[#E8D5B0]">Mappa del Sito</h4>
          <ul className="space-y-2.5 text-sm text-center">
            <li>
              <Link href="/" className="footerLink hover:underline">Homepage</Link>
            </li>
            <li>
              <Link href="/web" className="footerLink hover:underline">Siti & E-Commerce</Link>
            </li>
            <li>
              <Link href="/social" className="footerLink hover:underline">Social Media</Link>
            </li>
            <li>
              <Link href="/metodo" className="footerLink hover:underline">Il Metodo</Link>
            </li>
            <li>
              <Link href="/testimonianze" className="footerLink hover:underline">Testimonianze</Link>
            </li>
          </ul>
        </div>

        {/* Action Column replacing Contatti Rapidi */}
        <div className="space-y-4 flex flex-col items-center">
          <h4 className="footerHeader uppercase text-xs font-semibold tracking-wider text-[#E8D5B0]">Parliamo del tuo Progetto</h4>
          <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-xs text-center">
            Pronto a trasformare la tua presenza digitale in uno strumento di vendita attivo 24/7?
          </p>
          <div className="pt-2">
            <Link
              href="/contatto"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#E8D5B0] hover:bg-[#D4AF37] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,213,176,0.35)] hover:-translate-y-0.5 w-full text-center"
            >
              Inizia Ora <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footerDivider my-12" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-[#A0A0A0]">
        <div>
          &copy; {currentYear} Weboven.it — Tutti i diritti riservati.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="footerLink hover:underline font-semibold">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
