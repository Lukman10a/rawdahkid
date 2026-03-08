const fs = require('fs');

const en = {
  "Navigation": {
    "home": "Home",
    "about": "About",
    "programmes": "Programmes",
    "islamicProgramme": "Islamic Programme",
    "westernProgramme": "Western Programme",
    "fees": "Fees",
    "enroll": "Enrol Now"
  },
  "Hero": {
    "title1": "Where Children Love to Learn",
    "title2": "Islam and worldly knowledge",
    "arabicSubtitle": "نور العلم يشع في القلوب",
    "hadithQuote": "\"Seeking knowledge is an obligation upon every Muslim..\" [Hadith]",
    "description": "Rawdatul Atfaal provides structured learning in Qur'an, Hadith, Aqeedah, Fiqh, and essential academic subjects, helping children grow with knowledge, discipline, and Islamic character.",
    "exploreButton": "Explore Our Programmes",
    "downloadFeesButton": "Download Fees Guide"
  }
};

const ar = {
  "Navigation": {
    "home": "الرئيسية",
    "about": "من نحن",
    "programmes": "البرامج",
    "islamicProgramme": "البرنامج الإسلامي",
    "westernProgramme": "البرنامج الغربي",
    "fees": "الرسوم",
    "enroll": "سجل الآن"
  },
  "Hero": {
    "title1": "حيث يحب الأطفال التعلم",
    "title2": "الإسلام والمعرفة الدنيوية",
    "arabicSubtitle": "نور العلم يشع في القلوب",
    "hadithQuote": "«طلب العلم فريضة على كل مسلم» [حديث]",
    "description": "توفر روضة الأطفال تعليمًا منظمًا في القرآن والحديث والعقيدة والفقه والمواد الأكاديمية الأساسية، مما يساعد الأطفال على النمو بالمعرفة والانضباط والشخصية الإسلامية.",
    "exploreButton": "استكشف برامجنا",
    "downloadFeesButton": "تحميل دليل الرسوم"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/ar.json', JSON.stringify(ar, null, 2), 'utf8');

console.log('done');
