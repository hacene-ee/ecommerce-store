import ProductCard from "./components/ProductCard";

import products from "./data/products";

export default function App() {  

  return (
  <div>
    <h1>My Shop</h1>

    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  </div>
);
}