import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, HeartPulse } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <HeartPulse
            size={34}
            className="text-blue-600"
          />

          <span className="text-2xl font-bold text-slate-800">
            Medi
            <span className="text-blue-600">
              AI
            </span>
          </span>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <NavLink
            to="/login"
            className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </NavLink>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t px-6 py-5 space-y-5">

          {navLinks.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className={({ isActive }) =>
                `block font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

          <NavLink
            to="/login"
            onClick={() =>
              setMenuOpen(false)
            }
            className="block"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={() =>
              setMenuOpen(false)
            }
            className="block bg-blue-600 text-white rounded-xl py-3 text-center"
          >
            Register
          </NavLink>

        </div>

      )}

    </header>
  );
}

export default Navbar;