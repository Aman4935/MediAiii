import { FaBell, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <header className="bg-white shadow px-4 md:px-8 h-20 flex items-center justify-between">

      {/* Search */}

      <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-72 lg:w-96">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 w-full"
        />

      </div>

      {/* Mobile Title */}

      <h2 className="md:hidden text-xl font-bold text-slate-800">
        Dashboard
      </h2>

      {/* Right */}

      <div className="flex items-center gap-4 md:gap-6">

        <button className="relative">

          <FaBell
            size={20}
            className="text-slate-700"
          />

          <span className="absolute -top-2 -right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">

            A

          </div>

          <div className="hidden sm:block">

            <h4 className="font-semibold text-sm md:text-base">

              Aman Singh

            </h4>

            <p className="text-xs md:text-sm text-gray-500">

              Patient

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;