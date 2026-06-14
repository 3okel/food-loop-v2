export const heroStats = [
  { value: '11,250 kg', key: 'rescued' },
  { value: '+6,250', key: 'seedlings' },
  { value: '4,375 kg', key: 'compost' },
  { value: '+2,800', key: 'seeds' },
]

export const processSteps = [
  { title: 'Collecting damaged vegetables and fruits', titleAr: 'جمع الخضار والفواكه التالفة', desc: 'We collect damaged and unsold produce from markets, restaurants, and farms.', descAr: 'نجمع الخضار والفواكه التالفة وغير الصالحة للبيع من الأسواق والمطاعم والمزارع.' },
  { title: 'Sorting and cleaning', titleAr: 'الفرز والتنظيف', desc: 'Materials are sorted, cleaned, and prepared for organic processing.', descAr: 'يتم فرز المواد وتنظيفها وتجهيزها للمعالجة العضوية.' },
  { title: 'Turning them into organic compost', titleAr: 'التحويل إلى سماد عضوي', desc: 'Organic matter becomes nutrient-rich compost for healthy soil.', descAr: 'تتحول المواد العضوية إلى سماد غني بالعناصر لتحسين التربة.' },
  { title: 'Extracting organic seeds', titleAr: 'استخراج البذور العضوية', desc: 'Viable seeds are carefully extracted, cleaned, and prepared.', descAr: 'يتم استخراج البذور الصالحة وتنظيفها وتحضيرها بعناية.' },
  { title: 'Growing seedlings and caring for seeds', titleAr: 'نمو الشتلات والعناية بالبذور', desc: 'Seeds grow into healthy seedlings ready for gardens and farms.', descAr: 'تنمو البذور لتصبح شتلات صحية جاهزة للحدائق والمزارع.' },
]

