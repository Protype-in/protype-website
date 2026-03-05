"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check, Terminal } from "lucide-react";

function CTAMatrixBg() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animId: number;
        const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
        resize();
        const cols = Math.floor(canvas.width / 24);
        const drops: number[] = Array(cols).fill(0);
        const chars = "01";
        const draw = () => {
            ctx.fillStyle = "rgba(2, 2, 9, 0.06)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "12px JetBrains Mono, monospace";
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillStyle = `rgba(0, 245, 255, ${Math.random() * 0.08 + 0.03})`;
                ctx.fillText(text, i * 24, drops[i] * 18);
                if (drops[i] * 18 > canvas.height && Math.random() > 0.97) drops[i] = 0;
                drops[i]++;
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animId);
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}

export default function CTASection() {
    return (
        <section id="cta" className="relative overflow-hidden py-32">
            {/* Binary matrix bg */}
            <CTAMatrixBg />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/4 to-[#7c3aed]/6" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#00f5ff]/6 blur-[200px]" />

            {/* Grid */}
            <div className="animated-grid-bg" />
            <div className="scanline-overlay" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Terminal badge */}
                    <div className="tech-badge mb-8 inline-flex">
                        <Terminal className="w-3 h-3 mr-1 text-[#00ff88]" />
                        READY_TO_TRANSFORM // AWAITING_INPUT
                        <span className="cursor-blink" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Ready to{" "}
                        <span
                            className="glitch gradient-text"
                            data-text="Automate"
                        >
                            Automate
                        </span>
                        <br />
                        <span className="text-[#e2e8f0]">Your Business?</span>
                    </h2>

                    <p className="text-lg text-[#64748b] mb-10 max-w-xl mx-auto leading-relaxed font-mono">
                        <span className="text-[#00f5ff]">$</span>{" "}
                        Join global businesses scaling faster with AI automation and rapid product development.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <motion.a
                            href="mailto:hello@elevate.ai"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-glow !px-10 !py-4 !text-sm"
                        >
                            Book a Free Demo
                        </motion.a>
                        <motion.a
                            href="mailto:hello@elevate.ai"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-outline !px-10 !py-4 !text-sm"
                        >
                            Start Your Project
                        </motion.a>
                    </div>

                    {/* Trust badges - terminal style */}
                    <div className="flex flex-wrap gap-6 justify-center text-xs font-mono text-[#334155]">
                        {[
                            { text: "FREE_DISCOVERY_CALL", color: "#00ff88" },
                            { text: "NO_UPFRONT_PAYMENT", color: "#00f5ff" },
                            { text: "RESPONSE_WITHIN_24H", color: "#7c3aed" },
                        ].map((badge) => (
                            <span key={badge.text} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5" style={{ color: badge.color }} />
                                <span style={{ color: badge.color }}>{badge.text}</span>
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
