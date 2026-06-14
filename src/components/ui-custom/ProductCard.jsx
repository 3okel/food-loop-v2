import { Eye, ShoppingCart } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
export default function ProductCard({ product }) {
  const { lang, t } = useLanguage()
  return <article className="product-card">
    <div className="product-img" style={{backgroundImage:`url(${product.image})`}}><span className="badge">{lang === 'ar' ? product.badgeAr : product.badge}</span></div>
    <div className="product-body"><h3>{lang === 'ar' ? product.titleAr : product.title}</h3><p>{lang === 'ar' ? product.descAr : product.desc}</p><div><span>{product.meta} / </span><span className="price">{product.price}</span></div><div className="card-actions"><button className="icon-btn" aria-label={t('products.view')}><Eye size={18}/></button><button className="btn btn-primary"><ShoppingCart size={18}/>{t('products.order')}</button></div></div>
  </article>
}
