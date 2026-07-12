import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { bookAppointment } from "../../services/appointmentService";

function AppointmentForm({ onSuccess }) {

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiologist",
    },
    {
      name: "Dr. Priya Verma",
      specialization: "Dermatologist",
    },
    {
      name: "Dr. Amit Singh",
      specialization: "Orthopedic",
    },
    {
      name: "Dr. Neha Kapoor",
      specialization: "Neurologist",
    },
    {
      name: "Dr. Anjali Mehta",
      specialization: "General Physician",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    doctorName: doctors[0].name,
    specialization: doctors[0].specialization,
    appointmentDate: "",
    appointmentTime: "",
    problem: "",
  });

  const handleDoctorChange = (e) => {

    const doctor = doctors.find(
      (doc) => doc.name === e.target.value
    );

    setFormData({
      ...formData,
      doctorName: doctor.name,
      specialization: doctor.specialization,
    });

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.appointmentDate ||
      !formData.appointmentTime ||
      !formData.problem
    ) {
      return toast.error("Please fill all fields");
    }

    try {

      setLoading(true);

      const data = await bookAppointment(formData);

      if (data.success) {

        toast.success("Appointment Booked Successfully");

        setFormData({
          doctorName: doctors[0].name,
          specialization: doctors[0].specialization,
          appointmentDate: "",
          appointmentTime: "",
          problem: "",
        });

        if (onSuccess) {
          onSuccess();
        }

      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Booking Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
        <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-2xl p-8 mt-8"
    >

      <h2 className="text-3xl font-bold mb-8">
        Book New Appointment
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Doctor */}

        <div>

          <label className="block font-semibold mb-2">
            Doctor
          </label>

          <select
            value={formData.doctorName}
            onChange={handleDoctorChange}
            className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            {doctors.map((doctor) => (
              <option
                key={doctor.name}
                value={doctor.name}
              >
                {doctor.name}
              </option>
            ))}
          </select>

        </div>

        {/* Specialization */}

        <div>

          <label className="block font-semibold mb-2">
            Specialization
          </label>

          <input
            type="text"
            value={formData.specialization}
            readOnly
            className="w-full border rounded-2xl px-4 py-3 bg-gray-100"
          />

        </div>

        {/* Date */}

        <div>

          <label className="block font-semibold mb-2">
            Appointment Date
          </label>

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Time */}

        <div>

          <label className="block font-semibold mb-2">
            Time Slot
          </label>

          <select
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              Select Time
            </option>

            {timeSlots.map((time) => (
              <option
                key={time}
                value={time}
              >
                {time}
              </option>
            ))}

          </select>

        </div>

      </div>

      {/* Problem */}

      <div className="mt-6">

        <label className="block font-semibold mb-2">
          Describe Your Problem
        </label>

        <textarea
          rows="5"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          placeholder="Briefly describe your symptoms or reason for consultation..."
          className="w-full border rounded-2xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Button */}

      <button
        disabled={loading}
        className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300"
      >
        {loading
          ? "Booking Appointment..."
          : "Book Appointment"}
      </button>

    </motion.form>
  );
}

export default AppointmentForm;