"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

type LevelCardProps = {
  levelNumber: string;
  title: string;
  hadithCount: string;
  duration: string;
  classDuration: string;
  aim: string;
  topics: string[];
};

type LevelConfig = Omit<LevelCardProps, "title"> & {
  titleKey: string;
};

function LevelCard({
  levelNumber,
  title,
  hadithCount,
  duration,
  classDuration,
  aim,
  topics,
}: LevelCardProps) {
  const t = useTranslations("ProgHadith");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6">
          <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
            LEVEL {levelNumber}
          </div>
          <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
            {title}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t38")}</strong> {hadithCount}
          </div>
          <div>
            <strong className="text-white">{t("t39")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {classDuration}
          </div>
        </div>
        <div className="text-sm text-cream/80 leading-relaxed">
          <strong className="text-white block mb-1">{t("t41")}</strong> {aim}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t42")}
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {topics.map((topic, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-midnight/80 dark:text-cream/90">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Level4Card() {
  const t = useTranslations("ProgHadith");
  const hadiths = [
    "Actions are by intentions",
    "Islam, Emaan and Ihsaan (Jibreel hadith)",
    "The pillars of Islam",
    "The creation of the human being and his destiny",
    "Innovations in the religion are rejected",
    "The halal is clear and the haram is clear",
    "Religion is sincere advice (An-Naseeha)",
    "The inviolability of the Muslim's blood and wealth",
    "What one is not capable of is dropped from obligation",
    "Allah is pure and accepts only what is pure",
    "Leaving what does not concern you",
    "Leaving what causes harm",
    "Love for your brother what you love for yourself",
    "The sanctity of Muslim blood and property",
    "Whoever believes in Allah should speak good or remain silent",
    "Do not become angry",
    "Allah has prescribed excellence in all things",
    "Fear Allah wherever you are",
    "Guard Allah's rights and He will guard you",
    "Do not be ashamed of the truth",
    "Say: I believe in Allah, then be upright",
    "The path to Jannah",
    "Purity is half of faith",
    "The prohibition of oppression (dhulm)",
    "Charity for every joint of the body",
    "Every act of good is charity",
    "Righteousness and sin",
    "Hold fast to the Sunnah",
    "Actions that enter one into Jannah",
    "Limits of Allah - do not transgress them",
    "Detachment from the world (Zuhd)",
    "No harming and no reciprocating harm",
    "The claimant must bring proof",
    "Changing evil with the hand, tongue or heart",
    "Do not envy one another",
    "Whoever removes a worldly hardship from a believer",
    "Allah will write reward for a good intention",
    "The Awliyaaʼ (allies) of Allah",
    "Mistakes not held against my ummah",
    "Be in this world as a stranger",
    "(Added by Ibn Rajab) - The straight path",
    "(Added by Ibn Rajab) - Expansion of the heart",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-gold/40 shadow-lg rounded-xl overflow-hidden relative"
    >
      <div className="absolute top-0 inset-e-0 p-8 opacity-10 pointer-events-none">
        <BookOpen className="w-48 h-48 text-gold" />
      </div>

      <div className="bg-linear-to-br from-midnight to-navy border-b border-gold/30 p-8 md:p-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              {t("t43")}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
              {t("t9")}
            </h3>
            <p className="font-sans text-cream/70">{t("t45")}</p>
          </div>
          <div className="font-amiri text-3xl md:text-4xl text-gold/90 text-end">
            {t("t46")}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t38")}</strong>
            {t("t48")}
          </div>
          <div>
            <strong className="text-white">{t("t39")}</strong>
            {t("t50")}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong>
            {t("t52")}
          </div>
        </div>
        <div className="text-sm text-cream/80 leading-relaxed">
          <strong className="text-white block mb-1">{t("t41")}</strong>
          {t("t54")}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <div className="mb-10 text-midnight/80 dark:text-muted font-sans space-y-4">
          <p>
            <strong className="text-midnight dark:text-cream font-cinzel text-lg">
              {t("t55")}
            </strong>
            <br />
            {t("t56")}
            <em>{t("t9")}</em>
            {t("t58")}
          </p>
          <div className="bg-ivory dark:bg-midnight p-5 rounded-md border border-midnight/5 dark:border-white/5 my-6">
            <p className="font-semibold mb-2 text-midnight dark:text-cream">
              {t("t59")}
            </p>
            <ul className="list-disc list-inside ms-5 space-y-1 text-midnight/70 dark:text-cream/70">
              <li>{t("t60")}</li>
              <li>{t("t61")}</li>
              <li>{t("t62")}</li>
              <li>{t("t63")}</li>
            </ul>
          </div>
          <p>{t("t64")}</p>
        </div>

        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t65")}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {hadiths.map((theme, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="font-cinzel text-gold text-sm font-bold mt-0.5 min-w-6">
                {idx + 1}.
              </span>
              <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 leading-tight">
                {theme}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedCourseSection() {
  const t = useTranslations("ProgHadith");

  const levelConfigs: LevelConfig[] = [
    {
      levelNumber: "1",
      titleKey: "t17",
      hadithCount: "71 Short Hadiths",
      duration: "16 Weeks",
      classDuration: "40 Minutes per Session",
      aim: "To build a strong foundation in belief, worship, noble character, and Islamic identity, nurturing sincere young Muslims who practice Islam with understanding and good manners.",
      topics: [
        "Purification of the Heart",
        "Following the Sunnah",
        "Establishing Prayer",
        "Connection with the Qurʼaan",
        "Noble Character Development",
        "Refinement of Speech",
        "Social Manners & Brotherhood",
        "Mercy & Compassion",
        "Islamic Etiquette (Daily Sunnah Practices)",
        "Personal Responsibility & Integrity",
      ],
    },
    {
      levelNumber: "2",
      titleKey: "t20",
      hadithCount: "50 Hadiths",
      duration: "16 Weeks",
      classDuration: "40 Minutes per Session",
      aim: "To deepen students' understanding of worship, self-purification, accountability, and social responsibility, strengthening their spiritual awareness and commitment to righteous action.",
      topics: [
        "Perfecting Purification & Prayer",
        "Mosque Etiquette & Congregational Worship",
        "Guarding the Tongue & Avoiding Major Sins",
        "Repentance & Signs of Hypocrisy",
        "Brotherhood & Muslim Rights",
        "Charity & Serving Society",
        "Dhikr & Spiritual Growth",
        "Virtue of Hajj, Ramadān & Voluntary Worship",
        "Accountability After Death",
        "Seeking Knowledge & Loving for Allah's Sake",
      ],
    },
    {
      levelNumber: "3",
      titleKey: "t66",
      hadithCount: "50 Hadiths",
      duration: "16 Weeks",
      classDuration: "40 Minutes per Session",
      aim: "To cultivate mature understanding of Islamic principles, accountability before Allah, refined character, and readiness for advanced hadith study.",
      topics: [
        "Protecting Tawheed & Avoiding Shirk",
        "The Danger of Abandoning Prayer",
        "Avoiding Religious Innovation (Bidʼah)",
        "Advanced Sunnah Practices",
        "Consistency in Worship",
        "Patience During Trials",
        "Living as a Stranger in This World (Al-Ghurbah)",
        "Accountability on the Day of Judgement",
        "Brotherhood & Social Leadership",
        "Ongoing Charity & Lasting Deeds",
      ],
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t28")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {levelConfigs.map((level) => (
          <LevelCard
            key={level.levelNumber}
            levelNumber={level.levelNumber}
            title={t(level.titleKey)}
            hadithCount={level.hadithCount}
            duration={level.duration}
            classDuration={level.classDuration}
            aim={level.aim}
            topics={level.topics}
          />
        ))}
        <Level4Card />
      </div>
    </section>
  );
}
