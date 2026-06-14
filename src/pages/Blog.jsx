import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import BlogCard from '@/components/ui-custom/BlogCard';
import { blogPosts } from '@/data/mockData';

export default function Blog() {
  const { t, isRTL } = useLanguage();
  const [category, setCategory] = useState('all');

  const categories = ['all', 'sustainability', 'composting', 'agriculture', 'gardening'];
  const filtered = category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('blog.title')} subtitle={t('blog.subtitle')} />
          <Tabs defaultValue="all" onValueChange={setCategory} className="flex justify-center">
            <TabsList className="bg-background flex-wrap h-auto gap-1">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat} className={`capitalize ${isRTL ? 'font-arabic' : ''}`}>
                  {cat === 'all' ? (isRTL ? 'الكل' : 'All') : cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'لا توجد مقالات في هذا التصنيف' : 'No articles in this category'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
