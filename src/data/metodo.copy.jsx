// ─────────────────────────────────────────────
//  METODO PAGE — copy & content
// ─────────────────────────────────────────────
import React from 'react';
import { Eye, Target, Zap, Cpu } from "lucide-react";

export const metodoHeroContent = {
  eyebrow: "chi sono",
  title: "Un ragazzo che prende sul serio il tuo business.",
  sub: "Non sono un'agenzia con 50 commerciali che non parla mai direttamente con te. Sono io, con le persone giuste, le mie.",
};

export const metodoManifestoContent = {
  label: "la mia filosofia",
  blocks: [
    {
      title: "Niente strutture gonfiate.",
      body: "Lavoro con una rete selezionata di professionisti. Designer, copywriter, sviluppatori, che attivo in base alle esigenze del progetto. Solo le persone che servono.",
    },
    {
      title: "Comunicazione diretta, sempre.",
      body: "Quando mi ingaggi, parli con me. Non con un account manager che poi passa il messaggio a qualcun altro. Io gestisco il progetto, io rispondo, io sono responsabile del risultato.",
    },
    {
      title: "Risultati, non deliverable.",
      body: "Non ti consegno un sito. Ti consegno uno strumento di business. La differenza? Uno è un file su un server. L'altro è qualcosa che porta clienti.",
    },
  ],
};

export const metodoValoriContent = {
  label: "come lavoro",
  items: [
    { icon: <Eye size={24} strokeWidth={1.5}/>, label: "Chiarezza", desc: "Sono chiaro e diretto su tutto ciò che riguarda il lavoro, o quello che serve per svolgerlo." },
    { icon: <Target size={24} strokeWidth={1.5}/>, label: "Precisione", desc: "Tutti i dettagli contano. Non esiste ''abbastanza buono'' nei miei progetti." },
    { icon: <Zap size={24} strokeWidth={1.5}/>, label: "Velocità", desc: "Rispondo praticamente sempre. Sono sempre preciso sulle consegne." },
    { icon: <Cpu size={24} strokeWidth={1.5}/>, label: "Autonomia", desc: "Una volta capito il brief, lavoro. Colgo subito il da farsi, se abbiamo comunicazione." },
  ],
};

export const metodoCtaContent = {
  title: "Hai trovato quello che cercavi?",
  sub: "Scrivimi, sei nel posto giusto.",
  cta: "Scrivimi",
  href: "/contatto",
};
