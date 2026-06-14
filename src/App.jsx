import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage.jsx'
import PublicLayout from './components/layout/PublicLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Products from './pages/Products.jsx'
import Impact from './pages/Impact.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Calculator from './pages/Calculator.jsx'
import Partners from './pages/Partners.jsx'
import JoinUs from './pages/JoinUs.jsx'
import Tracker from './pages/Tracker.jsx'
import PageNotFound from './lib/PageNotFound.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
