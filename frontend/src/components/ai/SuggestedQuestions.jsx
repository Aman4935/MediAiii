import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaAppleAlt,
  FaTint,
  FaRunning,
  FaFileMedical,
  FaNotesMedical,
} from "react-icons/fa";

function SuggestedQuestions({ onSelect }) {

  const questions = [
    {
      icon: <FaFileMedical />,
      question: "Explain my blood report",
    },
    {
      icon: <FaAppleAlt />,
      question: "Suggest a healthy vegetarian diet",
    },
    {
      icon: <FaHeartbeat />,
      question: "How can I improve heart health?",
    },
    {
      icon: <FaRunning />,
      question: "How can I increase my stamina?",
    },
    {
      icon: <FaTint />,
      question: "What causes Vitamin D deficiency?",
    },
    {
      icon: <FaNotesMedical />,
      question: "Give me general health tips",
    },
  ];

  return (

    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-6">

        💡 Suggested Questions

      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        {questions.map((item, index) => (

          <motion.button

            key={index}

            whileHover={{
              scale: 1.04,
              y: -4,
            }}

            whileTap={{
              scale: 0.97,
            }}

            onClick={() =>
              onSelect(item.question)
            }

            className="bg-white rounded-2xl shadow-lg p-5 text-left hover:shadow-2xl transition-all border border-gray-100"

          >

            <div className="flex items-center gap-4">

              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl">

                {item.icon}

              </div>

              <p className="font-semibold">

                {item.question}

              </p>

            </div>

          </motion.button>

        ))}

      </div>

    </div>

  );

}

export default SuggestedQuestions;