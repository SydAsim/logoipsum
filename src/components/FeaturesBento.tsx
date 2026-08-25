import React from 'react';
import {
  Zap,
  ShieldCheck,
  Cpu,
  BarChart4,
  Layers,
  Terminal,
  Workflow,
  Sparkles,
  Lock,
  ArrowUpRight
} from 'lucide-react';

export const FeaturesBento: React.FC = () => {
  return (
    <section id="features" className="w-full py-24 px-6 lg:px-[120px] relative z-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-inter font-medium text-black mb-3">
            <Cpu className="w-3.5 h-3.5 text-black" />
            <span>Engineered for Intelligence</span>
          </div>
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl text-black tracking-tight mb-4">
            Built for Extreme Speed and Uncompromising Depth
          </h2>
          <p className="font-fustat font-medium text-lg text-[#505050]">
            Every layer of our engine is architected to eliminate analytical lag, verify semantic accuracy, and protect organizational confidentiality.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Sub-Second Vector Processing (Spans 7 cols) */}
          <div className="md:col-span-7 bg-[#f8f8f8] rounded-2xl p-8 border border-black/5 flex flex-col justify-between hover:border-black/20 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xs font-inter font-semibold uppercase tracking-wider text-black/50">
                Performance Core
              </span>
              <h3 className="font-fustat font-bold text-2xl sm:text-3xl text-black mt-1 mb-3">
                Sub-Second Ingestion & Vector Streaming
              </h3>
              <p className="font-schibsted text-sm sm:text-base text-[#505050] max-w-lg leading-relaxed">
                Stream upwards of 12 million rows per second directly into memory. Instant automatic schema inference and adaptive columnar compression eliminate indexing wait times.
              </p>
            </div>

            {/* Visual Micro-Simulation */}
            <div className="mt-8 bg-white rounded-xl p-4 border border-black/5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
                <span>ingestion_throughput</span>
                <span className="text-emerald-600 font-semibold font-schibsted">12.4M rows/s • Peak</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[92%] rounded-full transition-all duration-1000" />
              </div>
              <div className="flex items-center justify-between mt-3 text-[11px] font-schibsted text-gray-400">
                <span>Parquet / CSV / Arrow</span>
                <span>Latency: 18ms</span>
              </div>
            </div>
          </div>

          {/* Card 2: Semantic Reasoning (Spans 5 cols) */}
          <div className="md:col-span-5 bg-[#f8f8f8] rounded-2xl p-8 border border-black/5 flex flex-col justify-between hover:border-black/20 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-inter font-semibold uppercase tracking-wider text-black/50">
                Cognitive Layer
              </span>
              <h3 className="font-fustat font-bold text-2xl sm:text-3xl text-black mt-1 mb-3">
                Conversational Deep Reasoning
              </h3>
              <p className="font-schibsted text-sm text-[#505050] leading-relaxed">
                Powered by state-of-the-art GPT-4o reasoning. Transform plain-English prompts into verifiable multi-table joins and statistically sound anomaly scans.
              </p>
            </div>

            <div className="mt-6 p-3.5 bg-white rounded-xl border border-black/5 text-xs font-schibsted text-gray-700 space-y-2">
              <div className="flex items-center gap-2 text-black font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Verified Query Graph
              </div>
              <p className="text-gray-500 italic">
                "Auto-joins 4 tables across Stripe charges & Postgres user logs"
              </p>
            </div>
          </div>

          {/* Card 3: Automated Visual Narratives (Spans 5 cols) */}
          <div className="md:col-span-5 bg-[#f8f8f8] rounded-2xl p-8 border border-black/5 flex flex-col justify-between hover:border-black/20 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <BarChart4 className="w-5 h-5" />
              </div>
              <span className="text-xs font-inter font-semibold uppercase tracking-wider text-black/50">
                Presentation Engine
              </span>
              <h3 className="font-fustat font-bold text-2xl sm:text-3xl text-black mt-1 mb-3">
                Board-Ready Visuals in 1-Click
              </h3>
              <p className="font-schibsted text-sm text-[#505050] leading-relaxed">
                Skip hours in slide software. The system auto-generates responsive, high-contrast visual breakdowns, complete with executive takeaway bullets and anomaly callouts.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 bg-white rounded-xl border border-black/5 text-xs font-schibsted">
              <span className="text-gray-600">Export formats:</span>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-black">
                <span className="bg-gray-100 px-2 py-0.5 rounded">PDF</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded">PNG</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded">Notion</span>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise Privacy & SOC2 (Spans 7 cols) */}
          <div className="md:col-span-7 bg-[#f8f8f8] rounded-2xl p-8 border border-black/5 flex flex-col justify-between hover:border-black/20 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-inter font-semibold uppercase tracking-wider text-black/50">
                Security & Compliance
              </span>
              <h3 className="font-fustat font-bold text-2xl sm:text-3xl text-black mt-1 mb-3">
                Zero-Retention Privacy & Enterprise Encryption
              </h3>
              <p className="font-schibsted text-sm sm:text-base text-[#505050] max-w-lg leading-relaxed">
                Your data is never used to train foundation models. With SOC2 Type II compliance, end-to-end TLS 1.3 encryption, and self-hosted VPC deployment options, your intellectual property remains strictly yours.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-black/5 text-center">
                <div className="font-fustat font-bold text-base text-black">SOC2</div>
                <div className="text-[10px] font-schibsted text-gray-500">Type II Certified</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-black/5 text-center">
                <div className="font-fustat font-bold text-base text-black">Zero</div>
                <div className="text-[10px] font-schibsted text-gray-500">Model Training</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-black/5 text-center">
                <div className="font-fustat font-bold text-base text-black">AES-256</div>
                <div className="text-[10px] font-schibsted text-gray-500">At-Rest Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
