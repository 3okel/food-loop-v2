import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tractor, Package, Heart, Check, Send, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import { toast } from 'sonner';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function JoinUs() {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const audiences = [
    {
      icon: Tractor,
      title: t('joinUs.farmers'),
      benefits: isRTL
        ? ['الحصول على سماد مجاني أو مخفض', 'دعم تقني للزراعة المستدامة', 'أولوية في الشتلات الجديدة']
        : ['Get free or discounted compost', 'Technical support for sustainable farming', 'Priority access to new seedlings'],
    },
    {
      icon: Package,
      title: t('joinUs.suppliers'),
      benefits: isRTL
        ? ['تحويل الخضار والفواكه التالفة إلى قيمة', 'تقليل تكاليف التخلص من الهدر', 'تعزيز صورتك البيئية']
        : ['Convert damaged produce into value', 'Reduce disposal costs', 'Enhance your environmental image'],
    },
    {
      icon: Heart,
      title: t('joinUs.volunteers'),
      benefits: isRTL
        ? ['المساهمة في التغيير البيئي', 'اكتساب مهارات في الزراعة المستدامة', 'شهادات وخبرة عملية']
        : ['Contribute to environmental change', 'Gain sustainable agriculture skills', 'Certificates and hands-on experience'],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(isRTL ? 'تم إرسال طلبك!' : 'Your application has been submitted!');
  };

  return (
    <div>
      <section className="py-24 sm:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('joinUs.title')} subtitle={t('joinUs.subtitle')} light />
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <a.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-4 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{a.title}</h3>
                <ul className="space-y-3">
                  {a.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('joinUs.apply')} subtitle={isRTL ? 'كن جزءاً من فريقنا' : 'Become part of our team'} />

          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-12 rounded-2xl bg-primary/10 border border-primary/20">
              <Check className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'شكراً لانضمامك!' : 'Thank you for joining!'}
              </h3>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'سنتواصل معك قريباً' : 'We\'ll be in touch soon'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-background border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder={isRTL ? 'الاسم الكامل' : 'Full Name'} required className={isRTL ? 'font-arabic' : ''} />
                <Input type="email" placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'} required className={isRTL ? 'font-arabic' : ''} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="tel" placeholder={isRTL ? 'الهاتف' : 'Phone'} className={isRTL ? 'font-arabic' : ''} />
                <Select>
                  <SelectTrigger className={isRTL ? 'font-arabic' : ''}>
                    <SelectValue placeholder={isRTL ? 'أنضم كـ' : 'Join as'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">{t('joinUs.farmers')}</SelectItem>
                    <SelectItem value="supplier">{t('joinUs.suppliers')}</SelectItem>
                    <SelectItem value="volunteer">{t('joinUs.volunteers')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder={isRTL ? 'أخبرنا عن نفسك وكيف تريد المساهمة' : 'Tell us about yourself and how you want to contribute'} rows={4} className={isRTL ? 'font-arabic' : ''} />
              <GrowthButton type="submit" className="w-full justify-center">
                <Send className="w-4 h-4" />
                {t('joinUs.apply')}
              </GrowthButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
