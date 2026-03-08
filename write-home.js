const fs = require('fs');

const enFile = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const arFile = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

enFile.Home = {
  "stats": {
    "programmes": "Programmes Offered",
    "age": "Age to Begin",
    "levels": "Levels Per Course",
    "commitment": "Commitment to Excellence"
  },
  "story": {
    "quote": "\"We don't just teach children. We nurture the people they are becoming.\"",
    "p1": "Founded on a simple but profound belief: a Muslim child deserves both a strong Islamic identity AND a rigorous academic education. There should be no compromise between deen and duniya.",
    "p2": "At Rawdatul Atfaal, we demand excellence in both, raising a generation grounded in their faith and fully equipped to navigate and lead in the modern world.",
    "readMore": "Read Full Story"
  },
  "dualCurriculum": {
    "title": "Our Dual Curriculum",
    "islamic": {
      "title": "THE ISLAMIC PROGRAMME",
      "courses": "Qur'an | Arabic | Tawheed | Fiqh | Hadith | Mutoon",
      "indivFrom": "Individual courses from",
      "bundleFrom": "Full Bundle from",
      "explore": "Explore Islamic Courses →"
    },
    "western": {
      "title": "THE WESTERN PROGRAMME",
      "courses": "Mathematics | Sciences | Programming",
      "indivFrom": "Individual courses from",
      "bundleFrom": "Full Bundle from",
      "explore": "Explore Western Courses →"
    }
  },
  "testimonials": {
    "title": "What Parents Say",
    "t1": { "quote": "My son's tajweed has improved so much, and yet he still loves building robots in the programming class. This school is exactly what we were looking for.", "author": "ZAYNAB A.", "role": "Parent of Grade 3 Student" },
    "t2": { "quote": "I used to worry about the balance between Islam and academics. Now I see my daughter thriving in both. It's a weight off our shoulders.", "author": "OMAR F.", "role": "Parent of Grade 5 Student" },
    "t3": { "quote": "The teachers truly care. It's not just a school; it feels like a community that supports our family's values.", "author": "FATIMA S.", "role": "Parent of Grade 1 Student" }
  },
  "fees": {
    "title": "Transparent, Fair Pricing",
    "description": "No hidden fees. No surprises. Just exceptional education. Families first.",
    "bundleName": "All Islamic Courses Bundle",
    "perYear": "/ year",
    "monthlyEquiv": "Equivalent to exactly $416 / month",
    "monthlyTag": "Monthly",
    "semesterTag": "Semester",
    "annualTag": "Annual (10% Off)",
    "seeGrid": "See Full Pricing Grid"
  },
  "cta": {
    "quote": "\"Give your child the\nfoundation they deserve.\"",
    "description": "Registration for the 2024-2025 academic year is now open.",
    "enrol": "Enrol Now",
    "contact": "Contact Us"
  }
};

arFile.Home = {
  "stats": {
    "programmes": "البرامج المقدمة",
    "age": "سن القبول",
    "levels": "مستويات لكل دورة",
    "commitment": "الالتزام بالتميز"
  },
  "story": {
    "quote": "«نحن لا نعلم الأطفال فحسب. بل نبني الأشخاص الذين سيصبحون عليهم»",
    "p1": "تأسست المدرسة على إيمان بسيط ولكنه عميق: الطفل المسلم يستحق هوية إسلامية قوية وتعليمًا أكاديميًا صارمًا. لا ينبغي أن يكون هناك تنازل بين الدين والدنيا.",
    "p2": "في روضة الأطفال، نطالب بالتميز في كليهما، لتربية جيل راسخ في عقيدته ومجهز تجهيزًا كاملًا للقيادة في العالم الحديث.",
    "readMore": "اقرأ القصة كاملة"
  },
  "dualCurriculum": {
    "title": "منهجنا المزدوج",
    "islamic": {
      "title": "البرنامج الإسلامي",
      "courses": "القرآن | العربية | التوحيد | الفقه | الحديث | المتون",
      "indivFrom": "الدورات الفردية تبدأ من",
      "bundleFrom": "الباقة الكاملة تبدأ من",
      "explore": "استكشف الدورات الإسلامية ←"
    },
    "western": {
      "title": "البرنامج الغربي",
      "courses": "الرياضيات | العلوم | البرمجة",
      "indivFrom": "الدورات الفردية تبدأ من",
      "bundleFrom": "الباقة الكاملة تبدأ من",
      "explore": "استكشف الدورات الغربية ←"
    }
  },
  "testimonials": {
    "title": "ماذا يقول أولياء الأمور",
    "t1": { "quote": "تحسن تجويد ابني كثيرًا، ومع ذلك لا يزال يحب بناء الروبوتات في فصل البرمجة. هذه المدرسة هي بالضبط ما كنا نبحث عنه.", "author": "زينب أ.", "role": "ولية أمر طالب بالصف الثالث" },
    "t2": { "quote": "كنت أقلق بشأن التوازن بين الإسلام والأكاديميات. الآن أرى ابنتي تزدهر في كليهما. لقد أزاح هذا ثقلاً عن كاهلنا.", "author": "عمر ف.", "role": "ولي أمر طالبة بالصف الخامس" },
    "t3": { "quote": "المعلمون يهتمون حقًا. إنها ليست مجرد مدرسة؛ بل تبدو كمجتمع يدعم قيم عائلتنا.", "author": "فاطمة س.", "role": "ولية أمر طالبة بالصف الأول" }
  },
  "fees": {
    "title": "تسعير شفاف وعادل",
    "description": "لا توجد رسوم خفية. لا توجد مفاجآت. فقط تعليم استثنائي. العائلات أولاً.",
    "bundleName": "باقة الدورات الإسلامية كاملة",
    "perYear": "/ سنوياً",
    "monthlyEquiv": "يعادل 416 دولاراً / شهرياً بالضبط",
    "monthlyTag": "شهري",
    "semesterTag": "فصلي",
    "annualTag": "سنوي (خصم 10%)",
    "seeGrid": "عرض جدول الرسوم كاملاً"
  },
  "cta": {
    "quote": "«امنح طفلك\nالأساس الذي يستحقه.»",
    "description": "التسجيل للعام الدراسي 2024-2025 مفتوح الآن.",
    "enrol": "سجل الآن",
    "contact": "اتصل بنا"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(enFile, null, 2), 'utf8');
fs.writeFileSync('messages/ar.json', JSON.stringify(arFile, null, 2), 'utf8');
