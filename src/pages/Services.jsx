import { Package, Sprout, Truck, Wheat } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import { services } from '@/data/mockData'
export default function Services(){const {t,lang}=useLanguage(); const icons=[Package,Sprout,Truck,Wheat]; return <section className="section"><div className="container"><SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} /><div className="grid grid-4">{services.map((s,i)=>{const Icon=icons[i];return <div className="card pad" key={s.title}><div className="service-icon"><Icon/></div><h3>{lang==='ar'?s.titleAr:s.title}</h3><p>{lang==='ar'?s.descAr:s.desc}</p><button className="btn btn-primary">{t('services.request')}</button></div>})}</div></div></section>}
