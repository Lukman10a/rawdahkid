const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // undo the root div class change from earlier
    let newCode = code.replace(
        /className=\"flex flex-col min-h-screen overflow-x-hidden max-w-full ([^\"]+)\"/g, 
        'className="flex flex-col min-h-screen "'
    );

    newCode = newCode.replace(
        /className=\"overflow-x-auto w-full max-w-full\"/g, 
        'className="overflow-x-auto"'
    );
    
    fs.writeFileSync(p, newCode);
});
console.log('Undone');
