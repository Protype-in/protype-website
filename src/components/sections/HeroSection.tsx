"use client";

import { motion } from "framer-motion";
import Aurora from "../react-bits/Aurora";
import SplitText from "../react-bits/SplitText";
import TrueFocus from "../react-bits/TrueFocus";
import Magnet from "../react-bits/Magnet";
import CountUp from "../react-bits/CountUp";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030305]"
        >
            {/* React Bits: Sleek Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Aurora
                    colorStops={["#3b82f6", "#8b5cf6", "#0ea5e9"]}
                    blend={0.6}
                    amplitude={1.2}
                    speed={0.5}
                />
            </div>

            <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center mt-4">
                
                {/* Intro Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-zinc-300"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                    Elevating Businesses with AI
                </motion.div>

                {/* React Bits: SplitText Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
                    <SplitText
                        text="AI Automation"
                        className="text-white"
                        delay={60}
                        duration={0.8}
                        ease="back.out(1.4)"
                    />
                    <br />
                    <span className="text-zinc-400 font-light">&amp; MVPs for</span>
                    <br />
                    
                    {/* React Bits: TrueFocus interactive element */}
                    <div className="mt-4 w-full flex justify-center">
                        <TrueFocus
                            sentence="Real Impact"
                            manualMode={false}
                            blurAmount={4}
                            borderColor="#3b82f6"
                            glowColor="rgba(59, 130, 246, 0.4)"
                            animationDuration={0.8}
                            pauseBetweenAnimations={1.5}
                        />
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    We build autonomous agents, intelligent workflows, and scalable minimal viable products for modern enterprises. Clean code, crazy results.
                </motion.p>

                {/* React Bits: Magnet Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-20"
                >
                    <Magnet padding={50} disabled={false} magnetStrength={3}>
                        <a href="#cta" className="bg-white text-black hover:bg-zinc-200 transition-colors px-10 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center">
                            Book a Demo
                        </a>
                    </Magnet>
                    <Magnet padding={50} disabled={false} magnetStrength={3}>
                        <a href="#products" className="bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors px-10 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center">
                            View Products
                        </a>
                    </Magnet>
                </motion.div>

                {/* React Bits: Statistics with CountUp */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-white/5 pt-12"
                >
                    {[
                        { val: 50, suffix: "+", label: "MVP Built" },
                        { val: 98, suffix: "%", label: "Client Satisfaction" },
                        { val: 10, suffix: "x", label: "Faster AI Workflows" },
                    ].map((stat, i) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2 flex">
                                <CountUp
                                    from={0}
                                    to={stat.val}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="count-up-text"
                                />
                                {stat.suffix}
                            </div>
                            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Subtle bottom gradient to blend into next section */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#030305] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
