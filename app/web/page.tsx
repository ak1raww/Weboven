import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ShoppingCart, Cpu, Calendar, Plus, Minus, ArrowRight, ArrowUpRight, HelpCircle } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd, pageSeo, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import "./page.css";

export const metadata: Metadata = buildMetadata(pageSeo.web);

export default function WebServices() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-[#E8D5B0]" />,
      title: "Siti Vetrina",
      quote: "La tua prima impressione, ogni volta.",
      desc: "Un sito vetrina moderno, fulmineo, interamente ottimizzato per la SEO locale e nazionale (avrai risposte chiare su tutto). Non prendo template confezionati e non ci butto sopra frettolosamente il tuo materiale commerciale, come fa la maggior parte di chi si definisce professionista. Costruisco codice proprietario fatto per respirare e crescere con il tuo brand.",
      details: ["Design coordinato ed unico", "Ottimizzato nativamente per Mobile", "Velocità di risposta <1s", "SEO on-page completa"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#E8D5B0]" />,
      title: "E-Commerce",
      quote: "Vendi. Scala. Automatizza.",
      desc: "Negozi online capaci di convertire davvero l'utente, non template WooCommerce instabili e goffi che generano continuamente errori. Nessuno studio o agenzia tradizionale si concentra mai su ciò che un cliente finale desidera realmente analizzare o confrontare durante un acquisto online. Il mio unico compito è dar loro una motivazione indiscutibile e d'impatto per comprare subito da te.",
      details: ["Sistemi di pagamento sicuri (Stripe, Apple/Google Pay)", "Configurazioni di magazzino intelligenti", "Processi di checkout semplificati", "Metriche di tracciamento avanzate"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#E8D5B0]" />,
      title: "Web App & Custom Software",
      quote: "Quando un semplice sito non basta più.",
      desc: "Portali clienti complessi, sistemi gestionali, piattaforme di prenotazione in tempo reale e connettori API personalizzati. Se possiedi un flusso aziendale o manuale ripetitivo che deve essere digitalizzato, lo traduco in un software web reattivo in Next.js con database relazionali solidi ed efficienti.",
      details: ["Utilizzo di React & Next.js", "Infrastrutture serverless scalabili", "Database dinamici e protetti", "Area Clienti con login criptato"]
    }
  ];

  const processSteps = [
    {
      num: "01",
      name: "Ascolto",
      desc: "Prima ancora di toccare una singola linea di codice, analizziamo insieme la natura della tua cerchia di clienti e le minacce dei competitor."
    },
    {
      num: "02",
      name: "Strategia",
      desc: "Traduciamo i tuoi desideri di crescita in decisioni tecniche. Qui decidiamo l'architettura ideale, lo stack di hosting e le reali metriche di conversione."
    },
    {
      num: "03",
      name: "Costruzione",
      desc: "Sviluppiamo costantemente aggiornandoti settimanalmente. Nessun misterioso silenzio per lunghi mesi prima di presentarti materiale non gradito."
    },
    {
      num: "04",
      name: "Lancio & Oltre",
      desc: "La messa online è l'inizio di una collaborazione fruttuosa. Rimango al tuo fianco per monitorare i dati e compiere ottimizzazioni continue."
    }
  ];

  const faqs = [
    {
      q: "Quanto costa lo sviluppo di un sito?",
      a: "La risposta sincera è: dipende dalla complessità del progetto. Preferisco prima conoscere bene le tue necessità e i tuoi obiettivi di crescita. In seguito ti offro un preventivo chiaro e bloccato. In linea di massima, i nostri siti web di qualità superiore partono da un investimento minimo di 500€."
    },
    {
      q: "Quanto tempo ci vuole per vederlo online?",
      a: "Dipende dalla velocità dei tuoi feedback e dall'articolazione delle pagine. Un progetto di atterraggio promozionale richiederà solitamente circa una settimana; un e-commerce esteso o con integrazioni gestionali piò occupare circa un mese completo di lavoro di design e codice."
    },
    {
      q: "Potrò gestire e modificare i testi da solo in autonomia?",
      a: "Assolutamente sì. Se te la senti e lo desideri, allestisco pannelli d'amministrazione intuitivi e ti fornisco brevi guide video personalizzate per compiere aggiornamenti in autonomia. In alternativa, puoi commissionare modifiche complesse direttamente a me in qualsiasi momento."
    },
    {
      q: "Ho già un sito obsoleto o che non performa, cosa possiamo fare?",
      a: "Se possiedi un sito brutto, non indicizzato o creato anni fa con Framework obsoleti e pesanti, analizziamo i problemi congiuntamente. Ripariamo i danni strutturali, rifacciamo il design e manteniamo intatto il tuo posizionamento SEO esistente facendoti fare un salto generazionale."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 max-w-7xl mx-auto px-6" id="web-services-layout">
      <JsonLd
        data={[
          webPageJsonLd(pageSeo.web),
          serviceJsonLd("Sviluppo web ed e-commerce", pageSeo.web.description, pageSeo.web.path),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Servizi Web", path: "/web" },
          ]),
        ]}
      />
      {/* 1. Hero */}
      <section className="pt-8 text-center max-w-3xl mx-auto space-y-6" id="web-hero">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
          Il tuo sito dovrebbe farti guadagnare, non solo esistere.
        </h1>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Troppi siti sono belli a vedersi e inutili nella pratica. Io li costruisco al contrario: prima penso al risultato, poi alla forma.
        </p>
        <div className="pt-4">
          <Link href="/contatto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8D5B0] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#D4AF37] transition-all duration-300">
            Richiedi Analisi di Fattibilità <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 2. Services Breakdown */}
      <section className="space-y-16" id="services-grid">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Le Nostre Opzioni</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Cosa Realizziamo in Weboven</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-panel p-8 md:p-10 flex flex-col justify-between hover:border-[#E8D5B0]/20 hover:bg-white/[0.05] transition-all duration-300">
              <div className="space-y-6">
                <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl w-fit">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">{service.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E8D5B0] italic">
                    {service.quote}
                  </p>
                </div>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-white/[0.04] mt-8 space-y-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold block">Incluso:</span>
                <ul className="space-y-2.5">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-[#F2F2F2] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Process Steps */}
      <section className="space-y-16" id="process-roadmap">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Metodologia</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Nessuna Sorpresa. Solo Risultati.</h2>
          <p className="text-sm text-[#A0A0A0]">
            Pianifichiamo ogni milestone con precisione ingegneristica per permetterti di focalizzarti sulla tua attività senza stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative group space-y-4">
              <div className="flex md:flex-col lg:flex-row justify-between items-start gap-4">
                <span className="text-4xl font-extrabold font-display text-[#E8D5B0]/30 group-hover:text-[#E8D5B0]/100 transition-colors duration-300">
                  {step.num}
                </span>
                <div className="h-[1px] flex-grow bg-white/[0.05] mt-6 hidden lg:block md:group-hover:bg-[#E8D5B0]/30 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">{step.name}</h3>
              <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQs Section */}
      <section className="space-y-16 max-w-4xl mx-auto" id="web-faq">
        <div className="text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-[#E8D5B0] mx-auto opacity-70" />
          <span className="text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">Risolviamo i Dubbi</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Domande Frequenti</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="transition-all duration-300 faqDetails">
              <summary className="faqQuestion" id={`faq-btn-${idx}`}>
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

      {/* 5. CTA Panel */}
      <section className="pt-12" id="web-inline-cta">
        <div className="glass-panel p-8 md:p-14 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <h3 className="text-2xl md:text-4xl font-bold font-display text-white">
            Pronto a costruire qualcosa che funziona davvero?
          </h3>
          <p className="text-sm text-[#A0A0A0] max-w-xl mx-auto">
            Vuoi esplorare le reali potenzialità del tuo business? Parla direttamente con Alex per un&apos;analisi focalizzata sul ROI.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contatto" className="px-6 py-3.5 bg-[#E8D5B0] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase rounded-lg w-full sm:w-auto transition-all duration-200">
              Richiedi Preventivo Su Misura
            </Link>
            <a
              href="https://demo.weboven.it"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] text-white font-semibold text-xs tracking-wider uppercase rounded-lg w-full sm:w-auto flex items-center justify-center gap-1.5 transition-all duration-200"
            >
              Guarda i Demo Online <ArrowUpRight className="w-3.5 h-3.5 text-[#E8D5B0]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
