const fs = require('fs');
let C = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
let num = C.indexOf('w-full overflow-x-auto');
console.log(C.substring(num - 100, num + 100));
