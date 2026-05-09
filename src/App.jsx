import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>Hacene Shop</h2>
      </nav>

      <section className="hero">
        <h1>Modern ZOHRA Tech Store</h1>
        <p>Discover premium products</p>
        <button>Shop Now</button>
      </section>

      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

    </div>
  );
}