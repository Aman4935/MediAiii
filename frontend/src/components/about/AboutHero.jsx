import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white py-28">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white text-blue-700 text-5xl shadow-2xl">

            <FaHeartbeat />

          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-8">

            About MediAI

          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-9">

            We believe healthcare should be simple,
            intelligent and accessible.

            MediAI combines Artificial Intelligence
            with modern healthcare to help users
            understand reports, manage appointments
            and receive trustworthy health guidance.

          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutHero;