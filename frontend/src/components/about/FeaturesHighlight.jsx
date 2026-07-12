import { motion } from "framer-motion";
import {
  FaBrain,
  FaShieldAlt,
  FaBolt,
  FaUserMd,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Healthcare",
    description:
      "Advanced AI helps simplify complex medical information into easy-to-understand insights.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Privacy First",
    description:
      "Your medical reports and personal information remain secure with authentication and protected storage.",
  },
  {
    icon: <FaBolt />,
    title: "Fast & Intelligent",
    description:
      "Get instant report analysis, healthcare guidance, and quick appointment booking without unnecessary delays.",
  },
  {
    icon: <FaUserMd />,
    title: "Patient-Centric Experience",
    description:
      "Designed to make healthcare simpler through an intuitive interface focused on everyday users.",
  },
];

function FeaturesHighlight() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Why MediAI
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Designed Around People,
            Powered by AI
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            MediAI combines modern technology with thoughtful design
            to make healthcare information easier to understand and
            more accessible for everyone.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {feature.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                {feature.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesHighlight;