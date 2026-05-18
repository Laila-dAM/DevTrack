import AnalyticsCard from './AnalyticsCard'
import TasksChart from './TasksChart'

export default function AnalyticsDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-6">
        <AnalyticsCard
          title="Total Tasks"
          value="124"
          growth="+12%"
        />

        <AnalyticsCard
          title="Completed"
          value="86"
          growth="+18%"
        />

        <AnalyticsCard
          title="In Progress"
          value="24"
          growth="+4%"
        />

        <AnalyticsCard
          title="Team Members"
          value="8"
          growth="+2%"
        />
      </div>

      <TasksChart />
    </div>
  )
}