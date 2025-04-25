import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TypewriterLoop from "./TypeWriter";

export const About = () => {
  const skills = ["Chess", "Programming", "Music", "Gaming", "Maths", "Travelling"];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Using placeholder images (replace with your actual imports)
  const educationPhotos = [
    {
      id: "highschool",
      img: "https://www.ucps.k12.nc.us/cms/lib/NC01910453/Centricity/Domain/3740/Exterior-CHS-MMG.jpg",
      alt: "Kavre School, Banepa",
      caption: "My High School Campus"
    },
    {
      id: "college",
      img: "https://wms.edigitalnepal.com/wms/files/ws-profile/1678949042195_fdaa1729-2c7e-46e9-bc71-6aa8e8a71559.jpg",
      alt: "Khwopa HS School, Bhaktapur",
      caption: "College Days at Khwopa"
    },
    {
      id: "university",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Kathmandu_University.jpg",
      alt: "Kathmandu University",
      caption: "University Life at KU"
    }
  ];

  const educationDetails = [
    {
      id: "highschool",
      title: "High School",
      institution: "Kavre School, Banepa",
      score: "85%",
      period: "2013-2015",
      description: `My high school years at Kavre School in Banepa were formative in developing my passion for analytical thinking. I discovered my love for mathematics and science.`,
      color: "blue"
    },
    {
      id: "college",
      title: "College (+2)",
      institution: "Khwopa HS School, Bhaktapur",
      score: "82%",
      period: "2015-2017",
      description: `At Khwopa Higher Secondary School, I pursued Computer Science as my major, which marked my first formal introduction to programming.`,
      color: "purple"
    },
    {
      id: "university",
      title: "University",
      institution: "Kathmandu University, Dhulikhel",
      score: "3.2 GPA",
      period: "2018-2022",
      description: `My Bachelor's degree in Computer Science and Engineering at Kathmandu University transformed my theoretical knowledge into practical skills. The program offered comprehensive training in software development, with particular emphasis on database systems and algorithm design.`,
      color: "pink"
    }
  ];

  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % educationPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
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

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Side - Photo Carousel */}
            <div className="w-full lg:w-1/2 h-[500px]"> {/* Fixed height */}
              <div className="relative h-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
                {educationPhotos.map((photo, index) => (
                  <div 
                    key={photo.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentPhotoIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    <img 
                      src={photo.img} 
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/800x500?text=School+Image";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white font-medium text-lg">{photo.caption}</p>
                      <p className="text-white/80 text-sm mt-1">
                        {educationDetails.find(edu => edu.id === photo.id)?.institution}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {educationPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentPhotoIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - All Education Descriptions */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white/80 p-8 rounded-xl shadow-sm border border-gray-200 h-full">
                
                <div className="space-y-8">
                  {educationDetails.map((edu) => (
                    <div key={edu.id} className="group">
                      <div className="flex items-center mb-3">
                        <h4 className="text-lg font-medium text-gray-800">{edu.title}</h4>
                        <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
                          edu.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          edu.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-pink-100 text-pink-600'
                        }`}>
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-base text-neutral-700 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-neutral-500 mb-4">{edu.period}</p>
                      <div className="prose prose-sm max-w-none text-gray-600">
                        <p className="leading-relaxed">{edu.description}</p>
                      </div>
                      {edu.id !== "university" && (
                        <div className={`w-full h-0.5 ${
                          edu.color === 'blue' ? 'bg-gradient-to-r from-blue-100 to-blue-50' :
                          edu.color === 'purple' ? 'bg-gradient-to-r from-purple-100 to-purple-50' :
                          'bg-gradient-to-r from-pink-100 to-pink-50'
                        } mt-6`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};