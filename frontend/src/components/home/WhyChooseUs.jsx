import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiTruck size={40} />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $100.",
  },
  {
    id: 2,
    icon: <FiShield size={40} />,
    title: "Secure Payment",
    description: "Your payments are protected with industry-standard security.",
  },
  {
    id: 3,
    icon: <FiRefreshCw size={40} />,
    title: "Easy Returns",
    description: "Return products within 30 days with no hassle.",
  },
  {
    id: 4,
    icon: <FiHeadphones size={40} />,
    title: "24/7 Support",
    description: "Our support team is always here to help you.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Why Choose STYLE-FORGE?
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-14">
          We deliver quality, comfort, and premium customer experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
            >
              <div className="flex justify-center text-pink-500 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;