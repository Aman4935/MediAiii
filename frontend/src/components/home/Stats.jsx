import {
  FaUsers,
  FaFileMedical,
  FaCalendarCheck,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-blue-600 text-5xl" />,
    value: "500+",
    title: "Happy Patients",
  },
  {
    icon: <FaFileMedical className="text-green-600 text-5xl" />,
    value: "2500+",
    title: "Medical Reports",
  },
  {
    icon: <FaCalendarCheck className="text-purple-600 text-5xl" />,
    value: "1000+",
    title: "Appointments",
  },
  {
    icon: <FaShieldAlt className="text-red-600 text-5xl" />,
    value: "99%",
    title: "Secure Platform",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center text-white">
          <h2 className="text-5xl font-bold">
            Trusted Across India
          </h2>

          <p className="mt-4 text-blue-100">
            Building the future of AI-powered healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-slate-800 mt-6">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;