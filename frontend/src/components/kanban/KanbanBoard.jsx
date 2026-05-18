import KanbanColumn from './KanbanColumn'

export default function KanbanBoard() {
  const columns = [
    {
      id: 1,
      title: 'To Do',
      tasks: [
        {
          id: 1,
          title: 'Create dashboard',
          description: 'Build analytics UI'
        },
        {
          id: 2,
          title: 'Fix login',
          description: 'Improve auth flow'
        }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [
        {
          id: 3,
          title: 'Kanban system',
          description: 'Implement drag and drop'
        }
      ]
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        {
          id: 4,
          title: 'Backend API',
          description: 'FastAPI setup completed'
        }
      ]
    }
  ]

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
    </div>
  )
}