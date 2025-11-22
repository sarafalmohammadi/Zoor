import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Sparkles,
  LayoutDashboard,
  CalendarPlus,
  ScanLine,
  ShieldCheck,
  Globe2,
  SunMedium,
  MoonStar,
} from 'lucide-react'

const navItems = [
  { to: '/', labelAr: 'الرئيسية', labelEn: 'Home', icon: Sparkles },
  { to: '/org', labelAr: 'لوحة المنشأة', labelEn: 'Org Dashboard', icon: LayoutDashboard },
  { to: '/org/events/new', labelAr: 'إنشاء فعالية', labelEn: 'New Event', icon: CalendarPlus },
  { to: '/scanner', labelAr: 'صفحة الماسح', labelEn: 'Scanner', icon: ScanLine },
  { to: '/admin', labelAr: 'لوحة السوبر أدمن', labelEn: 'Admin', icon: ShieldCheck },
]

export default function RootLayout({ children }) {
  const location = useLocation()
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState('ar')

  useEffect(() => {
    const root = document.documentElement
    dark ? root.classList.add('dark') : root.classList.remove('dark')
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    root.setAttribute('lang', lang)
  }, [dark, lang])

  return (
    <div className="min-h-screen flex bg-zoor-navy text-zoor-pearl">

      {/* ----------------------  SIDEBAR  ---------------------- */}
      <aside className="glass-strong hidden lg:flex w-64 flex-col justify-between p-6 min-h-screen">

        {/* === Logo === */}
        <div>
          <div className="mb-10 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zoor-gradient shadow-neon-aqua" />
            <div>
              <div className="text-base font-semibold tracking-wide">Zoor</div>
              <div className="text-xs text-zoor-pearl/70">QR Events Platform</div>
            </div>
          </div>

          {/* === Navigation === */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const active = location.pathname === item.to
              const Icon = item.icon

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    "group flex items-center gap-3 rounded-xl px-3 py-3 transition-all text-sm",
                    active
                      ? "bg-white/10 border border-white/20 shadow-neon-aqua text-zoor-pearl"
                      : "text-zoor-pearl/70 hover:bg-white/5"
                  ].join(" ")}
                >
                  {/* Icon Box */}
                  <span
                    className={[
                      "flex h-7 w-7 items-center justify-center rounded-lg transition-all",
                      active
                        ? "bg-zoor-gradient text-zoor-navy shadow-neon-aqua"
                        : "bg-black/10 text-zoor-pearl/60"
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  {/* Label */}
                  <span className="truncate font-medium">
                    {lang === "ar" ? item.labelAr : item.labelEn}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* === Language + Theme Switch === */}
        <div className="flex items-center justify-between gap-2 rounded-xl bg-black/25 px-3 py-2 text-xs">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 hover:bg-white/20 transition"
          >
            <Globe2 className="h-4 w-4" />
            <span>{lang === "ar" ? "عربي" : "English"}</span>
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 hover:bg-white/20 transition"
          >
            {dark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            <span>{dark ? "Light" : "Dark"}</span>
          </button>
        </div>

      </aside>

      {/* ----------------------  MAIN CONTENT  ---------------------- */}
      <main className="flex-1 p-4 lg:p-10">
        <div className="glass-panel relative overflow-hidden p-8 rounded-3xl max-w-[1500px] mx-auto">

          {/* Soft Glow (fixed opacity — subtle) */}
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen">
            <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-zoor-pink blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-zoor-aqua blur-3xl" />
          </div>

          {/* Actual page content */}
          <div className="relative">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
