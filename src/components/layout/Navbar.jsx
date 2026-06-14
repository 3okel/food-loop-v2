import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const links = [
  ['/', 'home'], ['/about', 'about'], ['/how-it-works', 'howItWorks'], ['/products', 'products'],
  ['/impact', 'impact'], ['/services', 'services'], ['/blog', 'blog'], ['/contact', 'contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()
  const location = useLocation()
  const renderLinks = (mobile = false) => links.map(([path, key]) => (
    <Link key={path} to={path} onClick={() => setOpen(false)} className={`nav-link ${location.pathname === path ? 'active' : ''}`}>
      {t(`nav.${key}`)}
    </Link>
  ))
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="FOOD LOOP home"><img src="/food-loop-logo.jpeg" alt="FOOD LOOP logo" /></Link>
        <div className="nav-links">{renderLinks()}</div>
        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLang} aria-label="Toggle language"><Globe size={17}/>{lang === 'ar' ? 'EN' : 'عربي'}</button>
          <Link className="btn btn-primary" to="/join-us">{t('nav.joinUs')}</Link>
          <button className="lang-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
      </div>
      {open && <div className="nav-links mobile">{renderLinks(true)}</div>}
    </nav>
  )
}
