export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">
        DevTrack
      </h1>

      <nav className="flex flex-col gap-3">
        <button className="bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left">
          Dashboard
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left">
          Projects
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left">
          Kanban
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left">
          Analytics
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left">
          Settings
        </button>
      </nav>
    </aside>
  )
}