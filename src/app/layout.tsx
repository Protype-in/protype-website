import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "protype — AI Agents for Support, Operations & Customer Experience",
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
    icon: "/fevicon.jpg",
  },
  openGraph: {
    title: "protype — AI Agents for Support, Operations & Customer Experience",
    description:
      "Custom AI agents that handle support, automate operations, and elevate customer experience — built around your business, not a template.",
    type: "website",
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
      </head>
      <body className="antialiased bg-[#080d1d] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
