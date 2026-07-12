import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaFileMedical,
  FaSearch,
  FaEye,
  FaDownload,
  FaTrash,
  FaRobot,
} from "react-icons/fa";

import DashboardLayout from "../components/layout/DashboardLayout";
import AIAnalysisModal from "../components/AIAnalysisModal";

import {
  getReports,
  deleteReport,
} from "../services/reportService";

import { analyzeReport } from "../services/aiService";

function MyReports() {

  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // AI States

  const [openAI, setOpenAI] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [analysis, setAnalysis] = useState("");
  const [selectedReport, setSelectedReport] = useState("");

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {

    const filtered = reports.filter((report) =>
      report.reportName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredReports(filtered);

  }, [search, reports]);

  // ================= Fetch Reports =================

  const fetchReports = async () => {

    try {

      setLoading(true);

      const data = await getReports();

      setReports(data.reports || []);
      setFilteredReports(data.reports || []);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load reports");

    } finally {

      setLoading(false);

    }

  };

  // ================= Delete =================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {

      const data = await deleteReport(id);

      if (data.success) {

        toast.success("Report Deleted Successfully");

        fetchReports();

      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }

  };

  // ================= AI Analyze =================

  const handleAnalyze = async (report) => {

    try {

      setOpenAI(true);

      setLoadingAI(true);

      setSelectedReport(report.reportName);

      const data = await analyzeReport(report._id);

      if (data.success) {

        setAnalysis(data.analysis);

      }

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "AI Analysis Failed"
      );

      setOpenAI(false);

    } finally {

      setLoadingAI(false);

    }

  };

  if (loading) {

    return (

      <DashboardLayout>

        <div className="text-3xl font-bold">

          Loading Reports...

        </div>

      </DashboardLayout>

    );

  }

  return (
        <DashboardLayout>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

        <h1 className="text-4xl font-bold">
          My Reports
        </h1>

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl pl-12 pr-4 py-3 w-80 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {filteredReports.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

          <FaFileMedical
            size={80}
            className="mx-auto text-gray-400"
          />

          <h2 className="text-3xl font-bold mt-5">
            No Reports Found
          </h2>

          <p className="text-gray-500 mt-3">
            Upload your first medical report.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {filteredReports.map((report) => (

            <div
              key={report._id}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {report.reportName}
                </h2>

                <p className="text-gray-500 mt-2">

                  Uploaded{" "}
                  {report.createdAt
                    ? new Date(report.createdAt).toLocaleDateString()
                    : "No Date"}

                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href={report.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl flex items-center gap-2"
                >
                  <FaEye />
                  View
                </a>

                <a
                  href={report.reportUrl}
                  download
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl flex items-center gap-2"
                >
                  <FaDownload />
                  Download
                </a>

                <button
                  onClick={() => handleAnalyze(report)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl flex items-center gap-2"
                >
                  <FaRobot />
                  Analyze
                </button>

                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl flex items-center gap-2"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

      <AIAnalysisModal
        open={openAI}
        onClose={() => setOpenAI(false)}
        loading={loadingAI}
        analysis={analysis}
        reportName={selectedReport}
      />

    </DashboardLayout>
  );
}

export default MyReports;