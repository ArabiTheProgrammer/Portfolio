import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiEnvelope,
  } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: HiHome },
  { to: '/About', label: 'About', icon: HiUser },
  { to: '/Service', label: 'Services', icon: HiViewColumns },
  { to: '/Work', label: 'Work', icon: HiRectangleGroup },
  { to: '/Contact', label: 'Contact', icon: HiEnvelope },
];

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-[560px] rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 shadow-2xl shadow-black/35 backdrop-blur-2xl xl:inset-x-auto xl:left-8 xl:top-1/2 xl:bottom-auto xl:w-auto xl:-translate-y-1/2 xl:px-2">
      <div className="flex items-center justify-between gap-1 xl:flex-col xl:gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            title={label}
            className={({ isActive }) =>
              `group relative flex h-12 min-w-12 items-center justify-center rounded-full px-3 text-xl transition duration-300 ${
                isActive
                  ? 'bg-teal-300 text-slate-950 shadow-lg shadow-teal-300/25'
                  : 'text-white/65 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <Icon />
            <span className="sr-only">{label}</span>
            <span className="pointer-events-none absolute left-16 hidden rounded-full border border-white/10 bg-slate-950/90 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-xl transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 xl:block">
              {label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
