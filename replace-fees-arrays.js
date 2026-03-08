const fs = require('fs');
let fileStr = fs.readFileSync('app/[locale]/fees/page.tsx', 'utf8');

const replacements = [
  { find: /"Qurʾān \(Hifdh & Tajweed\)"/g, replace: `t("bundles.islamic.c1")` },
  { find: /"Arabic Language"/g, replace: `t("bundles.islamic.c2")` },
  { find: /"Tawheed & Aqeedah"/g, replace: `t("bundles.islamic.c3")` },
  { find: /"Islamic Jurisprudence \(Fiqh\)"/g, replace: `t("bundles.islamic.c4")` },
  { find: /"Hadith Studies"/g, replace: `t("bundles.islamic.c5")` },
  { find: /"Classical Texts \(Mutoon\)"/g, replace: `t("bundles.islamic.c6")` },

  { find: /"Core Mathematics"/g, replace: `t("bundles.western.c1")` },
  { find: /"Physical Sciences"/g, replace: `t("bundles.western.c2")` },
  { find: /"Biological Sciences"/g, replace: `t("bundles.western.c3")` },
  { find: /"Programming & CompSci"/g, replace: `t("bundles.western.c4")` },
  { find: /"Lab & Practical Sessions"/g, replace: `t("bundles.western.c5")` },
  { find: /"Project-Based Learning"/g, replace: `t("bundles.western.c6")` },

  { find: /"All 6 Islamic Courses"/g, replace: `t("bundles.dual.c1")` },
  { find: /"All 3 Western Courses"/g, replace: `t("bundles.dual.c2")` },
  { find: /"Complete holistic education"/g, replace: `t("bundles.dual.c3")` },
  { find: /"Maximum sibling overlap"/g, replace: `t("bundles.dual.c4")` },
  { find: /"15% Bundle Discount applied"/g, replace: `t("bundles.dual.c5")` },

  { find: /name: "Qurʾān"/g, replace: `name: t("alacarte.courses.quran")` },
];

replacements.forEach(r => {
  fileStr = fileStr.replace(r.find, r.replace);
});

fs.writeFileSync('app/[locale]/fees/page.tsx', fileStr, 'utf8');
console.log("Secondary fees replace done.");
