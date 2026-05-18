export default function Topbar() {
  function logout() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-slate-700 transition">
          Notifications
        </button>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl"
        >
          Logout
        </button>

        <div className="w-10 h-10 rounded-full bg-slate-700" />
      </div>
    </header>
  )
}