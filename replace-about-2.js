const fs = require('fs');
let fileStr = fs.readFileSync('app/[locale]/about/page.tsx', 'utf8');

const replacements = [
  {
    find: `"Nurturing a generation grounded in their faith, fully equipped for the world."`,
    replace: `{t("hero.quote")}`
  },
  {
    find: `&quot;Nurturing a generation grounded in their faith, fully\n              equipped for the world.&quot;`,
    replace: `{t("hero.quote")}`
  },
  {
    find: `To provide an uncompromising educational experience where\n                traditional Islamic sciences and modern academics are taught\n                with equal rigor and excellence.`,
    replace: `{t("mission.p1")}`
  },
  {
    find: `We strive to nurture students who are proud of their Muslim\n                identity, deeply connected to the Qurʾān, and capable of leading\n                with integrity in any field they choose to pursue.`,
    replace: `{t("mission.p2")}`
  },
  {
    find: `To be the standard-bearer for holistic Islamic education,\n                  producing graduates who embody the prophetic character (Akhlaq).`,
    replace: `{t("vision.p1")}`
  },
  {
    find: `We envision a future where our alumni stand as pillars in\n                  their communities — possessing deep knowledge of their Deen and\n                  demonstrating exceptional competence in worldly sciences.`,
    replace: `{t("vision.p2")}`
  },
  {
    find: `For too long, Muslim families have been forced into a false\n                dichotomy: choose a rigorous academic school with a secular\n                environment, or choose a traditional Islamic school that lacks\n                academic competitiveness.`,
    replace: `{t("philosophy.p1")}`
  },
  {
    find: `At <span className="font-semibold text-primary">Rawdatul Atfaal</span>, we reject this compromise.`,
    replace: `{t("philosophy.p2_prefix")}<span className="font-semibold text-primary">{t("philosophy.p2_bold")}</span>{t("philosophy.p2_suffix")}`
  },
  {
    find: `At `,
    replace: `{t("philosophy.p2_prefix")}`
  },
  {
    find: `Rawdatul Atfaal`,
    replace: `{t("philosophy.p2_bold")}`
  },
  {
    find: `, we reject this\n                  compromise.`,
    replace: `{t("philosophy.p2_suffix")}`
  },
  {
    find: `Our dual-curriculum approach ensures that when a child is\n                learning mathematics or programming, they are doing so with the\n                same intensity as when they are memorizing the Qurʾān or\n                studying Fiqh. Excellence is not segmented; it is a holistic\n                mindset we cultivate across all disciplines.`,
    replace: `{t("philosophy.p3")}`
  },
  {
    find: `Striving for perfection in both our worship and our studies,\n        knowing Allah loves when a task is done well.`,
    replace: `t("values.v1_desc")`
  },
  {
    find: `Upholding honesty, immense responsibility, and moral\n        uprightness in every action.`,
    replace: `t("values.v2_desc")`
  },
  {
    find: `Unapologetically rooting our knowledge and methodology in the\n        Qurʾān and the authentic Sunnah.`,
    replace: `t("values.v3_desc")`
  },
  {
    find: `Fostering deeply rooted care, empathy, and community among\n        students, staff, and parents.`,
    replace: `t("values.v4_desc")`
  },
  {
    find: `Rawdatul Atfaal was founded circa 2021 as the foundational\n              children&apos;s school under the umbrella of Markazul Bayaan.\n              What started as a focused initiative has since blossomed into a\n              global learning community, answering the call of families across\n              the US, UK, Australia, Germany, Canada, India, Nigeria, Ghana, and\n              beyond.`,
    replace: `{t("origin.p1")}`
  },
  {
    find: `Our Islamic curriculum is firmly rooted in authenticity. We are\n              proud to feature highly qualified Islamic tutors who have spent\n              years studying under the recognized scholars of this era, adhering\n              strictly to the methodology of the pious predecessors (Salaf).`,
    replace: `{t("origin.p2")}`
  },
  {
    find: `Simultaneously, we ensure no compromise in secular academics.\n              Our Western education department is spearheaded by highly\n              experienced educators specializing in mathematics, programming,\n              and the sciences, giving our students the absolute best of both\n              worlds.`,
    replace: `{t("origin.p3")}`
  },
  {
    find: `&quot;We didn&apos;t just want to build a school; we wanted to\n                revive a tradition of holistic, unapologetic scholarship.&quot;`,
    replace: `{t("origin.quote")}`
  }
];

replacements.forEach(r => {
  // normalize newlines and multiple spaces for a fuzzy match
  // Actually, we'll just replace based on exact string if we can, or regex:
  // If we want a safer replacement, let's just make it regex with \s+
  const regexStr = r.find
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape regex
    .replace(/\s+/g, '\\s+');
  const regex = new RegExp(regexStr, 'g');
  if (fileStr.match(regex)) {
      fileStr = fileStr.replace(regex, r.replace);
  }
});

fs.writeFileSync('app/[locale]/about/page.tsx', fileStr, 'utf8');
console.log("Replaced!");
