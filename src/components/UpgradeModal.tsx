import React from 'react';
import { X, Check } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-black/10 relative animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[rgba(90,225,76,0.89)] text-black text-xs font-semibold px-2.5 py-0.5 rounded-full font-schibsted">
            Credit Management
          </span>
          <span className="text-xs text-gray-500 font-schibsted">Current balance: 60/450</span>
        </div>

        <h3 className="font-fustat font-bold text-2xl text-black mb-1">
          Upgrade Your Intelligence Limits
        </h3>
        <p className="font-schibsted text-sm text-gray-600 mb-6">
          Unlock unlimited GPT-4o analysis, bulk document uploads, and priority voice processing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Pro Plan */}
          <div className="border-2 border-black rounded-xl p-4 bg-gray-50 flex flex-col justify-between">
            <div>
              <div className="font-fustat font-bold text-lg text-black">Pro Analyst</div>
              <div className="font-fustat font-bold text-2xl text-black mt-1">$29<span className="text-xs font-normal text-gray-500">/mo</span></div>
              <ul className="mt-3 space-y-2 text-xs font-schibsted text-gray-700">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> 5,000 credits/mo</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Unlimited file attachments</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time voice mode</li>
              </ul>
            </div>
            <button
              onClick={() => {
                alert('Plan upgraded successfully to Pro Analyst!');
                onClose();
              }}
              className="mt-4 w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-black/80 transition-colors cursor-pointer"
            >
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col justify-between">
            <div>
              <div className="font-fustat font-bold text-lg text-black">Enterprise</div>
              <div className="font-fustat font-bold text-2xl text-black mt-1">$99<span className="text-xs font-normal text-gray-500">/mo</span></div>
              <ul className="mt-3 space-y-2 text-xs font-schibsted text-gray-700">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Unlimited credits</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Dedicated API key</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Custom AI fine-tuning</li>
              </ul>
            </div>
            <button
              onClick={() => {
                alert('Contacting sales team for Enterprise access!');
                onClose();
              }}
              className="mt-4 w-full py-2 border border-black text-black text-xs font-medium rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
