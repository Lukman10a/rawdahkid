const fs = require('fs');

let fileStr = fs.readFileSync('app/[locale]/contact/page.tsx', 'utf8');

// Add import
fileStr = fileStr.replace('export default function ContactPage() {', `import { useTranslations } from "next-intl"\n\nexport default function ContactPage() {\n  const t = useTranslations("Contact");`);

const replacements = [
  { find: `Get In Touch`, replace: `{t("header.title")}` },
  { find: `We are here to answer your questions and welcome you to the Rawdatul\n            Atfaal community.`, replace: `{t("header.desc")}` },
  
  { find: `"Our Campus"`, replace: `t("info.campus.title")` },
  { find: `"123 Knowledge Avenue"`, replace: `t("info.campus.c1")` },
  { find: `"Leicester, UK LE1 2AB"`, replace: `t("info.campus.c2")` },

  { find: `"Phone"`, replace: `t("info.phone.title")` },
  { find: `"Admissions: +44 116 123 4567"`, replace: `t("info.phone.c1")` },
  { find: `"Main Office: +44 116 123 4568"`, replace: `t("info.phone.c2")` },

  { find: `"Email"`, replace: `t("info.email.title")` },
  { find: `"admissions@rawdatulatfaal.org"`, replace: `t("info.email.c1")` },
  { find: `"info@rawdatulatfaal.org"`, replace: `t("info.email.c2")` },

  { find: `"Office Hours"`, replace: `t("info.hours.title")` },
  { find: `"Mon - Fri: 8:00 AM - 4:00 PM"`, replace: `t("info.hours.c1")` },
  { find: `"Sat - Sun: Closed"`, replace: `t("info.hours.c2")` },

  { find: `Send a Message\n              </h2>`, replace: `{t("form.title")}\n              </h2>` },
  { find: `We usually respond within one business day.`, replace: `{t("form.desc")}` },
  
  { find: `Name *\n                  </label>`, replace: `{t("form.nameLabel")} *\n                  </label>` },
  { find: `placeholder="e.g. John Doe"`, replace: `placeholder={t("form.namePlaceholder")}` },

  { find: `Email *\n                  </label>`, replace: `{t("form.emailLabel")} *\n                  </label>` },
  { find: `placeholder="john@example.com"`, replace: `placeholder={t("form.emailPlaceholder")}` },

  { find: `Message *\n                  </label>`, replace: `{t("form.messageLabel")} *\n                  </label>` },
  { find: `placeholder="How can we help?"`, replace: `placeholder={t("form.messagePlaceholder")}` },

  { find: `Send Message\n                </button>`, replace: `{t("form.submitBtn")}\n                </button>` }
];

replacements.forEach(r => {
  if (!r.find.includes('\n') && !r.find.startsWith('"')) {
     fileStr = fileStr.replace(new RegExp(r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.replace);
  } else {
    // for exact newlines match, split by newline and match spaces safely
    const regexStr = r.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    fileStr = fileStr.replace(new RegExp(regexStr, 'g'), r.replace);
  }
});

fs.writeFileSync('app/[locale]/contact/page.tsx', fileStr, 'utf8');
console.log("Contact replaced.");
