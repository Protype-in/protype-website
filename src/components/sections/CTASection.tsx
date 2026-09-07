"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Aurora from "../react-bits/Aurora";
import Magnet from "../react-bits/Magnet";

export default function CTASection() {
    return (
        <section id="cta" className="relative isolate overflow-hidden py-20 lg:py-28">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
                <Aurora
                    colorStops={["#22d3ee", "#3b82f6", "#8b5cf6"]}
                    blend={0.5}
                    amplitude={1.5}
                    speed={0.7}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center rounded-[36px] border border-white/10 bg-white/[0.05] px-6 py-16 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-16 md:py-20"
                >
                    <span className="mb-6 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100 backdrop-blur-xl">Build with protype</span>
                    <h2 className="relative z-10 mb-6 font-[Outfit] text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                        Ready to <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">automate?</span>
                    </h2>

                    <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                        Stop losing hours to support queues and manual ops. Let&apos;s design the agents your business actually needs — across support, operations, and customer experience.
                    </p>

                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Magnet padding={15} disabled={false} magnetStrength={3}>
                            <a
                                href="https://wa.me/8637584923"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-100 active:scale-95 sm:w-auto"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp Chat
                            </a>
                        </Magnet>
                        <Magnet padding={20} disabled={false} magnetStrength={3}>
                            <a
                                href="mailto:info@protype.in"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.09] sm:w-auto"
                            >
                                Email Us
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </Magnet>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
