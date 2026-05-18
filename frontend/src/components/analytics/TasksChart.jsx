import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from 'recharts'

export default function TasksChart() {
  const data = [
    {
      name: 'Mon',
      tasks: 4
    },
    {
      name: 'Tue',
      tasks: 7
    },
    {
      name: 'Wed',
      tasks: 5
    },
    {
      name: 'Thu',
      tasks: 9
    },
    {
      name: 'Fri',
      tasks: 12
    },
    {
      name: 'Sat',
      tasks: 3
    },
    {
      name: 'Sun',
      tasks: 2
    }
  ]

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[400px]">
      <h2 className="text-2xl font-bold text-white mb-6">
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />

          <Tooltip />

          <Bar
            dataKey="tasks"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}