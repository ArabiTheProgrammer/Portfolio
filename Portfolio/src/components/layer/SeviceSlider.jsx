import { FaReact, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si'

const serviceData = [
  {
    icon: <FaReact />,
    title: 'React frontends',
    description: 'React pages with reusable components, routing, forms, and simple state handling.',
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwind CSS',
    description: 'CSS that makes layouts that work properly on phones, tablets, and desktop screens.',
  },
  {
    icon: <div className="flex gap-2"><IoLogoJavascript /></div>,
    title: 'JavaScript',
    description: 'Small JavaScript interactions on the web page.',
  },
  {
    icon: <SiNextdotjs />,
    title: 'Next.js builds',
    description: 'Next.js pages and app structure for projects that need more than a basic React setup.',
  },
  {
    icon: <FaFigma />,
    title: 'Figma to code',
    description: 'Turning a Figma design into a responsive frontend as close as possible.',
  },
  {
    icon: <SiFramer />,
    title: 'Framer Motion',
    description: 'Page transitions, hover effects, and simple motion where it actually helps.',
  },
]

const SeviceSlider = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {serviceData.map((item) => (
        <article
          key={item.title}
          className="group glass-panel flex min-h-[255px] flex-col justify-between p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200/40"
        >
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-300/10 text-3xl text-teal-200 transition duration-300 group-hover:bg-teal-300 group-hover:text-slate-950">
              {item.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
          <span className="mt-6 h-px w-full bg-gradient-to-r from-teal-200/45 via-white/10 to-transparent" />
        </article>
      ))}
    </div>
  )
}

export default SeviceSlider
