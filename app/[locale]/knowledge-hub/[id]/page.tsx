"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Tag,
  Calendar,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PostDetailsPage() {
  const t = useTranslations("KnowledgeHub");
  const params = useParams();
  const id = params?.id as string;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mock data fetching logic (consistent with listing page)
  const getPostInfo = (postId: string) => {
    // Extended post database
    const postsData: Record<string, any> = {
      "1": {
        key: "post1",
        image:
          "https://images.unsplash.com/photo-1609599006353-e629aaab31fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "islamic",
        author: "Sheikh Abdullah",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t("post1.excerpt")}</p>
          
          <h2 id="section-1">The Foundation of Every Muslim Home</h2>
          <p>The Quran is not merely a book to be kept on a high shelf; it is the heartbeat of a believer's life. For a child, the home is the first madrasah. If the walls of our homes echo with the recitation of the Quran, our children will naturally gravitate towards it. It serves as a spiritual anchor in a world that is constantly changing.</p>
          <p>Nurturing a love for the Quran begins with *connection* rather than *correction*. Often, we focus so heavily on Tajweed and memorization targets that we forget to instill the sweetness of the words of Allah. Let them hear you recite softly during the quiet hours of the night or the early moments of Fajr. Let them see you finding comfort in its pages.</p>
          <p>When children witness their parents interacting with the Quran with love, reverence, and consistency, they internalize its importance far more deeply than through verbal instruction alone.</p>

          <blockquote class="my-10 pl-4 border-l-4 border-gold/50 italic text-xl">
            "The best of you are those who learn the Quran and teach it." — Bukhari
          </blockquote>

          <h2 id="section-2">Practical Steps for Parents</h2>
          <p>Building a relationship with the Quran doesn't happen overnight. It requires patience, du'a, and small, consistent efforts.</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Consistency over Quantity:</strong> Five minutes of daily reflection with your child is better than sporadic hours of forceful study. Make it a daily ritual.</li>
            <li><strong>Storytelling:</strong> The Quran is filled with vivid stories of Prophets and nations. Share these stories at bedtime to spark their imagination and link the verses to real-life lessons.</li>
            <li><strong>Lead by Example:</strong> Children mimic what they see. If they see you turning to the Quran for comfort and guidance, they will learn to do the same.</li>
            <li><strong>Celebrate Milestones:</strong> Celebrate when they memorize a new Surah, but also celebrate when they ask a thoughtful question about a verse.</li>
          </ul>

          <h2 id="section-3">Creating a Quranic Environment</h2>
          <p>Designate a special 'Quran Corner' in your home—a comfortable, quiet space with soft lighting, pleasant fragrance (Bukhoor), and easy access to the Mushaf. Make this space inviting, so they associate the Quran with peace and tranquility rather than strict discipline.</p>
          <p>By integrating the Quran into daily conversations—mentioning a verse when observing nature or discussing a moral dilemma—you show them that the Quran is relevant to every aspect of their lives, now and forever. It becomes a living guide, not just a text to be memorized.</p>
        `,
        headings: [
          { id: "section-1", title: "The Foundation of Every Muslim Home" },
          { id: "section-2", title: "Practical Steps for Parents" },
          { id: "section-3", title: "Creating a Quranic Environment" },
        ],
      },
      "2": {
        key: "post2",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "tech",
        author: "Sarah Ahmed",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t("post2.excerpt")}</p>
          
          <h2 id="section-1">Coding as the New Literacy</h2>
          <p>In the 21st century, understanding the language of computers is becoming as fundamental as reading and writing. But coding is not just about syntax and algorithms; it is about <strong>logic, problem-solving, and creativity</strong>. When a child learns to code, they learn how to break down complex problems into manageable steps—a skill applicable to all areas of life, from planning a day to solving math problems.</p>
          <p>Just as writing allows us to express our thoughts, coding allows children to express their ideas and build solutions. It transforms them from passive consumers of technology into active creators.</p>
          
          <h2 id="section-2">Critical Thinking & Resurrection of the Mind</h2>
          <p>Historically, the Golden Age of Islam was driven by polymaths like Al-Khwarizmi, the father of Algebra (and the root of the word 'Algorithm'). They saw no divide between religious duty and scientific discovery. By teaching our children to code, we are reconnecting them with this heritage of intellectual curiosity and innovation.</p>
          <p>Coding teaches resilience. A code rarely works perfectly the first time. Debugging teaches patience and the understanding that failure is simply a step towards a solution. This 'growth mindset'—the belief that abilities can be developed through dedication and hard work—is essential for their future success in any field.</p>

          <blockquote class="my-10 pl-4 border-l-4 border-gold/50 italic text-xl">
            "Teaching kids to code is teaching them how to think."
          </blockquote>

          <h2 id="section-3">Starting Young</h2>
          <p>Tools like Scratch and block-based coding make these concepts accessible to children as young as five. At Rawdatul Atfaal, we integrate these tools to show students that they can be creators of technology. Whether it's building a simple animation causing a character to move across the screen or a complex calculator, the empowerment they feel is transformative.</p>
          <p>We start with "unplugged" coding activities that teach logic without screens, and gradually introduce them to block-based languages, setting a strong foundation for Python and web development in later years.</p>
        `,
        headings: [
          { id: "section-1", title: "Coding as the New Literacy" },
          { id: "section-2", title: "Critical Thinking & Resilience" },
          { id: "section-3", title: "Starting Young" },
        ],
      },
      "3": {
        key: "post3",
        image:
          "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "parenting",
        author: "Dr. Fatima",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t("post3.excerpt")}</p>
          
          <h2 id="section-1">The Prophetic Model of Tarbiyah</h2>
          <p>The Prophet Muhammad (PBUH) was the perfect educator and parent. His interactions with children were marked by deep respect, affection, and wisdom. He would kiss his grandchildren, let them ride on his back during prayer, and listen to their small stories with full attention. This teaches us that <strong>connection precedes correction</strong>. A child who feels loved and heard is a child who is willing to listen and obey.</p>
          <p>He treated children not as small nuisances, but as individuals with feelings and dignity. He greeted them first, cracked jokes with them, and showed genuine interest in their lives.</p>
          
          <h2 id="section-2">Gentleness & Mercy</h2>
          <p>Anas ibn Malik (RA) served the Prophet for ten years as a young boy and reported that he was never scolded or asked, "Why did you do this?" or "Why didn't you do that?" This level of patience is astounding. In our modern, fast-paced parenting, we often rush to discipline or criticize.</p>
          <p>The Sunnah teaches us to pause, understand the child's intent, and guide them with mercy. Harshness creates distance, while gentleness builds a bridge of trust. When a child makes a mistake, our first reaction should be to teach, not to punish.</p>

          <blockquote class="my-10 pl-4 border-l-4 border-gold/50 italic text-xl">
            "He is not of us who does not have mercy on young children, nor honor the elderly." — At-Tirmidhi
          </blockquote>

          <h2 id="section-3">Raising Confident Believers</h2>
          <p>The Prophet (PBUH) gave children responsibilities. He trusted Ibn Abbas with profound spiritual knowledge while riding on a mount. He accepted the pledge of allegiance from young companions. By entrusting our children with age-appropriate responsibilities and validating their feelings, we build their self-worth and their identity as confident Muslims ready to contribute to society.</p>
          <p>We should encourage our children to take initiative, to serve guests, to help in the household, and to voice their opinions respectfully. This builds character and prepares them for the responsibilities of adulthood.</p>
        `,
        headings: [
          { id: "section-1", title: "The Prophetic Model" },
          { id: "section-2", title: "Gentleness & Mercy" },
          { id: "section-3", title: "Raising Confident Believers" },
        ],
      },
      "4": {
        key: "post4",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "academics",
        author: "Mr. James",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t("post4.excerpt")}</p>
          
          <h2 id="section-1">Math is All Around Us</h2>
          <p>Mathematics often gets a bad reputation as being dry or difficult. However, it is the language of the universe. From the symmetry of a snowflake to the spirals of a sunflower, from the orbit of planets to the structure of crystals, math is Allah's design pattern visible in creation. Helping children see these patterns transforms math from a chore to a wonder.</p>
          <p>When we teach math as a way to understand the world, it becomes relevant and exciting. "Look at the hexagon shape of the honeycomb! How did the bees know to build it that way?" These questions spark curiosity.</p>
          
          <h2 id="section-2">Kitchen Math & Grocery Games</h2>
          <p>You don't need a textbook to teach fractions. Baking a cake is the perfect lesson in ratios and measurements. "If we need half a cup of sugar and we prioritize health reducing it by a third, how much do we put in?" Cooking teaches volume, weight, time, and temperature.</p>
          <p>Similarly, the grocery store is a lab for estimation and budgeting. Ask your child to round prices to the nearest dollar and keep a running total. "Which is the better deal: the big box for $5 or two small boxes for $3?" These practical applications build number sense more effectively than worksheets ever could.</p>

          <h2 id="section-3">Gamification of Learning</h2>
          <p>Board games like Monopoly teach financial literacy and strategy. Card games can teach probability and arithmetic. At Rawdatul Atfaal, we encourage 'play-based learning' especially in the early years. When a child is having fun, their brain is in the optimal state for retention. Let's reclaim math as a fun, family activity.</p>
          <p>Even simple games like "I Spy" with shapes or counting cars of a certain color can reinforce mathematical concepts in a low-pressure environment.</p>
        `,
        headings: [
          { id: "section-1", title: "Math is All Around Us" },
          { id: "section-2", title: "Kitchen Math & Grocery Games" },
          { id: "section-3", title: "Gamification of Learning" },
        ],
      },
      "5": {
        key: "post5",
        title: "The Wonder of Electricity & Magnetism",
        date: "March 15, 2026",
        readTime: "6 min read",
        category: "tech",
        author: "Ustadh Bilal",
        excerpt:
          "Sparking curiosity in young minds using simple circuits and invisible forces.",
        image:
          "https://images.unsplash.com/photo-1620846506306-69680370d03b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">From the lightning in the sky to the spark plugs in a car, electricity is a force that shapes our world.</p>
          
          <h2 id="section-1">The Invisible Energy</h2>
          <p>Allah has created many forces that we cannot see with our eyes but can witness through their effects. Electricity is one such marvel. When we flip a switch and a light turns on, we are witnessing the flow of electrons—a tiny, invisible part of Allah's creation that powers our modern lives.</p>
          <p>We teach children to reflect on this: We believe in electricity because we see its light, even though we don't see the current itself. Similarly, we see the signs of Allah in creation, affirming our faith in the Unseen.</p>
          
          <h2 id="section-2">Hands-On Learning: Simple Circuits</h2>
          <p>Teaching children about electricity doesn't require a laboratory. Using a simple battery, a small light bulb, and two wires, we can show them how a complete path allows energy to flow. We utilize snap-circuit kits that allow safe and easy experimentation.</p>
          <p>This "circuit" is a perfect metaphor for connection. Just as the bulb needs connection to the battery to shine, our hearts need connection to our Creator to find peace. If the connection is broken, the light goes out.</p>

          <blockquote class="my-10 pl-4 border-l-4 border-gold/50 italic text-xl">
            "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth." (Quran 41:53)
          </blockquote>

          <h2 id="section-3">Safety & Innovation</h2>
          <p>While exploring these wonders, we also teach respect for their power. Understanding insulators and conductors keeps us safe. We verify that water conducts electricity, teaching them why we don't touch switches with wet hands.</p>
          <p>We encourage our students to think like inventors—how can we use this energy to help others? From solar panels to provide clean energy to efficient machines, the future belongs to those who understand these forces and use them responsibly.</p>
        `,
        headings: [
          { id: "section-1", title: "The Invisible Energy" },
          { id: "section-2", title: "Hands-On Learning" },
          { id: "section-3", title: "Safety & Innovation" },
        ],
      },
      "6": {
        key: "post6",
        title: "Understanding Taharah: Cleanliness is Half of Faith",
        date: "March 18, 2026",
        readTime: "7 min read",
        category: "islamic",
        author: "Sheikh Abdullah",
        excerpt:
          "A guide to teaching Fiqh of purification to young children in a practical, hands-on way.",
        image:
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">A guide to teaching Fiqh of purification to young children in a practical, hands-on way.</p>
          
          <h2 id="section-1">More Than Just Washing</h2>
          <p>Taharah (Purification) is the key to Salah, and Salah is the key to Jannah. But teaching it to children goes beyond the mechanics of Wudu. It is about instilling a sense of spiritual and physical purity. Allah loves those who turn to Him and loves those who purify themselves.</p>
          <p>We explain that just as we wash our hands to remove dirt, Wudu washes away minor sins. It prepares our body and soul to stand in the presence of Allah.</p>
          
          <h2 id="section-2">Making Wudu a Mindfulness Practice</h2>
          <p>We teach our students that Wudu is a transition—a way to wash away the distractions of the world before standing in front of the King of Kings. It is a mindful process, not a rushed splash of water. The cool water touching the skin is a reminder of Allah's mercy.</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Intention (Niyyah):</strong> Teaching them to pause before the tap turns on to remember *why* they are doing this.</li>
            <li><strong>Water Conservation:</strong> The Prophet (PBUH) performed Wudu with a small amount of water (a Mudd). We teach that wasting water is disliked, even if you are by a flowing river. This instills environmental responsibility.</li>
            <li><strong>The Dua:</strong> The supplication after Wudu opens the eight gates of Paradise. What a beautiful incentive for a child to learn!</li>
          </ul>

          <h2 id="section-3">Practical Fiqh for Kids</h2>
          <p>We simplify Fiqh rules without diluting them. Using diagrams, demonstrations, and gentle correction, we ensure they know the Fara'id (obligatory acts) and Sunan (optional acts) of purification.</p>
          <p>We clarify common misconceptions, like wiping the neck (which is not from the Sunnah), and teach the correct way to wipe the head and ears. This builds a solid foundation for their worship based on knowledge, not just imitation.</p>
        `,
        headings: [
          { id: "section-1", title: "More Than Just Washing" },
          { id: "section-2", title: "Making Wudu a Mindfulness Practice" },
          { id: "section-3", title: "Practical Fiqh for Kids" },
        ],
      },
      "7": {
        key: "post7",
        title: "Geometry in Islamic Art & Mathematics",
        date: "March 20, 2026",
        readTime: "5 min read",
        category: "academics",
        author: "Mrs. Huda",
        excerpt:
          "Connecting the dots between sacred geometry, art history, and modern mathematical concepts.",
        image:
          "https://images.unsplash.com/photo-1542259649-43cc767421ac?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">Connecting the dots between sacred geometry, art history, and modern mathematical concepts.</p>
          
          <h2 id="section-1">The Art of Infinite Patterns</h2>
          <p>Walk into any historic mosque, from the Alhambra in Spain to the Blue Mosque in Turkey, and you are greeted by dazzling geometric patterns. These tessellations are not random; they are sophisticated mathematical expressions. In Islamic art, the avoidance of figurative images led to the mastery of geometry to reflect the infinite nature of Allah and the order of the cosmos.</p>
          <p>We show students examples of these patterns and discuss how artists used only a compass and ruler to create designs of breathtaking complexity.</p>
          
          <h2 id="section-2">Math Meets Art Class</h2>
          <p>For students who struggle with abstract math, Islamic geometry provides a tangible bridge. Using a compass and a straightedge, students can construct complex stars and rosettes. They learn about symmetry, angles, bisectors, circles, and polygons naturally through creation.</p>
          <p>This interdisciplinary approach helps students appreciate that math is beautiful. It is the underlying structure of the world's beauty. They learn vocabulary like "tessellation," "symmetry," and "polygon" in a context that is visually rewarding.</p>

          <h2 id="section-3">Spiritual Reflection</h2>
          <p>These patterns often start from a single point—the center—representing the Oneness of God (Tawheed), and radiate outwards infinitely. It is a visual theology. By studying these patterns, students engage in a form of silent dhikr, appreciating the order and balance of the universe.</p>
          <p>It teaches patience and precision. One small error in the beginning can throw off the entire pattern, teaching the lesson of Ihsan (excellence) in all our works.</p>
        `,
        headings: [
          { id: "section-1", title: "The Art of Infinite Patterns" },
          { id: "section-2", title: "Math Meets Art Class" },
          { id: "section-3", title: "Spiritual Reflection" },
        ],
      },
      "8": {
        key: "post8",
        title: "5 Hadiths Every Child Should Know",
        date: "March 22, 2026",
        readTime: "4 min read",
        category: "islamic",
        author: "Rawdatul Atfaal Team",
        excerpt:
          "Simple yet profound sayings of the Prophet (PBUH) that build character and kindness.",
        image:
          "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">Simple yet profound sayings of the Prophet (PBUH) that build character and kindness.</p>
          
          <h2 id="section-1">Building Character through Speech</h2>
          <p>The words of the Prophet Muhammad (PBUH) are the best guidance. They are concise yet full of wisdom (Jawami' al-Kalim). For young children, short ahadith are easy to memorize and serve as guiding lights for their behavior. Here are five foundational hadiths we focus on:</p>
          
          <h2 id="section-2">The Golden Five</h2>
          <ol class="list-decimal pl-6 space-y-6 mb-6">
            <li>
                <strong>"The best of you are those with the best character."</strong> 
                <p class="text-sm opacity-90 mt-1">This teaches that our value is not in our wealth or looks, but in how we treat others. It encourages self-improvement and politeness.</p>
            </li>
            <li>
                <strong>"None of you truly believes until he loves for his brother what he loves for himself."</strong> 
                <p class="text-sm opacity-90 mt-1">This is the golden rule of empathy. It stops selfishness and encourages sharing. If you want a toy, your friend probably wants one too.</p>
            </li>
            <li>
                <strong>"Smiling in the face of your brother is charity."</strong> 
                <p class="text-sm opacity-90 mt-1">This teaches positivity. Even without money, every child can give charity every day just by being kind and cheerful.</p>
            </li>
            <li>
                <strong>"Cleanliness is half of faith."</strong> 
                <p class="text-sm opacity-90 mt-1">This links physical hygiene (brushing teeth, wudu, clean clothes) with spiritual purity. A believer loves to be clean.</p>
            </li>
            <li>
                <strong>"Paradise lies under the feet of your mother."</strong> 
                <p class="text-sm opacity-90 mt-1">This teaches supreme respect and love for parents. It shows that serving our mothers is a direct path to Jannah.</p>
            </li>
          </ol>
          
          <h2 id="section-3">Living the Hadith</h2>
          <p>Memorization is the first step, but implementation is the goal. We encourage parents to create 'Hadith of the Week' jars at home, where one hadith is practiced intentionally by the whole family. If the hadith is about smiling, everyone tries to smile more that week.</p>
          <p>This brings the Sunnah to life within the household, making the Prophet (PBUH) a beloved role model in their daily lives.</p>
        `,
        headings: [
          { id: "section-1", title: "Building Character" },
          { id: "section-2", title: "The Golden Five" },
          { id: "section-3", title: "Living the Hadith" },
        ],
      },
    };

    // Return extended post data or fallback
    const postData = postsData[postId];
    if (postData) {
      return {
        id: postId,
        title: postData.title || t(`${postData.key}.title`),
        date: postData.date || t(`${postData.key}.date`),
        readTime: postData.readTime || t(`${postData.key}.readTime`),
        categoryLabel: t(`categories.${postData.category}`) || "General",
        excerpt: postData.excerpt || t(`${postData.key}.excerpt`),
        image: postData.image,
        author: postData.author,
        authorInitials: postData.author
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .substring(0, 2)
          .toUpperCase(),
        content: postData.content,
        headings: postData.headings || [],
      };
    }

    // Default Fallback
    return {
      id: "1",
      title: "Article Not Found",
      date: "",
      readTime: "",
      categoryLabel: "Error",
      excerpt: "",
      image: "",
      author: "Admin",
      authorInitials: "AD",
      content: "<p>The requested article could not be found.</p>",
      headings: [],
    };
  };

  const post = getPostInfo(id);

  // Suggested "Related Posts" - normally filtered from a larger list
  const relatedPosts = [
    {
      id: "5",
      title: "The Wonder of Electricity & Magnetism",
      category: "Tech & Sciences",
      image:
        "https://images.unsplash.com/photo-1620846506306-69680370d03b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      title: "Understanding Taharah: Cleanliness is Half of Faith",
      category: "Islamic Studies",
      image:
        "https://images.unsplash.com/photo-1574343869269-d75d5069b027?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: t("post2.title"),
      category: "Tech & Sciences",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: t("post3.title"),
      category: "Parenting",
      image:
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]
    .filter((p) => p.id !== id)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      {/* 1. READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gold origin-left z-9999"
        style={{ scaleX }}
      />

      {/* 2. CINEMATIC HERO */}
      <section className="relative h-[70vh] min-h-125 flex items-end pb-20 justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-midnight">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 relative z-10 text-cream">
          <Link
            href="/knowledge-hub"
            className="absolute top-0 left-4 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors flex items-center gap-2"
          >
            <ChevronLeft size={14} className="rtl:rotate-180" /> Back to Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 border border-gold/40 rounded-sm font-cinzel text-xs font-bold text-gold uppercase tracking-[0.2em] bg-black/20 backdrop-blur-sm">
                {post.categoryLabel}
              </span>
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white/80 uppercase tracking-wider">
                <Clock size={14} className="text-gold" /> {post.readTime}
              </div>
            </div>

            <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl tracking-wide mb-8 leading-tight text-white drop-shadow-lg">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold font-serif italic text-lg border border-gold/20">
                {post.authorInitials}
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">
                  {post.author}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider">
                  {post.date}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CONTENT + SIDEBAR LAYOUT */}
      <section className="py-16 lg:py-24 bg-white dark:bg-midnight relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          {/* Main Article Content */}
          <article>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none drop-cap article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post-Article Footer */}
            <div className="mt-16 pt-8 border-t border-midnight/10 dark:border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-cinzel font-bold text-midnight/40 dark:text-cream/40 uppercase tracking-wider mr-2">
                    Tags:
                  </span>
                  {["Education", "Future", "Islamic Values"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-ivory dark:bg-[#12221b] text-xs font-medium text-midnight/70 dark:text-cream/70 rounded-full border border-midnight/5 dark:border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                    <Facebook size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                    <Twitter size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block space-y-8 h-fit sticky top-32">
            {/* Table of Contents */}
            <div className="bg-ivory dark:bg-[#12221b] p-8 rounded-sm border border-midnight/5 dark:border-white/5">
              <h4 className="font-cinzel text-lg font-bold text-midnight dark:text-cream mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-gold block"></span>
                On this page
              </h4>
              <ul className="space-y-4">
                {post.headings.map((heading: { id: string; title: string }) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="flex items-start gap-3 group text-sm text-midnight/70 dark:text-cream/70 hover:text-gold transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 group-hover:bg-gold transition-colors"></span>
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Box (Mobile usually has this at bottom, Desktop on side) */}
            <div className="bg-linear-to-br from-gold/10 to-transparent p-8 rounded-sm border border-gold/20 text-center">
              <h4 className="font-cormorant italic text-xl text-midnight dark:text-cream mb-2">
                Enjoyed this read?
              </h4>
              <p className="text-xs font-sans text-midnight/60 dark:text-cream/60 mb-6 uppercase tracking-wider">
                Share it with your community
              </p>
              <button className="w-full py-3 bg-gold text-midnight font-bold font-cinzel text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                <Share2 size={16} /> Share Article
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. RELATED POSTS */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] border-t border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-cinzel text-3xl text-midnight dark:text-cream">
              More from Knowledge Hub
            </h3>
            <Link
              href="/knowledge-hub"
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related, i) => (
              <Link
                href={`/knowledge-hub/${related.id}`}
                key={i}
                className="group block"
              >
                <div className="h-48 overflow-hidden rounded-sm mb-4 relative">
                  <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 z-20 bg-white/90 dark:bg-midnight/90 backdrop-blur-md px-2 py-1 text-[9px] font-cinzel font-bold tracking-[0.2em] uppercase text-midnight dark:text-gold">
                    {related.category}
                  </span>
                </div>
                <h4 className="font-cormorant text-xl font-bold text-midnight dark:text-cream leading-tight group-hover:text-gold transition-colors">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
