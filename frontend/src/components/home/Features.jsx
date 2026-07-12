import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  CalendarCheck,
  ShieldCheck,
  Cloud,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} className="text-blue-600" />,
    title: "AI Medical Analysis",
    description:
      "Receive AI-powered insights from your uploaded medical reports in seconds.",
  },
  {
    icon: <FileText size={40} className="text-green-600" />,
    title: "Smart Report Management",
    description:
      "Upload, organize and access all your medical reports securely anytime.",
  },
  {
    icon: <CalendarCheck size={40} className="text-purple-600" />,
    title: "Doctor Appointments",
    description:
      "Book appointments with doctors quickly using our seamless scheduling system.",
  },
  {
    icon: <Cloud size={40} className="text-cyan-600" />,
    title: "Cloud Storage",
    description:
      "Your reports are stored securely on Cloudinary for instant access.",
  },
  {
    icon: <ShieldCheck size={40} className="text-red-500" />,
    title: "Secure Authentication",
    description:
      "JWT authentication keeps your medical data protected and private.",
  },
  {
    icon: <Activity size={40} className="text-orange-500" />,
    title: "Health Dashboard",
    description:
      "Track reports, appointments and AI insights from one personalized dashboard.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-blue-600 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-4xl font-bold text-center mt-3">
            Everything You Need In One Platform
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            MediAI combines AI, cloud technology and secure healthcare tools
            to simplify your medical journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;