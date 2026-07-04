import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      status: "Processing",
      ...order,
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}