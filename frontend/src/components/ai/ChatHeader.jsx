import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function ChatHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8">

        <div className="flex items-center gap-5">

          <div className="h-20 w-20 rounded-full bg-white text-blue-700 flex justify-center items-center text-4xl shadow-xl">

            <FaRobot />

          </div>

          <div>

            <h1 className="text-4xl font-extrabold">

              MediAI Assistant

            </h1>

            <p className="text-blue-100 mt-2 text-lg">

              Your intelligent healthcare companion.

            </p>

          </div>

        </div>

        <div className="bg-white/15 backdrop-blur-lg rounded-2xl px-8 py-5">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="font-semibold">

              AI Online

            </span>

          </div>

          <p className="text-sm text-blue-100 mt-2">

            Powered by Groq Llama 3.3

          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default ChatHeader;