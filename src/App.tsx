import MenuItem from "./components/menu-items";
import OrderContent from "./components/order-content";
import OrderTotal from "./components/order-totals";
import TipPercentageForm from "./components/tip-percentage-form";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";

export default function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadoa de propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />

              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La order esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}
