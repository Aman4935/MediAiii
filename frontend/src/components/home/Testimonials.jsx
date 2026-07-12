import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aman Singh",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "MediAI helped me understand my blood test report in seconds. The interface is clean and extremely easy to use.",
  },
  {
    name: "Priya Sharma",
    role: "Working Professional",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "Booking appointments and storing my medical reports has never been easier. Everything is available in one place.",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The AI explanation of my reports was simple to understand. I would definitely recommend MediAI to others.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Loved By Our Users
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Thousands of users trust MediAI for managing their healthcare
            digitally and securely.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex gap-1 text-yellow-400">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8 mt-6 italic">
                "{item.review}"
              </p>

              <div className="flex items-center mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div className="ml-4">

                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;