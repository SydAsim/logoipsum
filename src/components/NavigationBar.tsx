import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationBarProps {
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  onSignUpClick,
  onLogInClick,
}) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 lg:px-[120px] py-[16px] flex items-center justify-between relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer select-none">
        <span id="nav-logo" className="font-schibsted font-semibold text-[24px] tracking-[-1.44px] text-black">
          Logoipsum
        </span>
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#platform"
          id="nav-link-platform"
          className="font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:text-black/70 transition-colors"
        >
          Platform
        </a>

        {/* Features Dropdown */}
        <div className="relative">
          <button
            id="nav-link-features-btn"
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            className="font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:text-black/70 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Features
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
          </button>

          {isFeaturesOpen && (
            <div
              id="features-dropdown-menu"
              className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-black/5 py-2 z-30 animate-in fade-in duration-150"
            >
              <a
                href="#analytics"
                className="block px-4 py-2 font-schibsted text-sm text-black hover:bg-black/5 transition-colors"
                onClick={() => setIsFeaturesOpen(false)}
              >
                Data Analytics
              </a>
              <a
                href="#automations"
                className="block px-4 py-2 font-schibsted text-sm text-black hover:bg-black/5 transition-colors"
                onClick={() => setIsFeaturesOpen(false)}
              >
                AI Automations
              </a>
              <a
                href="#integrations"
                className="block px-4 py-2 font-schibsted text-sm text-black hover:bg-black/5 transition-colors"
                onClick={() => setIsFeaturesOpen(false)}
              >
                Integrations
              </a>
            </div>
          )}
        </div>

        <a
          href="#projects"
          id="nav-link-projects"
          className="font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:text-black/70 transition-colors"
        >
          Projects
        </a>

        <a
          href="#community"
          id="nav-link-community"
          className="font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:text-black/70 transition-colors"
        >
          Community
        </a>

        <a
          href="#contact"
          id="nav-link-contact"
          className="font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:text-black/70 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center gap-3">
        {/* Sign Up (transparent background, 82px width) */}
        <button
          id="btn-sign-up"
          onClick={onSignUpClick}
          className="w-[82px] h-[38px] bg-transparent font-schibsted font-medium text-[16px] tracking-[-0.2px] text-black hover:bg-black/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
        >
          Sign Up
        </button>

        {/* Log In (black background, white text, 101px width) */}
        <button
          id="btn-log-in"
          onClick={onLogInClick}
          className="w-[101px] h-[38px] bg-black text-white font-schibsted font-medium text-[16px] tracking-[-0.2px] rounded-full hover:bg-black/80 transition-colors flex items-center justify-center cursor-pointer shadow-sm"
        >
          Log In
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="md:hidden flex items-center">
        <button
          id="btn-mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-black hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-black/10 p-6 flex flex-col gap-4 shadow-xl z-30 md:hidden">
          <a
            href="#platform"
            className="font-schibsted font-medium text-lg text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Platform
          </a>
          <a
            href="#features"
            className="font-schibsted font-medium text-lg text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#projects"
            className="font-schibsted font-medium text-lg text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#community"
            className="font-schibsted font-medium text-lg text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </a>
          <a
            href="#contact"
            className="font-schibsted font-medium text-lg text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="pt-4 border-t border-black/10 flex items-center gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onSignUpClick?.();
              }}
              className="w-[82px] h-[38px] border border-black/20 font-schibsted font-medium text-[16px] text-black rounded-full flex items-center justify-center"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLogInClick?.();
              }}
              className="w-[101px] h-[38px] bg-black text-white font-schibsted font-medium text-[16px] rounded-full flex items-center justify-center"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
