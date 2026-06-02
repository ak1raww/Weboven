import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ArrowUpRight, Sparkles, Megaphone, Users, Lightbulb } from "lucide-react";
import { Instagram, Tiktok, Facebook, Linkedin, Youtube } from "react-bootstrap-icons";
import { JsonLd, breadcrumbJsonLd, buildMetadata, pageSeo, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.social);

export default function SocialServices() {
  const IconMap: { [key: string]: React.ReactElement } = {
    Instagram: <Instagram className="platformIcon" />,
    TikTok: <Tiktok className="platformIcon" />,
    Facebook: <Facebook className="platformIcon" />,
    LinkedIn: <Linkedin className="platformIcon" />,
    YouTube: <Youtube className="platformIcon" />,
  };

  const platforms = [
    { name: "Instagram", desc: "Visual storytelling, Reels virali e storie di vendita." },
    { name: "TikTok", desc: "Contenuti video organici a rapidissima diffusione." },
    { name: "Facebook", desc: "Targeting per community regionali e campagne tradizionali." },
    { name: "LinkedIn", desc: "Posizionamento professionale autorevole per aziende B2B." },
    { name: "YouTube", desc: "Video lunghi ad altissimo valore educativo o intrattenimento." }
  ];

  const socialServicesList = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#E8D5B0]" />,
      title: "Strategia",
      quote: "Prima la mappa, poi il viaggio.",
      desc: "Analisi scrupolosa del tuo posizionamento di mercato rispetto ai competitor storici locali. Costruiamo una griglia editoriale razionale ed armonica che ha perfettamente senso per il tuo business, per le tue ambizioni commerciali e per trovare i clienti giusti.",
      detailChip: "Analisi & Piano Strategico"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#E8D5B0]" />,
      title: "Creazione Contenuti",
      quote: "Contenuti che fermano lo scroll.",
      desc: "Scrittura di testi d&apos;impatto (copywriting), ideazione di visual puliti e montaggio di video verticali (Reels e TikTok) studiati per rapire l&apos;attenzione del pubblico specifico del tuo brand. Niente grafiche banali e template ritriti.",
      detailChip: "Reels, TikTok & Stories"
    },
    {
      icon: <Users className="w-6 h-6 text-[#E8D5B0]" />,
      title: "Community Management",
      quote: "I follower non pagano le bollette, i clienti sì.",
      desc: "Gestione attiva e puntuale di commenti, direct messages e relazioni in entrata. Convertiamo l&apos;interesse dei semplici curiosi in una clientela educata, leale e pronta ad avviare transazioni o richieste preventivo con il tuo brand.",
      detailChip: "Crescita Organica & DM"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-[#E8D5B0]" />,
      title: "Social Advertising",
      quote: "Meta Ads che non bruciano invano il budget.",
      desc: "Messa a punto di campagne a pagamento professionali (Meta & TikTok Ads) studiate esclusivamente per generare lead qualificati o completamento carrelli eCommerce. Targeting millimetrico improntato alla scalabilità finanziaria controllata.",
      detailChip: "Advertising Sensato & Scalabile"
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 max-w-7xl mx-auto px-6" id="social-layout">
      <JsonLd
        data={[
          webPageJsonLd(pageSeo.social),
          serviceJsonLd("Social media strategy", pageSeo.social.description, pageSeo.social.path),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Social Media", path: "/social" },
          ]),
        ]}
      />
      {/* 1. Hero */}
      <section className="pt-8 text-center max-w-3xl mx-auto space-y-6" id="social-hero">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          I social non servono a fare like.<br />Servono a fare clienti.
        </h1>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          La maggior parte delle aziende usa i social per alzare il proprio ego. Noi li useremo come canale di acquisizione reale.
        </p>
        <div className="pt-4">
          <Link href="/contatto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8D5B0] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#D4AF37] transition-all duration-300">
            Pianifica una Strategia <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="space-y-16" id="social-service-breakdowns">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">In Pratica</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Cosa Gestiamo Per Il Tuo Brand</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialServicesList.map((service, idx) => (
            <div key={idx} className="glass-panel p-8 md:p-10 flex flex-col justify-between hover:border-[#E8D5B0]/20 hover:bg-white/[0.05] transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl w-fit">
                    {service.icon}
                  </div>
                  <span className="detailItem">{service.detailChip}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white font-display">{service.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E8D5B0] italic">{service.quote}</p>
                </div>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Platform Badges */}
      <section className="space-y-12" id="platforms-grid">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Copertura Totale</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Dove Sei Tu, Ci Siamo Noi.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((platform, idx) => (
            <div key={idx} className="glass-panel p-6 text-center space-y-4 hover:border-[#E8D5B0]/20 transition-all duration-300">
              <div className="badgeContainer mx-auto">
                {IconMap[platform.name] ?? null}
                <span className="text-xs tracking-wider uppercase font-bold text-[#E8D5B0]">{platform.name}</span>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {platform.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA banner */}
      <section className="pt-12" id="social-cta">
        <div className="glass-panel p-8 md:p-14 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Smetti di postare nel vuoto.</h3>
          <p className="text-sm text-[#A0A0A0] max-w-xl mx-auto">
            Vuoi allestire un canale serio e pianificato? Uniamoci adesso per trovare la strada editoriale vincente adatta al tuo mercato di riferimento.
          </p>
          <div className="pt-4">
            <Link href="/contatto" className="px-8 py-3.5 bg-[#E8D5B0] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-lg transition-all duration-200">
              Iniziamo Insieme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
