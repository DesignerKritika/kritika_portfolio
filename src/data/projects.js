const projects = [
  {
    id: 17,
    name: "Astrochange",
    url: "https://astrochange.com/",
    image: "/images/astrochange.jpg",
    description:
      "Developed responsive celestial web application interfaces, interactive zodiac trait discovery forms, mobile-first layouts, and smooth carousel transitions.",
    type: "Astrology & Lifestyle Web App",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Responsive UI"],
  },
  {
    id: 18,
    name: "Balloon Antics",
    url: "https://balloonantics.com.au/",
    image: "/images/balloonantics.jpg",
    description:
      "Built with HTML5, CSS, and JavaScript, including animations. Prompts were generated and refined using the Claude AI tool to craft playful party magician layouts and interactive booking flows.",
    type: "Kids Entertainment & Events",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Animations", "Claude AI"],
  },
  {
    id: 1,
    name: "AviatorJob",
    url: "https://aviatorjob.com",
    image: "/images/aviatorjob.jpg",
    description:
      "Built with HTML5, CSS, and JavaScript, including animations. Prompts were generated and refined using the Claude AI tool to develop responsive layouts and interactive components.",
    type: "Aviation & Career Portal",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Claude AI"],
  },
  {
    id: 2,
    name: "Countrywide Process",
    url: "https://www.countrywideprocess.com/",
    image: "/images/countrywide.jpg",
    description:
      "Engineered high-usability legal process serving web application with cross-browser compatibility and optimized mobile navigation.",
    type: "Legal & Logistics Portal",
    technologies: ["HTML5", "SASS", "Bootstrap", "JavaScript", "Responsive UI"],
  },
  {
    id: 3,
    name: "FCC Support",
    url: "https://fcc.support/",
    image: "/images/fccsupport.jpg",
    description:
      "Built clean, structured technical support dashboard layouts and responsive customer ticket submission forms.",
    type: "Enterprise Support System",
    technologies: ["HTML5", "CSS3", "Flexbox", "JavaScript", "DOM Manipulation"],
  },
  {
    id: 4,
    name: "CRS Membership",
    url: "https://crsmembership.com/",
    image: "/images/crsmembership.jpg",
    description:
      "Created responsive membership registration portals, custom pricing tier cards, and accessible form input validation components.",
    type: "Membership & Registration",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Responsive CSS"],
  },
  {
    id: 5,
    name: "Renovate Success",
    url: "https://www.renovatesuccess.com/",
    image: "/images/renovatesuccess.jpg",
    description:
      "Coded mobile-friendly contractor showcase pages, project gallery grids, and interactive lead capture forms.",
    type: "Home Renovation & Contracting",
    technologies: ["HTML5", "CSS Grid", "Bootstrap", "JavaScript", "SASS"],
  },
  {
    id: 6,
    name: "EXP Dental Solutions",
    url: "https://www.expdentalsolutions.com/",
    image: "/images/expdental.jpg",
    description:
      "Developed responsive website interfaces using HTML5, CSS3, and Bootstrap grid layouts optimized for fast mobile page performance.",
    type: "Healthcare & Dental UI",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "Flexbox", "Performance Optimization"],
  },
  {
    id: 7,
    name: "We Got The Sauce",
    url: "https://wegotthesauce.com/",
    image: "/images/wegotthesauce.jpg",
    description:
      "Built custom e-commerce product layouts, shopping cart UI sections, and interactive culinary brand showcase grids.",
    type: "E-Commerce & Culinary Brand",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "E-Commerce UI", "Responsive CSS"],
  },
  {
    id: 8,
    name: "Moruga Foods",
    url: "https://morugafoods.com/",
    image: "/images/morugafoods.jpg",
    description:
      "Created vibrant food product catalog layouts and responsive promotional banners with thorough cross-browser testing.",
    type: "Gourmet Food & Specialty Brand",
    technologies: ["HTML5", "CSS3", "SASS", "JavaScript", "Mobile-First"],
  },
  {
    id: 9,
    name: "Alaska Spice Co.",
    url: "https://alaskaspiceco.com/",
    image: "/images/alaskaspiceco.jpg",
    description:
      "Developed clean, elegant e-commerce product card grids, navigation menus, and responsive checkout user flows.",
    type: "Artisan E-Commerce Store",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "E-Commerce UI"],
  },
  {
    id: 10,
    name: "R Mining Tools",
    url: "https://www.rminingtools.com/",
    image: "/images/rminingtools.jpg",
    description:
      "Developed responsive industrial machinery layout pages, product specs tables, and mobile-friendly equipment showcases.",
    type: "Industrial & Mining Machinery",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Responsive UI"],
  },
  {
    id: 11,
    name: "Dhillon Video",
    url: "https://dhillonvideo.com/",
    image: "/images/dhillonvideo.jpg",
    description:
      "Built high-impact video showcase layouts, media grids, and interactive video player UI components.",
    type: "Media & Video Production",
    technologies: ["HTML5", "CSS3", "JavaScript", "SASS", "Video UI"],
  },
  {
    id: 12,
    name: "Pro Import Ltd",
    url: "https://proimportltd.com/",
    image: "/images/proimportltd.jpg",
    description:
      "Built with HTML5, CSS, and JavaScript, including animations. Prompts were generated and refined using the Claude AI tool to develop structured corporate logistics layouts and inquiry forms.",
    type: "Global Trade & Logistics",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Claude AI"],
  },
  {
    id: 13,
    name: "Ark Biorite",
    url: "https://www.arkbiorite.com/",
    image: "/images/arkbiorite.jpg",
    description:
      "Translated bio-tech design mockups into semantic, SEO-friendly HTML5 pages with structured navigation components.",
    type: "Bio-Tech & Healthcare",
    technologies: ["HTML5", "SASS", "JavaScript", "SEO-Friendly HTML", "Responsive UI"],
  },
  {
    id: 14,
    name: "Resource 4 U Hub",
    url: "https://resource4uhub.com/",
    image: "/images/resource4uhub.jpg",
    description:
      "Built with HTML5, CSS, and JavaScript, including animations. Prompts were generated and refined using the Claude AI tool to develop responsive article card grids and categorization filters.",
    type: "Digital Resource & Info Hub",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Claude AI"],
  },
  /* {
    id: 15,
    name: "Play Factory",
    url: "https://playfactorynew.dev.webartmax.com/",
    image: "/images/playfactory.jpg",
    description:
      "Developed rich dynamic UI elements, GSAP scroll animations, media carousels, and interactive web application pages.",
    type: "Entertainment & Gaming Platform",
    technologies: ["HTML5", "CSS3", "GSAP Animations", "JavaScript", "Interactive UI"],
  }, */
  {
    id: 16,
    name: "All Love Collections",
    url: "https://alllovecollections.com/",
    image: "/images/alllove.jpg",
    description:
      "Engineered luxury natural wellness and vegan spa website layouts, appointment booking workflows, and responsive service showcases.",
    type: "Luxury Spa & Natural Wellness",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Responsive UI"],
  },
];

export default projects;
