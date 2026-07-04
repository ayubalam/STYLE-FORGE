import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Create Account
      </h2>

      {/* Name */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
        />
      </div>

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
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
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
            className="w-full border rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-pink-500 outline-none"
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

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full border rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition"
      >
        Register
      </button>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-pink-500 font-semibold"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;