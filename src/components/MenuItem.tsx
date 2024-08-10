import { Dispatch } from "react";
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer";

interface MenuItemProps {
  menuItem: MenuItem,
  dispatch: Dispatch<OrderActions>
}

const MenuItem = ({ menuItem, dispatch }: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" onClick={() => dispatch({ type: 'add-item', payload: { item: menuItem } })}>
      <p>{menuItem.name}</p>
      <p className="font-black">${menuItem.price}</p>
    </button>
  )
}

export default MenuItem;