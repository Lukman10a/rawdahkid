const fs = require('fs');
let C = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
let m = C.match(/className=\"[^\"]*w-150[^\"]*\"/g);
console.log(m);
