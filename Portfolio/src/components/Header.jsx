import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link, useRoutes } from 'react-router-dom'
import Logo from '../../public/LogoForPortfolio.png'
import Images from './layer/Images'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20 '>

            <Images className="xl:ml-10 lg:ml-4" src={Logo} alt="Logo.png"/>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li className="z-10"><Link to="https://www.facebook.com/md.jalal.uddin.arabi/" offset={50} duration={500}><FaFacebookF /></Link></li>
                <li className="z-30"><Link className="z-30" to="https://github.com/ArabiTheProgrammer" offset={50} duration={500}><FaGithub className="z-30" /></Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-20 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-10'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                    <li><Link to="https://www.facebook.com/md.jalal.uddin.arabi/" onClick={closeNav} offset={50} duration={500}>FaceBook</Link></li>
                    <li ><Link to="https://github.com/ArabiTheProgrammer" onClick={closeNav} offset={50} duration={500}>Github</Link></li>
                </ul>


            </motion.div>



        </div>
  )
}

export default Header