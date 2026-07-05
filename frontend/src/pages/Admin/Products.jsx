import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ProductTable from "../../components/admin/ProductTable";

function Products() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />

        <div className="mt-8">
          <ProductTable />
        </div>
      </main>
    </div>
  );
}

export default Products;