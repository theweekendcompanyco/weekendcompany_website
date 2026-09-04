import { Project } from '../types/project'

export const PROJECTS: Project[] = [
  {
    id: 'project-build-01',
    title: 'Small Business Website Concept',
    category: 'BUILD',
    categoryLabel: 'BUILD — Websites',
    projectType: 'SELF-INITIATED',
    shortDescription: 'A responsive website concept built for a small business that needs a clear, modern online presence.',
    fullDescription: 'A modern, high-performance landing page concept designed for local service businesses or independent professionals who need to convert visitors into clients without bloat.',
    tags: ['React', 'Responsive Design', 'UI/UX', 'Tailwind CSS'],
    visualType: 'browser-mockup',
    ctaText: 'Explore project →',
    details: {
      goal: 'Demonstrate how a clean, mobile-first website structure can help small service businesses outline their offerings, build trust, and drive client inquiries without complex CMS overhead.',
      approach: 'Focused on high typography hierarchy, fast loading speeds, intuitive navigation, clear call-to-action touchpoints, and subtle micro-interactions that make the site feel alive.',
      whatWasBuilt: 'A complete landing page prototype featuring an hero section, service feature grid, customer testimonial cards, quick pricing estimator, and an accessible contact trigger.',
      toolsUsed: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion concepts'],
      whatILearned: 'Streamlining DOM nodes and using pure CSS transitions produces faster, smoother mobile experiences than heavy javascript animation libraries.'
    }
  },
  {
    id: 'project-clean-02',
    title: 'Messy Data → Clean Data',
    category: 'CLEAN',
    categoryLabel: 'CLEAN — Data & Spreadsheets',
    projectType: 'DEMO',
    shortDescription: 'A practical data-cleaning demonstration showing how inconsistent spreadsheet data can be structured and standardized.',
    fullDescription: 'An interactive comparison demonstrating automated and manual cleaning pipelines for messy customer lists, mixed date formats, unformatted phone numbers, and redundant entries.',
    tags: ['Excel', 'CSV', 'Data Cleaning', 'Data Formatting'],
    visualType: 'data-transform',
    ctaText: 'Explore project →',
    details: {
      goal: 'Show how unorganized raw data exports (e.g., from POS systems or contact forms) can be converted into clean, analysis-ready spreadsheets.',
      approach: 'Applied systematic sanitization rules: trimming extra spaces, standardizing international phone formats, normalizing dates to YYYY-MM-DD, splitting combined name fields, and deduplicating rows.',
      whatWasBuilt: 'A before-and-after data pipeline model with visual status indicators highlighting raw missing fields vs. standardized output columns.',
      toolsUsed: ['Microsoft Excel', 'Google Sheets Formulas', 'Python / Pandas scripts', 'Regex sanitization'],
      whatILearned: 'Setting strict validation schemas upfront prevents 90% of downstream reporting errors and saves hours of manual correction.'
    }
  },
  {
    id: 'project-design-03',
    title: 'Small Business Visual Kit',
    category: 'DESIGN',
    categoryLabel: 'DESIGN — Canva & Visuals',
    projectType: 'SELF-INITIATED',
    shortDescription: 'A collection of practical visual assets designed for everyday business communication and social media.',
    fullDescription: 'A cohesive visual identity kit tailored for small business marketing across Instagram, LinkedIn, printable flyers, and promotional digital banners.',
    tags: ['Canva', 'Social Media', 'Visual Design', 'Brand Kit'],
    visualType: 'design-kit',
    ctaText: 'Explore project →',
    details: {
      goal: 'Provide non-designers or busy business owners with turn-key, visually consistent templates for announcements, service spot-lights, and promo cards.',
      approach: 'Curated a harmonious color palette, legible typographic pairings, and reusable layout grids that maintain brand identity across square posts, story banners, and print flyers.',
      whatWasBuilt: 'A 6-piece visual template suite including announcement cards, customer review highlight templates, price list graphics, and social media story frames.',
      toolsUsed: ['Canva Pro', 'Figma', 'Typography System', 'Color Harmony Tokens'],
      whatILearned: 'Consistency in spacing and visual weight matters far more than complex graphic elements when communicating key business information.'
    }
  },
  {
    id: 'project-help-04',
    title: 'Digital Task Automation / Workflow',
    category: 'HELP',
    categoryLabel: 'HELP — Digital Tasks',
    projectType: 'EXPERIMENT',
    shortDescription: 'A demonstration of turning a repetitive digital task into a cleaner, more organized automated workflow.',
    fullDescription: 'A step-by-step digital process optimization turning time-consuming web research and document collation into a streamlined, trackable checklist execution.',
    tags: ['Workflow', 'Research', 'Productivity', 'Task Systems'],
    visualType: 'task-workflow',
    ctaText: 'Explore project →',
    details: {
      goal: 'Illustrate how tedious administrative tasks—like web lead research, PDF data extraction, and directory compilation—can be executed with structure and speed.',
      approach: 'Broke down complex manual requests into modular steps: source verification, structured data entry into spreadsheets, QA checks, and summary status reporting.',
      whatWasBuilt: 'A workflow tracker prototype showcasing live task transitions from "Received" $\rightarrow$ "Processing" $\rightarrow$ "Quality Checked" $\rightarrow$ "Delivered".',
      toolsUsed: ['Notion Workspaces', 'Google Workspace', 'Automation Scripts', 'Markdown Logs'],
      whatILearned: 'Clear process mapping reduces administrative turnaround times by over 50% while eliminating missing details.'
    }
  }
]
