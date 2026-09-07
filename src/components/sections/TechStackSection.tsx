"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";
import Magnet from "../react-bits/Magnet";

const categories = [
    {
        label: "Automation & Channels",
        items: [
            { name: "WhatsApp Business", color: "#25D366", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
            { name: "Twilio", color: "#F22F46", logo: "https://cdn.simpleicons.org/twilio/F22F46" },
            { name: "n8n", color: "#EA4B71", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
            { name: "Zapier", color: "#FF4A00", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
        ],
    },
    {
        label: "Frontend & UI",
        items: [
            { name: "Next.js", color: "#000000", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "React", color: "#61dafb", logo: "https://cdn.simpleicons.org/react/61dafb" },
            { name: "Tailwind CSS", color: "#38bdf8", logo: "https://cdn.simpleicons.org/tailwindcss/06b6d4" },
            { name: "Angular", color: "#dd0031", logo: "https://cdn.simpleicons.org/angular/dd0031" },
        ],
    },
    {
        label: "Backend & APIs",
        items: [
            { name: "Node.js", color: "#68a063", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "FastAPI", color: "#009688", logo: "https://cdn.simpleicons.org/fastapi/009688" },
            { name: "Django", color: "#092e20", logo: "https://cdn.simpleicons.org/django/092e20" },
            { name: "Go", color: "#00add8", logo: "https://cdn.simpleicons.org/go/00add8" },
        ],
    },
    {
        label: "AI & Data",
        items: [
            { name: "OpenAI", color: "#10a37f", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
            { name: "Meta Llama", color: "#0467DF", logo: "https://cdn.simpleicons.org/meta/0467DF" },
            { name: "LangChain", color: "#1C3C3C", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
            { name: "PyTorch", color: "#ee4c2c", logo: "https://cdn.simpleicons.org/pytorch/ee4c2c" },
        ],
    },
    {
        label: "Databases",
        items: [
            { name: "PostgreSQL", color: "#336791", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "Supabase", color: "#3ecf8e", logo: "https://cdn.simpleicons.org/supabase/3ecf8e" },
            { name: "MySQL", color: "#4479a1", logo: "https://cdn.simpleicons.org/mysql/4479a1" },
            { name: "MongoDB", color: "#47a248", logo: "https://cdn.simpleicons.org/mongodb/47a248" },
        ],
    },
    {
        label: "Cloud & DevOps",
        items: [
            { name: "AWS", color: "#ff9900", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "Docker", color: "#2496ed", logo: "https://cdn.simpleicons.org/docker/2496ed" },
            { name: "Azure", color: "#0078d4", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
            { name: "Google Cloud", color: "#4285f4", logo: "https://cdn.simpleicons.org/googlecloud/4285f4" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,.1),transparent_45%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <Cpu className="h-3.5 w-3.5" />
                        The tech stack
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        Built with <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">modern technology</span>
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        We use industry-leading tools and frameworks to build reliable, scalable, and ultra-fast AI solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="flex flex-col gap-6">
                        {categories.map((cat, ci) => (
                            <motion.div
                                key={ci}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: ci * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="flex w-full flex-col items-center gap-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] md:flex-row md:gap-10 md:p-9"
                            >
                                <div className="flex shrink-0 flex-col items-center text-center md:w-[200px] md:items-start md:text-left">
                                    <h3 className="text-lg font-semibold tracking-tight text-white">
                                        {cat.label}
                                    </h3>
                                </div>

                                <div className="flex w-full flex-1 flex-wrap justify-center gap-3 md:justify-start md:gap-4">
                                    {cat.items.map((item, ii) => (
                                        <Magnet key={ii} padding={15} disabled={false} magnetStrength={2}>
                                            <div
                                                className="group relative flex h-[64px] w-[150px] cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:w-[168px] sm:px-5"
                                            >
                                                <div
                                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.12]"
                                                    style={{ background: `radial-gradient(circle at left, ${item.color}, transparent)` }}
                                                />

                                                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-110 sm:h-9 sm:w-9">
                                                    <img src={item.logo} alt={item.name} className="h-full w-full object-contain brightness-0 invert" />
                                                </div>

                                                <span className="z-10 truncate text-[14px] font-semibold tracking-tight text-slate-300 transition-colors group-hover:text-white">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </Magnet>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
