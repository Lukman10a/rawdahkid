const fs = require('fs');
let code = fs.readFileSync('app/[locale]/programmes/western/mathematics/page.tsx', 'utf8');
for (let i = 2; i <= 10; i++) {
    const searchStr1 = \duration: t(\\\lvl\.u\\\.d\\\)\\n            }))}\;
    const searchStr2 = \duration: t(\\\lvl\.u\\\.d\\\)\\r\\n            }))}\;
    
    const replaceStr = \duration: t(\\\lvl\.u\\\.d\\\),\\n              skills: t(\\\lvl\.u\\\.s\\\)\\n            }))}\;

    if (code.includes(searchStr1)) {
        code = code.replace(searchStr1, replaceStr);
        console.log(\Fixed lvl \ (LF)\);
    } else if (code.includes(searchStr2)) {
        code = code.replace(searchStr2, replaceStr);
        console.log(\Fixed lvl \ (CRLF)\);
    } else {
        console.log(\Could not find lvl \\);
    }
}
fs.writeFileSync('app/[locale]/programmes/western/mathematics/page.tsx', code);
