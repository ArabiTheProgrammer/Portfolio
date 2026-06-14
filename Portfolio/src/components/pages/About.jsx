import { motion } from 'framer-motion'
import { FaDownload, FaReact, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import Transition from '../Transition'

const skills = [
  { name: 'HTML', level: 'Strong', icon: FaHtml5 },
  { name: 'CSS', level: 'Strong', icon: FaCss3Alt },
  { name: 'JavaScript', level: 'Growing fast', icon: IoLogoJavascript },
  { name: 'React', level: 'Daily stack', icon: FaReact },
  { name: 'Tailwind CSS', level: 'Daily stack', icon: SiTailwindcss },
  { name: 'Next.js', level: 'Learning/building', icon: SiNextdotjs },
  { name: 'Figma', level: 'Design handoff', icon: FaFigma },
]

const details = [
  ['Name', 'MD. Jalal Uddin Arabi'],
  ['Location', 'Bangladesh'],
  ['Focus', 'Frontend development'],
  ['Email', 'mdjalaluddinarabi@gmail.com'],
  ['Languages', 'English, Bangla, Hindi'],
  ['Availability', 'Open to freelance work'],
]

const About = () => {
  return (
    <>
      <Transition />
      <main className="section-shell">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65 }}
            className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]"
          >
            <section>
              <span className="eyebrow">About me</span>
              <h1 className="h1 md:h-[100px] lg:h-[143px] xl:h-[210px] gradient-text">I am learning by building real projects.</h1>
              <p className="mb-6 max-w-2xl">
                I started with HTML, CSS, and JavaScript, then moved into React and Tailwind CSS. I am still improving every project, but I care about the basics: spacing, responsive layout, readable code, and pages that do what they are supposed to do.
              </p>
              <a href="mailto:mdjalaluddinarabi@gmail.com" className="primary-link">
                Hire me
                <FaDownload />
              </a>
            </section>

            <section className="glass-panel p-5 md:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-slate-950/30 p-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
                    <p className="mt-2 text-sm font-semibold text-white md:text-base">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            <div className="glass-panel p-6 xl:col-span-1">
              <span className="text-5xl font-black text-white">10+</span>
              <p className="mt-3 text-sm">Practice and portfolio projects, including landing pages, business sites, and ecommerce-style UI.</p>
            </div>
            <div className="glass-panel p-6 xl:col-span-1">
              <span className="text-5xl font-black text-white">3+</span>
              <p className="mt-3 text-sm">Years spent learning frontend development and building small projects.</p>
            </div>
            <div className="glass-panel p-6 md:col-span-2">
              <h2 className="mb-5 text-2xl font-bold text-white">Core stack</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map(({ name, level, icon: Icon }) => (
                  <div key={name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/30 p-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-300/10 text-xl text-teal-200">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{name}</h3>
                      <p className="text-xs text-slate-400">{level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  )
}

export default About
