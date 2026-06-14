import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';

const NAVBAR_LOGO_SRC = `${import.meta.env.BASE_URL}food-loop-logo.jpeg`;

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/how-it-works', key: 'howItWorks' },
  { path: '/products', key: 'products' },
  { path: '/impact', key: 'impact' },
  { path: '/services', key: 'services' },
  { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLang, lang, isRTL } = useLanguage();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="FOOD LOOP home">
            <img
              src={NAVBAR_LOGO_SRC}
              alt="FOOD LOOP logo"
              className="h-10 w-auto max-w-[145px] rounded-md object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${location.pathname === link.path 
                    ? 'text-primary-foreground bg-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'}
                  ${isRTL ? 'font-arabic' : 'font-body'}`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <Link
              to="/join-us"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              {t('nav.joinUs')}
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${location.pathname === link.path
                      ? 'bg-foreground text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'}
                    ${isRTL ? 'font-arabic' : 'font-body'}`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
              <Link
                to="/join-us"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold text-center mt-3"
              >
                {t('nav.joinUs')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
