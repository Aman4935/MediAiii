import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";

import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileActions from "../components/profile/ProfileActions";

import { getProfile } from "../services/profileService";
import { getReports } from "../services/reportService";
import { getAppointments } from "../services/appointmentService";

function Profile() {

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const [stats, setStats] = useState({
    reports: 0,
    appointments: 0,
    aiAnalysis: 0,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      setLoading(true);

      const [profile, reports, appointments] = await Promise.all([
        getProfile(),
        getReports(),
        getAppointments(),
      ]);

      setUser(profile.user);

      setStats({
        reports: reports.reports?.length || 0,
        appointments: appointments.appointments?.length || 0,
        aiAnalysis: reports.reports?.length || 0,
      });

    } catch (error) {

      console.log(error);

      toast.error("Failed to load profile");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (
      <DashboardLayout>

        <div className="flex justify-center items-center h-[70vh]">

          <div className="text-center">

            <div className="h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="mt-6 text-2xl font-semibold">
              Loading Profile...
            </p>

          </div>

        </div>

      </DashboardLayout>
    );

  }

  return (

    <DashboardLayout>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="space-y-8"
      >

        {/* Hero */}

        <ProfileHero user={user} />

        {/* Stats */}

        <ProfileStats
          reports={stats.reports}
          appointments={stats.appointments}
          aiAnalysis={stats.aiAnalysis}
        />

        {/* Personal Info */}

        <ProfileInfo user={user} />

        {/* Actions */}

        <ProfileActions />

      </motion.div>

    </DashboardLayout>

  );

}

export default Profile;