const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let p = 'app/[locale]/programmes/western/' + page + '/page.tsx';
    let code = fs.readFileSync(p, 'utf8');
    
    // standardize the table widths so they trigger internal scrolling correctly
    let newCode = code.replace(/min-w-200/g, 'min-w-[800px]');
    
    fs.writeFileSync(p, newCode);
    console.log('Fixed min width in', page);
});
