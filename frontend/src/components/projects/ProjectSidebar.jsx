export default function ProjectSidebar({
  projects,
  selectedProject,
  setSelectedProject,
  openModal
}) {
  return (
    <div className="w-80 border-r border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Projects
        </h2>

        <button
          onClick={openModal}
          className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-xl"
        >
          New
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`rounded-2xl p-4 text-left transition border ${
              selectedProject?.id === project.id
                ? 'bg-blue-600 border-blue-500'
                : 'bg-slate-800 border-slate-700 hover:border-slate-500'
            }`}
          >
            <h3 className="font-semibold text-white">
              {project.name}
            </h3>

            <p className="text-slate-300 text-sm mt-1">
              {project.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}