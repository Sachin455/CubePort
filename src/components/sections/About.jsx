import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TypewriterLoop from "./TypeWriter";

export const About = () => {
  const skills = ["Chess", "Programming", "Music", "Gaming", "Maths", "Travelling"];
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  useEffect(() => {
    // Animate the progress bars after component mounts
    const timer = setTimeout(() => {
      setProgressValues([85, 82, 80]); // 80 represents 3.2 GPA (scaled to 100 for visualization)
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12">
      <section
        id="about"
        className="w-full bg-gradient-to-br from-white/80 to-blue-50/70 p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-lg"
      >
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-inter text-4xl sm:text-5xl font-light tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Education Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* Left Side - Skills & Progress Graph */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="font-inter text-sm sm:text-base text-neutral-600 mb-3 uppercase tracking-wider">
                My Hobbies Are
              </h3>
              <div className="font-inter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-tight text-transparent mb-8">
                <TypewriterLoop words={skills} />
              </div>
              
              {/* Animated Progress Graph */}
              <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Academic Progress</h4>
                <div className="space-y-6">
                  {[
                    { label: "High School", value: progressValues[0], color: "from-blue-400 to-blue-600" },
                    { label: "College (+2)", value: progressValues[1], color: "from-purple-400 to-purple-600" },
                    { label: "University", value: progressValues[2], color: "from-pink-400 to-pink-600" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {index === 2 ? `${(item.value * 4 / 100).toFixed(1)} GPA` : `${item.value}%`}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.value}%`, transition: 'width 1.5s ease-out' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Education Timeline */}
            <div className="w-full lg:w-1/2 space-y-8 relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 rounded-full hidden lg:block" />
              
              {/* High School */}
              <div className="relative pl-12 lg:pl-16 group">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 border-4 border-blue-200 transform -translate-x-1/2 group-hover:scale-125 transition-transform hidden lg:block" />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">High School</h3>
                  <p className="text-base text-neutral-700 font-medium">Kavre School, Banepa</p>
                  <p className="text-sm text-blue-600 italic mt-1">Passed with 85%</p>
                  <div className="mt-3 text-sm text-neutral-500">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 rounded-full">2013-2015</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-start mt-2">
                      <span className="text-blue-500 mr-2">•</span>
                      Special interest in algebra, geometry, and Science
                    </p>
                  </div>
                </div>
              </div>

              {/* College */}
              <div className="relative pl-12 lg:pl-16 group">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-purple-500 border-4 border-purple-200 transform -translate-x-1/2 group-hover:scale-125 transition-transform hidden lg:block" />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">College (+2)</h3>
                  <p className="text-base text-neutral-700 font-medium">Khwopa HS School, Bhaktapur</p>
                  <p className="text-sm text-purple-600 italic mt-1">Passed with 82%</p>
                  <div className="mt-3 text-sm text-neutral-500">
                    <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 rounded-full">2015-2017</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Computer Science major with focus on programming fundamentals
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-purple-500 mr-2">•</span>
                      Deepened knowledge in Physics, Calculus, and Probability
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-purple-500 mr-2">•</span>
                      Participated in inter-college science symposiums
                    </p>
                  </div>
                </div>
              </div>

              {/* University */}
              <div className="relative pl-12 lg:pl-16 group">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-pink-500 border-4 border-pink-200 transform -translate-x-1/2 group-hover:scale-125 transition-transform hidden lg:block" />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">University</h3>
                  <p className="text-base text-neutral-700 font-medium">Kathmandu University, Dhulikhel</p>
                  <p className="text-sm text-pink-600 italic mt-1">Passed with 3.2 GPA</p>
                  <div className="mt-3 text-sm text-neutral-500">
                    <span className="inline-block px-2 py-1 bg-pink-50 text-pink-600 rounded-full">2017-2021</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      Bachelor's degree in Computer Science and Engineering
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-pink-500 mr-2">•</span>
                      Specialized in software development and database systems
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-pink-500 mr-2">•</span>
                      Completed projects in web development and mobile applications
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-pink-500 mr-2">•</span>
                      Developed strong problem-solving skills through algorithm studies
                    </p>
                    <p className="flex items-start mt-2">
                      <span className="text-pink-500 mr-2">•</span>
                      Gained practical experience through university lab work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};