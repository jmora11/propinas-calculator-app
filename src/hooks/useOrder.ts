import { useState } from "react"
import type { OrderItem, MenuItem } from "../types";

export const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrder = order.map((orderItem: OrderItem) => orderItem.id === item.id
        ? {...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = {...item, quantity: 1};
      setOrder([...order, newItem]);
    }
  }

  const removeItem = (id: number) => {
    setOrder(order.filter(item => item.id !== id));
  }

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}