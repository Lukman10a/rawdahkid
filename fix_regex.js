const fs = require('fs');
let code = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');

for (let i = 2; i <= 10; i++) {
    // Look for:
    // duration: t(`lvl2.u${j + 1}.d`)
    // }))}
    // and correctly append skills
    const regex = new RegExp(`duration:\\s*t\\(\`lvl${i}\\.u\\\\\\$\\{j \\+ 1\\}\\.d\`\\)\\s*\\}\\)\\)\\}`);
    
    code = code.replace(regex, `duration: t(\`lvl${i}.u\${j + 1}.d\`),
              skills: t(\`lvl${i}.u\${j + 1}.s\`)
            }))}`);
    console.log(`Replaced level ${i}`);
}

fs.writeFileSync('app/[locale]/programmes/western/mathematics/page.tsx', code);
console.log('Script done!');
