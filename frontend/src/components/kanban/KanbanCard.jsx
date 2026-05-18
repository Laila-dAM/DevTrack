export default function KanbanCard({ task }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 hover:border-blue-500 transition">
      <h3 className="font-semibold text-white">
        {task.title}
      </h3>

      <p className="text-slate-400 text-sm mt-2">
        {task.description}
      </p>
    </div>
  )
}