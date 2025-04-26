import { HERO_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import { AnimatedCube } from "./AnimatedCube";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Home = ({ isLoaded }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-10 pb-20 px-4 lg:px-10">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left: Hero Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
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
            className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-600 mb-8 lg:mb-0"
          >
            {HERO_CONTENT}
          </motion.p>
          <a href="https://drive.google.com/file/d/1EG0vFlrI5G7PvSHlAmsybF1E_ls09yvn/view?usp=sharing"> 
        <motion.button 
                    variants={container(1.5)}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
          type="button" 
          className=" mt-8 relative overflow-hidden w-full max-w-xs bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 px-10 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border border-blue-100 hover:border-blue-200 group"
        >
          <span className="relative z-10">
            Resume
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
          </a>
                </div>

        {/* Right: Animated Cube */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatedCube />
        </div>
      </div>
    </section>
  );
};