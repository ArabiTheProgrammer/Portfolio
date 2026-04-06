import React, { useState } from 'react'
import Circles from '../layer/Circles'
import { BsArrowRight } from "react-icons/bs";
import Transition from '../Transition';
import { motion } from 'framer-motion';

const Contact = () => { 
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      subject: formData.get('subject')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const rawResponse = await response.text();
      let data = null;

      if (rawResponse) {
        try {
          data = JSON.parse(rawResponse);
        } catch {
          data = { message: rawResponse };
        }
      }

      if (!response.ok) {
        const fallbackMessage =
          response.status === 404
            ? 'The contact API is not available here yet. If you are testing locally, run this with Vercel dev or deploy it to Vercel.'
            : 'Something went wrong while sending your message.';

        throw new Error(data?.message || fallbackMessage);
      }

      form.reset();
      setStatus({
        type: 'success',
        message: 'Your message was sent successfully.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <>
      <Transition />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
    <div className="h-full font-Poppins">
      <div className="container py-32 mx-auto text-center xl:text-left flex items-center justify-center h-full ">
        <div className="flex flex-col max-w-[700px] w-full">
          <h2 className="h2 text-center mb-12 text-white">Let's <span className="text-accent">connect.</span></h2>
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col text-white gap-6 w-full mx-auto"
          >
              <div className="flex flex-col md:flex-row gap-6 w-full">
                 <input type="text" name="name" placeholder='Name' className="input" required/>
                 <input type="email" name="email" placeholder='Email' className="input" required/>
              </div>
              <input type="text" name="subject" placeholder='Subject' className="input" required />
              <textarea name="message" placeholder='Message' className="textarea" required></textarea>
              {status.message && (
                <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                  {status.message}
                </p>
              )}
              <>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                    {isSubmitting ? 'Sending...' : "Let's Talk"}
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
                </button>
              </>
          </form>
        </div>
      </div>
      <Circles/>
    </div>
      </motion.div>
    </>
  )
}

export default Contact
