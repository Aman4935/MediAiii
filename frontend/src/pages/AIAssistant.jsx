import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";

import ChatHeader from "../components/ai/ChatHeader";
import ChatMessage from "../components/ai/ChatMessage";
import ChatInput from "../components/ai/ChatInput";
import SuggestedQuestions from "../components/ai/SuggestedQuestions";
import TypingIndicator from "../components/ai/TypingIndicator";

import { sendMessage } from "../services/chatService";

function AIAssistant() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `# 👋 Welcome to MediAI

I'm your AI Healthcare Assistant.

You can ask me about:

• Medical reports

• Diseases

• Diet plans

• Fitness

• Lifestyle

• General health

How can I help you today?`,
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  const handleSend = async (text) => {

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      setLoading(true);

      const data = await sendMessage(text);

      setMessages((prev) => [

        ...prev,

        {
          role: "assistant",
          content: data.reply,
        },

      ]);

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
        <DashboardLayout>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}

        <ChatHeader />

        {/* Suggested Questions */}

        {messages.length === 1 && (
          <SuggestedQuestions
            onSelect={handleSend}
          />
        )}

        {/* Chat Container */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-50 rounded-3xl shadow-xl border border-gray-200 h-[65vh] overflow-y-auto p-6"
        >

          {messages.map((message, index) => (

            <ChatMessage
              key={index}
              message={message}
            />

          ))}

          {loading && <TypingIndicator />}

          <div ref={messagesEndRef}></div>

        </motion.div>

        {/* Chat Input */}

        <ChatInput
          onSend={handleSend}
          loading={loading}
        />

      </div>

    </DashboardLayout>
  );
}

export default AIAssistant;