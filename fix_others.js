const fs = require('fs');
const files = [
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'app/[locale]/page.tsx' // check home page too
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
