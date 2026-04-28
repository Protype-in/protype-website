"use client";

import { motion, Variants } from "framer-motion";
import { Package, Zap } from "lucide-react";
import SplitText from "../react-bits/SplitText";
import SpotlightCard from "../react-bits/SpotlightCard";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export default function ProductsSection() {
    return (
        <section id="products" className="relative overflow-hidden pt-2 lg:pt-4 pb-0 lg:pb-0 bg-white border-t border-black/5">
            {/* Global background aura */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-amber-100/40 via-orange-100/40 to-yellow-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        <Package className="w-4 h-4" />
                        <span>Internal Products</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Products Built By"
                            className="inline-block"
                            delay={40}
                            duration={0.6}
                            ease="easeOut"
                        />
                        {" "}
                        <span className="text-amber-500">protype</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        We don't just build for clients. Our engineering lab is constantly developing next-generation internal tools.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex justify-center max-w-4xl mx-auto px-4 mt-4"
                >
                    <motion.div variants={itemVariants} className="w-full">
                        <SpotlightCard
                            spotlightColor="rgba(245, 158, 11, 0.15)"
                            className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_40px_rgba(0,0,0,0.05)] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden group w-full transition-all duration-500 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_15px_50px_rgba(0,0,0,0.08)]"
                        >
                            {/* Subtle inner bloom */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[40px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10 flex flex-col items-center justify-center">
                            
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 flex items-center justify-center text-zinc-900 mb-10 shadow-[0_10px_30px_rgba(245,158,11,0.15)] relative"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-50" />
                                <Zap className="w-10 h-10 text-amber-500 relative z-10" />
                            </motion.div>
                            
                            <h3 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight mb-8 drop-shadow-sm">
                                Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Incredible</span> <br /> is Coming Soon
                            </h3>
                            
                            <p className="text-xl text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed mb-12 relative z-10">
                                We are actively engineering AI-native solutions that will completely redefine your daily workflows. The future is currently compiling in our lab. Stay tuned.
                            </p>
                            
                            <a 
                                href="#cta"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-lg cursor-pointer group/btn relative z-10"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                Join the Waitlist
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </a>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
