import { Link } from "react-router-dom";
import { FaUpload, FaCalendarPlus, FaRobot } from "react-icons/fa";

const actions = [
  {
    title: "Upload Report",
    icon: <FaUpload />,
    path: "/upload-report",
    color: "bg-blue-600",
  },
  {
    title: "Book Appointment",
    icon: <FaCalendarPlus />,
    path: "/appointments",
    color: "bg-green-600",
  },
  {
    title: "Ask AI",
    icon: <FaRobot />,
    path: "/assistant",
    color: "bg-purple-600",
  },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className={`${action.color} text-white rounded-2xl p-6 hover:scale-105 transition`}
          >
            <div className="text-3xl mb-4">
              {action.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {action.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;