function PaymentDetails() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Payment Method
      </h2>

      <p className="text-lg">
        💳 PayPal
      </p>

      <p className="text-green-600 mt-3 font-semibold">
        Payment Successful
      </p>
    </div>
  );
}

export default PaymentDetails;