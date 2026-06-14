import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function SectionHeader({ title, subtitle, light = false, center = true }) {
  const { isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight
        ${light ? 'text-background' : 'text-foreground'}
        ${isRTL ? 'font-arabic' : 'font-heading'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed
          ${center ? 'mx-auto' : ''}
          ${light ? 'text-background/70' : 'text-muted-foreground'}
          ${isRTL ? 'font-arabic' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
