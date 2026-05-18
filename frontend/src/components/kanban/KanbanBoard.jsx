import { useEffect, useState } from 'react'
import KanbanColumn from './KanbanColumn'
import CreateTaskModal from '../modals/CreateTaskModal'

import {
  getKanban,
  moveTask
} from '../../services/api/tasks'

export default function KanbanBoard({ project }) {
  const [columns, setColumns] = useState([])
  const [openModal, setOpenModal] = useState(false)

  async function loadKanban() {
    try {
      const data = await getKanban(1)
      setColumns(data)
    } catch {
      console.log('Failed to load kanban')
    }
  }

  async function handleMoveTask(taskId, columnId) {
    try {
      await moveTask(taskId, columnId)
      loadKanban()
    } catch {
      console.log('Failed to move task')
    }
  }

  useEffect(() => {
    loadKanban()
  }, [])

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Project Kanban
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your tasks and workflow
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-500 transition px-6 py-4 rounded-2xl font-semibold"
        >
          New Task
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onMoveTask={handleMoveTask}
          />
        ))}
      </div>

      <CreateTaskModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreated={loadKanban}
      />
    </>
  )
}