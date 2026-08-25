import React, { useState } from 'react';
import {
  UploadCloud,
  SearchCode,
  Share2,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  Bot,
  BellRing
} from 'lucide-react';

export const WorkflowShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Ingest Any Format Instantly',
      subtitle: 'Upload CSV, Parquet, or connect your live SQL/Postgres warehouse.',
      icon: UploadCloud,
      preview: {
        heading: 'Source Ingestion Active',
        badge: 'Zero Configuration',
        content: [
          'Auto-detecting delimiter, datetime formats, and column relationships',
          '34 columns indexed with 0.04% null threshold',
          'Compression ratio: 6.8x memory savings'
        ],
        mockUi: (
          <div className="bg-gray-50 rounded-xl p-4 border border-black/5 font-mono text-xs text-gray-700 space-y-2">
            <div className="flex items-center justify-between text-black font-semibold border-b border-black/5 pb-2">
              <span className="flex items-center gap-1.5"><FileSpreadsheet className="w-4 h-4 text-emerald-600" /> q3_financials_raw.csv</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">100% Parsed</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-500 pt-1">
              <div>user_id: <span className="text-black">UUID</span></div>
              <div>transaction_usd: <span className="text-black">FLOAT</span></div>
              <div>churn_risk: <span className="text-black">BOOLEAN</span></div>
            </div>
          </div>
        )
      }
    },
    {
      number: '02',
      title: 'Conversational Deep Synthesis',
      subtitle: 'Prompt in natural language or execute voice commands.',
      icon: SearchCode,
      preview: {
        heading: 'GPT-4o Reasoning Active',
        badge: 'Statistical Guardrails',
        content: [
          'Translates ambiguity into strict deterministic mathematical operations',
          'Flags multi-collinear anomalies across quarterly cohort distributions',
          'Synthesizes top 3 levers for immediate gross margin expansion'
        ],
        mockUi: (
          <div className="bg-gray-50 rounded-xl p-4 border border-black/5 text-xs font-schibsted text-gray-700 space-y-3">
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-black/5 shadow-xs">
              <Sparkles className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-black block mb-0.5">Statistical Discovery</span>
                Mid-market cohort churn dropped by 31.4% whenever customers activated 3+ integrations during trial.
              </div>
            </div>
          </div>
        )
      }
    },
    {
      number: '03',
      title: 'Automate, Export & Alert',
      subtitle: 'Push insights to Slack channels, Notion databases, or executive PDF.',
      icon: Share2,
      preview: {
        heading: 'Automated Delivery Engine',
        badge: 'Real-time Webhooks',
        content: [
          'Scheduled Monday morning briefings delivered to executive team',
          'Instant Slack anomaly alerts when churn signals cross 5%',
          'One-click PDF presentation generated with brand color schemes'
        ],
        mockUi: (
          <div className="bg-gray-50 rounded-xl p-4 border border-black/5 text-xs font-schibsted text-gray-700 space-y-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-black/5">
              <span className="flex items-center gap-2 text-black font-medium">
                <BellRing className="w-4 h-4 text-emerald-600" />
                Slack #leadership-briefing
              </span>
              <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                Scheduled: Mon 8:00 AM
              </span>
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <section id="projects" className="w-full py-24 px-6 lg:px-[120px] relative z-10 bg-gradient-to-b from-white via-gray-50/60 to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-inter font-medium text-black mb-3">
            <Bot className="w-3.5 h-3.5 text-black" />
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl text-black tracking-tight mb-4">
            How Top Teams Execute In Minutes
          </h2>
          <p className="font-fustat font-medium text-lg text-[#505050]">
            From raw, unformatted records to automated executive alignment in three frictionless steps.
          </p>
        </div>

        {/* 3 Step Interactive Selector & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Step Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-black shadow-lg translate-x-1'
                      : 'bg-white/60 border-black/5 hover:bg-white hover:border-black/20'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-fustat font-bold text-sm ${
                      isActive ? 'bg-black text-white' : 'bg-gray-100 text-black'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-fustat font-bold text-lg text-black mb-1">
                      {step.title}
                    </h3>
                    <p className="font-schibsted text-xs sm:text-sm text-[#505050] leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Step Visual Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-black/10 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-xs font-semibold uppercase tracking-wider text-black/50">
                  Step {steps[activeStep].number} In Action
                </span>
                <span className="bg-emerald-50 text-emerald-700 font-inter text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-100">
                  {steps[activeStep].preview.badge}
                </span>
              </div>

              <h4 className="font-fustat font-bold text-2xl text-black mb-4">
                {steps[activeStep].preview.heading}
              </h4>

              <div className="space-y-3 mb-6">
                {steps[activeStep].preview.content.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-schibsted text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Mock Preview Container */}
            <div className="mt-4 pt-4 border-t border-black/5">
              {steps[activeStep].preview.mockUi}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
