/* ==========================================================
   i18n.js — English / Arabic content + RTL switching
   Add or edit text here; the HTML uses data-i18n="key".
   ========================================================== */
(function () {
  const dict = {
    en: {
      skip: "Skip to content",
      "nav.home": "Home", "nav.about": "About Us", "nav.services": "Our Services", "nav.process": "How It Works",
      "nav.faq": "FAQ", "nav.contact": "Contact Us", "nav.quote": "Get a Quote",
      "hero.badge": "Logistics & Shipping Services",
      "hero.title1": "Moving your business", "hero.title2": "forward",
      "hero.lead": "Welcome to Manaf Logistic Company — smart, reliable and efficient land transportation and supply chain solutions across the Kingdom of Saudi Arabia.",
      "hero.cta1": "Request a Quote", "hero.cta2": "Explore Services",
      "track.title": "Track Your Shipment", "track.sub": "Enter your tracking number to see the latest status.",
      "track.ph": "e.g. MNF-100245", "track.btn": "Track",
      "track.err": "Please enter a valid tracking number (e.g. MNF-100245).",
      "track.no": "Shipment", "track.status": "Status",
      "track.s1": "Received", "track.s2": "In Transit", "track.s3": "Out for Delivery", "track.s4": "Delivered",
      "track.note": "Demo preview — connect this form to your tracking system to show live data.",
      "stats.fleet": "Trucks & Trailers", "stats.clients": "Happy Clients", "stats.ship": "Shipments Delivered",
      "about.eyebrow": "Who We Are", "about.title": "About Us",
      "about.text": "At Manaf Logistics, we move more than just shipments — we move businesses forward. Founded with a vision to redefine logistics, Manaf has become a trusted name in smart, reliable, and efficient supply chain solutions.",
      "about.l1": "Tailored solutions for every industry and shipment size",
      "about.l2": "Modern fleet, secure warehousing and real-time tracking",
      "about.l3": "A dedicated team committed to precision and care",
      "about.btn": "Talk to Our Team", "about.exp": "Trucks & Trailers",
      "srv.eyebrow": "Land Transportation", "srv.title": "Our Services",
      "srv.text": "We provide road transportation services across Saudi Arabia through a diversified fleet designed to serve businesses, factories, projects, and commercial sectors.",
      "srv.incl": "Our services include",
      "srv.c1t": "Intercity Transportation", "srv.c2t": "Factory Transportation", "srv.c3t": "Warehouse Transportation", "srv.c4t": "Project Transportation",
      "srv.c5t": "Commercial Transportation", "srv.c6t": "On-Demand Transportation", "srv.c7t": "Scheduled Transportation", "srv.c8t": "Long-Term Transportation Contracts",
      "srv.sub": "Built for businesses, factories and projects",
      "srv.subp": "Our diversified fleet serves companies, factories, projects and commercial sectors — from one-off requests to long-term contracts.",
      "srv.btn": "Request a Quote",
      "fleet.eyebrow": "Our Fleet", "fleet.title": "A Fleet Built for Your Cargo",
      "fleet.text": "With 120+ trucks and trailers, Manaf keeps your cargo moving on schedule across the Kingdom.",
      "fleet.p1": "Trucks and trailers for a wide range of cargo", "fleet.p2": "Planned routes and on-time scheduling", "fleet.p3": "Experienced, dedicated drivers",
      "fleet.btn": "Book a Truck",
      "form.from": "Shipping from (city)", "form.to": "Shipping to (city / country)", "form.wa": "Quote via WhatsApp",
      "proc.eyebrow": "Simple & Transparent", "proc.title": "How It Works",
      "proc.text": "Four clear steps from your first message to delivery at the door.",
      "proc.s1t": "Request", "proc.s1p": "Tell us what you ship, where and when.",
      "proc.s2t": "Plan & Quote", "proc.s2p": "We design the best route and send a clear quote.",
      "proc.s3t": "Ship", "proc.s3p": "Pickup, handling and transport with live tracking.",
      "proc.s4t": "Deliver", "proc.s4p": "Safe, on-time delivery with confirmation.",
      "why.tag": "Moving your products across borders", "why.eyebrow": "Our Advantage", "why.title": "Why Choose Us",
      "why.text": "At Manaf Logistics, we combine experience, efficiency, and innovation to ensure your cargo reaches its destination safely and on time — every time.",
      "why.b1t": "Safe Package", "why.b1p": "Secure, damage-free delivery backed by a proven operations track record.",
      "why.b2t": "Reliability", "why.b2p": "Dedicated team, precise workflows, and timely arrival every time.",
      "why.b3t": "Global Reach", "why.b3p": "From local markets to international routes, scalable solutions that keep your business ahead.",
      "cov.eyebrow": "Coverage", "cov.title": "Across the Kingdom",
      "cov.text": "Our road network connects the cities and regions of the Kingdom, serving businesses, factories and projects.",
      "cov.t1": "Riyadh", "cov.t2": "Jeddah", "cov.t3": "Dammam", "cov.t4": "Makkah & Madinah", "cov.t5": "All Regions",
      "test.eyebrow": "Testimonials", "test.title": "What Our Customers Say",
      "test.r1": "Marketing Manager", "test.r2": "Graphic Designer",
      "test.p1": "Leverage agile frameworks to provide a robust synapsis for strategy and collaborative thinking to further the overall value proposition.",
      "test.p2": "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      "faq.eyebrow": "FAQ", "faq.title": "Frequently Asked Questions",
      "faq.q1": "How do I get a shipping quote?", "faq.a1": "Send us the details through the contact form or call us. We usually reply with a clear quote within one business day.",
      "faq.q2": "Can I track my shipment?", "faq.a2": "Yes. Use the tracking box at the top of the page with your tracking number to see the latest status.",
      "faq.q3": "What types of transportation do you offer?", "faq.a3": "Intercity, factory, warehouse, project and commercial transportation — on demand or scheduled — plus long-term transportation contracts.",
      "faq.q4": "Which areas do you cover?", "faq.a4": "We provide road transportation between cities and regions across Saudi Arabia.",
      "cta.title": "Ready to streamline your shipping?", "cta.text": "Let's build a logistics plan that fits your business and your budget.", "cta.btn": "Start Now",
      "con.eyebrow": "Contact", "con.title": "Get in touch with us",
      "con.text": "Ready to streamline your shipping operations? Contact us today to discuss your needs and discover how Manaf Shipping Services can elevate your cargo transportation experience.",
      "con.email": "Email", "con.call": "Call Us", "con.addr": "Saudi Arabia, Riyadh",
      "form.name": "Your name*", "form.email": "Email*", "form.phone": "Phone Number*", "form.city": "City*", "form.msg": "Your Message",
      "form.svc": "Select a service", "form.send": "Submit Message",
      "form.errReq": "This field is required", "form.errMail": "Enter a valid email", "form.errPhone": "Enter a valid phone number",
      "form.ok": "Thank you! Your message has been received. We'll contact you shortly.",
      "foot.hero1": "Let's ship", "foot.hero2": "Together", "foot.tag": "Let's ship",
      "foot.pages": "Pages", "foot.test": "Testimonials", "foot.services": "Services", "foot.sub": "Subscribe",
      "foot.ph": "Email here*", "foot.send": "Send",
      "foot.ok": "Subscribed successfully. Thank you!", "foot.err": "Please enter a valid email.",
      "foot.copy": "Copyright © Manaf Logistic | Designed by Mashal Aljaberi",
      "st.1": "Received at warehouse", "st.2": "In transit", "st.3": "Out for delivery", "st.4": "Delivered"
    },

    ar: {
      skip: "انتقل إلى المحتوى",
      "nav.home": "الرئيسية", "nav.about": "من نحن", "nav.services": "خدماتنا", "nav.process": "كيف نعمل",
      "nav.faq": "الأسئلة الشائعة", "nav.contact": "تواصل معنا", "nav.quote": "اطلب عرض سعر",
      "hero.badge": "خدمات الشحن والخدمات اللوجستية",
      "hero.title1": "ننقل أعمالك", "hero.title2": "نحو الأمام",
      "hero.lead": "مرحباً بك في شركة مناف اللوجستية — حلول نقل بري وسلاسل إمداد ذكية وموثوقة وفعّالة في مختلف أنحاء المملكة العربية السعودية.",
      "hero.cta1": "اطلب عرض سعر", "hero.cta2": "استكشف خدماتنا",
      "track.title": "تتبّع شحنتك", "track.sub": "أدخل رقم التتبع لمعرفة آخر حالة للشحنة.",
      "track.ph": "مثال: MNF-100245", "track.btn": "تتبّع",
      "track.err": "يرجى إدخال رقم تتبع صحيح (مثال: MNF-100245).",
      "track.no": "الشحنة", "track.status": "الحالة",
      "track.s1": "تم الاستلام", "track.s2": "في الطريق", "track.s3": "خرجت للتسليم", "track.s4": "تم التسليم",
      "track.note": "عرض تجريبي — اربط النموذج بنظام التتبع لديك لعرض بيانات حقيقية.",
      "stats.fleet": "شاحنة ومقطورة", "stats.clients": "عميل", "stats.ship": "شحنة تم تسليمها",
      "about.eyebrow": "من نحن", "about.title": "عن مناف",
      "about.text": "في مناف لوجستيك، نحن لا ننقل الشحنات فحسب، بل ندفع أعمالك إلى الأمام. تأسست الشركة برؤية لإعادة تعريف الخدمات اللوجستية، وأصبحت اسماً موثوقاً في حلول سلاسل الإمداد الذكية والموثوقة والفعّالة.",
      "about.l1": "حلول مصممة لكل قطاع ولكل حجم شحنة",
      "about.l2": "أسطول حديث ومستودعات آمنة وتتبّع لحظي",
      "about.l3": "فريق متفانٍ يلتزم بالدقة والعناية",
      "about.btn": "تحدّث مع فريقنا", "about.exp": "شاحنة ومقطورة",
      "srv.eyebrow": "النقل البري", "srv.title": "خدماتنا",
      "srv.text": "نوفر خدمات النقل البري بين مختلف مدن ومناطق المملكة، من خلال أسطول متنوع يلبي احتياجات الشركات والمصانع والمشاريع والقطاعات التجارية.",
      "srv.incl": "تشمل خدماتنا",
      "srv.c1t": "النقل بين المدن", "srv.c2t": "النقل من وإلى المصانع", "srv.c3t": "النقل من وإلى المستودعات", "srv.c4t": "النقل للمشاريع",
      "srv.c5t": "النقل التجاري", "srv.c6t": "النقل حسب الطلب", "srv.c7t": "النقل المتكرر", "srv.c8t": "عقود النقل طويلة الأجل",
      "srv.sub": "مصمم للشركات والمصانع والمشاريع",
      "srv.subp": "يخدم أسطولنا المتنوع الشركات والمصانع والمشاريع والقطاعات التجارية — من الطلبات المفردة إلى العقود طويلة الأجل.",
      "srv.btn": "اطلب عرض سعر",
      "fleet.eyebrow": "أسطولنا", "fleet.title": "أسطول مجهّز لشحنتك",
      "fleet.text": "بأكثر من 120 شاحنة ومقطورة، تحافظ مناف على حركة شحنتك في موعدها في مختلف أنحاء المملكة.",
      "fleet.p1": "شاحنات ومقطورات تناسب مختلف أنواع البضائع", "fleet.p2": "مسارات مخططة وجدولة دقيقة للمواعيد", "fleet.p3": "سائقون ذوو خبرة ومتفانون",
      "fleet.btn": "احجز شاحنة",
      "form.from": "الشحن من (المدينة)", "form.to": "الشحن إلى (المدينة / الدولة)", "form.wa": "اطلب عرض سعر عبر واتساب",
      "proc.eyebrow": "بسيط وواضح", "proc.title": "كيف نعمل",
      "proc.text": "أربع خطوات واضحة من رسالتك الأولى حتى التسليم إلى باب الوجهة.",
      "proc.s1t": "الطلب", "proc.s1p": "أخبرنا بما تشحنه، وإلى أين، ومتى.",
      "proc.s2t": "التخطيط والتسعير", "proc.s2p": "نصمّم أفضل مسار ونرسل لك عرض سعر واضحاً.",
      "proc.s3t": "الشحن", "proc.s3p": "استلام ومناولة ونقل مع تتبّع مباشر.",
      "proc.s4t": "التسليم", "proc.s4p": "تسليم آمن وفي الموعد مع تأكيد الاستلام.",
      "why.tag": "ننقل منتجاتك عبر الحدود", "why.eyebrow": "ميزتنا", "why.title": "لماذا تختارنا",
      "why.text": "في مناف لوجستيك نجمع بين الخبرة والكفاءة والابتكار لنضمن وصول شحنتك إلى وجهتها بأمان وفي الوقت المحدد — في كل مرة.",
      "why.b1t": "شحنة آمنة", "why.b1p": "تسليم آمن وخالٍ من التلف بدعم سجل تشغيلي مثبت.",
      "why.b2t": "الموثوقية", "why.b2p": "فريق متفانٍ وإجراءات دقيقة ووصول في الموعد دائماً.",
      "why.b3t": "امتداد عالمي", "why.b3p": "من الأسواق المحلية إلى المسارات الدولية، حلول قابلة للتوسع تُبقي أعمالك في المقدمة.",
      "cov.eyebrow": "التغطية", "cov.title": "في مختلف أنحاء المملكة",
      "cov.text": "تربط شبكتنا البرية مدن ومناطق المملكة، وتخدم الشركات والمصانع والمشاريع.",
      "cov.t1": "الرياض", "cov.t2": "جدة", "cov.t3": "الدمام", "cov.t4": "مكة والمدينة", "cov.t5": "جميع المناطق",
      "test.eyebrow": "آراء العملاء", "test.title": "ماذا يقول عملاؤنا",
      "test.r1": "مدير تسويق", "test.r2": "مصممة جرافيك",
      "test.p1": "نص تجريبي لرأي العميل — استبدله بتقييم حقيقي من أحد عملائك ليعكس جودة خدماتكم.",
      "test.p2": "نص تجريبي لرأي العميل — استبدله بتقييم حقيقي من أحد عملائك ليعكس جودة خدماتكم.",
      "faq.eyebrow": "الأسئلة الشائعة", "faq.title": "أسئلة يطرحها عملاؤنا",
      "faq.q1": "كيف أحصل على عرض سعر للشحن؟", "faq.a1": "أرسل لنا التفاصيل عبر نموذج التواصل أو اتصل بنا، وسنرد عادةً بعرض سعر واضح خلال يوم عمل واحد.",
      "faq.q2": "هل يمكنني تتبّع شحنتي؟", "faq.a2": "نعم، استخدم مربع التتبع في أعلى الصفحة وأدخل رقم التتبع لمعرفة آخر حالة.",
      "faq.q3": "ما أنواع النقل التي تقدمونها؟", "faq.a3": "النقل بين المدن، ومن وإلى المصانع والمستودعات، وللمشاريع، والنقل التجاري — حسب الطلب أو بشكل متكرر — إضافة إلى عقود النقل طويلة الأجل.",
      "faq.q4": "ما المناطق التي تغطونها؟", "faq.a4": "نوفر خدمات النقل البري بين مختلف مدن ومناطق المملكة العربية السعودية.",
      "cta.title": "جاهز لتطوير عمليات الشحن لديك؟", "cta.text": "لنبنِ معاً خطة لوجستية تناسب أعمالك وميزانيتك.", "cta.btn": "ابدأ الآن",
      "con.eyebrow": "تواصل", "con.title": "تواصل معنا",
      "con.text": "هل أنت مستعد لتطوير عمليات الشحن لديك؟ تواصل معنا اليوم لنناقش احتياجاتك ونوضح كيف ترتقي خدمات مناف للشحن بتجربة نقل بضائعك.",
      "con.email": "البريد الإلكتروني", "con.call": "اتصل بنا", "con.addr": "المملكة العربية السعودية، الرياض",
      "form.name": "الاسم*", "form.email": "البريد الإلكتروني*", "form.phone": "رقم الجوال*", "form.city": "المدينة*", "form.msg": "رسالتك",
      "form.svc": "اختر الخدمة", "form.send": "إرسال الرسالة",
      "form.errReq": "هذا الحقل مطلوب", "form.errMail": "أدخل بريداً إلكترونياً صحيحاً", "form.errPhone": "أدخل رقم جوال صحيحاً",
      "form.ok": "شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.",
      "foot.hero1": "لنشحن", "foot.hero2": "معاً", "foot.tag": "لنشحن",
      "foot.pages": "الصفحات", "foot.test": "آراء العملاء", "foot.services": "الخدمات", "foot.sub": "اشترك في نشرتنا",
      "foot.ph": "بريدك الإلكتروني*", "foot.send": "إرسال",
      "foot.ok": "تم الاشتراك بنجاح. شكراً لك!", "foot.err": "يرجى إدخال بريد إلكتروني صحيح.",
      "foot.copy": "جميع الحقوق محفوظة © مناف لوجستيك | تصميم مشعل الجابري",
      "st.1": "تم الاستلام في المستودع", "st.2": "في الطريق", "st.3": "خرجت للتسليم", "st.4": "تم التسليم"
    }
  };

  const meta = {
    en: { title: "Manaf Logistic Company | Smart Supply Chain Solutions", dir: "ltr", btn: "العربية" },
    ar: { title: "مناف لوجستيك | حلول سلاسل الإمداد الذكية", dir: "rtl", btn: "English" }
  };

  let current = "en";

  function t(key) { return (dict[current] && dict[current][key]) || dict.en[key] || key; }

  function apply(lang) {
    current = dict[lang] ? lang : "en";
    const root = document.documentElement;
    root.lang = current;
    root.dir = meta[current].dir;
    document.title = meta[current].title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = meta[current].btn;

    try { localStorage.setItem("manaf-lang", current); } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: current }));
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem("manaf-lang"); } catch (e) {}
    apply(saved || "en");
    const btn = document.getElementById("langBtn");
    if (btn) btn.addEventListener("click", function () { apply(current === "en" ? "ar" : "en"); });
  }

  window.ManafI18n = { t: t, apply: apply, get lang() { return current; } };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
