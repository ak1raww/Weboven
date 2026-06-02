import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Smartphone, Globe, Shield, MessageSquare, Zap, Activity, Mail } from "lucide-react";
import { JsonLd, buildMetadata, organizationJsonLd, pageSeo, webPageJsonLd, websiteJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.home);

// Official WhatsApp Brand Icon SVG
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

export default function Home() {
  const testimonialsPreview = [
    {
      text: "“Non ci siamo mai trovati a lavorare meglio con una persona come Alex, preciso e professionale in tutto quello che fa...”",
      author: "Cristina Scupola",
      role: "Titolare, Studio Medico"
    },
    {
      text: "“Avevo un sito veramente inguardabile, non appena ho conosciuto Alex ci ho parlato e mi ha subito fatto notare tutti i difetti...”",
      author: "Antonio Chiarella",
      role: "Co-Founder, Automotive"
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 overflow-x-hidden md:px-0">
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), webPageJsonLd(pageSeo.home)]} />
      
      {/* 1. Hero Section */}
      <section className="pt-8 px-6 text-center max-w-3xl mx-auto space-y-6" id="hero-section">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          Weboven,
        </h1>
        <h2 className="text-2xl md:text-4xl text-white font-medium leading-tight">
          Esperienze digitali che lasciano il segno.
        </h2>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Non faccio siti web. Faccio strumenti che lavorano per te mentre dormi.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/web"
            className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#E8D5B0] hover:bg-[#D4AF37] text-center rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,213,176,0.35)] hover:-translate-y-0.5"
          >
            Vedi cosa faccio
          </Link>
          <Link
            href="/contatto"
            className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-[#E8D5B0]/30 text-center rounded-xl transition-all duration-300 backdrop-blur-md"
          >
            Parliamoci
          </Link>
        </div>
      </section>

      {/* 2. Brand Identity Focus & Custom Pulsating Demo Button requested by User */}
      <section className="px-6 max-w-5xl mx-auto" id="live-demo-showcase">
        <div className="demoHubSection p-8 md:p-14 text-center space-y-8 glass-panel relative group">
          {/* Accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#E8D5B0]/50 to-transparent" />
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">
              Trasparenza Totale & Sviluppo Tangibile
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
              Siti Veloci. Senza Scuse.
            </h3>
            <p className="text-sm md:text-base text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
              Non vendiamo mockup grafici creati su Photoshop o promesse vuote. Abbiamo creato un 
              <strong> Hub di Demo in Tempo Reale</strong> dove puoi toccare con mano, cliccare e misurare la velocità delle nostre architetture. 
              Nessun codice rallentato da plugin pesanti: solo pura performance Next.js.
            </p>
          </div>

          <div className="py-6 flex flex-col justify-center items-center gap-4">
            {/* The hyperactive animated client CTA button linking to demo.weboven.it */}
            <a 
              href="https://demo.weboven.it"
              target="_blank"
              rel="noopener noreferrer"
              className="pulsatingButton"
              id="explore-demos-cta"
            >
              <span>Esplora i Demo Live</span>
              <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
              {/* Pulsating shadow element */}
              <div className="pulsatingButtonGlow" />
            </a>
          </div>
        </div>
      </section>


      {/* 3. Approach Section */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center" id="approach-section">
        <div className="md:col-span-5 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Il Mio Approccio</span>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display leading-tight text-white">
            Il web è cambiato.<br />Il tuo modo no.
          </h3>
          <div className="h-1 w-20 bg-[#E8D5B0] rounded" />
        </div>
        <div className="md:col-span-7 space-y-6 text-base text-[#A0A0A0] leading-relaxed">
          <p className="text-[#F5F5F5] font-medium text-lg">
            Ogni progetto che porto avanti nasce da una domanda semplice: Cosa manca davvero al tuo business per generare più vendite?
          </p>
          <p>
            Non mi interessa fare siti statici copia-incollati da templates preposti. Mi interessa costruire strumenti digitali che lavorano per te mentre dormi, che si integrano coi tuoi processi e riducono l&apos;esitazione del cliente finale.
          </p>
          <p>
            Se hai un&apos;attività commerciale o di servizi oggi e non possiedi una forte, riconoscibile identità online, stai solo perdendo possibili clienti preziosi, giorno dopo giorno, a favore della concorrenza. Riempiamo noi questo vuoto.
          </p>
        </div>
      </section>

      {/* 4. Services Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-12" id="services-bento">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Cosa Faccio</span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-white">
            Due Aree. Un Solo Obiettivo.
          </h3>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-xl mx-auto">
            Evitiamo pacchetti complessi. Uniamo la programmazione pura alla gestione strategica dei tuoi profili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Web & E-Commerce */}
          <div className="bentoCard p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-3xl font-bold font-display text-[#E8D5B0]/40">01</span>
                <span className="p-3 bg-[#E8D5B0]/10 text-[#E8D5B0] rounded-xl border border-[#E8D5B0]/20">
                  <Globe className="w-6 h-6" />
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white font-display">Web & E-Commerce</h4>
                <p className="text-xs italic text-[#E8D5B0]">Siti, il necessario.</p>
              </div>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                Siti vetrina, e-commerce completi e applicazioni web interattive su misura. Niente template pre-fatti o costruttori amatoriali che rallentano la navigazione. Analizzo il tuo business e creo un codice veloce, pulito, modellato attorno al tuo cliente.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/web"
                className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#E8D5B0] hover:text-[#FFF] transition-colors"
              >
                Esplora i Servizi Web <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Social Media */}
          <div className="bentoCard p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-3xl font-bold font-display text-[#E8D5B0]/40">02</span>
                <span className="p-3 bg-[#E8D5B0]/10 text-[#E8D5B0] rounded-xl border border-[#E8D5B0]/20">
                  <Smartphone className="w-6 h-6" />
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white font-display">Social Media</h4>
                <p className="text-xs italic text-[#E8D5B0]">Social si, ma con la testa.</p>
              </div>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                Niente post messi a casaccio per riempire inutilmente il feed. Pianifichiamo contenuti autentici che parlano al tuo pubblico specifico e posizioniamo i profili per spingerli a convertire l&apos;attenzione iniziale in fatturato reale.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/social"
                className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#E8D5B0] hover:text-[#FFF] transition-colors"
              >
                Esplora i Servizi Social <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Alex Quote Section - Replaces Numeri */}
      <section className="px-6 max-w-4xl mx-auto" id="quote-section">
        <div className="text-center pt-8 max-w-xl mx-auto space-y-6">
          <p className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] italic font-brand leading-relaxed">
            &ldquo;Puoi avere un sito. O puoi avere un sito con dei risultati.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold block">— Alex</span>
        </div>
      </section>

      {/* 6. Contact Panel Grid */}
      <section className="px-6 max-w-5xl mx-auto" id="contact-panel">
        <div className="glass-panel p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-14 relative overflow-hidden">
          {/* Subtle gold glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E8D5B0]/5 rounded-full filter blur-[100px] pointer-events: none; z-0" />

          <div className="space-y-4 flex-grow relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Parliamoci</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-white">
              Hai un progetto in testa?
            </h3>
            <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
              Raccontamelo. Anche se è ancora nebuloso o poco definito. Molto spesso è proprio da un confronto vago ed informale che nascono le idee digitali migliori.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/393388666909?text=Ciao,%20sono%20qui%20dal%20tuo%20sito!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl text-center font-semibold text-xs tracking-wider uppercase bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <WhatsAppIcon className="w-4 h-4" /> Scrivimi su WhatsApp
            </a>
            <a
              href="mailto:contact@weboven.it"
              className="px-6 py-4 rounded-xl text-center font-semibold text-xs tracking-wider uppercase bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-[#E8D5B0]/30 transition-all duration-300 text-white flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#E8D5B0]" /> Invia una Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
