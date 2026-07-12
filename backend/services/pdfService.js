const axios = require("axios");
const pdf = require("pdf-parse");

const extractTextFromPDF = async (pdfUrl) => {
  try {
    const response = await axios.get(pdfUrl, {
      responseType: "arraybuffer",
    });

    const pdfData = await pdf(response.data);

    return pdfData.text;
  } catch (error) {
    console.error("PDF Extraction Error:", error);
    throw new Error("Unable to extract text from PDF");
  }
};

module.exports = {
  extractTextFromPDF,
};