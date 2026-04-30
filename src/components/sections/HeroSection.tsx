"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, TerminalSquare, Smartphone, GitBranch, Settings, BrainCircuit } from "lucide-react";

const services = [
  {
    id: "mvp",
    name: "MVP Development",
    headline: "Launch in Weeks, Not Months",
    color: "#1a1aff",
    glow: "#4d4dff",
    tagline: "From idea to live product — fast.",
    description: "We engineer your minimum viable product with precision — full-stack architecture, AI-embedded features, and enterprise-grade infrastructure. No fluff, just shipping.",
    bullets: ["4-week delivery cycle", "Modern full-stack (Next.js + Node.js)", "Embedded AI features", "Deployment & scaling included"],
    visual: "laptop_code"
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    headline: "Ship Your App",
    color: "#7c3aed",
    glow: "#a855f7",
    tagline: "iOS & Android, AI-native from day one.",
    description: "Cross-platform mobile apps built with React Native or Flutter. Designed for speed, built for retention — with AI personalization baked in from day one.",
    bullets: ["iOS & Android", "React Native / Flutter", "AI-driven UX", "App Store deployment"],
    visual: "phone_app"
  },
  {
    id: "workflows",
    name: "AI Automation Systems",
    headline: "Put Your Operations on Autopilot",
    color: "#0891b2",
    glow: "#06b6d4",
    tagline: "Automate the work that's slowing you down.",
    description: "We design and deploy intelligent workflow systems — turning multi-step manual processes into autonomous pipelines. Email responses, CRM updates, and document extraction handled by AI.",
    bullets: ["Email & CRM automation", "LangChain & LLM integration", "Document processing", "Custom API orchestration"],
    visual: "flowchart"
  },
  {
    id: "orchestration",
    name: "AI Orchestration",
    headline: "Build AI That Thinks for Itself",
    color: "#d97706",
    glow: "#f59e0b",
    tagline: "Multi-agent systems that run your business backend.",
    description: "Multi-agent architectures where specialized AI models collaborate — one orchestrating brain directing workers across research, writing, coding, and deployment.",
    bullets: ["Multi-agent systems", "OpenAI + Llama hybrid", "Autonomous pipelines", "Real-time monitoring"],
    visual: "neural"
  },
  {
    id: "partnership",
    name: "End-to-End Partnership",
    headline: "From Zero to AI-Powered",
    color: "#059669",
    glow: "#10b981",
    tagline: "We don't just build — we think with you from day one to launch and beyond.",
    description: "A true technical partnership. We act as your fractional CTO and engineering team, aligning technology decisions with your core business objectives to guarantee long-term success.",
    bullets: ["Fractional CTO", "Technical strategy", "Architecture design", "Ongoing support & scaling"],
    visual: "gears"
  }
];

const VisualMap: Record<string, React.FC<{ color: string }>> = {
    laptop_code: (props) => <TerminalSquare color={props.color} strokeWidth={1} className="w-full h-full drop-shadow-xl" />,
    phone_app: (props) => <Smartphone color={props.color} strokeWidth={1} className="w-full h-full drop-shadow-xl" />,
    flowchart: (props) => <GitBranch color={props.color} strokeWidth={1} className="w-full h-full drop-shadow-xl" />,
    gears: (props) => <Settings color={props.color} strokeWidth={1} className="w-full h-full drop-shadow-xl" />,
    neural: (props) => <BrainCircuit color={props.color} strokeWidth={1} className="w-full h-full drop-shadow-xl" />
};

