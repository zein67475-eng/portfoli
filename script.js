/**
 * Ahmed El Zein - Growth Marketer Portfolio
 * Interactive Script & Bilingual Engine (EN / AR)
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = 'en';
  let currentCurrency = 'EGP';

  // Currency exchange baseline conversion helper
  const currencySymbols = {
    EGP: 'EGP',
    USD: '$',
    SAR: 'SAR'
  };

  const currencyExchangeRates = {
    EGP: 1,
    USD: 0.021, // ~1 USD = 48 EGP
    SAR: 0.078  // ~1 SAR = 12.8 EGP
  };

  // Translations
  const translations = {
    en: {
      nav_about: 'About',
      nav_services: 'Services',
      nav_calculator: 'ROI Tool',
      nav_cases: 'Case Studies',
      nav_testimonials: 'Reviews',
      nav_contact: 'Contact',
      header_cta: 'Chat on WhatsApp',

      hero_status: 'Available for Growth & Performance Marketing',
      hero_hi: "Hi, I'm",
      hero_role: 'Growth Marketer & Digital Strategist',
      hero_desc: 'I help modern brands and e-commerce stores scale profitably through data-backed paid advertising, conversion rate optimization, and high-impact creative funnels.',

      badge_loc_label: 'Based in',
      badge_loc_val: 'Minya, Egypt 🇪🇬',
      badge_exp_label: 'Hands-On Experience',
      badge_exp_val: '2 Years (High Growth)',
      badge_work_label: 'Work Mode',
      badge_work_val: 'Remote / Worldwide',

      btn_hire: 'Start a Project',
      btn_cases: 'View Case Studies',
      btn_resume: '📄 View Bio & CV',

      stat_1: 'Sales Lift Delivered',
      stat_2: 'Performance Experience',
      stat_3: 'Targeted Reach',
      stat_4: 'Average ROAS',

      pill_ecommerce: 'E-Commerce Scale',
      pill_region: 'MENA & Remote',
      pill_level: 'Certified Marketer',

      about_tag: 'WHO I AM',
      about_title: 'Strategic Mindset. Data-Driven Results.',
      about_mission_title: 'My Mission',
      about_mission_desc: 'Bridging the gap between creative marketing and hard business metrics. Every dollar you spend on paid ads is engineered to maximize returns and scale your bottom line.',
      about_location_title: 'Rooted in Minya, Scaling Globally',
      about_location_desc: 'Proudly based in Minya, Egypt, delivering international-standard growth strategies for ambitious e-commerce brands, startup apps, and local enterprises across Egypt and the Gulf.',
      about_exp_title: '2 Years of High-Velocity Growth',
      about_exp_desc: 'With 2 years of intensive, front-line media buying and campaign management, I stay ahead of algorithm shifts across Meta, TikTok, and Google to consistently outperform standard agencies.',

      services_tag: 'WHAT I DELIVER',
      services_title: 'End-to-End Growth & Performance Solutions',
      services_subtitle: 'Comprehensive marketing systems designed to generate leads, lower acquisition costs, and maximize customer lifetime value.',

      svc1_title: 'Meta Advertising (FB & IG)',
      svc1_desc: 'Laser-targeted prospecting, full-funnel dynamic retargeting, and high-converting video ad creatives optimized for scalable conversions.',
      svc1_f1: 'Pixel & Conversions API (CAPI)',
      svc1_f2: 'Custom Audience Segments',
      svc1_f3: 'Dynamic Catalog Ads',

      svc2_title: 'Google Ads & Search Intent',
      svc2_desc: 'Capturing high-intent buyers at the exact moment they search for your products through Search, Performance Max, and YouTube campaigns.',
      svc2_f1: 'High-Intent Keyword Bidding',
      svc2_f2: 'Performance Max (PMax) Campaigns',
      svc2_f3: 'Negative Keyword Filtering',

      svc3_title: 'TikTok Ads & Viral UGC',
      svc3_desc: 'Engaging Gen-Z and millennial audiences with authentic user-generated content hooks that build organic traction and massive paid ROAS.',
      svc3_f1: 'Hook Rate Optimization',
      svc3_f2: 'Spark Ads & Creator Collaboration',
      svc3_f3: 'Trend-Jacked Creative Briefs',

      svc4_title: 'SEO & Content Architecture',
      svc4_desc: 'Long-term organic search authority that drives free qualified inbound traffic, combined with conversion-focused content strategy.',
      svc4_f1: 'Technical & On-Page SEO',
      svc4_f2: 'Commercial Keyword Strategy',
      svc4_f3: 'Content Funnel Mapping',

      svc5_title: 'CRO & Landing Page Design',
      svc5_desc: 'Turning wasted ad clicks into paying customers. Auditing checkout bottlenecks, mobile UX, page speed, and psychological buying triggers.',
      svc5_f1: 'A/B Testing Frameworks',
      svc5_f2: 'Checkout Friction Removal',
      svc5_f3: 'Heatmaps & User Behavior Audits',

      svc6_title: 'Analytics & Attribution (GA4)',
      svc6_desc: 'Clean, rock-solid data tracking. No guessing where your money goes. Full visibility across every customer touchpoint and sales cycle.',
      svc6_f1: 'Google Analytics 4 & GTM',
      svc6_f2: 'Custom Looker Studio Reports',
      svc6_f3: 'Multi-Touch Attribution',

      tools_title: 'My Go-To Marketing Tech Stack',

      calc_tag: 'FREE INTERACTIVE TOOL',
      calc_title: 'Estimate Your Marketing ROI & Growth Potential',
      calc_subtitle: 'Curious about what a calculated marketing budget can generate? Adjust the sliders below to see realistic projections based on my 2 years of benchmark data.',
      calc_curr_label: 'Currency',
      calc_budget_label: 'Monthly Ad Spend',
      calc_industry_label: 'Industry & Business Model',
      ind_ecom: 'E-Commerce & Online Store (Avg. 3.2x - 4.2x ROAS)',
      ind_b2b: 'B2B & Lead Generation (Avg. 3.5x - 5.0x ROAS)',
      ind_saas: 'Apps & Digital Subscriptions (High Scale / Retention)',
      ind_local: 'Local Business & Services (Minya & Egypt)',
      calc_cvr_label: 'Target Funnel Conversion Rate',
      calc_results_head: 'Projected Performance Output',
      res_rev_label: 'Estimated Gross Revenue',
      res_reach: 'Estimated Impressions',
      res_clicks: 'High-Intent Clicks',
      res_orders: 'Projected Conversions',
      res_cpa: 'Estimated Cost Per Order',
      calc_mix: 'Recommended Channel Allocation:',
      calc_cta_btn: 'Discuss This Growth Plan With Ahmed →',

      cases_tag: 'PROVEN IMPACT',
      cases_title: 'Real Case Studies. Real Revenue.',
      cases_subtitle: 'Here is how I translated marketing budgets into record-breaking sales and lower customer acquisition costs.',
      case1_type: 'E-Commerce Fashion Store',
      case1_title: 'Scaling E-Commerce Store Sales by +150% While Cutting CPA by 35%',
      case1_m1: 'Revenue Surge',
      case1_m2: 'CPA Cost Cut',
      case1_m3: 'Return on Ad Spend',
      case_challenge: 'The Challenge:',
      case1_ch_desc: 'High cart abandonment rates, expensive cost-per-purchase, and saturated audiences causing ad fatigue.',
      case_solution: 'The Solution:',
      case1_sol_desc: 'Restructured Meta campaigns into a 3-tier funnel (Cold Prospecting, Dynamic Catalog Retargeting, and VIP Loyalty), improved mobile landing page speed, and introduced TikTok UGC creatives.',
      case_read_more: 'View Full Breakdown →',

      case2_type: 'SaaS Cloud Services',
      case2_title: 'Brand Awareness & Launch Campaign Reaching 500k+ Users & 25k App Downloads',
      case2_m1: 'Targeted Reach',
      case2_m2: 'App Downloads',
      case2_m3: 'Cost Per Install',
      case2_ch_desc: 'Entering a competitive market with zero brand recognition and low organic visibility among tech professionals.',
      case2_sol_desc: 'Combined Google Search capture for intent-based keywords with targeted video ads on LinkedIn and Meta, supplemented by micro-influencer content showing real screen workflows.',

      test_tag: 'CLIENT VOICES',
      test_title: 'What Partners Say About Ahmed',
      quote_1: '"Working with Ahmed El Zein was a complete game-changer for our online store. His ability to dissect campaign data and pinpoint conversion leaks ensured every Egyptian pound we spent yielded double the return."',
      client1_name: 'Sara Mahmoud',
      client1_role: 'Marketing Director at Elegance Apparel',
      quote_2: '"Ahmed brings the strategic rigor of an agency combined with the dedication of an in-house partner. His 2 years of performance marketing experience proved critical when scaling our paid user acquisition."',
      client2_name: 'Omar Farouk',
      client2_role: 'Co-Founder, CloudPulse App',
      quote_3: '"Transparent reporting, sharp creative recommendations, and genuine passion for business results. Communicating with Ahmed is always productive and seamless."',
      client3_name: 'Karim Tarek',
      client3_role: 'E-Commerce Business Owner',

      contact_tag: "LET'S CONNECT",
      contact_title: 'Ready to Multiply Your Revenue?',
      contact_desc: "Whether you need to scale an e-commerce brand, audit an underperforming ad account, or build a complete growth funnel from scratch, I'm here to help.",
      contact_loc_label: 'Location',
      contact_loc_val: 'Minya, Egypt (Available Globally)',
      contact_exp_label: 'Experience',
      contact_exp_val: '2 Years in Performance Marketing',
      btn_copy: 'Copy',

      form_title: 'Send Ahmed a Direct Inquiry',
      form_name: 'Your Name / Company',
      form_email: 'Email Address or Phone',
      form_service: 'What do you want to achieve?',
      opt_1: 'Scale E-Commerce Store Sales',
      opt_2: 'Generate High-Quality B2B / Local Leads',
      opt_3: 'Ad Account Audit & CPA Reduction',
      opt_4: 'Other Strategic Consulting',
      form_message: 'Tell Ahmed about your project & goals',
      form_submit: '🚀 Send Inquiry Directly',

      footer_role: 'Growth Marketer & Performance Specialist • Minya, Egypt',
      foot_top: 'Back to Top ↑',
      footer_rights: 'All rights reserved. Designed with precision.'
    },

    ar: {
      nav_about: 'من أنا',
      nav_services: 'خدماتي',
      nav_calculator: 'حاسبة الأرباح',
      nav_cases: 'المشاريع والنتائج',
      nav_testimonials: 'آراء العملاء',
      nav_contact: 'تواصل معي',
      header_cta: 'تواصل عبر واتساب',

      hero_status: 'متاح الآن لقيادة حملات النمو والتسويق عالي الأداء',
      hero_hi: 'أهلاً بك، أنا',
      hero_role: 'خبير تسويق رقمي واستراتيجيات نمو (Growth Marketer)',
      hero_desc: 'أساعد العلامات التجارية والمتاجر الإلكترونية على مضاعفة مبيعاتها وأرباحها من خلال حملات إعلانية ممولة قائمة على البيانات، وتحسين معدلات التحويل وبناء قنوات بيع عالية التأثير.',

      badge_loc_label: 'المقر والمنشأ',
      badge_loc_val: 'المنيا، مصر 🇪🇬',
      badge_exp_label: 'الخبرة العملية المركزة',
      badge_exp_val: 'سنتين خبرة (نمو سريع)',
      badge_work_label: 'طبيعة العمل',
      badge_work_val: 'عن بُعد / محلياً ودولياً',

      btn_hire: 'ابدأ مشروعك الآن',
      btn_cases: 'استكشف نتائج المشاريع',
      btn_resume: '📄 السيرة الذاتية وملخص الخبرة',

      stat_1: 'نسبة زيادة مبيعات المتاجر',
      stat_2: 'سنتين خبرة تسويقية مكثفة',
      stat_3: 'وصول مستهدف لجمهور العملاء',
      stat_4: 'متوسط العائد على الإعلانات (ROAS)',

      pill_ecommerce: 'مضاعفة مبيعات المتاجر',
      pill_region: 'المنيا ومصر والخليج',
      pill_level: 'مسوّق رقمي معتمد',

      about_tag: 'من هو أحمد زين',
      about_title: 'عقلية استراتيجية ونتائج موثقة بالأرقام',
      about_mission_title: 'رسالتي وهدفي',
      about_mission_desc: 'ردم الفجوة بين الأفكار الإبداعية والأرقام الحقيقية. كل جنيه تنفقه في الإعلانات الممولة مصمم ومُدار ليحقق عائداً مضاعفاً ويوسع حصتك السوقية.',
      about_location_title: 'انطلاقة من قلب المنيا نحو العالم',
      about_location_desc: 'أفخر بانتمائي لمحافظة المنيا عروس الصعيد بمصر، ومنها أقدّم استراتيجيات نمو بمعايير عالمية للمتاجر الناشئة والشركات في مصر ودول الخليج العربي.',
      about_exp_title: 'سنتان من الخبرة المكثفة والمتسارعة',
      about_exp_desc: 'على مدار سنتين من إدارة الميزانيات الإعلانية ومتابعة تحديثات خوارزميات ميتا وتيك توك وجوجل، امتلكت المرونة لتحقيق نتائج تتجاوز أداء الوكالات التقليدية.',

      services_tag: 'ماذا أقدم لك',
      services_title: 'حلول تسويق ونمو شاملة عالية العائد',
      services_subtitle: 'منظومات تسويقية متكاملة تجلب لك عملاء مؤهلين للشراء وتخفض تكلفة الاستحواذ وتضاعف القيمة الدائمة للعميل.',

      svc1_title: 'إعلانات ميتا (فيسبوك وإنستغرام)',
      svc1_desc: 'استهداف فائق الدقة، وحملات إعادة استهداف ديناميكية، وتصميم محتوى إعلاني جذاب بصرياً يحول المشاهدات إلى طلبات شراء مؤكدة.',
      svc1_f1: 'ربط بيكسل والـ Conversions API (CAPI)',
      svc1_f2: 'بناء الجماهير المخصصة والمتشابهة',
      svc1_f3: 'إعلانات الكتالوج الديناميكي للمتاجر',

      svc2_title: 'إعلانات جوجل والبحث المستهدف',
      svc2_desc: 'الوصول للعميل في اللحظة المحددة التي يبحث فيها عن خدماتك أو منتجاتك عبر حملات البحث وشبكة Performance Max ويوتيوب.',
      svc2_f1: 'المزايدة على الكلمات المفتاحية عالية النية',
      svc2_f2: 'حملات الـ Performance Max المتكاملة',
      svc2_f3: 'استبعاد الكلمات غير المجدية لترشيد الميزانية',

      svc3_title: 'إعلانات تيك توك والمحتوى الفيروسي UGC',
      svc3_desc: 'جذب جيل الشباب عبر مقاطع فيديو عفوية وخطافات بصرية قوية تبني الثقة السريعة وتولد مبيعات ضخمة.',
      svc3_f1: 'تحسين معدل الخطاف البصري (Hook Rate)',
      svc3_f2: 'إعلانات Spark Ads والتعاون مع المؤثرين',
      svc3_f3: 'مواكبة الترندات بأسلوب تسويقي ذكي',

      svc4_title: 'تحسين محركات البحث واستراتيجية المحتوى (SEO)',
      svc4_desc: 'بناء حضور عضوي دائم يجلب لك زواراً مؤهلين ومجانيين على المدى الطويل متوافقاً مع سلوكيات البحث للمشترين.',
      svc4_f1: 'سيو تقني وسيو داخلي لصفحات الموقع',
      svc4_f2: 'استهداف الكلمات ذات النية التجارية العالية',
      svc4_f3: 'رسم مسارات القمع البيعي للمقالات والمحتوى',

      svc5_title: 'تحسين معدل التحويل (CRO) وتجربة الشراء',
      svc5_desc: 'تحويل نقرات الزوار إلى مبيعات فعلية عبر حل اختناقات صفحة الدفع وسرعة التصفح وتطبيق المحفزات النفسية للشراء.',
      svc5_f1: 'اختبارات مقارنة A/B Testing للعناصر',
      svc5_f2: 'إزالة الاحتكاك من خطوات إتمام الطلب',
      svc5_f3: 'تحليل الخرائط الحرارية وسلوك الزوار',

      svc6_title: 'التحليلات وتتبع البيانات (GA4)',
      svc6_desc: 'تتبع دقيق وشفاف لكل مليم يُنفق؛ لن تكون هناك حيرة في معرفة مصدر المبيعات عبر لوحات تحكم تفاعلية واضحة.',
      svc6_f1: 'إعداد Google Analytics 4 و Google Tag Manager',
      svc6_f2: 'لوحات قياس مخصصة عبر Looker Studio',
      svc6_f3: 'إسناد المبيعات متعدد النقاط (Attribution)',

      tools_title: 'ترسانتي من الأدوات والبرمجيات الاحترافية',

      calc_tag: 'أداة تفاعلية مجانية',
      calc_title: 'احسب العائد المتوقع وحجم نمو أرباحك',
      calc_subtitle: 'هل ترغب في معرفة ما يمكن لميزانيتك الإعلانية تحقيقه؟ حرّك المؤشرات أدناه لاستكشاف التوقعات بناءً على خبرة سنتين من أرقام السوق.',
      calc_curr_label: 'العملة',
      calc_budget_label: 'الميزانية الإعلانية الشهرية',
      calc_industry_label: 'طبيعة النشاط ونموذج العمل',
      ind_ecom: 'متجر إلكتروني وتجارة رقمية (متوسط 3.2x إلى 4.2x ROAS)',
      ind_b2b: 'خدمات وشركات B2B وتوليد عملاء محتملين (3.5x إلى 5.0x)',
      ind_saas: 'تطبيقات وخدمات اشتراكات سحابية',
      ind_local: 'أنشطة ومحلات تجارية محلية (المنيا ومصر)',
      calc_cvr_label: 'معدل تحويل الزوار المستهدف (Conversion Rate)',
      calc_results_head: 'المخرجات والأرباح المتوقعة للحملة',
      res_rev_label: 'إجمالي المبيعات / الإيراد المتوقع',
      res_reach: 'مرات الظهور والوصول المتوقع',
      res_clicks: 'نقرات العملاء المهتمين',
      res_orders: 'عدد الطلبات أو العملاء المتوقع',
      res_cpa: 'متوسط تكلفة الحصول على الطلب',
      calc_mix: 'التوزيع الأمثل لميزانيتك الإعلانية:',
      calc_cta_btn: 'ناقش خطة النمو هذه مباشرة مع أحمد زين ←',

      cases_tag: 'نتائج حقيقية بالأرقام',
      cases_title: 'دراسات حالة وقصص نجاح من الواقع',
      cases_subtitle: 'إليك نماذج لكيفية ترجمة الميزانيات التسويقية إلى مبيعات قياسية وخفض في تكلفة الشراء.',
      case1_type: 'متجر أزياء وموضة إلكتروني',
      case1_title: 'مضاعفة مبيعات المتجر بنسبة 150% مع خفض تكلفة الإعلان 35%',
      case1_m1: 'زيادة المبيعات',
      case1_m2: 'انخفاض تكلفة الشراء',
      case1_m3: 'عائد الإنفاق الإعلاني',
      case_challenge: 'التحدي القائم:',
      case1_ch_desc: 'ارتفاع نسبة السلات المتروكة، وارتفاع تكلفة الحصول على الطلب (CPA)، وتشبع الجمهور الإعلاني مما سبب تدني النتائج.',
      case_solution: 'الحل المنفذ:',
      case1_sol_desc: 'إعادة بناء حملات ميتا في قمع بيعي ثلاثي المراحل، تحسين سرعة صفحة الدفع بالهاتف، واستخدام فيديوهات UGC عبر تيك توك.',
      case_read_more: 'تفاصيل دراسة الحالة الكاملة ←',

      case2_type: 'تطبيق خدمات سحابية ناشئ (SaaS)',
      case2_title: 'حملة إطلاق وبناء وعي وصلت لأكثر من 500 ألف مستخدم وحققت 25 ألف تحميل',
      case2_m1: 'الوصول المستهدف',
      case2_m2: 'تحميل للتطبيق',
      case2_m3: 'تكلفة التحميل الواحد',
      case2_ch_desc: 'الدخول إلى سوق مزدحم بالمنافسين الكبار دون أي وعي مسبق بالعلامة التجارية وميزانية تحتاج للإدارة بحذر شديد.',
      case2_sol_desc: 'دمج حملات جوجل لاقتناص الباحثين عن الحلول مع فيديوهات توضيحية على لينكدإن وميتا بالتعاون مع صناع محتوى متخصصين.',

      test_tag: 'شهادات العملاء',
      test_title: 'ماذا يقول الشركاء عن العمل مع أحمد زين',
      quote_1: '"العمل مع أحمد زين كان نقطة تحول حقيقية لمتجرنا. قدرته على تحليل الأرقام وفهم الجمهور جعلت كل جنيه يُنفق في الإعلانات يحقق عائداً مضاعفاً ومستداماً."',
      client1_name: 'سارة محمود',
      client1_role: 'مديرة تسويق متجر Elegance للأزياء',
      quote_2: '"يجمع أحمد بين التفكير الاستراتيجي للوكالات الكبرى ومرونة وحرص الشريك الحقيقي. خبرته خلال السنتين الماضيتين كانت حاسمة في تحقيق مستهدفات تطبيقنا."',
      client2_name: 'عمر فاروق',
      client2_role: 'شريك مؤسس، تطبيق CloudPulse',
      quote_3: '"تقارير أسبوعية شديدة الوضوح، اقتراحات إبداعية مستمرة، واهتمام بأدق تفاصيل الأرباح. التواصل مع أحمد سلس ومهني للغاية."',
      client3_name: 'كريم طارق',
      client3_role: 'مالك متجر ومستثمر في التجارة الإلكترونية',

      contact_tag: 'تواصل مباشر',
      contact_title: 'هل أنت مستعد لمضاعفة أرباح عملك؟',
      contact_desc: 'سواء كنت ترغب في توسيع متجرك، فحص وتحسين حساب إعلاني ضعيف، أو بناء استراتيجية نمو متكاملة من الصفر، يسعدني التعاون معك.',
      contact_loc_label: 'الموقع الجغرافي',
      contact_loc_val: 'المنيا، مصر (متاح للعمل عن بُعد محلياً وعالمياً)',
      contact_exp_label: 'سنوات الخبرة',
      contact_exp_val: 'سنتين من الممارسة الإعلانية والتسويقية المركزة',
      btn_copy: 'نسخ',

      form_title: 'أرسل تفاصيل مشروعك إلى أحمد مباشرة',
      form_name: 'اسمك / اسم شركتك',
      form_email: 'البريد الإلكتروني أو رقم الهاتف والواتساب',
      form_service: 'ما هو الهدف الرئيسي لمشروعك؟',
      opt_1: 'مضاعفة مبيعات متجر إلكتروني',
      opt_2: 'جلب عملاء محتملين عالي الجودة للأنشطة والخدمات',
      opt_3: 'تدقيق الحسابات الإعلانية وخفض تكلفة الشراء',
      opt_4: 'استشارة تسويقية وبناء خطة نمو',
      form_message: 'أخبر أحمد بملخص أهدافك وميزانيتك الحالية',
      form_submit: '🚀 إرسال الطلب والاستشارة',

      footer_role: 'خبير تسويق رقمي واستراتيجيات نمو • المنيا، مصر',
      foot_top: 'العودة للأعلى ↑',
      footer_rights: 'جميع الحقوق محفوظة. صُمم بأعلى درجات الدقة والاحترافية.'
    }
  };

  // Case Study Modals Data
  const caseStudiesData = {
    case1: {
      en: {
        title: 'Scaling E-Commerce Fashion Store Sales by +150%',
        client: 'Elegance Fashion Retailer',
        duration: '90 Days (Q3 - Q4)',
        metrics: [
          { label: 'Revenue Increase', val: '+150%' },
          { label: 'CPA Reduction', val: '-35%' },
          { label: 'Final ROAS', val: '4.2x' },
          { label: 'Total Orders', val: '1,420+' }
        ],
        problem: 'The client was spending heavily on broad Meta ads without funnel separation. The mobile bounce rate was over 72%, and ad creatives were suffering from severe audience fatigue within 5 days of launch.',
        strategy: '1. Audit & pixel event tracking rebuild with CAPI.\n2. Rebuilt campaign structure: Top of Funnel (Video Reels & UGC problem/solution hooks), Middle of Funnel (Carousel social proof), Bottom of Funnel (Dynamic Product Ads catalog with time-limited discount).\n3. Optimized mobile checkout by eliminating non-essential fields, boosting checkout speed by 40%.',
        result: 'Within 90 days, monthly gross sales jumped from 180,000 EGP to over 450,000 EGP, while cost per purchase dropped from 145 EGP to 94 EGP.'
      },
      ar: {
        title: 'مضاعفة مبيعات متجر أزياء إلكتروني بنسبة 150%',
        client: 'متجر Elegance للأزياء والموضة',
        duration: '90 يوماً (الربع الثالث والرابع)',
        metrics: [
          { label: 'نسبة نمو المبيعات', val: '+150%' },
          { label: 'انخفاض تكلفة الشراء', val: '-35%' },
          { label: 'عائد الإعلانات النهائي', val: '4.2x' },
          { label: 'إجمالي الطلبات', val: '+1,420 طلب' }
        ],
        problem: 'كان المتجر ينفق ميزانية كبيرة على إعلانات عامة دون قمع بيعي، مع نسبة ارتداد 72% على الموبايل واستهلاك سريع للجمهور الإعلاني.',
        strategy: '1. إعادة ضبط البيكسل مع Conversions API.\n2. بناء قمع إعلاني احترافي: إعلانات فيديو UGC للتوعية، كروت صور للمهتمين، وإعادة استهداف ديناميكية للكتالوج مع عروض محددة بوقت.\n3. تحسين صفحة الدفع وتسهيل الشراء بنقرة واحدة.',
        result: 'ارتفعت المبيعات الشهرية من 180 ألف جنيه إلى أكثر من 450 ألف جنيه مع انخفاض تكلفة الطلب من 145 إلى 94 جنيهاً.'
      }
    },
    case2: {
      en: {
        title: 'Launch & Brand Awareness for SaaS Cloud Platform',
        client: 'CloudPulse B2B SaaS',
        duration: '30 Days Launch Sprint',
        metrics: [
          { label: 'Total Reach', val: '500,000+' },
          { label: 'App Installs', val: '25,000' },
          { label: 'Cost Per Install', val: '$0.18' },
          { label: 'Trial Registrations', val: '4,100+' }
        ],
        problem: 'Zero brand recognition in a highly crowded productivity market with steep customer skepticism and established global competitors.',
        strategy: '1. High-intent Google Search campaigns capturing users searching for competitor alternatives.\n2. Video walkthroughs spotlighting the single most painful pain-point solved by the app.\n3. Performance micro-influencer partnerships driving trusted social endorsements.',
        result: 'Ranked in the top 5 trending productivity apps in Egypt within the first month, generating 25,000 downloads and 4,100 active trial users.'
      },
      ar: {
        title: 'حملة إطلاق وبناء وعي لمنصة خدمات سحابية (SaaS)',
        client: 'تطبيق CloudPulse السحابي',
        duration: '30 يوماً (حملة الإطلاق)',
        metrics: [
          { label: 'الوصول المستهدف', val: '+500,000' },
          { label: 'تحميل للتطبيق', val: '25,000' },
          { label: 'تكلفة التحميل', val: '$0.18' },
          { label: 'حسابات تجريبية مفعلة', val: '+4,100' }
        ],
        problem: 'عدم وجود أي شهرة مسبقة للعلامة التجارية في سوق مليء بالمنافسين الكبار وصعوبة إقناع المستخدم بتجربة تطبيق جديد.',
        strategy: '1. استهداف الكلمات البحثية عالية النية للباحثين عن بدائل برامج المنافسين.\n2. فيديوهات سريعة ومركزة تشرح الحل الفريد الذي يقدمه التطبيق.\n3. التعاون مع صناع محتوى متخصصين لإعطاء ثقة فورية.',
        result: 'احتل التطبيق مرتبة متقدمة بين أفضل 5 تطبيقات صاعدة، محققاً 25 ألف تحميل و4,100 مستخدم نشط في شهره الأول.'
      }
    }
  };

  // Elements
  const langToggle = document.getElementById('langToggle');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const htmlRoot = document.documentElement;

  // Language Switching Engine
  function applyLanguage(lang) {
    currentLang = lang;
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    currentLangLabel.textContent = lang === 'ar' ? 'English' : 'العربية';

    // Update all i18n nodes
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update calculator outputs with proper language formatting
    updateCalculator();
  }

  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // ROI Calculator Logic
  const budgetSlider = document.getElementById('budgetSlider');
  const budgetValue = document.getElementById('budgetValue');
  const cvrSlider = document.getElementById('cvrSlider');
  const cvrValue = document.getElementById('cvrValue');
  const industrySelect = document.getElementById('industrySelect');
  const projectedRevenue = document.getElementById('projectedRevenue');
  const roasMultiplier = document.getElementById('roasMultiplier');
  const netProfitHint = document.getElementById('netProfitHint');
  const estImpressions = document.getElementById('estImpressions');
  const estClicks = document.getElementById('estClicks');
  const estOrders = document.getElementById('estOrders');
  const estCPA = document.getElementById('estCPA');
  const segmentBtns = document.querySelectorAll('.segment-btn');

  // Currency segments
  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      segmentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCurrency = btn.getAttribute('data-currency');
      adjustBudgetRanges(currentCurrency);
      updateCalculator();
    });
  });

  function adjustBudgetRanges(curr) {
    const minBudgetEl = document.getElementById('minBudget');
    const maxBudgetEl = document.getElementById('maxBudget');

    if (curr === 'USD') {
      budgetSlider.min = 250;
      budgetSlider.max = 10000;
      budgetSlider.step = 250;
      budgetSlider.value = 1500;
      minBudgetEl.textContent = '$250';
      maxBudgetEl.textContent = '$10,000+';
    } else if (curr === 'SAR') {
      budgetSlider.min = 1000;
      budgetSlider.max = 40000;
      budgetSlider.step = 1000;
      budgetSlider.value = 5000;
      minBudgetEl.textContent = '1,000';
      maxBudgetEl.textContent = '40,000+';
    } else {
      budgetSlider.min = 5000;
      budgetSlider.max = 200000;
      budgetSlider.step = 2500;
      budgetSlider.value = 25000;
      minBudgetEl.textContent = '5,000';
      maxBudgetEl.textContent = '200,000+';
    }
  }

  function updateCalculator() {
    const budget = parseFloat(budgetSlider.value);
    const cvr = parseFloat(cvrSlider.value);
    const industry = industrySelect.value;
    const currSym = currencySymbols[currentCurrency];

    budgetValue.textContent = `${budget.toLocaleString()} ${currSym}`;
    cvrValue.textContent = `${cvr.toFixed(1)}%`;

    // Multipliers based on industry benchmarks
    let roasFactor = 3.6;
    let cpcFactor = 0.008; // CPC relative to currency baseline

    if (industry === 'ecommerce') {
      roasFactor = 3.8;
    } else if (industry === 'b2b') {
      roasFactor = 4.2;
    } else if (industry === 'saas') {
      roasFactor = 3.4;
    } else if (industry === 'local') {
      roasFactor = 3.1;
    }

    // Dynamic calculations
    const estimatedRev = Math.round(budget * roasFactor);
    const estProfit = Math.round(estimatedRev * 0.48); // ~48% margin estimation

    // Impressions & clicks
    const avgCPM = currentCurrency === 'USD' ? 6.5 : currentCurrency === 'SAR' ? 24 : 140;
    const impressions = Math.round((budget / avgCPM) * 1000);
    const clicks = Math.round(impressions * 0.018); // ~1.8% CTR
    const orders = Math.max(1, Math.round(clicks * (cvr / 100)));
    const cpa = Math.round(budget / orders);

    // Update DOM
    projectedRevenue.textContent = `${estimatedRev.toLocaleString()} ${currSym}`;
    roasMultiplier.textContent = `${roasFactor.toFixed(1)}x ROAS`;

    if (currentLang === 'ar') {
      netProfitHint.textContent = `هامش الربح الصافي المقدر: ~${estProfit.toLocaleString()} ${currSym}`;
      estImpressions.textContent = `${(impressions * 0.85).toLocaleString(undefined, { maximumFractionDigits: 0 })} - ${(impressions * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      estClicks.textContent = `${(clicks * 0.9).toLocaleString(undefined, { maximumFractionDigits: 0 })} - ${(clicks * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      estOrders.textContent = `${Math.round(orders * 0.9)} - ${Math.round(orders * 1.1)} طلب / عميل`;
      estCPA.textContent = `${cpa.toLocaleString()} ${currSym}`;
    } else {
      netProfitHint.textContent = `Estimated Net Margin: ~${estProfit.toLocaleString()} ${currSym}`;
      estImpressions.textContent = `${(impressions * 0.85).toLocaleString(undefined, { maximumFractionDigits: 0 })} - ${(impressions * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      estClicks.textContent = `${(clicks * 0.9).toLocaleString(undefined, { maximumFractionDigits: 0 })} - ${(clicks * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      estOrders.textContent = `${Math.round(orders * 0.9)} - ${Math.round(orders * 1.1)} Conversions`;
      estCPA.textContent = `${cpa.toLocaleString()} ${currSym}`;
    }
  }

  budgetSlider.addEventListener('input', updateCalculator);
  cvrSlider.addEventListener('input', updateCalculator);
  industrySelect.addEventListener('change', updateCalculator);

  // Case Study Modal Logic
  const caseModal = document.getElementById('caseModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentArea = document.getElementById('modalContentArea');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseKey = btn.getAttribute('data-case');
      const caseData = caseStudiesData[caseKey][currentLang];

      if (caseData) {
        modalContentArea.innerHTML = `
          <h2 id="modalTitle" style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #ffffff;">${caseData.title}</h2>
          <p style="color: #10b981; font-weight: 600; margin-bottom: 1.5rem;">${caseData.client} • ${caseData.duration}</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.8rem; background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.08);">
            ${caseData.metrics.map(m => `
              <div style="text-align: center;">
                <span style="display: block; font-size: 1.3rem; font-weight: 800; color: #10b981;">${m.val}</span>
                <span style="font-size: 0.72rem; color: #94a3b8;">${m.label}</span>
              </div>
            `).join('')}
          </div>

          <div style="margin-bottom: 1.2rem;">
            <h4 style="color: #ffffff; margin-bottom: 0.4rem;">${currentLang === 'ar' ? 'التحدي والمشكلة:' : 'The Core Challenge:'}</h4>
            <p style="color: #94a3b8; font-size: 0.92rem; line-height: 1.6;">${caseData.problem}</p>
          </div>

          <div style="margin-bottom: 1.2rem;">
            <h4 style="color: #ffffff; margin-bottom: 0.4rem;">${currentLang === 'ar' ? 'استراتيجية الحل والتنفيذ:' : 'Growth Strategy & Execution:'}</h4>
            <p style="color: #94a3b8; font-size: 0.92rem; line-height: 1.6; white-space: pre-line;">${caseData.strategy}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="color: #ffffff; margin-bottom: 0.4rem;">${currentLang === 'ar' ? 'النتائج النهائية الملموسة:' : 'Bottom-Line Results:'}</h4>
            <p style="color: #94a3b8; font-size: 0.92rem; line-height: 1.6;">${caseData.result}</p>
          </div>

          <div style="text-align: right; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem;">
            <a href="https://wa.me/201019842316?text=Hi%20Ahmed,%20I'm%20impressed%20by%20your%20case%20study%20and%20want%20similar%20results!" target="_blank" class="btn btn-primary btn-sm">
              ${currentLang === 'ar' ? 'اطلب استشارة لنشاطك المماثل ←' : 'Get Similar Results For Your Brand →'}
            </a>
          </div>
        `;
        caseModal.classList.remove('hidden');
      }
    });
  });

  modalCloseBtn.addEventListener('click', () => {
    caseModal.classList.add('hidden');
  });

  caseModal.addEventListener('click', (e) => {
    if (e.target === caseModal) {
      caseModal.classList.add('hidden');
    }
  });

  // Resume Modal Logic
  const quickResumeBtn = document.getElementById('quickResumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const resumeCloseBtn = document.getElementById('resumeCloseBtn');
  const resumeDoneBtn = document.getElementById('resumeDoneBtn');

  if (quickResumeBtn) {
    quickResumeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('hidden');
    });
  }

  [resumeCloseBtn, resumeDoneBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        resumeModal.classList.add('hidden');
      });
    }
  });

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.add('hidden');
    }
  });

  // Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.textContent.trim()).then(() => {
        showToast(currentLang === 'ar' ? 'تم نسخ البريد الإلكتروني بنجاح!' : 'Email copied to clipboard!');
      }).catch(() => {
        showToast('ahmed.zein.marketing@example.com');
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitFormBtn = document.getElementById('submitFormBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('userName').value.trim();
      const userEmail = document.getElementById('userEmail').value.trim();
      const serviceType = document.getElementById('serviceType').value;
      const userMessage = document.getElementById('userMessage').value.trim();

      submitFormBtn.disabled = true;
      submitFormBtn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

      setTimeout(() => {
        submitFormBtn.disabled = false;
        submitFormBtn.textContent = currentLang === 'ar' ? '🚀 تم الإرسال بنجاح!' : '🚀 Sent Successfully!';

        formFeedback.classList.remove('hidden');
        formFeedback.classList.add('success');

        const whatsappMsg = encodeURIComponent(
          `Hello Ahmed! My name is ${userName} (${userEmail}). Service needed: ${serviceType}. Project details: ${userMessage}`
        );

        formFeedback.innerHTML = `
          <strong>${currentLang === 'ar' ? 'شكراً لتواصلك يا ' + userName + '!' : 'Thank you for reaching out, ' + userName + '!'}</strong>
          <p style="margin: 0.4rem 0;">${currentLang === 'ar' ? 'استلم أحمد رسالتك وسيتواصل معك خلال ساعات قليلة.' : 'Ahmed received your inquiry and will respond within a few hours.'}</p>
          <a href="https://wa.me/201019842316?text=${whatsappMsg}" target="_blank" class="btn btn-sm btn-outline" style="margin-top: 0.5rem; display: inline-flex;">
            💬 ${currentLang === 'ar' ? 'فتح المحادثة الفورية على واتساب الآن' : 'Open Instant Chat on WhatsApp Now'}
          </a>
        `;

        contactForm.reset();
      }, 700);
    });
  }

  // Keyboard accessibility: ESC closes open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      caseModal.classList.add('hidden');
      resumeModal.classList.add('hidden');
    }
  });

  // Initialize
  updateCalculator();
});
