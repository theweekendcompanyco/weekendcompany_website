import { VisualType } from '../../types/project'

interface ProjectPreviewProps {
  visualType: VisualType
  title: string
}

export default function ProjectPreview({ visualType, title }: ProjectPreviewProps) {
  switch (visualType) {
    case 'browser-mockup':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] bg-primary rounded-t-xl border border-dark-border overflow-hidden flex flex-col shadow-inner group-hover:border-accent/40 transition-colors duration-300">
          {/* Browser Chrome Bar */}
          <div className="px-4 py-2.5 bg-dark-card border-b border-dark-border flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block"></span>
            </div>
            <div className="flex-1 max-w-xs bg-primary border border-dark-border rounded px-3 py-1 text-[11px] text-text-muted text-center font-mono truncate">
              https://theweekendcompany.co/demo-site
            </div>
            <div className="text-text-muted text-xs font-mono opacity-60">⌘R</div>
          </div>

          {/* Mini Website Preview Canvas */}
          <div className="p-4 flex-1 flex flex-col gap-3 bg-gradient-to-b from-dark-bg to-primary relative overflow-hidden">
            {/* Header placeholder */}
            <div className="flex justify-between items-center pb-2 border-b border-dark-border/60">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-accent"></div>
                <div className="w-16 h-2 bg-text-primary/60 rounded"></div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-10 h-2 bg-text-muted/40 rounded"></div>
                <div className="w-12 h-4 bg-accent/20 border border-accent/40 rounded text-[9px] text-accent font-semibold flex items-center justify-center">
                  Book
                </div>
              </div>
            </div>

            {/* Hero Banner inside browser */}
            <div className="my-auto py-3 px-4 rounded-lg bg-dark-card border border-dark-border flex flex-col gap-2 relative group-hover:border-accent/30 transition-all">
              <span className="text-[10px] text-accent font-mono uppercase tracking-wider font-semibold">
                Client Services
              </span>
              <div className="text-xs sm:text-sm font-bold text-text-primary line-clamp-1">
                Modern Solutions for Local Businesses
              </div>
              <div className="text-[11px] text-text-secondary line-clamp-2 leading-relaxed">
                Fast, responsive web design built to convert visitors without agency overhead.
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[9px] px-2 py-0.5 rounded bg-accent text-primary font-bold">
                  Live Preview
                </span>
                <span className="text-[9px] text-text-muted font-mono">100% Mobile Ready</span>
              </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-dark-card border border-dark-border">
                <div className="w-3 h-3 bg-accent/30 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-text-secondary/50 rounded"></div>
              </div>
              <div className="p-2 rounded bg-dark-card border border-dark-border">
                <div className="w-3 h-3 bg-gold-bright/30 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-text-secondary/50 rounded"></div>
              </div>
              <div className="p-2 rounded bg-dark-card border border-dark-border">
                <div className="w-3 h-3 bg-neutral-600 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-text-secondary/50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )

    case 'data-transform':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] bg-primary rounded-t-xl border border-dark-border p-4 flex flex-col gap-3 font-mono text-xs shadow-inner group-hover:border-accent/40 transition-colors duration-300">
          {/* Header Tag */}
          <div className="flex items-center justify-between pb-2 border-b border-dark-border text-[11px]">
            <span className="text-text-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              DATA PIPELINE TRANSFORM
            </span>
            <span className="text-accent text-[10px] bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
              CSV / Excel
            </span>
          </div>

          {/* Dual Column View: Before vs After */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            {/* Raw Messy Column */}
            <div className="p-2.5 rounded bg-dark-card border border-dark-border flex flex-col gap-1.5">
              <div className="text-[10px] text-text-muted font-bold tracking-wider uppercase mb-0.5">
                BEFORE (RAW)
              </div>
              <div className="text-[10px] text-text-muted/70 truncate bg-primary p-1 rounded border border-dark-border">
                "john smith " | +1(555) 0192
              </div>
              <div className="text-[10px] text-text-muted/70 truncate bg-primary p-1 rounded border border-dark-border">
                SARAH.JONES@GMAIL | 98765
              </div>
              <div className="text-[10px] text-text-muted/70 truncate bg-primary p-1 rounded border border-dark-border">
                "DUPLICATE_ENTRY" | null
              </div>
            </div>

            {/* Cleaned Standardized Column */}
            <div className="p-2.5 rounded bg-dark-card border border-accent/30 flex flex-col gap-1.5 relative group-hover:border-accent/60 transition-colors">
              <div className="text-[10px] text-accent font-bold tracking-wider uppercase mb-0.5 flex justify-between">
                <span>AFTER (CLEAN)</span>
                <span>✓ 100%</span>
              </div>
              <div className="text-[10px] text-text-primary truncate bg-primary p-1 rounded border border-dark-border">
                John Smith | +1-555-0192
              </div>
              <div className="text-[10px] text-text-primary truncate bg-primary p-1 rounded border border-dark-border">
                Sarah Jones | sarah@g.com
              </div>
              <div className="text-[10px] text-text-primary truncate bg-primary p-1 rounded border border-dark-border">
                Deduplicated | Validated
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-2 border-t border-dark-border flex justify-between items-center text-[10px] text-text-muted">
            <span>Rows Processed: 1,420</span>
            <span className="text-accent">Deduplicated & Normalised</span>
          </div>
        </div>
      )

    case 'design-kit':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] bg-primary rounded-t-xl border border-dark-border p-4 flex flex-col gap-3 shadow-inner group-hover:border-accent/40 transition-colors duration-300 relative overflow-hidden">
          {/* Top Label */}
          <div className="flex justify-between items-center pb-2 border-b border-dark-border">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
              Visual Asset Composition
            </span>
            <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
              Canva / Branding
            </span>
          </div>

          {/* Visual Cards Layout */}
          <div className="flex-1 grid grid-cols-12 gap-2.5 items-center">
            {/* Social Post Mockup */}
            <div className="col-span-7 bg-dark-card border border-accent/30 rounded-lg p-3 flex flex-col justify-between gap-2 shadow-md relative group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-accent font-semibold uppercase tracking-widest font-mono">
                  Brand Post
                </span>
                <span className="w-2 h-2 rounded-full bg-accent"></span>
              </div>
              <div>
                <div className="text-xs font-bold text-text-primary leading-snug">
                  Grow Your Local Business Online
                </div>
                <div className="text-[10px] text-text-secondary mt-1">
                  Practical visual kits designed for impact.
                </div>
              </div>
              <div className="flex gap-1.5 mt-1">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-gold-subtle"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              </div>
            </div>

            {/* Side Branding Assets (Palette & Story Banner) */}
            <div className="col-span-5 flex flex-col gap-2">
              <div className="p-2 bg-dark-card border border-dark-border rounded flex flex-col gap-1">
                <span className="text-[9px] text-text-muted font-mono">PALETTE</span>
                <div className="flex gap-1">
                  <span className="flex-1 h-3 rounded bg-accent"></span>
                  <span className="flex-1 h-3 rounded bg-gold-bright"></span>
                  <span className="flex-1 h-3 rounded bg-neutral-800"></span>
                </div>
              </div>

              <div className="p-2 bg-dark-card border border-dark-border rounded flex flex-col gap-1">
                <span className="text-[9px] text-text-muted font-mono">TYPOGRAPHY</span>
                <div className="text-[11px] font-bold text-text-primary">Outfit / Inter</div>
                <div className="text-[9px] text-text-secondary">Clean & Legible</div>
              </div>
            </div>
          </div>
        </div>
      )

    case 'task-workflow':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[260px] bg-primary rounded-t-xl border border-dark-border p-4 flex flex-col gap-3 font-mono shadow-inner group-hover:border-accent/40 transition-colors duration-300">
          {/* Header */}
          <div className="flex justify-between items-center pb-2 border-b border-dark-border">
            <span className="text-[11px] text-text-muted uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              AUTOMATED WORKFLOW SYSTEM
            </span>
            <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
              Task Checklist
            </span>
          </div>

          {/* Workflow Pipeline Task Rows */}
          <div className="flex-1 flex flex-col gap-2 text-xs">
            {/* Task 1 */}
            <div className="p-2 rounded bg-dark-card border border-dark-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-accent/20 text-accent text-[10px] flex items-center justify-center font-bold">
                  ✓
                </span>
                <span className="text-text-primary text-[11px]">Web Research & Lead Extraction</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                Completed
              </span>
            </div>

            {/* Task 2 */}
            <div className="p-2 rounded bg-dark-card border border-dark-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gold-bright/20 text-gold-bright text-[10px] flex items-center justify-center font-bold animate-spin">
                  ⚙
                </span>
                <span className="text-text-primary text-[11px]">PDF Data Sanitization</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-gold-bright/10 text-gold-bright border border-gold-bright/20">
                Processing
              </span>
            </div>

            {/* Task 3 */}
            <div className="p-2 rounded bg-dark-card border border-dark-border flex items-center justify-between gap-2 opacity-50">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-dark-border text-text-muted text-[10px] flex items-center justify-center">
                  ○
                </span>
                <span className="text-text-muted text-[11px]">Quality Check & Summary Delivery</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-dark-border text-text-muted">
                Queued
              </span>
            </div>
          </div>

          {/* Workflow Footer Progress */}
          <div className="pt-2 border-t border-dark-border flex justify-between items-center text-[10px] text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-dark-border rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-accent rounded-full"></div>
              </div>
              <span>75% Done</span>
            </div>
            <span className="text-accent">Hours Saved: ~5.5 hrs</span>
          </div>
        </div>
      )

    default:
      return null
  }
}
