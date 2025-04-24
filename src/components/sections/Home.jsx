import { HERO_CONTENT } from "../../constants"
import { motion } from "framer-motion"
import { AnimatedCube } from "./AnimatedCube"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

export const Home = ({ isLoaded }) => {
  return (
    <div className="min-h-screen pt-16 lg:pt-0 px-4 lg:px-10 flex flex-col justify-center items-center py-50">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-8xl items-center justify-between">
        {/* Left: Hero Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-4">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="font-inter text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight mb-6"
          >
            Hi I'm Sachin Karki
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent mb-4"
          >
           Full Stack Web Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-600"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right: Animated Cube */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0">
          <AnimatedCube />
        </div>
      </div>
    </div>
  )
}
