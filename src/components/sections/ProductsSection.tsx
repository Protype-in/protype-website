"use client";

import { motion, Variants } from "framer-motion";
import { Package, Zap, ArrowRight } from "lucide-react";
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
        <section id="products" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,rgba(167,139,250,.08),transparent_35%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-slate-600 uppercase backdrop-blur-xl">
                        <Package className="h-3.5 w-3.5" />
                        The agent lab
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
                        <SplitText text="Built by" className="inline-block" delay={40} duration={0.6} ease="easeOut" />
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">protype</span>
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
                        We don&apos;t just deploy agents for clients. Our internal lab is constantly shipping new automation building blocks.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-auto flex max-w-4xl justify-center px-4"
                >
                    <motion.div variants={itemVariants} className="w-full">
                        <SpotlightCard
                            spotlightColor="rgba(167, 139, 250, 0.2)"
                            className="group relative w-full overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-slate-300 md:p-20"
                        >
                            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 opacity-50 blur-[90px] transition-opacity duration-700 group-hover:opacity-100" />

                            <div className="relative z-10 flex flex-col items-center justify-center">

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="relative mb-9 flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-200 bg-violet-50 text-violet-600 shadow-[0_10px_30px_rgba(167,139,250,0.15)]"
                                >
                                    <Zap className="h-10 w-10" />
                                </motion.div>

                                <h3 className="mb-7 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                                    Something <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">incredible</span> <br /> is coming soon
                                </h3>

                                <p className="relative z-10 mx-auto mb-11 max-w-2xl text-lg leading-relaxed text-slate-600">
                                    We&apos;re engineering pre-built agent templates and integrations that will make deploying support, ops, and CX automation even faster. Stay tuned.
                                </p>

                                <a
                                    href="#cta"
                                    className="group/btn relative z-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                                    </span>
                                    Join the waitlist
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
