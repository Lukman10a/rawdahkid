"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  GraduationCap,
  Compass,
  Terminal,
  Laptop,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ProgrammingProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full mb-6">
              <Code2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              Programming
            </h1>
            <h2 className="font-sans text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-6 font-semibold">
              Scratch → Python → Web → Full-Stack
            </h2>

            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
              <span>Logic</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Algorithms</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>Engineering</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              &quot;The emphasis is on problem-solving, project work, and
              genuine understanding — not rote coding.&quot;
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
              <Compass className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                The Programming curriculum is the most comprehensive in the
                programme — a ten-level journey that takes students from their
                very first block of code at age 6 to deploying a real full-stack
                web application with a professional portfolio by age 16.
              </p>
              <p>
                At every stage, students are engaged in building interactive
                projects, progressing seamlessly from block-based programming to
                complex algorithms and data structures using Python and modern
                web frameworks.
              </p>
              <p className="font-semibold text-midnight dark:text-cream italic border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 py-1">
                We produce engineers who are technically capable,
                algorithmically literate, and career-ready.
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
              <Terminal className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Core Progression
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Foundations (Levels 1–3)",
                  desc: "Scratch Jr and full Scratch 3.0 alongside unplugged computational thinking and game development.",
                },
                {
                  title: "Core Logic (Levels 4–5)",
                  desc: "Transition to text-based Python 3 covering fundamentals, algorithms, data structures, and OOP.",
                },
                {
                  title: "Web Engineering (Levels 6–7)",
                  desc: "Building responsive frontends and interactivity using modern HTML, CSS, JavaScript, and React basics.",
                },
                {
                  title: "Advanced & Capstone (Levels 8–10)",
                  desc: "Computer Science theory (A-Level prep), Data Science, and a deployed full-stack web application.",
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
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
      <section className="py-20 bg-indigo-50/50 dark:bg-indigo-900/10 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              Programming at a Glance
            </h2>
            <div className="w-24 h-px bg-indigo-600/50 dark:bg-indigo-400/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-indigo-700 dark:text-indigo-400 text-lg w-20">
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
                  { lvl: "1", age: "6–7", focus: "Scratch Jr + unplugged" },
                  { lvl: "2", age: "7–8", focus: "Scratch 3.0 block coding" },
                  { lvl: "3", age: "8–9", focus: "Intermediate Scratch & CS" },
                  { lvl: "4", age: "9–10", focus: "Python 3 fundamentals" },
                  { lvl: "5", age: "10–11", focus: "Python 3 intermediate" },
                  { lvl: "6", age: "11–12", focus: "HTML & CSS web design" },
                  { lvl: "7", age: "12–13", focus: "JavaScript & React" },
                  { lvl: "8", age: "13–14", focus: "Python advanced & data" },
                  { lvl: "9", age: "14–15", focus: "CS theory & GCSE prep" },
                  {
                    lvl: "10",
                    age: "15–16",
                    focus: "Full-stack capstone & portfolio",
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
          <div className="w-24 h-px bg-indigo-600/50 dark:bg-indigo-400/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <LevelCard
            levelNumber="1"
            title="Unplugged + Scratch Jr"
            subtitle="Computational Thinking Foundations"
            ageGroup="Ages 6–7"
            duration="36 Weeks | 1–2 Sessions/Week | 30–40 Min/Session"
            aim="To introduce sequencing, algorithms, and the concept of instructions through unplugged activities, then transition into Scratch Jr on tablet."
            units={[
              {
                no: 1,
                topic: "What is a Computer?",
                skills: "Hardware and Software Basics",
              },
              {
                no: 2,
                topic: "Algorithms",
                skills: "Giving and following instructions",
              },
              {
                no: 3,
                topic: "Sequences",
                skills: "Step-by-Step Thinking (Unplugged)",
              },
              {
                no: 4,
                topic: "Debugging",
                skills: "Fixing mistakes in instructions",
              },
              {
                no: 5,
                topic: "Introduction to Scratch Jr",
                skills: "Navigating the App",
              },
              {
                no: 6,
                topic: "Scratch Jr — Moving and Animating",
                skills: "Motion and looks blocks",
              },
              {
                no: 7,
                topic: "Scratch Jr — Events and Loops",
                skills: "Trigger scripts, repeat actions",
              },
              {
                no: 8,
                topic: "Scratch Jr — Project",
                skills: "Create a Simple Story",
              },
            ]}
          />

          <LevelCard
            levelNumber="2"
            title="Scratch 3.0 — Block Coding"
            subtitle="Beginner Coding"
            ageGroup="Ages 7–8"
            duration="36 Weeks | 2 Sessions/Week | 40 Min/Session"
            aim="To develop logical thinking, sequencing, loops, and conditionals through Scratch 3.0 visual block programming, culminating in a complete game project."
            units={[
              {
                no: 1,
                topic: "Scratch 3.0 Interface",
                skills: "Sprites, Stage, Costumes, Sounds",
              },
              {
                no: 2,
                topic: "Motion and Looks Blocks",
                skills: "Move sprites, change costumes",
              },
              {
                no: 3,
                topic: "Events",
                skills: "When Key Pressed, When Flag Clicked",
              },
              {
                no: 4,
                topic: "Loops",
                skills: "Repeat, Repeat Until, Forever",
              },
              { no: 5, topic: "Conditionals", skills: "if / if-else Blocks" },
              { no: 6, topic: "Variables", skills: "Score, Timer, Counter" },
              { no: 7, topic: "Broadcasting", skills: "Sprites Communicating" },
              {
                no: 8,
                topic: "Project",
                skills: "Build a Complete Game in Scratch",
              },
            ]}
          />

          <LevelCard
            levelNumber="3"
            title="Intermediate Scratch & CS Concepts"
            subtitle="Deepening Logic"
            ageGroup="Ages 8–9"
            duration="36 Weeks | 2 Sessions/Week | 45 Min/Session"
            aim="To deepen Scratch skills, introduce core computer science concepts including decomposition, abstraction, and data structures, and build interactive projects."
            units={[
              {
                no: 1,
                topic: "Decomposition",
                skills: "Breaking big problems into small steps",
              },
              {
                no: 2,
                topic: "Abstraction",
                skills: "Focusing on what matters, simplify",
              },
              { no: 3, topic: "User Input", skills: "Ask and Answer blocks" },
              { no: 4, topic: "Lists", skills: "Storing multiple items" },
              { no: 5, topic: "Clones", skills: "Creating copies of sprites" },
              {
                no: 6,
                topic: "Custom Blocks (My Blocks)",
                skills: "Introduction to Functions",
              },
              {
                no: 7,
                topic: "Number Systems",
                skills: "Binary and Hexadecimal",
              },
              {
                no: 8,
                topic: "Project",
                skills: "Multi-level Game or Interactive Quiz",
              },
            ]}
          />

          <LevelCard
            levelNumber="4"
            title="Python 3 — Fundamentals"
            subtitle="Text-based Programming"
            ageGroup="Ages 9–10"
            duration="36 Weeks | 2 Sessions/Week | 45 Min/Session"
            aim="To transition from block coding to real text-based programming using Python 3, covering core syntax, data types, control flow, and functions."
            units={[
              {
                no: 1,
                topic: "Introduction to Python",
                skills: "Why text code?, write first program",
              },
              {
                no: 2,
                topic: "Print, Input, Comments",
                skills: "Run programs, track errors",
              },
              {
                no: 3,
                topic: "Variables and Data Types",
                skills: "str, int, float, bool",
              },
              {
                no: 4,
                topic: "Arithmetic Operators",
                skills: "Calculate, PEMDAS in code",
              },
              { no: 5, topic: "Conditionals", skills: "if, elif, else" },
              { no: 6, topic: "Loops", skills: "for and while, range()" },
              {
                no: 7,
                topic: "Functions",
                skills: "def, parameters, return values",
              },
              { no: 8, topic: "Lists", skills: "Create, index, slice, loop" },
              {
                no: 9,
                topic: "Strings",
                skills: "Methods, formatting, f-strings",
              },
              { no: 10, topic: "Project", skills: "Text-Based Adventure Game" },
            ]}
          />

          <LevelCard
            levelNumber="5"
            title="Python 3 — Intermediate"
            subtitle="Object-Oriented & Applied Python"
            ageGroup="Ages 10–11"
            duration="36 Weeks | 2 Sessions/Week | 50 Min/Session"
            aim="To develop intermediate Python skills including dictionaries, modules, file handling, error handling, and an introduction to object-oriented programming."
            units={[
              { no: 1, topic: "Dictionaries", skills: "Key-Value pairs, maps" },
              {
                no: 2,
                topic: "Tuples and Sets",
                skills: "Immutability, uniqueness",
              },
              {
                no: 3,
                topic: "File Handling",
                skills: "Read/write text and CSV",
              },
              {
                no: 4,
                topic: "Importing Modules",
                skills: "math, random, datetime, os",
              },
              {
                no: 5,
                topic: "Error Handling",
                skills: "try, except, finally blocks",
              },
              {
                no: 6,
                topic: "OOP — Classes",
                skills: "Attributes, methods, self",
              },
              {
                no: 7,
                topic: "OOP — Inheritance",
                skills: "Subclasses, polymorphism",
              },
              {
                no: 8,
                topic: "Recursion",
                skills: "Functions calling themselves",
              },
              { no: 9, topic: "Algorithms", skills: "Sorting, Binary Search" },
              {
                no: 10,
                topic: "Project",
                skills: "Python App with File Storage",
              },
            ]}
          />

          <LevelCard
            levelNumber="6"
            title="HTML & CSS — Web Design Fundamentals"
            subtitle="Web Development Basics"
            ageGroup="Ages 11–12"
            duration="36 Weeks | 2 Sessions/Week | 50 Min/Session"
            aim="To introduce the structure and presentation of web pages using HTML and CSS, enabling students to design and build complete, styled websites."
            units={[
              {
                no: 1,
                topic: "How the Web Works",
                skills: "Servers, Clients, HTTP",
              },
              {
                no: 2,
                topic: "HTML Structure",
                skills: "Document structure, tags, elements",
              },
              {
                no: 3,
                topic: "HTML Content",
                skills: "Text, links, images, tables",
              },
              {
                no: 4,
                topic: "HTML Forms",
                skills: "Input, select, submit securely",
              },
              {
                no: 5,
                topic: "CSS Styling",
                skills: "Selectors, properties, box model",
              },
              {
                no: 6,
                topic: "CSS Layouts",
                skills: "Flexbox and Grid layouts",
              },
              {
                no: 7,
                topic: "CSS Animations",
                skills: "Transitions, keyframes, variables",
              },
              {
                no: 8,
                topic: "Responsive Design",
                skills: "Media queries for mobile/desktop",
              },
              { no: 9, topic: "Accessibility", skills: "ARIA, semantic HTML" },
              {
                no: 10,
                topic: "Project",
                skills: "Deploy a Complete Personal Website",
              },
            ]}
          />

          <LevelCard
            levelNumber="7"
            title="JavaScript — Interactive Web Pages"
            subtitle="Frontend Engineering"
            ageGroup="Ages 12–13"
            duration="36 Weeks | 2 Sessions/Week | 55 Min/Session"
            aim="To add interactivity and logic to web pages using JavaScript, covering DOM manipulation, events, APIs, and the foundations of modern web development."
            units={[
              {
                no: 1,
                topic: "JS Syntax",
                skills: "Variables, types, operators",
              },
              {
                no: 2,
                topic: "Core Logic in JS",
                skills: "Functions, conditionals, loops",
              },
              {
                no: 3,
                topic: "The DOM",
                skills: "Selecting and manipulating elements",
              },
              {
                no: 4,
                topic: "Events",
                skills: "Click, keypress, form submit",
              },
              {
                no: 5,
                topic: "Data Structures in JS",
                skills: "Arrays, Objects, iteration",
              },
              {
                no: 6,
                topic: "Asynchronous JavaScript",
                skills: "Promises, setTimeout, Fetch",
              },
              {
                no: 7,
                topic: "Working with JSON",
                skills: "Parsing and displaying dynamic API data",
              },
              {
                no: 8,
                topic: "Intro to React",
                skills: "Components, props, state (basics)",
              },
              {
                no: 9,
                topic: "Version Control",
                skills: "Git and GitHub workflows",
              },
              {
                no: 10,
                topic: "Project",
                skills: "Dynamic App Deployment via Actions",
              },
            ]}
          />

          <LevelCard
            levelNumber="8"
            title="Python Advanced — Data & Automation"
            subtitle="Applied Programming Skills"
            ageGroup="Ages 13–14"
            duration="36 Weeks | 2 Sessions/Week | 55 Min/Session"
            aim="To apply Python to real-world domains including data science, automation, APIs, and databases, and develop professional programming practices."
            units={[
              {
                no: 1,
                topic: "Data Structures",
                skills: "Stacks, Queues, Linked Lists",
              },
              {
                no: 2,
                topic: "Working with APIs",
                skills: "Requests, JSON, Auth",
              },
              { no: 3, topic: "Data Analysis", skills: "NumPy and Pandas" },
              {
                no: 4,
                topic: "Data Visualisation",
                skills: "Matplotlib and Seaborn",
              },
              {
                no: 5,
                topic: "Automation",
                skills: "Web Scraping with BeautifulSoup",
              },
              {
                no: 6,
                topic: "Databases",
                skills: "SQLite with Python, SQLAlchemy",
              },
              {
                no: 7,
                topic: "Testing",
                skills: "Unit Tests with unittest/pytest",
              },
              {
                no: 8,
                topic: "Regular Expressions",
                skills: "Pattern matching, extraction",
              },
              {
                no: 9,
                topic: "Command Line Tools",
                skills: "argparse, automation scripts",
              },
              {
                no: 10,
                topic: "Project",
                skills: "Real-World Data Processing Pipeline",
              },
            ]}
          />

          <LevelCard
            levelNumber="9"
            title="Computer Science — Theory"
            subtitle="GCSE / A-Level CS Preparation"
            ageGroup="Ages 14–15"
            duration="36 Weeks | 2 Sessions/Week | 60 Min/Session"
            aim="To study formal computer science theory including computational thinking, data representation, computer architecture, networks, and cybersecurity."
            units={[
              {
                no: 1,
                topic: "Computational Thinking",
                skills: "Decomposition, abstraction, algorithms",
              },
              {
                no: 2,
                topic: "Data Representation",
                skills: "Binary, Hex, ASCII, Unicode",
              },
              {
                no: 3,
                topic: "Computer Architecture",
                skills: "CPU, Memory, FDE cycle",
              },
              {
                no: 4,
                topic: "Networks",
                skills: "Topologies, Protocols, TCP/IP",
              },
              {
                no: 5,
                topic: "Cybersecurity",
                skills: "Threats, Encryption, Authentication",
              },
              {
                no: 6,
                topic: "Databases",
                skills: "Relational Design, SQL, Normalisation",
              },
              {
                no: 7,
                topic: "Big Data & AI",
                skills: "Machine Learning concepts, Ethics",
              },
              {
                no: 8,
                topic: "Ethics & Law",
                skills: "IP, Privacy, Digital Footprints",
              },
              {
                no: 9,
                topic: "Programming Paradigms",
                skills: "Procedural, OOP, Functional",
              },
              {
                no: 10,
                topic: "Examination Technique",
                skills: "Trace tables, Pseudo-code",
              },
            ]}
          />

          <LevelCard
            levelNumber="10"
            title="Capstone — Full-Stack Development"
            subtitle="Professional Portfolio"
            ageGroup="Ages 15–16"
            duration="36 Weeks | 2 Sessions/Week | 60 Min/Session"
            aim="To consolidate all programming knowledge into a full-stack development capstone, building a real application and a professional portfolio ready for further study or work."
            units={[
              {
                no: 1,
                topic: "System Design",
                skills: "Architecture, Planning, Scale",
              },
              {
                no: 2,
                topic: "Backend Development",
                skills: "Flask/Django, Routes, APIs",
              },
              {
                no: 3,
                topic: "Frontend Development",
                skills: "React + Tailwind/Bootstrap",
              },
              {
                no: 4,
                topic: "Database Integration",
                skills: "PostgreSQL, Models, ORM",
              },
              {
                no: 5,
                topic: "Auth & Security",
                skills: "Login, Sessions, JWT, Hashing",
              },
              {
                no: 6,
                topic: "Deployment",
                skills: "Docker, Cloud Hosting (Render/AWS)",
              },
              {
                no: 7,
                topic: "Agile Development",
                skills: "Sprints, Kanban, Teamwork",
              },
              {
                no: 8,
                topic: "Code Review",
                skills: "Pull Requests, CI/CD Actions",
              },
              {
                no: 9,
                topic: "Portfolio Production",
                skills: "Case studies, Demos, Write-up",
              },
              {
                no: 10,
                topic: "Capstone Project",
                skills: "Build, Deploy and Present",
              },
            ]}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            Architect the Future
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            From basic logic to deployed web applications, empower your child to
            create technology, not just consume it.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-indigo-600/30 dark:border-indigo-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Programming Programme
            </h3>
            <div className="font-cormorant text-5xl text-indigo-600 dark:text-indigo-400 mb-6">
              Core
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Full-Stack Capability
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Python & Web Dev Focus
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Project-Based Learning
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
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors font-sans underline underline-offset-4"
            >
              ← Back to Core Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Programming
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
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-indigo-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-indigo-400 dark:text-indigo-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
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
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-indigo-400">
              <Laptop className="w-6 h-6" />
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
              <tr className="border-b-2 border-indigo-100 dark:border-white/10 bg-indigo-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-indigo-700 dark:text-indigo-400 font-bold w-16 text-center">
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
                  <td className="py-4 px-6 font-bold text-center text-indigo-600 dark:text-indigo-400">
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
