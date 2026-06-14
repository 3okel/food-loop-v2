import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import StatCard from '@/components/ui-custom/StatCard.jsx'
import ProductCard from '@/components/ui-custom/ProductCard.jsx'
import ProcessStep from '@/components/ui-custom/ProcessStep.jsx'
import VideoPlayer from '@/components/ui-custom/VideoPlayer.jsx'
import { heroStats, processSteps, products } from '@/data/mockData'

export default function Home(){
  const { t, isRTL, lang } = useLanguage()
  return <>
    <section className="hero"><div className="hero-content"><div className="eyebrow">{t('hero.eyebrow')}</div><h1>{t('hero.title1')}<span className="highlight">{t('hero.title2')}</span></h1><p>{t('hero.subtitle')}</p><div className="hero-actions"><Link to="/products" className="btn btn-primary">● {t('hero.cta1')}</Link><Link to="/contact" className="btn btn-outline">● {t('hero.cta2')}</Link></div></div></section>
    <section className="section"><div className="container grid grid-4">{heroStats.map(s=><StatCard key={s.key} value={s.value} label={t(`stats.${s.key}`)} />)}</div></section>
    <section className="section section-soft"><div className="container"><SectionHeader title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} /> <div className="grid grid-3">{processSteps.slice(0,3).map((step,i)=><ProcessStep key={step.title} index={i+1} title={lang==='ar'?step.titleAr:step.title} desc={lang==='ar'?step.descAr:step.desc}/>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeader title={isRTL?'فيديو الاستدامة في الطبيعة':'Sustainability in Nature'} subtitle={isRTL?'اضغط على زر التشغيل لمشاهدة الفيديو.':'Click the play button to watch the video.'}/><VideoPlayer/></div></section>
    <section className="section section-soft"><div className="container"><SectionHeader title={t('products.title')} subtitle={t('products.subtitle')} /> <div className="grid grid-4">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div><div style={{textAlign:'center',marginTop:30}}><Link className="btn btn-primary" to="/products">{isRTL?'عرض كل المنتجات':'View all products'} {isRTL?<ArrowLeft size={18}/>:<ArrowRight size={18}/>}</Link></div></div></section>
  </>
}
