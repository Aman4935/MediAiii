import { motion } from "framer-motion";
import {
  FaFileMedical,
  FaCalendarCheck,
  FaRobot,
} from "react-icons/fa";

function ProfileStats({
  reports = 0,
  appointments = 0,
  aiAnalysis = 0,
}) {
  const stats = [
    {
      title: "Reports",
      value: reports,
      icon: <FaFileMedical />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Appointments",
      value: appointments,
      icon: <FaCalendarCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Analysis",
      value: aiAnalysis,
      icon: <FaRobot />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className={`bg-gradient-to-r ${item.color} rounded-3xl p-6 text-white shadow-xl`}
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-white/80 text-lg">
                {item.title}
              </p>

              <h2 className="text-5xl font-bold mt-3">
                {item.value}
              </h2>

            </div>

            <div className="text-5xl opacity-80">
              {item.icon}
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProfileStats;