import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      return toast.error("Please fill all fields");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {

      setLoading(true);

      const data = await registerUser({
        fullName,
        email,
        password,
      });

      if (data.success) {

        toast.success("Registration Successful");

        navigate("/login");

      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
        <div className="min-h-screen bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-900 flex items-center justify-center px-6 py-10">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid lg:grid-cols-2"
      >

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center p-14 text-white">

          <h1 className="text-6xl font-extrabold">
            MediAI
          </h1>

          <p className="mt-6 text-xl leading-9 text-blue-100">

            AI Powered Healthcare Platform

          </p>

          <p className="mt-5 leading-8 text-blue-100">

            ✔ AI Medical Report Analysis

            <br />

            ✔ Secure Cloud Storage

            <br />

            ✔ Appointment Booking

            <br />

            ✔ Personal Healthcare Dashboard

          </p>

        </div>

        {/* Right Side */}

        <div className="bg-white p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-center">

            Create Account

          </h2>

          <p className="text-gray-500 text-center mt-3">

            Join MediAI today.

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Full Name */}

            <div className="relative">

              <FaUser className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Email */}

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Button */}

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  );
}

export default Register;