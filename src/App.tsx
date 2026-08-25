import React, { useState } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { NavigationBar } from './components/NavigationBar';
import { HeroHeader } from './components/HeroHeader';
import { SearchInputBox } from './components/SearchInputBox';
import { LogoTicker } from './components/LogoTicker';
import { PlatformDemo } from './components/PlatformDemo';
import { FeaturesBento } from './components/FeaturesBento';
import { WorkflowShowcase } from './components/WorkflowShowcase';
import { CommunityIntegrations } from './components/CommunityIntegrations';
import { CreditCalculator } from './components/CreditCalculator';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { UpgradeModal } from './components/UpgradeModal';

export default function App() {
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'signup';
  }>({
    isOpen: false,
    mode: 'login',
  });

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const videoUrl =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4';

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white font-schibsted antialiased bg-transparent">
      {/* Top Hero Wrapper with Full Transparent Video Background */}
      <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Transparent Video Background Layer (no white shade overlay) */}
        <VideoBackground videoUrl={videoUrl} />

        {/* Navigation Bar */}
        <NavigationBar
          onSignUpClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
          onLogInClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
        />

        {/* Main Hero Container (-mt-[50px] as specified) */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 lg:px-[120px] -mt-[50px] my-auto relative z-10 py-12">
          <div className="w-full max-w-[1200px] flex flex-col items-center">
            {/* Header Section (Badge, Title, Subtitle with 34px gap) */}
            <HeroHeader />

            {/* Search Box Container (44px gap from header) */}
            <div className="w-full mt-[44px]">
              <SearchInputBox
                onUpgradeClick={() => setIsUpgradeModalOpen(true)}
              />
            </div>
          </div>
        </main>

        {/* Hero Bottom Padding Spacer */}
        <div className="h-10 w-full" />
      </div>

      {/* Full Landing Page Content Sections */}
      <div className="relative z-10 w-full">
        {/* Trusted By Enterprise Logo Ticker */}
        <LogoTicker />

        {/* Interactive Platform Sandbox & Live Analytics */}
        <PlatformDemo />

        {/* Core Architecture & Features Bento Grid */}
        <FeaturesBento />

        {/* 3-Step Project Workflow Pipeline */}
        <WorkflowShowcase />

        {/* Ecosystem Integrations & Verified Testimonials */}
        <CommunityIntegrations />

        {/* Interactive Credit Estimator & Pricing Matrix */}
        <CreditCalculator
          onSelectPlan={(plan) => {
            if (plan.includes('Enterprise')) {
              setAuthModal({ isOpen: true, mode: 'signup' });
            } else {
              setIsUpgradeModalOpen(true);
            }
          }}
        />

        {/* Minimalist Aesthetic Contact / CTA */}
        <ContactCta
          onSignUpClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
        />

        {/* Comprehensive Modern Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </div>
  );
}

