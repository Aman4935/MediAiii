import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  FaUserCircle,
  FaRobot,
} from "react-icons/fa";

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isUser ? 50 : -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`flex gap-4 mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">
          <FaRobot />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-3xl px-6 py-4 shadow-lg ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
            : "bg-white text-gray-800"
        }`}
      >
        {isUser ? (
          <p className="leading-7 whitespace-pre-wrap">
            {message.content}
          </p>
        ) : (
          <div className="prose max-w-none prose-blue">
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl shadow-lg">
          <FaUserCircle />
        </div>
      )}
    </motion.div>
  );
}

export default ChatMessage;