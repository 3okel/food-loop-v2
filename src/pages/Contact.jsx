import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';
import { toast } from 'sonner';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: t('contact.email'), value: 'info@foodloop.jo' },
    { icon: Phone, label: t('contact.phone'), value: '+962 7X XXX XXXX' },
    { icon: MapPin, label: t('contact.location'), value: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
    { icon: Clock, label: t('contact.hours'), value: isRTL ? 'الأحد - الخميس: 8ص - 5م' : 'Sun - Thu: 8AM - 5PM' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(isRTL ? 'تم إرسال رسالتك!' : 'Your message has been sent!');
  };

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((c, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-0.5 ${isRTL ? 'font-arabic' : ''}`}>{c.label}</p>
                    <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>{c.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div {...fadeUp} className="rounded-2xl overflow-hidden aspect-video bg-muted border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL ? 'موقعنا على الخريطة' : 'Our location on the map'}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16 rounded-2xl bg-primary/10 border border-primary/20">
                  <Check className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                    {isRTL ? 'شكراً لتواصلك!' : 'Thank you for reaching out!'}
                  </h3>
                  <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL ? 'سنرد عليك في أقرب وقت' : 'We\'ll get back to you soon'}
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-primary font-bold text-sm hover:underline">
                    {isRTL ? 'إرسال رسالة أخرى' : 'Send another message'}
                  </button>
                </motion.div>
              ) : (
                <motion.form {...fadeUp} onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-card border border-border">
                  <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                    {isRTL ? 'أرسل لنا رسالة' : 'Send us a message'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder={t('contact.name')} required className={isRTL ? 'font-arabic' : ''} />
                    <Input type="email" placeholder={t('contact.email')} required className={isRTL ? 'font-arabic' : ''} />
                  </div>
                  <Input placeholder={t('contact.subject')} required className={isRTL ? 'font-arabic' : ''} />
                  <Textarea placeholder={t('contact.message')} rows={5} required className={isRTL ? 'font-arabic' : ''} />
                  <GrowthButton type="submit" className="w-full justify-center">
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </GrowthButton>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
