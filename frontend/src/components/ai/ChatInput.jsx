import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sticky bottom-0 bg-white rounded-3xl shadow-2xl border border-gray-200 p-4"
    >
      <div className="flex items-end gap-4">

        <textarea
          rows={1}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Ask MediAI anything..."
          className="flex-1 resize-none outline-none text-lg rounded-2xl px-4 py-3 bg-gray-50 focus:bg-white"
        />

        <button
          disabled={loading}
          type="submit"
          className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex justify-center items-center text-xl shadow-lg hover:scale-105 transition"
        >
          <FaPaperPlane />
        </button>

      </div>

      <p className="text-xs text-gray-500 mt-3">
        Press <b>Enter</b> to send • <b>Shift + Enter</b> for a new line
      </p>
    </motion.form>
  );
}

export default ChatInput;