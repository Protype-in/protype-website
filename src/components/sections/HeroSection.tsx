"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "mvp",
    name: "MVP Development",
    color: "#1a1aff",
    glow: "#4d4dff",
    tagline: "From idea to live product in 4 weeks.",
    description: "We engineer your minimum viable product with precision — full-stack architecture, AI-embedded features, and enterprise-grade infrastructure. No fluff, just shipping.",
    bullets: ["4-week delivery cycle", "Modern full-stack (Next.js + Node.js)", "Embedded AI features", "Deployment & scaling included"],
    visual: "laptop_code"
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    color: "#7c3aed",
    glow: "#a855f7",
    tagline: "Native performance. AI-powered features.",
    description: "Cross-platform mobile apps built with React Native or Flutter. Designed for speed, built for retention — with AI personalization baked in from day one.",
    bullets: ["iOS & Android", "React Native / Flutter", "AI-driven UX", "App Store deployment"],
    visual: "phone_app"
  },
  {
    id: "workflows",
    name: "AI Workflows",
    color: "#0891b2",
    glow: "#06b6d4",
    tagline: "Automate complex processes intelligently.",
    description: "We design and deploy intelligent workflow systems using LangChain, n8n, and custom agents — turning multi-step manual processes into autonomous pipelines.",
    bullets: ["LangChain & LLM integration", "n8n / Make automation", "Document processing", "API orchestration"],
    visual: "flowchart"
  },
  {
    id: "automation",
    name: "Automation",
    color: "#059669",
    glow: "#10b981",
    tagline: "Stop doing what machines should.",
    description: "Email responses, CRM updates, lead follow-ups, invoice extraction — we automate the busywork so your team focuses on what humans do best.",
    bullets: ["Email & CRM automation", "Lead nurturing bots", "Document data extraction", "Zapier / Make / Custom"],
    visual: "gears"
  },
  {
    id: "orchestration",
    name: "AI Orchestration",
    color: "#d97706",
    glow: "#f59e0b",
    tagline: "Coordinate multiple agents as one system.",
    description: "Multi-agent architectures where specialized AI models collaborate — one orchestrating brain directing workers across research, writing, coding, and deployment.",
    bullets: ["Multi-agent systems", "OpenAI + Llama hybrid", "Autonomous pipelines", "Real-time monitoring"],
    visual: "neural"
  }
];

// Placeholder SVGs
const LaptopCodeSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <rect x="20" y="30" width="60" height="40" rx="2" fill="#fff" stroke={color} strokeWidth="1.5" />
        <rect x="15" y="70" width="70" height="4" rx="1" fill={color} />
        <circle cx="50" cy="50" r="10" fill="transparent" stroke={color} strokeWidth="1" strokeDasharray="4 2" className="animate-[spin_4s_linear_infinite]" />
        <rect x="25" y="35" width="30" height="2" fill={color} className="animate-pulse" />
        <rect x="25" y="40" width="40" height="2" fill={color} className="animate-pulse" style={{ animationDelay: '200ms' }} />
        <rect x="25" y="45" width="20" height="2" fill={color} className="animate-pulse" style={{ animationDelay: '400ms' }} />
    </svg>
);

const PhoneAppSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <rect x="30" y="15" width="40" height="70" rx="4" fill="#fff" stroke={color} strokeWidth="1.5" />
        <rect x="35" y="25" width="30" height="40" rx="2" fill="#f4f4f5" />
        <circle cx="50" cy="75" r="3" fill={color} />
        <circle cx="50" cy="45" r="8" fill="transparent" stroke={color} strokeWidth="1" className="animate-ping origin-center" style={{ animationDuration: '3s' }} />
    </svg>
);

const FlowchartSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <circle cx="30" cy="30" r="8" fill="#fff" stroke={color} strokeWidth="1.5" className="animate-pulse" />
        <circle cx="70" cy="30" r="8" fill="#fff" stroke={color} strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '300ms' }} />
        <circle cx="50" cy="70" r="8" fill="#fff" stroke={color} strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '600ms' }} />
        <path d="M 35 35 L 45 65" stroke={color} strokeWidth="1.5" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
        <path d="M 65 35 L 55 65" stroke={color} strokeWidth="1.5" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
        <path d="M 38 30 L 62 30" stroke={color} strokeWidth="1.5" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
        <style>{`@keyframes dash { to { stroke-dashoffset: -10; } }`}</style>
    </svg>
);

const GearsSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <circle cx="40" cy="40" r="15" fill="transparent" stroke={color} strokeWidth="2" strokeDasharray="4 2" className="animate-[spin_4s_linear_infinite]" />
        <circle cx="65" cy="60" r="10" fill="transparent" stroke={color} strokeWidth="2" strokeDasharray="3 2" className="animate-[spin_3s_linear_infinite_reverse]" />
        <circle cx="40" cy="40" r="5" fill={color} />
        <circle cx="65" cy="60" r="3" fill={color} />
    </svg>
);

const NeuralSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <path d="M 50 20 C 30 20, 20 40, 30 60 C 40 80, 60 80, 70 60 C 80 40, 70 20, 50 20 Z" fill="transparent" stroke={color} strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_10s_linear_infinite]" />
        <circle cx="50" cy="50" r="12" fill="#fff" stroke={color} strokeWidth="2" className="animate-pulse" />
        <circle cx="50" cy="50" r="4" fill={color} />
        <circle cx="50" cy="50" r="20" fill="transparent" stroke={color} strokeWidth="0.5" className="animate-ping" style={{ animationDuration: '2s' }} />
    </svg>
);

const VisualMap: Record<string, React.FC<{ color: string }>> = {
    laptop_code: LaptopCodeSVG,
    phone_app: PhoneAppSVG,
    flowchart: FlowchartSVG,
    gears: GearsSVG,
    neural: NeuralSVG
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
                                    className={`absolute w-[280px] md:w-[380px] lg:w-[460px] h-[90px] md:h-[120px] rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-md border-[2px] group ${
                                        isActive ? 'shadow-2xl' : 'bg-white hover:bg-zinc-50'
                                    }`}
                                    style={{
                                        backgroundColor: isActive ? service.color : undefined,
                                        borderColor: isActive ? service.color : 'rgba(0,0,0,0.05)',
                                        boxShadow: isActive ? `0 10px 30px -10px ${service.color}` : '0 4px 20px -10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <h3 
                                        className="font-bold text-xl md:text-3xl tracking-wider uppercase transition-colors duration-300 text-center"
                                        style={{ color: isActive ? '#ffffff' : service.color }}
                                    >
                                        {service.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT PANEL: Description & Visual (55%) */}
                    <div className="w-full md:w-[55%] h-[60vh] md:h-full flex flex-col justify-center gap-6 md:gap-8 z-20 pb-10 md:pb-0 px-0 md:px-10 mt-8 md:-mt-20">
                        {/* 3D Visual Box */}
                        <div 
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="w-full aspect-[16/10] md:aspect-video rounded-2xl relative transition-transform duration-200 ease-out preserve-3d"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: 15, z: -100 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotateY: -15, z: -100 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        filter: `drop-shadow(0 20px 40px ${activeService.glow}40)`,
                                    }}
                                >
                                    {/* Inline SVG Placeholder */}
                                    <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 transform translate-z-10 animate-[float_3s_ease-in-out_infinite]">
                                        {React.createElement(VisualMap[activeService.visual], { color: activeService.color })}
                                    </div>
                                    <style>{`
                                        @keyframes float {
                                            0%, 100% { transform: translateY(0px); }
                                            50% { transform: translateY(-8px); }
                                        }
                                    `}</style>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Description Box */}
                        <div className="relative min-h-[200px] md:min-h-[240px]">
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
                                    className="absolute top-0 left-0 w-full flex flex-col gap-3 md:gap-5"
                                >
                                    <motion.h4 
                                        variants={{
                                            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 20 } }
                                        }}
                                        className="text-xl md:text-3xl lg:text-4xl font-semibold text-zinc-900"
                                    >
                                        {activeService.tagline}
                                    </motion.h4>
                                    <motion.p 
                                        variants={{
                                            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 20 } }
                                        }}
                                        className="text-zinc-600 font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
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
