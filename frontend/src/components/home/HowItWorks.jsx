import { motion } from "framer-motion";
import {
  UserPlus,
  Upload,
  Brain,
  CalendarCheck,
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={38} className="text-blue-600" />,
    title: "Create Account",
    description:
      "Register securely and create your MediAI profile within seconds.",
  },
  {
    icon: <Upload size={38} className="text-green-600" />,
    title: "Upload Medical Reports",
    description:
      "Upload your prescriptions, blood reports and medical documents securely.",
  },
  {
    icon: <Brain size={38} className="text-purple-600" />,
    title: "Get AI Analysis",
    description:
      "Our AI analyzes your reports and provides easy-to-understand insights.",
  },
  {
    icon: <CalendarCheck size={38} className="text-orange-500" />,
    title: "Book Appointment",
    description:
      "Consult a doctor quickly after reviewing your AI-generated report.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            How It Works
          </p>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Healthcare in 4 Simple Steps
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            MediAI simplifies healthcare with AI-powered technology.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Horizontal Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-blue-100"></div>

          <div className="grid lg:grid-cols-4 gap-12">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative text-center"
              >

                {/* Circle */}

                <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-blue-500 flex items-center justify-center mx-auto relative z-10">

                  {step.icon}

                </div>

                {/* Step Number */}

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {step.title}

                </h3>

                <p className="text-gray-500 mt-4 leading-7">

                  {step.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;