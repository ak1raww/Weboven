import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import PageTransition from "@/components/PageTransition";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
import { buildMetadata, pageSeo } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(pageSeo.home),
  applicationName: "Weboven",
  category: "Web development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${inter.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body
        className="bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased min-h-screen flex flex-col selection:bg-[#E8D5B0]/30 selection:text-[#E8D5B0]"
        suppressHydrationWarning
      >
        <Effects />
        <Navbar />
        <main className="flex-grow pt-28" id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
