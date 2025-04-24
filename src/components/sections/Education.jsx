import { motion } from "framer-motion";

const educationData = [
  {
    level: "High School",
    school: "Kavre School",
    location: "Banepa",
    result: "Passed with 85%",
  },
  {
    level: "Higher Secondary Education (+2)",
    school: "Khwopa Higher Secondary School",
    location: "Bhaktapur",
    duration: "2015 – 2017",
    result: "Passed with 82%",
  },
  {
    level: "Bachelor’s Degree",
    school: "Kathmandu University",
    location: "Dhulikhel",
    duration: "2018 – 2022",
    major: "Computer Science",
    result: "GPA: 3.2",
  },
];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Education = ({ isLoaded }) => {
  return (
    <section className="py-20 border-b border-neutral-800 bg-white/70 backdrop-blur">
      <h2 className="text-4xl font-thin text-center mb-16 text-gray-900">Education</h2>

      <motion.div
        variants={container(0)}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="space-y-10 max-w-5xl mx-auto px-6"
      >
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900">{edu.level}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {edu.school}, {edu.location}
              {edu.duration && ` (${edu.duration})`}
            </p>
            {edu.major && (
              <p className="text-sm text-gray-600 mt-1">Major: {edu.major}</p>
            )}
            <p className="text-sm text-sky-700 mt-2 font-medium">{edu.result}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
