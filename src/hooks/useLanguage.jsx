import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About Us', howItWorks: 'How It Works', products: 'Products',
      impact: 'Impact', partners: 'Partners', services: 'Services', contact: 'Contact',
      tracker: 'Tracker', blog: 'Blog', joinUs: 'Join Us', calculator: 'Calculator'
    },
    hero: {
      title1: 'From Damaged Produce',
      title2: 'To New Life',
      subtitle: 'We transform damaged vegetables and fruits into organic compost, seeds, and seedlings that support a sustainable food loop.',
      cta1: 'Order Compost',
      cta2: 'Collaborate With Us'
    },
    stats: {
      rescued: 'Tons Rescued',
      compost: 'Compost Produced',
      seedlings: 'Seedlings Grown',
      reduced: 'Damaged Produce Diverted'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Our 5-step transformation process',
      step1: 'Collecting damaged vegetables and fruits', step1desc: 'We collect damaged and unsellable vegetables from markets and farms.',
      step2: 'Sorting and cleaning', step2desc: 'Materials are sorted, cleaned, and prepared for processing.',
      step3: 'Turning them into organic compost', step3desc: 'Organic matter is transformed into nutrient-rich compost.',
      step4: 'Extracting organic seeds', step4desc: 'Viable seeds are carefully extracted and preserved.',
      step5: 'Growing seedlings and caring for seeds', step5desc: 'Seeds are nurtured into healthy, ready-to-plant seedlings.'
    },
    products: {
      title: 'Our Products',
      subtitle: 'Premium organic outputs from nature\'s cycle',
      compost: 'Organic Compost',
      seedlings: 'Plant Seedlings',
      orderNow: 'Order Now',
      viewDetails: 'View Details',
      available: 'Available',
      comingSoon: 'Coming Soon',
      inStock: 'In Stock'
    },
    impact: {
      title: 'Our Impact',
      subtitle: 'Measurable environmental change',
      wasteReduction: 'Reduced Food Loss',
      emissionsReduced: 'CO₂ Emissions Avoided',
      farmersSupported: 'Farmers Supported',
      compostProduced: 'Compost Produced'
    },
    about: {
      title: 'About The Project',
      subtitle: 'A regenerative cycle turning loss into growth',
      problem: 'The Problem',
      problemDesc: 'Millions of kilograms of vegetables and fruits lose their market value because of damage, overproduction, or cosmetic imperfections. FOOD LOOP gives them a useful second life.',
      solution: 'Our Solution',
      solutionDesc: 'We intercept damaged vegetables before they reach landfills, transforming them into high-quality organic compost and viable plant seedlings — completing nature\'s circle.',
      vision: 'Vision',
      visionDesc: 'Our vision is to help produce organic materials, seeds, and seedlings from damaged vegetables and fruits in a way that supports sustainable agriculture and reduces food loss.',
      mission: 'Mission',
      missionDesc: 'Our mission is to collect damaged vegetables and fruits and transform them into valuable agricultural outputs such as organic compost, seeds, and seedlings.'
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'Building a sustainable future together',
      whyPartner: 'Why Partner With Us',
      becomePartner: 'Become a Partner'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'We\'d love to hear from you',
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      phone: 'Phone',
      location: 'Location',
      hours: 'Working Hours'
    },
    services: {
      title: 'Our Services',
      subtitle: 'From collection to cultivation',
      orderCompost: 'Order Compost',
      orderSeedlings: 'Order Seedlings',
      wasteCollection: 'Damaged Produce Collection',
      requestSeeds: 'Request Seeds',
      requestService: 'Request Service'
    },
    tracker: {
      title: 'Process Tracker',
      subtitle: 'Track the transformation journey of damaged produce',
      batchId: 'Batch ID',
      source: 'Source',
      status: 'Status',
      received: 'Received',
      sorting: 'Sorting',
      composting: 'Composting',
      extraction: 'Extraction',
      growing: 'Growing',
      complete: 'Complete'
    },
    blog: {
      title: 'Awareness & Education',
      subtitle: 'Learn about sustainability and organic farming',
      readMore: 'Learn More',
      minRead: 'min read'
    },
    joinUs: {
      title: 'Join Our Movement',
      subtitle: 'Be part of the transformation',
      farmers: 'Farmers',
      suppliers: 'Suppliers',
      volunteers: 'Volunteers',
      apply: 'Apply Now'
    },
    calculator: {
      title: 'Sustainability Calculator',
      subtitle: 'See the impact of your contribution',
      inputLabel: 'Vegetable Waste (kg)',
      calculate: 'Calculate Impact',
      compostOutput: 'Compost Output',
      wasteAvoided: 'Landfill Impact Avoided',
      co2Saved: 'CO₂ Saved',
      seedlingsProduced: 'Seedlings Possible'
    },
    footer: {
      tagline: 'Creating a sustainable food loop from damaged produce.',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      connect: 'Connect',
      rights: 'All rights reserved.'
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewAll: 'View All',
      kg: 'kg',
      tons: 'tons'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية', about: 'من نحن', howItWorks: 'كيف يعمل', products: 'المنتجات',
      impact: 'الأثر', partners: 'الشركاء', services: 'الخدمات', contact: 'اتصل بنا',
      tracker: 'تتبع العملية', blog: 'المدونة', joinUs: 'انضم إلينا', calculator: 'الحاسبة'
    },
    hero: {
      title1: 'من الخضار التالفة',
      title2: 'إلى حياة جديدة',
      subtitle: 'نحوّل الخضار والفواكه التالفة إلى سماد عضوي، بذور، وشتلات تساعد في بناء دورة غذائية مستدامة.',
      cta1: 'اطلب السماد',
      cta2: 'تعاون معنا'
    },
    stats: {
      rescued: 'أطنان تم إنقاذها',
      compost: 'سماد منتج',
      seedlings: 'شتلات نمت',
      reduced: 'خضار وفواكه تم تحويلها'
    },
    howItWorks: {
      title: 'كيف يعمل',
      subtitle: 'عملية التحويل في 5 خطوات',
      step1: 'جمع الخضار والفواكه التالفة', step1desc: 'نجمع الخضروات التالفة وغير القابلة للبيع من الأسواق والمزارع.',
      step2: 'الفرز والتنظيف', step2desc: 'يتم فرز المواد وتنظيفها وتحضيرها للمعالجة.',
      step3: 'التحويل إلى سماد عضوي', step3desc: 'تتحول المواد العضوية إلى سماد غني بالمغذيات.',
      step4: 'استخراج البذور العضوية', step4desc: 'يتم استخلاص البذور الصالحة بعناية والحفاظ عليها.',
      step5: 'نمو الشتلات والعناية بالبذور', step5desc: 'تُرعى البذور حتى تصبح شتلات صحية جاهزة للزراعة.'
    },
    products: {
      title: 'منتجاتنا',
      subtitle: 'مخرجات عضوية فاخرة من دورة الطبيعة',
      compost: 'سماد عضوي',
      seedlings: 'شتلات نباتية',
      orderNow: 'اطلب الآن',
      viewDetails: 'عرض التفاصيل',
      available: 'متوفر',
      comingSoon: 'قريباً',
      inStock: 'في المخزون'
    },
    impact: {
      title: 'أثرنا',
      subtitle: 'تغيير بيئي قابل للقياس',
      wasteReduction: 'تقليل الهدر الغذائي',
      emissionsReduced: 'انبعاثات CO₂ تم تجنبها',
      farmersSupported: 'مزارعون مدعومون',
      compostProduced: 'سماد منتج'
    },
    about: {
      title: 'من نحن',
      subtitle: 'دورة تجديدية تحول الخسارة إلى نمو',
      problem: 'المشكلة',
      problemDesc: 'تفقد كميات كبيرة من الخضار والفواكه قيمتها السوقية بسبب التلف أو العيوب الشكلية أو الإنتاج الزائد. FOOD LOOP يمنحها حياة ثانية مفيدة.',
      solution: 'حلنا',
      solutionDesc: 'نجمع الخضار والفواكه التالفة ونحوّلها إلى سماد عضوي وبذور مستخرجة وشتلات صحية، لنكمل دورة غذائية مستدامة.',
      vision: 'الرؤية',
      visionDesc: 'رؤيتنا أن نساهم في إنتاج مواد عضوية وبذور وشتلات من الخضار والفواكه التالفة بطريقة تدعم الزراعة المستدامة وتقلل الهدر.',
      mission: 'المهمة',
      missionDesc: 'مهمتنا هي جمع الخضار والفواكه التالفة وتحويلها إلى قيمة زراعية مفيدة من خلال السماد العضوي والبذور والشتلات.'
    },
    partners: {
      title: 'شركاؤنا',
      subtitle: 'بناء مستقبل مستدام معاً',
      whyPartner: 'لماذا تشاركنا',
      becomePartner: 'كن شريكاً'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'يسعدنا سماعك',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      phone: 'الهاتف',
      location: 'الموقع',
      hours: 'ساعات العمل'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'من الجمع إلى الزراعة',
      orderCompost: 'طلب السماد',
      orderSeedlings: 'طلب الشتلات',
      wasteCollection: 'جمع الخضراوات والفواكه التالفة',
      requestSeeds: 'طلب البذور',
      requestService: 'طلب الخدمة'
    },
    tracker: {
      title: 'تتبع العملية',
      subtitle: 'تتبع رحلة تحويل الخضار والفواكه التالفة',
      batchId: 'رقم الدفعة',
      source: 'المصدر',
      status: 'الحالة',
      received: 'تم الاستلام',
      sorting: 'الفرز',
      composting: 'التسميد',
      extraction: 'الاستخلاص',
      growing: 'النمو',
      complete: 'مكتمل'
    },
    blog: {
      title: 'التوعية والتثقيف',
      subtitle: 'تعرف على الاستدامة والزراعة العضوية',
      readMore: 'تعرّف على المزيد',
      minRead: 'دقائق قراءة'
    },
    joinUs: {
      title: 'انضم لحركتنا',
      subtitle: 'كن جزءاً من التحويل',
      farmers: 'المزارعون',
      suppliers: 'الموردون',
      volunteers: 'المتطوعون',
      apply: 'قدم الآن'
    },
    calculator: {
      title: 'حاسبة الاستدامة',
      subtitle: 'شاهد أثر مساهمتك',
      inputLabel: 'الخضار والفواكه التالفة (كجم)',
      calculate: 'احسب الأثر',
      compostOutput: 'إنتاج السماد',
      wasteAvoided: 'أثر المكب الذي تم تجنبه',
      co2Saved: 'CO₂ تم توفيره',
      seedlingsProduced: 'شتلات ممكنة'
    },
    footer: {
      tagline: 'نصنع دورة غذائية مستدامة من الخضار والفواكه التالفة.',
      quickLinks: 'روابط سريعة',
      resources: 'الموارد',
      connect: 'تواصل',
      rights: 'جميع الحقوق محفوظة.'
    },
    common: {
      learnMore: 'تعرّف على المزيد',
      getStarted: 'ابدأ الآن',
      viewAll: 'عرض الكل',
      kg: 'كجم',
      tons: 'أطنان'
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('wtl-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('wtl-lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
