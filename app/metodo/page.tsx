import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, HeartHandshake, Eye, FastForward, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, buildMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.metodo);

export default function Metodo() {
  const values = [
    {
      icon: <Eye className="w-5 h-5 text-[#E8D5B0]" />,
      title: "Chiarezza",
      desc: "Sono assolutamente chiaro e trasparente fin dall&apos;inizio su tutto ciò che riguarda il flusso di sviluppo, compiti e costi commerciali richiesti per svolgerlo al meglio."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#E8D5B0]" />,
      title: "Precisione",
      desc: "Tutti i minimi dettagli contano per me. Non concepisco né tollero l&apos;espressione 'abbastanza buono' all&apos;interno dei miei standard personali e professionali."
    },
    {
      icon: <FastForward className="w-5 h-5 text-[#E8D5B0]" />,
      title: "Velocità",
      desc: "Rispondo quasi istantaneamente a mail e messaggi WhatsApp. Ritengo il rispetto ferreo delle scadenze e la disponibilità un pilastro non sacrificabile."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#E8D5B0]" />,
      title: "Autonomia",
      desc: "Una volta definito con estrema precisione il brief iniziale, ti libero da ogni incarico superfluo. Procedo in totale autonomia presentandoti milestone convalidate."
    }
  ];

  const pillars = [
    {
      title: "Niente Strutture Gonfiate",
      desc: "Lavoro con un network selezionato di professionisti fidati e di prim&apos;ordine: designer, copywriter ed esperti di advertising. Li attivo verticalmente solo ed esclusivamente in base alle precise necessità del tuo brand. Paghi solo le competenze che lavorano per te, senza i pesanti costi fissi delle grandi agenzie."
    },
    {
      title: "Comunicazione Diretta, Sempre",
      desc: "Quando ingaggi Weboven, parli e ti interfacci costantemente solo con me, Alex. Nessun account manager junior distratto che funge da passaparola confuso, nessun intermediario che rallenta i feedback. Io pianifico le basi tecniche, io coordino la realizzazione ed io rispondo in prima persona del risultato finale."
    },
    {
      title: "Risultati Di Business Reali",
      desc: "Non ti consegno semplicemente una serie di file grafici posizionati a caso su un server. Ti affido uno strumento di vendita funzionante modellato solidamente sui tuoi clienti. Un sito non indicizzato è solo un costo improduttivo, uno programmato da noi è un investimento destinato a produrre frutti reali."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 max-w-7xl mx-auto px-6" id="metodo-layout">
      <JsonLd
        data={[
          webPageJsonLd(pageSeo.metodo),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Metodo", path: "/metodo" },
          ]),
        ]}
      />
      {/* 1. Hero */}
      <section className="pt-8 text-center max-w-3xl mx-auto space-y-6" id="metodo-hero">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          Un ragazzo che prende sul serio il tuo business.
        </h1>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Non sono un'agenzia con 50 commerciali che non parla mai direttamente con te. Sono io, con le persone giuste, le mie.
        </p>
        <div className="pt-4">
          <Link href="/contatto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8D5B0] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#D4AF37] transition-all duration-300">
            Parliamoci <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 2. Three Pillars */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="philosophical-pillars">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="glass-panel p-8 md:p-10 relative overflow-hidden flex flex-col justify-between hover:border-[#E8D5B0]/20 transition-all duration-300">
            {/* Top border indicator */}
            <div className="absolute top-0 left-0 w-12 h-[3px] bg-[#E8D5B0]" />
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold block">Punto {idx + 1}</span>
              <h3 className="text-2xl font-bold font-display text-white">{pillar.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Values Timelines style */}
      <section className="space-y-12" id="how-i-work">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">I Miei Capisaldi</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Come Gestisco Ogni Progetto</h2>
        </div>

        <div className="timeline-list max-w-4xl mx-auto space-y-6">
          {values.map((val, idx) => (
            <div key={idx} className="timeline-item glass-panel p-6 md:p-8 flex items-start gap-4 md:gap-6 transition-transform duration-200 hover:translate-y-[-6px]">
              <div className="timeline-icon flex-shrink-0">
                <div className="icon-inner">
                  {val.icon}
                </div>
              </div>

              <div className="timeline-content">
                <h3 className="text-lg md:text-xl font-bold text-white font-display uppercase tracking-wider">{val.title}</h3>
                <p className="text-sm text-[#A0A0A0] mt-2 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="pt-12" id="metodo-cta">
        <div className="glass-panel p-8 md:p-14 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
            Hai trovato esattamente quello che stavi cercando?
          </h3>
          <p className="text-sm text-[#A0A0A0] max-w-xl mx-auto">
            Se vuoi eliminare lo stress organizzativo e interfacciarti con chi mette sempre al primo posto i tuoi profitti reali, invia subito un primo brief informale.
          </p>
          <div className="pt-4">
            <Link href="/contatto" className="px-8 py-3.5 bg-[#E8D5B0] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-lg transition-all duration-200 inline-flex items-center gap-2">
              Scrivimi Subito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
