export const aiWorkflowData = {
  badge: "Core Workflow & Agentic Tooling",
  title: "AI-Powered Development & Debugging",
  description: "Hands-on expertise using Claude Code (CLI & agentic workflows) and OpenAI Codex to scaffold full websites, troubleshoot complex codebases, and resolve bugs rapidly.",
  stats: [
    { label: "Workflow Velocity", value: "3x Faster Scaffolding" },
    { label: "Code Quality", value: "WCAG & Zero Shift Verified" },
    { label: "Integration", value: "Terminal & CLI Native" }
  ],
  primaryEngines: [
    {
      id: "claude-code",
      name: "Claude Code",
      badge: "Agentic CLI",
      icon: "terminal",
      command: "claude \"scaffold responsive grid & audit WCAG AA\"",
      description: "Agentic terminal workflows, multi-file codebase reasoning, automated refactoring, and rapid end-to-end frontend scaffolding.",
      tags: ["CLI Native", "Autonomous Edits", "Context Aware"]
    },
    {
      id: "openai-codex",
      name: "OpenAI Codex",
      badge: "Code Engine",
      icon: "cpu",
      command: "codex generate --semantic-html5 --wcag-compliance",
      description: "Prompt-driven component generation, complex algorithmic logic, and rapid interactive state prototyping.",
      tags: ["Code Generation", "Logic Prototyping", "UI Synthesis"]
    }
  ],
  capabilities: [
    {
      name: "AI Website Generation",
      tag: "Scaffolding",
      icon: "sparkle",
      highlight: true,
      description: "Prompt-driven scaffolding and responsive HTML5/CSS3 site architecture from wireframes & design specs."
    },
    {
      name: "AI-Assisted Debugging",
      tag: "Diagnostics",
      icon: "bug",
      highlight: true,
      description: "Precision troubleshooting of layout shifts, breakpoint issues, and tricky JavaScript state errors."
    },
    {
      name: "Prompt Engineering for Code",
      tag: "Context",
      icon: "code",
      highlight: true,
      description: "Structured system prompts with explicit constraints for deterministic, pixel-perfect code output."
    },
    {
      name: "Rapid UI Prototyping",
      tag: "Velocity",
      icon: "layers",
      highlight: false,
      description: "Instant translation of conceptual ideas and Figma mockups into interactive browser components."
    },
    {
      name: "Automated Code Refactoring",
      tag: "Clean Code",
      icon: "zap",
      highlight: false,
      description: "Modernizing legacy styles into clean SCSS, modular CSS custom properties, and semantic markup."
    },
    {
      name: "Cross-Browser Bug Fixing",
      tag: "Resilience",
      icon: "shield",
      highlight: false,
      description: "Rapid isolation and patching of rendering inconsistencies across Safari, Chrome, Firefox, and iOS."
    }
  ]
};

const skills = [
  {
    group: "Frontend Development",
    highlight: false,
    badge: "Core Stack",
    items: [
      { name: "HTML5 (Semantic & SEO)", highlight: true },
      { name: "CSS3 & Modern Layouts", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "React", highlight: false, hidden: true },
      { name: "Bootstrap 5", highlight: false },
      { name: "Tailwind CSS", highlight: false },
      { name: "SASS / SCSS", highlight: false },
      { name: "GSAP Animations", highlight: false },
    ]
  },
  {
    group: "UI / UX & Implementation",
    highlight: false,
    badge: "Design to Code",
    items: [
      { name: "Responsive Web Design", highlight: true },
      { name: "Figma to HTML", highlight: true },
      { name: "Photoshop to HTML", highlight: false },
      { name: "Pixel Perfect UI", highlight: true },
      { name: "UI Architecture", highlight: false },
      { name: "Cross Browser Compatibility", highlight: false },
      { name: "Web Accessibility", highlight: false },
      { name: "WCAG Standards", highlight: false },
    ]
  },
  {
    group: "Tools & Ecosystem",
    highlight: false,
    badge: "Tooling",
    items: [
      { name: "Git & GitHub", highlight: false },
      { name: "VS Code", highlight: false },
      { name: "Adobe Photoshop", highlight: false },
      { name: "Figma", highlight: false },
      { name: "Claude AI", highlight: true },
      { name: "Vite / Modern Bundlers", highlight: false },
    ]
  }
];

export default skills;
