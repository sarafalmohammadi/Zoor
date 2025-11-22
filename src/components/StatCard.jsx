
function StatCard({ label, value, hint }) {
  return (
    <div className="glass-soft flex flex-col gap-1 px-4 py-3 text-xs">
      <div className="text-zoor-pearl/60">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
      {hint && <div className="text-[11px] text-zoor-pearl/50">{hint}</div>}
    </div>
  )
}

export default StatCard
