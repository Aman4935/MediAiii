import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProfileActions() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/login");
  };

  const actions = [
    {
      title: "Edit Profile",
      description: "Update your personal information",
      icon: <FaUserEdit />,
      color: "from-blue-500 to-cyan-500",
      onClick: () =>
        toast("Edit Profile Coming Soon 🚀"),
    },
    {
      title: "Change Password",
      description: "Keep your account secure",
      icon: <FaLock />,
      color: "from-purple-500 to-pink-500",
      onClick: () =>
        toast("Change Password Coming Soon 🔐"),
    },
    {
      title: "Logout",
      description: "Sign out from your account",
      icon: <FaSignOutAlt />,
      color: "from-red-500 to-orange-500",
      onClick: handleLogout,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-3xl shadow-xl p-8 mt-8"
    >
      <h2 className="text-3xl font-bold mb-8">
        Account Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={action.onClick}
            className={`bg-gradient-to-r ${action.color} text-white rounded-3xl p-6 text-left shadow-xl`}
          >
            <div className="text-4xl mb-4">
              {action.icon}
            </div>

            <h3 className="text-xl font-bold">
              {action.title}
            </h3>

            <p className="text-white/80 mt-2">
              {action.description}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default ProfileActions;