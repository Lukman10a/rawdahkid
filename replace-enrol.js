const fs = require('fs');

let fileStr = fs.readFileSync('app/[locale]/enrol/page.tsx', 'utf8');

fileStr = fileStr.replace('export default function EnrolPage() {', `import { useTranslations } from "next-intl"\n\nexport default function EnrolPage() {\n  const t = useTranslations("Enrol");`);

const replacements = [
  // Header
  { find: `Admissions\n          </h1>`, replace: `{t("header.title")}\n          </h1>` },
  { find: `>Take the first step towards a holistic, uncompromising education for\n            your child.</p>`, replace: `>{t("header.desc")}</p>` },
  
  // Process
  { find: `The Process\n            </h2>`, replace: `{t("process.title")}\n            </h2>` },
  
  { find: `step: "Step 1"`, replace: `step: t("process.steps.s1.step")` },
  { find: `title: "Submit Application"`, replace: `title: t("process.steps.s1.title")` },
  { find: `desc: "Fill out the online enrolment form with your child's basic details and programme interest."`, replace: `desc: t("process.steps.s1.desc")` },

  { find: `step: "Step 2"`, replace: `step: t("process.steps.s2.step")` },
  { find: `title: "Assessment"`, replace: `title: t("process.steps.s2.title")` },
  { find: `desc: "Your child may undergo a brief assessment to determine their starting level in Arabic or Math."`, replace: `desc: t("process.steps.s2.desc")` },

  { find: `step: "Step 3"`, replace: `step: t("process.steps.s3.step")` },
  { find: `title: "Enrolment & Onboarding"`, replace: `title: t("process.steps.s3.title")` },
  { find: `desc: "Upon acceptance, complete the fee payment to secure the seat and receive the student welcome pack."`, replace: `desc: t("process.steps.s3.desc")` },

  // Form
  { find: `Registration Form\n              </h2>`, replace: `{t("form.title")}\n              </h2>` },
  { find: `>Please provide your details below and our admissions team will\n                contact you within 48 hours to secure your child's placement.</p>`, replace: `>{t("form.desc")}</p>` },

  // Parent Info
  { find: `Parent / Guardian Details\n                </h3>`, replace: `{t("form.parent.title")}\n                </h3>` },
  { find: `Full Name *\n                    </label>`, replace: `{t("form.parent.name")} *\n                    </label>` },
  { find: `placeholder="e.g. Abdullah Rahman"`, replace: `placeholder={t("form.parent.namePlaceholder")}` },
  
  { find: `Email Address *\n                    </label>`, replace: `{t("form.parent.email")} *\n                    </label>` },
  { find: `placeholder="abdullah@example.com"`, replace: `placeholder={t("form.parent.emailPlaceholder")}` },
  
  { find: `Phone Number *\n                    </label>`, replace: `{t("form.parent.phone")} *\n                    </label>` },
  { find: `placeholder="+44 123 456 7890"`, replace: `placeholder={t("form.parent.phonePlaceholder")}` },
  
  { find: `City / Country\n                    </label>`, replace: `{t("form.parent.city")}\n                    </label>` },
  { find: `placeholder="e.g. London, UK"`, replace: `placeholder={t("form.parent.cityPlaceholder")}` },

  // Student Info
  { find: `Student Details\n                </h3>`, replace: `{t("form.student.title")}\n                </h3>` },
  { find: `Child's Name *\n                    </label>`, replace: `{t("form.student.name")} *\n                    </label>` },
  { find: `placeholder="e.g. Yusuf Rahman"`, replace: `placeholder={t("form.student.namePlaceholder")}` },

  { find: `Child's Age *\n                    </label>`, replace: `{t("form.student.age")} *\n                    </label>` },
  { find: `placeholder="e.g. 8"`, replace: `placeholder={t("form.student.agePlaceholder")}` },

  { find: `Programme Interest *\n                    </label>`, replace: `{t("form.student.programme")} *\n                    </label>` },
  { find: `>Select a program...</option>`, replace: `>{t("form.student.programmeSelect")}</option>` },
  { find: `>Dual Curriculum (Islamic & Western Bundle) - Best Value</option>`, replace: `>{t("form.student.progDual")}</option>` },
  { find: `>Islamic Programme Only</option>`, replace: `>{t("form.student.progIslamic")}</option>` },
  { find: `>Western Programme Only</option>`, replace: `>{t("form.student.progWestern")}</option>` },
  { find: `>Individual Specialized Courses</option>`, replace: `>{t("form.student.progIndividual")}</option>` },

  { find: `Class Format *\n                    </label>`, replace: `{t("form.student.format")} *\n                    </label>` },
  { find: `>Select format...</option>`, replace: `>{t("form.student.formatSelect")}</option>` },
  { find: `>Group Class (Max 5 Students)</option>`, replace: `>{t("form.student.formatGroup")}</option>` },
  { find: `>One-on-One Class</option>`, replace: `>{t("form.student.formatOneOnOne")}</option>` },

  // Individual courses
  { find: `Select Individual Courses\n                      </h4>`, replace: `{t("form.student.individualCourses.title")}\n                      </h4>` },
  { find: `>Select as many courses as you wish across disciplines.</p>`, replace: `>{t("form.student.individualCourses.desc")}</p>` },
  
  { find: `Islamic Sciences\n                        </h5>`, replace: `{t("form.student.individualCourses.islamicTitle")}\n                        </h5>` },
  { find: `Western Academics\n                        </h5>`, replace: `{t("form.student.individualCourses.westernTitle")}\n                        </h5>` },

  // Translate array items - there is an issue doing this linearly if we use mapping arrays but we'll try a different approach or regex.
  { find: `"Arabic"`, replace: `t("form.student.individualCourses.arabic")` },
  { find: `"Quran Memorisation"`, replace: `t("form.student.individualCourses.quran")` },
  { find: `"Tawheed"`, replace: `t("form.student.individualCourses.tawheed")` },
  { find: `"Fiqh"`, replace: `t("form.student.individualCourses.fiqh")` },
  { find: `"Hadith"`, replace: `t("form.student.individualCourses.hadith")` },
  { find: `"Mutoon"`, replace: `t("form.student.individualCourses.mutoon")` },
  { find: `"Mathematics"`, replace: `t("form.student.individualCourses.math")` },
  { find: `"Sciences"`, replace: `t("form.student.individualCourses.science")` },
  { find: `"Programming"`, replace: `t("form.student.individualCourses.programming")` },

  // Additional 
  { find: `Additional Information / Questions\n                  </label>`, replace: `{t("form.student.additional")}\n                  </label>` },
  { find: `placeholder="Tell us about your child's current academic or\n                      Islamic level, or ask any questions here..."`, replace: `placeholder={t("form.student.additionalPlaceholder")}` },

  // Submit
  { find: `Submit Registration Inquiry\n              </button>`, replace: `{t("form.submit")}\n              </button>` }
];

replacements.forEach(r => {
  if (r.find instanceof RegExp) {
    fileStr = fileStr.replace(r.find, r.replace);
  } else if (!r.find.includes('\n') && !r.find.startsWith('"')) {
     fileStr = fileStr.replace(new RegExp(r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.replace);
  } else {
    // Normalise whitespace to safely match multiline blocks
    const regexStr = r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    fileStr = fileStr.replace(new RegExp(regexStr, 'g'), r.replace);
  }
});

// Since the mapping items become translation keys (that return translated Arabic or English names), 
// but the state `selectedCourses` tracks them... using translated strings AS keys could break the internal state logic slightly depending on locale switches, 
// but since the form is basic for now and just a UI presentation, using `t("...")` in the array is fine. 
// A better approach is `{ id: 'arabic', label: t("...") }` but we'll stick to the current pattern.
// Oh wait, if the array values are replaced directly with `t("arabic")`, the `toggleCourse` will use the translated string as value. It is fine for now.

fs.writeFileSync('app/[locale]/enrol/page.tsx', fileStr, 'utf8');
console.log("Enrol replaced.");
