import { useMemo, useState } from 'react'
import './App.css'

type CarBrand = {
  name: string
  icon: string
}

const carBrands: CarBrand[] = [
  { name: 'ایران خودرو', icon: '🚗' },
  { name: 'سایپا', icon: '🚙' },
  { name: 'پژو', icon: '🔧' },
  { name: 'رنو', icon: '⚙️' },
  { name: 'کیا', icon: '🚘' },
  { name: 'هیوندای', icon: '🚗' },
  { name: 'تویوتا', icon: '🚕' },
  { name: 'BMW', icon: '🏎️' },
  { name: 'Mercedes-Benz', icon: '🚘' },
  { name: 'Volkswagen', icon: '🚗' },
  { name: 'نیسان', icon: '🚙' },
  { name: 'مزدا', icon: '🚗' },
]

function App() {
  const [search, setSearch] = useState('')
  const [activeMenu, setActiveMenu] = useState('خانه')

  const filteredBrands = useMemo(() => {
    const value = search.trim().toLowerCase()

    if (!value) {
      return carBrands
    }

    return carBrands.filter((brand) =>
      brand.name.toLowerCase().includes(value),
    )
  }, [search])

  const menuItems = [
    {
      name: 'خانه',
      icon: '⌂',
    },
    {
      name: 'اطلاعات کاربردی',
      icon: '⚙',
    },
    {
      name: 'مطالب آموزشی',
      icon: '▤',
    },
    {
      name: 'حساب کاربری',
      icon: '♙',
    },
    {
      name: 'دیاگرام',
      icon: '⌁',
    },
    {
      name: 'تبلیغات',
      icon: '▣',
    },
  ]

  const handleMenuClick = (name: string) => {
    setActiveMenu(name)

    if (name !== 'خانه') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="app">
      <header className="top-bar">
        <div className="brand">
          <div className="brand-logo">MC</div>

          <div className="brand-text">
            <strong>MapCircuit</strong>
            <span>ECU & Automotive</span>
          </div>
        </div>

        <button
          className="search-button"
          onClick={() => {
            document.getElementById('search-input')?.focus()
          }}
          aria-label="جستجو"
        >
          🔍
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-badge">MAPCIRCUIT</div>

            <h1>تخصص در دنیای ECU</h1>

            <p>
              اطلاعات فنی، آموزش، دیاگرام و منابع تخصصی تعمیرات خودرو
            </p>

            <button className="hero-button">
              شروع کنید
              <span>←</span>
            </button>
          </div>
        </section>

        <section className="search-section">
          <div className="section-title">
            <div>
              <span className="section-label">SEARCH</span>
              <h2>جستجو</h2>
            </div>
          </div>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              id="search-input"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="نام شرکت یا خودرو را جستجو کنید..."
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch('')}
                aria-label="پاک کردن جستجو"
              >
                ×
              </button>
            )}
          </div>
        </section>

        <section className="brands-section">
          <div className="section-title">
            <div>
              <span className="section-label">AUTOMOTIVE</span>
              <h2>انتخاب شرکت خودروسازی</h2>
            </div>

            <span className="brand-count">
              {filteredBrands.length} شرکت
            </span>
          </div>

          <div className="brands-grid">
            {filteredBrands.map((brand) => (
              <button
                className="brand-card"
                key={brand.name}
                onClick={() => {
                  alert(`شرکت ${brand.name} انتخاب شد`)
                }}
              >
                <span className="brand-icon">{brand.icon}</span>

                <span className="brand-name">
                  {brand.name}
                </span>

                <span className="brand-arrow">←</span>
              </button>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="empty-state">
              <div>🔎</div>

              <h3>موردی پیدا نشد</h3>

              <p>
                نام شرکت یا خودرو را با عبارت دیگری جستجو کنید.
              </p>
            </div>
          )}
        </section>

        <section className="quick-section">
          <div className="section-title">
            <div>
              <span className="section-label">MAPCIRCUIT</span>
              <h2>دسترسی سریع</h2>
            </div>
          </div>

          <div className="quick-grid">
            <button className="quick-card">
              <span>🧰</span>
              <strong>تعمیرات ECU</strong>
              <small>اطلاعات فنی</small>
            </button>

            <button className="quick-card">
              <span>📚</span>
              <strong>آموزش‌ها</strong>
              <small>مطالب تخصصی</small>
            </button>

            <button className="quick-card">
              <span>⌁</span>
              <strong>دیاگرام</strong>
              <small>نقشه‌های سیم‌کشی</small>
            </button>

            <button className="quick-card">
              <span>💾</span>
              <strong>دامپ ECU</strong>
              <small>فایل‌های تخصصی</small>
            </button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-logo">MapCircuit</div>

          <p>
            مرجع تخصصی ECU، الکترونیک خودرو و آموزش تعمیرات
          </p>

          <span>© 2026 MapCircuit</span>
        </footer>
      </main>

      <nav className="bottom-nav">
        {menuItems.map((item) => {
          const isActive = activeMenu === item.name

          return (
            <button
              key={item.name}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>

              <span className="nav-label">
                {item.name}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default App