"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function CTASection() {
    return (
        <section id="cta" className="relative overflow-hidden py-20 bg-[#030305]">
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/10 blur-[150px]" />
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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://cal.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            <Play className="w-5 h-5 fill-black" />
                            Schedule Demo Call
                        </a>
                        <a
                            href="mailto:hello@elevate.com"
                            className="bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center w-full sm:w-auto justify-center transition-all duration-300"
                        >
                            Email Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
