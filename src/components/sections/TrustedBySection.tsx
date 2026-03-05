"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const logos = [
    "TradeFlow", "LogiPro", "ExportHub", "ShipWise", "NexTrade",
    "CargoAI", "DataBridge", "VoltStack", "Synthera", "GlobeCom",
];

const logoColors = [
    "#00f5ff", "#7c3aed", "#00ff88", "#f59e0b", "#ec4899",
    "#3b82f6", "#06b6d4", "#a78bfa", "#10b981", "#00f5ff",
];

export default function TrustedBySection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const posRef = useRef(0);
    const animRef = useRef<number>(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scroll = () => {
            if (!isHovered) {
                posRef.current += 0.5;
                if (posRef.current >= container.scrollWidth / 2) posRef.current = 0;
                container.scrollLeft = posRef.current;
            }
            animRef.current = requestAnimationFrame(scroll);
        };
        animRef.current = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animRef.current);
    }, [isHovered]);

    return (
        <section className="py-14 border-y border-[#00f5ff]/06 bg-[#02020900]/50 relative">
            <div className="scanline-overlay" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center font-mono text-[10px] text-[#334155] uppercase tracking-widest mb-8"
                >
                    <span className="text-[#00f5ff]">//</span> trusted_by startups and global businesses in logistics, trading and saas
                </motion.p>

                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="overflow-hidden relative"
                    style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
                >
                    <div className="flex gap-8 w-max">
                        {[...logos, ...logos].map((name, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2.5 px-5 py-2.5 rounded cyber-card cursor-default group whitespace-nowrap"
                                style={{ borderColor: `${logoColors[i % logoColors.length]}10` }}
                            >
                                <div
                                    className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold font-mono text-black flex-shrink-0"
                                    style={{ background: `linear-gradient(135deg, ${logoColors[i % logoColors.length]}, #7c3aed)` }}
                                >
                                    {name.charAt(0)}
                                </div>
                                <span
                                    className="text-sm font-semibold font-mono text-[#334155] group-hover:transition-colors duration-200"
                                    style={{ color: undefined }}
                                >
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
