"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, Rocket, Headset, Settings } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import Stepper, { Step } from "../react-bits/Stepper";

const steps = [
    {
        num: "01",
        title: "Discovery Phase",
        desc: "We analyze your business workflow, identify bottlenecks, and understand your core goals.",
        icon: <Search className="w-5 h-5" />,
    },
    {
        num: "02",
        title: "Solution Design",
        desc: "Architecture planning for AI systems or your MVP tailored precisely to your needs.",
        icon: <Lightbulb className="w-5 h-5" />,
    },
    {
        num: "03",
        title: "Agile Development",
        desc: "Fast-paced building of automation systems or products with full transparency.",
        icon: <Zap className="w-5 h-5" />,
    },
    {
        num: "04",
        title: "Seamless Deployment",
        desc: "Launch and integrate systems into your existing business infrastructure seamlessly.",
        icon: <Rocket className="w-5 h-5" />,
    },
    {
        num: "05",
        title: "Continuous Support",
        desc: "Ongoing improvement, monitoring, and scaling as your business grows.",
        icon: <Headset className="w-5 h-5" />,
    },
];

export default function HowWeWorkSection() {
    return (
        <section id="process" className="relative overflow-hidden pt-0 lg:pt-0 pb-6 lg:pb-10 bg-white">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-100/40 via-red-100/40 to-orange-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-500 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                        <Settings className="w-4 h-4" />
                        <span>The Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        How We <span className="text-blue-400">Work</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        A proven 5-stage framework to transform your business operations with
                        AI-powered solutions, from ideation to scale.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto text-left relative min-h-[400px]">
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => console.log(step)}
                        onFinalStepCompleted={() => window.location.hash = "#cta"}
                        backButtonText="Previous"
                        nextButtonText="Next"
                        contentClassName="py-4"
                        footerClassName="pt-2"
                        stepCircleContainerClassName="bg-white border-black/10"
                    >
                        {steps.map((s, i) => (
                            <Step key={i}>
                                <SpotlightCard
                                    spotlightColor="rgba(244, 63, 94, 0.2)"
                                    className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[32px] w-full h-full min-h-[300px] group relative overflow-hidden"
                                >
                                    {/* Subtle inner bloom */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[32px]" />

                                    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center p-8">
                                        <div className="absolute top-4 right-6 text-7xl font-black text-rose-500/[0.03] pointer-events-none select-none">
                                            {s.num}
                                        </div>
                                        
                                        <div className="w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 flex items-center justify-center text-rose-500 mb-8 shadow-[0_4px_15px_rgba(244,63,94,0.1)] group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(244,63,94,0.2)] transition-all duration-300 relative">
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 opacity-50" />
                                            <div className="relative z-10">
                                                {s.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight drop-shadow-sm">{s.title}</h3>
                                        <p className="text-zinc-600/90 leading-relaxed font-medium text-[15px] max-w-lg mx-auto">{s.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
        </section>
    );
}
