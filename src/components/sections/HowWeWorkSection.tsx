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
        <section id="process" className="relative overflow-hidden py-16 bg-[#0a0a0f]">
            <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium mb-6">
                        <Settings className="w-4 h-4" />
                        <span>The Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        How We <span className="text-blue-400">Work</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
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
                        stepCircleContainerClassName="bg-[#0a0a0f] border-white/10"
                    >
                        {steps.map((s, i) => (
                            <Step key={i}>
                                <SpotlightCard
                                    spotlightColor="rgba(255, 255, 255, 0.05)"
                                    className="bg-[#030305] border-white/5 rounded-3xl w-full h-full min-h-[250px]"
                                >
                                    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center p-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6">
                                            {s.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed font-light text-lg max-w-lg mx-auto">{s.desc}</p>
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
