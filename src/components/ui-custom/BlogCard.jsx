import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function BlogCard({ post, index = 0 }) {
  const { t, lang, isRTL } = useLanguage();

  const title = lang === 'ar' ? post.titleAr : post.title;
  const excerpt = lang === 'ar' ? post.excerptAr : post.excerpt;
  const imageAlt = lang === 'ar' ? post.imageAltAr : post.imageAlt;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

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
          src={post.image}
          alt={imageAlt || title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <Badge variant="secondary" className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-primary/90 text-primary-foreground`}>
          {post.category}
        </Badge>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} {t('blog.minRead')}
          </span>
        </div>
        <h3 className={`font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-heading'}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 ${isRTL ? 'font-arabic' : ''}`}>
          {excerpt}
        </p>
        <button className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
          {t('blog.readMore')}
          <Arrow className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
