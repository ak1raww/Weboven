import React from "react";
import type { Metadata } from "next";
import { Mail, ArrowUpRight, HelpCircle, Sparkles, Plus, Minus } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { JsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.contatto);

// Official WhatsApp Brand Icon SVG
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

export default function Contatto() {
  const faqs = [
    {
      q: "Quanto costa un sito?",
      a: "Dipende dal progetto. Tendo prima a conoscere la persona e le sue esigenze, dopodiché, in base alla complessità del progetto, ti faccio un preventivo su misura. In linea di massima, un mio sito di qualità parte da 500€."
    },
    {
      q: "Quanto tempo ci vuole?",
      a: "Dipende dalla complessità e da quanto sei reattivo nei feedback. Il progetto meno impegnativo mi ha preso una settimana. Quello più complesso quasi un mese."
    },
    {
      q: "Posso gestire il sito da solo dopo?",
      a: "Se te la senti, assolutamente sì! Ti posso fare da guida per aiutarti a capire il funzionamento del sito e di come gestire i dati al suo interno. Se invece non te la senti, ci sono sempre io a tua disposizione!"
    },
    {
      q: "Ho già un sito, come facciamo?",
      a: "Se hai già un sito che non funziona come dovrebbe, o ti è stato creato da un ragazzo in giacca e cravatta che 'sa fare siti' e ti ha creato un sito con Framework di 20 anni fa, chiedendoti una cifra considerevole per un sito brutto e copia incollato, ci penso io a riparare i danni."
    }
  ];

  const channels = [
    {
      title: "WhatsApp",
      desc: "Il modo più diretto. Rispondo praticamente subito.",
      cta: "Scrivimi su WhatsApp",
      url: "https://wa.me/393388666909?text=Ciao,%20sono%20qui%20dal%20tuo%20sito!",
      icon: <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Email",
      desc: "Per chi è vecchio stile e vuole mantenere la classe.",
      cta: "contact@weboven.it",
      url: "mailto:contact@weboven.it",
      icon: <Mail className="w-5 h-5 text-[#E8D5B0]" />
    },
    {
      title: "Instagram",
      desc: "Seguimi, mandami un DM, vedi cosa faccio.",
      cta: "@surradiant",
      url: "https://instagram.com/surradiant",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-24 max-w-7xl mx-auto px-6" id="contatto-layout">
      <JsonLd
        data={[
          webPageJsonLd(pageSeo.contatto),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contatto", path: "/contatto" },
          ]),
        ]}
      />
      {/* 1. Hero header */}
      <section className="pt-8 text-center max-w-2xl mx-auto space-y-4" id="contatti-hero">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          Parliamoci.
        </h1>
        <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
          Raccontami il tuo progetto. Anche se è ancora un'idea vaga e poco chiara, nessuno ha mai le idee chiare e precise.
        </p>
      </section>

      {/* 2. Direct Channels & Form Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="channels-form-grid">
        {/* Left Side: Channels details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Come Preferisci</span>
            <h2 className="text-2xl font-bold font-display text-white">Canali Diretti</h2>
          </div>

          <div className="space-y-4">
            {channels.map((chan, idx) => (
              <div key={idx} className="glass-panel p-6 flex items-start gap-4 hover:border-[#E8D5B0]/20 transition-all duration-300">
                <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl shrink-0">
                  {chan.icon}
                </div>
                <div className="space-y-2 flex-grow">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">{chan.title}</h3>
                  <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed">{chan.desc}</p>
                  <a
                    href={chan.url}
                    target={chan.title !== "Email" ? "_blank" : undefined}
                    rel={chan.title !== "Email" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#E8D5B0] hover:text-white transition-colors pt-1"
                  >
                    {chan.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick status box */}
          <div className="p-5 border border-white/[0.04] rounded-xl bg-white/[0.01] text-xs text-[#A0A0A0] flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#E8D5B0] flex-shrink-0 animate-pulse" />
            <span>Spiegami se hai fretta d&apos;andare online. Posso farti salire di priorità se abbiamo chiara la mappa del sito.</span>
          </div>
        </div>

        {/* Right Side: Interactive glass Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 space-y-6 relative">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Invia brief completo</span>
              <h2 className="text-2xl font-bold font-display text-white">Inizia il Progetto</h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. FAQs Section */}
      <section className="space-y-16 max-w-4xl mx-auto" id="contatti-faq">
        <div className="text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-[#E8D5B0] mx-auto opacity-70" />
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Domande Ricorrenti</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Domande Frequenti</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="transition-all duration-300 faqDetails">
              <summary className="faqQuestion">
                <span className="text-sm md:text-base font-semibold text-white pr-4">{faq.q}</span>
                <Plus className="faqPlus w-4 h-4 text-[#E8D5B0] shrink-0" />
                <Minus className="faqMinus w-4 h-4 text-[#E8D5B0] shrink-0" />
              </summary>
              <div className="faqAnswer text-xs md:text-sm text-[#A0A0A0] leading-relaxed faqAnswerOpen">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
