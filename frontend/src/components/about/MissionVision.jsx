import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="uppercase tracking-widest text-blue-600 font-semibold">

            Our Purpose

          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">

            Driven by Innovation,
            Focused on Healthcare

          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">

            Every feature in MediAI is designed to make healthcare
            easier to understand, easier to access, and easier to
            manage for everyone.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-10 shadow-2xl"
          >

            <div className="h-16 w-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center text-3xl">

              <FaBullseye />

            </div>

            <h3 className="text-3xl font-bold mt-8">

              Our Mission

            </h3>

            <p className="mt-6 text-blue-100 leading-8">

              To simplify healthcare using Artificial Intelligence by
              helping people understand medical reports, receive
              intelligent guidance, and connect with healthcare
              professionals through one secure platform.

            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-slate-900 text-white p-10 shadow-2xl"
          >

            <div className="h-16 w-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl">

              <FaEye />

            </div>

            <h3 className="text-3xl font-bold mt-8">

              Our Vision

            </h3>

            <p className="mt-6 text-gray-300 leading-8">

              We envision a future where everyone has instant access
              to trustworthy healthcare guidance powered by AI,
              making medical information more understandable,
              personalized, and accessible around the world.

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;