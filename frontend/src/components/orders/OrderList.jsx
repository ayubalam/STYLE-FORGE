import OrderCard from "./OrderCard";

function OrderList({ orders }) {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}

export default OrderList;