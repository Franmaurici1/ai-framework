import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const navigationLinks = [
  { label: 'Home', href: '/', showArrow: false, isRoute: true },
  { label: 'AI Tools', href: '/ai-tools', showArrow: false, isRoute: true },
  { label: 'DistillGenie', href: '/distillgenie', showArrow: false, isRoute: true },
  { label: 'How I Built This', href: '/built-with-ai', showArrow: false, isRoute: true, isButton: true },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? 'bg-white shadow-none border-b border-[#D8D8DB]'
          : 'bg-white border-b border-[#D8D8DB]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <img
              src="/porsche-design-logo.png"
              alt="Porsche Design Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <div key={link.href} className="flex items-center">
                {link.isButton ? (
                  <button
                    onClick={() => navigate(link.href)}
                    className="px-5 py-2 text-sm font-semibold text-white bg-[#010205] hover:bg-[#212225] transition-colors duration-250 rounded-[4px] tracking-wide"
                  >
                    {link.label}
                  </button>
                ) : link.isRoute ? (
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#535457] hover:text-[#010205] hover:bg-[rgba(148,149,152,0.12)] transition-colors duration-250 rounded-[4px]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-4 py-2 text-sm font-medium text-[#535457] hover:text-[#010205] hover:bg-[rgba(148,149,152,0.12)] transition-colors duration-250 rounded-[4px]"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#010205] hover:bg-[rgba(148,149,152,0.12)] transition-colors duration-250 rounded-[4px]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
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
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#D8D8DB]"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navigationLinks.map((link) => (
                <div key={link.href}>
                  {link.isButton ? (
                    <button
                      onClick={() => {
                        navigate(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm font-semibold text-white bg-[#010205] hover:bg-[#212225] transition-colors duration-250 rounded-[4px]"
                    >
                      {link.label}
                    </button>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-[#535457] hover:text-[#010205] hover:bg-[rgba(148,149,152,0.12)] transition-colors duration-250 rounded-[4px]"
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
                      className="block px-4 py-3 text-sm font-medium text-[#535457] hover:text-[#010205] hover:bg-[rgba(148,149,152,0.12)] transition-colors duration-250 rounded-[4px]"
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
