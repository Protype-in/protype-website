"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";
import Magnet from "../react-bits/Magnet";

const categories = [
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
        <section className="relative overflow-hidden pt-12 lg:pt-20 pb-12 lg:pb-20 bg-[#fafafa]">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-blue-100/40 blur-[150px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-bold tracking-wide mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] uppercase">
                        <Cpu className="w-4 h-4" />
                        <span>The Tech Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 drop-shadow-sm">
                        Built With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modern Technology</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        We use industry-leading tools and frameworks to build reliable, scalable, and ultra-fast AI solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="flex flex-col gap-8 md:gap-12">
                        {categories.map((cat, ci) => (
                            <motion.div
                                key={ci}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: ci * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 p-8 md:p-10 rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
                            >
                                <div className="md:w-[220px] shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                                    <h3 className="text-xl font-extrabold text-zinc-800 tracking-tight mb-3">
                                        {cat.label}
                                    </h3>
                                    <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                                </div>

                                <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 w-full">
                                    {cat.items.map((item, ii) => (
                                        <Magnet key={ii} padding={15} disabled={false} magnetStrength={2}>
                                            <div
                                                className="relative w-[150px] sm:w-[170px] h-[72px] rounded-[20px] border border-white/80 bg-white/60 backdrop-blur-md flex items-center px-4 sm:px-5 gap-3 sm:gap-4 cursor-pointer group hover:bg-white hover:border-white transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:-translate-y-1"
                                            >
                                                {/* Animated Gradient Glow on Hover */}
                                                <div 
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                                                    style={{ background: `radial-gradient(circle at left, ${item.color}, transparent)` }}
                                                />
                                                
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                                                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain filter drop-shadow-sm" />
                                                </div>
                                                
                                                <span className="text-[14px] sm:text-[15px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors z-10 truncate tracking-tight">
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
