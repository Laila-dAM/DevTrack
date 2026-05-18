import Layout from './components/layout/Layout'
import KanbanBoard from './components/kanban/KanbanBoard'

export default function App() {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Project Kanban
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your tasks and workflow
        </p>
      </div>

      <KanbanBoard />
    </Layout>
  )
}