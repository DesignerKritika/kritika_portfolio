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
    group: "Core Frontend Technologies",
    highlight: true,
    badge: "Core Stack",
    items: [
      { name: "HTML5 (Semantic & SEO)", highlight: true },
      { name: "CSS3 & Modern Layouts", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "React.js (Basics & Components)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap 5", highlight: false },
      { name: "SASS / SCSS", highlight: false },
      { name: "GSAP Animations", highlight: false }
    ]
  },
  {
    group: "UI / UX & Implementation",
    highlight: false,
    badge: "Design to Code",
    items: [
      { name: "Responsive Web Design", highlight: true },
      { name: "Figma to HTML / Code", highlight: true },
      { name: "Photoshop to HTML", highlight: false },
      { name: "Pixel-Perfect UI", highlight: true },
      { name: "UI Architecture & Layouts", highlight: false },
      { name: "Cross-Browser Compatibility", highlight: true },
      { name: "Web Accessibility (WCAG 2.1 AA)", highlight: true },
      { name: "Zero Layout Shift (CLS)", highlight: true }
    ]
  },
  {
    group: "Tools & Ecosystem",
    highlight: false,
    badge: "Tooling & Workflow",
    items: [
      { name: "Claude Code CLI", highlight: true },
      { name: "OpenAI Codex", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "VS Code & Terminal CLI", highlight: false },
      { name: "Figma", highlight: false },
      { name: "Adobe Photoshop", highlight: false },
      { name: "Vite & Modern Bundlers", highlight: false }
    ]
  }
];

export default skills;
