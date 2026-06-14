import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sprout, Truck, X, Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import { toast } from 'sonner';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Services() {
  const { t, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: Leaf, key: 'compost',
      title: t('services.orderCompost'),
      desc: isRTL ? 'اطلب سماداً عضوياً مصنوعاً من الخضار والفواكه التالفة المحوّلة.' : 'Order organic compost made from converted damaged vegetables and fruits.',
      target: isRTL ? 'مزارعون، حدائق منزلية' : 'Farmers, Home gardens',
      process: isRTL ? 'اختر النوع → حدد الكمية → التوصيل' : 'Choose type → Select quantity → Delivery'
    },
    {
      icon: Sprout, key: 'seedlings',
      title: t('services.orderSeedlings'),
      desc: isRTL ? 'اطلب شتلات صحية نمت من بذور عضوية مستخرجة.' : 'Order healthy seedlings grown from extracted organic seeds.',
      target: isRTL ? 'مزارعون، هواة الزراعة' : 'Farmers, Gardening enthusiasts',
      process: isRTL ? 'اختر النبات → حدد العدد → التوصيل' : 'Choose plant → Select count → Delivery'
    },
    {
      icon: Truck, key: 'collection',
      title: t('services.wasteCollection'),
      desc: isRTL ? 'خدمة جمع الخضراوات والفواكه التالفة من موقعك مباشرة.' : 'Damaged vegetables and fruits collection service directly from your location.',
      target: isRTL ? 'أسواق، مطاعم، مزارع' : 'Markets, Restaurants, Farms',
      process: isRTL ? 'تحديد الموقع → جدولة الجمع → التنفيذ' : 'Set location → Schedule pickup → Execute'
    },
    {
      icon: Sprout, key: 'seeds',
      title: t('services.requestSeeds'),
      desc: isRTL ? 'اطلب بذوراً عضوية مستخرجة بعناية من الخضار والفواكه المناسبة.' : 'Request organic seeds carefully extracted from suitable vegetables and fruits.',
      target: isRTL ? 'مزارعون، حدائق منزلية، مشاتل' : 'Farmers, Home gardens, Nurseries',
      process: isRTL ? 'اختر نوع البذور → حدد الكمية → التوصيل' : 'Choose seeds → Select quantity → Delivery'
    },
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
          <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.key} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${isRTL ? 'font-arabic' : 'font-heading'}`}>{s.title}</h3>
                <p className={`text-muted-foreground text-sm mb-4 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{s.desc}</p>
                <div className="space-y-2 mb-6">
                  <p className={`text-xs ${isRTL ? 'font-arabic' : ''}`}>
                    <span className="font-bold">{isRTL ? 'الفئة المستهدفة: ' : 'Target: '}</span>
                    <span className="text-muted-foreground">{s.target}</span>
                  </p>
                  <p className={`text-xs ${isRTL ? 'font-arabic' : ''}`}>
                    <span className="font-bold">{isRTL ? 'العملية: ' : 'Process: '}</span>
                    <span className="text-muted-foreground">{s.process}</span>
                  </p>
                </div>
                <GrowthButton onClick={() => { setSelectedService(s.key); setSubmitted(false); }} className="w-full justify-center">
                  {t('services.requestService')}
                </GrowthButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                  {t('services.requestService')}
                </h3>
                <button onClick={() => setSelectedService(null)} className="p-2 rounded-lg hover:bg-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <Check className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className={`font-bold text-lg ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                    {isRTL ? 'شكراً! تم استلام طلبك.' : 'Thank you! Your request has been received.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder={isRTL ? 'الاسم الكامل' : 'Full Name'} required className={isRTL ? 'font-arabic' : ''} />
                    <Input placeholder={isRTL ? 'اسم المنشأة' : 'Business Name'} className={isRTL ? 'font-arabic' : ''} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="email" placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'} required className={isRTL ? 'font-arabic' : ''} />
                    <Input type="tel" placeholder={isRTL ? 'الهاتف' : 'Phone'} required className={isRTL ? 'font-arabic' : ''} />
                  </div>
                  <Input placeholder={isRTL ? 'الموقع / العنوان' : 'Location / Address'} className={isRTL ? 'font-arabic' : ''} />
                  <Select defaultValue={selectedService}>
                    <SelectTrigger className={isRTL ? 'font-arabic' : ''}>
                      <SelectValue placeholder={isRTL ? 'نوع الخدمة' : 'Service Type'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compost">{t('services.orderCompost')}</SelectItem>
                      <SelectItem value="seedlings">{t('services.orderSeedlings')}</SelectItem>
                      <SelectItem value="collection">{t('services.wasteCollection')}</SelectItem>
                      <SelectItem value="seeds">{t('services.requestSeeds')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder={isRTL ? 'الكمية المطلوبة' : 'Quantity Needed'} className={isRTL ? 'font-arabic' : ''} />
                  <Textarea placeholder={isRTL ? 'ملاحظات إضافية' : 'Additional Notes'} rows={3} className={isRTL ? 'font-arabic' : ''} />
                  <GrowthButton type="submit" className="w-full justify-center">
                    <Send className="w-4 h-4" />
                    {isRTL ? 'إرسال الطلب' : 'Submit Request'}
                  </GrowthButton>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
