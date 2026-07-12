import api from "./api";

export const bookAppointment = async (appointmentData) => {
  const response = await api.post(
    "/appointments/book",
    appointmentData
  );

  return response.data;
};
export const cancelAppointment = async (id) => {
  const response = await api.patch(`/appointments/${id}/cancel`);
  return response.data;
};

export const updateAppointmentStatus = async (id, status) => {
  const response = await api.patch(`/appointments/${id}/status`, {
    status,
  });
  return response.data;
};
export const getAppointments = async () => {
  const response = await api.get("/appointments");
  return response.data;
};