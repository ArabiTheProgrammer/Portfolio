import Images from './Images'

const projects = [
  {
    title: 'Gericht Restaurant',
    type: 'Restaurant landing page',
    stack: 'React / CSS',
    path: '/Geritch.jpg',
  },
  {
    title: 'Orebi Commerce',
    type: 'Ecommerce interface',
    stack: 'React / Tailwind',
    path: '/Orebi.jpg',
  },
  {
    title: 'Nasir Traders',
    type: 'Business website',
    stack: 'Frontend build',
    path: '/NasirTraders.jpg',
  },
  {
    title: 'Finsweet Clone',
    type: 'Agency website',
    stack: 'HTML / CSS / JS',
    path: '/Finsweet.jpg',
  },
]

const WorkSlider = () => {
  return (
    <div className="grid auto-rows-auto gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20 ${
            index === 0 ? 'sm:row-span-2' : ''
          } ${
            project.title === 'Finsweet Clone' ? 'sm:col-span-2' : ''
          }`}
        >
          <Images
            width={700}
            height={460}
            src={project.path}
            alt={project.title}
            className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
              index === 0
                ? 'h-[310px] sm:h-full sm:min-h-[456px]'
                : project.title === 'Finsweet Clone'
                  ? 'h-[300px] sm:h-[320px]'
                  : 'h-[250px] sm:h-[220px]'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent opacity-90" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-teal-100 backdrop-blur">
              {project.stack}
            </div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">{project.type}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default WorkSlider
