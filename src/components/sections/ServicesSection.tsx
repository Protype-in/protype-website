"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, Truck, Smile, ArrowRight } from "lucide-react";
import Magnet from "../react-bits/Magnet";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accent: string;
}

const steps: StepItem[] = [
  {
    id: "inquiry",
    stepNumber: "01",
    title: "Customer Inquiry",
    desc: "Answer questions, resolve issues, build trust.",
    icon: <ShoppingCart className="h-5 w-5" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "#10b981",
  },
  {
    id: "processing",
    stepNumber: "02",
    title: "Order Processing",
    desc: "Validate, check inventory, initiate fulfilment.",
    icon: <Package className="h-5 w-5" />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accent: "#3b82f6",
  },
  {
    id: "fulfilment",
    stepNumber: "03",
    title: "Fulfilment & Shipping",
    desc: "Coordinate with warehouses, track and deliver.",
    icon: <Truck className="h-5 w-5" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accent: "#a855f7",
  },
  {
    id: "post-purchase",
    stepNumber: "04",
    title: "Post-Purchase",
    desc: "Send updates, handle returns, keep them coming back.",
    icon: <Smile className="h-5 w-5" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "#10b981",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-20 md:py-28"
    >
      {/* Background ambient glows */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-200/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/4 h-[480px] w-[480px] rounded-full bg-cyan-200/20 blur-[130px]"
        aria-hidden="true"
      />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 92%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          {/* Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            END-TO-END SOLUTIONS
          </div>

          {/* Heading */}
          <h2
            id="services-title"
            className="font-[Outfit] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[56px]"
          >
            From first click to happy customer.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            We support every stage of your e-commerce journey.
          </p>
        </motion.div>

        {/* 4-Step Horizontal Pipeline */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex items-center">
                
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex w-full flex-col rounded-[22px] border border-slate-200/80 bg-white/95 p-6 text-left shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)]"
                >
                  {/* Step Icon */}
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor} transition-transform duration-300 group-hover:scale-105`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-semibold text-slate-900 leading-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Right Arrow (Desktop only, except on last card) */}
                {idx < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute -right-4 z-20 hidden lg:flex items-center justify-center text-slate-300"
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="text-lg font-light"
                    >
                      →
                    </motion.span>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Magnet padding={15} magnetStrength={3}>
            <a
              href="#process"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0a2018] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(10,32,24,0.24)] transition-all duration-300 hover:bg-[#12362a] hover:shadow-[0_18px_38px_rgba(10,32,24,0.32)] hover:-translate-y-0.5"
            >
              See how Protype works
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnet>
        </motion.div>

      </div>
    </section>
  );
}
