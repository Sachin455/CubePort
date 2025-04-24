import { EXPERIENCES } from "../../constants"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = (delay) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
})

export const Experience = ({ isLoaded }) => {
  return (
    <section className="py-20 border-b border-neutral-800 bg-white/70 backdrop-blur">
      <motion.h2
        variants={item(0)}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="text-4xl font-thin text-center mb-16 text-gray-900"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="space-y-12 max-w-5xl mx-auto px-6"
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={item(index * 0.2)}
            className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition hover:shadow-lg"
          >
            {/* Left Side - Year */}
            <div className="lg:w-1/4 text-sm text-sky-600 font-medium">{exp.year}</div>

            {/* Right Side - Content */}
            <div className="lg:w-3/4">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}
                <span className="text-sky-500 font-normal"> @ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-sky-100 text-sky-800 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
