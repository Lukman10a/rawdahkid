const fs = require('fs');

const enFile = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const arFile = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

enFile.Fees = {
  hero: {
    title: "Tuition & Fees",
    desc: "Transparent pricing designed to make exceptional dual-curriculum education accessible."
  },
  bundles: {
    title: "Complete Programmes",
    desc: "Our most comprehensive offerings for holistic development. Showing annual fees.",
    islamic: {
      title: "Islamic Bundle",
      desc: "All 6 Islamic disciplines from foundation to advanced.",
      c1: "Qurʾān (Hifdh & Tajweed)",
      c2: "Arabic Language",
      c3: "Tawheed & Aqeedah",
      c4: "Islamic Jurisprudence (Fiqh)",
      c5: "Hadith Studies",
      c6: "Classical Texts (Mutoon)"
    },
    western: {
      title: "Western Bundle",
      desc: "Rigorous academic progression for modern excellence.",
      c1: "Core Mathematics",
      c2: "Physical Sciences",
      c3: "Biological Sciences",
      c4: "Programming & CompSci",
      c5: "Lab & Practical Sessions",
      c6: "Project-Based Learning"
    },
    dual: {
      bestValue: "Best Value",
      title: "Dual Curriculum",
      desc: "All 9 courses from both the Islamic and Western Programmes (15% off).",
      c1: "All 6 Islamic Courses",
      c2: "All 3 Western Courses",
      c3: "Complete holistic education",
      c4: "Maximum sibling overlap",
      c5: "15% Bundle Discount applied"
    },
    labels: {
      group: "Group Class",
      oneOnOne: "1-on-1",
      yr: "/yr",
      enrolNow: "Enrol Now"
    }
  },
  alacarte: {
    title: "Individual Courses",
    islamic: "Islamic Courses",
    western: "Western Courses",
    courses: {
      quran: "Qurʾān",
      arabic: "Arabic Language",
      tawheed: "Tawheed",
      fiqh: "Fiqh",
      hadith: "Hadith",
      mutoon: "Mutoon",
      math: "Mathematics",
      science: "Sciences",
      programming: "Programming"
    }
  },
  discounts: {
    title: "Discounts & Loyalty Rewards",
    sibling: {
      title: "Sibling Enrolment",
      d1: "2nd Child: 10% off all enrolled courses",
      d2: "3rd Child: 20% off all enrolled courses",
      d3: "4th+ Child: 30% off all enrolled courses",
      note: "(Can be applied on top of bundle pricing)"
    },
    payment: {
      title: "Payment Timing",
      d1: "Annual Upfront: 10% off the total fee",
      d2: "Semester Upfront: 5% off the semester fee",
      d3: "Monthly Plan: No discount"
    },
    footerNote: "Note: A non-refundable registration fee of $100 per student is due upon enrolment to cover administrative processing, placement assessments, and baseline learning materials."
  }
};

arFile.Fees = {
  hero: {
    title: "الرسوم الدراسية",
    desc: "أسعار شفافة مصممة لجعل التعليم المزدوج الاستثنائي في متناول الجميع."
  },
  bundles: {
    title: "البرامج الكاملة",
    desc: "عروضنا الأكثر شمولاً للتطوير المتكامل. يُعرض أدناه الرسوم السنوية.",
    islamic: {
      title: "الباقة الإسلامية",
      desc: "العلوم الإسلامية الستة من التأسيس إلى التقدم.",
      c1: "القرآن (حفظ وتجويد)",
      c2: "اللغة العربية",
      c3: "التوحيد والعقيدة",
      c4: "الفقه الإسلامي",
      c5: "دراسات الحديث",
      c6: "المتون الكلاسيكية"
    },
    western: {
      title: "الباقة الغربية",
      desc: "تقدم أكاديمي صارم للتميز الحديث.",
      c1: "الرياضيات الأساسية",
      c2: "العلوم الفيزيائية",
      c3: "العلوم البيولوجية",
      c4: "البرمجة وعلوم الحاسب",
      c5: "المختبرات والجسات العملية",
      c6: "التعلم القائم على المشاريع"
    },
    dual: {
      bestValue: "أفضل قيمة",
      title: "المنهج المزدوج",
      desc: "جميع الدورات التسع من البرامج الإسلامية والغربية (خصم ١٥٪).",
      c1: "جميع الدورات الإسلامية الست",
      c2: "جميع الدورات الغربية الثلاث",
      c3: "تعليم شامل متكامل",
      c4: "أقصى تداخل بين الأشقاء",
      c5: "تطبيق خصم الباقة ١٥٪"
    },
    labels: {
      group: "فصل جماعي",
      oneOnOne: "فردي",
      yr: "/سنة",
      enrolNow: "سجل الآن"
    }
  },
  alacarte: {
    title: "دورات فردية",
    islamic: "الدورات الإسلامية",
    western: "الدورات الغربية",
    courses: {
      quran: "القرآن",
      arabic: "اللغة العربية",
      tawheed: "التوحيد",
      fiqh: "الفقه",
      hadith: "الحديث",
      mutoon: "المتون",
      math: "الرياضيات",
      science: "العلوم",
      programming: "البرمجة"
    }
  },
  discounts: {
    title: "الخصومات ومكافآت الولاء",
    sibling: {
      title: "تسجيل الأشقاء",
      d1: "الطفل الثاني: خصم ١٠٪ على جميع الدورات",
      d2: "الطفل الثالث: خصم ٢٠٪ على جميع الدورات",
      d3: "الطفل الرابع وما فوق: خصم ٣٠٪ على جميع الدورات",
      note: "(يمكن تطبيقه بالإضافة إلى تسعير الباقة)"
    },
    payment: {
      title: "توقيت الدفع",
      d1: "مقدمًا سنويًا: خصم ١٠٪ من إجمالي الرسوم",
      d2: "مقدمًا فصليًا: خصم ٥٪ من رسوم الفصل الدراسي",
      d3: "خطة شهرية: بدون خصم"
    },
    footerNote: "ملاحظة: تُستحق رسوم تسجيل غير قابلة للاسترداد بقيمة ١٠٠ دولار لكل طالب عند التسجيل لتغطية المعالجة الإدارية واختبارات تحديد المستوى ومواد التعلم الأساسية."
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(enFile, null, 2), 'utf8');
fs.writeFileSync('messages/ar.json', JSON.stringify(arFile, null, 2), 'utf8');
console.log('Dictionaries updated with Fees details.');
