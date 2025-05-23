import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://atikekckvrl.vercel.app/"), // Vercel linkinle güncelle
  title: "Atike Küçükvarol - Frontend Developer | Portfolio",
  description:
      "Atike Küçükvarol'un kişisel portfolyo sitesi. React ile geliştirilen projeler, iletişim ve daha fazlası.",
  keywords: [
    "Atike Küçükvarol",
    "Frontend Geliştirici",
    "Web Geliştirme",
    "React",
    "Portfolyo",
    "Kişisel Site",
  ],
  openGraph: {
    title: "Atike Küçükvarol - Frontend Developer",
    description:
        "React ve modern teknolojilerle geliştirilen projeler. Frontend alanında acemi bir geliştiricinin çalışmaları.",

  },
  alternates: {
    canonical: "https://atikekckvrl.vercel.app/",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="tr">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Atike Küçükvarol",
                jobTitle: "Frontend Geliştirici",
                url: "https://atikekckvrl.vercel.app/",
                sameAs: [
                  "https://www.linkedin.com/in/atike-küçükvarol-67b8b1258/",
                  "https://github.com/atikekckvrl",
                  "https://www.instagram.com/atikekckvrl/",
                ],
              }),
            }}
        />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
            }}
        />
      </head>
      <body
          className={`${inter.className} bg-gray-700 overflow-y-scroll overflow-x-hidden`}
      >
      <SpeedInsights />
      <Analytics />
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer /> { }
      </body>
      </html>
  );
}
