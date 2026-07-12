import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold">

            Ready to Experience MediAI?

          </h2>

          <p className="mt-6 text-blue-100 text-lg">

            Explore AI-powered healthcare,
            report analysis and intelligent
            medical assistance.

          </p>

          <Link
            to="/register"
            className="inline-block mt-10 bg-white text-blue-700 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactCTA;