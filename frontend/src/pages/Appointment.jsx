import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";

import AppointmentHero from "../components/appointment/AppointmentHero";
import AppointmentForm from "../components/appointment/AppointmentForm";
import AppointmentList from "../components/appointment/AppointmentList";

import {
  getAppointments,
  cancelAppointment,
} from "../services/appointmentService";

function Appointment() {

  const [loading, setLoading] = useState(true);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {

    try {

      setLoading(true);

      const data = await getAppointments();

      setAppointments(data.appointments || []);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load appointments");

    } finally {

      setLoading(false);

    }

  };

  // For now only frontend refresh.
  // We'll connect backend delete API next.

 const handleCancel = async (id) => {

  const confirmCancel = window.confirm(
    "Are you sure you want to cancel this appointment?"
  );

  if (!confirmCancel) return;

  try {

    const data = await cancelAppointment(id);

    if (data.success) {

      toast.success("Appointment Cancelled");

      fetchAppointments();

    }

  } catch (error) {

    console.log(error);

    toast.error("Failed to cancel appointment");

  }

};

  if (loading) {

    return (

      <DashboardLayout>

        <div className="flex justify-center items-center h-[70vh]">

          <div className="text-center">

            <div className="h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="text-2xl font-semibold mt-5">

              Loading Appointments...

            </p>

          </div>

        </div>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        className="space-y-8"

      >

        {/* Hero */}

        <AppointmentHero />

        {/* Booking Form */}

        <AppointmentForm
          onSuccess={fetchAppointments}
        />

        {/* Appointment List */}

        <AppointmentList
          appointments={appointments}
          onCancel={handleCancel}
        />

      </motion.div>

    </DashboardLayout>

  );

}

export default Appointment;