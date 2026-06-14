import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Sprout, TrendingDown, ArrowRight, ArrowLeft, Play, Truck, FlaskConical, Scissors, Flower2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import StatCard from '@/components/ui-custom/StatCard';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import ProductCard from '@/components/ui-custom/ProductCard';
import { impactStats, compostProducts, seedlingProducts, partners } from '@/data/mockData';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export default function Home() {
  const { t, isRTL } = useLanguage();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sustainabilityVideoUrl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/69ded4b13399ce081fa4083c/4106553ec_generated_25045b3f.png" alt="Seedling growing from soil" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <span className={`text-background font-bold text-sm uppercase tracking-widest ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'الدورة الغذائية المستدامة' : 'Sustainable Food Loop'}
              </span>
            </div>

            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-background leading-none mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
              {t('hero.title1')}
            </h1>
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-background leading-none mb-8 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
              {t('hero.title2')}
            </h1>

            <p className={`text-background text-lg sm:text-xl leading-relaxed mb-10 max-w-lg ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <GrowthButton primary>{t('hero.cta1')}</GrowthButton>
              </Link>
              <Link to="/partners">
                <GrowthButton primary={false} className="border-background text-background hover:bg-background hover:text-foreground">
                  {t('hero.cta2')}
                </GrowthButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard value={impactStats.vegetablesRescued} label={t('stats.rescued')} icon={Recycle} suffix="+" />
            <StatCard value={impactStats.compostProduced} label={t('stats.compost')} icon={Leaf} suffix=" kg" />
            <StatCard value={impactStats.seedlingsGrown} label={t('stats.seedlings')} icon={Sprout} suffix="+" />
            <StatCard value={impactStats.wasteReduced} label={t('stats.reduced')} icon={TrendingDown} suffix=" kg" />
          </div>
        </div>
      </section>

      {/* Mini How It Works */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { icon: Truck, title: t('howItWorks.step1'), desc: t('howItWorks.step1desc') },
              { icon: Scissors, title: t('howItWorks.step2'), desc: t('howItWorks.step2desc') },
              { icon: Recycle, title: t('howItWorks.step3'), desc: t('howItWorks.step3desc') },
              { icon: FlaskConical, title: t('howItWorks.step4'), desc: t('howItWorks.step4desc') },
              { icon: Flower2, title: t('howItWorks.step5'), desc: t('howItWorks.step5desc') },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="text-center relative">
                {i < 4 && <div className={`hidden md:block absolute top-8 ${isRTL ? 'right-[60%]' : 'left-[60%]'} w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent`} />}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mx-auto -mt-5 mb-3 relative z-20">{i + 1}</div>
                <h3 className={`font-bold text-sm mb-1 ${isRTL ? 'font-arabic' : ''}`}>{step.title}</h3>
                <p className={`text-muted-foreground text-xs leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <GrowthButton primary={false}>
                {t('common.learnMore')}
                <Arrow className="w-4 h-4" />
              </GrowthButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={isRTL ? 'شاهد قصتنا' : 'Watch Our Story'}
            subtitle={isRTL ? 'رحلة التحويل من الخضار التالفة إلى قيمة زراعية' : 'The transformation journey from damaged produce to agricultural value'}
          />
          <motion.div
            {...fadeUp}
            className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden bg-muted border border-border cursor-pointer"
            onClick={() => !videoPlaying && setVideoPlaying(true)}
          >
            {videoPlaying ? (
              <video
                src={sustainabilityVideoUrl}
                title={isRTL ? 'فيديو الاستدامة في الطبيعة' : 'Sustainability in nature video'}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <>
                <img src="https://media.base44.com/images/public/69ded4b13399ce081fa4083c/e9ca65855_generated_4cc72876.png" alt={isRTL ? 'فيديو عن الاستدامة في الطبيعة' : 'Video about sustainability in nature'} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setVideoPlaying(true); }}
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-primary/30"
                    aria-label={isRTL ? 'تشغيل الفيديو' : 'Play video'}
                  >
                    <Play className="w-8 h-8 text-primary-foreground fill-current" />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('products.title')} subtitle={t('products.subtitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...compostProducts.slice(0, 2), ...seedlingProducts.slice(0, 2)].map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} type={i < 2 ? 'compost' : 'seedling'} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <GrowthButton primary={false}>
                {t('common.viewAll')}
                <Arrow className="w-4 h-4" />
              </GrowthButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Value */}
      <section className="py-20 sm:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title={isRTL ? 'القيمة البيئية' : 'Environmental Value'}
            subtitle={isRTL ? 'كل خضروة تالفة هي فرصة لبداية جديدة' : 'Every damaged vegetable is an opportunity for a new beginning'}
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: '🥬', title: isRTL ? 'تقليل الهدر' : 'Reduce Food Loss', desc: isRTL ? 'تحويل الخضار والفواكه التالفة إلى قيمة زراعية بدلاً من إرسالها للمكبات' : 'Turn damaged produce into agricultural value instead of sending it to landfills' },
              { emoji: '🌍', title: isRTL ? 'حماية الكوكب' : 'Protect Planet', desc: isRTL ? 'تقليل انبعاثات غازات الاحتباس الحراري بشكل كبير' : 'Significantly reduce greenhouse gas emissions' },
              { emoji: '🌾', title: isRTL ? 'دعم الزراعة' : 'Support Farming', desc: isRTL ? 'توفير سماد عضوي ميسور التكلفة للمزارعين' : 'Provide affordable organic fertilizer to farmers' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="p-8 rounded-2xl bg-background/5 border border-background/10">
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className={`font-bold text-xl mb-3 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{item.title}</h3>
                <p className={`text-background/70 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-muted-foreground text-sm mb-8 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'شركاؤنا في الاستدامة' : 'Our Sustainability Partners'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map(p => (
              <div key={p.id} className="px-6 py-3 rounded-xl bg-muted text-muted-foreground font-bold text-sm">
                {isRTL ? p.nameAr : p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="relative rounded-3xl overflow-hidden bg-primary p-12 sm:p-16 text-center">
            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'كن جزءاً من التغيير' : 'Be Part of the Change'}
              </h2>
              <p className={`text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'انضم إلى حركتنا وساعد في تحويل الخضار التالفة إلى حياة جديدة' : 'Join our movement and help transform damaged produce into new life'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/join-us">
                  <GrowthButton primary={false} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    {t('nav.joinUs')}
                  </GrowthButton>
                </Link>
                <Link to="/calculator">
                  <GrowthButton primary={false} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    {t('nav.calculator')}
                  </GrowthButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
