import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error(error));
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} width="300px" />
      <p>{pizza.desc}</p>

      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h2>Precio: ${pizza.price}</h2>
      <button className="btn btn-success">Añadir al carrito 🛒</button>
    </div>
  );
};

export default Pizza;