const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // ensure overflow containers are fully constrained
    let newCode = code.replace(/className=\"overflow-x-auto\"/g, 'className="overflow-x-auto w-full max-w-[100vw] sm:max-w-full"');
    
    fs.writeFileSync(p, newCode);
    console.log('Fixed tables in', page);
});