export const products = [
  { id: 1, title: 'Organic Compost', titleAr: 'سماد عضوي', desc: 'Natural compost made from damaged vegetables and fruits, designed to improve soil and support plant growth.', descAr: 'سماد طبيعي ناتج من الخضار والفواكه التالفة، مناسب لتحسين التربة ودعم نمو النباتات.', price: '$15', meta: '5kg bag', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Garden Mix', titleAr: 'مزيج الحديقة', desc: 'An organic mix suitable for ornamental plants and home gardens.', descAr: 'مزيج عضوي مناسب لنباتات الزينة والحدائق المنزلية.', price: '$18', meta: '5kg bag', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Fruitful Farm Mix', titleAr: 'المزرعة المثمرة', desc: 'An organic blend made to support fruiting plants and improve soil quality.', descAr: 'خليط عضوي مخصص لدعم النباتات المثمرة وتحسين جودة التربة.', price: '$45', meta: '25kg bag', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80' },
  { id: 4, title: 'Seedling Starter Mix', titleAr: 'خليط بادئ للشتلات الصغيرة', desc: 'A light mix designed for young seedlings and early seed growth.', descAr: 'خليط خفيف ومناسب لبداية نمو الشتلات الصغيرة والبذور.', price: '$12', meta: '3kg bag', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80' },
  { id: 5, title: 'Tomato Seedlings', titleAr: 'شتلات الطماطم', desc: 'Strong tomato seedlings grown from extracted organic seeds.', descAr: 'شتلات طماطم قوية ناتجة من بذور عضوية مستخرجة.', price: '60-80 days', meta: 'Spring-Summer', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80' },
  { id: 6, title: 'Pepper Seedlings', titleAr: 'شتلات الفلفل', desc: 'Healthy pepper seedlings from carefully selected organic seeds.', descAr: 'شتلات فلفل صحية من بذور عضوية مختارة بعناية.', price: '70-90 days', meta: 'Spring-Summer', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=80' },
  { id: 7, title: 'Cucumber Seedlings', titleAr: 'شتلات الخيار', desc: 'Fast-growing cucumber seedlings for gardens and farms.', descAr: 'شتلات خيار سريعة النمو للحدائق المنزلية والمزارع.', price: '50-70 days', meta: 'Spring', badge: 'Available', badgeAr: 'متوفر', image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80' },
  { id: 8, title: 'Herb Collection', titleAr: 'مجموعة الأعشاب', desc: 'Starter collection of basil, rosemary, mint, and parsley seedlings.', descAr: 'مجموعة بداية من شتلات الريحان والنعناع وإكليل الجبل والبقدونس.', price: '30-45 days', meta: 'All year', badge: 'Soon', badgeAr: 'قريباً', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
]

export const blogPosts = [
  { id: 1, category: 'agriculture', title: 'Circular Economy in Agriculture', titleAr: 'الاقتصاد الدائري في الزراعة', excerpt: 'How circular thinking changes how we grow and consume food.', excerptAr: 'كيف يحوّل التفكير الدائري طريقة زراعتنا واستهلاكنا للغذاء.', date: '2026-02-28', minutes: 6, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80' },
  { id: 2, category: 'composting', title: "Home Composting: A Beginner's Guide", titleAr: 'التسميد المنزلي: دليل المبتدئين', excerpt: 'Learn the basics of organic composting at home and reduce food loss.', excerptAr: 'تعلّم أساسيات التسميد العضوي في المنزل وتقليل الهدر الغذائي.', date: '2026-03-10', minutes: 7, image: 'https://images.unsplash.com/photo-1592982537447-6d3f6d785cf7?auto=format&fit=crop&w=900&q=80' },
  { id: 3, category: 'sustainability', title: 'The Value of Damaged Produce', titleAr: 'قيمة الخضار والفواكه التالفة', excerpt: 'Discover how damaged produce becomes the base of sustainable growing.', excerptAr: 'اكتشف كيف يمكن للخضار والفواكه التالفة أن تصبح أساس الزراعة المستدامة.', date: '2026-03-15', minutes: 5, image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80' },
  { id: 4, category: 'gardening', title: 'Video: Sustainability in Nature', titleAr: 'فيديو: الاستدامة في الطبيعة', excerpt: 'A visual journey through natural cycles that inspire FOOD LOOP.', excerptAr: 'رحلة بصرية عبر دورات الطبيعة التي تلهم نهج FOOD LOOP في الاستدامة.', date: '2026-01-25', minutes: 3, video: true, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
  { id: 5, category: 'composting', title: 'Why Organic Compost Matters', titleAr: 'لماذا السماد العضوي مهم', excerpt: 'Understanding the role of compost in healthy soil and plant growth.', excerptAr: 'فهم أهمية السماد العضوي لصحة التربة ونمو النباتات.', date: '2026-02-10', minutes: 8, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80' },
  { id: 6, category: 'sustainability', title: 'From Seeds to Sustainability', titleAr: 'من البذور إلى الاستدامة', excerpt: 'How one organic seed can support a wider environmental cycle.', excerptAr: 'كيف يمكن لبذرة عضوية واحدة أن تدعم دورة بيئية أوسع.', date: '2026-02-20', minutes: 4, image: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=900&q=80' },
]

export const services = [
  { title: 'Request Compost', titleAr: 'طلب السماد', desc: 'Order organic compost for gardens, farms, and soil improvement.', descAr: 'اطلب سماداً عضوياً للحدائق والمزارع وتحسين التربة.' },
  { title: 'Request Seedlings', titleAr: 'طلب الشتلات', desc: 'Get healthy seedlings grown from selected organic seeds.', descAr: 'احصل على شتلات صحية ناتجة من بذور عضوية مختارة.' },
  { title: 'Damaged Produce Collection', titleAr: 'جمع الخضراوات والفواكه التالفة', desc: 'We collect damaged vegetables and fruits from partners before they become waste.', descAr: 'نجمع الخضراوات والفواكه التالفة من الشركاء قبل أن تتحول إلى هدر.' },
  { title: 'Request Seeds', titleAr: 'طلب البذور', desc: 'Request selected organic seeds for starting small-scale growing.', descAr: 'اطلب بذوراً عضوية مختارة للبدء بالزراعة على نطاق صغير.' },
]

export const trackerBatches = [
  { id: 'FL-2026-001', source: 'Amman Central Market', sourceAr: 'سوق عمّان المركزي', quantityKg: 320, vegetableType: 'Mixed produce', vegetableTypeAr: 'خضار وفواكه متنوعة', currentStage: 5, output: { compostKg: 112, seedlings: 160 }, stages: [
    { name: 'Received', nameAr: 'تم الاستلام', date: '2026-02-01', complete: true },
    { name: 'Sorting', nameAr: 'الفرز', date: '2026-02-02', complete: true },
    { name: 'Composting', nameAr: 'التسميد', date: '2026-02-05', complete: true },
    { name: 'Seed extraction', nameAr: 'استخراج البذور', date: '2026-02-08', complete: true },
    { name: 'Growing', nameAr: 'نمو الشتلات', date: '2026-02-20', complete: true },
    { name: 'Complete', nameAr: 'مكتمل', date: '2026-03-01', complete: true },
  ]},
  { id: 'FL-2026-002', source: 'Partner Restaurant', sourceAr: 'مطعم شريك', quantityKg: 185, vegetableType: 'Vegetable leftovers', vegetableTypeAr: 'بقايا خضراوات', currentStage: 3, output: { compostKg: 0, seedlings: 0 }, stages: [
    { name: 'Received', nameAr: 'تم الاستلام', date: '2026-03-03', complete: true },
    { name: 'Sorting', nameAr: 'الفرز', date: '2026-03-04', complete: true },
    { name: 'Composting', nameAr: 'التسميد', date: '2026-03-06', complete: true },
    { name: 'Seed extraction', nameAr: 'استخراج البذور', date: '', complete: false },
    { name: 'Growing', nameAr: 'نمو الشتلات', date: '', complete: false },
    { name: 'Complete', nameAr: 'مكتمل', date: '', complete: false },
  ]},
]
