export const impactStats = {
  vegetablesRescued: 12500,
  compostProduced: 4375,
  seedlingsGrown: 6250,
  wasteReduced: 11250,
  co2Avoided: 31250,
  farmersSupported: 48
};

export const compostProducts = [
  {
    id: 1, name: 'Organic Compost', nameAr: 'سماد عضوي',
    category: 'general', price: 15, unit: '5kg bag',
    description: 'Natural compost made from damaged vegetables and fruits, designed to improve soil and support plant growth.',
    descriptionAr: 'سماد طبيعي ناتج من الخضار والفواكه التالفة، مناسب لتحسين التربة ودعم نمو النباتات.',
    benefits: ['Natural nutrients', 'Improves soil structure', 'Supports plant growth'],
    benefitsAr: ['مغذيات طبيعية', 'يحسن بنية التربة', 'يدعم نمو النباتات'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Natural organic compost', imageAltAr: 'سماد عضوي طبيعي',
    status: 'available', sizes: ['5kg', '10kg', '25kg']
  },
  {
    id: 2, name: 'Fruitful Farm Mix', nameAr: 'المزرعة المثمرة',
    category: 'farm', price: 45, unit: '25kg bag',
    description: 'An organic blend made to support fruiting plants and improve soil quality.',
    descriptionAr: 'خليط عضوي مخصص لدعم النباتات المثمرة وتحسين جودة التربة.',
    benefits: ['For fruiting plants', 'Improves soil quality', 'Bulk available'],
    benefitsAr: ['للنباتات المثمرة', 'يحسن جودة التربة', 'متوفر بكميات كبيرة'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Organic mix for fruiting plants', imageAltAr: 'خليط عضوي للنباتات المثمرة',
    status: 'available', sizes: ['25kg', '50kg', '100kg']
  },
  {
    id: 3, name: 'Seedling Starter Mix', nameAr: 'خليط بادئ للشتلات الصغيرة',
    category: 'seedling', price: 12, unit: '3kg bag',
    description: 'A light mix designed for young seedlings and early seed growth.',
    descriptionAr: 'خليط خفيف ومناسب لبداية نمو الشتلات الصغيرة والبذور.',
    benefits: ['Optimal drainage', 'pH balanced', 'Great for seeds'],
    benefitsAr: ['تصريف مثالي', 'متوازن الحموضة', 'مناسب للبذور'],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Seedling starter mix', imageAltAr: 'خليط بادئ للشتلات الصغيرة',
    status: 'available', sizes: ['3kg', '5kg', '10kg']
  },
  {
    id: 4, name: 'Garden Mix', nameAr: 'مزيج الحديقة',
    category: 'garden', price: 18, unit: '5kg bag',
    description: 'An organic mix suitable for ornamental plants and home gardens.',
    descriptionAr: 'مزيج عضوي مناسب لنباتات الزينة والحدائق المنزلية.',
    benefits: ['For ornamental plants', 'Clean texture', 'Home-garden friendly'],
    benefitsAr: ['لنباتات الزينة', 'قوام نظيف', 'مناسب للحدائق المنزلية'],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Organic garden mix for ornamental plants', imageAltAr: 'مزيج عضوي لنباتات الزينة',
    status: 'available', sizes: ['5kg', '10kg']
  }
];

export const seedlingProducts = [
  {
    id: 5, name: 'Tomato Seedlings', nameAr: 'شتلات الطماطم',
    category: 'vegetable', season: 'Spring-Summer', growthTime: '60-80 days',
    description: 'Strong tomato seedlings produced from extracted organic seeds.',
    descriptionAr: 'شتلات طماطم قوية ناتجة من بذور عضوية مستخرجة.',
    care: 'Full sun, regular watering', careAr: 'شمس كاملة، ري منتظم',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Organic tomato seedlings', imageAltAr: 'شتلات طماطم عضوية',
    status: 'available'
  },
  {
    id: 6, name: 'Pepper Seedlings', nameAr: 'شتلات الفلفل',
    category: 'vegetable', season: 'Spring-Summer', growthTime: '70-90 days',
    description: 'Healthy pepper seedlings grown from extracted organic seeds.',
    descriptionAr: 'شتلات فلفل صحية من بذور عضوية مستخرجة.',
    care: 'Full sun, moderate watering', careAr: 'شمس كاملة، ري معتدل',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Organic pepper seedlings', imageAltAr: 'شتلات فلفل عضوية',
    status: 'available'
  },
  {
    id: 7, name: 'Cucumber Seedlings', nameAr: 'شتلات الخيار',
    category: 'vegetable', season: 'Spring', growthTime: '50-70 days',
    description: 'Fast-growing cucumber seedlings for home gardens and small farms.',
    descriptionAr: 'شتلات خيار سريعة النمو للحدائق المنزلية والمزارع.',
    care: 'Partial sun, frequent watering', careAr: 'شمس جزئية، ري متكرر',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cucumber seedlings', imageAltAr: 'شتلات خيار',
    status: 'available'
  },
  {
    id: 8, name: 'Herb Collection', nameAr: 'مجموعة الأعشاب',
    category: 'herb', season: 'All year', growthTime: '30-45 days',
    description: 'Basil, mint, rosemary, and parsley seedlings starter pack.',
    descriptionAr: 'مجموعة بداية من شتلات الريحان والنعناع والروزماري والبقدونس.',
    care: 'Partial sun, regular watering', careAr: 'شمس جزئية، ري منتظم',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Herb seedlings collection', imageAltAr: 'مجموعة شتلات الأعشاب',
    status: 'coming_soon'
  }
];

export const blogPosts = [
  {
    id: 1, title: 'The Value of Damaged Vegetables and Fruits', titleAr: 'قيمة الخضار والفواكه التالفة',
    excerpt: 'Discover how damaged vegetables and fruits can become the foundation of sustainable agriculture.', 
    excerptAr: 'اكتشف كيف يمكن للخضار والفواكه التالفة أن تصبح أساس الزراعة المستدامة.',
    category: 'sustainability', readTime: 5, date: '2026-03-15',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Value of damaged vegetables and fruits', imageAltAr: 'قيمة الخضار والفواكه التالفة'
  },
  {
    id: 2, title: "Home Composting: A Beginner's Guide", titleAr: 'التسميد المنزلي: دليل المبتدئين',
    excerpt: 'Learn the basics of organic composting at home and reduce food loss.', 
    excerptAr: 'تعلم أساسيات التسميد العضوي في المنزل وتقليل الهدر الغذائي.',
    category: 'composting', readTime: 7, date: '2026-03-10',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Home composting for beginners', imageAltAr: 'التسميد المنزلي للمبتدئين'
  },
  {
    id: 3, title: 'Circular Economy in Agriculture', titleAr: 'الاقتصاد الدائري في الزراعة',
    excerpt: 'How circular thinking is revolutionizing the way we grow and consume food.', 
    excerptAr: 'كيف يُحوّل التفكير الدائري طريقة زراعتنا واستهلاكنا للغذاء.',
    category: 'agriculture', readTime: 6, date: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Circular economy in agriculture', imageAltAr: 'الاقتصاد الدائري في الزراعة'
  },
  {
    id: 4, title: 'From Seeds to Sustainability', titleAr: 'من البذور إلى الاستدامة',
    excerpt: 'The journey of an extracted organic seed and its impact on environmental regeneration.', 
    excerptAr: 'رحلة بذرة عضوية وأثرها على التجدد البيئي.',
    category: 'sustainability', readTime: 4, date: '2026-02-20',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'From seeds to sustainability', imageAltAr: 'من البذور إلى الاستدامة'
  },
  {
    id: 5, title: 'Why Organic Compost Matters', titleAr: 'لماذا السماد العضوي مهم',
    excerpt: 'Understanding the science behind compost and why it is crucial for soil health.', 
    excerptAr: 'فهم العلم وراء السماد العضوي ولماذا هو ضروري لصحة التربة.',
    category: 'composting', readTime: 8, date: '2026-02-10',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Why organic compost matters', imageAltAr: 'أهمية السماد العضوي'
  },
  {
    id: 6, title: 'Video: Sustainability in Nature', titleAr: 'فيديو: الاستدامة في الطبيعة',
    excerpt: 'A visual journey through natural cycles that inspired the FOOD LOOP model.', 
    excerptAr: 'رحلة بصرية عبر دورات الطبيعة التي ألهمت نموذج FOOD LOOP في الاستدامة.',
    category: 'gardening', readTime: 3, date: '2026-01-25',
    image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Video about sustainability in nature', imageAltAr: 'فيديو عن الاستدامة في الطبيعة'
  }
];

export const trackerBatches = [
  {
    id: 'WTL-2026-001', source: 'Central Market', sourceAr: 'السوق المركزي',
    vegetableType: 'Tomatoes & Peppers', vegetableTypeAr: 'طماطم وفلفل',
    quantityKg: 500, dateReceived: '2026-03-01',
    currentStage: 5, // complete
    stages: [
      { name: 'Received', nameAr: 'تم الاستلام', date: '2026-03-01', complete: true },
      { name: 'Sorting', nameAr: 'الفرز', date: '2026-03-03', complete: true },
      { name: 'Composting', nameAr: 'التسميد', date: '2026-03-10', complete: true },
      { name: 'Extraction', nameAr: 'الاستخلاص', date: '2026-03-25', complete: true },
      { name: 'Growing', nameAr: 'النمو', date: '2026-04-05', complete: true },
      { name: 'Complete', nameAr: 'مكتمل', date: '2026-04-12', complete: true }
    ],
    output: { compostKg: 175, seedlings: 250 }
  },
  {
    id: 'WTL-2026-002', source: 'Green Valley Farm', sourceAr: 'مزرعة الوادي الأخضر',
    vegetableType: 'Cucumbers & Zucchini', vegetableTypeAr: 'خيار وكوسة',
    quantityKg: 320, dateReceived: '2026-03-15',
    currentStage: 3,
    stages: [
      { name: 'Received', nameAr: 'تم الاستلام', date: '2026-03-15', complete: true },
      { name: 'Sorting', nameAr: 'الفرز', date: '2026-03-17', complete: true },
      { name: 'Composting', nameAr: 'التسميد', date: '2026-03-22', complete: true },
      { name: 'Extraction', nameAr: 'الاستخلاص', date: null, complete: false },
      { name: 'Growing', nameAr: 'النمو', date: null, complete: false },
      { name: 'Complete', nameAr: 'مكتمل', date: null, complete: false }
    ],
    output: { compostKg: 112, seedlings: 0 }
  },
  {
    id: 'WTL-2026-003', source: 'Sunrise Market', sourceAr: 'سوق الشروق',
    vegetableType: 'Mixed Vegetables', vegetableTypeAr: 'خضروات متنوعة',
    quantityKg: 750, dateReceived: '2026-04-01',
    currentStage: 1,
    stages: [
      { name: 'Received', nameAr: 'تم الاستلام', date: '2026-04-01', complete: true },
      { name: 'Sorting', nameAr: 'الفرز', date: '2026-04-03', complete: true },
      { name: 'Composting', nameAr: 'التسميد', date: null, complete: false },
      { name: 'Extraction', nameAr: 'الاستخلاص', date: null, complete: false },
      { name: 'Growing', nameAr: 'النمو', date: null, complete: false },
      { name: 'Complete', nameAr: 'مكتمل', date: null, complete: false }
    ],
    output: { compostKg: 0, seedlings: 0 }
  }
];

export const partners = [
  { id: 1, name: 'Central Market', nameAr: 'السوق المركزي', type: 'market' },
  { id: 2, name: 'Green Valley Farm', nameAr: 'مزرعة الوادي الأخضر', type: 'farm' },
  { id: 3, name: 'EcoGrow Solutions', nameAr: 'حلول النمو البيئي', type: 'company' },
  { id: 4, name: 'City Municipality', nameAr: 'البلدية', type: 'government' },
  { id: 5, name: 'AgriTech Labs', nameAr: 'مختبرات التقنية الزراعية', type: 'company' },
  { id: 6, name: 'Sunrise Farms', nameAr: 'مزارع الشروق', type: 'farm' },
];

export const monthlyImpactData = [
  { month: 'Jan', waste: 800, compost: 280, seedlings: 400 },
  { month: 'Feb', waste: 950, compost: 332, seedlings: 475 },
  { month: 'Mar', waste: 1100, compost: 385, seedlings: 550 },
  { month: 'Apr', waste: 1300, compost: 455, seedlings: 650 },
  { month: 'May', waste: 1500, compost: 525, seedlings: 750 },
  { month: 'Jun', waste: 1700, compost: 595, seedlings: 850 },
  { month: 'Jul', waste: 1400, compost: 490, seedlings: 700 },
  { month: 'Aug', waste: 1200, compost: 420, seedlings: 600 },
  { month: 'Sep', waste: 1050, compost: 367, seedlings: 525 },
  { month: 'Oct', waste: 1150, compost: 402, seedlings: 575 },
  { month: 'Nov', waste: 900, compost: 315, seedlings: 450 },
  { month: 'Dec', waste: 850, compost: 297, seedlings: 425 },
];

export const coreValues = [
  { icon: 'Recycle', title: 'Circular Economy', titleAr: 'الاقتصاد الدائري', desc: 'Nothing is wasted, everything transforms.', descAr: 'لا شيء يُهدر، كل شيء يتحول.' },
  { icon: 'Leaf', title: 'Sustainability', titleAr: 'الاستدامة', desc: 'Building systems that last for generations.', descAr: 'بناء أنظمة تستمر لأجيال.' },
  { icon: 'Lightbulb', title: 'Innovation', titleAr: 'الابتكار', desc: 'Using science to unlock nature\'s potential.', descAr: 'استخدام العلم لإطلاق إمكانات الطبيعة.' },
  { icon: 'Heart', title: 'Social Responsibility', titleAr: 'المسؤولية الاجتماعية', desc: 'Empowering communities through green solutions.', descAr: 'تمكين المجتمعات من خلال الحلول الخضراء.' },
  { icon: 'Sprout', title: 'Agricultural Support', titleAr: 'الدعم الزراعي', desc: 'Helping farmers grow more with less.', descAr: 'مساعدة المزارعين على إنتاج المزيد بأقل.' },
  { icon: 'Globe', title: 'Environmental Awareness', titleAr: 'الوعي البيئي', desc: 'Educating communities about reducing food loss.', descAr: 'تثقيف المجتمعات حول تقليل الهدر الغذائي.' },
];
