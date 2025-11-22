
import { Link } from 'react-router-dom'
import { ArrowRight, QrCode, Users, Sparkles, PhoneCall } from 'lucide-react'

function Landing() {
  return (
    <div className="space-y-10">
      <header className="grid gap-8 lg:grid-cols-[1.35fr,1fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-zoor-pearl/70">
            <Sparkles className="h-3 w-3" />
            <span>Zoor • منصة الدعوات الذكية بالـ QR</span>
          </div>
          <h1 className="text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
            أنشئ فعاليتك، أرسل الدعوات بالـ QR، وتابع حضور زوّارك من أي جهاز.
          </h1>
          <p className="text-sm text-zoor-pearl/70">
            Zoor منصة متخصصة في إدارة الدعوات والحضور. تدعم الواتساب والبريد، استيراد ملفات Excel،
            وتصميم دعوات زجاجية مع QR لكل زائر.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/org" className="btn-primary">
              لوحة المنشأة
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/scanner" className="btn-ghost">
              تجربة صفحة الماسح
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-zoor-pearl/60">
            <div className="flex items-center gap-2">
              <QrCode className="h-3.5 w-3.5" />
              <span>QR فريد لكل زائر</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              <span>استيراد الزوار من Excel</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="h-3.5 w-3.5" />
              <span>جاهزة للربط مع WhatsApp Cloud API</span>
            </div>
          </div>
        </div>

        <div className="glass-strong relative mt-2 h-56 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zoor-purple via-zoor-grape to-zoor-navy shadow-neon-pink sm:h-64">
          <div className="absolute inset-0 opacity-60 mix-blend-screen">
            <div className="absolute -left-10 top-4 h-40 w-40 rounded-full bg-zoor-aqua blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-zoor-pink blur-3xl" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-5 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-zoor-pearl/60">دعوة تخرج 1447 هـ</div>
                <div className="text-sm font-semibold">كليات الريان الأهلية</div>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-zoor-gradient shadow-neon-aqua" />
            </div>
            <div className="glass-soft flex items-center justify-between px-4 py-3">
              <div>
                <div className="text-[11px] text-zoor-pearl/60">إجمالي الدعوات المرسلة</div>
                <div className="text-lg font-semibold">1,450</div>
              </div>
              <div className="text-right text-[11px] text-zoor-pearl/60">
                <div>نسبة الحضور 92%</div>
                <div>تم تسجيل الحضور من الجوال فقط.</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 text-xs sm:grid-cols-3">
        <div className="glass-soft p-4">
          <div className="mb-2 text-sm font-semibold">مناسبة واحدة</div>
          <p className="text-zoor-pearl/70">
            استخدم Zoor لعزيمة خاصة، تخرج، أو لقاء عائلي مع عدد زوار محدود ورسائل جاهزة.
          </p>
        </div>
        <div className="glass-soft p-4">
          <div className="mb-2 text-sm font-semibold">منشآت ومدارس</div>
          <p className="text-zoor-pearl/70">
            فعاليات التخرج، اللقاءات المفتوحة، الأيام التعريفية، وورش العمل مع إدارة حضور دقيقة.
          </p>
        </div>
        <div className="glass-soft p-4">
          <div className="mb-2 text-sm font-semibold">شركات تنظيم الفعاليات</div>
          <p className="text-zoor-pearl/70">
            أنشئ فعاليات لعملائك، خصص الدعوات، وامنح كل عميل لوحة خاصة بإحصائيات الحضور.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Landing
