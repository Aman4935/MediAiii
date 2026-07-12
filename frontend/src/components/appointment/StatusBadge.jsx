function StatusBadge({ status = "Pending" }) {

  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 border-yellow-300",

    Confirmed:
      "bg-green-100 text-green-700 border-green-300",

    Completed:
      "bg-blue-100 text-blue-700 border-blue-300",

    Cancelled:
      "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full border text-sm font-semibold ${
        styles[status] || styles.Pending
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;