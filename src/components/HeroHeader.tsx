import React from 'react';
import { HeroBadge } from './HeroBadge';

export const HeroHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-[34px]">
      <HeroBadge />

      <h1
        id="hero-main-title"
        className="font-fustat font-bold text-[42px] sm:text-[60px] md:text-[80px] leading-none tracking-[-4.8px] text-[#000000] max-w-[900px]"
      >
        Transform Data Quickly
      </h1>

      <p
        id="hero-subtitle"
        className="font-fustat font-medium text-[17px] sm:text-[20px] tracking-[-0.4px] text-[#505050] max-w-[736px] sm:w-[542px] mx-auto leading-normal"
      >
        Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly.
      </p>
    </div>
  );
};
