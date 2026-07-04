import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="space-y-6">
            <div>
              <p className="text-gray-500">Name</p>
              <h2 className="text-2xl font-semibold">
                {user?.name}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <h2 className="text-xl">
                {user?.email}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Role</p>

              <span className="inline-block mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg">
                {user?.role || "User"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/orders"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition"
            >
              My Orders
            </Link>

            <Link
              to="/wishlist"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              className="border border-black hover:bg-black hover:text-white px-6 py-3 rounded-lg transition"
            >
              Cart
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;