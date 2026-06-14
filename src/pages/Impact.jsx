import { motion } from 'framer-motion';
import { Recycle, Leaf, Sprout, TrendingDown, Users, Factory } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import StatCard from '@/components/ui-custom/StatCard';
import { impactStats, monthlyImpactData } from '@/data/mockData';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Impact() {
  const { t, isRTL } = useLanguage();

  const milestones = [
    { value: '10K+', label: isRTL ? 'كجم خضار وفواكه محولة' : 'kg damaged produce transformed', icon: Recycle },
    { value: '4K+', label: isRTL ? 'كجم سماد منتج' : 'kg compost produced', icon: Leaf },
    { value: '6K+', label: isRTL ? 'شتلة نمت' : 'seedlings grown', icon: Sprout },
    { value: '30K+', label: isRTL ? 'كجم CO₂ تم تجنبه' : 'kg CO₂ avoided', icon: TrendingDown },
    { value: '48', label: isRTL ? 'مزارع مدعوم' : 'farmers supported', icon: Users },
    { value: '95%', label: isRTL ? 'معدل التحويل العضوي' : 'organic conversion rate', icon: Factory },
  ];

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('impact.title')} subtitle={t('impact.subtitle')} />
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {milestones.map((m, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-7 h-7 text-primary" />
                </div>
                <p className={`text-3xl sm:text-4xl font-bold text-foreground mb-1 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{m.value}</p>
                <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={isRTL ? 'النمو الشهري' : 'Monthly Growth'} subtitle={isRTL ? 'تقدمنا خلال العام' : 'Our progress throughout the year'} />

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="p-6 rounded-2xl bg-background border border-border">
              <h3 className={`font-bold text-lg mb-6 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'الخضار والفواكه المحولة (كجم)' : 'Damaged Produce Converted (kg)'}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(80 20% 85%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="waste" stroke="#70E000" fill="#70E000" fillOpacity={0.15} strokeWidth={2} name={isRTL ? 'خضار وفواكه تالفة' : 'Damaged Produce'} />
                  <Area type="monotone" dataKey="compost" stroke="#926C44" fill="#926C44" fillOpacity={0.1} strokeWidth={2} name={isRTL ? 'سماد' : 'Compost'} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="p-6 rounded-2xl bg-background border border-border">
              <h3 className={`font-bold text-lg mb-6 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'إنتاج الشتلات' : 'Seedling Production'}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(80 20% 85%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="seedlings" fill="#70E000" radius={[4, 4, 0, 0]} name={isRTL ? 'شتلات' : 'Seedlings'} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={isRTL ? 'قبل وبعد' : 'Before & After'} subtitle={isRTL ? 'التحول الذي نصنعه' : 'The transformation we create'} />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
              <span className="text-5xl block mb-4">🥬</span>
              <h3 className={`font-bold text-xl mb-2 text-destructive ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'قبل: خضار وفواكه تالفة' : 'Before: Damaged Produce'}
              </h3>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? '12,500+ كجم من الخضروات كانت ستذهب إلى المكبات' : '12,500+ kg of vegetables that would go to landfills'}
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <span className="text-5xl block mb-4">🌱</span>
              <h3 className={`font-bold text-xl mb-2 text-primary ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'بعد: الحياة' : 'After: Life'}
              </h3>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? '4,375 كجم سماد + 6,250 شتلة نامية' : '4,375 kg compost + 6,250 growing seedlings'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
