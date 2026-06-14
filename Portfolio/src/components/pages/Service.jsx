import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import ServiceSlider from '../layer/SeviceSlider'
import Transition from '../Transition'

const Service = () => {
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
            className="mb-10 grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-end"
          >
            <section>
              <span className="eyebrow">Services</span>
              <h1 className="h1 md:h-[54px] lg:h-[80px] xl:h-[144px] gradient-text">What I can help you build.</h1>
            </section>
            <section className="glass-panel p-6 md:p-8">
              <p className="mb-6 text-base md:text-lg">
                I can build responsive websites, React pages, Tailwind layouts, and simple animations. If you already have a design, I can turn it into a working frontend. If you do not, I can help shape the layout first.
              </p>
              <Link to="/Contact" className="secondary-link">
                Discuss a project
                <HiArrowRight />
              </Link>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="overflow-visible"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Service
