
function AdminDashboard() {
  return (
    <div className="space-y-6 text-xs">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">لوحة السوبر أدمن</h2>
          <p className="text-zoor-pearl/70">إدارة الخطط، المنشآت، الحدود، والاتصال مع البنية الخلفية.</p>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="glass-soft p-4">
          <div className="text-[11px] text-zoor-pearl/60 mb-1">عدد المنشآت</div>
          <div className="text-xl font-semibold">12</div>
          <div className="text-[11px] text-zoor-pearl/60">بيانات تجريبية – سيتم جلبها من PostgreSQL.</div>
        </div>
        <div className="glass-soft p-4">
          <div className="text-[11px] text-zoor-pearl/60 mb-1">إجمالي الدعوات</div>
          <div className="text-xl font-semibold">18,430</div>
        </div>
        <div className="glass-soft p-4">
          <div className="text-[11px] text-zoor-pearl/60 mb-1">معدل الحضور</div>
          <div className="text-xl font-semibold">88%</div>
        </div>
      </section>

      <section className="glass-soft overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <h3 className="text-sm font-semibold">إدارة الخطط</h3>
          <span className="text-[11px] text-zoor-pearl/60">البيانات هنا ثابتة كتجربة واجهة فقط.</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2 px-4 py-3 text-[11px]">
            <thead className="text-zoor-pearl/60">
              <tr>
                <th className="px-4 text-right">الخطة</th>
                <th className="px-4 text-right">الفعاليات المسموحة</th>
                <th className="px-4 text-right">المدعوون</th>
                <th className="px-4 text-right">السعر الشهري (تجريبي)</th>
                <th className="px-4 text-right">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Lite', events: 1, guests: 250, price: '29 ريال', status: 'مفعلة' },
                { name: 'Pro', events: 4, guests: 1200, price: '89 ريال', status: 'مفعلة' },
                { name: 'Unlimited', events: 'غير محدود', guests: 'غير محدود', price: '249 ريال', status: 'قيد التجربة' },
              ].map((plan) => (
                <tr key={plan.name}>
                  <td className="px-4 py-2">
                    <div className="rounded-xl bg-white/5 px-3 py-1.5 text-zoor-pearl/90">{plan.name}</div>
                  </td>
                  <td className="px-4 py-2">{plan.events}</td>
                  <td className="px-4 py-2">{plan.guests}</td>
                  <td className="px-4 py-2">{plan.price}</td>
                  <td className="px-4 py-2">
                    <span className="badge-soft">{plan.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
