import type { Metadata } from "next";
import SplashCursor from "../components/react-bits/SplashCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "protype — AI Automation & MVP Development for Global Businesses",
  description:
    "We build AI agents, automation systems, and startup MVPs that help companies scale faster. Custom AI solutions for import-export, logistics, trading, and SaaS businesses.",
  keywords: [
    "AI automation",
    "MVP development",
    "AI agents",
    "business automation",
    "startup MVP",
    "import export CRM",
    "SaaS development",
  ],
  icons: {
    icon: "/fevicon.jpg",
  },
  openGraph: {
    title: "protype — AI Automation & MVP Development",
    description:
      "Build AI systems. Launch products. Scale faster. Custom AI agents and MVPs for global businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          <SplashCursor />
        </div>
      </body>
    </html>
  );
}
