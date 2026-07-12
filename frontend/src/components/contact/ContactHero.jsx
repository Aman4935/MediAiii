import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white py-28">

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="uppercase tracking-widest text-cyan-200 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            We'd Love To Hear From You
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-9">
            Have questions, suggestions, or feedback?
            Feel free to reach out to us.
            We're always happy to help.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactHero;