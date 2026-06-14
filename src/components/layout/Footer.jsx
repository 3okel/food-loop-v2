import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const FOOTER_LOGO_SRC = `${import.meta.env.BASE_URL}food-loop-logo.jpeg`;

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const resources = [
    { path: '/how-it-works', label: t('nav.howItWorks') },
    { path: '/impact', label: t('nav.impact') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/calculator', label: t('nav.calculator') },
    ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={FOOTER_LOGO_SRC}
                alt="FOOD LOOP logo"
                className="h-10 w-auto max-w-[150px] rounded-md object-contain"
              />
              <span className={`font-bold text-lg tracking-wide ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                FOOD LOOP
              </span>
            </div>
            <p className={`text-background/70 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Phone">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Location">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-wider mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className={`text-background/70 hover:text-primary text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-wider mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.resources')}
            </h4>
            <ul className="space-y-3">
              {resources.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className={`text-background/70 hover:text-primary text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-wider mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.connect')}
            </h4>
            <div className="space-y-3 text-sm text-background/70">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@foodloop.jo
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +962 7X XXX XXXX
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                {isRTL ? 'الأردن، عمّان' : 'Amman, Jordan'}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p className={isRTL ? 'font-arabic' : ''}>
            © 2026 FOOD LOOP. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
