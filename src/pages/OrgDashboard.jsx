
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard'

function OrgDashboard() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">لوحة المنشأة</h2>
          <p className="text-xs text-zoor-pearl/70">نظرة عامة على الفعاليات والدعوات الخاصة بالمنشأة.</p>
        </div>
        <Link to="/org/events/new" className="btn-primary text-xs">
          إنشاء فعالية جديدة
        </Link>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="إجمالي الفعاليات" value="5" />
        <StatCard label="إجمالي الدعوات" value="1,450" />
        <StatCard label="نسبة الحضور" value="92%" hint="النتائج خلال آخر 30 يوماً" />
      </section>

      <section className="glass-soft overflow-hidden text-xs">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <h3 className="text-sm font-semibold">الفعاليات الحالية</h3>
          <span className="text-[11px] text-zoor-pearl/60">بيانات تجريبية – جاهزة للربط مع Laravel API.</span>
        </div>
        <div className="divide-y divide-white/5">
          {[
            {
              name: 'حفل تخرج 1447 هـ',
              status: 'نشطة',
              date: 'الخميس 10 شعبان 1447',
              invites: 800,
              attended: 730,
            },
            {
              name: 'حفل بداية العام',
              status: 'قادمة',
              date: 'الأحد 25 محرم 1448',
              invites: 400,
              attended: 0,
            },
          ].map((event) => (
            <div
              key={event.name}
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 hover:bg-white/5"
            >
              <div>
                <div className="text-sm font-semibold">{event.name}</div>
                <div className="text-[11px] text-zoor-pearl/60">
                  {event.date} • دعوات: {event.invites} • حضور: {event.attended}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="badge-soft">{event.status}</span>
                <Link
                  to="/org/events/new"
                  className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-zoor-pearl/80 hover:bg-white/5"
                >
                  إدارة الفعالية
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OrgDashboard
