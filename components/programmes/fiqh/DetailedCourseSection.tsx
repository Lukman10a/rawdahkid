"use client";

import { motion } from "framer-motion";
import { LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

type SingleSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  topics: string[];
};

type DualSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  sectionTitle1?: string;
  sectionTitle2?: string;
  section1: string[];
  section2: string[];
};

function SingleSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  topics,
}: SingleSectionLevelCardProps) {
  const t = useTranslations("ProgFiqh");

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
            LEVEL {levelNumber} - BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t41")}
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
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

function DualSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  sectionTitle1 = "Section 1",
  sectionTitle2 = "Section 2",
  section1,
  section2,
}: DualSectionLevelCardProps) {
  const t = useTranslations("ProgFiqh");

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
            LEVEL {levelNumber} - BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle1}
            </h4>
            <div className="space-y-4">
              {section1.map((topic, idx) => (
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
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle2}
            </h4>
            <div className="space-y-4">
              {section2.map((topic, idx) => (
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedCourseSection() {
  const t = useTranslations("ProgFiqh");

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t29")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        <SingleSectionLevelCard
          levelNumber="1"
          title={t("t15")}
          focus="Purification (Tahaarah) & Prayer (Salah) - Foundational concepts"
          aim="To introduce students to the essentials of Islamic worship, beginning with correct purification and the performance of the five daily prayers."
          topics={[
            "Purification (At-Tahaarah)",
            "Characteristics of ablution (Sifat Al-Wudhooʼ)",
            "The obligatory prayers (As-Salawaat Al-Mafrooda)",
            "Characteristics of the prayer (Sifat As-Salah)",
            "At-Tashahhud",
            "Salutation upon the Prophet (صلى الله عليه وسلم)",
            "Nullifiers of the prayer (Nawaaqiḍ As-Salah)",
          ]}
        />

        <DualSectionLevelCard
          levelNumber="2"
          title={t("t18")}
          focus="Revision & Expansion - Ablution, Supplication & Prayer"
          aim="To consolidate Level 1 knowledge and introduce students to the opening supplication of prayer, nullifiers of ablution, and deeper aspects of Salah."
          section1={[
            "Revision of all that has been taught in Level 1",
            "Cleanliness with water and other than it",
            "Characteristics of ablution (Sifat Al-Wudhooʼ)",
            "Nullifiers of ablution (Nawaaqiḍ Al-Wudhooʼ)",
            "The opening supplication for Salah (Duʼāʼ Al-Istiftaah)",
          ]}
          section2={[
            "Revision of all that has been taught in Section 1",
            "The obligatory prayers (As-Salawaat Al-Mafrooda)",
            "At-Tashahhud",
            "Salutation upon the Prophet (صلى الله عليه وسلم)",
            "Supplications to seek refuge in after salutation upon the Prophet",
            "Characteristics of the prayer (Sifat As-Salah)",
            "Nullifiers of the prayer (Nawaaqiḍ As-Salah)",
          ]}
        />

        <DualSectionLevelCard
          levelNumber="3"
          title={t("t48")}
          focus="Manners of Relieving Oneself, Conditions & Obligations of Ablution, Dry Ablution & Prayer"
          aim="To teach the correct manners of the lavatory, the conditions and obligations of wudhooʼ, introduction to tayammum, and the conditions and pillars of the prayer."
          section1={[
            "Revision of all that has been taught in Level 2",
            "Manners of relieving oneself (Aadaab Qadhaʼ Al-Haajah)",
            "Cleanliness with water and stone (Al-Istinjaaʼ wal-Istijmaar)",
            "Removal of impurity (Izaalat An-Najaasah)",
            "Conditions of ablution (Shurooṭ Al-Wudhooʼ)",
            "Obligations of ablution (Waajibaaat Al-Wudhooʼ)",
          ]}
          section2={[
            "Revision of all that has been taught in Section 1",
            "Dry ablution (At-Tayammum)",
            "Times of prayer (Awqaat As-Salah)",
            "Conditions of the prayer (Shurooṭ As-Salah)",
            "Pillars of the prayer (Arkaan As-Salah)",
            "Obligatory acts of the prayer (Waajibaat As-Salah)",
          ]}
        />

        <DualSectionLevelCard
          levelNumber="4"
          title={t("t24")}
          focus="Comprehensive Wudhooʼ, Adhaan, Prayer Conditions & Detailed Explanations of Prayer Texts"
          aim="To provide a thorough study of ablution, the call to prayer, times and conditions of Salah, and detailed explanation of key prayer recitations including Surah Al-Faatihah and At-Tashahhud."
          sectionTitle1="Lesson 1"
          sectionTitle2="Lesson 2"
          section1={[
            "Introduction",
            "Revision of all that has been taught in Level 3",
            "Ablution (Al-Wudhooʼ) - comprehensive review",
            "Conditions of ablution (Shurooṭ Al-Wudhooʼ)",
            "Obligations of ablution (Waajibaat Al-Wudhooʼ)",
            "Sunan (Prophetic guidance) of ablution",
            "Nullifiers of ablution (Nawaaqiḍ Al-Wudhooʼ)",
            "The call to prayer and its establishment (Al-Adhaan wal-Iqaamah)",
            "Prophetic guidance on the call to prayer (Sifat Al-Adhaan)",
            "Conditions of the prayer (Shurooṭ As-Salah)",
          ]}
          section2={[
            "Revision of all that has been taught in Lesson 1",
            "Times of the obligatory prayers (Awqaat As-Salawaat Al-Mafrooda)",
            "Pillars of the prayer (Arkaan As-Salah)",
            "Obligatory acts of the prayer (Waajibaat As-Salah)",
            "Difference between the pillars and obligations of the prayer",
            "Explanation of Surah Al-Faatihah",
            "Explanation of the meaning of At-Tashahhud",
            "Explanation of the salutation upon the Prophet صلى الله عليه وسلم",
            "Revision Catalogue",
          ]}
        />

        <DualSectionLevelCard
          levelNumber="5"
          title={t("t27")}
          focus="Classification of Water, Advanced Wudhooʼ Topics, Full Prayer Description, Congregational Prayer & Voluntary Prayers"
          aim="To give students a detailed understanding of water classifications, wiping over leather socks, dry ablution, a complete description of prayer including prostration of forgetfulness, and a thorough grounding in congregational prayer and voluntary prayers."
          sectionTitle1="Lesson 1"
          sectionTitle2="Lesson 2"
          section1={[
            "Introduction",
            "Revision of all that has been taught in Level 4",
            "Classification of water (Aqsaam Al-Maaʼ)",
            "Wiping over the shoes/socks (Al-Mash ʼalaa Al-Khuffayn)",
            "Dry ablution (At-Tayammum) - detailed study",
            "The prayer (As-Salah) - comprehensive overview",
            "Manners of walking to prayer and waiting for it",
            "Characteristics of the prayer (Sifat As-Salah) - detailed",
            "Sunan (recommended acts) of the prayer",
            "Detested acts in the prayer (Makroohaat As-Salah)",
            "Prostration of forgetfulness (Sujood As-Sahw)",
          ]}
          section2={[
            "Introduction",
            "Revision of all that has been taught in Lesson 1",
            "Congregational prayer (As-Salah Al-Jamaaʼah)",
            "Rulings of leadership (Ahkaam Al-Imaamah)",
            "Position of the Imam and those praying behind him",
            "The maʼmoom following the Imam (Al-Iqtidaaʼ)",
            "Ruling of the masboq (one who misses some of the prayer)",
            "Permissible excuses for leaving off the congregational prayer",
            "Prayer of the people with excuses (Salah Ahl Al-Aʼdhar)",
            "The voluntary prayer (At-Tatawwuʼ)",
            "Prohibited times for praying (Awqaat An-Nahy)",
            "Revision Catalogue",
          ]}
        />
      </div>
    </section>
  );
}
