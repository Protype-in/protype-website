"use client";

import { motion } from "framer-motion";
import { BarChart3, Mail, Globe, Receipt, Target, TrendingUp, Cpu } from "lucide-react";

const products = [
    {
        icon: <BarChart3 className="w-7 h-7" />,
        title: "Import Export CRM",
        desc: "Complete CRM solution for international trade businesses.",
        features: ["Supplier management", "Buyer database", "Shipment tracking", "Document storage"],
        gradient: "from-[#00f5ff] to-[#3b82f6]",
        neonColor: "#00f5ff",
        tag: "POPULAR",
        id: "PRD_001",
    },
    {
        icon: <Mail className="w-7 h-7" />,
        title: "AI Email Tracker",
        desc: "Intelligent email tracking and automation system.",
        features: ["Email open tracking", "Auto responses", "Follow-up automation", "Analytics dashboard"],
        gradient: "from-[#7c3aed] to-[#ec4899]",
        neonColor: "#7c3aed",
        tag: "NEW",
        id: "PRD_002",
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: "Trade Automation Hub",
        desc: "Central hub for managing all trade operations.",
        features: ["Document management", "Shipment overview", "Client portal", "Real-time analytics"],
        gradient: "from-[#f59e0b] to-[#ef4444]",
        neonColor: "#f59e0b",
        tag: null,
        id: "PRD_003",
    },
    {
        icon: <Receipt className="w-7 h-7" />,
        title: "Smart Invoice Processor",
        desc: "AI-powered invoice data extraction and management.",
        features: ["Auto data extraction", "Multi-format support", "Error detection", "Export integration"],
        gradient: "from-[#00ff88] to-[#3b82f6]",
        neonColor: "#00ff88",
        tag: null,
        id: "PRD_004",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Lead Generation Engine",
        desc: "Automated lead discovery and qualification engine.",
        features: ["Multi-source scraping", "Lead scoring", "Auto outreach", "Pipeline management"],
        gradient: "from-[#ec4899] to-[#7c3aed]",
        neonColor: "#ec4899",
        tag: "BETA",
        id: "PRD_005",
    },
    {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Shipment Analytics",
        desc: "Data-driven insights for logistics optimization.",
        features: ["Route optimization", "Cost analysis", "Delay prediction", "Performance reports"],
        gradient: "from-[#06b6d4] to-[#00ff88]",
        neonColor: "#06b6d4",
        tag: null,
        id: "PRD_006",
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7c3aed]/4 blur-[150px]" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <Cpu className="w-3 h-3 inline-block mr-1" />
                        PRODUCT_CATALOG // DEPLOY_READY
                    </div>
                    <h2 className="section-title">
                        Ready-to-Use <span className="gradient-text">AI Products</span>
                    </h2>
                    <p className="section-subtitle">
                        Pre-built solutions that you can deploy immediately. Customize and integrate into your existing workflow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="cyber-card p-6 group relative"
                            style={{ borderColor: `${p.neonColor}10` }}
                        >
                            {/* Top ID bar */}
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded"
                                    style={{ color: p.neonColor, background: `${p.neonColor}0d`, border: `1px solid ${p.neonColor}20` }}
                                >
                                    {p.id}
                                </span>
                                {p.tag && (
                                    <span
                                        className="font-mono text-[9px] px-2 py-0.5 rounded tracking-wider"
                                        style={{ color: p.neonColor, background: `${p.neonColor}12`, border: `1px solid ${p.neonColor}25` }}
                                    >
                                        {p.tag}
                                    </span>
                                )}
                            </div>

                            {/* Icon */}
                            <div
                                className="mb-5 p-3 rounded-xl inline-flex transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    background: `${p.neonColor}0d`,
                                    border: `1px solid ${p.neonColor}20`,
                                    color: p.neonColor,
                                    boxShadow: `0 0 15px ${p.neonColor}15`,
                                }}
                            >
                                {p.icon}
                            </div>

                            <h3 className="text-base font-semibold mb-1.5">{p.title}</h3>
                            <p className="text-xs text-[#64748b] mb-4 leading-relaxed">{p.desc}</p>

                            <ul className="space-y-1.5 font-mono text-[11px]">
                                {p.features.map((f, fi) => (
                                    <li key={fi} className="flex items-center gap-2 text-[#64748b]">
                                        <span style={{ color: p.neonColor }}>›</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Top gradient accent on hover */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${p.neonColor}60, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
