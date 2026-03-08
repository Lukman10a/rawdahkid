const fs = require('fs');

const enFile = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const arFile = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

enFile.Enrol = {
  header: {
    title: "Admissions",
    desc: "Take the first step towards a holistic, uncompromising education for your child."
  },
  process: {
    title: "The Process",
    steps: {
      s1: {
        step: "Step 1",
        title: "Submit Application",
        desc: "Fill out the online enrolment form with your child's basic details and programme interest."
      },
      s2: {
        step: "Step 2",
        title: "Assessment",
        desc: "Your child may undergo a brief assessment to determine their starting level in Arabic or Math."
      },
      s3: {
        step: "Step 3",
        title: "Enrolment & Onboarding",
        desc: "Upon acceptance, complete the fee payment to secure the seat and receive the student welcome pack."
      }
    }
  },
  form: {
    title: "Registration Form",
    desc: "Please provide your details below and our admissions team will contact you within 48 hours to secure your child's placement.",
    parent: {
      title: "Parent / Guardian Details",
      name: "Full Name",
      namePlaceholder: "e.g. Abdullah Rahman",
      email: "Email Address",
      emailPlaceholder: "abdullah@example.com",
      phone: "Phone Number",
      phonePlaceholder: "+44 123 456 7890",
      city: "City / Country",
      cityPlaceholder: "e.g. London, UK"
    },
    student: {
      title: "Student Details",
      name: "Child's Name",
      namePlaceholder: "e.g. Yusuf Rahman",
      age: "Child's Age",
      agePlaceholder: "e.g. 8",
      programme: "Programme Interest",
      programmeSelect: "Select a program...",
      progDual: "Dual Curriculum (Islamic & Western Bundle) - Best Value",
      progIslamic: "Islamic Programme Only",
      progWestern: "Western Programme Only",
      progIndividual: "Individual Specialized Courses",
      format: "Class Format",
      formatSelect: "Select format...",
      formatGroup: "Group Class (Max 5 Students)",
      formatOneOnOne: "One-on-One Class",
      individualCourses: {
        title: "Select Individual Courses",
        desc: "Select as many courses as you wish across disciplines.",
        islamicTitle: "Islamic Sciences",
        westernTitle: "Western Academics",
        arabic: "Arabic",
        quran: "Quran Memorisation",
        tawheed: "Tawheed",
        fiqh: "Fiqh",
        hadith: "Hadith",
        mutoon: "Mutoon",
        math: "Mathematics",
        science: "Sciences",
        programming: "Programming"
      },
      additional: "Additional Information / Questions",
      additionalPlaceholder: "Tell us about your child's current academic or Islamic level, or ask any questions here..."
    },
    submit: "Submit Registration Inquiry"
  }
};

arFile.Enrol = {
  header: {
    title: "القبول",
    desc: "اتخذ الخطوة الأولى نحو تعليم متكامل لا مساومة فيه لطفلك."
  },
  process: {
    title: "العملية",
    steps: {
      s1: {
        step: "الخطوة ١",
        title: "تقديم الطلب",
        desc: "املأ استمارة التسجيل عبر الإنترنت بالبيانات الأساسية لطفلك واهتمامه بالبرنامج."
      },
      s2: {
        step: "الخطوة ٢",
        title: "التقييم",
        desc: "قد يخضع طفلك لتقييم موجز لتحديد مستوى بدايته في اللغة العربية أو الرياضيات."
      },
      s3: {
        step: "الخطوة ٣",
        title: "التسجيل والتوجيه",
        desc: "عند القبول، أكمل دفع الرسوم لتأمين المقعد واستلام حزمة الترحيب بالطالب."
      }
    }
  },
  form: {
    title: "استمارة التسجيل",
    desc: "يرجى تقديم بياناتك أدناه وسيقوم فريق القبول لدينا بالاتصال بك في غضون ٤٨ ساعة لتأمين مكان طفلك.",
    parent: {
      title: "بيانات ولي الأمر",
      name: "الاسم الكامل",
      namePlaceholder: "مثال: عبد الله عبد الرحمن",
      email: "البريد الإلكتروني",
      emailPlaceholder: "abdullah@example.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "+44 123 456 7890",
      city: "المدينة / البلد",
      cityPlaceholder: "مثال: لندن، المملكة المتحدة"
    },
    student: {
      title: "بيانات الطالب",
      name: "اسم الطفل",
      namePlaceholder: "مثال: يوسف عبد الرحمن",
      age: "عمر الطفل",
      agePlaceholder: "مثال: ٨",
      programme: "البرنامج المطلوب",
      programmeSelect: "اختر برنامجاً...",
      progDual: "المنهج المزدوج (الباقة الإسلامية والغربية) - أفضل قيمة",
      progIslamic: "البرنامج الإسلامي فقط",
      progWestern: "البرنامج الغربي فقط",
      progIndividual: "دورات فردية متخصصة",
      format: "شكل الفصل",
      formatSelect: "اختر الشكل...",
      formatGroup: "فصل جماعي (بحد أقصى ٥ طلاب)",
      formatOneOnOne: "فصل فردي",
      individualCourses: {
        title: "اختر دورات فردية",
        desc: "الرجاء اختيار عدد الدورات التي ترغب بها عبر التخصصات.",
        islamicTitle: "العلوم الإسلامية",
        westernTitle: "الأكاديميات الغربية",
        arabic: "اللغة العربية",
        quran: "حفظ القرآن",
        tawheed: "التوحيد",
        fiqh: "الفقه",
        hadith: "الحديث",
        mutoon: "المتون",
        math: "الرياضيات",
        science: "العلوم",
        programming: "البرمجة"
      },
      additional: "معلومات إضافية / أسئلة",
      additionalPlaceholder: "أخبرنا عن المستوى الأكاديمي أو الإسلامي الحالي لطفلك، أو اطرح أي أسئلة هنا..."
    },
    submit: "إرسال استفسار التسجيل"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(enFile, null, 2), 'utf8');
fs.writeFileSync('messages/ar.json', JSON.stringify(arFile, null, 2), 'utf8');
console.log('Dictionaries updated with Enrol details.');
