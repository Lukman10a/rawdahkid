const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let content = fs.readFileSync('app/[locale]/programmes/western/' + page + '/page.tsx', 'utf8');
    let m = content.match(/className=\"[^\"]*w-[0-9]{2,}[^\"]*\"/g) || [];
    console.log(page, m);
});
