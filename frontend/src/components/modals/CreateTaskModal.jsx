import { useState } from 'react'
import { createTask } from '../../services/api/tasks'

export default function CreateTaskModal({
  open,
  onClose,
  onCreated
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [columnId, setColumnId] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await createTask({
        title,
        description,
        column_id: Number(columnId)
      })

      setTitle('')
      setDescription('')
      setColumnId('')

      onCreated()
      onClose()
    } catch {
      console.log('Failed to create task')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Create Task
        </h2>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none"
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none h-32 resize-none"
          />

          <input
            type="number"
            placeholder="Column ID"
            value={columnId}
            onChange={(e) => setColumnId(e.target.value)}
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-500 transition rounded-xl py-4 font-semibold"
            >
              Create
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-800 hover:bg-slate-700 transition rounded-xl py-4 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}