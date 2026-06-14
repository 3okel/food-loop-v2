import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function ProcessStep({ step, index, total, icon: Icon }) {
  const { isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector Line */}
      {index < total - 1 && (
        <div className={`hidden md:block absolute top-10 ${isRTL ? 'right-10 -left-10' : 'left-10 -right-10'} h-0.5 bg-gradient-to-r from-primary/40 to-primary/10`} />
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Step Number & Icon */}
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-9 h-9 text-primary" />
        </div>

        {/* Step Number Badge */}
        <div className="w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center -mt-8 mb-2 relative z-20">
          {index + 1}
        </div>

        <h3 className={`font-bold text-lg text-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
          {step.title}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed max-w-[200px] ${isRTL ? 'font-arabic' : ''}`}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
