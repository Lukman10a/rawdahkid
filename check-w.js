const fs = require('fs');
let C = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
let m = C.match(/className=\"[^\"]*\"/g);
if(m) {
    m.forEach(x => { 
        if (x.includes('w-') || x.includes('inset') || x.includes('right') || x.includes('left') || x.includes('absolute')) console.log(x); 
    })
}
