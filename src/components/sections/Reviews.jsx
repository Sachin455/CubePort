import { MdStar, MdStarBorder } from "react-icons/md";
import { motion } from "framer-motion";

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
    review: "Great communication and fast delivery. There’s room for improvement, but I’m definitely coming back!"
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

export const Reviews = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8" id="reviews">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-14">Client Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </section>
  );
};
