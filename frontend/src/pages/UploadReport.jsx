import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadReport } from "../services/reportService";

function UploadReport() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      return toast.error("Please select a report");
    }

    const formData = new FormData();
    formData.append("report", file);

    try {
      setLoading(true);

      const data = await uploadReport(formData);

      if (!data.success) {
        return toast.error(data.message);
      }

      toast.success("Report Uploaded Successfully");

      navigate("/reports");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl">

        <div className="text-center">

          <FaCloudUploadAlt
            size={70}
            className="mx-auto text-blue-600"
          />

          <h1 className="text-4xl font-bold mt-4">
            Upload Medical Report
          </h1>

          <p className="text-gray-500 mt-2">
            Upload PDF, JPG or PNG reports securely.
          </p>

        </div>

        <form
          onSubmit={handleUpload}
          className="mt-10"
        >

          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="w-full border rounded-xl p-3"
          />

          {file && (
            <div className="mt-4 bg-blue-50 rounded-xl p-4">
              <p className="font-semibold">
                Selected File
              </p>

              <p className="text-gray-600">
                {file.name}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Uploading..." : "Upload Report"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default UploadReport;