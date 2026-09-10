import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://protype.in"),
  title: "Protype - AI Agents for Support, Operations & Customer Experience",
  description:
    "protype builds highly customizable AI agents and automation systems for business support, operations, and customer experience — WhatsApp support, workflow automation, and proactive CX, live in weeks.",
  keywords: [
    "AI agents",
    "business automation",
    "customer support automation",
    "workflow automation",
    "customer experience AI",
    "WhatsApp support bot",
    "operations automation",
  ],
  icons: {
    icon: "/fevicon.png",
    shortcut: "/fevicon.png",
    apple: "/fevicon.png",
  },
  openGraph: {
    title: "Protype — AI Agents for Support, Operations & Customer Experience",
    description:
      "Custom AI agents that handle support, automate operations, and elevate customer experience — built around your business, not a template.",
    url: "/",
    siteName: "Protype",
    type: "website",
    images: [
      {
        url: "/logo3.png",
        width: 1200,
        height: 630,
        alt: "Protype Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protype — AI Agents for Support, Operations & Customer Experience",
    description:
      "Custom AI agents that handle support, automate operations, and elevate customer experience.",
    images: ["/logo3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Protype",
              url: "https://protype.in",
              logo: "https://protype.in/logo3.png",
              description: "Protype builds highly customizable AI agents and automation systems for business support, operations, and customer experience.",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Customer Support Agents",
                    description: "Custom AI agents that handle customer queries, resolve issues, and build trust."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "WhatsApp Automation Bots",
                    description: "Engage customers at scale via WhatsApp with intelligent AI automation."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Operations Automation",
                    description: "Automate order processing, fulfilment tracking, and post-purchase experiences."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900" suppressHydrationWarning>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
