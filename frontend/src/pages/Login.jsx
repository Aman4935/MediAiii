import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {

      setLoading(true);

      const data = await loginUser(formData);

      if (data.success) {

        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        toast.success("Login Successful");

        navigate("/dashboard");

      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
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
            Welcome Back
          </h1>

          <p className="mt-6 text-xl leading-9 text-blue-100">
            Login to continue using MediAI
          </p>

          <p className="mt-5 leading-8 text-blue-100">

            ✔ AI Medical Report Analysis

            <br />

            ✔ Secure Cloud Storage

            <br />

            ✔ Smart Healthcare Dashboard

            <br />

            ✔ Appointment Booking

          </p>

        </div>

        {/* Right Side */}

        <div className="bg-white p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-center">
            Login
          </h2>

          <p className="text-gray-500 text-center mt-3">
            Welcome back! Please login to continue.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <span className="text-blue-600 cursor-pointer hover:underline">
                Forgot Password?
              </span>

            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  );
}

export default Login;