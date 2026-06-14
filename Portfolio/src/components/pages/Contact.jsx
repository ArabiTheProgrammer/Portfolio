import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithub, FaFacebookF } from 'react-icons/fa'
import Transition from '../Transition'

const Contact = () => {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      subject: formData.get('subject')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const rawResponse = await response.text()
      let data = null

      if (rawResponse) {
        try {
          data = JSON.parse(rawResponse)
        } catch {
          data = { message: rawResponse }
        }
      }

      if (!response.ok) {
        const fallbackMessage =
          response.status === 404
            ? 'The contact API is not available here yet. If you are testing locally, run this with Vercel dev or deploy it to Vercel.'
            : 'Something went wrong while sending your message.'

        throw new Error(data?.message || fallbackMessage)
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Your message was sent successfully.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Transition />
      <main className="section-shell flex items-center">
        <div className="section-container grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">Contact</span>
            <h1 className="h1 h-[145px] gradient-text">Want to work together?</h1>
            <p className="mb-8 max-w-xl text-base md:text-lg">
              Send me the project details, your deadline, and any design or reference you already have. I will reply with what I can do.
            </p>
            <div className="grid gap-3 text-sm">
              <a className="glass-panel flex flex-col gap-2 p-4 transition hover:border-teal-200/40 sm:flex-row sm:items-center sm:justify-between" href="mailto:mdjalaluddinarabi@gmail.com">
                <span className="text-slate-400">Email</span>
                <span className="break-all font-semibold text-white">mdjalaluddinarabi@gmail.com</span>
              </a>
              <a className="glass-panel flex flex-col gap-2 p-4 transition hover:border-teal-200/40 sm:flex-row sm:items-center sm:justify-between" href="https://github.com/ArabiTheProgrammer" target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2 text-slate-400"><FaGithub /> GitHub</span>
                <span className="break-all font-semibold text-white">ArabiTheProgrammer</span>
              </a>
              <a className="glass-panel flex flex-col gap-2 p-4 transition hover:border-teal-200/40 sm:flex-row sm:items-center sm:justify-between" href="https://www.facebook.com/md.jalal.uddin.arabi/" target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2 text-slate-400"><FaFacebookF /> Facebook</span>
                <span className="font-semibold text-white">Message me</span>
              </a>
            </div>
          </motion.section>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="glass-panel flex w-full flex-col gap-5 p-5 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" name="name" placeholder="Name" className="input" required />
              <input type="email" name="email" placeholder="Email" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" required />
            <textarea name="message" placeholder="Message" className="textarea" required />
            {status.message && (
              <p className={`rounded-xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200' : 'border-rose-300/30 bg-rose-300/10 text-rose-200'}`}>
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-teal-300 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 md:w-max"
            >
              {isSubmitting ? 'Sending...' : "Let's talk"}
              <BsArrowRight className="text-xl transition duration-300 group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </main>
    </>
  )
}

export default Contact
