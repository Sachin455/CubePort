import aboutImg from "../../assets/about.jpg"
import { ABOUT_TEXT } from "../../constants"
import { RevealOnScroll } from "../RevealOnScroll"
import TypewriterLoop from "./TypeWriter"

export const About = () => {
  const skills = ["React", "Python", "MySQL", "MongoDB", "Node.js", "Flutter", "Postgres"]

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <section
        id="about"
        className="w-full bg-white/60 p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 backdrop-blur"
      >
        <RevealOnScroll>
          <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-thin tracking-tight text-center  mb-10">
            About Me
          </h2>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            {/* Left Side - Skills & Typewriter */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="font-inter text-sm sm:text-base text-neutral-600 mb-2">
                Technologies I Use
              </h3>
              <div className="font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl tracking-tight text-transparent mb-6">
                <TypewriterLoop words={skills} />
              </div>
            </div>

            {/* Right Side - About Text */}
            <div className="w-full lg:w-1/2">
              <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}
