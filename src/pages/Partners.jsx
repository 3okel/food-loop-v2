import { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Building2, Tractor, FlaskConical, Landmark, Check, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import { partners } from '@/data/mockData';
import { toast } from 'sonner';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Partners() {
  const { t, lang, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { icon: Handshake, title: isRTL ? 'شراكة مستدامة' : 'Sustainable Partnership', desc: isRTL ? 'بناء علاقة طويلة الأمد مبنية على القيم المشتركة' : 'Build a long-term relationship based on shared values' },
    { icon: Building2, title: isRTL ? 'قيمة اجتماعية' : 'Social Value', desc: isRTL ? 'تعزيز صورتكم كشركة مسؤولة بيئياً' : 'Enhance your image as an environmentally responsible organization' },
    { icon: Tractor, title: isRTL ? 'منتجات مجانية أو مخفضة' : 'Free or Discounted Products', desc: isRTL ? 'الحصول على سماد وشتلات بأسعار خاصة' : 'Get compost and seedlings at special partner prices' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(isRTL ? 'تم إرسال طلبك بنجاح!' : 'Your request has been sent successfully!');
  };

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('partners.title')} subtitle={t('partners.subtitle')} />
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('partners.whyPartner')} subtitle={isRTL ? 'فوائد الشراكة معنا' : 'Benefits of partnering with us'} />
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{b.title}</h3>
                <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={isRTL ? 'شركاؤنا الحاليون' : 'Current Partners'} />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map(p => (
              <div key={p.id} className="px-8 py-4 rounded-2xl bg-background border border-border text-center">
                <p className="text-2xl mb-1">🤝</p>
                <p className={`font-bold text-sm ${isRTL ? 'font-arabic' : ''}`}>{lang === 'ar' ? p.nameAr : p.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('partners.becomePartner')} subtitle={isRTL ? 'املأ النموذج وسنتواصل معك' : 'Fill the form and we\'ll get in touch'} />

          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-12 rounded-2xl bg-primary/10 border border-primary/20">
              <Check className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'شكراً لاهتمامك!' : 'Thank you for your interest!'}
              </h3>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'سنتواصل معك قريباً' : 'We\'ll be in touch soon'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder={isRTL ? 'الاسم' : 'Name'} required className={isRTL ? 'font-arabic' : ''} />
                <Input placeholder={isRTL ? 'اسم المنظمة' : 'Organization'} required className={isRTL ? 'font-arabic' : ''} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'} required className={isRTL ? 'font-arabic' : ''} />
                <Input type="tel" placeholder={isRTL ? 'الهاتف' : 'Phone'} className={isRTL ? 'font-arabic' : ''} />
              </div>
              <Select>
                <SelectTrigger className={isRTL ? 'font-arabic' : ''}>
                  <SelectValue placeholder={isRTL ? 'نوع الشراكة' : 'Partnership Type'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market">{isRTL ? 'سوق / تجزئة' : 'Market / Retail'}</SelectItem>
                  <SelectItem value="farm">{isRTL ? 'مزرعة' : 'Farm'}</SelectItem>
                  <SelectItem value="company">{isRTL ? 'شركة' : 'Company'}</SelectItem>
                  <SelectItem value="institution">{isRTL ? 'مؤسسة حكومية' : 'Government Institution'}</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder={isRTL ? 'أخبرنا عن اهتمامك بالشراكة' : 'Tell us about your interest in partnering'} rows={4} className={isRTL ? 'font-arabic' : ''} />
              <GrowthButton type="submit" className="w-full justify-center">
                <Send className="w-4 h-4" />
                {isRTL ? 'إرسال الطلب' : 'Submit Request'}
              </GrowthButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
