import { motion } from "framer-motion";
import { FaCalendarTimes } from "react-icons/fa";

import AppointmentCard from "./AppointmentCard";

function AppointmentList({
  appointments = [],
  onCancel,
}) {

  if (appointments.length === 0) {

    return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-3xl shadow-xl p-12 mt-8 text-center"
      >

        <FaCalendarTimes
          size={80}
          className="mx-auto text-gray-400"
        />

        <h2 className="text-3xl font-bold mt-6">

          No Appointments Found

        </h2>

        <p className="text-gray-500 mt-3">

          Book your first appointment to get started.

        </p>

      </motion.div>

    );

  }

  return (

    <div className="mt-8">

      <h2 className="text-3xl font-bold mb-6">

        My Appointments

      </h2>

      <div className="space-y-6">

        {appointments.map((appointment) => (

          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            onCancel={onCancel}
          />

        ))}

      </div>

    </div>

  );

}

export default AppointmentList;