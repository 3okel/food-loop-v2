import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import ProductCard from '@/components/ui-custom/ProductCard.jsx'
import { products } from '@/data/mockData'
import { useLanguage } from '@/hooks/useLanguage'
export default function Products(){const {t}=useLanguage();return <section className="section"><div className="container"><SectionHeader title={t('products.title')} subtitle={t('products.subtitle')} /><div className="grid grid-4">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></div></section>}
