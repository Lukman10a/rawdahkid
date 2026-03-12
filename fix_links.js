const fs = require('fs');
const files = [
  'app/[locale]/programmes/western/sciences/page.tsx',
  'app/[locale]/programmes/western/mathematics/page.tsx',
  'app/[locale]/programmes/western/programming/page.tsx',
  'app/[locale]/programmes/islamic/arabic/page.tsx',
  'app/[locale]/programmes/islamic/fiqh/page.tsx',
  'app/[locale]/programmes/islamic/hadith/page.tsx',
  'app/[locale]/programmes/islamic/mutoon/page.tsx',
  'app/[locale]/programmes/islamic/quran-memorisation/page.tsx',
  'app/[locale]/programmes/islamic/tawheed/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('import Link from "next/link";')) {
      content = content.replace('import Link from "next/link";', 'import { Link } from "@/i18n/routing";');
      fs.writeFileSync(f, content);
      console.log('Fixed', f);
    }
  }
});
