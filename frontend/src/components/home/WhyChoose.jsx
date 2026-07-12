import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  FileText,
  Activity,
  CalendarCheck,
  HeartPulse,
} from "lucide-react";

const reasons = [
  {
    icon: <Brain size={40} className="text-blue-600" />,
    title: "AI Powered Analysis",
    desc: "Analyze your medical reports instantly with AI-powered insights.",
  },
  {
    icon: <ShieldCheck size={40} className="text-green-600" />,
    title: "Secure Medical Records",
    desc: "JWT authentication and secure cloud storage keep your reports protected.",
  },
  {
    icon: <FileText size={40} className="text-purple-600" />,
    title: "Digital Reports",
    desc: "Store and manage all your medical reports in one place.",
  },
  {
    icon: <CalendarCheck size={40} className="text-orange-500" />,
    title: "Easy Appointments",
    desc: "Book appointments with doctors in just a few clicks.",
  },
  {
    icon: <Activity size={40} className="text-cyan-600" />,
    title: "Health Monitoring",
    desc: "Track your reports, appointments and health history from one dashboard.",
  },
  {
    icon: <HeartPulse size={40} className="text-red-500" />,
    title: "Better Healthcare",
    desc: "A complete AI-powered healthcare platform built for modern patients.",
  },
];

function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose MediAI
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Smarter Healthcare Experience
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            MediAI combines Artificial Intelligence, Cloud Technology and
            Secure Healthcare into one powerful healthcare platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;