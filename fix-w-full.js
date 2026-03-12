const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    code = code.replace(
        /className=\"overflow-x-auto\"/g, 
        'className="w-full overflow-x-auto"'
    );
    
    fs.writeFileSync(p, code);
});
console.log('Fixed w-full');
