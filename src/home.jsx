import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Pizzería Mamma Mía 🍕</h1>

      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="card col-3 m-2 p-2">
            <img src={pizza.img} alt={pizza.name} width="100%" />
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price}</p>

            <h5>Ingredientes:</h5>
            <ul>
              {pizza.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>

            <button>Ver más</button>
            <button>Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;