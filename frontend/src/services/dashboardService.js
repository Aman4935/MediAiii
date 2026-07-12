import { getProfile } from "./authService";
import { getReports } from "./reportService";
import { getAppointments } from "./appointmentService";

export const loadDashboard = async () => {
  const [profile, reports, appointments] = await Promise.all([
    getProfile(),
    getReports(),
    getAppointments(),
  ]);

  return {
    user: profile.user,
    reports: reports.reports,
    appointments: appointments.appointments,
  };
};