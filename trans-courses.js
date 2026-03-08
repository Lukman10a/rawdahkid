const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, 'messages', 'en.json');
const arJsonPath = path.join(__dirname, 'messages', 'ar.json');

const programs = [
  "ProgTawheed", "ProgFiqh", "ProgHadith", "ProgMutoon",
  "ProgMath", "ProgScience", "ProgProgramming"
];

const dictionaries = {
  ProgTawheed: {
    en: { "title": "Tawheed", "desc": "Islamic Theology and Monotheism" },
    ar: { "title": "التوحيد", "desc": "العقيدة الإسلامية والتوحيد" },
    file: "app/[locale]/programmes/islamic/tawheed/page.tsx"
  },
  ProgFiqh: {
    en: { "title": "Fiqh", "desc": "Islamic Jurisprudence" },
    ar: { "title": "الفقه", "desc": "الفقه الإسلامي" },
    file: "app/[locale]/programmes/islamic/fiqh/page.tsx"
  },
  ProgHadith: {
    en: { "title": "Hadith", "desc": "Prophetic Traditions" },
    ar: { "title": "الحديث", "desc": "السنة النبوية" },
    file: "app/[locale]/programmes/islamic/hadith/page.tsx"
  },
  ProgMutoon: {
    en: { "title": "Mutoon", "desc": "Classical Islamic Texts" },
    ar: { "title": "المتون", "desc": "المتون الإسلامية الكلاسيكية" },
    file: "app/[locale]/programmes/islamic/mutoon/page.tsx"
  },
  ProgMath: {
    en: { "title": "Mathematics", "desc": "Western Mathematics" },
    ar: { "title": "الرياضيات", "desc": "الرياضيات" },
    file: "app/[locale]/programmes/western/mathematics/page.tsx"
  },
  ProgScience: {
    en: { "title": "Sciences", "desc": "General Sciences" },
    ar: { "title": "العلوم", "desc": "العلوم العامة" },
    file: "app/[locale]/programmes/western/sciences/page.tsx"
  },
  ProgProgramming: {
    en: { "title": "Programming", "desc": "Computer Programming" },
    ar: { "title": "البرمجة", "desc": "برمجة الحاسوب" },
    file: "app/[locale]/programmes/western/programming/page.tsx"
  }
};

// Update JSON translation files
const updateDict = (filePath, lang) => {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  programs.forEach(prog => {
    if (!content[prog]) {
      content[prog] = dictionaries[prog][lang];
    } else {
      content[prog] = { ...content[prog], ...dictionaries[prog][lang] };
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Updated ${filePath}`);
};

updateDict(enJsonPath, 'en');
updateDict(arJsonPath, 'ar');

// Regex patterns to find text inside common elements, avoiding self-closing and code attributes
const textNodeRegex = />([^<{}]+)</g;

// Update TSX Files
programs.forEach(prog => {
  const filePath = path.join(__dirname, dictionaries[prog].file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Inject next-intl import
  if (!content.includes('next-intl')) {
    content = `import { useTranslations } from "next-intl";\n` + content;
  }

  // Inject useTranslations hook
  if (!content.includes('useTranslations(')) {
    content = content.replace(/(export default function \w+\(.*\) \{)/, `$1\n  const t = useTranslations("${prog}");`);
  }

  // Find all text nodes and replace valid text with {t("key")} structure
  // This is a naive implementation and might require manual verification.
  // We'll read the dictionary for English and replace matching text
  const enDict = dictionaries[prog].en;
  
  for (const [key, val] of Object.entries(enDict)) {
    // Exact match replacement (basic)
    const exactRegex = new RegExp(`>\\s*${val}\\s*<`, 'g');
    content = content.replace(exactRegex, `>{t("${key}")}<`);
  }

  // Additionally, a dynamic matcher that could replace unrecognized hardcoded text
  // with a placeholder key. We'll skip complex dynamic replacement to avoid breaking imports
  // and focus on specific replacements mapped to our dictionary.
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
});

console.log('Done!');
