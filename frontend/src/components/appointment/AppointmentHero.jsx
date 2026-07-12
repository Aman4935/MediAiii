import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

function AppointmentHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white shadow-2xl"
    >
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10">

        <div>

          <div className="flex items-center gap-4">

            <div className="bg-white text-blue-700 p-4 rounded-2xl text-3xl">
              <FaCalendarCheck />
            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Book Appointment
              </h1>

              <p className="text-blue-100 mt-2">
                Schedule your consultation with our specialists.
              </p>

            </div>

          </div>

        </div>

        <div className="bg-white/15 backdrop-blur-lg rounded-2xl px-8 py-6 mt-8 lg:mt-0">

          <h3 className="text-xl font-bold">
            Healthcare
          </h3>

          <p className="text-blue-100 mt-2">
            Fast • Secure • Reliable
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default AppointmentHero;