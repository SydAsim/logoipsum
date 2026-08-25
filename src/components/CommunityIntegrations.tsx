import React, { useState } from 'react';
import {
  Database,
  CheckCircle2,
  Star,
  Users,
  Quote,
  Activity,
  ArrowRight,
  Layers
} from 'lucide-react';

export const CommunityIntegrations: React.FC = () => {
  const [testedIntegration, setTestedIntegration] = useState<string | null>(null);

  const integrations = [
    { name: 'Snowflake', type: 'Data Warehouse', icon: '❄️' },
    { name: 'PostgreSQL', type: 'Relational DB', icon: '🐘' },
    { name: 'BigQuery', type: 'Cloud Analytics', icon: '⚡' },
    { name: 'Databricks', type: 'Lakehouse', icon: '🧱' },
    { name: 'Stripe', type: 'Billing & Payments', icon: '💳' },
    { name: 'Google Sheets', type: 'Spreadsheet', icon: '📊' },
    { name: 'ClickHouse', type: 'Columnar DB', icon: '🚀' },
    { name: 'AWS S3', type: 'Object Storage', icon: '📦' }
  ];

  const testimonials = [
    {
      name: 'Elena Rostova',
      role: 'VP of Data & Analytics at HyperScale',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'We replaced 4 brittle internal dashboard pipelines with Logoipsum. Our executive team now queries revenue cohorts in plain language and receives verified charts in under 3 seconds.',
      rating: 5
    },
    {
      name: 'Marcus Vance',
      role: 'Co-founder & CTO at Traceback AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The requestAnimationFrame responsive speed and zero-training security guarantee made enterprise IT approval instantaneous. It is simply the cleanest data UX in the industry.',
      rating: 5
    },
    {
      name: 'Sophia Chen',
      role: 'Lead Growth Architect at Orbit Labs',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      text: 'Being able to attach raw customer survey CSVs and get instant anomaly flags saved our team over 15 hours every single week during product launches.',
      rating: 5
    }
  ];

  const handleTestConnection = (name: string) => {
    setTestedIntegration(name);
    setTimeout(() => {
      setTestedIntegration(null);
    }, 2000);
  };

  return (
    <section id="community" className="w-full py-24 px-6 lg:px-[120px] relative z-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-inter font-medium text-black mb-3">
            <Layers className="w-3.5 h-3.5 text-black" />
            <span>Universal Ecosystem</span>
          </div>
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl text-black tracking-tight mb-4">
            Connects With Your Existing Data Stack
          </h2>
          <p className="font-fustat font-medium text-lg text-[#505050]">
            Zero ETL overhead. Connect directly to your existing data warehouses, lakehouses, or operational databases in one click.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8f8f8] hover:bg-white rounded-xl p-5 border border-black/5 hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[10px] font-mono text-gray-400 bg-white px-2 py-0.5 rounded-full border border-black/5">
                  Native
                </span>
              </div>
              <div>
                <h4 className="font-fustat font-bold text-base text-black group-hover:text-black">
                  {item.name}
                </h4>
                <p className="text-xs font-schibsted text-[#505050] mt-0.5">
                  {item.type}
                </p>
              </div>

              <button
                onClick={() => handleTestConnection(item.name)}
                className="mt-4 w-full py-1.5 bg-white group-hover:bg-black group-hover:text-white text-black text-xs font-schibsted font-medium rounded-lg border border-black/10 transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                {testedIntegration === item.name ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Ping: 12ms</span>
                  </>
                ) : (
                  <span>Test Sync</span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Community Proof & Key Metrics */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="font-fustat font-bold text-4xl sm:text-5xl text-white mb-1">
                48,000+
              </div>
              <p className="font-schibsted text-sm text-gray-400">
                Active Analysts & Engineers Worldwide
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="font-fustat font-bold text-4xl sm:text-5xl text-white mb-1">
                120M+
              </div>
              <p className="font-schibsted text-sm text-gray-400">
                Vector Queries Synthesized This Quarter
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="font-fustat font-bold text-4xl sm:text-5xl text-white mb-1">
                99.99%
              </div>
              <p className="font-schibsted text-sm text-gray-400">
                High-Availability Uptime SLA Guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Wall */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#f8f8f8] rounded-2xl p-6 border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="font-schibsted text-sm text-gray-700 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-black/10"
                />
                <div>
                  <h5 className="font-fustat font-bold text-sm text-black">{t.name}</h5>
                  <p className="font-schibsted text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
