import { createContext, useContext, useMemo, useState } from 'react'

const translations = {
  en: {
    nav: { home: 'Home', about: 'About Us', howItWorks: 'How It Works', products: 'Products', impact: 'Impact', services: 'Services', blog: 'Blog', contact: 'Contact', joinUs: 'Join Us', calculator: 'Calculator', partners: 'Partners', tracker: 'Tracker' },
    hero: { eyebrow: 'Sustainable Food Cycle', title1: 'From Damaged Produce', title2: 'To New Life', subtitle: 'We transform damaged vegetables and fruits into organic compost, seeds, and seedlings that support a sustainable food loop.', cta1: 'Request Compost', cta2: 'Partner With Us' },
    stats: { rescued: 'Damaged produce collected', seedlings: 'Seedlings grown', compost: 'Organic compost produced', seeds: 'Organic seeds prepared' },
    about: { title: 'About Us', subtitle: 'FOOD LOOP is an agricultural sustainability project built around one belief: every damaged fruit or vegetable can become a new beginning.', vision: 'Our Vision', visionDesc: 'To help produce organic materials, seeds, and seedlings from damaged vegetables and fruits in a way that supports sustainable agriculture and reduces food loss.', mission: 'Our Mission', missionDesc: 'To collect damaged vegetables and fruits and transform them into valuable agricultural outputs such as organic compost, seeds, and seedlings.', journey: 'Our Journey', journeyDesc: 'Our journey began with a simple idea: every damaged fruit or vegetable can become a new beginning. Through our first partnerships, we started replacing food loss with sustainable agricultural value.' },
    howItWorks: { title: 'How It Works', subtitle: 'A clear transformation journey from damaged produce to agricultural value.' },
    products: { title: 'Products', subtitle: 'Organic outputs made for soil, seedlings, home gardens, and sustainable growing.', order: 'Order Now', view: 'View' },
    impact: { title: 'The Difference We Make', subtitle: 'We measure our impact through real environmental and agricultural value.', desc: 'We measure our impact by the amount of damaged vegetables and fruits transformed into organic compost, seeds, and seedlings, creating real value for the environment and agriculture.' },
    services: { title: 'Our Services', subtitle: 'From collection to cultivation', request: 'Request Service' },
    blog: { title: 'Awareness & Education', subtitle: 'Learn more about sustainability, composting, and circular agriculture.', readMore: 'Learn More', minRead: 'min read' },
    contact: { title: 'Contact Us', subtitle: 'We would love to hear from you.', name: 'Full Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send Message', phone: 'Phone', location: 'Location', hours: 'Working Hours' },
    calculator: { title: 'Sustainability Calculator', subtitle: 'See the impact of your contribution.', inputLabel: 'Damaged Produce (kg)', calculate: 'Calculate Impact', compostOutput: 'Compost Output', seedlingsProduced: 'Seedlings Possible', co2Saved: 'CO₂ Saved' },
    tracker: { title: 'Process Tracker', subtitle: 'Track the transformation journey.', batches: 'Batches', select: 'Select a batch to view details', output: 'Output', complete: 'Complete', progress: 'In Progress' },
    footer: { tagline: 'Transforming damaged produce into new agricultural life.', quickLinks: 'Quick Links', resources: 'Resources', connect: 'Connect', rights: 'All rights reserved.' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', howItWorks: 'كيف يعمل', products: 'المنتجات', impact: 'الأثر', services: 'الخدمات', blog: 'المدونة', contact: 'اتصل بنا', joinUs: 'انضم إلينا', calculator: 'الحاسبة', partners: 'الشركاء', tracker: 'تتبع العملية' },
    hero: { eyebrow: 'الدورة الغذائية المستدامة', title1: 'من الخضار التالفة', title2: 'إلى حياة جديدة', subtitle: 'نحوّل الخضار والفواكه التالفة إلى سماد عضوي، بذور، وشتلات تساعد في بناء دورة غذائية مستدامة.', cta1: 'اطلب السماد', cta2: 'تعاون معنا' },
    stats: { rescued: 'خضار تالفة مجمعة', seedlings: 'شتلات نمت', compost: 'سماد عضوي منتج', seeds: 'بذور عضوية جاهزة' },
    about: { title: 'من نحن', subtitle: 'FOOD LOOP مشروع زراعي مستدام يؤمن بأن كل ثمرة تالفة يمكن أن تكون بداية جديدة.', vision: 'رؤيتنا', visionDesc: 'رؤيتنا أن نساهم في إنتاج مواد عضوية وبذور وشتلات من الخضار والفواكه التالفة، بطريقة تدعم الزراعة المستدامة وتقلل الهدر.', mission: 'مهمتنا', missionDesc: 'مهمتنا هي جمع الخضار والفواكه التالفة وتحويلها إلى قيمة زراعية مفيدة من خلال السماد العضوي، البذور، والشتلات.', journey: 'رحلتنا', journeyDesc: 'بدأت رحلتنا من فكرة بسيطة: كل ثمرة تالفة يمكن أن تكون بداية جديدة. ومن خلال أولى الشراكات، بدأنا باستبدال الهدر الغذائي بقيمة زراعية مستدامة.' },
    howItWorks: { title: 'كيف يعمل', subtitle: 'رحلة واضحة من الخضار التالفة إلى قيمة زراعية مفيدة.' },
    products: { title: 'المنتجات', subtitle: 'منتجات عضوية للتربة والشتلات والحدائق المنزلية والزراعة المستدامة.', order: 'اطلب الآن', view: 'عرض' },
    impact: { title: 'الفرق الذي نصنعه', subtitle: 'نقيس أثرنا بقيمة بيئية وزراعية حقيقية.', desc: 'نقيس أثرنا من خلال كمية الخضار والفواكه التالفة التي يتم تحويلها إلى سماد عضوي وبذور وشتلات، لنصنع فرقاً حقيقياً في البيئة والزراعة.' },
    services: { title: 'خدماتنا', subtitle: 'من الجمع إلى الزراعة', request: 'طلب الخدمة' },
    blog: { title: 'التوعية والتثقيف', subtitle: 'تعرّف أكثر على الاستدامة والتسميد والزراعة الدائرية.', readMore: 'تعرّف على المزيد', minRead: 'دقائق قراءة' },
    contact: { title: 'اتصل بنا', subtitle: 'يسعدنا التواصل معك.', name: 'الاسم الكامل', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', send: 'إرسال الرسالة', phone: 'الهاتف', location: 'الموقع', hours: 'ساعات العمل' },
    calculator: { title: 'حاسبة الاستدامة', subtitle: 'شاهد أثر مساهمتك.', inputLabel: 'الخضار والفواكه التالفة بالكيلو', calculate: 'احسب الأثر', compostOutput: 'السماد الناتج', seedlingsProduced: 'الشتلات الممكنة', co2Saved: 'انبعاثات تم توفيرها' },
    tracker: { title: 'تتبع العملية', subtitle: 'تتبع رحلة التحويل.', batches: 'الدفعات', select: 'اختر دفعة لعرض التفاصيل', output: 'المخرجات', complete: 'مكتمل', progress: 'قيد التنفيذ' },
    footer: { tagline: 'نحوّل الخضار والفواكه التالفة إلى حياة زراعية جديدة.', quickLinks: 'روابط سريعة', resources: 'الموارد', connect: 'تواصل معنا', rights: 'جميع الحقوق محفوظة.' }
  }
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')
  const isRTL = lang === 'ar'
  const value = useMemo(() => ({
    lang,
    isRTL,
    toggleLang: () => setLang((current) => current === 'ar' ? 'en' : 'ar'),
    t: (key) => key.split('.').reduce((obj, part) => obj?.[part], translations[lang]) ?? key
  }), [lang, isRTL])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
