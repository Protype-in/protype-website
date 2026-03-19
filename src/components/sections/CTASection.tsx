"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Aurora from "../react-bits/Aurora";
import Magnet from "../react-bits/Magnet";

export default function CTASection() {
    return (
        <section id="cta" className="relative overflow-hidden py-20 bg-[#030305]">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                <Aurora
                    colorStops={["#3b82f6", "#8b5cf6", "#0ea5e9"]}
                    blend={0.5}
                    amplitude={1.5}
                    speed={0.7}
                />
            </div>

            <div className="section-container relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                        Ready to <span className="text-blue-400">Scale?</span>
                    </h2>
                    
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                        Stop burning hours on manual tasks or waiting months for a product launch. Let's build your intelligent system today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Magnet padding={15} disabled={false} magnetStrength={3}>
                            <a
                                href="https://wa.me/8637584923"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Chat
                            </a>
                        </Magnet>
                        <Magnet padding={20} disabled={false} magnetStrength={3}>
                            <a
                                href="mailto:info@protype.in"
                                className="bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center w-full sm:w-auto justify-center transition-all duration-300"
                            >
                                Email Us
                            </a>
                        </Magnet>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
