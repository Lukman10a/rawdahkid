const fs = require('fs');
let layout = fs.readFileSync('app/[locale]/layout.tsx', 'utf8');
layout = layout.replace(/<main className=\"grow\">/, '<main className="grow w-full min-w-0 overflow-x-hidden">');
fs.writeFileSync('app/[locale]/layout.tsx', layout);
console.log('Fixed layout.tsx');
