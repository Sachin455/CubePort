import { EXPERIENCES } from "../../constants"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      delay: delay,
      ease: "easeOut"
    },
  },
});


export const Experience = ({ isLoaded }) => {
  return (
    <section className="py-20  border-neutral-800 bg-white/70 backdrop-blur">
      <motion.h2
            variants={container(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        className="text-4xl font-thin text-center mb-16 text-gray-900"
      >
        Experience
      </motion.h2>

      <motion.div
            variants={container(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        className="space-y-12 max-w-5xl mx-auto px-6"
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={container(0.5)}
            whileInView="visible"
            viewport={{ once: true }}
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
