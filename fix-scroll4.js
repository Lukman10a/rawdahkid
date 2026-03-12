const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // fix the overly aggressive 100vw constraint that ignores padding
    let newCode = code.replace(/className=\"overflow-x-auto w-full max-w-\[100vw\] sm:max-w-full\"/g, 'className="overflow-x-auto w-full max-w-full"');
    
    fs.writeFileSync(p, newCode);
    console.log('Fixed container width in', page);
});
