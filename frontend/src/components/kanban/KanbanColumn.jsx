import KanbanCard from './KanbanCard'

export default function KanbanColumn({ title, tasks }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-80 min-h-[600px]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-lg text-white">
          {title}
        </h2>

        <span className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <KanbanCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  )
}