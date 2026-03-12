const fs = require('fs');
let code = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
code = code.replace(/units=\{Array\.from\(\{ length: 10 \}\)\.map\(\(\_, j\) => \([^]*?duration: t\(\lvl(\d+)\.u\$\{j \+ 1\}\.d\\)\n\s*\}\)\)\}/g, (match, lvl) => {
    return \units={Array.from({ length: 10 }).map((_, j) => ({\n              no: j + 1,\n              topic: t(\\\lvl\.u\.t\\\),\n              duration: t(\\\lvl\.u\.d\\\),\n              skills: t(\\\lvl\.u\.s\\\)\n            }))}\;
});
fs.writeFileSync('app/[locale]/programmes/western/mathematics/page.tsx', code);
console.log('Done!');