export default function HeroSection({ serviceAssets }: { serviceAssets?: Record<string, any> }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map 0-1 to 0-4 based on 5 steps
        let index = Math.floor(latest * services.length);
        if (index >= services.length) index = services.length - 1;
        if (index < 0) index = 0;
        setActiveIndex(index);
    });

    const activeService = services[activeIndex];

    // Mouse Parallax for Right Panel
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const xAxis = x / 25;
        const yAxis = -(y / 25);
        
        cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    const handleCardClick = (index: number) => {
        if (!containerRef.current) return;
        const vh = window.innerHeight;
        window.scrollTo({
            top: containerRef.current.offsetTop + (index * vh),
            behavior: "smooth"
        });
    };

    return (
        <section 
            id="hero"
            ref={containerRef}
            className="h-[500vh] relative bg-[#f4f4f5] text-zinc-900 selection:bg-black/20"
        >
            {/* SVG Filter for noise */}
            <svg className="fixed pointer-events-none w-0 h-0">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
                </filter>
            </svg>

            {/* Sticky Container */}
            <div 
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between pointer-events-none transition-colors duration-700 ease-in-out"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${activeService.glow}15 0%, #f4f4f5 70%)`,
                }}
            >
                {/* Noise overlay */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.04]" 
                    style={{ filter: "url(#noise)" }}
                />

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Progress bar top */}
                <motion.div 
                    className="absolute top-0 left-0 h-1 z-50 transition-colors duration-500"
                    style={{ 
                        scaleX: scrollYProgress, 
                        transformOrigin: "left",
                        backgroundColor: activeService.color 
                    }}
                />

                <div className="relative w-full h-full flex flex-col md:flex-row max-w-[1400px] mx-auto px-6 lg:px-12 pointer-events-auto items-center">
                    
                    {/* LEFT PANEL: Card Stack (45%) */}
                    <div className="w-full md:w-[45%] h-[30vh] md:h-full flex flex-col items-center md:items-start justify-center relative perspective-1000 z-20 mt-10 md:mt-0 pl-0 md:pl-10">
                        {services.map((service, i) => {
                            const isActive = i === activeIndex;
                            const offset = i - activeIndex;
                            
                            const rotation = offset * 8;
                            const translateY = offset * (isMobile ? 50 : 100);
                            const scale = isActive ? 1.05 : 0.9;
                            const blur = Math.abs(offset) * 2;
                            const opacity = 1 - Math.min(Math.abs(offset) * 0.3, 0.7);
                            const zIndex = 10 - Math.abs(offset);

                            return (
                                <motion.div
                                    key={service.id}
                                    onClick={() => handleCardClick(i)}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ 
                                        x: 0,
                                        rotate: rotation,
                                        y: translateY,
                                        scale: scale,
                                        opacity: opacity,
                                        filter: `blur(${isActive ? 0 : blur}px)`,
                                        zIndex: zIndex
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        mass: 1,
                                        delay: i * 0.05
                                    }}
                                    className={`absolute w-[280px] md:w-[380px] lg:w-[460px] h-[90px] md:h-[120px] rounded-[32px] flex items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-2xl group ${
                                        isActive 
                                        ? 'border border-white/40 shadow-[inset_0_2px_20px_rgba(255,255,255,0.5),0_15px_30px_rgba(0,0,0,0.1)]' 
                                        : 'bg-white/40 border border-white/60 shadow-[inset_0_2px_15px_rgba(255,255,255,0.9)] hover:bg-white/60'
                                    }`}
                                    style={{
                                        backgroundColor: isActive ? service.color : undefined,
                                    }}
                                >
                                    <div className="text-center flex flex-col items-center justify-center px-4">
                                        <div 
                                            className="text-xs md:text-sm font-bold tracking-widest uppercase mb-1.5 md:mb-2 transition-colors duration-500" 
                                            style={{ color: isActive ? 'rgba(255,255,255,0.8)' : '#a1a1aa' }}
                                        >
                                            {service.name}
                                        </div>
                                        <h3 
                                            className="font-extrabold text-lg md:text-2xl lg:text-[1.75rem] leading-tight tracking-wide transition-colors duration-500 drop-shadow-sm"
                                            style={{ color: isActive ? '#ffffff' : '#71717a' }}
                                        >
                                            {service.headline}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT PANEL: Description & Visual (55%) */}
                    <div className="w-full md:w-[55%] h-[60vh] md:h-full flex flex-col justify-center gap-6 md:gap-8 z-20 pb-10 md:pb-0 px-0 md:px-10 mt-8 md:mt-0">
                        {/* 3D Visual Box */}
                        <div 
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/8] xl:aspect-video max-h-[35vh] rounded-[40px] relative transition-transform duration-200 ease-out preserve-3d bg-white/30 backdrop-blur-3xl border border-white/70 shadow-[inset_0_2px_30px_rgba(255,255,255,0.9),0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden shrink-0"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Subtle Inner Bloom */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-60 pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: 15, z: -100 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotateY: -15, z: -100 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {/* Icon Container with glowing aura */}
                                    <div 
                                        className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 transform translate-z-10 animate-[float_4s_ease-in-out_infinite] relative flex items-center justify-center"
                                    >
                                        {/* Glow behind icon */}
                                        <div 
                                            className="absolute inset-0 rounded-full blur-[60px] opacity-40 mix-blend-multiply"
                                            style={{ backgroundColor: activeService.color }}
                                        />
                                        <div className="relative z-10 w-full h-full p-8 md:p-12 lg:p-16 rounded-full bg-white/50 backdrop-blur-md border border-white/80 shadow-[inset_0_2px_15px_rgba(255,255,255,1),0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center">
                                            {React.createElement(VisualMap[activeService.visual], { color: activeService.color })}
                                        </div>
                                    </div>
                                    <style>{`
                                        @keyframes float {
                                            0%, 100% { transform: translateY(0px) translateZ(30px); }
                                            50% { transform: translateY(-15px) translateZ(30px); }
                                        }
                                    `}</style>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Description Box */}
                        <div className="relative min-h-[260px] md:min-h-[240px] lg:min-h-[280px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                                        },
                                        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                                    }}
                                    className="absolute top-0 left-0 w-full flex flex-col gap-3 md:gap-4"
                                >
                                    <motion.h4 
                                        variants={{
                                            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 20 } }
                                        }}
                                        className="text-2xl md:text-3xl font-semibold text-zinc-900"
                                    >
                                        {activeService.tagline}
                                    </motion.h4>
                                    <motion.p 
                                        variants={{
                                            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 20 } }
                                        }}
                                        className="text-zinc-600 font-light text-base md:text-lg leading-relaxed max-w-2xl"
                                    >
                                        {activeService.description}
                                    </motion.p>
                                    
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-1">
                                        {activeService.bullets.map((bullet, idx) => (
                                            <motion.li 
                                                key={idx}
                                                variants={{
                                                    hidden: { opacity: 0, x: -10 },
                                                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 250, damping: 20 } }
                                                }}
                                                className="flex items-start md:items-center gap-3 text-sm md:text-base lg:text-lg text-zinc-700 font-medium"
                                            >
                                                <CheckCircle2 size={16} className="shrink-0 mt-0.5 md:mt-0" style={{ color: activeService.color }} />
                                                <span>{bullet}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.button 
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
                                        }}
                                        className="mt-2 md:mt-4 w-fit flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full border bg-transparent hover:bg-black/5 transition-all duration-300 group font-medium text-sm md:text-base"
                                        style={{
                                            borderColor: `${activeService.color}80`,
                                            color: activeService.color,
                                            boxShadow: `0 0 10px ${activeService.glow}00`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = `0 0 15px ${activeService.glow}40`;
                                            e.currentTarget.style.backgroundColor = `${activeService.color}15`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = `0 0 0px transparent`;
                                            e.currentTarget.style.backgroundColor = `transparent`;
                                        }}
                                    >
                                        Learn More
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Cursor Glow Effect */}
            <div className="hidden md:block">
                <CursorGlow activeColor={activeService.glow} />
            </div>
        </section>
    );
}

function CursorGlow({ activeColor }: { activeColor: string }) {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const updateMousePos = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePos);
        return () => window.removeEventListener("mousemove", updateMousePos);
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none mix-blend-multiply z-50 transition-colors duration-500"
            style={{
                transform: `translate(${mousePos.x - 150}px, ${mousePos.y - 150}px)`,
                background: `radial-gradient(circle, ${activeColor}15 0%, transparent 70%)`,
            }}
        />
    );
}
