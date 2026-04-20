const CardPizza = ({ pizza }) => {
  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />

      <div className="card-body">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>

        <p className="card-text">{pizza.desc}</p>

        <p><strong>Ingredientes:</strong></p>
        <ul>
          {pizza.ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <h4 className="text-center">
          ${pizza.price.toLocaleString()}
        </h4>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-outline-dark">Ver Más 👀</button>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;