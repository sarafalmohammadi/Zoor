
function VisitorRegistration() {
  return (
    <div className="mx-auto max-w-md space-y-5 text-xs">
      <header className="text-center space-y-2">
        <div className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-zoor-pearl/70">
          نموذج تسجيل الزائر – Zoor
        </div>
        <h1 className="text-lg font-semibold">تأكيد حضورك</h1>
        <p className="text-[11px] text-zoor-pearl/60">
          يرجى تعبئة البيانات التالية ليتم إصدار QR خاص بك للدخول من بوابة الفعالية.
        </p>
      </header>

      <section className="glass-soft p-4 space-y-3">
        <div className="space-y-1.5">
          <label className="text-[11px] text-zoor-pearl/70">الاسم الثلاثي</label>
          <input className="input-glass" placeholder="مثال: سارة فواز المحمدي" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] text-zoor-pearl/70">رقم الجوال</label>
          <input className="input-glass" placeholder="05xxxxxxxx" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] text-zoor-pearl/70">رقم الهوية (اختياري)</label>
          <input className="input-glass" />
        </div>
        <button type="button" className="btn-primary w-full justify-center">
          تأكيد الحضور وإصدار QR
        </button>
        <div className="rounded-2xl bg-black/30 px-3 py-2 text-[11px] text-zoor-pearl/60">
          بعد الدمج مع الباك اند، سيتم حفظ بياناتك في قاعدة البيانات، وإرسال رابط الدعوة مع QR إلى جوالك أو بريدك
          الإلكتروني حسب إعدادات المنشأة.
        </div>
      </section>
    </div>
  )
}

export default VisitorRegistration
