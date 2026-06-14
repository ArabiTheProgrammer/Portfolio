import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import WorkSlider from '../layer/WorkSlider'
import Transition from '../Transition'

const Work = () => {
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
            className="mb-10 grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-end"
          >
            <section>
              <span className="eyebrow">Selected work</span>
              <h1 className="h1 gradient-text">Some projects I have worked on.</h1>
            </section>
            <section className="glass-panel p-6 md:p-8">
              <p className="mb-6 text-base md:text-lg">
                These are the kinds of projects I use to improve my frontend skills: restaurant pages, ecommerce layouts, business websites, and agency-style landing pages.
              </p>
              <Link to="/Contact" className="secondary-link">
                Talk about a project
                <HiArrowRight />
              </Link>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Work
