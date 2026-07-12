import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, FileText, CalendarCheck } from "lucide-react";
import heroImage from "../../assets/hero.svg";

function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Smart Healthcare Platform
          </span>

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Your Health,
            <br />
            <span className="text-blue-600">Powered by AI</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Upload medical reports, book appointments, and receive
            AI-powered health insights securely from anywhere.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border border-slate-300 hover:bg-slate-100 px-7 py-4 rounded-xl font-semibold transition"
            >
              Explore Features
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-slate-500">Patients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">100+</h2>
              <p className="text-slate-500">Doctors</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">99%</h2>
              <p className="text-slate-500">Secure</p>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={heroImage}
            alt="Healthcare"
            className="w-full"
          />

          <div className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="text-green-600" />
            <div>
              <h4 className="font-semibold">100% Secure</h4>
              <p className="text-sm text-gray-500">Encrypted Records</p>
            </div>
          </div>

          <div className="absolute bottom-10 right-0 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
            <FileText className="text-blue-600" />
            <div>
              <h4 className="font-semibold">AI Reports</h4>
              <p className="text-sm text-gray-500">Instant Analysis</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-24 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
            <CalendarCheck className="text-purple-600" />
            <div>
              <h4 className="font-semibold">Appointments</h4>
              <p className="text-sm text-gray-500">24×7 Booking</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;