const fs = require('fs');
console.log(fs.readFileSync('app/[locale]/programmes/islamic/tawheed/page.tsx', 'utf8').match(/href=\"([^\"]+)\"/g));
