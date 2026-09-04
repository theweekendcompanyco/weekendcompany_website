import { Project } from '../../types/project'
import ProjectPreview from './ProjectPreview'

interface ProjectCardProps {
  project: Project
  onSelectProject: (project: Project) => void
}

export default function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelectProject(project)
    }
  }

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onClick={() => onSelectProject(project)}
      onKeyDown={handleKeyDown}
      className="group bg-dark-card hover:bg-dark-card-hover border border-dark-border hover:border-accent/50 rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
    >
      {/* Top Visual Area */}
      <div className="w-full bg-primary p-3 pb-0 overflow-hidden relative border-b border-dark-border/60">
        <div className="transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectPreview visualType={project.visualType} title={project.title} />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          {/* Header Metadata: Category + Project Type Badge */}
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
            <span className="font-semibold text-accent tracking-wider uppercase font-mono">
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

          {/* Project Title */}
          <h3 className="text-xl font-bold text-text-primary group-hover:text-gold-bright transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tags + CTA */}
        <div className="space-y-4 pt-2 border-t border-dark-border/60">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-primary border border-dark-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm font-semibold text-accent group-hover:text-gold-bright transition-colors">
            <span>{project.ctaText}</span>
            <svg
              className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  )
}
