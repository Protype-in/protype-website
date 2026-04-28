"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Aurora from "../react-bits/Aurora";
import Magnet from "../react-bits/Magnet";

export default function CTASection() {
    return (
        <section id="cta" className="relative overflow-hidden py-6 lg:py-10 bg-white">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                <Aurora
                    colorStops={["#3b82f6", "#8b5cf6", "#0ea5e9"]}
                    blend={0.5}
                    amplitude={1.5}
                    speed={0.7}
                />
            </div>

            <div className="section-container relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-12 md:py-24 relative z-10 flex flex-col items-center"
                >
                    
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 drop-shadow-sm relative z-10">
                        Ready to <span className="text-blue-500">Scale?</span>
                    </h2>
                    
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10 relative z-10">
                        Stop burning hours on manual tasks or waiting months for a product launch. Let's build your intelligent system today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <Magnet padding={15} disabled={false} magnetStrength={3}>
                            <a
                                href="https://wa.me/8637584923"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Chat
                            </a>
                        </Magnet>
                        <Magnet padding={20} disabled={false} magnetStrength={3}>
                            <a
                                href="mailto:info@protype.in"
                                className="bg-white/80 backdrop-blur-md border border-white shadow-sm text-zinc-900 hover:bg-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center w-full sm:w-auto justify-center transition-all duration-300"
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
