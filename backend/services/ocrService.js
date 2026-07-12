const Tesseract = require("tesseract.js");

const extractTextFromImage = async (imageUrl) => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imageUrl, "eng");

    return text;
  } catch (error) {
    console.error("OCR Error:", error);
    throw new Error("Unable to extract text from image");
  }
};

module.exports = {
  extractTextFromImage,
};