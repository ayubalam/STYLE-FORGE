import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatsCard from "../../components/admin/StatsCard";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatsCard
            title="Revenue"
            value="$25,480"
            type="revenue"
          />

          <StatsCard
            title="Orders"
            value="154"
            type="orders"
          />

          <StatsCard
            title="Products"
            value="86"
            type="products"
          />

          <StatsCard
            title="Users"
            value="425"
            type="users"
          />
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to STYLE-FORGE Admin Dashboard
          </h2>

          <p className="text-gray-600">
            Manage products, orders, users, and analytics
            from one place.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;