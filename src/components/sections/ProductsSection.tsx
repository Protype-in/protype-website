"use client";

import { motion, Variants } from "framer-motion";
import { Package, Zap } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

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
        <section id="products" className="relative overflow-hidden py-4 lg:py-6 bg-[#fafafa] border-t border-black/5">
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
                        <span className="text-blue-400">protype</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        We don't just build for clients. We continuously launch our own
                        internal products to master the latest technologies.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex justify-center max-w-4xl mx-auto px-4"
                >
                    <motion.div variants={itemVariants} className="w-full">
                        <SpotlightCard
                            spotlightColor="rgba(59, 130, 246, 0.15)"
                            className="bg-white border-black/10 rounded-[3xl] p-12 md:p-24 text-center relative overflow-hidden group w-full"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-20 h-20 rounded-2xl bg-white border border-amber-500/20 flex items-center justify-center text-zinc-900 mb-8 shadow-[0_0_30px_rgba(245,158,11,0.2)] relative"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-50" />
                                    <Zap className="w-10 h-10 text-amber-500 relative z-10" />
                                </motion.div>
                                
                                <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight mb-6">
                                    Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Incredible</span> <br /> is Coming Soon
                                </h3>
                                
                                <p className="text-lg text-zinc-600 font-light max-w-xl mx-auto leading-relaxed mb-10">
                                    We are building next-generation products that will redefine the way you work. Our engineering team is currently heads down in the lab. Stay tuned.
                                </p>
                                
                                <a 
                                    href="#cta"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-semibold cursor-pointer group/btn"
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
