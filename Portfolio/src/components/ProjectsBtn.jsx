import { Link } from 'react-router'
import { HiArrowRight } from "react-icons/hi";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-[5]">
      <Link to="/Work" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-300 hover:text-slate-950">
        View selected work
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:translate-x-1">
          <HiArrowRight className="text-xl" />
        </span>
      </Link>
    </div>
  )
}

export default ProjectsBtn
