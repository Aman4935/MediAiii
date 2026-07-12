import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full z-50
        transform transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0
        `}
      >
        <Sidebar
          closeSidebar={() =>
            setSidebarOpen(false)
          }
        />
      </div>

      {/* Main Content */}

      <div className="lg:ml-72">

        {/* Mobile Header */}

        <div className="lg:hidden bg-white shadow px-4 py-4 flex items-center gap-4">

          <button
            onClick={() =>
              setSidebarOpen(true)
            }
          >
            <Menu size={28} />
          </button>

          <h1 className="text-xl font-bold">

            MediAI

          </h1>

        </div>

        <Topbar />

        <main className="p-4 md:p-6 lg:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;