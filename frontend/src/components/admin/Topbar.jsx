import useAuth from "../../hooks/useAuth";

function Topbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md rounded-xl px-8 py-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="text-right">
        <p className="font-semibold">
          {user?.name || "Admin"}
        </p>

        <p className="text-gray-500 text-sm">
          Administrator
        </p>
      </div>
    </header>
  );
}

export default Topbar;