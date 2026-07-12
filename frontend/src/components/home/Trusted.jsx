import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGooglecloud,
} from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-800 text-5xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
  },
  {
    name: "Cloudinary",
    icon: <FaCloud className="text-blue-500 text-5xl" />,
  },
  {
    name: "Gemini AI",
    icon: <FaRobot className="text-purple-500 text-5xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-500 text-5xl" />,
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud className="text-red-500 text-5xl" />,
  },
];

function Trusted() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-blue-600 font-semibold uppercase tracking-widest">
            Technology Stack
          </p>

          <h2 className="text-4xl font-bold text-center mt-3">
            Built with Modern Technologies
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            MediAI is powered by secure and scalable technologies used by modern software companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl duration-300 flex flex-col items-center"
            >
              {tech.icon}

              <h3 className="mt-5 font-semibold text-lg">
                {tech.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Trusted;