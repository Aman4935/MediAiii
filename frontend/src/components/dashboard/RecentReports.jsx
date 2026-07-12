function RecentReports({ reports = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Reports
      </h2>

      {reports.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No reports uploaded yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {reports.map((report) => (

            <div
              key={report._id}
              className="flex justify-between items-center border-b pb-4"
            >

              <div>

                <h3 className="font-semibold text-lg">
                  {report.reportName}
                </h3>

                <p className="text-gray-500 text-sm">
                  {new Date(report.createdAt).toLocaleDateString()}
                </p>

              </div>

              <a
                href={report.reportUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View
              </a>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default RecentReports;