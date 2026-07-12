import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@mediai.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Greater Noida, India",
  },
  {
    icon: <FaClock />,
    title: "Support Hours",
    value: "Mon - Sat • 9 AM - 6 PM",
  },
];

function ContactCards() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl duration-300 text-center"
            >

              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl">

                {card.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {card.title}

              </h3>

              <p className="text-gray-600 mt-4">

                {card.value}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactCards;