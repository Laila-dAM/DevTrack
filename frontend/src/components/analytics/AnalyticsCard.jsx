export default function AnalyticsCard({
  title,
  value,
  growth
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-4">
        {value}
      </h2>

      <span className="inline-block mt-4 text-green-400 text-sm">
        {growth}
      </span>
    </div>
  )
}