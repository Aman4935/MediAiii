import { motion } from "framer-motion";

function StatCard({
  icon,
  title,
  value,
  subtitle,
  color = "bg-blue-500",
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-3xl shadow-lg p-6"
    >
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white text-2xl`}
      >
        {icon}
      </div>

      <h4 className="text-gray-500 mt-5">
        {title}
      </h4>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-gray-400 mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default StatCard;