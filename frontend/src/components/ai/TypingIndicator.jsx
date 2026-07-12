import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-6">

      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">

        <FaRobot />

      </div>

      <div className="bg-white rounded-3xl shadow-lg px-6 py-5">

        <div className="flex gap-2">

          {[0, 1, 2].map((dot) => (

            <motion.div
              key={dot}
              className="h-3 w-3 rounded-full bg-blue-500"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;