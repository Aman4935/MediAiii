import ReactMarkdown from "react-markdown";

function AIAnalysisModal({
  open,
  onClose,
  loading,
  analysis,
  reportName,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold">
            🤖 AI Report Analysis
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <p className="mt-2 text-gray-500">

          {reportName}

        </p>

        {loading ? (

          <div className="py-20 text-center">

            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>

            <p className="mt-6 text-xl">

              Analyzing your medical report...

            </p>

          </div>

        ) : (

          <div className="prose prose-lg max-w-none mt-8">

            <ReactMarkdown>

              {analysis}

            </ReactMarkdown>

          </div>

        )}

      </div>

    </div>
  );
}

export default AIAnalysisModal;