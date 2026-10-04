import { useMemo, useState } from 'react'
import './App.css'

type Brand = {
  name: string
  short: string
}

const brands: Brand[] = [
  { name: 'ایران خودرو', short: 'IK' },
  { name: 'سایپا', short: 'SA' },
  { name: 'پژو', short: 'PE' },
  { name: 'رنو', short: 'RE' },
  { name: 'کیا', short: 'KI' },
  { name: 'هیوندای', short: 'HY' },
  { name: 'تویوتا', short: 'TO' },
  { name: 'نیسان', short: 'NI' },
  { name: 'BMW', short: 'BMW' },
  { name: 'Mercedes-Benz', short: 'MB' },
]

const menuItems = [
  { id: 'home', label: 'خانه', icon: 'home' },
  { id: 'info', label: 'اطلاعات', icon: 'info' },
  { id: 'learn', label: 'آموزش', icon: 'book' },
  { id: 'account', label: 'حساب', icon: 'user' },
  { id: 'diagram', label: 'دیاگرام', icon: 'diagram' },
  { id: 'ads', label: 'تبلیغات', icon: 'ads' },
]

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (name === 'home') {
    return (
      <svg {...common}>
        <path d="M3 10.8 12 3l9 7.8" />
        <path d="M5.5 9.8V21h13V9.8" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    )
  }

  if (name === 'info') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10.5V16" />
        <path d="M12 7.5h.01" />
      </svg>
    )
  }

  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M4 5.5v16" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </svg>
    )
  }

  if (name === 'user') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    )
  }

  if (name === 'diagram') {
    return (
      <svg {...common}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7 6h10" />
        <path d="m7 7 3.5 8" />
        <path d="m17 7-3.5 8" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  )
}

function App() {
  const [activeMenu, setActiveMenu] = useState('home')
  const [search, setSearch] = useState('')

  const filteredBrands = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return brands

    return brands.filter((brand) =>
      brand.name.toLowerCase().includes(query),
    )
  }, [search])

  return (
    <div className="app-shell">
      <div className="app-screen">

        {/* Header */}
        <header className="app-header">
          <div className="header-brand">
            <div className="logo-mark">
              MC
            </div>

            <div>
              <div className="logo-title">MapCircuit</div>
              <div className="logo-subtitle">
                ECU • Automotive
              </div>
            </div>
          </div>

          <button
            className="profile-button"
            aria-label="حساب کاربری"
            onClick={() => setActiveMenu('account')}
          >
            <Icon name="user" />
          </button>
        </header>

        {/* Main */}
        <main className="main-content">

          {/* Welcome */}
          <section className="welcome-section">
            <span className="welcome-small">
              خوش آمدید
            </span>

            <h1>
              چه چیزی نیاز دارید؟
            </h1>

            <p>
              خودرو، ECU، دیاگرام و مطالب آموزشی را پیدا کنید.
            </p>
          </section>

          {/* Search */}
          <section className="search-container">
            <div className="search-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی خودرو یا ECU..."
              type="search"
            />

            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch('')}
              >
                ×
              </button>
            )}
          </section>

          {/* Quick actions */}
          <section className="quick-actions">
            <button
              className="quick-action"
              onClick={() => setActiveMenu('diagram')}
            >
              <div className="quick-icon blue">
                <Icon name="diagram" />
              </div>

              <div>
                <strong>دیاگرام</strong>
                <span>نقشه‌های سیم‌کشی</span>
              </div>

              <b>‹</b>
            </button>

            <button
              className="quick-action"
              onClick={() => setActiveMenu('learn')}
            >
              <div className="quick-icon light-blue">
                <Icon name="book" />
              </div>

              <div>
                <strong>آموزش</strong>
                <span>مطالب تخصصی ECU</span>
              </div>

              <b>‹</b>
            </button>
          </section>

          {/* Brands */}
          <section className="brands-section">

            <div className="section-heading">
              <div>
                <span>خودرو</span>
                <h2>انتخاب شرکت خودروسازی</h2>
              </div>

              <button className="see-all">
                همه
              </button>
            </div>

            <div className="brand-grid">
              {filteredBrands.map((brand) => (
                <button
                  className="brand-card"
                  key={brand.name}
                >
                  <div className="brand-logo">
                    {brand.short}
                  </div>

                  <span>{brand.name}</span>

                  <small>›</small>
                </button>
              ))}
            </div>

            {filteredBrands.length === 0 && (
              <div className="empty-result">
                <div className="empty-icon">
                  ?
                </div>

                <strong>
                  نتیجه‌ای پیدا نشد
                </strong>

                <span>
                  عبارت دیگری را جستجو کنید.
                </span>
              </div>
            )}
          </section>

          {/* Featured */}
          <section className="featured-card">
            <div className="featured-content">
              <span>MAPCIRCUIT</span>

              <h2>
                مرجع تخصصی ECU
              </h2>

              <p>
                تعمیرات، سیم‌کشی، دیاگرام و فایل‌های ECU
              </p>

              <button
                onClick={() => setActiveMenu('info')}
              >
                مشاهده اطلاعات
                <span>←</span>
              </button>
            </div>

            <div className="featured-pattern">
              <div className="circuit-line line-1" />
              <div className="circuit-line line-2" />
              <div className="circuit-line line-3" />

              <div className="circuit-node node-1" />
              <div className="circuit-node node-2" />
              <div className="circuit-node node-3" />
            </div>
          </section>

          <div className="bottom-space" />
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-navigation">
          {menuItems.map((item) => {
            const active = activeMenu === item.id

            return (
              <button
                key={item.id}
                className={`nav-button ${
                  active ? 'active' : ''
                }`}
                onClick={() => setActiveMenu(item.id)}
              >
                <div className="nav-icon">
                  <Icon name={item.icon} />
                </div>

                <span>
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>

      </div>
    </div>
  )
}

export default App