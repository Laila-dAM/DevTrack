import { useEffect, useState } from 'react'
import KanbanColumn from './KanbanColumn'
import {
  getKanban,
  moveTask
} from '../../services/api/tasks'

export default function KanbanBoard() {
  const [columns, setColumns] = useState([])

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
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          onMoveTask={handleMoveTask}
        />
      ))}
    </div>
  )
}