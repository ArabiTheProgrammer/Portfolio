import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../public/LogoForPortfolio.png'
import Images from './layer/Images'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/Service', label: 'Services' },
  { to: '/Work', label: 'Work' },
  { to: '/Contact', label: 'Contact' },
];

const Header = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: { x: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
        closed: { x: '-100%', transition: { type: 'spring', stiffness: 90, damping: 20 } }
    }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
      <div className="mx-auto flex h-24 max-w-[1180px] items-center justify-between px-5 text-white md:px-10">
        <Link to="/" className="flex gap-3">
          <Images className="h-full w-56 rounded-2xl object-contain" src={Logo} alt="Arabi logo"/>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-teal-200 hover:text-teal-100" href="https://www.facebook.com/md.jalal.uddin.arabi/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-teal-200 hover:text-teal-100" href="https://github.com/ArabiTheProgrammer" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <button onClick={toggleNav} className="z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden" aria-label="Toggle menu">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 z-40 min-h-screen w-full bg-slate-950/95 px-8 pt-28 backdrop-blur-2xl md:hidden"
        >
          <ul className="space-y-5 text-3xl font-bold">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={closeNav}
                  className={({ isActive }) => isActive ? 'text-teal-200' : 'text-white'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-3">
            <a className="secondary-link" href="https://github.com/ArabiTheProgrammer" target="_blank" rel="noreferrer">GitHub</a>
            <a className="secondary-link" href="https://www.facebook.com/md.jalal.uddin.arabi/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
