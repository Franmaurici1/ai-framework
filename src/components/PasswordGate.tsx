import { useState, useEffect } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CORRECT_PASSWORD = 'PORSCHE.DISTILLERY';
const SESSION_KEY = 'pd_authenticated';

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticated = sessionStorage.getItem(SESSION_KEY);
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0E0E12] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FBFCFF]"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0E0E12] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/porsche-design-logo.png"
            alt="Porsche Design Logo"
            className="h-7 w-auto brightness-0 invert"
          />
        </div>

        <div className="bg-[#212225] rounded-[8px] p-8 border border-[#404044]">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-[#292934] rounded-[4px] flex items-center justify-center border border-[#404044]">
              <Lock className="w-6 h-6 text-[#AFB0B3]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#FBFCFF] text-center mb-1 font-barlow tracking-wide uppercase">
            Protected Access
          </h1>
          <p className="text-[#88898C] text-sm text-center mb-8">
            Enter your password to continue
          </p>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-[4px] bg-[#0E0E12] border ${
                  error ? 'border-[#FC4040]' : 'border-[#404044]'
                } text-[#FBFCFF] placeholder-[#7E7F82] focus:outline-none focus:ring-2 focus:ring-[#1A44EA] focus:border-transparent transition-all duration-250 text-sm ${
                  error ? 'animate-shake' : ''
                }`}
                autoFocus
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-[#FC4040] text-sm bg-[#3A0F0F] px-4 py-2 rounded-[4px] border border-[#FC4040]/30"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Incorrect password. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-[#FBFCFF] hover:bg-[#AFB0B3] text-[#0E0E12] font-semibold py-3 px-6 rounded-[4px] transition-all duration-250 text-sm tracking-wide"
            >
              Access Site
            </button>
          </form>

          <p className="text-[#7E7F82] text-xs text-center mt-6">
            This site is password protected for authorized users only
          </p>
        </div>
      </motion.div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
