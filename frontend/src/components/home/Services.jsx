import { motion } from "framer-motion";
import {
  Brain,
  CalendarDays,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: <Brain size={42} className="text-blue-600" />,
    title: "AI Medical Report Analysis",
    description:
      "Upload your medical reports and receive AI-powered insights in seconds. Understand your reports faster with intelligent analysis.",
  },
  {
    icon: <CalendarDays size={42} className="text-green-600" />,
    title: "Online Appointment Booking",
    description:
      "Book appointments with doctors anytime. Manage upcoming visits with a simple and intuitive interface.",
  },
  {
    icon: <Bot size={42} className="text-purple-600" />,
    title: "24×7 AI Health Assistant",
    description:
      "Ask health-related questions, understand medical reports and receive guidance instantly using Gemini AI.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Everything You Need
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            MediAI provides intelligent healthcare tools to simplify
            report management, appointments and AI assistance.
          </p>

        </div>

        <div className="mt-24 space-y-28">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Illustration */}

              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >

                <div className="h-80 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-xl">

                  <div className="text-center">

                    <div className="mb-5 flex justify-center">
                      {service.icon}
                    </div>

                    <h3 className="text-3xl font-bold">
                      {service.title}
                    </h3>

                  </div>

                </div>

              </div>

              {/* Content */}

              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  {service.icon}
                </div>

                <h2 className="text-4xl font-bold mt-6">
                  {service.title}
                </h2>

                <p className="text-gray-500 mt-6 leading-8 text-lg">
                  {service.description}
                </p>

                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition">
                  Learn More
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;