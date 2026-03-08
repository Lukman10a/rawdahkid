const fs = require('fs');

const enFile = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const arFile = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

enFile.Contact = {
  header: {
    title: "Get In Touch",
    desc: "We are here to answer your questions and welcome you to the Rawdatul Atfaal community."
  },
  info: {
    campus: {
      title: "Our Campus",
      c1: "123 Knowledge Avenue",
      c2: "Leicester, UK LE1 2AB"
    },
    phone: {
      title: "Phone",
      c1: "Admissions: +44 116 123 4567",
      c2: "Main Office: +44 116 123 4568"
    },
    email: {
      title: "Email",
      c1: "admissions@rawdatulatfaal.org",
      c2: "info@rawdatulatfaal.org"
    },
    hours: {
      title: "Office Hours",
      c1: "Mon - Fri: 8:00 AM - 4:00 PM",
      c2: "Sat - Sun: Closed"
    }
  },
  form: {
    title: "Send a Message",
    desc: "We usually respond within one business day.",
    nameLabel: "Full Name",
    namePlaceholder: "Ahmad Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "ahmad@example.com",
    subjectLabel: "Subject",
    subjectCurrentParents: "Current Parents Support",
    subjectProspective: "Prospective Enrollment",
    subjectCurriculum: "Curriculum Query",
    subjectGeneral: "General Inquiry",
    subjectOther: "Other",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    submitBtn: "Send Message"
  }
};

arFile.Contact = {
  header: {
    title: "تواصل معنا",
    desc: "نحن هنا للإجابة على أسئلتك والترحيب بك في مجتمع روضة الأطفال."
  },
  info: {
    campus: {
      title: "الحرم المدرسي",
      c1: "١٢٣ شارع المعرفة",
      c2: "ليستر، المملكة المتحدة LE1 2AB"
    },
    phone: {
      title: "الهاتف",
      c1: "القبول: +44 116 123 4567",
      c2: "المكتب الرئيسي: +44 116 123 4568"
    },
    email: {
      title: "البريد الإلكتروني",
      c1: "admissions@rawdatulatfaal.org",
      c2: "info@rawdatulatfaal.org"
    },
    hours: {
      title: "ساعات العمل",
      c1: "الاثنين - الجمعة: 8:00 صباحاً - 4:00 مساءً",
      c2: "السبت - الأحد: مغلق"
    }
  },
  form: {
    title: "أرسل رسالة",
    desc: "نرد عادة خلال يوم عمل واحد.",
    nameLabel: "الاسم الكامل",
    namePlaceholder: "أحمد فلان",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "ahmad@example.com",
    subjectLabel: "الموضوع",
    subjectCurrentParents: "دعم أولياء الأمور الحاليين",
    subjectProspective: "التسجيل المستقبلي",
    subjectCurriculum: "استفسار عن المنهج",
    subjectGeneral: "استفسار عام",
    subjectOther: "أخرى",
    messageLabel: "الرسالة",
    messagePlaceholder: "كيف يمكننا مساعدتك؟",
    submitBtn: "أرسل الرسالة"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(enFile, null, 2), 'utf8');
fs.writeFileSync('messages/ar.json', JSON.stringify(arFile, null, 2), 'utf8');
console.log('Dictionaries updated with Contact details.');
