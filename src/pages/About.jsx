import { motion } from 'framer-motion';
import { Recycle, Leaf, Lightbulb, Heart, Sprout, Globe, Target, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import { coreValues } from '@/data/mockData';

const iconMap = { Recycle, Leaf, Lightbulb, Heart, Sprout, Globe };
const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function About() {
  const { t, lang, isRTL } = useLanguage();

  const timeline = [
    { year: '2024', title: isRTL ? 'ولادة الفكرة' : 'Idea Born', desc: isRTL ? 'بدأت الفكرة من مشاهدة هدر الخضروات في الأسواق' : 'The idea started from witnessing vegetable waste at markets' },
    { year: '2025', title: isRTL ? 'البحث والتطوير' : 'Research & Development', desc: isRTL ? 'تطوير عملية التحويل واختبار طرق التسميد' : 'Developing the conversion process and testing composting methods' },
    { year: '2025', title: isRTL ? 'أول شراكة' : 'First Partnership', desc: isRTL ? 'التعاون مع السوق المركزي لجمع الخضار والفواكه التالفة' : 'Partnering with Central Market for damaged produce collection' },
    { year: '2026', title: isRTL ? 'الإطلاق الكامل' : 'Full Launch', desc: isRTL ? 'إطلاق المنصة والمنتجات للعملاء والمزارعين' : 'Launching platform and products to customers and farmers' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title={t('about.title')} subtitle={t('about.subtitle')} center={false} />
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <h3 className={`font-bold text-lg mb-2 text-destructive ${isRTL ? 'font-arabic' : 'font-heading'}`}>{t('about.problem')}</h3>
                  <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{t('about.problemDesc')}</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className={`font-bold text-lg mb-2 text-primary ${isRTL ? 'font-arabic' : 'font-heading'}`}>{t('about.solution')}</h3>
                  <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{t('about.solutionDesc')}</p>
                </div>
              </div>
            </div>
            <motion.div {...fadeUp} className="rounded-3xl overflow-hidden aspect-square">
              <img src="https://media.base44.com/images/public/69ded4b13399ce081fa4083c/e9ca65855_generated_4cc72876.png" alt="Sustainable farming" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="p-8 sm:p-10 rounded-3xl bg-foreground text-background">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{t('about.vision')}</h3>
              <p className={`text-background/70 leading-relaxed text-lg ${isRTL ? 'font-arabic' : ''}`}>{t('about.visionDesc')}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="p-8 sm:p-10 rounded-3xl bg-primary/10 border border-primary/20">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{t('about.mission')}</h3>
              <p className={`text-muted-foreground leading-relaxed text-lg ${isRTL ? 'font-arabic' : ''}`}>{t('about.missionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={isRTL ? 'قيمنا الأساسية' : 'Core Values'} subtitle={isRTL ? 'المبادئ التي توجه عملنا' : 'The principles that guide our work'} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => {
              const IconComp = iconMap[val.icon];
              return (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{lang === 'ar' ? val.titleAr : val.title}</h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{lang === 'ar' ? val.descAr : val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={isRTL ? 'رحلتنا' : 'Our Journey'} subtitle={isRTL ? 'من فكرة إلى واقع' : 'From idea to reality'} />
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }} className={`flex gap-6 ${i < timeline.length - 1 ? 'pb-10' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">{item.year}</div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className={`font-bold text-lg mb-1 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{item.title}</h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
