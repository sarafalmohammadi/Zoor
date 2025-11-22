// src/pages/Auth.jsx
import { useState } from 'react'
import { Mail, Phone, User, Building2, ArrowRight } from 'lucide-react'

export default function AuthPage() {
  const [mode, setMode] = useState('signup') // 'login' | 'signup'
  const [accountType, setAccountType] = useState('org') // 'org' | 'individual'
  const [method, setMethod] = useState('email') // 'email' | 'phone'

  // بيانات الفورم
  const [form, setForm] = useState({
    fullName: '',
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 👇 هنا لاحقًا نربطه مع Laravel Breeze API
    // إذا method = email → نستخدم /register أو /login بالبريد
    // وإذا method = phone → ممكن نحفظ رقم الجوال مع الحساب (ونضيف OTP لاحقاً)
    console.log({
      mode,
      accountType,
      method,
      payload: form,
    })
  }

  const isSignup = mode === 'signup'
  const isOrg = accountType === 'org'
  const usingEmail = method === 'email'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zoor-navy via-zoor-purple to-black px-4 py-8">
      <div className="max-w-4xl w-full grid gap-8 md:grid-cols-[1.2fr,1fr] items-stretch">
        {/* 👈 اللوحة الرئيسية (الفورم) */}
        <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
          {/* خلفية توهج ناعمة */}
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
            <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-zoor-pink blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-zoor-aqua blur-3xl" />
          </div>

          <div className="relative space-y-6">
            {/* العنوان + سويتش تسجيل / دخول */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-zoor-pearl">
                  {isSignup ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-zoor-pearl/70">
                  {isSignup
                    ? 'ابدأ بإنشاء حساب كفرد أو منشأة، وفعّل بريدك الالكتروني مرة واحدة.'
                    : 'سجّل دخولك للوصول إلى لوحة إدارة الفعاليات والدعوات.'}
                </p>
              </div>

              <div className="inline-flex rounded-full bg-black/30 p-1 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={[
                    'px-3 py-1 rounded-full transition',
                    !isSignup ? 'bg-white/90 text-zoor-navy' : 'text-zoor-pearl/70',
                  ].join(' ')}
                >
                  دخول
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={[
                    'px-3 py-1 rounded-full transition',
                    isSignup ? 'bg-white/90 text-zoor-navy' : 'text-zoor-pearl/70',
                  ].join(' ')}
                >
                  إنشاء حساب
                </button>
              </div>
            </div>

            {/* نوع الحساب: فرد / منشأة */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setAccountType('individual')}
                className={[
                  'flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 border transition',
                  !isOrg
                    ? 'border-zoor-aqua bg-white/10 text-zoor-pearl shadow-neon-aqua'
                    : 'border-white/15 bg-black/20 text-zoor-pearl/70 hover:bg-white/5',
                ].join(' ')}
              >
                <User className="h-4 w-4" />
                <span>فرد</span>
              </button>
              <button
                type="button"
                onClick={() => setAccountType('org')}
                className={[
                  'flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 border transition',
                  isOrg
                    ? 'border-zoor-aqua bg-white/10 text-zoor-pearl shadow-neon-aqua'
                    : 'border-white/15 bg-black/20 text-zoor-pearl/70 hover:bg-white/5',
                ].join(' ')}
              >
                <Building2 className="h-4 w-4" />
                <span>منشأة / جهة</span>
              </button>
            </div>

            {/* طريقة التسجيل: بريد / جوال */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setMethod('email')}
                className={[
                  'flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 border transition',
                  usingEmail
                    ? 'border-zoor-aqua bg-white/10 text-zoor-pearl shadow-neon-aqua'
                    : 'border-white/15 bg-black/15 text-zoor-pearl/70 hover:bg-white/5',
                ].join(' ')}
              >
                <Mail className="h-4 w-4" />
                <span>بريد إلكتروني</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod('phone')}
                className={[
                  'flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 border transition',
                  !usingEmail
                    ? 'border-zoor-aqua bg-white/10 text-zoor-pearl shadow-neon-aqua'
                    : 'border-white/15 bg-black/15 text-zoor-pearl/70 hover:bg-white/5',
                ].join(' ')}
              >
                <Phone className="h-4 w-4" />
                <span>رقم جوال</span>
              </button>
            </div>

            {/* فورم التسجيل / الدخول */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* إذا كان منشأة */}
              {isSignup && isOrg && (
                <>
                  <div>
                    <label className="mb-1 block text-zoor-pearl/75">اسم المنشأة</label>
                    <input
                      className="input-glass"
                      type="text"
                      value={form.orgName}
                      onChange={(e) => handleChange('orgName', e.target.value)}
                      placeholder="مثال: مدارس الريان الأهلية"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-zoor-pearl/75">اسم المسؤول</label>
                    <input
                      className="input-glass"
                      type="text"
                      value={form.contactName}
                      onChange={(e) => handleChange('contactName', e.target.value)}
                      placeholder="اسم الشخص المسؤول عن إدارة الفعاليات"
                      required
                    />
                  </div>
                </>
              )}

              {/* إذا كان فرد */}
              {isSignup && !isOrg && (
                <div>
                  <label className="mb-1 block text-zoor-pearl/75">الاسم الكامل</label>
                  <input
                    className="input-glass"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="مثال: ساره فواز المحمدي"
                    required
                  />
                </div>
              )}

              {/* حقل البريد / الجوال حسب الاختيار */}
              {usingEmail ? (
                <div>
                  <label className="mb-1 block text-zoor-pearl/75">البريد الإلكتروني</label>
                  <input
                    className="input-glass"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="example@domain.com"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="mb-1 block text-zoor-pearl/75">رقم الجوال</label>
                  <div className="flex gap-2">
                    <input
                      className="input-glass max-w-[90px]"
                      type="text"
                      value="+966"
                      readOnly
                    />
                    <input
                      className="input-glass flex-1"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="5XXXXXXXX"
                      required
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-zoor-pearl/50">
                    حالياً يتم استخدام الجوال كبيان إضافي فقط، ويمكن تفعيل OTP لاحقًا.
                  </p>
                </div>
              )}

              {/* كلمة المرور */}
              <div>
                <label className="mb-1 block text-zoor-pearl/75">
                  {isSignup ? 'كلمة المرور' : 'كلمة المرور'}
                </label>
                <input
                  className="input-glass"
                  type="password"
                  value={form.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder={isSignup ? 'اختر كلمة مرور قوية' : 'أدخل كلمة المرور'}
                  required
                />
              </div>

              {/* تأكيد كلمة المرور في وضع التسجيل */}
              {isSignup && (
                <div>
                  <label className="mb-1 block text-zoor-pearl/75">تأكيد كلمة المرور</label>
                  <input
                    className="input-glass"
                    type="password"
                    value={form.passwordConfirm}
                    onChange={(e) => handleChange('passwordConfirm', e.target.value)}
                    placeholder="أعد إدخال كلمة المرور"
                    required
                  />
                </div>
              )}

              {/* تلميحة التحقق بالبريد للمنشآت */}
              {isSignup && isOrg && usingEmail && (
                <p className="mt-1 text-[11px] text-zoor-pearl/55">
                  سيتم إرسال رابط تفعيل إلى البريد الإلكتروني للتأكد من ملكيتك للحساب قبل إتاحة
                  لوحة المنشأة.
                </p>
              )}

              {/* زر الإرسال */}
              <button type="submit" className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                <span>
                  {isSignup
                    ? isOrg
                      ? 'إنشاء حساب منشأة والدخول للوحة التحكم'
                      : 'إنشاء حساب فردي والبدء الآن'
                    : 'تسجيل الدخول'}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* سطر تبديل بين التسجيل والدخول */}
              <p className="mt-3 text-center text-[11px] text-zoor-pearl/60">
                {isSignup ? (
                  <>
                    لديك حساب مسبقاً؟{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="text-zoor-aqua hover:underline"
                    >
                      سجّل الدخول
                    </button>
                  </>
                ) : (
                  <>
                    ليس لديك حساب؟{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-zoor-aqua hover:underline"
                    >
                      أنشئ حساباً جديداً
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>

        {/* 👉 العمود الثاني: Side panel معلومات / مزايا */}
        <div className="hidden md:flex flex-col justify-between glass-soft rounded-3xl p-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] text-zoor-pearl/75 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-zoor-aqua" />
              تسجيل مصمم خصيصًا للفعاليات والدعوات الذكية
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-zoor-pearl mb-2">
              إدارة الدعوات والزوار بمستوى SaaS حقيقي
            </h2>
            <p className="text-xs sm:text-sm text-zoor-pearl/70 leading-relaxed">
              سواء كنت تُدير فعالية بسيطة لعائلة أو مؤتمر كامل لمنشأة، منصة Zoor تعطيك أدوات
              احترافية: إنشاء دعوات، إرسال QR، تتبّع الحضور، ولوحة تحكم خاصة لكل منشأة.
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="badge-soft w-fit">
              لا حاجة لأجهزة خاصة لمسح QR – يكفي جوال عادي.
            </div>
            <ul className="space-y-1.5 text-zoor-pearl/75 list-disc list-inside">
              <li>حسابات مخصصة للأفراد والمنشآت.</li>
              <li>ربط الجوال والبريد، وتفعيل البريد مرة واحدة فقط.</li>
              <li>جاهز للتوسّع مستقبلاً مع OTP عبر SMS أو واتساب.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
