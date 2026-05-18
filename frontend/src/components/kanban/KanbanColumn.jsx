import KanbanCard from './KanbanCard'

export default function KanbanColumn({
  column,
  onMoveTask
}) {
  function handleDrop(e) {
    const taskId = e.dataTransfer.getData('taskId')

    onMoveTask(Number(taskId), column.id)
  }

  function handleDragOver(e) {
    e.preventDefault()
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-80 min-h-[600px]"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-lg text-white">
          {column.name}
        </h2>

        <span className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full">
          {column.tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {column.tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData('taskId', task.id)
            }
          >
            <KanbanCard task={task} />
          </div>
        ))}
      </div>
    </div>
  )
}