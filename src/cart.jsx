import { useState } from "react";
import { pizzaCart } from "./pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const nuevoCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(nuevoCart);
  };

  const disminuir = (id) => {
    const nuevoCart = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);

    setCart(nuevoCart);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border p-2 mb-2"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={item.img} width="80" alt={item.name} />
            <h5 className="text-capitalize">{item.name}</h5>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span>${item.price.toLocaleString()}</span>

            <button
              className="btn btn-danger"
              onClick={() => disminuir(item.id)}
            >
              -
            </button>

            <span>{item.count}</span>

            <button
              className="btn btn-primary"
              onClick={() => aumentar(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-3">Total: ${total.toLocaleString()}</h3>

      <button className="btn btn-success mt-2">
        Pagar 💳
      </button>
    </div>
  );
};

export default Cart;