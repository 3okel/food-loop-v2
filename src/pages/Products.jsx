import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import ProductCard from '@/components/ui-custom/ProductCard';
import { compostProducts, seedlingProducts } from '@/data/mockData';

export default function Products() {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const allProducts = [
    ...compostProducts.map(p => ({ ...p, type: 'compost' })),
    ...seedlingProducts.map(p => ({ ...p, type: 'seedling' }))
  ];

  const filtered = activeTab === 'all' ? allProducts 
    : allProducts.filter(p => p.type === activeTab);

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('products.title')} subtitle={t('products.subtitle')} />
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="flex justify-center">
            <TabsList className="bg-background">
              <TabsTrigger value="all" className={isRTL ? 'font-arabic' : ''}>{isRTL ? 'الكل' : 'All'}</TabsTrigger>
              <TabsTrigger value="compost" className={isRTL ? 'font-arabic' : ''}>{t('products.compost')}</TabsTrigger>
              <TabsTrigger value="seedling" className={isRTL ? 'font-arabic' : ''}>{t('products.seedlings')}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} type={product.type} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={isRTL ? 'لماذا منتجاتنا' : 'Why Our Products'}
            subtitle={isRTL ? 'منتجات عضوية 100% من مصادر مستدامة' : '100% organic products from sustainable sources'}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🌿', title: isRTL ? 'عضوي 100%' : '100% Organic', desc: isRTL ? 'بدون مواد كيميائية أو إضافات صناعية' : 'No chemicals or artificial additives' },
              { emoji: '♻️', title: isRTL ? 'مستدام' : 'Sustainable', desc: isRTL ? 'مصنوع من مواد كانت ستُهدر' : 'Made from materials that would have been wasted' },
              { emoji: '🧑‍🌾', title: isRTL ? 'للمزارعين والهواة' : 'For Farmers & Hobbyists', desc: isRTL ? 'مناسب للمزارع الكبيرة والحدائق المنزلية' : 'Suitable for large farms and home gardens' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background border border-border"
              >
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{item.title}</h3>
                <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
