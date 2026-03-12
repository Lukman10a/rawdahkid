const fs = require('fs');
let content = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
let classes = content.match(/className=\"[^\"]*\"/g);
if(classes) {
    classes.forEach(c => {
        if(c.includes('min-w-') || c.includes('w-') || c.includes('w-[') || c.includes('vw')) console.log(c);
    });
}
