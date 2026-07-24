import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(mode === 'login' ? 'Successfully logged in!' : 'Account created successfully!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-black/10 relative animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-fustat font-bold text-2xl text-black mb-1">
          {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
        </h3>
        <p className="font-schibsted text-sm text-gray-500 mb-6">
          {mode === 'login'
            ? 'Log in to access your data transformation dashboard.'
            : 'Sign up to start analyzing data in seconds.'}
        </p>

        {successMsg ? (
          <div className="p-4 bg-emerald-50 text-emerald-700 font-schibsted font-medium text-sm rounded-xl text-center">
            {successMsg}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-schibsted">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-medium rounded-xl text-sm hover:bg-black/80 transition-colors cursor-pointer mt-2"
            >
              {mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs text-gray-600 hover:text-black font-medium underline cursor-pointer"
              >
                {mode === 'login'
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Log in'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
