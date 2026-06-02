import type { Metadata } from "next";

export const siteConfig = {
  name: "Weboven",
  url: "https://weboven.it",
  locale: "it_IT",
  language: "it",
  creator: "Alexandru Ioan Surugiu",
  email: "contact@weboven.it",
  phone: "+39 338 866 6909",
  instagram: "https://instagram.com/surradiant",
  whatsapp: "https://wa.me/393388666909",
  description:
    "Sviluppo siti web, e-commerce, web app e strategie social per aziende italiane che vogliono acquisire clienti online.",
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const pageSeo = {
  home: {
    title: "Weboven | Siti web, e-commerce e social media che vendono",
    description:
      "Weboven crea siti web Next.js, e-commerce e strategie social per trasformare traffico, contenuti e presenza digitale in richieste e vendite.",
    path: "/",
    keywords: [
      "sviluppo siti web",
      "realizzazione e-commerce",
      "agenzia web Italia",
      "Next.js SEO",
      "social media marketing",
    ],
  },
  web: {
    title: "Sviluppo Web ed E-Commerce su Misura | Weboven",
    description:
      "Siti vetrina, e-commerce e web app veloci, indicizzabili e progettati per conversioni, SEO tecnica e crescita commerciale.",
    path: "/web",
    keywords: ["siti vetrina", "e-commerce", "web app", "SEO tecnica", "Core Web Vitals"],
  },
  social: {
    title: "Social Media Strategy per Acquisire Clienti | Weboven",
    description:
      "Strategia social, contenuti, community management e advertising per Instagram, TikTok, Facebook, LinkedIn e YouTube.",
    path: "/social",
    keywords: ["social media strategy", "Meta Ads", "TikTok Ads", "contenuti social", "lead generation"],
  },
  metodo: {
    title: "Metodo Weboven | Strategia, sviluppo e crescita digitale",
    description:
      "Scopri il metodo Weboven: rapporto diretto, architettura tecnica chiara, sviluppo veloce e focus su risultati misurabili.",
    path: "/metodo",
    keywords: ["metodo sviluppo web", "consulenza digitale", "strategia web", "sviluppo agile"],
  },
  testimonianze: {
    title: "Testimonianze Clienti e Casi di Successo | Weboven",
    description:
      "Recensioni, risultati e casi di successo di aziende che hanno migliorato siti web, e-commerce e conversioni con Weboven.",
    path: "/testimonianze",
    keywords: ["testimonianze clienti", "casi studio", "recensioni web agency", "risultati e-commerce"],
  },
  contatto: {
    title: "Contatta Weboven | Preventivo sito web o strategia social",
    description:
      "Parla con Weboven per siti web, e-commerce, web app, SEO tecnica o strategia social. WhatsApp, email e brief progetto.",
    path: "/contatto",
    keywords: ["preventivo sito web", "contatto web agency", "sviluppo e-commerce preventivo"],
  },
  privacy: {
    title: "Informativa Privacy | Weboven",
    description:
      "Informativa sul trattamento dei dati personali ai sensi del GDPR per il sito Weboven.it.",
    path: "/privacy-policy",
    keywords: ["privacy policy", "GDPR", "Weboven"],
  },
} satisfies Record<string, PageSeo>;

export function buildMetadata(page: PageSeo): Metadata {
  const url = new URL(page.path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    alternates: {
      canonical: page.path,
      languages: {
        it: page.path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.creator,
      sameAs: [siteConfig.instagram],
    },
    areaServed: {
      "@type": "Country",
      name: "Italia",
    },
    serviceType: [
      "Sviluppo siti web",
      "Sviluppo e-commerce",
      "Web app custom",
      "SEO tecnica",
      "Social media marketing",
    ],
    sameAs: [siteConfig.instagram, siteConfig.whatsapp],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function webPageJsonLd(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${page.path}#webpage`,
    url: `${siteConfig.url}${page.path}`,
    name: page.title,
    description: page.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Italia",
    url: `${siteConfig.url}${path}`,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
