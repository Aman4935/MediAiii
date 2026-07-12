import { motion } from "framer-motion";
import {
  FaRocket,
  FaBrain,
  FaGlobe,
} from "react-icons/fa";

function FutureVision() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="uppercase tracking-widest text-cyan-400 font-semibold">
            Looking Ahead
          </p>

          <h2 className="text-5xl font-bold mt-4">

            Building the Future of
            AI Healthcare

          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 mt-8 text-lg leading-8">

            MediAI is continuously evolving to provide
            smarter healthcare experiences through
            Artificial Intelligence, making healthcare
            more personalized, accessible and efficient.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >

            <FaBrain className="text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">

              Smarter AI

            </h3>

            <p className="text-gray-300 mt-4 leading-8">

              Context-aware AI conversations,
              personalized medical assistance,
              and better health recommendations.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >

            <FaRocket className="text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">

              Faster Healthcare

            </h3>

            <p className="text-gray-300 mt-4 leading-8">

              Reduce waiting time through
              intelligent report analysis,
              digital appointments and
              instant AI guidance.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >

            <FaGlobe className="text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">

              Accessible Healthcare

            </h3>

            <p className="text-gray-300 mt-4 leading-8">

              Our vision is to make healthcare
              assistance available anytime,
              anywhere for everyone.

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default FutureVision;