export interface BlogPost {
  id: string;
  key?: string;
  image: string;
  category: "islamic" | "tech" | "parenting" | "academics";
  author: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
  headings?: { id: string; title: string }[];
}

export const getBlogPosts = (t: (key: string) => string): Record<string, BlogPost> => {
  return {
    "1": {
      id: "1",
      key: "post1",
      image:
        "https://picsum.photos/1200/600?random=0",
      category: "islamic",
      author: "Sheikh Abdullah",
      title: t("post1.title"),
      excerpt: t("post1.excerpt"),
      date: "March 10, 2026",
      readTime: "5 min read",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t(
          "post1.excerpt"
        )}</p>
        
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
      id: "2",
      key: "post2",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "tech",
      author: "Sarah Ahmed",
      title: t("post2.title"),
      excerpt: t("post2.excerpt"),
      date: "March 5, 2026",
      readTime: "4 min read",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t(
          "post2.excerpt"
        )}</p>
        
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
      id: "3",
      key: "post3",
      image:
        "https://picsum.photos/1200/600?random=3",
      category: "parenting",
      author: "Dr. Fatima",
      title: t("post3.title"),
      excerpt: t("post3.excerpt"),
      date: "February 28, 2026",
      readTime: "6 min read",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t(
          "post3.excerpt"
        )}</p>
        
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
      id: "4",
      key: "post4",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "academics",
      author: "Mr. James",
      title: t("post4.title"),
      excerpt: t("post4.excerpt"),
      date: "February 15, 2026",
      readTime: "4 min read",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t(
          "post4.excerpt"
        )}</p>
        
        <h2 id="section-1">Math is All Around Us</h2>
        <p>Mathematics often gets a bad reputation as being dry or difficult. However, it is the language of the universe. From the symmetry of a snowflake to the spirals of a sunflower, to the structure of crystals, math is Allah's design pattern visible in creation. Helping children see these patterns transforms math from a chore to a wonder.</p>
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
      id: "5",
      key: "post5",
      title: "The Wonder of Electricity & Magnetism",
      date: "March 15, 2026",
      readTime: "6 min read",
      category: "tech",
      author: "Ustadh Bilal",
      excerpt:
        "Sparking curiosity in young minds using simple circuits and invisible forces.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
      id: "6",
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
      id: "7",
      key: "post7",
      title: "Geometry in Islamic Art & Mathematics",
      date: "March 20, 2026",
      readTime: "5 min read",
      category: "academics",
      author: "Mrs. Huda",
      excerpt:
        "Connecting the dots between sacred geometry, art history, and modern mathematical concepts.",
      image:
        "https://picsum.photos/1200/600?random=2",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">Connecting the dots between sacred geometry, art history, and modern mathematical concepts.</p>
        
        <h2 id="section-1">The Art of Infinite Patterns</h2>
        <p>Walk into any historic mosque, from the Alhambra in Spain to the Blue Mosque in Turkey, and you are greeted by dazzling geometric patterns. These tessellations are not random; they are sophisticated mathematical expressions. In Islamic art, the avoidance of figurative images led to the mastery of geometry to reflect the infinite nature of Allah and the order of creation.</p>
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
      id: "8",
      key: "post8",
      title: "How Arabic Grammar Was Preserved: A Historical Overview",
      date: "March 17, 2026",
      readTime: "8 min read",
      category: "islamic",
      author: "Abū Kawthar Lukmān Bn Abdir-Raūf",
      excerpt:
        "The Arabic language is the tongue of the Arabs, and it is the language in which the Qur’ān was revealed, a language of beauty, depth, and precision.",
      image: "/knowledge-hub/arabic-grammar-preservation.svg",
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">How Arabic Grammar Was Preserved: A Historical Overview</p>

        <p>The Arabic language is the tongue of the Arabs, and it is the language in which the Qur’ān was revealed, a language of beauty, depth, and precision.</p>

        <p>During the pre-Islamic era (Jāhiliyyah) and the early days of Islam, there was no formal study of Nahw (Arabic grammar) or Sarf (Arabic morphology) or otherbranches of the Arabiclanguage.</p>

        <p>The Arabs spoke pure, eloquent, and naturally correct Arabic without the need for grammatical rules or written guidelines.</p>

        <p>However, after the Muslim expansion into Roman and Persian territories, many non-Arabs entered Islam and began living among the Arabs.</p>

        <p>Over time, this interaction began to influence the Arabic tongue, and linguistic errors appeared even in the speech of native Arabs.</p>

        <p>This development raised serious concern. Scholars feared that the purity of the Arabic language — the language of the Qur’ān and Sunnah — would be lost.</p>

        <p>This motivated the experts of the time to document the principles of the language so that it could be preserved for future generations.</p>

        <h2 id="section-1">The Beginning of Documentation</h2>

        <p>The most well-known opinion is that Abū al-Aswad Dhālim Dn ʿAmrī ibn al-Duʾalī (commonly called Abū al-Aswad al-Duʾalī) was the first to compile the rules of Arabic in written form.</p>

        <p>It was narrated that he once sat with his daughter on a beautiful night, beneath a sky filled with shining stars. She looked up and said:</p>

        <p>ما أجملُ السماءِ<br/>“How beautiful the sky is!”</p>

        <p>Taking her words as a question rather than an exclamation, Abū al-Aswad replied:</p>

        <p>نجومُها<br/>“Its stars.”</p>

        <p>She then clarified that she intended exclamation, not a question.</p>

        <p>Abū al-Aswad realized that her sentence was grammatically incorrect, because the phrasing she used is normally for asking a question. The correct way to express admiration is:</p>

        <p>ما أجملَ السماءَ!<br/>“How beautiful the sky is!”</p>

        <p>Here, both أجملَ and السماءَ take a fatḥah, which is the proper case ending for sentences of exclamation (أسلوب التعجب).</p>

        <p>This incident inspired Abū al-Aswad to begin laying down the foundational rules of Arabic grammar but only after seeking the approval and guidance of ʿAlī ibn Abī Ṭālib رضي الله عنه.</p>

        <h2 id="section-2">In Summary</h2>

        <p>In summary:</p>

        <p>Arabic grammar was not originally taught or written; it lived naturally on the tongues of the Arabs. But as Islam spread and new cultures mixed with Arabic speakers, mistakes appeared, threatening the purity of the Qur’anic language.</p>

        <p>Scholars, led first by Abū al-Aswad al-Duʾalī, rose to preserve this great language by compiling its rules and principles. Through their efforts, Arabic has remained clear, structured, and protected until today.</p>

        <h2 id="section-3">Finally</h2>

        <p>Finally:</p>

        <p>Arabic is not just a language, it is a doorway to the Qur’ān, the Sunnah, and the rich intellectual history of Islam.</p>

        <p>Learning it connects you to centuries of knowledge, wisdom, and scholarship. Every letter you learn brings you closer to understanding the words of your Creator.</p>

        <p>So take the journey with patience and consistency.</p>

        <p>The beauty of this language will unfold for you, one lesson at a time.</p>

        <p>May Allāh make your path easy and bless your efforts.</p>

        <p>Jazaakumullahu khairan</p>

        <p>Written by: Abū Kawthar Lukmān Bn Abdir-Raūf.</p>

        <p>Markazul Bayaan Benefits.</p>
      `,
      headings: [
        { id: "section-1", title: "The Beginning of Documentation" },
        { id: "section-2", title: "In Summary" },
        { id: "section-3", title: "Finally" },
      ],
    },
  };
};