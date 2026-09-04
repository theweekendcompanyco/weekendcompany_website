export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recent work</h2>
          <p className="text-xl text-text-muted">Projects and case studies.</p>
        </div>

        {/* Empty State */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-16 sm:p-24 text-center border-2 border-dashed border-gray-300">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            The portfolio is still growing.
          </h3>

          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Every project has to start somewhere. Work will be added here as projects are completed and shared.
          </p>

          <p className="text-sm text-gray-500">
            In the meantime, you can see my approach in the services above or get in touch to discuss your project.
          </p>
        </div>

        {/* Projects Grid (Ready for content) */}
        {/* This structure is ready to display projects when available */}
        {/* Example usage:
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              {/* Project Image */}
              {/* <div className="aspect-video bg-gray-300"></div> */}
              {/* Project Info */}
              {/* <div className="p-6">
                <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div> */}
            {/* </div> */}
          {/* ))} */}
        {/* </div> */}
      </div>
    </section>
  )
}
