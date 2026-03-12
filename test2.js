const fs = require('fs');
['arabic', 'mutoon', 'quran-memorisation'].forEach(u => {
    let txt = fs.readFileSync('app/[locale]/programmes/islamic/' + u + '/page.tsx', 'utf8');
    console.log(u, txt.split('\n').filter(l => l.includes('programmes/islamic')));
});
