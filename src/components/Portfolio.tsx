import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { Project, ProjectCategory } from '../types/project'
import ProjectCard from './portfolio/ProjectCard'
import ProjectModal from './portfolio/ProjectModal'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'ALL'>('ALL')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory)

  const categories: { label: string; value: ProjectCategory | 'ALL' }[] = [
    { label: 'All Projects', value: 'ALL' },
    { label: 'BUILD (Websites)', value: 'BUILD' },
    { label: 'CLEAN (Data)', value: 'CLEAN' },
    { label: 'DESIGN (Visuals)', value: 'DESIGN' },
    { label: 'HELP (Tasks)', value: 'HELP' },
  ]

  return (
    <section id="portfolio" className="py-24 px-6 relative border-b border-dark-border/40">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              SELECTED WORK
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary tracking-tight">
            Things I've built.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            A growing collection of websites, data work, designs and experiments. Built to solve real problems, test ideas and keep getting better.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-dark-border/60">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-accent text-primary font-bold shadow-md shadow-accent/10'
                  : 'bg-dark-card text-text-secondary hover:text-text-primary hover:bg-dark-card-hover border border-dark-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2-column desktop / 1-column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={setActiveProject}
            />
          ))}
        </div>

        {/* Portfolio Status & Brand Story Banner */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 sm:p-12 relative overflow-hidden text-center space-y-6 shadow-xl">
          {/* Subtle gold glowing accent backdrop effect */}
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              ACTIVELY BUILDING & EXPERIMENTING
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
              This is just the beginning.
            </h3>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              More projects will appear here as I build, experiment and work with real people.
            </p>

            <p className="text-sm font-mono text-text-muted italic pt-2">
              "The 10–7 pays the bills. The hours after it are for building what's next."
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-primary rounded-lg font-bold hover:bg-gold-bright active:scale-95 transition duration-200 shadow-lg shadow-accent/10"
            >
              Have something that needs doing? Let's talk →
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
