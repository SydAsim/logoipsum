import React from 'react';
import { Star } from 'lucide-react';

export const HeroBadge: React.FC = () => {
  return (
    <div
      id="hero-badge"
      className="inline-flex items-center gap-2.5 p-1 pr-4 bg-white/80 backdrop-blur-md border border-black/5 rounded-full shadow-sm select-none cursor-pointer hover:bg-white/95 transition-all duration-200"
    >
      {/* Dark Badge Segment */}
      <div className="bg-[#0e1311] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-inter text-[14px] font-normal">
        <Star className="w-3.5 h-3.5 fill-white text-white" />
        <span>New</span>
      </div>

      {/* Light Segment */}
      <span className="font-inter font-normal text-[14px] text-black">
        Discover what's possible
      </span>
    </div>
  );
};
