import React, { useState } from 'react';
import { Check, HelpCircle, ChevronDown, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

interface CreditCalculatorProps {
  onSelectPlan: (planName: string) => void;
}

export const CreditCalculator: React.FC<CreditCalculatorProps> = ({ onSelectPlan }) => {
  const [creditVolume, setCreditVolume] = useState<number>(2500);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculate estimated cost & recommended tier
  const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1.0;
  
  let recommendedTier = 'Pro Analyst';
  let estimatedPrice = Math.round(29 * discountMultiplier);
  if (creditVolume <= 500) {
    recommendedTier = 'Starter Free';
    estimatedPrice = 0;
  } else if (creditVolume > 5000) {
    recommendedTier = 'Enterprise Unlimited';
    estimatedPrice = Math.round(99 * discountMultiplier);
  }

  const faqs = [
    {
      q: 'How are credits consumed across queries and file uploads?',
      a: 'A standard natural language analytical query or chart generation uses 1 credit. Deep statistical regression and large multi-file batch transformations consume 2 credits. Voice commands consume standard 1 credit per query.'
    },
    {
      q: 'Is my proprietary corporate data ever used for model training?',
      a: 'Never. We operate with strict zero-data-retention agreements. Your schema, uploads, queries, and outputs are strictly ephemeral and never passed into any AI model training pool.'
    },
    {
      q: 'Can I connect direct SQL connections or Amazon S3 buckets?',
      a: 'Yes. On both Pro and Enterprise tiers, you can configure live secure read-only read replicas for Postgres, Snowflake, BigQuery, and S3 parquet streams.'
    },
    {
      q: 'What happens if our team exhausts our monthly credit pool?',
      a: 'Your dashboards and live scheduled webhooks continue uninterrupted. You can instantly auto-refill credits at $5 per 500 credits or upgrade to Enterprise for unlimited query execution.'
    }
  ];

  return (
    <section id="pricing" className="w-full py-24 px-6 lg:px-[120px] relative z-10 bg-gradient-to-b from-white via-gray-50/60 to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-inter font-medium text-black mb-3">
            <Zap className="w-3.5 h-3.5 text-black" />
            <span>Transparent Credit Model</span>
          </div>
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl text-black tracking-tight mb-4">
            Predictable Pricing That Scales With Intelligence
          </h2>
          <p className="font-fustat font-medium text-lg text-[#505050]">
            No hidden per-seat traps. Pay for the computational volume your team actually runs.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 p-1 rounded-full mt-6 border border-black/5">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-schibsted font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-white text-black shadow-xs' : 'text-gray-500 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full text-xs font-schibsted font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-white text-black shadow-xs' : 'text-gray-500 hover:text-black'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[rgba(90,225,76,0.89)] text-black text-[10px] px-2 py-0.2 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Credit Estimator Slider */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-xl mb-16 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="font-schibsted font-semibold text-sm text-black">
              Estimated Monthly Queries & Uploads:
            </span>
            <span className="font-fustat font-bold text-2xl text-black">
              {creditVolume.toLocaleString()} Credits / mo
            </span>
          </div>

          <input
            type="range"
            min="200"
            max="15000"
            step="100"
            value={creditVolume}
            onChange={(e) => setCreditVolume(Number(e.target.value))}
            className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black mb-6"
          />

          <div className="flex items-center justify-between text-xs font-schibsted text-gray-400 mb-6">
            <span>200 credits (Individual)</span>
            <span>5,000 credits (Growth Team)</span>
            <span>15,000+ credits (Enterprise)</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-black/5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-schibsted text-gray-500 block">Recommended Tier</span>
              <span className="font-fustat font-bold text-xl text-black">{recommendedTier}</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-schibsted text-gray-500 block">Estimated Cost</span>
              <span className="font-fustat font-bold text-2xl text-black">
                ${estimatedPrice}<span className="text-xs font-normal text-gray-500">/month</span>
              </span>
            </div>
            <button
              onClick={() => onSelectPlan(recommendedTier)}
              className="px-5 py-2.5 bg-black text-white text-xs font-schibsted font-semibold rounded-xl hover:bg-black/80 transition-colors cursor-pointer"
            >
              Get Started with {recommendedTier}
            </button>
          </div>
        </div>

        {/* 3 Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 border border-black/10 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="font-fustat font-bold text-xl text-black mb-1">Starter</div>
              <p className="font-schibsted text-xs text-gray-500 mb-4">
                For solo analysts and indie developers prototyping ideas.
              </p>
              <div className="font-fustat font-bold text-4xl text-black mb-6">
                $0<span className="text-xs font-normal text-gray-500 font-schibsted"> / forever</span>
              </div>
              <ul className="space-y-3 text-xs font-schibsted text-gray-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> 450 credits every month</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> CSV & JSON local uploads</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> GPT-4o conversational engine</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Standard export to PNG</li>
              </ul>
            </div>
            <button
              onClick={() => onSelectPlan('Starter')}
              className="mt-8 w-full py-2.5 border border-black text-black font-schibsted text-xs font-semibold rounded-xl hover:bg-black/5 transition-colors cursor-pointer"
            >
              Start Free
            </button>
          </div>

          {/* Pro Analyst (Featured) */}
          <div className="bg-black text-white rounded-2xl p-8 border border-black shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 right-6 bg-[rgba(90,225,76,0.89)] text-black text-[11px] font-schibsted font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="font-fustat font-bold text-xl text-white mb-1">Pro Analyst</div>
              <p className="font-schibsted text-xs text-gray-400 mb-4">
                For high-velocity data teams requiring deep synthesis.
              </p>
              <div className="font-fustat font-bold text-4xl text-white mb-6">
                ${billingCycle === 'annual' ? '23' : '29'}
                <span className="text-xs font-normal text-gray-400 font-schibsted"> / month</span>
              </div>
              <ul className="space-y-3 text-xs font-schibsted text-gray-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[rgba(90,225,76,1)]" /> 5,000 high-speed credits / mo</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[rgba(90,225,76,1)]" /> Direct Postgres & Snowflake sync</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[rgba(90,225,76,1)]" /> Real-time Voice Analysis mode</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[rgba(90,225,76,1)]" /> One-click Notion & PDF export</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[rgba(90,225,76,1)]" /> Priority sub-second queue</li>
              </ul>
            </div>
            <button
              onClick={() => onSelectPlan('Pro Analyst')}
              className="mt-8 w-full py-3 bg-[rgba(90,225,76,0.89)] hover:bg-[rgba(90,225,76,1)] text-black font-schibsted text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
            >
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 border border-black/10 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="font-fustat font-bold text-xl text-black mb-1">Enterprise</div>
              <p className="font-schibsted text-xs text-gray-500 mb-4">
                For organizations demanding custom security & volume.
              </p>
              <div className="font-fustat font-bold text-4xl text-black mb-6">
                ${billingCycle === 'annual' ? '79' : '99'}
                <span className="text-xs font-normal text-gray-500 font-schibsted"> / month</span>
              </div>
              <ul className="space-y-3 text-xs font-schibsted text-gray-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Unlimited credits & transforms</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Dedicated private VPC deployment</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Custom fine-tuned industry models</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> 99.99% uptime SLA + 24/7 Slack support</li>
              </ul>
            </div>
            <button
              onClick={() => onSelectPlan('Enterprise')}
              className="mt-8 w-full py-2.5 bg-black text-white font-schibsted text-xs font-semibold rounded-xl hover:bg-black/80 transition-colors cursor-pointer"
            >
              Contact Enterprise
            </button>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-fustat font-bold text-2xl text-black text-center mb-8">
            Frequently Answered Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-black/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-schibsted font-semibold text-sm text-black cursor-pointer hover:bg-gray-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 font-schibsted text-xs sm:text-sm text-[#505050] leading-relaxed border-t border-black/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
