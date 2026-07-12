import api from "./api";

export const getReports = async () => {
  const response = await api.get("/reports");
  return response.data;
};

export const uploadReport = async (formData) => {
  const response = await api.post(
    "/reports/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const deleteReport = async (id) => {
  const response = await api.delete(`/reports/${id}`);
  return response.data;
};