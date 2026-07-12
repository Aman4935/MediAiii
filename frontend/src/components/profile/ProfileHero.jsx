import { motion } from "framer-motion";
import { FaEnvelope, FaUserShield } from "react-icons/fa";

function ProfileHero({ user }) {
  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "U";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-10">

        {/* Avatar */}
        <div className="flex items-center justify-center h-32 w-32 rounded-full bg-white text-blue-700 text-5xl font-bold shadow-xl">
          {initials}
        </div>

        {/* User Details */}
        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-4xl font-extrabold tracking-wide">
            {user?.fullName || "User"}
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-blue-100">
            <FaEnvelope />
            <span>{user?.email}</span>
          </div>

          <div className="inline-flex items-center gap-2 mt-5 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold">

            <FaUserShield />

            {user?.role?.toUpperCase() || "PATIENT"}

          </div>

        </div>

        {/* Completion Card */}
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 w-full lg:w-72">

          <h3 className="font-bold text-xl">
            Account Status
          </h3>

          <p className="text-blue-100 mt-2">
            Profile Completion
          </p>

          <div className="w-full h-3 rounded-full bg-white/20 mt-4 overflow-hidden">

            <div className="h-full w-4/5 bg-green-400 rounded-full"></div>

          </div>

          <p className="mt-3 text-green-300 font-semibold">
            80% Complete
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default ProfileHero;