export default function ItemDetail({ item }) {
  return (
    <div className="item-container">
      <div class="card">
        <img src={item.img} alt={item.name} width="200px" />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">${item.price}</p>
          <button type="button" class="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}
