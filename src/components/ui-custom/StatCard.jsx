import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function StatCard({ value, label, icon: Icon, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { isRTL } = useLanguage();

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
    >
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      )}
      <p className={`text-3xl sm:text-4xl font-bold text-foreground ${isRTL ? 'font-arabic' : 'font-heading'}`}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className={`text-muted-foreground mt-2 text-sm ${isRTL ? 'font-arabic' : ''}`}>{label}</p>
    </motion.div>
  );
}
