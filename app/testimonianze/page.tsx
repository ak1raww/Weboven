import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowUpRight, MessageSquare, Quote, Heart } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, buildMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.testimonianze);

export default function Testimonianze() {
  const reviews = [
    {
      quote: "“Non ci siamo mai trovati a lavorare meglio con una persona come Alex, preciso e professionale in tutto quello che fa, finalmente il nostro studio medico ha un sito di tutto il rispetto.”",
      author: "Cristina Scupola",
      role: "Titolare, Studio Medico",
      rating: 5,
      url: "https://obstudio.it",
      siteLabel: "obstudio.it"
    },
    {
      quote: "“Il progetto di Zerodosi da quando abbiamo chiesto una mano ad Alex è rivoluzionato grazie al nuovo e-commerce che ci ha creato, basandosi sul vecchio ed orribile sito.”",
      author: "Cristina Scupola",
      role: "CEO Zerodosi, Abbigliamento",
      rating: 5,
      url: "https://zerodosi.net",
      siteLabel: "zerodosi.net"
    },
    {
      quote: "“Senza Alex, io e Cristina avremmo avuto veramente complicanze nel gestire la parte e-commerce di Zerodosi, se non ci fosse stato Alex, non ne avremmo avuto il tempo.”",
      author: "Irene Patti",
      role: "CEO Zerodosi, Abbigliamento",
      rating: 5,
      url: "https://zerodosi.net",
      siteLabel: "zerodosi.net"
    },
    {
      quote: "“Avevo un sito veramente inguardabile, non appena ho conosciuto Alex, ci ho parlato e mi ha subito fatto notare tutti i difetti e come li avrebbe corretti, è l'unico così serio.”",
      author: "Antonio Chiarella",
      role: "Co-Founder, Automotive",
      rating: 5,
      url: "https://autostorepneumatici.it",
      siteLabel: "autostorepneumatici.it"
    },
    {
      quote: "“Il nostro e-commerce aveva un tasso di abbandono del carrello oltre il 75%. Dopo il lavoro su UX e checkout siamo scesi sotto il 55%. Quei 20 punti valgono parecchio.”",
      author: "Paolo Conte",
      role: "Biker romano, Abbigliamento",
      rating: 5,
      url: "https://pablos23.it",
      siteLabel: "pablos23.it"
    },
    {
      quote: "“Sempre chiaro e preciso in tutte le cose che fa, ha sempre comunicato con me, chiarito ogni dubbio che avevo e motivato ad andare avanti nonostante la mia situazione personale.”",
      author: "Cristina Farinella",
      role: "Founder, Cosmetica",
      rating: 5,
      url: "https://pharinellacosmetic.it",
      siteLabel: "pharinellacosmetic.it"
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 max-w-7xl mx-auto px-6" id="testimonianze-layout">
      <JsonLd
        data={[
          webPageJsonLd(pageSeo.testimonianze),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Testimonianze", path: "/testimonianze" },
          ]),
        ]}
      />
      {/* 1. Hero */}
      <section className="pt-8 text-center max-w-3xl mx-auto space-y-6" id="testimonianze-hero">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          Non fidarti di me.<br />Fidati di chi ho già aiutato.
        </h1>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Le parole migliori vengono sempre dagli altri.
        </p>
        <div className="pt-4">
          <Link href="/contatto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8D5B0] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#D4AF37] transition-all duration-300">
            Parliamoci <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 2. Masonry grid showcasing cards */}
      <section className="masonryGrid" id="reviews-bento">
        {reviews.map((rev, idx) => (
          <div key={idx} className="reviewCard">
            {/* Quote icon & Rating */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Quote className="w-8 h-8 text-[#E8D5B0] opacity-35" />
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="starIcon" />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-[#F5F5F5] italic leading-relaxed font-sans">
                {rev.quote}
              </p>
            </div>

            {/* Author meta and site details */}
            <div className="pt-4 border-t border-white/[0.04] flex justify-between items-center text-xs">
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider">{rev.author}</h4>
                <p className="text-white/60">{rev.role}</p>
              </div>
              
              {rev.url && (
                <a
                  href={rev.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-[#E8D5B0] hover:text-white transition-colors"
                >
                  {rev.siteLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Highlight Divider block */}
      <section className="max-w-4xl mx-auto py-8" id="highlight-block">
        <div className="glass-panel p-8 md:p-14 text-center space-y-4 border-[#E8D5B0]/15 bg-gradient-to-r from-transparent via-[#E8D5B0]/5 to-transparent relative">
          <Heart className="w-8 h-8 text-[#E8D5B0] mx-auto opacity-85 animate-pulse" />
          <p className="text-xl md:text-2xl font-semibold italic text-[#FFF] max-w-2xl mx-auto leading-relaxed">
            &ldquo;O ti rendi inutile nella tua attività, o te ne prendi la responsabilità e costruisci qualcosa che conta.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold block">— Il Nostro Manifesto</span>
        </div>
      </section>

      {/* 4. Mini Stats Callout */}
      <section className="text-center space-y-6" id="testimonianze-cta">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Inizia Ora</span>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-white">Il prossimo caso di successo potresti essere tu.</h2>
          <p className="text-sm text-[#A0A0A0] max-w-md mx-auto">
            Vuoi superare definitivamente la concorrenza locale ed evolvere la tua vetrina commerciale?
          </p>
        </div>
        <div className="pt-2">
          <Link href="/contatto" className="px-8 py-3.5 bg-[#E8D5B0] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-lg transition-all duration-200">
            Parliamoci Ora
          </Link>
        </div>
      </section>
    </div>
  );
}
