
function QRDesigner() {
  return (
    <div className="space-y-6 text-xs">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">مصمم QR على الدعوة</h2>
          <p className="text-zoor-pearl/70">
            حدد موضع كود QR على تصميم الدعوة. هذه نسخة واجهة فقط، جاهزة للربط مع محرك معالجة الصور في الخلفية.
          </p>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-[1.6fr,1fr]">
        <div className="glass-soft flex flex-col items-center justify-center p-4">
          <div className="mb-3 text-[11px] text-zoor-pearl/60">
            رفع التصميم النهائي سيكون من خلال هذه الواجهة. حالياً نستخدم معاينة تجريبية.
          </div>
          <div className="relative h-64 w-full max-w-sm rounded-3xl border border-dashed border-white/20 bg-gradient-to-br from-zoor-purple via-zoor-grape to-zoor-navy">
            <div className="absolute inset-0 opacity-40 mix-blend-screen">
              <div className="absolute -left-6 top-4 h-24 w-24 rounded-full bg-zoor-aqua blur-2xl" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-zoor-pink blur-2xl" />
            </div>

            <div className="relative h-full">
              <div className="absolute inset-4 rounded-3xl border border-white/20" />
              <div className="absolute right-6 top-6 h-16 w-16 rounded-2xl border border-zoor-aqua bg-black/40 shadow-neon-aqua" />
              <div className="absolute bottom-8 left-8 rounded-2xl bg-black/40 px-3 py-2 text-[10px] text-zoor-pearl/75">
                سيتم توليد QR فريد لكل زائر ووضعه في هذا الموضع لكل دعوة.
              </div>
            </div>
          </div>
        </div>

        <aside className="glass-soft p-4 space-y-3">
          <h3 className="text-sm font-semibold mb-1">إعدادات الموضع</h3>
          <div className="space-y-2">
            <div className="space-y-1.5">
              <div className="text-[11px] text-zoor-pearl/70">الموضع المبدئي</div>
              <div className="grid grid-cols-2 gap-2">
                {['أعلى اليمين', 'أعلى اليسار', 'أسفل اليمين', 'أسفل اليسار'].map((pos) => (
                  <button
                    key={pos}
                    type="button"
                    className="rounded-2xl border border-white/20 bg-white/5 px-3 py-1 text-[11px] text-zoor-pearl/80 hover:bg-white/10"
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-1.5">
                <div className="text-[11px] text-zoor-pearl/70">الحجم</div>
                <input type="range" min="64" max="160" defaultValue="96" className="w-full" />
              </div>
              <div className="space-y-1.5">
                <div className="text-[11px] text-zoor-pearl/70">حافة الزجاج</div>
                <input type="range" min="0" max="24" defaultValue="12" className="w-full" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] text-zoor-pearl/70">لون الإطار</div>
              <div className="flex flex-wrap gap-2">
                {['#FDFDFE', '#ED1E79', '#0CFFE1'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="h-6 w-6 rounded-full border border-white/30"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 rounded-2xl bg-black/25 px-3 py-2 text-[11px] text-zoor-pearl/60">
              عند الدمج مع الباك اند، سيتم توليد ملف نهائي لكل دعوة مع QR مدمج في الصورة، وإرساله عبر الواتساب أو
              البريد حسب إعدادات الفعالية.
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default QRDesigner
