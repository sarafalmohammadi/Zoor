
import { useState } from 'react'

function Scanner() {
  const [status, setStatus] = useState('idle')

  const handleFakeScan = (type) => {
    setStatus(type)
    setTimeout(() => setStatus('idle'), 2000)
  }

  const statusConfig = {
    idle: {
      label: 'جاهز لمسح QR من كاميرا الجوال.',
      bg: 'from-zoor-purple/40 via-zoor-navy/60 to-black',
      border: 'border-white/15',
    },
    ok: {
      label: 'تم تسجيل حضور الزائر بنجاح.',
      bg: 'from-emerald-400/30 via-zoor-navy/70 to-black',
      border: 'border-emerald-400/60',
    },
    dup: {
      label: 'تم تسجيل حضور هذا الزائر مسبقاً.',
      bg: 'from-amber-400/30 via-zoor-navy/70 to-black',
      border: 'border-amber-400/60',
    },
    notfound: {
      label: 'الزائر غير موجود في قائمة الدعوات.',
      bg: 'from-red-500/40 via-zoor-navy/70 to-black',
      border: 'border-red-500/60',
    },
  }

  const s = statusConfig[status]

  return (
    <div className="space-y-5 text-xs">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">صفحة الماسح</h2>
          <p className="text-zoor-pearl/70">
            واجهة مخصصة لموظفي البوابة. تعمل من متصفح الجوال مباشرة بدون أي أجهزة إضافية.
          </p>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.4fr,1fr]">
        <div className="glass-strong relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-3xl border bg-gradient-to-br shadow-neon-aqua sm:h-80 lg:h-96">
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0CFFE1_0,transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ED1E79_0,transparent_60%)]" />
          </div>
          <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/20 bg-black/40">
            <div
              className={[
                'h-40 w-40 rounded-[1.75rem] border-2 bg-gradient-to-br',
                s.border,
                s.bg,
              ].join(' ')}
            >
              <div className="flex h-full items-center justify-center border border-dashed border-white/40 text-[11px] text-zoor-pearl/75">
                إطار الكاميرا – ربط الكاميرا الفعلي سيتم عند الدمج مع مكتبة قراءة QR.
              </div>
            </div>
          </div>
          <div className="relative mt-4 rounded-full bg-black/40 px-4 py-2 text-[11px] text-zoor-pearl/80">
            {s.label}
          </div>
        </div>

        <aside className="glass-soft flex flex-col justify-between p-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold mb-1">حالات المسح التجريبية</h3>
            <p className="text-[11px] text-zoor-pearl/60">
              عند ربط Zoor مع Laravel، سيتم جلب الزائر من قاعدة PostgreSQL وتسجيل الحضور مع ختم زمني، ثم تحديث
              العدادات في لوحة المنشأة والسوبر أدمن.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleFakeScan('ok')}
                className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300 border border-emerald-400/60"
              >
                مثال – حضور صحيح
              </button>
              <button
                type="button"
                onClick={() => handleFakeScan('dup')}
                className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] text-amber-200 border border-amber-400/60"
              >
                مثال – حضور مكرر
              </button>
              <button
                type="button"
                onClick={() => handleFakeScan('notfound')}
                className="rounded-full bg-red-500/10 px-3 py-1 text-[11px] text-red-200 border border-red-500/60"
              >
                مثال – زائر غير موجود
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-black/30 px-3 py-2 text-[11px] text-zoor-pearl/60">
            يتم منع التكرار السريع من نفس الكود عن طريق تخزين آخر عملية مسح في المتصفح، ثم كتابة الحضور في قاعدة
            البيانات مع الوقت، الجهاز، ومعرّف الفعالية.
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Scanner
