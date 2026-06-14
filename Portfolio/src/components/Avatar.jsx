import PropTypes from 'prop-types'
import Images from './layer/Images'
import Me from '../../public/avatar.jpeg'

const Avatar = ({className}) => {
  return (
    <div className={`relative z-[5] ${className}`}>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-300/25 via-white/5 to-rose-300/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/35">
        <Images className="aspect-[4/5] w-full rounded-[1.45rem] object-cover translate-z-0" src={Me} alt="Jalal Uddin Arabi"/>
      </div>
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
}

export default Avatar
