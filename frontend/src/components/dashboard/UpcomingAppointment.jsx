function UpcomingAppointment({ appointments = [] }) {

  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Upcoming Appointment
        </h2>

        <div className="text-center py-10">

          <p className="text-gray-500">
            No appointments booked.
          </p>

        </div>

      </div>
    );
  }

  const appointment = appointments[0];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Upcoming Appointment
      </h2>

      <div className="space-y-5">

        <div>

          <h3 className="text-xl font-bold">
            Dr. {appointment.doctorName}
          </h3>

          <p className="text-gray-500">
            Consultation
          </p>

        </div>

        <div className="border-t pt-4 space-y-2">

          <p>
            📅{" "}
            {new Date(
              appointment.appointmentDate
            ).toLocaleDateString()}
          </p>

          <p>
            🕒 {appointment.appointmentTime}
          </p>

          <p>
            🩺 {appointment.problem}
          </p>

        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default UpcomingAppointment;