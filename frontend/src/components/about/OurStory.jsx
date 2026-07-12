import { motion } from "framer-motion";
import {
  FaFileMedical,
  FaRobot,
  FaHeartbeat,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaFileMedical />,
    title: "The Problem",
    description:
      "Medical reports are often difficult to understand, making it challenging for patients to make informed decisions about their health.",
  },
  {
    icon: <FaRobot />,
    title: "Our Solution",
    description:
      "MediAI uses Artificial Intelligence to simplify medical reports, answer health-related questions, and provide meaningful healthcare assistance.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Our Goal",
    description:
      "To make healthcare information more understandable, accessible, and available to everyone through intelligent technology.",
  },
];

function OurStory() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Why We Built MediAI
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We wanted to bridge the gap between complex medical information
            and everyday people. MediAI empowers users by making healthcare
            insights easier to understand with the help of AI.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl">

                {card.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {card.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                {card.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default OurStory;