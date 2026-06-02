import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Mail, Calendar, Globe, Award } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, buildMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.privacy);

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12 md:space-y-16" id="privacy-layout">
      <JsonLd data={[webPageJsonLd(pageSeo.privacy), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])]} />
      
      {/* Back navigation and header */}
      <div className="space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] hover:text-[#E8D5B0] transition-colors group w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Torna alla Home
        </Link>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E8D5B0] font-bold">
            <Shield className="w-4 h-4" />
            <span>Documento Legale</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Informativa sul Trattamento dei Dati Personali
          </h1>
          <p className="text-xs md:text-sm text-[#A0A0A0] flex items-center gap-1.5 pt-1">
            <Calendar className="w-4 h-4 text-[#E8D5B0]" />
            <span>Data di ultimo aggiornamento: 22 maggio 2025</span>
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="space-y-8 md:space-y-10 text-sm md:text-base leading-relaxed text-[#A0A0A0]">
        
        <p className="text-[#F5F5F5] font-medium border-l-2 border-[#E8D5B0] pl-4 italic">
          Ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR), si informano gli utenti circa le finalità e le modalità del trattamento dei dati personali raccolti tramite il sito web <a href="https://weboven.it" className="text-[#E8D5B0] hover:underline">https://weboven.it</a>.
        </p>

        {/* 1. Titolare del trattamento */}
        <section className="glass-panel p-6 md:p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#E8D5B0]/10 text-[#E8D5B0] rounded-lg shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold text-white font-display">1. Titolare del Trattamento</h2>
              <div className="text-sm space-y-1">
                <p className="text-[#F5F5F5] font-semibold">Alexandru Ioan Surugiu</p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#E8D5B0]" />
                  <a href="mailto:contact@weboven.it" className="hover:underline text-[#E8D5B0]">contact@weboven.it</a>
                </p>
              </div>
              <p className="text-xs pt-2">
                Per qualsiasi richiesta relativa al trattamento dei dati personali, l&apos;interessato può contattare il Titolare all&apos;indirizzo email indicato.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Dati personali trattati */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            2. Dati Personali Trattati
          </h2>
          <p>
            Il presente sito è un sito vetrina statico che non prevede form di contatto, registrazione, newsletter, login, commenti o funzionalità e-commerce. Non vengono pertanto raccolti dati personali attraverso moduli compilati dall&apos;utente.
          </p>
          <p>
            I dati personali trattati sono esclusivamente quelli raccolti in modo automatico durante la navigazione:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 border border-white/[0.04] bg-white/[0.01] rounded-xl space-y-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-[#E8D5B0]">
                2.1 Dati di navigazione (log del server)
              </h3>
              <p className="text-xs md:text-sm">
                I sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono, nel corso del loro normale esercizio, alcuni dati la cui trasmissione è implicita nell&apos;uso dei protocolli di comunicazione di Internet.
              </p>
              <ul className="text-xs list-disc list-inside space-y-1 text-[#A0A0A0] pt-2">
                <li>Indirizzo IP del dispositivo utilizzato per la connessione</li>
                <li>Tipo di browser e sistema operativo</li>
                <li>Data e ora della richiesta</li>
                <li>Pagina web richiesta (URL)</li>
                <li>Sito web di provenienza (referrer) se presente</li>
                <li>Codice di stato HTTP restituito</li>
              </ul>
              <p className="text-xs pt-2">
                Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull&apos;uso del sito e di controllarne il corretto funzionamento, nonché per accertare responsabilità in caso di ipotetici reati informatici ai danni del sito.
              </p>
            </div>

            <div className="p-5 border border-white/[0.04] bg-white/[0.01] rounded-xl space-y-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-[#E8D5B0]">
                2.2 Cookie tecnico di sessione
              </h3>
              <p className="text-xs md:text-sm">
                Il sito utilizza esclusivamente un cookie tecnico di sessione, necessario per il corretto funzionamento del sito stesso. Tale cookie non raccoglie dati personali a fini identificativi o di profilazione, si cancella automaticamente alla chiusura del browser e non richiede il consenso dell&apos;utente ai sensi del Considerando 30 e dell&apos;art. 5 del GDPR.
              </p>
              <p className="text-xs border-t border-white/[0.04] pt-3 text-emerald-400 font-semibold">
                Non vengono utilizzati cookie di profilazione, di tracciamento, di terze parti, Google Analytics, Meta Pixel o altri strumenti analitici.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Finalità e base giuridica del trattamento */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            3. Finalità e Base Giuridica del Trattamento
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[#F5F5F5] font-bold text-sm">3.1 Gestione e funzionamento del sito (log del server)</h3>
              <ul className="list-disc list-inside text-xs md:text-sm pl-2 space-y-1">
                <li><strong className="text-white">Finalità:</strong> garantire il funzionamento tecnico del sito, prevenire attacchi informatici, assicurare la sicurezza della rete e rilevare eventuali anomalie o abusi.</li>
                <li><strong className="text-white">Base giuridica:</strong> legittimo interesse del Titolare ai sensi dell&apos;art. 6, par. 1, lett. f) del GDPR, consistente nella necessità di mantenere il sito operativo, sicuro e protetto.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#F5F5F5] font-bold text-sm">3.2 Cookie tecnico di sessione</h3>
              <ul className="list-disc list-inside text-xs md:text-sm pl-2 space-y-1">
                <li><strong className="text-white">Finalità:</strong> consentire il corretto funzionamento del sito.</li>
                <li><strong className="text-white">Base giuridica:</strong> necessità tecnica. Il cookie tecnico di sessione non richiede il consenso dell&apos;utente in quanto strettamente necessario alla fornitura del servizio richiesto, ai sensi dell&apos;art. 122 del Codice Privacy e delle vigenti Linee guida del Garante Privacy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Link esterno a WhatsApp */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            4. Link Esterno a WhatsApp
          </h2>
          <p>
            Il sito contiene un link che reindirizza l&apos;utente alla piattaforma WhatsApp al fine di consentire il contatto diretto con il Titolare. Si precisa che:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1 text-xs md:text-sm">
            <li>Cliccando su tale link, l&apos;utente lascia il sito <strong className="text-white">https://weboven.it</strong> e accede a una piattaforma esterna di proprietà di WhatsApp LLC (Meta Platforms, Inc.).</li>
            <li>Dal momento del reindirizzamento, il trattamento dei dati personali dell&apos;utente è regolato esclusivamente dall&apos;Informativa sulla Privacy di WhatsApp, della quale il Titolare del presente sito non è responsabile.</li>
            <li>L&apos;utente è invitato a prendere visione dell&apos;Informativa Privacy di WhatsApp disponibile al seguente indirizzo: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#E8D5B0] hover:underline">https://www.whatsapp.com/legal/privacy-policy</a>.</li>
          </ul>
          <p className="text-xs text-[#E8D5B0] font-semibold italic">
            Il Titolare del sito weboven.it non raccoglie, non conserva e non tratta alcun dato relativo alle comunicazioni avviate tramite WhatsApp.
          </p>
        </section>

        {/* 5. Tempi di conservazione dei dati */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            5. Tempi di Conservazione dei Dati
          </h2>
          <p>
            I dati di navigazione (log del server) vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, generalmente per un periodo non superiore a <strong className="text-white">30 giorni</strong>, salvo eventuale necessità di conservazione ulteriore in relazione a procedimenti giudiziari o richieste di autorità competenti.
          </p>
          <p>
            Il cookie tecnico di sessione viene eliminato automaticamente alla chiusura del browser e non viene conservato in modo persistente.
          </p>
        </section>

        {/* 6. Comunicazione e destinatari dei dati */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            6. Comunicazione e Destinatari dei Dati
          </h2>
          <p>
            I dati personali trattati potranno essere comunicati esclusivamente a:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1 text-xs md:text-sm">
            <li>Fornitori di servizi di hosting e infrastruttura tecnica che ospitano il sito web, nella qualità di Responsabili del trattamento ai sensi dell&apos;art. 28 del GDPR. Tali soggetti trattano i dati esclusivamente per finalità tecniche e secondo le istruzioni impartite dal Titolare.</li>
            <li>Autorità competenti, giudiziarie o di pubblica sicurezza, nei casi previsti dalla legge.</li>
          </ul>
          <p className="text-xs text-emerald-400 font-semibold">
            I dati personali non vengono né ceduti né comunicati a terzi per finalità di marketing, profilazione o qualsiasi altro scopo commerciale.
          </p>
        </section>

        {/* 7. Trasferimento dei dati extra-UE */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            7. Trasferimento dei Dati Extra-UE
          </h2>
          <p>
            Il Titolare utilizza un fornitore di servizi di hosting per l&apos;erogazione del sito web. Qualora tale fornitore tratti dati in Paesi situati al di fuori dell&apos;Unione Europea o dello Spazio Economico Europeo, il trasferimento avverrà esclusivamente nel rispetto delle garanzie previste dagli artt. 44-49 del GDPR, tra cui: decisioni di adeguatezza della Commissione Europea, clausole contrattuali standard o altre garanzie appropriate.
          </p>
          <p>
            Ove non si verifichi alcun trasferimento extra-UE da parte del fornitore di hosting, nessun dato personale sarà trasferito verso Paesi terzi.
          </p>
          <p className="text-xs">
            L&apos;utente può contattare il Titolare all&apos;indirizzo <a href="mailto:contact@weboven.it" className="text-[#E8D5B0] hover:underline">contact@weboven.it</a> per ricevere informazioni aggiornate sull&apos;eventuale trasferimento dei dati e sulle garanzie adottate.
          </p>
        </section>

        {/* 8. Diritti dell'interessato */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            8. Diritti dell&apos;Interessato
          </h2>
          <p>
            Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1.5 text-xs md:text-sm">
            <li><strong className="text-white">Accesso (art. 15 GDPR):</strong> ottenere conferma che sia o meno in corso un trattamento di dati che lo riguardano e, in tal caso, accedere a tali dati.</li>
            <li><strong className="text-white">Rettifica (art. 16 GDPR):</strong> ottenere la rettifica dei dati personali inesatti che lo riguardano.</li>
            <li><strong className="text-white">Cancellazione (art. 17 GDPR):</strong> ottenere la cancellazione dei dati personali che lo riguardano, nei casi previsti dalla normativa.</li>
            <li><strong className="text-white">Limitazione del trattamento (art. 18 GDPR):</strong> ottenere la limitazione del trattamento nelle ipotesi previste dalla normativa.</li>
            <li><strong className="text-white">Portabilità dei dati (art. 20 GDPR):</strong> ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che lo riguardano, nei casi applicabili.</li>
            <li><strong className="text-white">Opposizione (art. 21 GDPR):</strong> opporsi in qualsiasi momento al trattamento dei dati che lo riguardano, nei casi in cui la base giuridica sia il legittimo interesse del Titolare.</li>
            <li><strong className="text-white">Reclamo al Garante (art. 77 GDPR):</strong> proporre reclamo all&apos;autorità di controllo competente. In Italia, l&apos;autorità di controllo è il Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#E8D5B0] hover:underline">https://www.garanteprivacy.it</a>).</li>
          </ul>
          <p className="text-xs pt-2">
            Per esercitare i propri diritti, l&apos;interessato può inviare una richiesta scritta al Titolare all&apos;indirizzo email <a href="mailto:contact@weboven.it" className="text-[#E8D5B0] hover:underline">contact@weboven.it</a>. Il Titolare risponderà entro 30 giorni dal ricevimento della richiesta, salvo proroga nei casi previsti dalla normativa.
          </p>
        </section>

        {/* 9. Modifiche alla presente Informativa */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display text-white border-b border-white/[0.08] pb-2">
            9. Modifiche alla Presente Informativa
          </h2>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla presente Informativa in qualsiasi momento, dandone pubblicità sul sito. Le modifiche saranno efficaci dalla data di pubblicazione sul sito. Si invitano pertanto gli utenti a consultare periodicamente questa pagina.
          </p>
          <p className="text-xs border-t border-white/[0.04] pt-4 text-center">
            La presente Informativa è stata redatta in conformità al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018 (Codice Privacy).
          </p>
        </section>

      </div>

      {/* Footer signoff inside the layout container */}
      <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A0A0A0]">
        <span>Titolare del trattamento: Alexandru Ioan Surugiu</span>
        <a href="mailto:contact@weboven.it" className="hover:text-white transition-colors">contact@weboven.it</a>
      </div>

    </div>
  );
}
