import OrderList from "../../components/orders/OrderList";
import EmptyOrders from "../../components/orders/EmptyOrders";
import useOrders from "../../hooks/useOrders";

function Orders() {
  const { orders } = useOrders();

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-10">
          My Orders
        </h1>

        {orders.length > 0 ? (
          <OrderList orders={orders} />
        ) : (
          <EmptyOrders />
        )}
      </div>
    </section>
  );
}

export default Orders;