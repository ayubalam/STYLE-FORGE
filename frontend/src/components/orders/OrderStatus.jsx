function OrderStatus({ status }) {
  const statusStyles = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default OrderStatus;