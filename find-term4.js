const fs = require('fs');
const c = fs.readFileSync('app/[locale]/programmes/islamic/quran-memorisation/page.tsx', 'utf8');
const idx = c.indexOf('{/* TERM 4 */}');
console.log(JSON.stringify(c.substring(idx, idx + 300)));
