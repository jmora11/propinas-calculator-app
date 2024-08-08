import type { MenuItem } from "../types"

interface MenuItemProps {
  menuItem: MenuItem,
  addItem: (item: MenuItem) => void
}

const MenuItem = ({ menuItem, addItem }: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" onClick={() => addItem(menuItem)}>
      <p>{menuItem.name}</p>
      <p className="font-black">${menuItem.price}</p>
    </button>
  )
}

export default MenuItem;