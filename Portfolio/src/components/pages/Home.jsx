import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import ParticlesContainer from '../ParticlesContainer'
import Transition from '../Transition'

const skills = ['React', 'Tailwind CSS', 'JavaScript', 'Figma', 'Next.js']
const stats = [
  { value: '10+', label: 'Projects' },
  { value: '2+', label: 'Years practice' },
  { value: '5', label: 'Main tools' },
]

const Home = () => {
  return (
    <>
      <Transition />
      <main className="section-shell overflow-hidden flex items-center">
        <ParticlesContainer />
        <div className="section-container grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center xl:text-left"
          >
            <div className="eyebrow mx-auto xl:mx-0">Frontend developer</div>

            <h1 className="mb-6 text-[42px] font-black leading-[0.98] text-white md:text-[70px] lg:text-[86px]">
              Hi, I am Jalal.
              <span className="gradient-text block">I make websites.</span>
            </h1>

            <div className="mb-6 min-h-[34px] text-lg font-semibold text-teal-100 md:text-2xl">
              <TypeAnimation
                speed={55}
                repeat={Infinity}
                sequence={[
                  'React and Tailwind CSS projects.',
                  1800,
                  'Landing pages, portfolios, and business sites.',
                  1800,
                  'Clean layouts that work on mobile and desktop.',
                  1800,
                ]}
              />
            </div>

            <p className="mx-auto mb-8 max-w-2xl text-base text-slate-300 md:text-lg xl:mx-0">
              I am MD. Jalal Uddin Arabi, a frontend developer from Bangladesh. I work mostly with React, Tailwind CSS, JavaScript, and Figma. I like building pages that are easy to use, responsive, and not overcomplicated.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3 xl:justify-start">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row xl:justify-start">
              <Link to="/Work" className="primary-link">
                See my work
                <HiArrowRight />
              </Link>
              <Link to="/Contact" className="secondary-link">
                Contact me
              </Link>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="absolute -left-8 top-10 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl md:block">
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">Currently working as a</span>
              <span className="text-lg font-bold text-white">Frontend Developer</span>
            </div>
            <Avatar />
            <div className="glass-panel mt-5 grid grid-cols-3 gap-2 p-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-slate-950/35 px-3 py-4 text-center">
                  <span className="block text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-xs text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </main>
    </>
  )
}

export default Home
