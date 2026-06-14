import { motion } from 'framer-motion';
import { Truck, Scissors, Recycle, FlaskConical, Flower2, ArrowDown, Check, Leaf, Droplets, Sun } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import { Link } from 'react-router-dom';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function HowItWorks() {
  const { t, isRTL } = useLanguage();

  const steps = [
    { icon: Truck, title: t('howItWorks.step1'), desc: t('howItWorks.step1desc'), input: isRTL ? 'خضروات تالفة' : 'Damaged vegetables', output: isRTL ? 'مواد خام مجمعة' : 'Collected raw material', benefit: isRTL ? 'تحويل الخضار التالفة بعيداً عن المكبات' : 'Diverting damaged produce from landfills', color: 'bg-red-500/10 text-red-600' },
    { icon: Scissors, title: t('howItWorks.step2'), desc: t('howItWorks.step2desc'), input: isRTL ? 'مواد خام مختلطة' : 'Mixed raw material', output: isRTL ? 'مواد مصنفة ونظيفة' : 'Sorted & clean material', benefit: isRTL ? 'ضمان جودة المخرجات' : 'Ensuring output quality', color: 'bg-orange-500/10 text-orange-600' },
    { icon: Recycle, title: t('howItWorks.step3'), desc: t('howItWorks.step3desc'), input: isRTL ? 'مواد عضوية مصنفة' : 'Sorted organic matter', output: isRTL ? 'سماد غني بالمغذيات' : 'Nutrient-rich compost', benefit: isRTL ? 'إنتاج سماد طبيعي 100%' : '100% natural fertilizer', color: 'bg-yellow-500/10 text-yellow-600' },
    { icon: FlaskConical, title: t('howItWorks.step4'), desc: t('howItWorks.step4desc'), input: isRTL ? 'بقايا خضروات صالحة' : 'Viable vegetable remains', output: isRTL ? 'بذور محفوظة' : 'Preserved seeds', benefit: isRTL ? 'الحفاظ على التنوع الجيني' : 'Preserving genetic diversity', color: 'bg-emerald-500/10 text-emerald-600' },
    { icon: Flower2, title: t('howItWorks.step5'), desc: t('howItWorks.step5desc'), input: isRTL ? 'بذور مستخلصة' : 'Extracted seeds', output: isRTL ? 'شتلات جاهزة للزراعة' : 'Ready-to-plant seedlings', benefit: isRTL ? 'حياة جديدة من الخضار التالفة' : 'New life from damaged produce', color: 'bg-primary/10 text-primary' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i}>
                <motion.div {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                    {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-3" />}
                  </div>

                  <div className="pb-12">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {isRTL ? `الخطوة ${i + 1}` : `Step ${i + 1}`}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{step.title}</h3>
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${isRTL ? 'font-arabic' : ''}`}>{step.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-card border border-border">
                        <p className={`text-xs text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>{isRTL ? 'المدخل' : 'Input'}</p>
                        <p className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>{step.input}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-card border border-border">
                        <p className={`text-xs text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>{isRTL ? 'المخرج' : 'Output'}</p>
                        <p className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>{step.output}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <p className={`text-xs text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>{isRTL ? 'الفائدة البيئية' : 'Eco Benefit'}</p>
                        <p className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : ''}`}>{step.benefit}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Infographic */}
      <section className="py-20 sm:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title={isRTL ? 'ملخص الرحلة' : 'The Journey Summary'}
            subtitle={isRTL ? 'من خضروات تالفة إلى حياة جديدة' : 'From damaged vegetables to new life'}
            light
          />
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { emoji: '🥬', label: isRTL ? 'خضروات تالفة' : 'Damaged Vegetables' },
              { emoji: '→', isArrow: true },
              { emoji: '♻️', label: isRTL ? 'التحويل' : 'Transformation' },
              { emoji: '→', isArrow: true },
              { emoji: '🌱', label: isRTL ? 'سماد + شتلات' : 'Compost + Seedlings' },
              { emoji: '→', isArrow: true },
              { emoji: '🌍', label: isRTL ? 'كوكب أخضر' : 'Green Planet' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                {item.isArrow ? (
                  <div className="text-3xl text-primary hidden sm:block">{isRTL ? '←' : '→'}</div>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">{item.emoji}</span>
                    <span className={`text-sm text-background/70 ${isRTL ? 'font-arabic' : ''}`}>{item.label}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
            {isRTL ? 'هل تريد رؤية نتائجنا؟' : 'Want to See Our Results?'}
          </h2>
          <p className={`text-muted-foreground mb-8 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'تتبع رحلة التحويل أو احسب أثرك البيئي' : 'Track the transformation journey or calculate your environmental impact'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tracker"><GrowthButton>{t('nav.tracker')}</GrowthButton></Link>
            <Link to="/calculator"><GrowthButton primary={false}>{t('nav.calculator')}</GrowthButton></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
