import {
  FaHome,
  FaFileMedical,
  FaCalendarCheck,
  FaRobot,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const menus = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "Reports",
    icon: <FaFileMedical />,
    path: "/reports",
  },
  {
    name: "Appointments",
    icon: <FaCalendarCheck />,
    path: "/appointments",
  },
  {
    name: "AI Assistant",
    icon: <FaRobot />,
    path: "/assistant",
  },
  {
    name: "Profile",
    icon: <FaUserCircle />,
    path: "/profile",
  },
];

function Sidebar({ closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}

      <div className="text-3xl font-bold text-center py-8 border-b border-slate-700">

        🏥 MediAI

      </div>

      {/* Navigation */}

      <div className="flex-1 mt-8">

        {menus.map((menu) => (

          <NavLink
            key={menu.name}
            to={menu.path}
            onClick={() => closeSidebar?.()}
            className={({ isActive }) =>
              `flex items-center gap-4 px-8 py-4 text-lg transition-all duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-gray-200"
              }`
            }
          >

            <span className="text-xl">

              {menu.icon}

            </span>

            <span>

              {menu.name}

            </span>

          </NavLink>

        ))}

      </div>

      {/* Logout */}

      <div className="border-t border-slate-700 p-6">

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 transition text-lg"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;