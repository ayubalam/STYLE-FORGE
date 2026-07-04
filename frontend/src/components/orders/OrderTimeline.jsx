function OrderTimeline({ status }) {
  const steps = [
    "Order Placed",
    "Payment Confirmed",
    "Processing",
    "Shipped",
    "Delivered",
  ];

  const getActiveStep = () => {
    switch (status) {
      case "Processing":
        return 2;
      case "Shipped":
        return 3;
      case "Delivered":
        return 4;
      default:
        return 1;
    }
  };

  const activeStep = getActiveStep();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Order Timeline
      </h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            <div
              className={`w-5 h-5 rounded-full ${
                index <= activeStep
                  ? "bg-pink-500"
                  : "bg-gray-300"
              }`}
            />

            <span
              className={`${
                index <= activeStep
                  ? "font-semibold"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTimeline;