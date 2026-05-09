export default function ProductCard(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
  );
}