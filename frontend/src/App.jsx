import { useEffect, useState } from 'react'

import Layout from './components/layout/Layout'
import KanbanBoard from './components/kanban/KanbanBoard'
import ProjectSidebar from './components/projects/ProjectSidebar'
import CreateProjectModal from './components/modals/CreateProjectModal'

import { getProjects } from './services/api/projects'

export default function App() {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  async function loadProjects() {
    try {
      const data = await getProjects()

      setProjects(data)

      if (data.length > 0 && !selectedProject) {
        setSelectedProject(data[0])
      }
    } catch {
      console.log('Failed to load projects')
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  return (
    <Layout>
      <div className="flex gap-6">
        <ProjectSidebar
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          openModal={() => setOpenModal(true)}
        />

        <div className="flex-1">
          {selectedProject && (
            <KanbanBoard project={selectedProject} />
          )}
        </div>
      </div>

      <CreateProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreated={loadProjects}
      />
    </Layout>
  )
}