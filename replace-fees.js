const fs = require('fs');

let fileStr = fs.readFileSync('app/[locale]/fees/page.tsx', 'utf8');

fileStr = fileStr.replace('export default function FeesPage() {', `import { useTranslations } from "next-intl"\n\nexport default function FeesPage() {\n  const t = useTranslations("Fees");`);

const replacements = [
  { find: `Tuition & Fees`, replace: `{t("hero.title")}` },
  { find: `Transparent pricing designed to make exceptional dual-curriculum\n              education accessible.`, replace: `{t("hero.desc")}` },
  
  { find: `Complete Programmes`, replace: `{t("bundles.title")}` },
  { find: `Our most comprehensive offerings for holistic development. Showing\n            annual fees.`, replace: `{t("bundles.desc")}` },
  
  // Islamic Bundle
  { find: `>Islamic Bundle</h3>`, replace: `>{t("bundles.islamic.title")}</h3>` },
  { find: `All 6 Islamic disciplines from foundation to advanced.`, replace: `{t("bundles.islamic.desc")}` },
  
  // Western Bundle
  { find: `>Western Bundle</h3>`, replace: `>{t("bundles.western.title")}</h3>` },
  { find: `Rigorous academic progression for modern excellence.`, replace: `{t("bundles.western.desc")}` },

  // Dual Curriculum
  { find: `>Best Value\n            </div>`, replace: `>{t("bundles.dual.bestValue")}\n            </div>` },
  { find: `Dual Curriculum\n            </h3>`, replace: `{t("bundles.dual.title")}\n            </h3>` },
  { find: `All 9 courses from both the Islamic and Western Programmes (15%\n              off).`, replace: `{t("bundles.dual.desc")}` },

  // Labels
  { find: `Group Class`, replace: `{t("bundles.labels.group")}` },
  { find: `1-on-1`, replace: `{t("bundles.labels.oneOnOne")}` },
  { find: `>Enrol Now<`, replace: `>{t("bundles.labels.enrolNow")}<` },
  { find: `/yr`, replace: `{t("bundles.labels.yr")}` },

  // Arrays (Islamic Bundle)
  { find: `"Qurn (Hifdh & Tajweed)",\n                "Arabic Language",\n                "Tawheed & Aqeedah",\n                "Islamic Jurisprudence (Fiqh)",\n                "Hadith Studies",\n                "Classical Texts (Mutoon)",`, 
    replace: `t("bundles.islamic.c1"),\n                t("bundles.islamic.c2"),\n                t("bundles.islamic.c3"),\n                t("bundles.islamic.c4"),\n                t("bundles.islamic.c5"),\n                t("bundles.islamic.c6"),` },

  // Arrays (Western Bundle)
  { find: `"Core Mathematics",\n                "Physical Sciences",\n                "Biological Sciences",\n                "Programming & CompSci",\n                "Lab & Practical Sessions",\n                "Project-Based Learning",`,
    replace: `t("bundles.western.c1"),\n                t("bundles.western.c2"),\n                t("bundles.western.c3"),\n                t("bundles.western.c4"),\n                t("bundles.western.c5"),\n                t("bundles.western.c6"),` },

  // Arrays (Dual Bundle)
  { find: `"All 6 Islamic Courses",\n                "All 3 Western Courses",\n                "Complete holistic education",\n                "Maximum sibling overlap",\n                "15% Bundle Discount applied",`,
    replace: `t("bundles.dual.c1"),\n                t("bundles.dual.c2"),\n                t("bundles.dual.c3"),\n                t("bundles.dual.c4"),\n                t("bundles.dual.c5"),` },

  // Alacarte
  { find: `Individual Courses`, replace: `{t("alacarte.title")}` },
  { find: `Islamic Courses\n                </h3>`, replace: `{t("alacarte.islamic")}\n                </h3>` },
  { find: `Western Courses\n                </h3>`, replace: `{t("alacarte.western")}\n                </h3>` },
  
  { find: `name: "Qurn"`, replace: `name: t("alacarte.courses.quran")` },
  { find: `name: "Arabic Language"`, replace: `name: t("alacarte.courses.arabic")` },
  { find: `name: "Tawheed"`, replace: `name: t("alacarte.courses.tawheed")` },
  { find: `name: "Fiqh"`, replace: `name: t("alacarte.courses.fiqh")` },
  { find: `name: "Hadith"`, replace: `name: t("alacarte.courses.hadith")` },
  { find: `name: "Mutoon"`, replace: `name: t("alacarte.courses.mutoon")` },
  { find: `name: "Mathematics"`, replace: `name: t("alacarte.courses.math")` },
  { find: `name: "Sciences"`, replace: `name: t("alacarte.courses.science")` },
  { find: `name: "Programming"`, replace: `name: t("alacarte.courses.programming")` },

  { find: `>Group\n                          </span>`, replace: `>{t("bundles.labels.group")}\n                          </span>` },
  // { find: `>1-on-1\n                          </span>`, replace: `>{t("bundles.labels.oneOnOne")}\n                          </span>` },
  
  // Discounts
  { find: `Discounts & Loyalty Rewards`, replace: `{t("discounts.title")}` },
  { find: `>Sibling Enrolment\n                  </h5>`, replace: `>{t("discounts.sibling.title")}\n                  </h5>` },
  { find: `>2nd Child: 10% off all enrolled courses</li>`, replace: `>{t("discounts.sibling.d1")}</li>` },
  { find: `>3rd Child: 20% off all enrolled courses</li>`, replace: `>{t("discounts.sibling.d2")}</li>` },
  { find: `>4th+ Child: 30% off all enrolled courses</li>`, replace: `>{t("discounts.sibling.d3")}</li>` },
  { find: `(Can be applied on top of bundle pricing)`, replace: `{t("discounts.sibling.note")}` },

  { find: `>Payment Timing\n                  </h5>`, replace: `>{t("discounts.payment.title")}\n                  </h5>` },
  { find: `>Annual Upfront: 10% off the total fee</li>`, replace: `>{t("discounts.payment.d1")}</li>` },
  { find: `>Semester Upfront: 5% off the semester fee</li>`, replace: `>{t("discounts.payment.d2")}</li>` },
  { find: `>Monthly Plan: No discount</li>`, replace: `>{t("discounts.payment.d3")}</li>` },

  { find: `Note: A non-refundable registration fee of $100 per student is\n                due upon enrolment to cover administrative processing, placement\n                assessments, and baseline learning materials.`, replace: `{t("discounts.footerNote")}` }

];

replacements.forEach(r => {
  if (!r.find.includes('\n') && !r.find.startsWith('"')) {
     fileStr = fileStr.replace(new RegExp(r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.replace);
  } else {
    const regexStr = r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    fileStr = fileStr.replace(new RegExp(regexStr, 'g'), r.replace);
  }
});

// Since >1-on-1 happens without line breaks sometimes, and sometimes with:
fileStr = fileStr.replace(/>1-on-1\n                          <\/span>/g, '>{t("bundles.labels.oneOnOne")}\n                          </span>');

fs.writeFileSync('app/[locale]/fees/page.tsx', fileStr, 'utf8');
console.log("Fees replaced.");
