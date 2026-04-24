import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/EDHAAICON.jpeg'
import { schoolInfo } from '../data/siteContent'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Activities', path: '/activities' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Contact', path: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
      <div className="border-b border-line bg-soft">
        <div className="site-wrap flex min-h-[42px] flex-wrap items-center justify-between gap-2 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          <p>{schoolInfo.tagline}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] sm:text-[11px]">
            <span>{schoolInfo.phone}</span>
            <span>{schoolInfo.addressLine2}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="site-wrap">
          <div className="flex min-h-[92px] items-center justify-between gap-6 py-4">
            <NavLink
              to="/"
              className="flex min-w-0 items-center gap-3 sm:gap-4"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={logo}
                alt="EDHAA PUBLIC SCHOOL logo"
                className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              />
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                  Estd. {schoolInfo.established}
                </div>
                <div className="mt-1 font-serif text-xl tracking-[0.04em] text-ink sm:text-3xl">
                  {schoolInfo.name}
                </div>
              </div>
            </NavLink>

            <button
              type="button"
              className="border border-line px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
            >
              Menu
            </button>

            <div className="hidden items-center gap-8 md:flex">
              <nav className="flex items-center gap-6 text-sm text-muted">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'border-b border-accent pb-1 text-ink'
                        : 'border-b border-transparent pb-1 transition-colors hover:border-line hover:text-ink'
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <NavLink to="/contact" className="button-secondary">
                Admissions
              </NavLink>
            </div>
          </div>

          {menuOpen && (
            <nav className="border-t border-line py-4 md:hidden">
              <div className="flex flex-col gap-4 text-sm text-muted">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => (isActive ? 'text-ink' : 'text-muted')}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="pt-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  Admissions
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="site-wrap py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)]">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
              EDHAA PUBLIC SCHOOL
            </p>
            <p className="mt-4 font-serif text-4xl leading-tight">{schoolInfo.tagline}</p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A calm, purposeful school environment that values learning, character, and
              long-term student growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                Visit
              </p>
              <p className="text-sm leading-7 text-white/80">
                {schoolInfo.addressLine1}
                <br />
                {schoolInfo.addressLine2}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                Enquiries
              </p>
              <p className="text-sm leading-7 text-white/80">
                {schoolInfo.phone}
                <br />
                {schoolInfo.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/50">
          (C) 2026 EDHAA PUBLIC SCHOOL. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
