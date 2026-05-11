const programmeCandidates = ['Islamic Programme Only','Islamic Programme','Western Programme Only','Western Programme','Individual Specialized Courses','Dual Curriculum (Islamic & Western Bundle) - Best Value','Dual Curriculum','Dual Programme','dual'];
const classFormatCandidates = ['Group Class','One-on-One Class'];

const basePayload = {
  fullName: 'API Combo Test Parent',
  email: '',
  phoneNumber: '+2348012345678',
  cityCountry: 'Lagos, Nigeria',
  childName: 'API Combo Test Child',
  childAge: 10,
  programmeInterest: '',
  classFormat: '',
  selectedCourses: ['Quran Memorization'],
  additionalInfo: 'Automated combo test'
};

function isDualRelated(value) {
  return String(value).toLowerCase().includes('dual');
}

(async () => {
  let i = 0;
  for (const programmeInterest of programmeCandidates) {
    for (const classFormat of classFormatCandidates) {
      i += 1;
      const payload = {
        ...basePayload,
        programmeInterest,
        classFormat,
        email: `combo.test.${Date.now()}.${i}@example.com`
      };

      let status = 0;
      let ok = false;
      let message = '';

      try {
        const res = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        status = res.status;
        const raw = await res.text();
        let data;
        try { data = JSON.parse(raw); } catch { data = raw; }

        const bodySuccess = typeof data === 'object' && data !== null && typeof data.success === 'boolean' ? data.success : undefined;
        ok = res.ok && (bodySuccess !== false);
        message = typeof data === 'object' && data !== null && typeof data.message === 'string' ? data.message : String(raw).slice(0, 200);
      } catch (error) {
        message = error && error.message ? error.message : String(error);
      }

      if (ok) {
        console.log(`SUCCESS programmeInterest="${programmeInterest}" classFormat="${classFormat}"`);
      } else if (isDualRelated(programmeInterest) || classFormat === 'One-on-One Class') {
        console.log(`FAIL programmeInterest="${programmeInterest}" classFormat="${classFormat}" status=${status} message="${message.replace(/\s+/g, ' ').trim()}"`);
      }
    }
  }
})();
