import { motion } from "framer-motion";
import {
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaStethoscope,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

import StatusBadge from "./StatusBadge";

function AppointmentCard({
  appointment,
  onCancel,
}) {

  const handleCancel = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmDelete) return;

    onCancel(appointment._id);

  };

  return (

    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`rounded-3xl shadow-xl p-6 border transition

      ${
        appointment.status === "Cancelled"

          ? "border-red-200 bg-red-50"

          : appointment.status === "Completed"

          ? "border-green-200 bg-green-50"

          : "border-gray-100 bg-white"

      }`}
    >

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

        <div className="flex items-center gap-5">

          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl">

            <FaUserMd />

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              {appointment.doctorName}

            </h2>

            <div className="flex items-center gap-2 text-gray-500 mt-2">

              <FaStethoscope />

              <span>

                {appointment.specialization || "General Physician"}

              </span>

            </div>

          </div>

        </div>

        <StatusBadge
          status={appointment.status}
        />

      </div>

      {/* Details */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="flex gap-3">

          <FaCalendarAlt className="text-blue-600 text-xl mt-1"/>

          <div>

            <p className="text-gray-500">

              Date

            </p>

            <h3 className="font-semibold">

              {new Date(
                appointment.appointmentDate
              ).toLocaleDateString()}

            </h3>

          </div>

        </div>

        <div className="flex gap-3">

          <FaClock className="text-blue-600 text-xl mt-1"/>

          <div>

            <p className="text-gray-500">

              Time

            </p>

            <h3 className="font-semibold">

              {appointment.appointmentTime}

            </h3>

          </div>

        </div>

      </div>

      {/* Problem */}

      <div className="mt-8">

        <h3 className="font-bold">

          Problem

        </h3>

        <p className="text-gray-600 mt-2">

          {appointment.problem}

        </p>

      </div>

      {/* Footer */}

      <div className="mt-8">

        {appointment.status === "Cancelled" ? (

          <button
            disabled
            className="w-full py-3 rounded-2xl bg-red-500 text-white cursor-not-allowed"
          >

            Appointment Cancelled

          </button>

        ) : appointment.status === "Completed" ? (

          <button
            disabled
            className="w-full py-3 rounded-2xl bg-green-600 text-white flex justify-center items-center gap-3 cursor-not-allowed"
          >

            <FaCheckCircle />

            Appointment Completed

          </button>

        ) : (

          <button
            onClick={handleCancel}
            className="w-full py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white flex justify-center items-center gap-3 transition"
          >

            <FaTrash />

            Cancel Appointment

          </button>

        )}

      </div>

    </motion.div>

  );

}

export default AppointmentCard;