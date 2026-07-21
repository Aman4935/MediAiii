const medicalWords = [
  "pain",
  "doctor",
  "hospital",
  "medicine",
  "fever",
  "cough",
  "cold",
  "flu",
  "infection",
  "headache",
  "migraine",
  "diabetes",
  "blood",
  "heart",
  "liver",
  "kidney",
  "brain",
  "skin",
  "rash",
  "eye",
  "ear",
  "nose",
  "throat",
  "diet",
  "nutrition",
  "exercise",
  "sleep",
  "weight",
  "vitamin",
  "protein",
  "anxiety",
  "depression",
  "stress",
  "xray",
  "ct",
  "mri",
  "cbc",
  "report",
  "tablet"
];

function isMedical(text) {
    text = text.toLowerCase();

    return medicalWords.some(word => text.includes(word));
}

module.exports = isMedical;