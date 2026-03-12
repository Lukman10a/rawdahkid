const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // Add min-w-0 to the flex-col root of each page, 
    // and w-full so it takes up only the available screen space.
    code = code.replace(
        / className=\"flex flex-col min-h-screen /g, 
        ' className="flex flex-col min-h-screen w-full min-w-0 '
    );

    // Also add min-w-0 to sections inside just to be perfectly safe, since they are flex items of the flex-col root
    code = code.replace(
        /<section className=\"relative /g, 
        '<section className="w-full min-w-0 relative '
    );

    code = code.replace(
        /<section className=\"py-/g, 
        '<section className="w-full min-w-0 py-'
    );
    
    fs.writeFileSync(p, code);
});
console.log('Fixed pages min-w');
