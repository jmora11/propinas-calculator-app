import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

interface OrderTotalProps {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export const OrderTotals = ({order, tip, placeOrder} : OrderTotalProps) => {

  const subtotalAmout = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]); 
  const tipAmount = useMemo(() => subtotalAmout * tip, [subtotalAmout, tip]);
  const totalAmount = useMemo(() => subtotalAmout + tipAmount, [subtotalAmout, tipAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subtotalAmout)}</span>
        </p>

        <p>Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button className="w-full bg-black text-white font-bold mt-10 p-3 uppercase disabled:opacity-10" disabled={totalAmount === 0} onClick={placeOrder}>Guardar Orden</button>
    </>
  )
}
