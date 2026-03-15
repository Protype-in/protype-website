"use client";

import { motion } from "framer-motion";
import { Package, Globe, Shield, Zap } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

const products = [
    {
        title: "TradeFlow AI",
        desc: "The ultimate AI OS for import-export automation.",
        icon: <Globe className="w-6 h-6" />,
        features: ["Automated Document OCR", "Shipment Tracking API", "Auto-Replies", "Compliance Checker"],
        tag: "BETA",
        color: "blue",
    },
    {
        title: "SecureGuard",
        desc: "Enterprise data privacy and compliance monitor.",
        icon: <Shield className="w-6 h-6" />,
        features: ["Real-time Monitoring", "PII Redaction", "Audit Logs", "SOC2 Dashboards"],
        tag: "LIVE",
        color: "emerald",
    },
    {
        title: "FastTrack CRM",
        desc: "A lightning-fast CRM built specifically for agencies.",
        icon: <Zap className="w-6 h-6" />,
        features: ["Smart Pipelines", "Email Sync", "Client Portals", "Custom Webhooks"],
        tag: "LIVE",
        color: "purple",
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="relative overflow-hidden py-16 bg-[#030305] border-t border-white/5">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium mb-6">
                        <Package className="w-4 h-4" />
                        <span>Internal Products</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        SaaS Built By <span className="text-blue-400">Elevate</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We don't just build for clients. We continuously launch our own
                        internal products to master the latest technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                    {products.map((p, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(255, 255, 255, 0.05)"
                            className="bg-[#0a0a0f] border-white/5 rounded-3xl group"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-${p.color}-400 group-hover:bg-${p.color}-500/10 transition-colors`}>
                                        {p.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-${p.color}-500/10 text-${p.color}-400 uppercase`}>
                                        {p.tag}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                                <p className="text-zinc-400 text-sm font-light mb-6 leading-relaxed">{p.desc}</p>
                                
                                <ul className="space-y-3 mb-8 flex-1">
                                    {p.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-2 text-zinc-300 text-sm font-light">
                                            <span className="text-blue-400">•</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#cta" className="text-white hover:text-blue-400 font-medium text-sm transition-colors flex items-center gap-1 group-hover/link">
                                    Request Access <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
