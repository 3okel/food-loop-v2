import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0, type = 'compost' }) {
  const { t, lang, isRTL } = useLanguage();

  const name = lang === 'ar' ? product.nameAr : product.name;
  const description = lang === 'ar' ? product.descriptionAr : product.description;
  const imageAlt = lang === 'ar' ? product.imageAltAr : product.imageAlt;
  const statusLabel = product.status === 'available' ? t('products.available') 
    : product.status === 'coming_soon' ? t('products.comingSoon') : t('products.inStock');
  const statusColor = product.status === 'available' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={product.image}
          alt={imageAlt || name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <Badge className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} ${statusColor} shadow-sm`}>
          {statusLabel}
        </Badge>
      </div>

      <div className="p-5">
        <h3 className={`font-bold text-lg text-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
          {name}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
          {description}
        </p>

        {product.price && (
          <p className="text-xl font-bold text-foreground mb-4">
            ${product.price} <span className="text-sm text-muted-foreground font-normal">/ {product.unit}</span>
          </p>
        )}

        {product.season && (
          <p className={`text-xs text-muted-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {product.season} · {product.growthTime}
          </p>
        )}

        <div className="flex gap-2">
          <Link
            to="/services"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:shadow-lg transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            {t('products.orderNow')}
          </Link>
          <button className="px-4 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
