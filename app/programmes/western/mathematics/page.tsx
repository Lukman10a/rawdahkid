"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle,
  GraduationCap,
  Compass,
  Sigma,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function MathematicsProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full mb-6">
              <Sigma className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              Mathematics
            </h1>
            <h2 className="font-sans text-xl md:text-2xl text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 font-semibold">
              Horizons Math + Pre-Calculus
            </h2>

            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
              <span>Primary</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Secondary</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>10 Levels</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Ages 6–16</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              &quot;Spiral Learning • Conceptual Mastery • Algebraic Thinking •
              University Readiness&quot;
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
              <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                The Mathematics curriculum begins with the Horizons Math
                Curriculum (HMC) in the primary years — a proven spiral-learning
                approach used widely in the United States.
              </p>
              <p>
                From Grade 6 onwards, students advance through pre-algebra,
                Algebra I, Algebra II, and culminate in Pre-Calculus with an
                introduction to differentiation and integration by age 16.
              </p>
              <p className="font-semibold text-midnight dark:text-cream italic border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                This trajectory prepares students fully for A-Level or
                university entrance mathematics.
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
              <Calculator className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              Core Progression
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Primary (Levels 1–5)",
                  desc: "Horizons Math Curriculum ensuring solid arithmetic, fractions, decimals and early geometry.",
                },
                {
                  title: "Middle School (Levels 6–7)",
                  desc: "Pre-Algebra and Algebra I foundations, mastering proportional reasoning and linear equations.",
                },
                {
                  title: "High School (Levels 8–9)",
                  desc: "Algebra I & II alongside formal geometry, quadratics, and trigonometry.",
                },
                {
                  title: "Capstone (Level 10)",
                  desc: "Pre-Calculus and an introduction to limits, differentiation, and integration.",
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
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
      <section className="py-20 bg-blue-50/50 dark:bg-blue-900/10 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              Mathematics at a Glance
            </h2>
            <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 text-lg w-20">
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
                  { lvl: "1", age: "6–7", focus: "Number sense, shapes, time" },
                  {
                    lvl: "2",
                    age: "7–8",
                    focus: "Place value, addition to 1,000",
                  },
                  {
                    lvl: "3",
                    age: "8–9",
                    focus: "Multiplication & division mastery",
                  },
                  {
                    lvl: "4",
                    age: "9–10",
                    focus: "Multi-digit ops, fractions",
                  },
                  {
                    lvl: "5",
                    age: "10–11",
                    focus: "Ratios, decimals, pre-algebra",
                  },
                  { lvl: "6", age: "11–12", focus: "Algebra foundations" },
                  {
                    lvl: "7",
                    age: "12–13",
                    focus: "Algebra I — linear equations",
                  },
                  { lvl: "8", age: "13–14", focus: "Algebra I/II + geometry" },
                  {
                    lvl: "9",
                    age: "14–15",
                    focus: "Algebra II + trigonometry",
                  },
                  {
                    lvl: "10",
                    age: "15–16",
                    focus: "Pre-Calculus + intro to calculus",
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
          <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <LevelCard
            levelNumber="1"
            title="Foundations of Number"
            subtitle="Grade 1"
            ageGroup="Ages 6–7 | HMC Grade 1"
            duration="36 Weeks | 4–5 Sessions/Week | 40 Min/Session"
            aim="To build solid addition and subtraction fluency to 20, introduce place value to 100, and develop early problem-solving and measurement skills."
            units={[
              {
                no: 1,
                topic: "Number Sense & Counting to 120",
                skills: "Count forward/backward, skip count",
              },
              {
                no: 2,
                topic: "Place Value — Tens and Ones",
                skills: "Group, compare, expand numbers",
              },
              {
                no: 3,
                topic: "Addition & Subtraction Fluency (to 20)",
                skills: "Mental math, fact families",
              },
              {
                no: 4,
                topic: "Adding/Subtracting Multiples of 10",
                skills: "Skip counting, number patterns",
              },
              {
                no: 5,
                topic: "Measurement — Length (inches & cm)",
                skills: "Measure, estimate, compare",
              },
              {
                no: 6,
                topic: "Time — Hour, Half Hour, Quarter Hour",
                skills: "Read analogue & digital clocks",
              },
              {
                no: 7,
                topic: "Geometry — Shapes, Halves and Quarters",
                skills: "Identify, sort, describe, partition",
              },
              {
                no: 8,
                topic: "Money — Coins and Values to $1",
                skills: "Count coins, make amounts",
              },
              {
                no: 9,
                topic: "Data — Picture Graphs and Tables",
                skills: "Read, create, interpret",
              },
              {
                no: 10,
                topic: "Word Problems — One-step",
                skills: "Model, plan, solve, check",
              },
            ]}
          />

          <LevelCard
            levelNumber="2"
            title="Building Fluency"
            subtitle="Grade 2"
            ageGroup="Ages 7–8 | HMC Grade 2"
            duration="36 Weeks | 4–5 Sessions/Week | 40 Min/Session"
            aim="To master addition and subtraction to 1,000, introduce multiplication and division concepts, and strengthen fractions and measurement."
            units={[
              {
                no: 1,
                topic: "Place Value to 1,000",
                skills: "Hundreds, tens, ones; expanded form",
              },
              {
                no: 2,
                topic: "Addition & Subtraction to 1,000 (regrouping)",
                skills: "Multi-digit algorithms",
              },
              {
                no: 3,
                topic: "Multiplication — Equal Groups & Arrays",
                skills: "Repeated addition, skip count",
              },
              {
                no: 4,
                topic: "Division — Sharing Equally",
                skills: "Partition sets, basic facts",
              },
              {
                no: 5,
                topic: "Fractions — Halves, Thirds, Fourths",
                skills: "Name, compare, order",
              },
              {
                no: 6,
                topic: "Measurement — Length, Area, Perimeter",
                skills: "Estimate, measure, calculate",
              },
              {
                no: 7,
                topic: "Time — Minutes and Elapsed Time",
                skills: "Tell time, calculate durations",
              },
              {
                no: 8,
                topic: "Money — Making Change to $10",
                skills: "Add, subtract, count change",
              },
              {
                no: 9,
                topic: "Geometry — Perimeter and Basic Area",
                skills: "Count units, use formula",
              },
              {
                no: 10,
                topic: "Data — Bar Graphs and Pictographs",
                skills: "Collect, display, analyse",
              },
            ]}
          />

          <LevelCard
            levelNumber="3"
            title="Multiplication & Division Mastery"
            subtitle="Grade 3"
            ageGroup="Ages 8–9 | HMC Grade 3"
            duration="36 Weeks | 4–5 Sessions/Week | 45 Min/Session"
            aim="To achieve fluency in multiplication and division facts to 12, introduce fractions on a number line, and develop multi-step problem solving."
            units={[
              {
                no: 1,
                topic: "Multiplication Facts 0–12 — Full Fluency",
                skills: "Times tables, mental recall",
              },
              {
                no: 2,
                topic: "Division Facts",
                skills: "Fact families, missing factors",
              },
              {
                no: 3,
                topic: "Multi-digit Multiplication (2-digit × 1-digit)",
                skills: "Partial products, algorithm",
              },
              {
                no: 4,
                topic: "Division — 2-digit ÷ 1-digit",
                skills: "Estimate, divide, check",
              },
              {
                no: 5,
                topic: "Fractions — Equivalence, Comparing, Line",
                skills: "Benchmark fractions, ordering",
              },
              {
                no: 6,
                topic: "Decimals — Tenths and Hundredths",
                skills: "Place value, compare, order",
              },
              {
                no: 7,
                topic: "Perimeter and Area of Rectangles",
                skills: "Formulas, real-world problems",
              },
              {
                no: 8,
                topic: "Measurement — Mass, Volume",
                skills: "Convert units, estimate",
              },
              {
                no: 9,
                topic: "Time — 12/24-hour, Elapsed Time",
                skills: "Word problems, timetables",
              },
              {
                no: 10,
                topic: "Data & Probability — Scaled Graphs",
                skills: "Analyse, interpret, predict",
              },
            ]}
          />

          <LevelCard
            levelNumber="4"
            title="Multi-digit Operations & Fractions"
            subtitle="Grade 4"
            ageGroup="Ages 9–10 | HMC Grade 4"
            duration="36 Weeks | 4–5 Sessions/Week | 45 Min/Session"
            aim="To master multi-digit multiplication and division, build fraction arithmetic, and introduce algebraic thinking and geometry."
            units={[
              {
                no: 1,
                topic: "Place Value to 1,000,000",
                skills: "Read, Write, Compare, Round, order",
              },
              {
                no: 2,
                topic: "Multi-digit Multiplication (3-digit × 2-digit)",
                skills: "Area model, standard algorithm",
              },
              {
                no: 3,
                topic: "Long Division (4-digit ÷ 2-digit)",
                skills: "Estimate quotients, interpret remainders",
              },
              {
                no: 4,
                topic: "Fraction Operations — Add & Subtract",
                skills: "LCM, equivalent fractions",
              },
              {
                no: 5,
                topic: "Multiplying Fractions by Whole Numbers",
                skills: "Models, real-world application",
              },
              {
                no: 6,
                topic: "Decimal Operations — Add and Subtract",
                skills: "Align decimal points, estimate",
              },
              {
                no: 7,
                topic: "Geometry — Angles, Lines, Symmetry",
                skills: "Classify, measure with protractor",
              },
              {
                no: 8,
                topic: "Order of Operations — PEMDAS",
                skills: "Evaluate multi-step expressions",
              },
              {
                no: 9,
                topic: "Algebra — Variables and Simple Equations",
                skills: "Write and solve one-step equations",
              },
              {
                no: 10,
                topic: "Statistics — Mean, Median, Mode, Range",
                skills: "Calculate and interpret data sets",
              },
            ]}
          />

          <LevelCard
            levelNumber="5"
            title="Ratios, Decimals & Pre-Algebra"
            subtitle="Grade 5"
            ageGroup="Ages 10–11 | HMC Grade 5"
            duration="36 Weeks | 4–5 Sessions/Week | 50 Min/Session"
            aim="To master fraction and decimal operations, introduce ratios, percentages, integers, and lay groundwork for algebra and coordinate geometry."
            units={[
              {
                no: 1,
                topic: "Fraction Operations — Multiply and Divide",
                skills: "Algorithm, models, word problems",
              },
              {
                no: 2,
                topic: "Decimal Operations — All Four Operations",
                skills: "Powers of 10, standard algorithm",
              },
              {
                no: 3,
                topic: "Ratios and Proportional Reasoning",
                skills: "Equivalent ratios, unit rate, tables",
              },
              {
                no: 4,
                topic: "Percentages — Conversions and Applications",
                skills: "Find % of quantity, discounts, tax",
              },
              {
                no: 5,
                topic: "Integers — Positive and Negative Numbers",
                skills: "Number line, add, subtract",
              },
              {
                no: 6,
                topic: "Coordinate Geometry — Four Quadrants",
                skills: "Plot ordered pairs, reflections",
              },
              {
                no: 7,
                topic: "Geometry — Area, Volume, Surface Area",
                skills: "Prisms, pyramids, composite shapes",
              },
              {
                no: 8,
                topic: "Algebra — Solving Two-step Equations",
                skills: "Balance, inverse operations",
              },
              {
                no: 9,
                topic: "Advanced Order of Operations & Expressions",
                skills: "Simplify, expand, substitute",
              },
              {
                no: 10,
                topic: "Probability — Theoretical and Experimental",
                skills: "Calculate, predict, compare",
              },
            ]}
          />

          <LevelCard
            levelNumber="6"
            title="Foundations of Algebra"
            subtitle="Grade 6"
            ageGroup="Ages 11–12 | Pre-Algebra / HMC Grade 6"
            duration="36 Weeks | 4–5 Sessions/Week | 50 Min/Session"
            aim="To develop strong algebraic thinking, master ratio and proportional relationships, explore statistics, and transition confidently into formal algebra."
            units={[
              {
                no: 1,
                topic: "Ratios and Rates — Advanced Applications",
                skills: "Unit rate, ratio tables, tape diagrams",
              },
              {
                no: 2,
                topic: "Proportional Relationships and Graphs",
                skills: "Identify, represent, interpret",
              },
              {
                no: 3,
                topic: "Percentages — Increase/Decrease, Interest",
                skills: "Calculate change, real-world problems",
              },
              {
                no: 4,
                topic: "Integers — All Four Operations",
                skills: "Rules for signs, absolute value",
              },
              {
                no: 5,
                topic: "Rational Numbers — Fractions, Decimals, Negatives",
                skills: "Order, operate, convert",
              },
              {
                no: 6,
                topic: "Expressions and Equations — Variables",
                skills: "Write, evaluate, simplify",
              },
              {
                no: 7,
                topic: "Solving One- and Two-step Equations",
                skills: "Inverse operations, check solutions",
              },
              {
                no: 8,
                topic: "Solving Inequalities — Introduction",
                skills: "Represent on number line, interpret",
              },
              {
                no: 9,
                topic: "Geometry — Area of Complex Shapes, Volume",
                skills: "Decompose, calculate, apply",
              },
              {
                no: 10,
                topic: "Statistics — Measures of Centre and Spread",
                skills: "Mean, MAD, box plots, histograms",
              },
            ]}
          />

          <LevelCard
            levelNumber="7"
            title="Algebra I Foundations"
            subtitle="Grade 7"
            ageGroup="Ages 12–13 | Algebra I Preparation"
            duration="36 Weeks | 4–5 Sessions/Week | 55 Min/Session"
            aim="To develop proportional reasoning, linear relationships, and foundational algebra skills including equations, inequalities, and geometry of two-dimensional figures."
            units={[
              {
                no: 1,
                topic: "Proportional Relationships",
                skills: "Constant of Proportionality, graphs, equations",
              },
              {
                no: 2,
                topic: "Linear Equations — One Variable",
                skills: "Multi-step, distributive property",
              },
              {
                no: 3,
                topic: "Linear Inequalities — Graphing Solutions",
                skills: "Compound inequalities, real-world",
              },
              {
                no: 4,
                topic: "Operations with Rational Numbers",
                skills: "All operations, problem solving",
              },
              {
                no: 5,
                topic: "Algebraic Expressions",
                skills: "Expand, factorise, simplify like terms",
              },
              {
                no: 6,
                topic: "Geometry — Scale Drawings and Similar Figures",
                skills: "Calculate scale, find missing sides",
              },
              {
                no: 7,
                topic: "Geometry — Angles, Triangles and Transversals",
                skills: "Angle relationships, proof introduction",
              },
              {
                no: 8,
                topic: "Circles — Circumference and Area",
                skills: "Pi, formula, real-world applications",
              },
              {
                no: 9,
                topic: "Statistics — Sampling and Inference",
                skills: "Random samples, draw conclusions",
              },
              {
                no: 10,
                topic: "Probability — Compound Events",
                skills: "Tree diagrams, counting principle",
              },
            ]}
          />

          <LevelCard
            levelNumber="8"
            title="Algebra I & Geometry"
            subtitle="Grade 8"
            ageGroup="Ages 13–14 | Algebra I / Geometry"
            duration="36 Weeks | 4–5 Sessions/Week | 55 Min/Session"
            aim="To complete Algebra I, covering linear functions and systems of equations, and introduce geometric proofs, the Pythagorean theorem, and transformations."
            units={[
              {
                no: 1,
                topic: "Linear Functions — Slope and y-intercept",
                skills: "Graph, write equations, interpret",
              },
              {
                no: 2,
                topic: "Systems of Linear Equations",
                skills: "Substitution, elimination, graphing",
              },
              {
                no: 3,
                topic: "Exponents and Scientific Notation",
                skills: "Laws of exponents, convert, compute",
              },
              {
                no: 4,
                topic: "Polynomials — Add, Subtract, Multiply",
                skills: "Standard form, FOIL, area model",
              },
              {
                no: 5,
                topic: "Factoring Polynomials",
                skills: "GCF, difference of squares, trinomials",
              },
              {
                no: 6,
                topic: "Pythagorean Theorem and Its Converse",
                skills: "Prove, apply, real-world problems",
              },
              {
                no: 7,
                topic: "Geometry — Transformations",
                skills: "Translate, reflect, rotate, dilate",
              },
              {
                no: 8,
                topic: "Geometry — Congruence and Similarity",
                skills: "Corresponding parts, scale factor",
              },
              {
                no: 9,
                topic: "Volume of 3D Figures",
                skills: "Cylinders, cones, spheres formula",
              },
              {
                no: 10,
                topic: "Bivariate Data — Scatter Plots",
                skills: "Lines of Best Fit, correlation",
              },
            ]}
          />

          <LevelCard
            levelNumber="9"
            title="Algebra II & Trigonometry Foundations"
            subtitle="Grade 9"
            ageGroup="Ages 14–15 | Algebra II"
            duration="36 Weeks | 4–5 Sessions/Week | 55–60 Min/Session"
            aim="To extend algebra to quadratic and exponential functions, introduce complex numbers, and lay foundations for trigonometry and advanced problem solving."
            units={[
              {
                no: 1,
                topic: "Quadratic Functions",
                skills: "Graphs, vertex, axis of symmetry",
              },
              {
                no: 2,
                topic: "Solving Quadratics",
                skills: "Factoring, formula, completing square",
              },
              {
                no: 3,
                topic: "Complex Numbers — Introduction",
                skills: "i, add, subtract, multiply",
              },
              {
                no: 4,
                topic: "Exponential Functions",
                skills: "Growth and decay, model real-world",
              },
              {
                no: 5,
                topic: "Logarithms — Introduction and Properties",
                skills: "Convert between log and exponential",
              },
              {
                no: 6,
                topic: "Radical Expressions and Equations",
                skills: "Simplify, solve, check extraneous",
              },
              {
                no: 7,
                topic: "Rational Expressions and Equations",
                skills: "Simplify, add, multiply, solve",
              },
              {
                no: 8,
                topic: "Sequences and Series",
                skills: "Arithmetic and Geometric, nth term",
              },
              {
                no: 9,
                topic: "Introduction to Trigonometry (SOHCAHTOA)",
                skills: "Right triangles, sine, cosine, tangent",
              },
              {
                no: 10,
                topic: "Trigonometry — Unit Circle",
                skills: "Special angles, exact values",
              },
            ]}
          />

          <LevelCard
            levelNumber="10"
            title="Pre-Calculus & Advanced Mathematics"
            subtitle="Grade 10"
            ageGroup="Ages 15–16 | Pre-Calculus"
            duration="36 Weeks | 4–5 Sessions/Week | 60 Min/Session"
            aim="To develop advanced mathematical reasoning through functions, conic sections, matrices, probability, and an introduction to calculus concepts."
            units={[
              {
                no: 1,
                topic: "Functions — Domain, Range, Composition",
                skills: "Analyse, transform, combine, inverses",
              },
              {
                no: 2,
                topic: "Polynomial Functions — Higher Degree",
                skills: "Rational roots, end behaviour, zeros",
              },
              {
                no: 3,
                topic: "Trigonometric Functions",
                skills: "Graphs, Amplitude, Period, transformations",
              },
              {
                no: 4,
                topic: "Trigonometric Identities and Equations",
                skills: "Prove identities, solve equations",
              },
              {
                no: 5,
                topic: "Conic Sections — Circle, Ellipse",
                skills: "Parabola, Hyperbola, standard form",
              },
              {
                no: 6,
                topic: "Matrices — Operations, Determinants",
                skills: "Inverses, solve systems using matrices",
              },
              {
                no: 7,
                topic: "Combinatorics and Probability",
                skills: "Permutations, combinations, Binomial",
              },
              {
                no: 8,
                topic: "Limits — Introduction to Calculus",
                skills: "Concept of limit, continuity",
              },
              {
                no: 9,
                topic: "Introduction to Differentiation",
                skills: "Derivative rules, tangent lines, rate of change",
              },
              {
                no: 10,
                topic: "Introduction to Integration",
                skills: "Area under curve, Fundamental Theorem",
              },
            ]}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            Equip Your Child for Excellence
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            Build a bulletproof mathematical foundation that prepares them for
            global opportunities, critical thinking, and the highest levels of
            academia.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-blue-600/30 dark:border-blue-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Mathematics Programme
            </h3>
            <div className="font-cormorant text-5xl text-blue-600 dark:text-blue-400 mb-6">
              Core
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Guided 10-Level Path
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  HMC to Pre-Calculus
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Expert Instructors
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
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors font-sans underline underline-offset-4"
            >
              ← Back to Core Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Mathematics
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
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-blue-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-blue-400 dark:text-blue-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              LEVEL {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm font-semibold">
              {ageGroup}
            </p>
          </div>
          <div className="md:text-right">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-blue-400">
              <Sigma className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">Duration / Frequency:</strong>{" "}
            {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-left">
          <strong className="text-white block mb-1">Aim:</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="border-b-2 border-blue-100 dark:border-white/10 bg-blue-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 font-bold w-16 text-center">
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
                  <td className="py-4 px-6 font-bold text-center text-blue-600 dark:text-blue-400">
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
