"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "GlobalTech", label: "GLOBAL_TECH" },
    { name: "AeroDynamics", label: "AERO_DYNAMICS" },
    { name: "FinServe", label: "FIN_SERVE_CORP" },
    { name: "Nexus", label: "NEXUS_SYSTEMS" },
    { name: "Quantum", label: "QUANTUM_AI" },
    { name: "Logisync", label: "LOGI_SYNC" },
];

export default function TrustedBySection() {
    return (
        <section className="py-6 bg-white/40 backdrop-blur-lg border-y border-white/60 shadow-sm overflow-hidden relative z-10">
            <div className="section-container !py-4">
                <div className="text-center mb-6">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                        Trusted by Forward-Thinking Teams
                    </span>
                </div>
                
                {/* Scrolling Marquee */}
                <div className="relative w-full flex overflow-x-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
                    
                    <motion.div
                        className="flex items-center gap-12 py-4 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {/* Duplicate lists for seamless looping */}
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center font-bold text-zinc-900 text-sm">
                                    {logo.name[0]}
                                </div>
                                <span className="font-bold text-lg text-zinc-900 tracking-tight">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
