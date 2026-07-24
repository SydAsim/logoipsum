import React, { useState } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { NavigationBar } from './components/NavigationBar';
import { HeroHeader } from './components/HeroHeader';
import { SearchInputBox } from './components/SearchInputBox';
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
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white font-schibsted antialiased">
      {/* Video Background Layer */}
      <VideoBackground videoUrl={videoUrl} />

      {/* Navigation Bar */}
      <NavigationBar
        onSignUpClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
        onLogInClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
      />

      {/* Main Hero Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 lg:px-[120px] -mt-[50px] my-auto relative z-10">
        {/* Gap between navigation and hero is handled via layout positioning & mt-[60px] relative spacing */}
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

      {/* Subtle Bottom Footer Info */}
      <footer className="w-full px-6 lg:px-[120px] py-4 flex items-center justify-between text-xs text-black/50 font-schibsted z-10">
        <span>© 2026 Logoipsum Inc. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </footer>

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
