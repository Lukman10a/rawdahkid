const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // add overflow-x-hidden to the root div to prevent page scroll
    let newCode = code.replace(
        /className=\"flex flex-col min-h-screen ([^\"]+)\"/g, 
        'className="flex flex-col min-h-screen overflow-x-hidden max-w-full "'
    );
    
    fs.writeFileSync(p, newCode);
    console.log('Fixed', page);
});
