import { useState, useRef } from "react";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { PROJECTS } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projectRefs = useRef({});
  const [origin, setOrigin] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const selectedProject = PROJECTS.find(project => project.id === selectedId);

  const handleProjectClick = (id, index) => {
    const ref = projectRefs.current[index];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setOrigin({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedId(id);
  };

  return (
    <div className="relative">
      <section className="relative py-25 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-inter pb-12 text-4xl md:text-5xl font-thin tracking-tight text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100"
                whileHover={{ y: -4 }}
                onClick={() => handleProjectClick(project.id, index)}
                layoutId={`card-${project.id}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.5
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.div className="aspect-[5/2] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    layoutId={`image-${project.id}`}
                  />
                </motion.div>

                <div className="p-5">
                  <motion.h3
                    className="font-inter text-xl font-semibold mb-2 text-gray-900"
                    layoutId={`title-${project.id}`}
                  >
                    {project.name}
                  </motion.h3>
                  <p className="font-inter text-gray-600 line-clamp-2 mb-4 font-light tracking-tight">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.slice(0, 2).map(tech => (
                        <span key={tech} className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 2 && (
                        <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <MdArrowOutward className="text-gray-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-100"
                    layoutId={`card-${selectedProject.id}`}
                    initial={{
                      clipPath: `inset(100% 0% 0% 0%)`,
                      opacity: 0
                    }}
                    animate={{
                      clipPath: `inset(0% 0% 0% 0%)`,
                      opacity: 1
                    }}
                    exit={{
                      clipPath: `inset(100% 0% 0% 0%)`,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <motion.button
                      className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 z-10 transition-colors"
                      onClick={() => setSelectedId(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MdClose className="text-2xl text-gray-500" />
                    </motion.button>

                    <div className="grid md:grid-cols-2 gap-0">
                      <motion.div
                        className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden"
                        layoutId={`image-${selectedProject.id}`}
                      >
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <div className="p-6 md:p-8">
                        <motion.h3
                          className="font-inter text-2xl font-semibold mb-4 text-gray-900"
                          layoutId={`title-${selectedProject.id}`}
                        >
                          {selectedProject.name}
                        </motion.h3>
                        <motion.p
                          className="font-inter text-gray-700 mb-6 font-light tracking-tight leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {selectedProject.description}
                        </motion.p>

                        <motion.div
                          className="mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="font-inter font-semibold mb-3 text-gray-900">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies?.map(tech => (
                              <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-inter flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                          >
                            View Code
                            <MdArrowOutward className="text-sm" />
                          </a>

                          {selectedProject.liveLink && (
                            <a
                              href={selectedProject.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-inter flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                              Live Demo
                              <MdArrowOutward className="text-sm" />
                            </a>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
