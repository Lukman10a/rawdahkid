"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  LayoutList,
  BookText,
  Speech,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ArabicProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-amiri text-gold text-2xl md:text-3xl mb-4">
              بسم الله الرحمان الرحيم
            </p>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              Arabic Language Curriculum
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
              منهج تعليم اللغة العربية
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6 flex flex-wrap justify-center gap-2">
              <span>Letters</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Reading</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Conversation</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Grammar</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              &quot;The language of the Qurʼān — taught with care, structure,
              and love&quot;
            </p>

            {/* Path visualization */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-12 text-sm font-cinzel font-bold text-midnight/70 dark:text-cream/70">
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                L1 Qaaʼidah
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                L2 Reading
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                L3 Speech
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                L4 Grammar
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                L5 Text
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & RESOURCES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-gold" />
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                The Rawdatul Atfaal Arabic Language Curriculum is a structured
                five-level programme designed to take a student from their very
                first encounter with the Arabic alphabet all the way through to
                a confident reading of grammatical Arabic texts.
              </p>
              <p>
                Arabic is the language of the Qurʼān, the hadith, and classical
                Islamic scholarship. A child who learns Arabic properly is a
                child who can engage with the primary sources of their religion
                directly, without the barrier of translation.
              </p>
              <p className="font-semibold text-midnight dark:text-cream italic border-l-4 border-gold pl-4 py-1">
                Our programme treats Arabic not merely as a foreign language to
                be learnt — but as a sacred inheritance to be reclaimed.
              </p>
            </div>
          </motion.div>

          {/* Key Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <BookText className="w-7 h-7 text-gold" />
              Key Resources Used
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Qaaʼidah Nooraaniyyah (Level 1)",
                  desc: "The foundational text for learning Arabic letters and their sounds with correct articulation (makhaarij).",
                },
                {
                  title: "Noorul Bayāan (Level 2)",
                  desc: "A widely used primer for joining Arabic letters into words and progressing toward reading the Qurʼān.",
                },
                {
                  title: "Basic Conversations (Level 3)",
                  desc: "A structured conversational Arabic programme developing speaking, listening and vocabulary.",
                },
                {
                  title: "Madīnah Arabic Series (Levels 4 & 5)",
                  desc: "The world-famous series from the Islamic University of Madīnah, introducing and deepening formal grammar systematically.",
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="font-cinzel font-bold text-midnight dark:text-cream block mb-1">
                      {resource.title}
                    </span>
                    <span className="font-sans text-sm text-midnight/70 dark:text-cream/70 leading-relaxed">
                      {resource.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. AT A GLANCE */}
      <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              Programme at a Glance
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg w-20">
                    Lvl
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-64">
                    Resource / Focus
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                    Duration
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    What Your Child Will Achieve
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    1
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Qaaʼidah Nooraaniyyah
                  </td>
                  <td className="py-4 px-6">16 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    Recognise and correctly pronounce all 28 Arabic letters with
                    full diacritical marks
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    2
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Noorul Bayāan
                  </td>
                  <td className="py-4 px-6">16 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    Join letters into words and read short Qurʼānic phrases with
                    confidence
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    3
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Basic Conversations
                  </td>
                  <td className="py-4 px-6">16 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    Hold simple Arabic conversations, name objects and people,
                    use basic sentence structures
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    4
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Madīnah Arabic Book 1
                  </td>
                  <td className="py-4 px-6">16 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    Read and understand basic Arabic grammar — pronouns, nouns,
                    past tense verbs, adjectives
                  </td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    5
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Madīnah Arabic Book 2
                  </td>
                  <td className="py-4 px-6">16 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    Command intermediate Arabic grammar — present tense,
                    imperatives, plurals, relative clauses
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. DETAILED COURSE OUTLINES */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
            Detailed Master Plans
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* LEVEL 1 */}
          <LevelCard
            levelNumber="1"
            title="Qaaʼidah Nooraaniyyah"
            arabicTitle="القاعدة النورانية"
            subtitle="Reading & Recognising Arabic Letters"
            resource="Qaaʼidah Nooraaniyyah — Shaykh Noor Muhammad Hāqiqānī"
            duration="16 Weeks"
            frequency="3–4 Sessions per Week"
            aim="To teach students to correctly recognise, name, and pronounce all 28 Arabic letters in their isolated forms, with all short vowels, sukoon, tanween, shaddah, and madd letters."
            listTitle="What Students Learn"
            listItems={[
              "All 28 Arabic letters (isolated form)",
              "Distinguishing similar shapes (ب ت ث, ج ح خ, etc.)",
              "Short vowels (Fathah, Kasrah, Dammah)",
              "Sukoon (a resting letter with no vowel)",
              "Tanween (double vowels: ً ٌ ٍ)",
              "Shaddah (doubled consonant)",
              "Madd (long vowels with Alif, Waw, Yāʼ)",
              "Laam Shamsiyyah vs. Laam Qamariyyah",
              "Connecting forms (initial, medial, final, isolated)",
              "Non-connecting letters (ا د ذ ر ز و)",
              "Reading CVC syllables and short words",
              "Reading simple Qurʼānic fragments (fully vowelled)",
            ]}
          />

          {/* LEVEL 2 */}
          <LevelCard
            levelNumber="2"
            title="Noorul Bayāan"
            arabicTitle="نور البيان"
            subtitle="Joining Letters & Words"
            resource="Noorul Bayāan — universally acclaimed Qurʼān primer"
            duration="16 Weeks"
            frequency="3–4 Sessions per Week"
            aim="To teach students to join Arabic letters into complete words, read multi-letter words with diacritical marks, and begin reading short Qurʼānic āyāt and familiar phrases with fluency."
            listTitle="What Students Learn"
            listItems={[
              "Joining two and three letters with vowels",
              "Reading words with all diacritical marks",
              "Long vowels within joined words",
              "Tanween in natural word endings",
              "Shaddah within words",
              "Al- (definite article) within words",
              "Two-word Arabic phrases (noun + adjective)",
              "Qurʼānic sight words recognition",
              "Reading short Āyāt with full tashkeel",
              "Reading connected sentences smoothly",
              "Reading complete short surahs (Juzʼ ʿAmma)",
              "Self-correction and reading fluency",
            ]}
          />

          {/* LEVEL 3 */}
          <LevelCard
            levelNumber="3"
            title="Basic Arabic Conversations"
            arabicTitle="المحادثة العربية الأساسية"
            subtitle="Speaking, Listening & Vocabulary"
            resource="Rawdatul Atfaal Applied Conversational Arabic"
            duration="16 Weeks"
            frequency="3 Sessions per Week"
            aim="To equip students with practical Arabic communication skills — greeting, introducing themselves, describing objects, asking simple questions, and using MSA and Qurʼānic vocabulary."
            icon={<Speech className="w-5 h-5 text-gold" />}
            listTitle="Conversational Units"
            listItems={[
              "Greetings and Farewells (As-salaam, Marhaban)",
              "Introductions (Who Are You? / Where are you from?)",
              "Classroom Language (Commands: Iftah, uktub, iqraʼ)",
              "Numbers 1–20 (Counting and usage)",
              "Colours & Gender Agreement",
              "Family Members (Al-ʼaʼilah)",
              "The Body (Al-Jism)",
              "Food and Drink (At-Taʼām)",
              "Animals (Al-Hayawānāt)",
              "Days and Months / Daily Routine",
              "Asking Questions (Where, What, Who, How)",
              "Simple Sentences (Subject + Verb + Object)",
              "My Home (Baytee & Furniture)",
              "Weather and Seasons",
              "Islamic Daily Phrases in context",
            ]}
          />

          {/* LEVEL 4 */}
          <LevelCard
            levelNumber="4"
            title="Madīnah Arabic Book 1"
            arabicTitle="كتاب المدينة — الكتاب الأول"
            subtitle="Foundational Arabic Grammar & Reading"
            resource="Madīnah Arabic Reader Book 1 (Dr. V. Abdúr-Raḥeem)"
            duration="16 Weeks"
            frequency="3–4 Sessions per Week"
            aim="To introduce formal Arabic grammar — covering demonstrative pronouns, noun gender, definite/indefinite nouns, adjective agreement, past tense verbs, and prepositions."
            listTitle="Grammar & Text Topics"
            listItems={[
              "Demonstrative Pronouns (Haadhaa / Tilka)",
              "Questions in Arabic (Mā hādhaa? / Man haadhaa?)",
              "Personal Pronouns (Huwa / Hiya)",
              "Nationality and Origins (Huwa min...)",
              "Attached Possessive Pronouns (Ismuhu, Ismuhaa)",
              "Numbers 1–10 and gender agreement",
              "Sound Masculine Plural patterns",
              "Introduction to Broken Plurals",
              "Adjective Agreement (Sifah with mawsūf)",
              "The Verb: Past Tense Conjugation (Faʼala pattern)",
              "Verb Conjugation for Plurals (Third person)",
              "Prepositions (Fee, Min, Ila, ʼAlà)",
              "Nominal Sentences (Mubtadaʼ & Khabar)",
              "Verbal Sentences vs. Nominal Sentences",
              "Reading graded contextual passages",
            ]}
          />

          {/* LEVEL 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white/50 dark:bg-navy/20 border border-gold/40 shadow-lg rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <BookText className="w-48 h-48 text-gold" />
            </div>

            <div className="bg-linear-to-br from-midnight to-navy border-b border-gold/30 p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    LEVEL 5 — ADVANCED
                  </div>
                  <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
                    Madīnah Arabic Book 2
                  </h3>
                  <p className="font-sans text-cream/70 text-sm md:text-base">
                    Intermediate Arabic Grammar & Reading
                  </p>
                </div>
                <div className="font-amiri text-2xl md:text-3xl text-gold/90 text-right">
                  كتاب المدينة — الكتاب الثاني
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
                <div>
                  <strong className="text-white">Duration:</strong> 16 Weeks
                </div>
                <div>
                  <strong className="text-white">Sessions:</strong> 3–4 Sessions
                  per Week
                </div>
              </div>
              <div className="text-sm text-cream/80 leading-relaxed">
                <strong className="text-white block mb-1">Aim:</strong> To build
                upon the grammar foundation of Book 1 and introduce intermediate
                Arabic grammar structures: present tense verbs, relative
                pronouns, active/passive participles, dual forms, imperatives,
                and independent composition.
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white dark:bg-transparent relative z-10">
              <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
                <LayoutList className="w-5 h-5 text-gold" /> Advanced Grammar
                Focus
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  "Mubtadaʼ and Khabar (in depth)",
                  "Relative Pronouns (Alladhī / Allatī)",
                  "Present Tense Verb Conjugation (Al-Muḍāriʼ)",
                  "Negative Sentences (Laa and Mā)",
                  "Active Participle (Ism Al-Faʼīl)",
                  "Passive Participle (Ism Al-Mafʼool)",
                  "Dual Forms (Muthannā)",
                  "Advanced Broken Plural Patterns",
                  "Imperative Verbs (Al-Amr commands)",
                  "ʼAnna, Inna and their Sisters",
                  "Numbers 11–100 rules",
                  "In-depth Question Particles (Al-Istifhām)",
                  "Independent Composition (Paragraph building)",
                  "Deepening conversational reading texts",
                ].map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
                  >
                    <span className="flex items-center justify-center min-w-6 h-6 rounded-md bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 pt-0.5">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-ivory dark:bg-midnight p-6 rounded-md border border-midnight/10 dark:border-white/10 text-center space-y-4">
                <h5 className="font-cinzel font-bold text-midnight dark:text-cream text-lg">
                  What Comes Next?
                </h5>
                <p className="font-sans text-midnight/80 dark:text-cream/80 text-sm max-w-2xl mx-auto leading-relaxed">
                  Upon completing Level 5, students will have a solid grounding
                  in Arabic grammar and will be ready to progress to Madīnah
                  Arabic Book 3 and beyond — opening the door to reading
                  classical Islamic texts, Qurʼānic tafsīr, and hadith
                  literature directly in Arabic.
                </p>
                <p className="font-amiri text-gold text-lg italic tracking-widest pt-2">
                  وما توفيقي إلا بالله — عليه توكلت وإليه أنيب
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            Begin Your Child&apos;s Journey
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            Give your child the key to the Qurʼān. Enrol them in the
            comprehensive 5-level Arabic Language curriculum today.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Arabic Language Mentorship
            </h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $1,200{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">
                / year
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Guided 5-Level Path
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Reading to Advanced Grammar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Madīnah Arabic Integrated
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                Enrol Now
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >
              ← Back to Islamic Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Levels 1–4
function LevelCard({
  levelNumber,
  title,
  arabicTitle,
  subtitle,
  resource,
  duration,
  frequency,
  aim,
  listTitle,
  listItems,
  icon,
}: {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  resource: string;
  duration: string;
  frequency: string;
  aim: string;
  listTitle: string;
  listItems: string[];
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              LEVEL {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm">
              Resource:{" "}
              <span className="font-semibold text-cream/90">{resource}</span>
            </p>
          </div>
          <div className="font-amiri text-3xl text-gold/90 md:text-right">
            {arabicTitle}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">Duration:</strong> {duration}
          </div>
          <div>
            <strong className="text-white">Frequency:</strong> {frequency}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-left">
          <strong className="text-white block mb-1">Aim:</strong> {aim}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          {icon ? icon : <LayoutList className="w-5 h-5 text-gold" />}{" "}
          {listTitle}
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
