import api from "./api";

export const analyzeReport = async (reportId) => {
  const response = await api.post("/ai/analyze", {
    reportId,
  });

  return response.data;
};