import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Weboven | Esperienze digitali',
  description: 'Non faccio siti web. Faccio strumenti che lavorano per te.',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' }
    ]
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it">
      <body suppressHydrationWarning className="relative flex flex-col min-h-screen text-text-1">
        <video
          className="fixed inset-0 z-[-1] w-full h-full object-cover opacity-30"
          src={'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4'}
          autoPlay
          loop
          muted
          playsInline
        />
        <Navbar />
        <main className="flex-grow flex flex-col items-center overflow-x-hidden selection:bg-accent/40 selection:text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
