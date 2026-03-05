"use client";

import { motion } from "framer-motion";
import { BarChart3, Mail, FileText, AlertTriangle, Lightbulb, CheckCircle2, PieChart } from "lucide-react";

const caseStudies = [
    {
        icon: <BarChart3 className="w-8 h-8" />,
        product: "Import Export CRM",
        industry: "Global Trade",
        problem: "Manual client and supplier management using spreadsheets, causing missed deals and communication chaos.",
        solution: "Built an AI-powered CRM with automated follow-ups, shipment tracking, and document management.",
        result: "60% faster deal closure, zero missed follow-ups, and full visibility across the pipeline.",
        metrics: [
            { val: "60%", label: "Faster Deals" },
            { val: "0", label: "Missed Leads" },
            { val: "3x", label: "Team Efficiency" },
        ],
        gradient: "from-[#00f5ff] to-[#3b82f6]",
        neonColor: "#00f5ff",
        caseId: "CASE_001",
    },
    {
        icon: <Mail className="w-8 h-8" />,
        product: "AI Email Automation Agent",
        industry: "SaaS Startup",
        problem: "Sales team spending 4+ hours daily on manual email follow-ups with inconsistent messaging.",
        solution: "Deployed an AI email agent that reads, drafts, and sends personalized follow-up emails automatically.",
        result: "Saved 10+ hours per week, response rates improved by 45% with consistent messaging.",
        metrics: [
            { val: "10h+", label: "Saved Weekly" },
            { val: "45%", label: "Better Response" },
            { val: "100%", label: "Follow-up Rate" },
        ],
        gradient: "from-[#7c3aed] to-[#ec4899]",
        neonColor: "#7c3aed",
        caseId: "CASE_002",
    },
    {
        icon: <FileText className="w-8 h-8" />,
        product: "Trade Document Processor",
        industry: "Logistics",
        problem: "Data entry from invoices and shipping documents taking up to 2 hours per batch.",
        solution: "AI document processor that extracts, validates, and syncs data from any document format.",
        result: "Processing time reduced from 2 hours to under 5 minutes with 99% accuracy.",
        metrics: [
            { val: "24x", label: "Faster Processing" },
            { val: "99%", label: "Accuracy" },
            { val: "85%", label: "Cost Saved" },
        ],
        gradient: "from-[#f59e0b] to-[#ef4444]",
        neonColor: "#f59e0b",
        caseId: "CASE_003",
    },
];

export default function CaseStudiesSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[#00f5ff]/3 blur-[180px]" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <PieChart className="w-3 h-3 inline-block mr-1" />
                        CASE_STUDIES // VERIFIED_RESULTS
                    </div>
                    <h2 className="section-title">
                        Real Results for <span className="gradient-text">Real Businesses</span>
                    </h2>
                    <p className="section-subtitle">
                        See how our AI solutions and products have transformed business operations across industries.
                    </p>
                </motion.div>

                <div className="space-y-5 max-w-5xl mx-auto">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="cyber-card p-8 group"
                            style={{ borderColor: `${cs.neonColor}10` }}
                        >
                            {/* Top gradient accent */}
                            <div className={`h-px w-full bg-gradient-to-r ${cs.gradient} mb-6 opacity-60`} />

                            {/* Case ID header */}
                            <div className="flex items-center justify-between mb-6">
                                <span
                                    className="font-mono text-[10px] tracking-widest px-2 py-1 rounded"
                                    style={{ color: cs.neonColor, background: `${cs.neonColor}0d`, border: `1px solid ${cs.neonColor}25` }}
                                >
                                    {cs.caseId} // {cs.industry.toUpperCase()}
                                </span>
                                <div className="flex gap-1.5 opacity-40">
                                    <div className="w-2 h-2 rounded-full" style={{ background: cs.neonColor }} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Left - details */}
                                <div>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="p-2.5 rounded-xl inline-flex"
                                            style={{ background: `${cs.neonColor}10`, border: `1px solid ${cs.neonColor}20`, color: cs.neonColor }}
                                        >
                                            {cs.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base">{cs.product}</h3>
                                            <span className="text-xs font-mono" style={{ color: cs.neonColor }}>{cs.industry}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <div className="text-[#ff2b2b] font-mono text-xs mb-1.5 flex items-center gap-1.5">
                                                <AlertTriangle className="w-3 h-3" /> PROBLEM
                                            </div>
                                            <p className="text-[#64748b] leading-relaxed">{cs.problem}</p>
                                        </div>
                                        <div>
                                            <div className="text-[#00f5ff] font-mono text-xs mb-1.5 flex items-center gap-1.5">
                                                <Lightbulb className="w-3 h-3" /> SOLUTION
                                            </div>
                                            <p className="text-[#64748b] leading-relaxed">{cs.solution}</p>
                                        </div>
                                        <div>
                                            <div className="text-[#00ff88] font-mono text-xs mb-1.5 flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3 h-3" /> RESULT
                                            </div>
                                            <p className="text-[#64748b] leading-relaxed">{cs.result}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Metrics */}
                                <div className="md:col-span-2 flex items-center">
                                    <div className="grid grid-cols-3 gap-3 w-full">
                                        {cs.metrics.map((m, mi) => (
                                            <div
                                                key={mi}
                                                className="cyber-card p-4 text-center"
                                                style={{ borderColor: `${cs.neonColor}15` }}
                                            >
                                                <div
                                                    className="text-3xl font-extrabold font-mono mb-1"
                                                    style={{
                                                        color: cs.neonColor,
                                                        textShadow: `0 0 20px ${cs.neonColor}50`,
                                                    }}
                                                >
                                                    {m.val}
                                                </div>
                                                <div className="text-xs text-[#64748b] font-mono">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover top border */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${cs.neonColor}80, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
