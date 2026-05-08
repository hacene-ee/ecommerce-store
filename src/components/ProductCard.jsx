export default function ProductCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
  );
}