import { Eye, HeartHandshake, Target } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'

export default function About(){
  const { t, isRTL } = useLanguage()
  const items=[['vision',Eye],['mission',Target],['journey',HeartHandshake]]
  const years=[['2024',isRTL?'ولادة الفكرة':'Idea Born',isRTL?'بدأت الفكرة من مشاهدة هدر الخضار والفواكه في الأسواق.':'The idea started from seeing damaged produce wasted in markets.'],['2025',isRTL?'أولى الشراكات':'First Partnerships',isRTL?'بدأنا باستبدال الهدر الغذائي بقيمة زراعية مستدامة.':'We started replacing food loss with sustainable agricultural value.'],['2026',isRTL?'الإطلاق الكامل':'Full Launch',isRTL?'إطلاق FOOD LOOP بمنتجات عضوية وخدمات زراعية في الأردن.':'Launching FOOD LOOP with organic products and services in Jordan.']]
  return <><section className="section section-soft"><div className="container"><SectionHeader title={t('about.title')} subtitle={t('about.subtitle')} /></div></section><section className="section"><div className="container split"><div className="image-card" style={{backgroundImage:"url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1100&q=85')"}}></div><div className="grid">{items.map(([key,Icon])=><div className="value-card" key={key}><div className="service-icon"><Icon/></div><h3>{t(`about.${key}`)}</h3><p>{t(`about.${key}Desc`)}</p></div>)}</div></div></section><section className="section section-soft"><div className="container"><SectionHeader title={isRTL?'رحلتنا':'Our Journey'} /><div className="timeline">{years.map(x=><div className="timeline-item card pad" key={x[0]}><div className="timeline-year">{x[0]}</div><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}</div></div></section></>
}
