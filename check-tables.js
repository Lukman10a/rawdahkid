const fs = require('fs');
['mathematics', 'sciences', 'programming'].forEach(page => {
    let content = fs.readFileSync('app/[locale]/programmes/western/' + page + '/page.tsx', 'utf8');
    let m = content.match(/<table[^>]*>/g);
    console.log(page, m);
});
