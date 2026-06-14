import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export default function Footer() {
  const { t, isRTL } = useLanguage()
  const quick = [['/', 'home'], ['/about', 'about'], ['/products', 'products'], ['/services', 'services'], ['/contact', 'contact']]
  const resources = [['/how-it-works', 'howItWorks'], ['/impact', 'impact'], ['/blog', 'blog'], ['/calculator', 'calculator'], ['/partners', 'partners']]
  const item = ([path, key]) => <li key={path}><Link to={path}>{t(`nav.${key}`)}</Link></li>
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/food-loop-logo.jpeg" alt="FOOD LOOP logo" />
            <p>{t('footer.tagline')}</p>
          </div>
          <div><h4>{t('footer.quickLinks')}</h4><ul>{quick.map(item)}</ul></div>
          <div><h4>{t('footer.resources')}</h4><ul>{resources.map(item)}</ul></div>
          <div>
            <h4>{t('footer.connect')}</h4>
            <div className="info-list">
              <a className="info-item" href="mailto:info@foodloop.jo"><Mail size={18}/> info@foodloop.jo</a>
              <a className="info-item" href="tel:+962790000000"><Phone size={18}/> +962 79 000 0000</a>
              <span className="info-item"><MapPin size={18}/> {isRTL ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 FOOD LOOP. {t('footer.rights')}</div>
      </div>
    </footer>
  )
}
