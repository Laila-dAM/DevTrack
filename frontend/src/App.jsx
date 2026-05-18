import Layout from './components/layout/Layout'

export default function App() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">
            Projects
          </h3>

          <p className="text-slate-400">
            12 Active Projects
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">
            Tasks
          </h3>

          <p className="text-slate-400">
            84 Total Tasks
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">
            Team
          </h3>

          <p className="text-slate-400">
            8 Members
          </p>
        </div>
      </div>
    </Layout>
  )
}