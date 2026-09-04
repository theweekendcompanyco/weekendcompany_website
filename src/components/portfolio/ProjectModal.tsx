import { useEffect, useRef } from 'react'
import { Project } from '../../types/project'
import ProjectPreview from './ProjectPreview'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'SELF-INITIATED':
        return 'bg-accent/10 text-accent border-accent/20'
      case 'DEMO':
        return 'bg-gold-bright/10 text-gold-bright border-gold-bright/20'
      case 'CONCEPT':
        return 'bg-neutral-800 text-text-secondary border-neutral-700'
      case 'EXPERIMENT':
        return 'bg-gold-subtle/20 text-gold-bright border-gold-subtle/40'
      default:
        return 'bg-accent/10 text-accent border-accent/20'
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-primary/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="p-6 pb-4 border-b border-dark-border flex items-start justify-between gap-4 bg-dark-card/95 backdrop-blur z-10 sticky top-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span
                className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${getTypeStyle(
                  project.projectType
                )}`}
              >
                {project.projectType}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-text-primary">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-text-muted hover:text-text-primary rounded-lg bg-primary border border-dark-border hover:bg-dark-border transition duration-150 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Visual Showcase Box */}
          <div className="rounded-xl border border-dark-border overflow-hidden bg-primary">
            <ProjectPreview visualType={project.visualType} title={project.title} />
          </div>

          {/* Project Summary */}
          <div>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-dark-border">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Goal & Objective
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.details.goal}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Approach & Methodology
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.details.approach}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                What Was Built
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.details.whatWasBuilt}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Key Learnings
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.details.whatILearned}
              </p>
            </div>
          </div>

          {/* Tools & Tags */}
          <div className="pt-4 border-t border-dark-border space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              Tools & Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.details.toolsUsed.map(tool => (
                <span
                  key={tool}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-primary border border-dark-border text-text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-dark-border bg-dark-card/95 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left font-mono">
            Need a similar website, data cleanup, or visual kit?
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-lg hover:bg-gold-bright active:scale-95 transition text-center shadow-md shadow-accent/10"
            >
              Discuss your project →
            </a>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 border border-dark-border text-text-secondary text-sm font-semibold rounded-lg hover:bg-primary transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
