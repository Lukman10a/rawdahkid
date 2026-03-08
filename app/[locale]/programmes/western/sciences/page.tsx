"use client";

import { motion } from "framer-motion";
import {
  Atom,
  CheckCircle,
  GraduationCap,
  Compass,
  Microscope,
  TestTube,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SciencesProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full mb-6">
              <Atom className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              Sciences
            </h1>
            <h2 className="font-sans text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6 font-semibold">
              NGSS → GCSE/IGCSE Track
            </h2>

            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
              <span>Biology</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Chemistry</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Physics</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              &quot;Students do not just learn science — they think,
              investigate, and communicate like scientists.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & RESOURCES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <Compass className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                Science is taught as an inquiry-driven discipline from the
                earliest years, transitioning from integrated NGSS-aligned
                science in Levels 1–5, to disciplinary science from Level 6.
              </p>
              <p>
                This culminates in full GCSE/IGCSE preparation with an A-Level
                bridge in Level 10, giving students a serious academic edge.
              </p>
              <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-emerald-600 dark:border-emerald-400 ps-4 py-1">
                We believe in hands-on exploration, rigorous data analysis, and
                an appreciation for the precision of the natural world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <Microscope className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              Core Progression
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Primary (Levels 1–5)",
                  desc: "NGSS aligned. Exploring life, earth, and physical sciences through natural curiosity and the scientific method.",
                },
                {
                  title: "Middle School (Levels 6–7)",
                  desc: "Transition to designated biology, chemistry, and physics tracks with cellular focus and lab techniques.",
                },
                {
                  title: "High School (Levels 8–9)",
                  desc: "GCSE/IGCSE Foundation and Core years covering extended scientific theory, equations, and required practicals.",
                },
                {
                  title: "Capstone (Level 10)",
                  desc: "GCSE completion, final formal assessments, and specific bridging elements for A-Level sciences.",
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
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
      <section className="py-20 bg-emerald-50/50 dark:bg-emerald-900/10 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              Sciences at a Glance
            </h2>
            <div className="w-24 h-px bg-emerald-600/50 dark:bg-emerald-400/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-emerald-700 dark:text-emerald-400 text-lg w-20">
                    Lvl
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                    Age
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Primary Focus
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                {[
                  {
                    lvl: "1",
                    age: "6–7",
                    focus: "Senses, weather, plants, animals",
                  },
                  {
                    lvl: "2",
                    age: "7–8",
                    focus: "Life cycles, matter, Earth materials",
                  },
                  {
                    lvl: "3",
                    age: "8–9",
                    focus: "Forces, ecosystems, climate",
                  },
                  {
                    lvl: "4",
                    age: "9–10",
                    focus: "Energy, waves, Earth's history",
                  },
                  {
                    lvl: "5",
                    age: "10–11",
                    focus: "Matter, space, body systems",
                  },
                  {
                    lvl: "6",
                    age: "11–12",
                    focus: "Cells, chemistry, plate tectonics",
                  },
                  {
                    lvl: "7",
                    age: "12–13",
                    focus: "Biology, physics, chemistry (secondary)",
                  },
                  {
                    lvl: "8",
                    age: "13–14",
                    focus: "GCSE/IGCSE foundation sciences",
                  },
                  {
                    lvl: "9",
                    age: "14–15",
                    focus: "GCSE Biology, Chemistry, Physics",
                  },
                  {
                    lvl: "10",
                    age: "15–16",
                    focus: "GCSE completion + A-level bridge",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                      {row.lvl}
                    </td>
                    <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                      {row.age}
                    </td>
                    <td className="py-4 px-6 leading-relaxed text-sm">
                      {row.focus}
                    </td>
                  </tr>
                ))}
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
          <div className="w-24 h-px bg-emerald-600/50 dark:bg-emerald-400/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <LevelCard
            levelNumber="1"
            title="Curiosity & the Natural World"
            subtitle="Grade 1"
            ageGroup="Ages 6–7 | NGSS Kindergarten–Grade 1"
            duration="36 Weeks | 2–3 Sessions/Week | 40 Min/Session"
            aim="To develop curiosity about the natural world through observation, questioning, and hands-on exploration of weather, plants, animals, and materials."
            units={[
              {
                no: 1,
                topic: "The Five Senses — Exploring Our World",
                skills: "Observe, describe, compare",
              },
              {
                no: 2,
                topic: "Weather — Sun, Rain, Wind, Snow",
                skills: "Observe patterns, record daily weather",
              },
              {
                no: 3,
                topic: "Plants — Parts, Needs, Life Cycle",
                skills: "Label, grow, sequence",
              },
              {
                no: 4,
                topic: "Animals — Needs, Habitats, Features",
                skills: "Sort, classify, match to habitat",
              },
              {
                no: 5,
                topic: "Materials — Properties of Solids, Liquids, Gas",
                skills: "Test, sort, compare properties",
              },
              {
                no: 6,
                topic: "Light and Shadow",
                skills: "Investigate, predict, explain",
              },
              {
                no: 7,
                topic: "Pushes and Pulls — Force Basics",
                skills: "Explore motion, direction, speed",
              },
              {
                no: 8,
                topic: "Sound — Vibration and Hearing",
                skills: "Make, change, stop sounds",
              },
            ]}
          />

          <LevelCard
            levelNumber="2"
            title="Life Cycles & Matter"
            subtitle="Grade 2"
            ageGroup="Ages 7–8 | NGSS Grade 2"
            duration="36 Weeks | 2–3 Sessions/Week | 40 Min/Session"
            aim="To investigate life cycles, properties of matter, Earth materials, and the engineering design process through inquiry-based learning."
            units={[
              {
                no: 1,
                topic: "Life Cycles",
                skills: "Sequence, compare, model",
              },
              {
                no: 2,
                topic: "Parents and Offspring — Inherited Traits",
                skills: "Compare, identify, discuss",
              },
              {
                no: 3,
                topic: "Habitats — Land and Water Environments",
                skills: "Identify needs, match animals",
              },
              {
                no: 4,
                topic: "Properties of Matter — In Depth",
                skills: "Measure mass, volume, density",
              },
              {
                no: 5,
                topic: "Changes in Matter — Mixing, Heating, Cooling",
                skills: "Reversible vs. irreversible change",
              },
              {
                no: 6,
                topic: "Earth Materials — Rocks, Soil, Water",
                skills: "Classify rocks, test soil permeability",
              },
              {
                no: 7,
                topic: "Landforms and Bodies of Water",
                skills: "Identify, map, compare",
              },
              {
                no: 8,
                topic: "Engineering Design",
                skills: "Define, plan, build, test",
              },
            ]}
          />

          <LevelCard
            levelNumber="3"
            title="Forces, Ecosystems & Climate"
            subtitle="Grade 3"
            ageGroup="Ages 8–9 | NGSS Grade 3"
            duration="36 Weeks | 2–3 Sessions/Week | 45 Min/Session"
            aim="To investigate forces, traits and inheritance, fossils, ecosystems, and climate patterns through structured scientific inquiry."
            units={[
              {
                no: 1,
                topic: "Forces and Motion",
                skills: "Measure, predict, design",
              },
              {
                no: 2,
                topic: "Magnetism and Static Electricity",
                skills: "Investigate attraction/repulsion",
              },
              {
                no: 3,
                topic: "Traits and Variation — Genetics Introduction",
                skills: "Inherited vs. environmental traits",
              },
              {
                no: 4,
                topic: "Fossils — Evidence of Ancient Life",
                skills: "Analyse, draw conclusions, model",
              },
              {
                no: 5,
                topic: "Food Chains and Food Webs",
                skills: "Build, trace energy, identify roles",
              },
              {
                no: 6,
                topic: "Ecosystems — Interdependence",
                skills: "Cause/effect, predict change",
              },
              {
                no: 7,
                topic: "Climate Patterns",
                skills: "Compare data, identify trends",
              },
              {
                no: 8,
                topic: "Scientific Method",
                skills: "Variables and Fair Tests, Design experiments",
              },
            ]}
          />

          <LevelCard
            levelNumber="4"
            title="Energy, Waves & Earth's History"
            subtitle="Grade 4"
            ageGroup="Ages 9–10 | NGSS Grade 4"
            duration="36 Weeks | 2–3 Sessions/Week | 45 Min/Session"
            aim="To study energy transfer, wave behaviour, Earth's geological history, and plant and animal internal structures."
            units={[
              {
                no: 1,
                topic: "Energy — Forms, Transfer, Transformation",
                skills: "Identify, trace energy pathways",
              },
              {
                no: 2,
                topic: "Waves — Properties of Sound and Light",
                skills: "Measure wavelength, frequency, amplitude",
              },
              {
                no: 3,
                topic: "Electricity and Circuits",
                skills: "Build series and parallel circuits",
              },
              {
                no: 4,
                topic: "Rock Cycle and Earth's History",
                skills: "Sequence, model, classify rocks",
              },
              {
                no: 5,
                topic: "Weathering, Erosion, and Deposition",
                skills: "Compare rates, model landform change",
              },
              {
                no: 6,
                topic: "Internal Structures — Plants and Animals",
                skills: "Label, function, compare",
              },
              {
                no: 7,
                topic: "Human Impact on Environments",
                skills: "Evaluate, problem-solve, argue",
              },
              {
                no: 8,
                topic: "Data Analysis in Science",
                skills: "Graphs, tables, conclusions",
              },
            ]}
          />

          <LevelCard
            levelNumber="5"
            title="Matter, Space & Body Systems"
            subtitle="Grade 5"
            ageGroup="Ages 10–11 | NGSS Grade 5"
            duration="36 Weeks | 2–3 Sessions/Week | 50 Min/Session"
            aim="To study matter at the atomic level, Earth's systems, the solar system, and human body systems — preparing students for secondary science."
            units={[
              {
                no: 1,
                topic: "Matter — Atoms, Molecules, Elements",
                skills: "Model, classify, intro to periodic table",
              },
              {
                no: 2,
                topic: "Chemical Reactions — Evidence",
                skills: "Predict, observe, explain",
              },
              {
                no: 3,
                topic: "Earth's Systems",
                skills: "Analyse interactions",
              },
              {
                no: 4,
                topic: "Water Cycle and Climate Change",
                skills: "Model, evaluate human impact",
              },
              {
                no: 5,
                topic: "Space — Solar System, Moon Phases, Gravity",
                skills: "Scale models, orbital patterns",
              },
              {
                no: 6,
                topic: "Stars and the Universe",
                skills: "Compare, research, present",
              },
              {
                no: 7,
                topic: "Human Body Systems",
                skills: "Label, explain, connect systems",
              },
              {
                no: 8,
                topic: "Ecosystem Dynamics",
                skills: "Research, argue, evaluate solutions",
              },
            ]}
          />

          <LevelCard
            levelNumber="6"
            title="Cells, Chemistry & Earth Science"
            subtitle="Grade 6"
            ageGroup="Ages 11–12 | Lower Secondary Science"
            duration="36 Weeks | 3 Sessions/Week | 50 Min/Session"
            aim="To introduce cell biology, foundational chemistry, Earth structure, and begin the transition to disciplinary science study."
            units={[
              {
                no: 1,
                topic: "Cell Biology — Cell Theory",
                skills: "Label, compare, microscope use",
              },
              {
                no: 2,
                topic: "Cell Processes — Diffusion, Osmosis, Mitosis",
                skills: "Describe, model, explain",
              },
              {
                no: 3,
                topic: "Periodic Table",
                skills: "Navigate, identify trends",
              },
              {
                no: 4,
                topic: "Compounds and Mixtures",
                skills: "Filtration, distillation, chromatography",
              },
              {
                no: 5,
                topic: "Acids and Bases — pH Scale",
                skills: "Test, classify, neutralisation intro",
              },
              {
                no: 6,
                topic: "Earth's Structure — Crust, Mantle, Core",
                skills: "Model, describe, analyse evidence",
              },
              {
                no: 7,
                topic: "Plate Tectonics",
                skills: "Explain, map, evaluate hazards",
              },
              {
                no: 8,
                topic: "Ecology — Nutrient Cycles",
                skills: "Trace, diagram, connect to climate",
              },
            ]}
          />

          <LevelCard
            levelNumber="7"
            title="Biology, Physics & Chemistry"
            subtitle="Grade 7"
            ageGroup="Ages 12–13 | Lower Secondary Science"
            duration="36 Weeks | 3 Sessions/Week | 55 Min/Session"
            aim="To study fundamental biology, physics, and chemistry in a structured, discipline-aware manner, building towards GCSE/IGCSE-level work."
            units={[
              {
                no: 1,
                topic: "Biology — Photosynthesis and Respiration",
                skills: "Chemical equations, limiting factors",
              },
              {
                no: 2,
                topic: "Biology — Human Nutrition and Digestion",
                skills: "Nutrients, enzymes, absorption",
              },
              {
                no: 3,
                topic: "Biology — Reproduction",
                skills: "Sexual/asexual, life stages",
              },
              {
                no: 4,
                topic: "Chemistry — Atomic Structure and Bonding",
                skills: "Protons, neutrons, electrons",
              },
              {
                no: 5,
                topic: "Chemistry — Chemical Equations and Reactions",
                skills: "Word and symbol equations",
              },
              {
                no: 6,
                topic: "Physics — Speed, Distance, Time",
                skills: "Calculate, graph motion, interpret",
              },
              {
                no: 7,
                topic: "Physics — Forces — Newton's Laws",
                skills: "Apply, calculate, real-world examples",
              },
              {
                no: 8,
                topic: "Physics — Energy — Work, Power, Efficiency",
                skills: "Calculate, apply Sankey diagrams",
              },
            ]}
          />

          <LevelCard
            levelNumber="8"
            title="Advanced Biology, Chemistry & Physics"
            subtitle="Grade 8"
            ageGroup="Ages 13–14 | GCSE/IGCSE Foundation"
            duration="36 Weeks | 3 Sessions/Week | 55 Min/Session"
            aim="To advance in all three sciences at GCSE/IGCSE foundation level, developing the analytical skills needed for formal examinations."
            units={[
              {
                no: 1,
                topic: "Biology — Genetics",
                skills: "Punnett squares, dominant/recessive",
              },
              {
                no: 2,
                topic: "Biology — Evolution and Natural Selection",
                skills: "Evidence, Darwin, adaptation",
              },
              {
                no: 3,
                topic: "Biology — Ecology",
                skills: "Quantitative analysis, fieldwork",
              },
              {
                no: 4,
                topic: "Chemistry — Rates of Reaction",
                skills: "Factors, graphs, activation energy",
              },
              {
                no: 5,
                topic: "Chemistry — Organic Chemistry Introduction",
                skills: "Hydrocarbons, polymers",
              },
              {
                no: 6,
                topic: "Chemistry — Electrolysis",
                skills: "Ions, electrodes, products, applications",
              },
              {
                no: 7,
                topic: "Physics — Waves — Sound and Light",
                skills: "Reflection, refraction, EM spectrum",
              },
              {
                no: 8,
                topic: "Physics — Electricity",
                skills: "V=IR, power, series/parallel",
              },
            ]}
          />

          <LevelCard
            levelNumber="9"
            title="GCSE Biology, Chemistry, Physics"
            subtitle="Grade 9"
            ageGroup="Ages 14–15 | GCSE/IGCSE Year 1"
            duration="36 Weeks | 3 Sessions/Week | 60 Min/Session"
            aim="To complete GCSE/IGCSE core content across all three sciences, developing exam skills, required practicals, and scientific communication."
            units={[
              {
                no: 1,
                topic: "Biology — Cell Division, Cancer, Stem Cells",
                skills: "Mitosis, meiosis, ethical debate",
              },
              {
                no: 2,
                topic: "Biology — Nervous System and Homeostasis",
                skills: "Reflex arc, thermoregulation, diabetes",
              },
              {
                no: 3,
                topic: "Chemistry — The Mole and Stoichiometry",
                skills: "Calculate moles, mass",
              },
              {
                no: 4,
                topic: "Chemistry — Equilibrium",
                skills: "Predict shifts, Haber process",
              },
              {
                no: 5,
                topic: "Chemistry — Redox Reactions",
                skills: "Oxidation states, electron transfer",
              },
              {
                no: 6,
                topic: "Physics — Radioactivity — Decay, Half-life",
                skills: "Calculate, graph, applications",
              },
              {
                no: 7,
                topic: "Physics — Space Physics",
                skills: "Lifecycle of stars, Big Bang evidence",
              },
              {
                no: 8,
                topic: "Required Practicals Skills",
                skills: "Design, execute, evaluate, write up",
              },
            ]}
          />

          <LevelCard
            levelNumber="10"
            title="GCSE Completion & A-Level Preparation"
            subtitle="Grade 10"
            ageGroup="Ages 15–16 | GCSE/IGCSE Year 2 & Beyond"
            duration="36 Weeks | 3 Sessions/Week | 60 Min/Session"
            aim="To complete GCSE/IGCSE preparation, master all required content, and introduce students to A-Level/pre-university science thinking."
            units={[
              {
                no: 1,
                topic: "Biology — Immunity, Vaccination, Monoclonal Antibodies",
                skills: "Analyse, evaluate, apply",
              },
              {
                no: 2,
                topic: "Biology — Plant Hormones and Genetic Engineering",
                skills: "Explain, debate, evaluate ethics",
              },
              {
                no: 3,
                topic: "Chemistry — Transition Metals",
                skills: "Identify ions, colour changes",
              },
              {
                no: 4,
                topic: "Chemistry — Polymer and Green Chemistry",
                skills: "Addition vs. condensation, life cycle",
              },
              {
                no: 5,
                topic: "Physics — Electromagnetic Induction",
                skills: "Faraday's law, calculate, apply",
              },
              {
                no: 6,
                topic: "Physics — Nuclear Physics and Energy",
                skills: "Fission, fusion, nuclear equations",
              },
              {
                no: 7,
                topic: "Examination Technique",
                skills: "6-mark answers, graph analysis",
              },
              {
                no: 8,
                topic: "A-Level Science Thinking",
                skills: "Bridging Introduction tasks",
              },
            ]}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            Empower Their Discovery
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            Give your child the scientific literacy to thrive in higher
            academics and understand the world around them deeply.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-emerald-600/30 dark:border-emerald-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Sciences Programme
            </h3>
            <div className="font-cormorant text-5xl text-emerald-600 dark:text-emerald-400 mb-6">
              Core
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Biology, Chemistry, Physics
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  GCSE/IGCSE Track
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Inquiry-Driven Labs
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
              href="/programmes/western"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-sans underline underline-offset-4"
            >
              ← Back to Core Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Sciences
function LevelCard({
  levelNumber,
  title,
  subtitle,
  ageGroup,
  duration,
  aim,
  units,
}: {
  levelNumber: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  duration: string;
  aim: string;
  units: { no: number; topic: string; skills: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-emerald-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-emerald-400 dark:text-emerald-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              LEVEL {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm font-semibold">
              {ageGroup}
            </p>
          </div>
          <div className="md:text-end">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-emerald-400">
              <TestTube className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">Duration / Frequency:</strong>{" "}
            {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">Aim:</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-200">
            <thead>
              <tr className="border-b-2 border-emerald-100 dark:border-white/10 bg-emerald-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-emerald-700 dark:text-emerald-400 font-bold w-16 text-center">
                  Unit
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/2">
                  Unit / Topic
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold">
                  Key Skills / Outcomes
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80 text-sm">
              {units.map((unit, idx) => (
                <tr
                  key={idx}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-center text-emerald-600 dark:text-emerald-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
                  </td>
                  <td className="py-4 px-6 leading-relaxed">{unit.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
