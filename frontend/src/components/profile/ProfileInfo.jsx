import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaIdBadge,
} from "react-icons/fa";

function ProfileInfo({ user }) {
  const info = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: user?.email || "Not Available",
    },
    {
      icon: <FaUserShield />,
      title: "Role",
      value: user?.role || "Patient",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Joined",
      value: user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString()
        : "Recently",
    },
    {
      icon: <FaIdBadge />,
      title: "User ID",
      value: user?._id?.slice(-8) || "N/A",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-3xl shadow-xl p-8 mt-8"
    >
      <h2 className="text-3xl font-bold mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {info.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
            }}
            className="border rounded-2xl p-5 flex items-center gap-5 hover:border-blue-500 transition"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl text-2xl">
              {item.icon}
            </div>

            <div>

              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h3 className="font-bold text-lg break-all">
                {item.value}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}

export default ProfileInfo;