import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    login({
      name: "Ayub Alam",
      email: formData.email,
      role: "user",
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Login
      </h2>

      {/* Email */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Password */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex justify-between items-center mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />

          Remember Me
        </label>

        <Link
          to="#"
          className="text-pink-500 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login */}
      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition"
      >
        Login
      </button>

      <p className="text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-pink-500 font-semibold"
        >
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;