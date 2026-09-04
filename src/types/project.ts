export type ProjectCategory = 'BUILD' | 'CLEAN' | 'DESIGN' | 'HELP'

export type ProjectType = 'SELF-INITIATED' | 'CONCEPT' | 'EXPERIMENT' | 'DEMO'

export type VisualType = 'browser-mockup' | 'data-transform' | 'design-kit' | 'task-workflow'

export interface ProjectDetails {
  goal: string
  approach: string
  whatWasBuilt: string
  toolsUsed: string[]
  whatILearned: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  projectType: ProjectType
  shortDescription: string
  fullDescription: string
  tags: string[]
  visualType: VisualType
  details: ProjectDetails
  ctaText: string
}
