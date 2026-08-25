import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface ContactCtaProps {
  onSignUpClick?: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 900);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 lg:px-[120px] relative z-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-14 border border-black shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-inter font-medium text-white mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Instant Zero-Setup Onboarding</span>
          </div>

          {/* Main Title */}
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-2xl leading-none mb-6">
            Transform Your First Dataset in Under 60 Seconds
          </h2>

          <p className="font-fustat font-medium text-base sm:text-lg text-gray-400 max-w-xl mb-10">
            Join over 10,000 forward-thinking analysts and engineers building faster, smarter analytics workflows.
          </p>

          {/* Email Capture Form */}
          {submitted ? (
            <div className="bg-emerald-950/80 border border-emerald-500/30 rounded-2xl p-6 text-center max-w-md animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-fustat font-bold text-lg mb-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You're on the Fast-Track List!</span>
              </div>
              <p className="text-xs font-schibsted text-gray-300">
                Check your inbox for your instant workspace invite link and complimentary 500 bonus credits.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15 shadow-lg"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email address..."
                className="w-full bg-transparent px-4 py-2.5 text-white placeholder-gray-400 font-schibsted text-sm focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-gray-100 text-black font-schibsted font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Get Access</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-schibsted text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free 450 monthly credits
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero data retention
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
