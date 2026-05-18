import { useState } from 'react'
import { createProject } from '../../services/api/projects'

export default function CreateProjectModal({
  open,
  onClose,
  onCreated
}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await createProject({
        name,
        description
      })

      setName('')
      setDescription('')

      onCreated()
      onClose()
    } catch {
      console.log('Failed to create project')
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
          Create Project
        </h2>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none"
          />

          <textarea
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none h-32 resize-none"
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