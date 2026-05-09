export default function ProductCard(props) {
  return (
    <div className="product-card">

      <img
        src={props.image}
        alt={props.name}
        className="product-image"
      />

      <h3>{props.name}</h3>
      <p>${props.price}</p>

    </div>
  );
}