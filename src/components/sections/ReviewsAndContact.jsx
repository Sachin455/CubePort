import { useState } from "react";
import { motion } from "framer-motion";
import { MdStar, MdStarBorder } from "react-icons/md";
import emailjs from 'emailjs-com';
import { RevealOnScroll } from "../RevealOnScroll";

const REVIEWS = [
  {
    id: 1,
    name: "Emily Carter",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    review: "Absolutely loved working with Sachin! Super smooth process and the result exceeded expectations. Highly recommended!"
  },
  {
    id: 2,
    name: "Daniel Brooks",
    avatar: "https://i.pravatar.cc/100?img=22",
    rating: 4,
    review: "Great communication and fast delivery. There's room for improvement, but I'm definitely coming back!"
  },
  {
    id: 3,
    name: "Sophia Kim",
    avatar: "https://i.pravatar.cc/100?img=33",
    rating: 5,
    review: "Phenomenal work. Creative, efficient, and detail-oriented. I loved how polished the final product was!"
  }
];

const renderStars = (rating) =>
  Array(5).fill().map((_, i) =>
    i < rating ? (
      <MdStar key={i} className="text-yellow-400 text-lg" />
    ) : (
      <MdStarBorder key={i} className="text-yellow-300 text-lg" />
    )
  );

export const ReviewsAndContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ww8jo4o",
      "template_5e6aa4n",
      e.target,
      "XVmnBxgz4Jh_c1wfC"
    )
    .then(() => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => alert("Oops! Something went wrong. Please try again"));
  };

  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50">
      {/* Reviews Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-14">Client Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-200"
                  />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{review.name}</p>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 font-light tracking-tight">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 sm:px-6 lg:px-20 py-10 w-full">
          <div className="w-full max-w-2xl mx-auto bg-white/60 p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 backdrop-blur">
            <RevealOnScroll>
              <div className="w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Get In Touch
                </h2>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input 
                      type="text"  
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Name"
                      onChange={(e) => setFormData({...formData, name:e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email"  
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@gmail.com"
                      onChange={(e) => setFormData({...formData, email:e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <textarea   
                      id="message" 
                      name="message" 
                      required 
                      value={formData.message}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Message..."
                      rows="4"
                      onChange={(e) => setFormData({...formData, message:e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};