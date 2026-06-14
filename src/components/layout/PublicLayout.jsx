import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useLanguage } from '@/hooks/useLanguage'

export default function PublicLayout() {
  const { isRTL } = useLanguage()
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      <main className="main"><Outlet /></main>
      <Footer />
    </div>
  )
}
