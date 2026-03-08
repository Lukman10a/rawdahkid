const fs = require('fs');

let fileStr = fs.readFileSync('app/[locale]/enrol/page.tsx', 'utf8');

const replacements = [
  { 
    find: `Take the first step towards a holistic, uncompromising education for\n            your child.`,
    replace: `{t("header.desc")}`
  },
  {
    find: `Please provide your details below and our admissions team will\n                contact you within 48 hours to secure your child's placement.`,
    replace: `{t("form.desc")}`
  },
  {
    find: `Select a program...`,
    replace: `{t("form.student.programmeSelect")}`
  },
  {
    find: `Dual Curriculum (Islamic & Western Bundle) - Best Value`,
    replace: `{t("form.student.progDual")}`
  },
  {
    find: `Individual Specialized Courses`,
    replace: `{t("form.student.progIndividual")}`
  },
  {
    find: `Select format...`,
    replace: `{t("form.student.formatSelect")}`
  },
  {
    find: `Group Class (Max 5 Students)`,
    replace: `{t("form.student.formatGroup")}`
  },
  {
    find: `Select as many courses as you wish across disciplines.`,
    replace: `{t("form.student.individualCourses.desc")}`
  },
  {
    find: `placeholder="e.g. Abdullah Rahman"`,
    replace: `placeholder={t("form.parent.namePlaceholder")}`
  },
  {
    find: `placeholder="abdullah@example.com"`,
    replace: `placeholder={t("form.parent.emailPlaceholder")}`
  },
  {
    find: `placeholder="+44 123 456 7890"`,
    replace: `placeholder={t("form.parent.phonePlaceholder")}`
  },
  {
    find: `placeholder="e.g. London, UK"`,
    replace: `placeholder={t("form.parent.cityPlaceholder")}`
  },
  {
    find: `placeholder="e.g. Yusuf Rahman"`,
    replace: `placeholder={t("form.student.namePlaceholder")}`
  },
  {
    find: `placeholder="e.g. 8"`,
    replace: `placeholder={t("form.student.agePlaceholder")}`
  },
  {
    find: `placeholder="Tell us about your child's current academic or Islamic level, or ask any questions here..."`,
    replace: `placeholder={t("form.student.additionalPlaceholder")}`
  }
];

replacements.forEach(r => {
  if (r.find.includes('\\n') || r.find.includes('\n')) {
    const regexStr = r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    fileStr = fileStr.replace(new RegExp(regexStr, 'g'), r.replace);
  } else {
    fileStr = fileStr.replace(new RegExp(r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.replace);
  }
});

fs.writeFileSync('app/[locale]/enrol/page.tsx', fileStr, 'utf8');
console.log("Enrol replaced.");