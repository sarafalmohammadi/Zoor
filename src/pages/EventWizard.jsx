
import { useState } from 'react'

const defaultFields = [
  { key: 'fullName', label: 'الاسم الثلاثي', required: true, enabled: true },
  { key: 'phone', label: 'رقم الجوال', required: true, enabled: true },
  { key: 'nationalId', label: 'رقم الهوية', required: false, enabled: false },
  { key: 'studentId', label: 'الرقم الجامعي', required: false, enabled: false },
  { key: 'employeeId', label: 'الرقم الوظيفي', required: false, enabled: false },
]

function EventWizard() {
  const [step, setStep] = useState(1)
  const [fields, setFields] = useState(defaultFields)
  const [channel, setChannel] = useState('whatsapp')
  const [hasDesign, setHasDesign] = useState(true)

  const next = () => setStep((s) => Math.min(4, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  return (
    <div className="space-y-6 text-xs">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">معالج إنشاء فعالية</h2>
          <p className="text-zoor-pearl/70">تعبئة خطوات الفعالية، نموذج التسجيل، والتصميم، وقنوات الإرسال.</p>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zoor-pearl/60">
          <span>الخطوة {step} من 4</span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-[1.6fr,1fr]">
        <div className="space-y-4">
          {step === 1 && (
            <div className="glass-soft p-4 space-y-3">
              <h3 className="text-sm font-semibold mb-1">تفاصيل الفعالية</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zoor-pearl/70">اسم الفعالية</label>
                  <input className="input-glass" placeholder="مثال: حفل تخرج دفعة 1447 هـ" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zoor-pearl/70">اسم المنشأة</label>
                  <input className="input-glass" placeholder="كليات الريان الأهلية" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zoor-pearl/70">تاريخ الفعالية</label>
                  <input type="date" className="input-glass" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zoor-pearl/70">وقت البدء</label>
                  <input type="time" className="input-glass" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-[11px] text-zoor-pearl/70">الموقع</label>
                  <input className="input-glass" placeholder="قاعة الاحتفالات الكبرى – المدينة المنورة" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="glass-soft p-4 space-y-3">
              <h3 className="text-sm font-semibold mb-1">حقول نموذج التسجيل</h3>
              <p className="text-[11px] text-zoor-pearl/60">
                اختر الحقول التي سيقوم الزائر بتعبئتها. يمكن لاحقاً إضافة حقول مخصصة لكل منشأة.
              </p>
              <div className="space-y-2">
                {fields.map((field, index) => (
                  <label
                    key={field.key}
                    className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={field.enabled}
                        onChange={(e) => {
                          const updated = [...fields]
                          updated[index] = { ...field, enabled: e.target.checked }
                          setFields(updated)
                        }}
                        className="h-3.5 w-3.5 rounded border-white/20 bg-transparent text-zoor-aqua focus:ring-zoor-aqua"
                      />
                      <span className="text-xs">{field.label}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-zoor-pearl/60">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => {
                          const updated = [...fields]
                          updated[index] = { ...field, required: e.target.checked }
                          setFields(updated)
                        }}
                        className="h-3.5 w-3.5 rounded border-white/20 bg-transparent text-zoor-pink focus:ring-zoor-pink"
                      />
                      <span>إجباري</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-3 rounded-2xl bg-black/20 px-3 py-2 text-[11px] text-zoor-pearl/60">
                استيراد الزوار من ملف Excel سيتم عبر لوحة المنشأة، مع نموذج جاهز متوافق مع قاعدة البيانات.
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="glass-soft p-4 space-y-3">
              <h3 className="text-sm font-semibold mb-1">التصميم وقنوات الإرسال</h3>
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <div className="text-[11px] text-zoor-pearl/70">طريقة الإرسال الرئيسية</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'whatsapp', label: 'واتساب' },
                      { key: 'email', label: 'البريد الإلكتروني' },
                      { key: 'both', label: 'كلاهما' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setChannel(opt.key)}
                        className={[
                          'rounded-full px-3 py-1 text-[11px] border',
                          channel === opt.key
                            ? 'border-zoor-aqua bg-zoor-aqua/10 text-zoor-aqua'
                            : 'border-white/15 text-zoor-pearl/75 hover:bg-white/5',
                        ].join(' ')}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] text-zoor-pearl/70">هل لديك تصميم جاهز للدعوة؟</div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setHasDesign(true)}
                      className={[
                        'rounded-full px-3 py-1 text-[11px] border',
                        hasDesign
                          ? 'border-zoor-aqua bg-zoor-aqua/10 text-zoor-aqua'
                          : 'border-white/15 text-zoor-pearl/75 hover:bg-white/5',
                      ].join(' ')}
                    >
                      لدي تصميم وأرغب برفعه
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasDesign(false)}
                      className={[
                        'rounded-full px-3 py-1 text-[11px] border',
                        !hasDesign
                          ? 'border-zoor-pink bg-zoor-pink/10 text-zoor-pink'
                          : 'border-white/15 text-zoor-pearl/75 hover:bg-white/5',
                      ].join(' ')}
                    >
                      لا يوجد تصميم، أرسل رسالة فقط
                    </button>
                  </div>
                </div>

                {hasDesign && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-zoor-pearl/70">رفع تصميم الدعوة (PNG / JPG)</div>
                    <div className="flex flex-col items-start gap-2 rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-6">
                      <div className="text-[11px] text-zoor-pearl/70">
                        سيتم لاحقاً دعم السحب والإفلات وتحديد موضع QR مباشرة على التصميم.
                      </div>
                      <button type="button" className="btn-ghost text-[11px]">
                        اختيار ملف من الجهاز
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="glass-soft p-4 space-y-3">
              <h3 className="text-sm font-semibold mb-1">مراجعة إعدادات الفعالية</h3>
              <p className="text-[11px] text-zoor-pearl/60">
                هذه بيانات تجريبية. عند ربط الواجهة مع Laravel و PostgreSQL سيتم حفظ كل تفاصيل الفعالية وربطها
                بلوحة المنشأة والسوبر أدمن.
              </p>
              <ul className="space-y-1 text-[11px] text-zoor-pearl/70">
                <li>• الحقول النشطة في نموذج التسجيل: {fields.filter((f) => f.enabled).length}</li>
                <li>• قناة الإرسال الرئيسية: {channel === 'whatsapp' ? 'واتساب' : channel === 'email' ? 'البريد' : 'واتساب والبريد'}</li>
                <li>• تصميم الدعوة: {hasDesign ? 'سيتم رفع تصميم مخصص' : 'بدون تصميم، رسالة نصية فقط'}</li>
              </ul>
            </div>
          )}
        </div>

        <aside className="glass-soft flex flex-col justify-between p-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold">معاينة تقريبية للدعوة</h3>
            <div className="glass-strong relative mt-1 h-52 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zoor-purple via-zoor-grape to-zoor-navy">
              <div className="absolute inset-0 opacity-60 mix-blend-screen">
                <div className="absolute -left-10 top-4 h-32 w-32 rounded-full bg-zoor-aqua blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-zoor-pink blur-3xl" />
              </div>
              <div className="relative flex h-full flex-col justify-between p-4 text-[11px]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-zoor-pearl/65">دعوتك لحفل التخرج</div>
                    <div className="text-sm font-semibold">اسم الضيف يظهر هنا</div>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-zoor-gradient shadow-neon-aqua" />
                </div>
                <div className="rounded-2xl bg-black/35 px-3 py-2 text-[10px] text-zoor-pearl/70">
                  يصل لكل زائر رابط خاص مع QR فريد يمكن مسحه من أي جوال عند بوابة الدخول.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1}
              className="btn-ghost disabled:opacity-40"
            >
              رجوع
            </button>
            <button
              type="button"
              onClick={next}
              className="btn-primary"
            >
              {step === 4 ? 'حفظ الفعالية (تجريبي)' : 'التالي'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default EventWizard
