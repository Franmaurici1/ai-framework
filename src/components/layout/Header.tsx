import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Menu } from 'lucide-react';

const navigationLinks = [
  { label: 'Home', href: '/', showArrow: false, isRoute: true },
  { label: 'AI tools', href: '/ai-tools', showArrow: false, isRoute: true },
  { label: 'DistillGenie', href: '/distillgenie', showArrow: false, isRoute: true },
  { label: 'How I built this with AI', href: '/built-with-ai', showArrow: false, isRoute: true, isButton: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-3"
          >
            <img
              src="/uatplogo.png"
              alt="UATP Logo"
              className="h-12 w-auto"
            />
            <span className="text-3xl font-bold text-uatp-navy leading-tight">
              AI Framework
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <div key={link.href} className="flex items-center">
                {link.isButton ? (
                  <button
                    onClick={() => navigate(link.href)}
                    className="px-4 py-2 text-sm font-medium text-white bg-uatp-teal hover:bg-teal-600 transition-colors rounded-md shadow-sm"
                  >
                    {link.label}
                  </button>
                ) : link.isRoute ? (
                  <Link
                    to={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-uatp-teal transition-colors rounded-md hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-uatp-teal transition-colors rounded-md hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                )}
                {link.showArrow && (
                  <ArrowRight className="w-4 h-4 text-uatp-teal mx-1" />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-uatp-navy hover:text-uatp-teal transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigationLinks.map((link) => (
                <div key={link.href}>
                  {link.isButton ? (
                    <button
                      onClick={() => {
                        navigate(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-white bg-uatp-teal hover:bg-teal-600 transition-colors rounded-md"
                    >
                      {link.label}
                    </button>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-uatp-teal hover:bg-gray-50 transition-colors rounded-md"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        scrollToSection(e, link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-uatp-teal hover:bg-gray-50 transition-colors rounded-md"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
