/**
 * Xiques Portfolio Website
 * Main JavaScript file
 */

document.addEventListener("DOMContentLoaded", () => {
  // Translations object with all text content in English and Thai
  const translations = {
    en: {
      // Navigation
      "nav-home": "Home",
      "nav-projects": "Projects",
      "nav-skills": "Skills",
      "nav-about": "About-me",
      "nav-contacts": "Contacts",

      // Hero Section
      "hero-title-1": "Xiques is ",
      "hero-title-2": "Content Creator",
      "hero-title-3": " and",
      "hero-title-4": "Video Editor",
      "hero-subtitle": "He crafts live stream, Vtubing<br>and creative content",
      "contact-btn": "Contact me!!",
      "currently-working": "Currently working on ",
      portfolio: "Portfolio",

      // Quote Section
      quote: "With great power comes great electricity bill",
      "quote-author": "- Dr. WHO",

      // Projects Section
      "projects-title": "projects",
      "project1-title": "Minecraft Mod",
      "project1-subtitle": "From the Fog",
      "project1-tech": "Translation Minecraft Java",
      "project1-name": "Translating Minecraft Mod",
      "project1-desc": "From the Fog",
      "project2-title": "Content Creation",
      "project2-subtitle": "Video and Live Streams",
      "project2-tech": "YouTube Twitch-",
      "project2-name": "Video Content & Live Streams",
      "project2-desc": "Distributed on various platforms",
      "project3-title": "Vtuber",
      "project3-subtitle": "Online Identity Creation",
      "project3-tech": "VTubing 3D Modeling Content Creation",
      "project3-name": "Online Identity Creation",
      "project3-desc": "Project through Vtuber",
      "live-btn": "Live <~>",

      // Small Projects Section
      "small-projects-title": "small-projects",
      "small-project1-title": "Content Ideation",
      "small-project1-desc": "Thinking and developing content ideas to generate interest among viewers",
      "small-project2-title": "Vertical Videos",
      "small-project2-desc": "Making Vertical videos on various platforms",
      "small-project3-title": "Personal Website",
      "small-project3-desc": "Making website that contain all my personal use",
      "small-project4-title": "Minecraft Server",
      "small-project4-desc": "Hosting and maintaining Minecraft server",
      "small-project5-title": "Minecraft Plugins",
      "small-project5-desc": "Writing Minecraft plugins for server",
      "small-project6-title": "Foundry VTT Modules",
      "small-project6-desc": "Making Foundry VTT modules for Online TRPG sessions",

      // Skills Section
      "skills-title": "skills",
      "skill1-title": "Content",
      "skill1-desc1": "Content Design | Planning",
      "skill1-desc2": "Vtuber Management",
      "skill2-title": "Technical",
      "skill2-desc1": "Video Editing | OBS Studio",
      "skill2-desc2": "Photo/Video Production",
      "skill3-title": "Communication",
      "skill3-desc1": "Translation (Thai-English)",
      "skill3-desc2": "Community Management",
      "skill4-title": "Software",
      "skill4-desc1": "Microsoft Office",
      "skill4-desc2": "Google Workspace",
      "skill5-title": "Other",
      "skill5-desc": "Content Strategy | Target Audience Analysis | Platform-specific Content Creation",

      // Fun Facts Section
      "fun-facts-title": "my-fun-facts",
      fact1: "I've been a Vtuber for over four years and love developing new content ideas.",
      fact2: "I've fine-tuned OBS Studio settings so much that I could probably do it blindfolded.",
      fact3: "My ideal gaming setup always includes immersive storytelling elements.",
      fact4: "I love tabletop RPGs, especially ones where I can craft entire worlds.",
      fact5: "I once spent 40 hours building the perfect virtual world in Foundry VTT.",

      // About Me Section
      "about-title": "about-me",
      greeting: "Hello, I'm Xiques!",
      "about-p1":
        "I'm a passionate <b>content creator, translator, and digital storyteller</b> with a deep-rooted love for gaming and immersive experiences. From translating <i>Minecraft Mod: From the Fog</i> to crafting engaging Vtuber content, I thrive at blending creativity with technical expertise.",
      "about-p2":
        "With <b>over five years of experience in streaming and video editing</b>, I have mastered the use of <b>OBS Studio and digital media tools</b> to create high-quality content. My journey has led me to explore <b>game localization, server hosting, and community building</b>, shaping interactive worlds that captivate audiences.",
      "about-p3":
        "I'm always looking to expand my skills, whether through <b>networking innovations, content strategy, or storytelling techniques</b>. My goal is to craft impactful digital experiences—whether for myself or collaborating with others.",

      // Contacts Section
      "contacts-title": "contacts",
      "contacts-text":
        "I'm interested in freelance opportunities, however, if you have other request or question, don't hesitate to contact me.",
      "message-me": "Message me here",

      // Footer
      "footer-role": "Content Creator & Video Editor",
      "footer-media": "Media",
    },
    th: {
      // Navigation
      "nav-home": "หน้าแรก",
      "nav-projects": "โปรเจกต์",
      "nav-skills": "ทักษะ",
      "nav-about": "เกี่ยวกับฉัน",
      "nav-contacts": "ติดต่อ",

      // Hero Section
      "hero-title-1": "ซีคเป็น ",
      "hero-title-2": "ผู้สร้างคอนเทนต์",
      "hero-title-3": " และ",
      "hero-title-4": "ตัดต่อวิดีโอ",
      "hero-subtitle": "เขารังสรรค์ไลฟ์สตรีม, Vtubing<br>และเนื้อหาสร้างสรรค์",
      "contact-btn": "ติดต่อผม!!",
      "currently-working": "กำลังทำงานบน ",
      portfolio: "พอร์ตโฟลิโอ",

      // Quote Section
      quote: "พลังที่ยิ่งใหญ่มาพร้อมกับค่าไฟที่สูงลิบ",
      "quote-author": "- ดร. ฮู",

      // Projects Section
      "projects-title": "โปรเจกต์",
      "project1-title": "ม็อดมายคราฟต์",
      "project1-subtitle": "From the Fog",
      "project1-tech": "แปลภาษา มายคราฟต์ จาวา",
      "project1-name": "แปลมอดมายคราฟต์",
      "project1-desc": "From the Fog",
      "project2-title": "สร้างคอนเทนต์",
      "project2-subtitle": "วิดีโอและไลฟ์สตรีม",
      "project2-tech": "YouTube Twitch-",
      "project2-name": "วิดีโอคอนเทนต์และไลฟ์สตรีม",
      "project2-desc": "เผยแพร่บนแพลตฟอร์มต่างๆ",
      "project3-title": "Vtuber",
      "project3-subtitle": "สร้างตัวตนออนไลน์",
      "project3-tech": "VTubing การสร้างโมเดล 3D การสร้างคอนเทนต์",
      "project3-name": "สร้างตัวตนออนไลน์",
      "project3-desc": "โปรเจกต์ผ่าน Vtuber",
      "live-btn": "ดู <~>",

      // Small Projects Section
      "small-projects-title": "โปรเจกต์เล็ก",
      "small-project1-title": "ไอเดียคอนเทนต์",
      "small-project1-desc": "คิดและพัฒนาไอเดียคอนเทนต์เพื่อสร้างความสนใจให้กับผู้ชม",
      "small-project2-title": "วิดีโอแนวตั้ง",
      "small-project2-desc": "สร้างวิดีโอแนวตั้งบนแพลตฟอร์มต่างๆ",
      "small-project3-title": "เว็บไซต์ส่วนตัว",
      "small-project3-desc": "สร้างเว็บไซต์ที่รวมทุกอย่างสำหรับการใช้งานส่วนตัว",
      "small-project4-title": "เซิร์ฟเวอร์มายคราฟต์",
      "small-project4-desc": "โฮสต์และดูแลเซิร์ฟเวอร์มายคราฟต์",
      "small-project5-title": "ปลั๊กอินมายคราฟต์",
      "small-project5-desc": "เขียนปลั๊กอินสำหรับเซิร์ฟเวอร์มายคราฟต์",
      "small-project6-title": "โมดูล Foundry VTT",
      "small-project6-desc": "สร้างโมดูล Foundry VTT สำหรับเซสชัน TRPG ออนไลน์",

      // Skills Section
      "skills-title": "ทักษะ",
      "skill1-title": "คอนเทนต์",
      "skill1-desc1": "ออกแบบคอนเทนต์ | วางแผน",
      "skill1-desc2": "จัดการ Vtuber",
      "skill2-title": "เทคนิค",
      "skill2-desc1": "ตัดต่อวิดีโอ | OBS Studio",
      "skill2-desc2": "ผลิตภาพ/วิดีโอ",
      "skill3-title": "การสื่อสาร",
      "skill3-desc1": "แปลภาษา (ไทย-อังกฤษ)",
      "skill3-desc2": "จัดการชุมชน",
      "skill4-title": "ซอฟต์แวร์",
      "skill4-desc1": "Microsoft Office",
      "skill4-desc2": "Google Workspace",
      "skill5-title": "อื่น ๆ",
      "skill5-desc": "กลยุทธ์คอนเทนต์ | วิเคราะห์กลุ่มเป้าหมาย | สร้างคอนเทนต์เฉพาะแพลตฟอร์ม",

      // Fun Facts Section
      "fun-facts-title": "ข้อเท็จจริงที่น่าสนุกของผม",
      fact1: "ผมเป็น Vtuber มามากกว่าสี่ปีและชอบพัฒนาไอเดียคอนเทนต์ใหม่ ๆ",
      fact2: "ผมปรับแต่ง OBS Studio มามากจนอาจจะทำได้แม้ปิดตา",
      fact3: "เซตอัปเกมในอุดมคติของผมต้องมีองค์ประกอบการเล่าเรื่องที่น่าดึงดูด",
      fact4: "ผมชอบเกม RPG แบบเล่นบนโต๊ะ โดยเฉพาะเกมที่ผมสามารถสร้างโลกทั้งใบได้",
      fact5: "ผมเคยใช้เวลา 40 ชั่วโมงในการสร้างโลกเสมือนที่สมบูรณ์แบบใน Foundry VTT",

      // About Me Section
      "about-title": "เกี่ยวกับผม",
      greeting: "สวัสดีครับ ผมชื่อซีค!",
      "about-p1":
        "ผมเป็น<b>ผู้สร้างคอนเทนต์ นักแปล และนักเล่าเรื่องดิจิทัล</b>ที่มีใจรักในเกมและประสบการณ์เชิงลึก ตั้งแต่การแปล<i>มอดมายคราฟต์: From the Fog</i> ไปจนถึงการสร้างคอนเทนต์ Vtuber ที่น่าสนใจ ผมเก่งในการผสมผสานความคิดสร้างสรรค์กับความเชี่ยวชาญทางเทคนิค",
      "about-p2":
        "ด้วยประสบการณ์<b>มากกว่าห้าปีในการสตรีมและตัดต่อวิดีโอ</b> ผมได้เชี่ยวชาญการใช้ <b>OBS Studio และเครื่องมือสื่อดิจิทัล</b>เพื่อสร้างคอนเทนต์คุณภาพสูง การเดินทางของผมนำไปสู่การสำรวจ<b>การแปลเกม การโฮสต์เซิร์ฟเวอร์ และการสร้างชุมชน</b> ซึ่งสร้างโลกแห่งการมีส่วนร่วมที่ดึงดูดผู้ชม",
      "about-p3":
        "ผมมองหาโอกาสในการพัฒนาทักษะเสมอ ไม่ว่าจะผ่าน<b>นวัตกรรมเครือข่าย กลยุทธ์คอนเทนต์ หรือเทคนิคการเล่าเรื่อง</b> เป้าหมายของผมคือการสร้างประสบการณ์ดิจิทัลที่มีผลกระทบ ไม่ว่าจะสำหรับตัวเองหรือร่วมมือกับผู้อื่น",

      // Contacts Section
      "contacts-title": "ติดต่อ",
      "contacts-text": "ผมสนใจโอกาสในการทำงานอิสระ อย่างไรก็ตาม หากคุณมีคำขอหรือคำถามอื่นๆ อย่าลังเลที่จะติดต่อผม",
      "message-me": "ส่งข้อความถึงผมที่นี่",

      // Footer
      "footer-role": "นักสร้างสรรค์เนื้อหา & นักตัดต่อวิดีโอ",
      "footer-media": "สื่อ",
    },
  }

  /**
   * Set the language for the website
   * @param {string} lang - The language code ('en' or 'th')
   */
  function setLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem("selectedLanguage", lang)

    // Update the language toggle button text
    document.querySelector("#language-toggle span").textContent = lang.toUpperCase()

    // Update all translatable elements
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")

      // Check if the key exists in our translations
      if (translations[lang][key]) {
        // Special handling for elements that need HTML content
        if (key.includes("subtitle") || key.includes("about-p")) {
          element.innerHTML = translations[lang][key]
        } else {
          element.textContent = translations[lang][key]
        }
      }
    })
  }

  // Initialize language based on localStorage or default to English
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en"
  setLanguage(savedLanguage)

  // Language toggle functionality
  const languageToggle = document.getElementById("language-toggle")
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const currentLang = localStorage.getItem("selectedLanguage") || "en"
      const newLang = currentLang === "en" ? "th" : "en"
      setLanguage(newLang)
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Mobile navigation toggle
  const createMobileNav = () => {
    const nav = document.querySelector("nav")
    const mobileNavToggle = document.createElement("button")
    mobileNavToggle.classList.add("mobile-nav-toggle")
    mobileNavToggle.setAttribute("aria-label", "Toggle navigation menu")
    mobileNavToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="  aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `

    nav.appendChild(mobileNavToggle)

    mobileNavToggle.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links")
      navLinks.classList.toggle("show")
    })
  }

  // Only create mobile nav for smaller screens
  if (window.innerWidth <= 768) {
    createMobileNav()
  }

  // Header scroll effect
  const header = document.querySelector("header")

  // Back to top button functionality
  const backToTopButton = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    // Header effect
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Back to top button visibility
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  })

  // Back to top button click handler
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear()
})
