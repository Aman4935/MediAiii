import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaHeartbeat,
} from "react-icons/fa";

function Footer() {
  return (
   <footer className="bg-slate-950 text-white mt-20 border-t border-slate-800">

  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="flex flex-col items-center gap-6">

      {/* Logo */}

      <div className="text-center">

        <div className="flex items-center justify-center gap-3">

          <FaHeartbeat className="text-blue-500 text-3xl" />

          <h2 className="text-3xl font-bold">
            MediAI
          </h2>

        </div>

        <p className="text-gray-400 mt-3">
          Making Healthcare Smarter with AI.
        </p>

      </div>

      {/* Social */}

      <div className="flex gap-6 text-2xl">

        <a
          href="https://github.com/Aman4935"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aman-singh-36a85a201/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>

      </div>

    </div>

    <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-400 text-sm">

      © 2026 MediAI • Built with ❤️ by Aman Singh

    </div>

  </div>

</footer>
  );
}

export default Footer;