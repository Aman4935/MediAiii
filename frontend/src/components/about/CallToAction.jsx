import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold">

            Experience Smarter Healthcare
            with MediAI

          </h2>

          <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">

            Explore AI-powered report analysis,
            healthcare assistance, and appointment
            management through one simple platform.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/register"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center gap-3"
            >

              Get Started

              <FaArrowRight />

            </Link>

            <Link
              to="/contact"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
            >

              Contact Us

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CallToAction;