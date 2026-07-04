import { useState } from "react";

function PaymentMethod() {
  const [payment, setPayment] = useState("cod");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Payment Method
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="cod"
            checked={payment === "cod"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="card"
            checked={payment === "card"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="upi"
            checked={payment === "upi"}
            onChange={(e) => setPayment(e.target.value)}
          />
          UPI
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="paypal"
            checked={payment === "paypal"}
            onChange={(e) => setPayment(e.target.value)}
          />
          PayPal
        </label>
      </div>
    </div>
  );
}

export default PaymentMethod;