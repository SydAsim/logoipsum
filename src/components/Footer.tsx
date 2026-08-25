import React from 'react';
import { Activity, ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f8f8f8] border-t border-black/5 pt-16 pb-12 px-6 lg:px-[120px] text-black z-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand & Description (Spans 2 cols on md) */}
          <div className="col-span-2 space-y-4">
            <span className="font-schibsted font-semibold text-2xl tracking-[-1.44px] text-black block">
              Logoipsum
            </span>
            <p className="font-schibsted text-sm text-[#505050] max-w-sm leading-relaxed">
              The next-generation intelligence layer for enterprise data. Transform raw, unorganized metrics into executive clarity and predictive workflows in seconds.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/10 text-xs font-schibsted text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h5 className="font-fustat font-bold text-sm text-black uppercase tracking-wider">
              Product
            </h5>
            <ul className="space-y-2 text-xs font-schibsted text-[#505050]">
              <li><a href="#platform" className="hover:text-black transition-colors">Vector Sandbox</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">Conversational SQL</a></li>
              <li><a href="#projects" className="hover:text-black transition-colors">Automated Reports</a></li>
              <li><a href="#community" className="hover:text-black transition-colors">Native Connectors</a></li>
              <li><a href="#pricing" className="hover:text-black transition-colors">Credit Pricing</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h5 className="font-fustat font-bold text-sm text-black uppercase tracking-wider">
              Resources
            </h5>
            <ul className="space-y-2 text-xs font-schibsted text-[#505050]">
              <li><a href="#docs" className="hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-black transition-colors">API References</a></li>
              <li><a href="#guides" className="hover:text-black transition-colors">Cohort Analysis Guide</a></li>
              <li><a href="#changelog" className="hover:text-black transition-colors">Product Changelog</a></li>
              <li><a href="#community" className="hover:text-black transition-colors">Discord Community</a></li>
            </ul>
          </div>

          {/* Column 3: Security & Company */}
          <div className="space-y-3">
            <h5 className="font-fustat font-bold text-sm text-black uppercase tracking-wider">
              Company
            </h5>
            <ul className="space-y-2 text-xs font-schibsted text-[#505050]">
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-black transition-colors">Careers <span className="bg-black text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold ml-1">Hiring</span></a></li>
              <li><a href="#security" className="hover:text-black transition-colors">SOC2 Compliance</a></li>
              <li><a href="#privacy" className="hover:text-black transition-colors">Zero-Retention Policy</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-schibsted text-gray-500">
          <div>
            © {new Date().getFullYear()} Logoipsum Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#security" className="hover:text-black transition-colors">Security Overview</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
