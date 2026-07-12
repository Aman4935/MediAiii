import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentReports from "../components/dashboard/RecentReports";
import UpcomingAppointment from "../components/dashboard/UpcomingAppointment";

import { loadDashboard } from "../services/dashboardService";

import {
  FaHeartbeat,
  FaFileMedical,
  FaCalendarCheck,
  FaRobot,
} from "react-icons/fa";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await loadDashboard();

      setUser(data.user);
      setReports(data.reports || []);
      setAppointments(data.appointments || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[70vh]">

          <div className="text-center">

            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <h2 className="mt-6 text-2xl font-bold">
              Loading Dashboard...
            </h2>

          </div>

        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">

          Good Afternoon,

          <span className="text-blue-600">

            {" "}

            {user?.fullName}

          </span>

          👋

        </h1>

        <p className="text-gray-500 mt-3 text-sm md:text-lg">

          Welcome back to MediAI. Here's your healthcare overview.

        </p>

      </div>

      {/* Stat Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          icon={<FaHeartbeat />}
          title="Health Score"
          value="92%"
          subtitle="Excellent"
          color="bg-red-500"
        />

        <StatCard
          icon={<FaFileMedical />}
          title="Reports"
          value={reports.length}
          subtitle="Uploaded"
          color="bg-blue-500"
        />

        <StatCard
          icon={<FaCalendarCheck />}
          title="Appointments"
          value={appointments.length}
          subtitle="Booked"
          color="bg-green-500"
        />

        <StatCard
          icon={<FaRobot />}
          title="AI Assistant"
          value="Ready"
          subtitle="Online"
          color="bg-purple-500"
        />

      </div>

      {/* Content */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">

          <RecentReports reports={reports} />

        </div>

        <div>

          <UpcomingAppointment
            appointments={appointments}
          />

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-8">

        <QuickActions />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;